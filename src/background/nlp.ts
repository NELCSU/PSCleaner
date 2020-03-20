import DB from "sqlite3-helper";
import type { TextMatch, SimpleMatchedEntity, SimpleEntity } from "../typings/PSCleaner";
import {
  AgeRegEx, AgeEntity,
  BankingRegEx, BankingEntity,
  CurrencyRegEx, CurrencyEntity,
  DateRegEx, DateEntity,
  EmailRegEx, EmailEntity, 
  LocationRegEx, LocationEntity,
  NHSRegEx, NHSEntity,
  TelephoneRegEx, TelephoneEntity,
  TimeRegEx, TimeEntity, 
  URLRegEx, URLEntity 
} from "./rules/misc-regex";
import { NamesEndingRegEx, NamesEndingEntity } from "./rules/names-ending-regex";
import { NameSet, ProperNameSet, NameEntity } from "./rules/name-set";
import { EthnicitySet, EthnicityEntity } from "./rules/ethnicity-set";
import { TerritorySet, TerritoryEntity } from "./rules/territory-set";
import { SkipWordSet, SkipWordEntity } from "./rules/skip-word-set";
import { isPropercase } from "./util/text";

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

  private _trace: boolean = true;

  constructor() {
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
  public async evaluate(data: string): Promise<SimpleMatchedEntity[]> {
    let matches: SimpleMatchedEntity[] = [];
    const ages: { entity: SimpleEntity, matches: TextMatch[] } = {
      entity: AgeEntity,
      matches: this.evaluateRegEx(data, AgeRegEx)
    };
    const banking: { entity: SimpleEntity, matches: TextMatch[] } = {
      entity: BankingEntity,
      matches: this.evaluateRegEx(data, BankingRegEx)
    };
    const currency: { entity: SimpleEntity, matches: TextMatch[] } = {
      entity: CurrencyEntity,
      matches: this.evaluateRegEx(data, CurrencyRegEx)
    };
    const dates: { entity: SimpleEntity, matches: TextMatch[] } = {
      entity: DateEntity,
      matches: this.evaluateRegEx(data, DateRegEx)
    };
    const emails: { entity: SimpleEntity, matches: TextMatch[] } = {
      entity: EmailEntity,
      matches: this.evaluateRegEx(data, EmailRegEx)
    };
    const location: { entity: SimpleEntity, matches: TextMatch[] } = {
      entity: LocationEntity,
      matches: this.evaluateRegEx(data, LocationRegEx)
    };
    const namesEnding: { entity: SimpleEntity, matches: TextMatch[] } = {
      entity: NamesEndingEntity,
      matches: this.evaluateRegEx(data, NamesEndingRegEx)
    };
    const names: { entity: SimpleEntity, matches: TextMatch[] } = {
      entity: NameEntity,
      matches: this.evaluateKeyword(data, NameSet)
    };
    const properName: { entity: SimpleEntity, matches: TextMatch[] } = {
      entity: NameEntity,
      matches: this.evaluateKeyword(data, ProperNameSet, (n: string) => !isPropercase(n))
    };
    const nhs: { entity: SimpleEntity, matches: TextMatch[] } = {
      entity: NHSEntity,
      matches: this.evaluateRegEx(data, NHSRegEx)
    };
    const tel: { entity: SimpleEntity, matches: TextMatch[] } = {
      entity: TelephoneEntity,
      matches: this.evaluateRegEx(data, TelephoneRegEx)
    };
    const times: { entity: SimpleEntity, matches: TextMatch[] } = {
      entity: TimeEntity,
      matches: this.evaluateRegEx(data, TimeRegEx)
    };
    const url: { entity: SimpleEntity, matches: TextMatch[] } = {
      entity: URLEntity,
      matches: this.evaluateRegEx(data, URLRegEx)
    };
    const eth: { entity: SimpleEntity, matches: TextMatch[] } = {
      entity: EthnicityEntity,
      matches: this.evaluateKeyword(data, EthnicitySet)
    };
    const territory: { entity: SimpleEntity, matches: TextMatch[] } = {
      entity: TerritoryEntity,
      matches: this.evaluateKeyword(data, TerritorySet)
    };
    const skipWord: { entity: SimpleEntity, matches: TextMatch[] } = {
      entity: SkipWordEntity,
      matches: this.evaluateKeyword(data, SkipWordSet)
    };
    matches = this._sortMatches(data, emails, dates, ages, banking, currency, location, nhs, tel, times, url, eth, namesEnding, territory, skipWord, names, properName);
    return Promise.resolve(matches);
  }

  public evaluateKeyword(data: string, keyword: Set<string>, testFn?: Function): TextMatch[] {
    const re: RegExp = new RegExp(/[\w\'\‘\’\`]+/, "gmi");
    const result: TextMatch[] = [];
    let m: RegExpExecArray | null;
    let word: string, passed: boolean;
    while ((m = re.exec(data)) !== null) {
      word = m[0].replace(/[\'\‘\’\`]/g, "").toLowerCase();
      if (keyword.has(word)) {
        passed = true;
        if (testFn && testFn(m[0])) {
          passed = false;
        }
        if (passed) {
          result.push({
            end: m.index + m[0].length - 1,
            id: this._id(m[0]),
            length: m[0].length,
            start: m.index,
            value: m[0]
          });
        }
      }
    }
    return result;
  }

  public evaluateRegEx(data: string, re: RegExp[]): TextMatch[] {
    const result: any[] = [];
    re.forEach((r: RegExp) => {
      let m: RegExpExecArray | null;
      while ((m = r.exec(data)) !== null) {
        result.push({
          end: m.index + m[0].length - 1,
          id: this._id(m[0]),
          length: m[0].length,
          start: m.index,
          value: m[0]
        });
      }
    });
    return result;
  }

  /**
   * Refreshes internal data structures
   */
  public async init(): Promise<void> {
    return;
  }

  /**
   * Returns text with sensitive values removed
   * @param data - body of text to match and replace 
   */
  public replace(data: string, matches: SimpleMatchedEntity[]): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        for (let i = matches.length - 1; i > -1; --i) {
          let m = matches[i];
          const mask: string = `**${m.entity.mask}` + (this.trace ? ` [${m.match.id}]` : ``) + `**`;
          data = data.substring(0, m.match.start) + mask + data.substring(m.match.end + 1, data.length);
        }
        resolve(data);
      }
      catch (err) {
        reject(err);
      }
    });
  }

  private _id(value: string): number {
    let sum: number = 0;
    for (let i = 0; i < value.length; i++) {
      sum += value.charCodeAt(i);
    }
    return sum;
  }

  private _join(curr: SimpleMatchedEntity, next: SimpleMatchedEntity, originalText: string): SimpleMatchedEntity {
    let conjunction: string = originalText.substr(curr.match.end + 1, next.match.start - curr.match.end - 1);
    if (conjunction === "" && curr.match.value[curr.match.length - 1] !== " " && curr.match.length === 1) {
      conjunction = " ";
    }
    curr.match.value += conjunction + next.match.value;
    curr.entity = next.entity;
    curr.entity.discard = 0;
    curr.match.length = curr.match.value.length;
    curr.match.end = next.match.end;
    return curr;
  }

  private _joinable(curr: SimpleMatchedEntity, next: SimpleMatchedEntity): boolean {
    const matchingDomains: boolean = next.entity.domain === curr.entity.domain;
    const currIsJoinable: boolean = curr.entity.joinable === 1;
    const alignedInText: boolean = (next.match.start > curr.match.end) && (next.match.start <= (curr.match.end + 2));
    return alignedInText && matchingDomains && currIsJoinable;
  }

  private _sortMatches(data: string, ...args: any): SimpleMatchedEntity[] {
    const result: SimpleMatchedEntity[] = [];
    const v: SimpleMatchedEntity[] = [];

    args.forEach((arg: { entity: SimpleEntity, matches: TextMatch[] }) => {
      arg.matches.forEach((match: TextMatch) => {
        v.push({ entity: arg.entity, match: match });
      });
    });

    v.sort((a, b) => {
      return a.match.start < b.match.start
        ? -1 
        : a.match.start > b.match.start
          ? 1 
          : 0;
    }).sort((a, b) => {
      return a.match.start === b.match.start && a.entity.order < b.entity.order
        ? -1 
        : a.match.start === b.match.start && a.entity.order > b.entity.order
          ? 1 
          : 0;
    });

    let current: SimpleMatchedEntity, peek: SimpleMatchedEntity, cursor: number = 0;

    while (v.length > 0) {
      current = v.shift() as SimpleMatchedEntity;
      let skip: boolean = cursor >= current.match.end;
      let lookAhead: boolean = v.length > 0 && !skip;
      while (lookAhead) {
        lookAhead = false;
        peek = v[0];
        if (cursor > current.match.start) {
          // is cursor beyond start of current entity? Yes => skip
          skip = true;
        } else if (peek.match.start === current.match.start && peek.match.end === current.match.end) {
          if (current.entity.type === "regular expression") {
            skip = true;
          } else {
            v.shift();
            lookAhead = v.length > 0;
          }
        } else if (peek.match.start >= current.match.start && peek.match.start <= current.match.end) {
          // two adjacent entities have some overlap ...
          if (peek.match.length > current.match.length) {
            // the next entity selects more than the current, so drop the current
            skip = true;
          } else { // drop the next entity, we can't have overlaps
            v.shift();
            lookAhead = v.length > 0;
          }
        }
      }
      if (!skip) {
        cursor = current.match.end > cursor ? current.match.end : cursor;
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
        if (canJoin && peek.match.length > 1) {
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