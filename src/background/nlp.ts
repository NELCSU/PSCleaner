import DB, { DataObject } from "sqlite3-helper";
import posTagger from "wink-pos-tagger";
import { Entity, MatchedEntity, SearchTermResult, WordPosition } from "../typings/PSCleaner";
import { Entities } from "./entities";

/**
 * ### Natural language processing services
 */
export class NLP {
  public get sensitivity(): number {
    return this._sensitivity;
  };

  public set sensitivity(n: number) {
    this._sensitivity = n;
    DB().run("UPDATE AppSettings SET value = ? WHERE field = 'NLP_SENSITIVITY'", this._sensitivity);
  }

  public get trace(): boolean {
    return this._trace;
  };

  public set trace(n: boolean) {
    this._trace = n;
    DB().run("UPDATE AppSettings SET value = ? WHERE field = 'NLP_TRACE'", this._trace);
  }

  private _pos: posTagger;
  private _sensitivity: number = 1;
  private _sensitivityLevels: string[] = [
    "|NN|NNS|NNP|NNPS|FW|PRP|PRP$|IN|CC|VB|VBG|JJ|JJR|JJS|TO|",
    "|NN|NNS|NNP|NNPS|FW|PRP|PRP$|IN|CC|VB|VBG|JJ|JJR|JJS|TO|RB|MD|VBP|DT|WDT|",
    "|NN|NNS|NNP|NNPS|FW|PRP|PRP$|IN|CC|VB|VBG|JJ|JJR|JJS|TO|RB|MD|VBP|VBD|VBN|VBZ|DT|WDT|"
  ];
  private _trace: boolean = true;

  constructor() {
    this._pos = posTagger();

    DB().queryFirstRow(`SELECT value FROM AppSettings WHERE field = 'NLP_SENSITIVITY'`)
      .then(async row => {
        if (row) {
          this._sensitivity = row.value;
        } else {
          DB().insert("AppSettings", { field: "NLP_SENSITIVITY", value: this._sensitivity });
        }
      });

    DB().queryFirstRow(`SELECT value FROM AppSettings WHERE field = 'NLP_TRACE'`)
      .then(async row => {
        if (row) {
          this._trace = row.value === "1" ? true : false;
        } else {
          DB().insert("AppSettings", { field: "NLP_TRACE", value: this._trace });
        }
      });
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
    const words: WordPosition[] = await this.getWordPositions(data);
    return Promise.all([ent_re, ent_st, ent_mt, words])
      .then(async entities => {
        const match_re = await this._runRegExpressions(data, entities[0]);
        const match_st = await this._runTerms(data, entities[3], entities[1]);
        const match_mt = await this._runTerms(data, entities[3], entities[2]);
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
    let lastWord: WordPosition;
    let lastModal: boolean = false;
    tags.forEach((tag: Tag) => {
      const start: number = data.indexOf(tag.value, cursor);
      const len: number = tag.value.length;
      const end: number = start + len - 1;
      cursor = end;
      if (tag.tag === "word") {
        if (this._sensitivityLevels[this.sensitivity].indexOf(`|${tag.pos}|`) > -1) {
          if (tag.pos === "RB" && lastWord && lastWord.end + 1 === start) {
            const n: number = words.length - 1;
            words[n].value += tag.value;
            words[n].end = end;
            words[n].length += len;
          } else if (lastModal && tag.pos.indexOf("VB") > -1) {
            // account for things like "will act"
            words.pop();
          } else {
            lastWord = {
              value: tag.value,
              pos: tag.pos,
              start: start,
              end: end,
              length: len
            };
            words.push(lastWord);
          }
          lastModal = tag.pos === "MD";
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
          const mask: string = `**${m.entity.mask}` + (this.trace ? ` [${m.id}]` : ``) + `**`;
          data = data.substring(0, m.start) + mask + 
            data.substring(m.end + 1, data.length);
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
    return (next.start > curr.end && next.start <= curr.end + 2 && next.entity.domain === curr.entity.domain && curr.entity.joinable === 1);
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
          id,
          '${word.value.replace(/\'/g, "''")}' AS original_term,
          keyword,
          ${word.start} AS start,
          '${word.pos}' AS pos
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
          id,
          '${word.value.replace(/\'/g, "''")}' AS keyword, 
          ${word.start} AS start,
          '${word.pos}' AS pos
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
          id: 0,
          value: m[0],
          start: m.index,
          pos: "regex",
          end: m.index + m[0].length - 1,
          length: m[0].length
        });
      }
    })
    return Promise.resolve(r);
  }

  private async _runTerms(data: string, words: WordPosition[], entities: Entity[]): Promise<MatchedEntity[]> {
    const queue: Promise<MatchedEntity[]>[] = [];
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
        const inspect: string = test.substr(term.start, srch.length);
        if (inspect === srch) {
          if (added_check) {
            const re = new RegExp("\\b" + srch + "\\b", "gmi");
            added_check = !re.test(test);
          }
          if (!added_check) {
            r.push({
              entity: entity,
              id: term.id,
              value: value,
              start: term.start,
              pos: term.pos,
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
        } else if (peek.start === current.start && peek.end === current.end) {           
          if (current.entity.type === "Regular expression") {
            skip = true;
          } else {
            values.shift();
            lookAhead = values.length > 0;
          }
        } else if (peek.start >= current.start && peek.start <= current.end) {
          // two adjacent entities have some overlap ...
          if (peek.length > current.length) {
            // the next entity selects more than the current, so drop the current
            skip = true;
          } else { // drop the next entity, we can't have overlaps
            values.shift();
            lookAhead = values.length > 0;
          }
        }
      }
      if (!skip) {
        cursor = current.end > cursor ? current.end : cursor;
        if (current.entity.discard === 0) {
          result.push(current);
        }
      }
    }

    if (result.length > 1) {
      for (let i = result.length -1; i > 0; i--) {
        let peek = result[i];
        let current = result[i -1];
        if (this._joinable(current, peek)) {
          result[i -1] = this._join(current, peek, data);
          result.splice(i, 1);
          --i;
        }
      }
    }

    return result;
  }
}