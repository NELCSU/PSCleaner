import DB, { DataObject } from "sqlite3-helper";
import type { Entity, MatchedEntity, RegExpEntity, SearchTerm, SearchTermResult, WordPosition } from "../typings/PSCleaner";
import { Entities } from "./entities";
import { deepCopy } from "./util/deepCopy";
import { LocationDesignator } from "./rules/location-designation";
import { Territory } from "./rules/territory";
import { isApostrophe } from "./util/text";

/**
 * ### Natural language processing services
 */
export class NLP {
  public get trace(): boolean {
    return this._trace;
  }

  public set trace(n: boolean) {
    this._trace = n;
    DB().run("UPDATE AppSettings SET value = ? WHERE field = 'NLP_TRACE'", this._trace);
  }

  private _ent_mt: Entity[] = [];
  private _ent_re: RegExpEntity[] = [];
  private _ent_st: Entity[] = [];
  private _names: Map<string, SearchTerm> = new Map();
  private _trace: boolean = true;

  constructor() {
    this.init();

    DB().queryFirstRow(`SELECT value FROM AppSettings WHERE field = 'NLP_TRACE'`)
      .then(async (row: any) => {
        if (row) {
          this._trace = row.value === "1" ? true : false;
        } else {
          DB().insert("AppSettings", { field: "NLP_TRACE", value: this._trace });
        }
      });
  }

  /**
   * Returns list of matched entities
   * @param data - body of text to evaluate
   */
  public async evaluate(data: string): Promise<MatchedEntity[]> {
    const words: WordPosition[] = await this.getWordPositions(data);
    return Promise.all([words])
      .then(async entities => {
        const match_re = await this._runRegExpressions(data);
        const match_st = await this._runTerms(data, entities[0], this._ent_st);
        const match_mt = await this._runTerms(data, entities[0], this._ent_mt);
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
   * @param data - body of text to evaluate
   */
  public async getWordPositions(data: string): Promise<WordPosition[]> {
    const re = new RegExp(/[\w\'\‘\’\`]+/, "gmi");
    const words: WordPosition[] = [];
    let a: RegExpExecArray | null;
    while ((a = re.exec(data)) !== null) {
      const word: string = a[0];
      const w = {
        value: word,
        pos: "",
        predicate: word.replace(/[\'\‘\’\`]/g, "").toLowerCase(),
        start: re.lastIndex - word.length,
        end: re.lastIndex - 1,
        length: word.length
      };
      words.push(w);
    }

    /*
    
        const tags: Tag[] = this._pos.tagSentence(data);
        let cursor: number = 0;
        let lastWord: WordPosition;
        let lastModal: boolean = false;
        let lastSymbol: string = "";
        tags.forEach((tag: Tag) => {
          const start: number = data.indexOf(tag.value, cursor);
          const len: number = tag.value.length;
          const end: number = start + len - 1;
          cursor = end;
          if (tag.tag === "word") {
            const n: number = words.length - 1;
            if ((isApostrophe(lastSymbol)) && (tag.value === "t" || len > 1) && (words[n].end + 1 === start - 1)) {
              words[n].value += lastSymbol + tag.value;
              words[n].predicate = words[n].value.replace(/[\'\’\`]/g, "").toLowerCase();
              words[n].end = end;
              words[n].length = words[n].value.length;
            } else if (lastSymbol && len === 1 && (
              words[n].value.indexOf(".") > -1 ||
              words[n].value.indexOf("&") > -1
            )) {
              words[n].value += tag.value;
              words[n].predicate = words[n].value.replace(/[\'\’\`]/g, "").toLowerCase();
              words[n].end = end;
              words[n].length += len;
            } else if (tag.pos === "RB" && lastWord && (lastWord.end + 1) === start) {
              words[n].value += tag.value;
              words[n].predicate = words[n].value.replace(/[\'\’\`]/g, "").toLowerCase();
              words[n].end = end;
              words[n].length += len;
            } else if (tag.value === "'ve") {
              lastWord = {
                value: tag.value,
                pos: tag.pos,
                predicate: tag.value.replace(/[\'\’\`]/g, "").toLowerCase(),
                start: start,
                end: end,
                length: len
              };
            } else if (lastModal && tag.pos.indexOf("VB") > -1) {
              // account for things like "will act"
              words.pop();
              lastWord = {
                value: tag.value,
                pos: tag.pos,
                predicate: tag.value.replace(/[\'\’\`]/g, "").toLowerCase(),
                start: start,
                end: end,
                length: len
              };
              words.push(lastWord);
            } else {
              if (!(tag.value === "s" && isApostrophe(lastSymbol))) {
                lastWord = {
                  value: tag.value,
                  pos: tag.pos,
                  predicate: tag.value.replace(/[\'\’\`]/g, "").toLowerCase(),
                  start: start,
                  end: end,
                  length: len
                };
                words.push(lastWord);
              }
            }
            lastModal = tag.pos === "MD";
            lastSymbol = "";
          } else if (tag.normal === "." || tag.normal === "&") {
            if (lastWord && lastWord.length < 3) {
              const n: number = words.length - 1;
              words[n].value += tag.value;
              words[n].predicate = words[n].value.replace(/[\'\’\`]/g, "").toLowerCase();
              words[n].end = end;
              words[n].length += len;
              lastWord = {
                value: tag.value,
                pos: tag.pos,
                predicate: tag.value.replace(/[\'\’\`]/g, "").toLowerCase(),
                start: start,
                end: end,
                length: len
              };
            }
            lastSymbol = tag.normal;
          } else if (isApostrophe(tag.normal)) {
            lastSymbol = tag.normal;
          }
        });
        */
    return words;
  }

  /**
   * Refreshes internal data structures
   */
  public async init(): Promise<void> {
    await Entities.getList("Regular expression")
      .then(ent => {
        this._ent_re = [];
        ent.forEach(async (ent: Entity) => {
          if (ent.enabled === 1) {
            let re = new RegExp(ent.reg_ex, "gmi");
            this._ent_re.push({
              entity: deepCopy(ent),
              re: re
            });
          }
        });
      });

    this._ent_st = await Entities.getList("Single term");
    this._ent_mt = await Entities.getList("Multiple term");

    const qry: string = `SELECT id, keyword, allow_suffix FROM "SkipOrJoin"`;
    DB().query(qry)
      .then((rows: any[]) => {
        rows.forEach((r: SearchTerm) => {
          this._names.set(r.keyword.toLowerCase(), r);
        });
      });
  }

  /**
   * Returns text with sensitive values removed
   * @param data - body of text to match and replace 
   */
  public replace(data: string, matches: MatchedEntity[]): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        for (let i = matches.length - 1; i > -1; --i) {
          let m = matches[i];
          const mask: string = `**${m.entity.mask}` + (this.trace ? ` [${m.search_value.id}]` : ``) + `**`;
          data = data.substring(0, m.search_value.word.start) + mask + data.substring(m.search_value.word.end + 1, data.length);
        }
        resolve(data);
      }
      catch (err) {
        reject(err);
      }
    });
  }

  private _join(curr: MatchedEntity, next: MatchedEntity, originalText: string): MatchedEntity {
    let conjunction: string = originalText.substr(curr.search_value.word.end + 1, next.search_value.word.start - curr.search_value.word.end - 1);
    if (conjunction === "" && curr.search_value.word.value[curr.search_value.word.length - 1] !== " " && curr.search_value.word.length === 1) {
      conjunction = " ";
    }
    curr.search_value.word.value += conjunction + next.search_value.word.value;
    curr.entity = next.entity;
    curr.entity.discard = 0;
    curr.search_value.word.length = curr.search_value.word.value.length;
    curr.search_value.word.end = next.search_value.word.end;
    return curr;
  }

  private _joinable(curr: MatchedEntity, next: MatchedEntity): boolean {
    const matchingDomains: boolean = next.entity.domain === curr.entity.domain;
    const currIsJoinable: boolean = curr.entity.joinable === 1;
    const alignedInText: boolean = (next.search_value.word.start > curr.search_value.word.end) && (next.search_value.word.start <= (curr.search_value.word.end + 2));
    return alignedInText && matchingDomains && currIsJoinable;
  }

  private _queryMap(words: WordPosition[]): Promise<SearchTermResult[]> {
    const result: SearchTermResult[] = [];
    words.forEach(word => {
      const r: any = this._names.get(word.predicate);
      if (r) {
        result.push({
          id: r.id,
          allow_suffix: r.allow_suffix,
          keyword: word.value.replace(/[\'\‘\’\`]/g, "''"),
          word: word
        });
      }
    });
    return Promise.resolve(result);
  }

  private _queryMultipleTerms(words: WordPosition[], entity: Entity): Promise<SearchTermResult[]> {
    const queue: Promise<DataObject[] | null>[] = [];
    words.forEach(word => {
      let p1 = word.value
        .replace(/[\'\‘\’\`]/g, "")
        .replace(/_/g, "~_")
        .replace(/%/g, "~%") + " %";
      const qry: string = `
        SELECT
          allow_suffix,
          ${word.end} AS end,
          id,
          keyword,
          ${word.length} AS length,
          '${word.pos}' AS pos,
          '${word.predicate}' AS predicate,
          ${word.start} AS start,
          '${word.value}' AS value
        FROM "${entity.label}" 
        WHERE 
          keyword LIKE ? ESCAPE '~' OR 
          keyword = ?`;
      queue.push(DB().query(qry, [p1, word.predicate]));
    });
    const result: SearchTermResult[] = [];
    return Promise.all(queue)
      .then((values: any) => {
        values.map((value: any[]) => {
          value.map((v: any) => {
            if (v !== undefined) {
              result.push({
                allow_suffix: v.allow_suffix,
                id: v.id,
                keyword: v.keyword.replace(/[\'\‘\’\`]/g, "''").toLowerCase(),
                word: {
                  end: v.end,
                  length: v.length,
                  predicate: v.predicate,
                  start: v.start,
                  value: v.value
                }
              });
            }
          });
        });
        return result;
      });
  }

  private _querySingleTerms(words: WordPosition[], entity: Entity): Promise<SearchTermResult[]> {
    const queue: Promise<DataObject[] | null>[] = [];
    words.forEach(word => {
      const qry: string = `
        SELECT
          allow_suffix,
          ${word.end} AS end,
          id,
          keyword,
          ${word.length} AS length,
          '${word.pos}' AS pos,
          '${word.predicate}' AS predicate,
          ${word.start} AS start,
          '${word.value}' AS value
        FROM "${entity.label}" 
        WHERE keyword = ?`;
      queue.push(DB().queryFirstRow(qry, word.predicate));
    });
    const result: SearchTermResult[] = [];
    return Promise.all(queue)
      .then((values: any) => {
        values.map((value: any) => {
          if (value !== undefined) {
            result.push({
              allow_suffix: value.allow_suffix,
              id: value.id,
              keyword: value.keyword.replace(/[\'\‘\’\`]/g, "''").toLowerCase(),
              word: {
                end: value.end,
                length: value.length,
                predicate: value.predicate,
                start: value.start,
                value: value.value
              }
            });
          }
        });
        return result;
      });
  }

  private async _runRegExpressions(data: string): Promise<MatchedEntity[]> {
    const r: MatchedEntity[] = [];
    await this._ent_re.forEach(async (ent: RegExpEntity) => {
      let m: RegExpExecArray | null;
      while ((m = ent.re.exec(data)) !== null) {
        r.push({
          entity: deepCopy(ent.entity),
          search_value: {
            allow_suffix: 1,
            id: 0,
            keyword: m[0],
            word: {
              start: m.index,
              pos: "regex",
              predicate: m[0],
              end: m.index + m[0].length - 1,
              length: m[0].length,
              value: m[0]
            }
          }
        });
      }
    });
    return Promise.resolve(r);
  }

  private async _runTerms(data: string, words: WordPosition[], entities: Entity[]): Promise<MatchedEntity[]> {
    const queue: Promise<MatchedEntity[]>[] = [];
    entities.forEach((ent: Entity) => {
      if (ent.enabled === 1) {
        queue.push(this._searchTerms(data, words, ent));
      }
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
      ? (entity.label === "SkipOrJoin")
        ? await this._queryMap(words)
        : await this._querySingleTerms(words, entity)
      : await this._queryMultipleTerms(words, entity);
    const r: MatchedEntity[] = [];
    let test: string = data.toLowerCase().replace(/-/g, " ").replace(/[\'\‘\’\`]/g, "'");
    searchTerms.forEach((term: SearchTermResult) => {
      let value: string, added_check: boolean = false;
      value = term.keyword;
      if (term.keyword !== term.word.predicate) {
        added_check = true;
      }
      let srch = value.toLowerCase();
      if (test.indexOf(srch) > -1) {
        let inspect: string = test.substr(term.word.start, srch.length);
        if (inspect === srch) {
          if (added_check) {
            const re = new RegExp("\\b" + srch + "\\b", "gmi");
            // check that match is not part of a longer word (e.g. word boundary missed in initial check)
            inspect = test.substr(term.word.start > 0 ? term.word.start - 1 : 0, term.word.start > 0 ? srch.length + 2 : srch.length + 1);
            added_check = !re.test(inspect);
          }
          if (!added_check) {
            r.push({
              entity: deepCopy(entity),
              search_value: deepCopy(term)
            });
          }
        }
      }
    });
    return Promise.resolve(r);
  }

  private _sortAndClean(values: MatchedEntity[], data: string): MatchedEntity[] {
    const result: MatchedEntity[] = [];
    values.sort((a, b) => a.search_value.word.start < b.search_value.word.start ? -1 : a.search_value.word.start > b.search_value.word.start ? 1 : 0);
    let current: MatchedEntity, peek: MatchedEntity, cursor: number = 0;

    while (values.length > 0) {
      current = values.shift() as MatchedEntity;
      let skip: boolean = cursor >= current.search_value.word.end;
      let lookAhead: boolean = values.length > 0 && !skip;
      while (lookAhead) {
        lookAhead = false;
        peek = values[0];
        if (cursor > current.search_value.word.start) {
          // is cursor beyond start of current entity? Yes => skip
          skip = true;
        } else if (peek.search_value.word.start === current.search_value.word.start && peek.search_value.word.end === current.search_value.word.end) {
          if (current.entity.type === "Regular expression") {
            skip = true;
          } else {
            values.shift();
            lookAhead = values.length > 0;
          }
        } else if (peek.search_value.word.start >= current.search_value.word.start && peek.search_value.word.start <= current.search_value.word.end) {
          // two adjacent entities have some overlap ...
          if (peek.search_value.word.length > current.search_value.word.length) {
            // the next entity selects more than the current, so drop the current
            skip = true;
          } else { // drop the next entity, we can't have overlaps
            values.shift();
            lookAhead = values.length > 0;
          }
        }
      }
      if (!skip) {
        cursor = current.search_value.word.end > cursor ? current.search_value.word.end : cursor;
        if (current.entity.discard === 0 || current.entity.joinable === 1) {
          result.push(current);
        }
      }
    }

    if (result.length > 1) {
      for (let i = result.length - 1; i > 0; i--) {
        let peek = result[i];
        let current = result[i - 1];
        const canJoin: boolean = this._joinable(current, peek);
        if (canJoin && peek.search_value.word.length > 1) {
          result[i - 1] = this._join(current, peek, data);
          result.splice(i, 1);
          if (result[i - 1].entity.joinable !== 1 && result[i - 1].entity.discard !== 1) {
            --i;
          }
        } else if (peek.entity.discard === 1) {
          result.splice(i, 1);
        }
      }
      if (result[0].entity.discard === 1) {
        result.splice(0, 1);
      }
    } else if (result.length === 1) {
      if (result[0].entity.discard === 1) {
        result.pop();
      }
    }

    return result;
  }
}