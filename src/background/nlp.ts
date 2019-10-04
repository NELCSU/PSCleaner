import { Entity, MatchedEntity, WordPosition } from "../typings/PSCleaner";
import DB from "sqlite3-helper";
import { DataObject } from "sqlite3-helper";
import { Entities } from "./entities";
import posTagger from "wink-pos-tagger";

export class NLP {
  public pos: any;

  constructor() {
    this.pos = posTagger();
  }

  public async evaluate(data: string): Promise<MatchedEntity[]> {
    const ent_re = await Entities.getList("Regular expression");
    const ent_wl = await Entities.getList("Word list");

    return Promise.all([ent_re, ent_wl])
      .then(async entities => {
        const match_re = await this._runRegExpressions(data, entities[0]);
        const match_wl = await this._runWordLists(data, entities[1]);
        return Promise.all([match_re, match_wl])
          .then(matches => {
            const mt: MatchedEntity[] = [];
            matches.map(match => match.map(m => mt.push(m)));
            return this._sortAndClean(mt);
          });
      });
  }

  public async getWordPositions(str: string): Promise<WordPosition[]> {
    const words: WordPosition[] = [];
    const tags: any[] = this.pos.tagSentence(str);
    let cursor: number = 0;
    tags.forEach((tag: any) => {
      const start: number = str.indexOf(tag.value, cursor);
      const len: number = tag.value.length;
      const end: number = start + len - 1;
      cursor = end;
      // https://cs.nyu.edu/grishman/jet/guide/PennPOS.html
      // NN	Noun, singular or mass | NNS	Noun, plural
      // NNP	Proper noun, singular | NNPS	Proper noun, plural
      if (len > 1) {
        switch (tag.pos) {
          case "NN":
          case "NNS":
          case "NNP":
          case "NNPS":
            words.push({
              start: start,
              end: end,
              length: len
            });
            break;      
        }
      }
    });
    return words;
  }

  private async _runRegExpressions(data: string, entities: Entity[]): Promise<MatchedEntity[]> {
    const r: any[] = [];
    await entities.forEach(async (ent: Entity) => {
      let re = new RegExp(ent.reg_ex, "gi");
      let m: RegExpExecArray | null;
      while ((m = re.exec(data)) !== null) {
        r.push({
          entity: ent.name,
          entityId: ent.id,
          entityDomain: ent.domain,
          value: m[0],
          start: m.index,
          end: m.index + m[0].length,
          length: m[0].length
        });
      }
    })
    return Promise.resolve(r);
  }

  private async _runWordLists(data: string, entities: Entity[]): Promise<MatchedEntity[]> {
    const queue: Promise<MatchedEntity[]>[] = [];
    const words: WordPosition[] = await this.getWordPositions(data);    
    entities.forEach(async (ent: Entity) => {
      queue.push(this._searchWords(data, words, ent))
    });
    return Promise.all(queue)
      .then(matches => {
        const list: MatchedEntity[] = [];
        matches.map(match => match.map(m => list.push(m)));
        return Promise.resolve(list);
      });
  }

  private async _searchWords(data: string, words: WordPosition[], entity: Entity): Promise<any> {
    const queue: Promise<DataObject[] | null>[] = [];
    words.forEach(async word => {
      let searchTerm = data.substr(word.start, word.length);
      searchTerm = searchTerm.replace(/\'/g, "''");
      const qry: string = `SELECT '${searchTerm}' AS "search", ${word.start} AS "start", ${word.end} AS "end", ${word.length} AS "length" FROM "${entity.name}" WHERE "name" = ?`;
      queue.push(DB().queryFirstRow(qry, searchTerm));
    });
    const r: MatchedEntity[] = [];
    return Promise.all(queue)
      .then(values => {
        values.map((row: any) => {
          if (row) {
            r.push({
              entity: entity.name,
              entityId: entity.id,
              entityDomain: entity.domain,
              value: row.search,
              start: row.start,
              end: row.end,
              length: row.length
            });
          }
        });
        return Promise.resolve(r);
      });
  }

  private _sortAndClean(values: MatchedEntity[]): MatchedEntity[] {
    const result: MatchedEntity[] = [];
    values.sort((a, b) => a.start < b.start ? -1 : a.start > b.start ? 1 : 0);
    let current: any, peek: any, cursor: number = 0;
    while (values.length > 0) {
      current = values.shift();
      let skip: boolean = cursor >= current.end;
      let lookAhead: boolean = values.length > 0 && !skip;
      while (lookAhead) {
        lookAhead = false;
        peek = values[0];
        if (cursor > current.start) {
          // ignore current if falls within last known entity
          skip = true;
        } else if (peek.start === current.start || peek.end === current.end) {
          if (peek.length > current.length) {
            skip = true;
          } else if (peek.entityDomain === current.entityDomain) {
            values.shift();
            lookAhead = values.length > 0;
          }
        }
      }
      if (!skip) {
        cursor = current.end > cursor ? current.end : cursor;
        result.push(current);
      }
    }
    return result;
  }
}