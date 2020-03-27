import DB from "sqlite3-helper";
import type { TextMatch, MatchedEntity, Entity } from "../typings/PSCleaner";
import { 
  LocationModifierSet, LocationSuffixSet, LocationCapitalPrefixSet, LocationCapitalSuffixSet, LocationPrefixRegEx
} from "./rules/location-modifier";
import {
  AgeRegEx, BankingRegEx, CurrencyRegEx, DateRegEx, EmailRegEx, 
  LocationRegEx, NHSRegEx, TelephoneRegEx, TimeRegEx, 
  URLRegEx 
} from "./rules/misc-rules";
import { NamesEndingRegEx } from "./rules/name-ending-regex";
import {
  AgeEntity, BankingEntity, CurrencyEntity, 
  DateEntity, 
  EmailEntity, EthnicityEntity,
  LocationEntity, LocationSuffixEntity, LocationModifierEntity, LocationPrefixEntity,
  NameEntity, NamesEndingEntity, NHSEntity, SkipWordEntity,
  TelephoneEntity, TimeEntity, URLEntity
} from "./entities";
import { NameSetAD } from "./rules/name-setA-D";
import { NameSetEH } from "./rules/name-setE-H";
import { NameSetIL } from "./rules/name-setI-L";
import { NameSetMP } from "./rules/name-setM-P";
import { NameSetQT } from "./rules/name-setQ-T";
import { NameSetUZ } from "./rules/name-setU-Z";
import { ProperNameSet } from "./rules/name-capitalised";
import { EthnicitySet } from "./rules/ethnicity";
import { SkipWordSet } from "./rules/skip-word-set";
import { isPropercase } from "./util/text";
import { deepCopy } from "./util/deepCopy";

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
  public async evaluate(data: string): Promise<MatchedEntity[]> {
    let matches: MatchedEntity[] = [];

    const ages: { entity: Entity, matches: TextMatch[] } = {
      entity: AgeEntity,
      matches: this.evaluateRegEx(data, AgeRegEx)
    };

    const banking: { entity: Entity, matches: TextMatch[] } = {
      entity: BankingEntity,
      matches: this.evaluateRegEx(data, BankingRegEx)
    };

    const currency: { entity: Entity, matches: TextMatch[] } = {
      entity: CurrencyEntity,
      matches: this.evaluateRegEx(data, CurrencyRegEx)
    };

    const dates: { entity: Entity, matches: TextMatch[] } = {
      entity: DateEntity,
      matches: this.evaluateRegEx(data, DateRegEx)
    };

    const emails: { entity: Entity, matches: TextMatch[] } = {
      entity: EmailEntity,
      matches: this.evaluateRegEx(data, EmailRegEx)
    };

    const location: { entity: Entity, matches: TextMatch[] } = {
      entity: LocationEntity,
      matches: this.evaluateRegEx(data, LocationRegEx)
    };

    const locationModifier: { entity: Entity, matches: TextMatch[] } = {
      entity: LocationModifierEntity,
      matches: this.evaluateKeyword(data, null, LocationModifierSet)
    };

    const namesEnding: { entity: Entity, matches: TextMatch[] } = {
      entity: NamesEndingEntity,
      matches: this.evaluateRegEx(data, NamesEndingRegEx)
    };

    const names: { entity: Entity, matches: TextMatch[] } = {
      entity: NameEntity,
      matches: this.evaluateKeyword(data, null, NameSetAD, NameSetEH, NameSetIL, NameSetMP, NameSetQT, NameSetUZ)
    };

    const properName: { entity: Entity, matches: TextMatch[] } = {
      entity: NameEntity,
      matches: this.evaluateKeyword(data, (n: string) => !isPropercase(n), ProperNameSet)
    };

    const nhs: { entity: Entity, matches: TextMatch[] } = {
      entity: NHSEntity,
      matches: this.evaluateRegEx(data, NHSRegEx)
    };

    const tel: { entity: Entity, matches: TextMatch[] } = {
      entity: TelephoneEntity,
      matches: this.evaluateRegEx(data, TelephoneRegEx)
    };

    const times: { entity: Entity, matches: TextMatch[] } = {
      entity: TimeEntity,
      matches: this.evaluateRegEx(data, TimeRegEx)
    };

    const url: { entity: Entity, matches: TextMatch[] } = {
      entity: URLEntity,
      matches: this.evaluateRegEx(data, URLRegEx)
    };

    const eth: { entity: Entity, matches: TextMatch[] } = {
      entity: EthnicityEntity,
      matches: this.evaluateKeyword(data, null, EthnicitySet)
    };

    const locationSuffix: { entity: Entity, matches: TextMatch[] } = {
      entity: LocationSuffixEntity,
      matches: this.evaluateKeyword(data, null, LocationSuffixSet)
    };

    const locationCapitalSuffix: { entity: Entity, matches: TextMatch[] } = {
      entity: LocationSuffixEntity,
      matches: this.evaluateKeyword(data, (n: string) => !isPropercase(n), LocationCapitalSuffixSet)
    };

    const locationPrefix: { entity: Entity, matches: TextMatch[] } = {
      entity: LocationPrefixEntity,
      matches: this.evaluateRegEx(data, LocationPrefixRegEx)
    };

    LocationPrefixEntity.order = 1;
    const locationCapitalPrefix: { entity: Entity, matches: TextMatch[] } = {
      entity: LocationPrefixEntity,
      matches: this.evaluateKeyword(data, (n: string) => !isPropercase(n), LocationCapitalPrefixSet)
    };

    SkipWordEntity.order = 2;
    const skipWord: { entity: Entity, matches: TextMatch[] } = {
      entity: SkipWordEntity,
      matches: this.evaluateKeyword(data, null, SkipWordSet)
    };

    matches = this._sortMatches(data, 
      ages, banking, currency, dates, emails, eth, 
      location, locationModifier, 
      locationSuffix, locationCapitalSuffix, 
      locationPrefix, locationCapitalPrefix,
      names, namesEnding, nhs, properName, 
      tel, times, url,
      skipWord
    );
    return Promise.resolve(matches);
  }

  public evaluateKeyword(data: string, testFn?: Function | null, ...keywords: any): TextMatch[] {
    const re: RegExp = new RegExp(/[\w\'\‘\’\`]+/, "gmi");
    const result: TextMatch[] = [];
    let m: RegExpExecArray | null;
    let word: string, passed: boolean;
    while ((m = re.exec(data)) !== null) {    
      word = m[0].replace(/[\'\‘\’\`](?:ll|re|s|ve)/g, "").toLowerCase().replace(/[\'\‘\’\`]/g, "");
      let l: number = keywords.length;
      for (let i = 0; i < l; i++) {
        if (m && keywords[i].has(word)) {
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
          break;
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
  public replace(data: string, matches: MatchedEntity[]): Promise<string> {
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

  private _join(curr: MatchedEntity, next: MatchedEntity, originalText: string): MatchedEntity {
    let conjunction: string = originalText.substr(curr.match.end + 1, next.match.start - curr.match.end - 1);
    if (conjunction === "" && curr.match.value[curr.match.length - 1] !== " " && curr.match.length === 1) {
      conjunction = " ";
    }
    curr.match.value += conjunction + next.match.value;
    curr.entity = deepCopy(next.entity);
    curr.entity.discard = 0;
    curr.match.length = curr.match.value.length;
    curr.match.end = next.match.end;
    return curr;
  }

  private _joinable(curr: MatchedEntity, next: MatchedEntity): boolean {
    const matchingDomains: boolean = next.entity.domain === curr.entity.domain;
    const currIsJoinable: boolean = curr.entity.joinable === 1;
    const alignedInText: boolean = (next.match.start > curr.match.end) && (next.match.start <= (curr.match.end + 2));
    let outcome: boolean = alignedInText && matchingDomains && currIsJoinable;
    if (matchingDomains && alignedInText) {
      outcome = curr.entity.suffix === 0 && next.entity.prefix !== 1;
    }
    return outcome;
  }

  private _sortMatches(data: string, ...args: any): MatchedEntity[] {
    const result: MatchedEntity[] = [];
    const v: MatchedEntity[] = [];

    args.forEach((arg: { entity: Entity, matches: TextMatch[] }) => {
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

    let current: MatchedEntity, peek: MatchedEntity, cursor: number = 0;

    while (v.length > 0) {
      current = v.shift() as MatchedEntity;
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