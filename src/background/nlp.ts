import { Entities } from "./entities";
import DB from "sqlite3-helper";
import { DataObject } from "sqlite3-helper";
import { Entity, MatchedEntity, SearchTermResult, WordPosition } from "../typings/PSCleaner";
import posTagger from "wink-pos-tagger";

/**
 * ### Natural language processing services
 */
export class NLP {
  private _pos: posTagger;

  constructor() {
    this._pos = posTagger();
  }

  /**
   * Returns list of matched entities
   * @param {string} data - body of text to evaluate
   * @return {Promise<MatchedEntity[]>}
   */
  public async evaluate(data: string): Promise<MatchedEntity[]> {
    const ent_re = await Entities.getList("Regular expression");
    const ent_st = await Entities.getList("Single term");
    const ent_mt = await Entities.getList("Multiple term");

    data = data.toLowerCase();
    return Promise.all([ent_re, ent_st, ent_mt])
      .then(async entities => {
        const match_re = await this._runRegExpressions(data, entities[0]);
        const match_st = await this._runTerms(data, entities[1]);
        const match_mt = await this._runTerms(data, entities[2]);
        return Promise.all([match_re, match_st, match_mt])
          .then((matches: MatchedEntity[][]) => {
            const mt: MatchedEntity[] = [];
            matches.map((match: MatchedEntity[]) => {
              match.map((m: MatchedEntity) => mt.push(m));
            });
            return this._sortAndClean(mt);
          });
      });
  }

  /**
   * Returns list of word positions
   * @param {string} data - body of text to evaluate
   * @return {Promise<WordPosition[]>}
   */
  public async getWordPositions(data: string): Promise<WordPosition[]> {
    const words: WordPosition[] = [];
    const tags: Tag[] = this._pos.tagSentence(data);
    let cursor: number = 0;
    tags.forEach((tag: Tag) => {
      const start: number = data.indexOf(tag.value, cursor);
      const len: number = tag.value.length;
      const end: number = start + len - 1;
      cursor = end;
      // https://cs.nyu.edu/grishman/jet/guide/PennPOS.html
      // NN	Noun, singular or mass | NNS	Noun, plural
      // NNP	Proper noun, singular | NNPS	Proper noun, plural
      if (len > 1) {
        switch (tag.pos) {
          case "JJ":
          case "NN":
          case "NNS":
          case "NNP":
          case "NNPS":
          case "VB":
          //case "VBD":
          //case "VBG":
          case "VBP":
            if (tag.tag === "word") {
              words.push({
                value: tag.value,
                start: start,
                end: end,
                length: len
              });
            }
            break;      
        }
      }
    });
    return words;
  }

  /**
   * Returns text with sensitive values removed
   * @param {string} data - body of text to match and replace 
   * @param {MatchedEntites[]} matches - list of matches found
   */
  public replace(data: string, matches: MatchedEntity[]): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        for (let i = matches.length - 1; i > -1; --i) {
          let m = matches[i];
          data = data.substring(0, m.start) + 
            `[${m.entity}]` + 
            data.substring(m.end + 1, data.length);
        }
        resolve(data);
      }
      catch (err) {
        reject(err);
      }
    })
  }

  private _queryMultipleTerms(data: string, words: WordPosition[], entity: Entity): Promise<SearchTermResult[]> {
    const queue: Promise<DataObject[] | null>[] = [];
    words.forEach(word => {
      word.value = word.value.replace(/\'/g, "''");
      let predicate = word.value
        .replace(/_/g, "~_")
        .replace(/%/g, "~%") + " %";
      const qry: string = `SELECT keyword, ${word.start} AS start FROM "${entity.label}" 
        WHERE keyword LIKE ? ESCAPE '~' OR keyword = ?`;
      queue.push(DB().query(qry, [predicate, word.value]));
    });
    const result: SearchTermResult[] = [];
    return Promise.all(queue)
      .then((values: any) => {
        values.map((value: SearchTermResult[]) => {          
          value.map((v: SearchTermResult | undefined) => {
            if (v !== undefined) {
              result.push(v);
            }
          });
        });
        return result;
      });
  }

  private _querySingleTerms(data: string, words: WordPosition[], entity: Entity): Promise<SearchTermResult[]> {
    const queue: Promise<DataObject[] | null>[] = [];
    words.forEach(word => {
      word.value = word.value.replace(/\'/g, "''");
      const qry: string = `SELECT keyword, ${word.start} AS start FROM "${entity.label}" WHERE keyword = ?`;
      queue.push(DB().queryFirstRow(qry, word.value));
    });
    const result: SearchTermResult[] = [];
    return Promise.all(queue)
      .then((values: any) => {
        values.map((value: SearchTermResult | undefined) => {
          if (value !== undefined) {
            result.push(value);
          }
        });
        return result;
      });
  }

  private async _runRegExpressions(data: string, entities: Entity[]): Promise<MatchedEntity[]> {
    const r: MatchedEntity[] = [];
    await entities.forEach(async (ent: Entity) => {
      let re = new RegExp(ent.reg_ex, "gmi");
      let m: RegExpExecArray | null;
      while ((m = re.exec(data)) !== null) {
        r.push({
          entity: ent.label,
          entityId: ent.id,
          entityDomain: ent.domain,
          entityChainable: ent.chainable,
          value: m[0],
          start: m.index,
          end: m.index + m[0].length,
          length: m[0].length
        });
      }
    })
    return Promise.resolve(r);
  }

  private async _runTerms(data: string, entities: Entity[]): Promise<MatchedEntity[]> {
    const queue: Promise<MatchedEntity[]>[] = [];
    const words: WordPosition[] = await this.getWordPositions(data);    
    entities.forEach((ent: Entity) => {
      queue.push(this._searchTerms(data, words, ent))
    });
    return Promise.all(queue)
      .then(matches => {
        const list: MatchedEntity[] = [];
        matches.map(match => match.map(m => list.push(m)));
        return Promise.resolve(list);
      });
  }

  private async _searchTerms(data: string, words: WordPosition[], entity: Entity): Promise<any> {
    let searchTerms: SearchTermResult[];
    if (entity.type === "Single term") {
      searchTerms = await this._querySingleTerms(data, words, entity);
    } else {
      searchTerms = await this._queryMultipleTerms(data, words, entity);
    }
    const r: MatchedEntity[] = [];
    searchTerms.forEach((term: SearchTermResult) => {
      if (data.indexOf(term.keyword.toLowerCase(), term.start) > -1) {
        r.push({
          entity: entity.label,
          entityId: entity.id,
          entityDomain: entity.domain,
          entityChainable: entity.chainable,
          value: term.keyword,
          start: term.start,
          end: term.start + term.keyword.length - 1,
          length: term.keyword.length
        });
      }
    });
    return Promise.resolve(r);
  }

  private _sortAndClean(values: MatchedEntity[]): MatchedEntity[] {
    const result: MatchedEntity[] = [];
    values.sort((a, b) => a.start < b.start ? -1 : a.start > b.start ? 1 : 0);
    let current: any, peek: MatchedEntity, cursor: number = 0;
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
          } else if (peek.entity === current.entity) {
            values.shift();
            lookAhead = values.length > 0;
          }
        } else if (peek.start === current.end + 2 
            && peek.entityDomain === current.entityDomain 
            && current.entityChainable) {
          current.end = peek.end;
          current.value += " " + peek.value;
          current.length = current.value.length;
          values.shift();
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