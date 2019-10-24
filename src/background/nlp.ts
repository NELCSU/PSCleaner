import DB, { DataObject } from "sqlite3-helper";
import posTagger from "wink-pos-tagger";
import { Entity, MatchedEntity, SearchTermResult, WordPosition } from "../typings/PSCleaner";
import { Entities } from "./entities";

/**
 * ### Natural language processing services
 */
export class NLP {
  public sensitivity: number = 1;
  
  private _pos: posTagger;
  private _sensitivity: string[] = [
    "|NN|NNS|NNP|NNPS|",
    "|NN|NNS|NNP|NNPS|JJ|VBP|RB|",
    "|NN|NNS|NNP|NNPS|JJ|VBP|VBD|VBG|VB|RB|"
  ];

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
            return this._sortAndClean(mt, data);
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
      if (len > 1) {
        if (this._sensitivity[this.sensitivity].indexOf(`|${tag.pos}|`) > -1) {
          if (tag.tag === "word") {
            words.push({
              value: tag.value,
              start: start,
              end: end,
              length: len
            });
          }
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
            m.entity.mask + data.substring(m.end + 1, data.length);
        }
        resolve(data);
      }
      catch (err) {
        reject(err);
      }
    })
  }

  private _join(curr: MatchedEntity, next: MatchedEntity, originalText: string): MatchedEntity {
    const c: MatchedEntity = curr;
    let conjunction: string = originalText.substr(c.end + 1, next.start - c.end - 1);
    if (conjunction === "") {
      conjunction = " ";
    }
    c.value += conjunction + next.value;
    c.length = c.value.length;
    c.end = next.end;
    return c;
  }

  private _joinable(curr: MatchedEntity, next: MatchedEntity): boolean {
    return (next.start > curr.end && next.start <= curr.end + 3 && next.entity.domain === curr.entity.domain && curr.entity.joinable === 1);
  }

  private _queryMultipleTerms(words: WordPosition[], entity: Entity): Promise<SearchTermResult[]> {
    const queue: Promise<DataObject[] | null>[] = [];
    words.forEach(word => {
      let p1 = word.value
        .replace(/\'/g, "")
        .replace(/_/g, "~_")
        .replace(/%/g, "~%") + " %";
      let p2 = word.value.replace(/\'/g, "");
      const qry: string = `SELECT
          '${word.value.replace(/\'/g, "''")}' AS original_term,
          keyword,
          ${word.start} AS start 
        FROM "${entity.label}" 
        WHERE keyword LIKE ? ESCAPE '~' OR keyword = ?`;
      queue.push(DB().query(qry, [p1, p2]));
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

  private _querySingleTerms(words: WordPosition[], entity: Entity): Promise<SearchTermResult[]> {
    const queue: Promise<DataObject[] | null>[] = [];
    words.forEach(word => {
      const predicate: string = word.value.replace(/\'/g, "");
      const qry: string = `SELECT 
          '${word.value.replace(/\'/g, "''")}' AS keyword, 
          ${word.start} AS start 
        FROM "${entity.label}" WHERE keyword = ?`;
      queue.push(DB().queryFirstRow(qry, predicate));
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
          entity: ent,
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
    searchTerms = (entity.type === "Single term")
      ? await this._querySingleTerms(words, entity)
      : await this._queryMultipleTerms(words, entity);
    const r: MatchedEntity[] = [];
    let test: string = data.toLowerCase();
    searchTerms.forEach((term: SearchTermResult) => {
      let value: string, added_check: boolean = false;
      if (term.original_term === undefined) {
        value = term.keyword;
      } else {
        value = term.keyword.indexOf(" ") > -1
          ? term.original_term + term.keyword.substr(term.keyword.indexOf(" "), term.keyword.length)
          : term.original_term;
        added_check = true;
      }
      let srch = value.toLowerCase();
      if (test.indexOf(srch) > -1) {
        if (test.substr(term.start, srch.length) === srch) {
          if (added_check) {
            const re = new RegExp("\\b" + srch + "\\b", "gmi");
            added_check = !re.test(test);
          }
          if (!added_check) {
            r.push({
              entity: entity,
              value: value,
              start: term.start,
              end: term.start + value.length - 1,
              length: value.length
            });
          }
        }
      }
    });
    return Promise.resolve(r);
  }
  
  private _sortAndClean(values: MatchedEntity[], data: string): MatchedEntity[] {
    const result: MatchedEntity[] = [];
    values.sort((a, b) => a.start < b.start ? -1 : a.start > b.start ? 1 : 0);
    let current: MatchedEntity, peek: MatchedEntity, cursor: number = 0;
    while (values.length > 0) {
      current = values.shift() as MatchedEntity;
      let skip: boolean = cursor >= current.end;
      let lookAhead: boolean = values.length > 0 && !skip;
      while (lookAhead) {
        lookAhead = false;
        peek = values[0];
        if (cursor > current.start) {
          // is cursor beyond start of current entity? Yes => skip
          skip = true;
        } else if (peek.start >= current.start && peek.start <= current.end) {
          // two adjacent entities have some overlap ...
          if (peek.length > current.length) {
            // the next entity selects more than the current, so drop the current
            skip = true;
          } else { // drop the next entity, we can't have overlaps
            values.shift();
            lookAhead = values.length > 0;
          }
        } else if (this._joinable(current, peek)) {
          current = this._join(current, peek, data);
          values.shift();
          lookAhead = values.length > 0;
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