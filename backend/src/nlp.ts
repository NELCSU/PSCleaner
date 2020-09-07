import type { Action, Evaluation, MatchedEntity, TextMatch } from "../types/PSCleaner";
import {
  BankingEntity, CurrencyEntity, DateEntity, 
  EmailEntity, EthnicityEntity,
  LocationRegExEntity, MedicalEntity,
  NameEntity, NameRegExEntity, NHSEntity, 
  PostcodeEntity, SkipWordEntity,
  TelephoneEntity, TimeEntity, URLEntity
} from "./entities";
import { LocationPrefixRegEx, LocationRegEx, LocationMidfixRegEx } from "./rules/location";
import { RospaRegEx } from "./rules/rospa";
import { MedicalAbbrRegEx } from "./rules/medical-abbreviations";
import { MedicalTermRegEx } from "./rules/medical-terms";
import { MedicationRegEx } from "./rules/medication";
import { NamesEndingRegEx } from "./rules/name-ending-regex";
import { NameSetAD } from "./rules/name-setA-D";
import { NameSetEH } from "./rules/name-setE-H";
import { NameSetIL } from "./rules/name-setI-L";
import { NameSetMP } from "./rules/name-setM-P";
import { NameSetQT } from "./rules/name-setQ-T";
import { NameSetUZ } from "./rules/name-setU-Z";
import { ProperNameSet } from "./rules/name-capitalised";
import { ProperNameSetJoinOnly } from "./rules/name-capitalised-and";
import { 
  NameInitialRegEx, NameMiddleInitialRegEx, NamePartSet, 
  NamePrefixRegEx, NamePuralRegEx } from "./rules/name-part";
import { EthnicitySet } from "./rules/ethnicity";
import { SkipGrammarRegEx } from "./rules/skip-grammar";
import { SkipWordSet } from "./rules/skip-word-set";

const r = require("esm")(module);
const t = r("@buckneri/string");
const isPropercase = t.isPropercase;
const findEmail = t.findEmail;
const findNHSNumber = t.findNHSNumber;
const findBankingNumbers = t.findBankingNumbers;
const findCurrency = t.findCurrency;
const findUKTelephone = t.findUKTelephone;
const findURL = t.findURL;
const findUKPostcode = t.findUKPostcode;
const findDate = t.findDate;
const findTime = t.findTime;
const findOrdinal = t.findOrdinal;

const c = r("@buckneri/collections");
const deepCopy = c.deepCopy;

/**
 * ### Natural language processing services
 */
export class NLP {
  public trace: boolean = true;
  
  /**
   * Returns list of matched entities
   * @param data - body of text to evaluate
   */  
  public async evaluate(data: string): Promise<MatchedEntity[]> {
    let matches: MatchedEntity[] = [];

    const banking: Evaluation = {
      action: { discard: 0, joinable: 0, order: 1, prefix: 0, midfix: 0, suffix: 0 },
      entity: BankingEntity,
      matches: this._evalRegEx(data, findBankingNumbers)
    };

    const currency: Evaluation = {      
      action: { discard: 0, joinable: 0, order: 1, prefix: 0, midfix: 0, suffix: 0 },
      entity: CurrencyEntity,
      matches: this._evalRegEx(data, findCurrency)
    };

    const dates: Evaluation = {
      action: { discard: 0, joinable: 0, order: 1, prefix: 0, midfix: 0, suffix: 0 },
      entity: DateEntity,
      matches: this._evalRegEx(data, findDate)
    };

    const emails: Evaluation = {
      action: { discard: 0, joinable: 0, order: 1, prefix: 0, midfix: 0, suffix: 0 },
      entity: EmailEntity,
      matches: this._evalRegEx(data, findEmail)
    };

    const eth: Evaluation = {
      action: { discard: 0, joinable: 1, order: 2, prefix: 0, midfix: 0, suffix: 0 },
      entity: EthnicityEntity,
      matches: this._evalKeyword(data, null, EthnicitySet)
    };

    const householdItem: Evaluation = {
      action: { discard: 1, joinable: 0, order: 1, prefix: 0, midfix: 0, suffix: 0 },
      entity: SkipWordEntity,
      matches: this._evalRegEx(data, RospaRegEx)
    };

    const location: Evaluation = {
      action: { discard: 0, joinable: 0, order: 2, prefix: 0, midfix: 0, suffix: 0 },
      entity: LocationRegExEntity,
      matches: this._evalRegEx(data, LocationRegEx)
    };

    const postcode: Evaluation = {
      action: { discard: 0, joinable: 0, order: 2, prefix: 0, midfix: 0, suffix: 0 },
      entity: PostcodeEntity,
      matches: this._evalRegEx(data, findUKPostcode)
    };

    const locationPrefix1: Evaluation = {
      action: { discard: 1, joinable: 1, order: 3, prefix: 1, midfix: 0, suffix: 0 },
      entity: LocationRegExEntity,
      matches: this._evalRegEx(data, LocationPrefixRegEx)
    };

    const locationPrefix2: Evaluation = {
      action: { discard: 1, joinable: 1, order: 3, prefix: 1, midfix: 0, suffix: 0 },
      entity: LocationRegExEntity,
      matches: this._evalRegEx(data, findOrdinal, (n: string) => isPropercase(n))
    };

    const nameMidfix: Evaluation = {
      action: { discard: 1, joinable: 1, order: 3, prefix: 0, midfix: 1, suffix: 0 },
      entity: LocationRegExEntity,
      matches: this._evalRegEx(data, LocationMidfixRegEx)
    };

    const namesEnding: Evaluation = {
      action: { discard: 0, joinable: 1, order: 4, prefix: 0, midfix: 0, suffix: 0 },
      entity: NameRegExEntity,
      matches: this._evalRegEx(data, NamesEndingRegEx)
    };

    const names: Evaluation = {
      action: { discard: 0, joinable: 1, order: 4, prefix: 0, midfix: 0, suffix: 0 },
      entity: NameEntity,
      matches: this._evalKeyword(data, null, NameSetAD, NameSetEH, NameSetIL, NameSetMP, NameSetQT, NameSetUZ)
    };

    const properName: Evaluation = {
      action: { discard: 0, joinable: 1, order: 2, prefix: 0, midfix: 0, suffix: 0 },
      entity: NameEntity,
      matches: this._evalKeyword(data, (n: string) => isPropercase(n), ProperNameSet)
    };

    const properNameJoin: Evaluation = {
      action: { discard: 1, joinable: 1, order: 2, prefix: 0, midfix: 0, suffix: 0 },
      entity: NameEntity,
      matches: this._evalKeyword(data, (n: string) => isPropercase(n), ProperNameSetJoinOnly)
    };

    const medicalAbbr: Evaluation = {
      action: { discard: 1, joinable: 0, order: 1, prefix: 0, midfix: 0, suffix: 0 },
      entity: MedicalEntity,
      matches: this._evalRegEx(data, MedicalAbbrRegEx)
    };

    const medicalTerm: Evaluation = {
      action: { discard: 1, joinable: 0, order: 1, prefix: 0, midfix: 0, suffix: 0 },
      entity: MedicalEntity,
      matches: this._evalRegEx(data, MedicalTermRegEx)
    };

    const medication: Evaluation = {
      action: { discard: 1, joinable: 0, order: 1, prefix: 0, midfix: 0, suffix: 0 },
      entity: MedicalEntity,
      matches: this._evalRegEx(data, MedicationRegEx)
    };

    const namePrefix: Evaluation = {
      action: { discard: 1, joinable: 1, order: 3, prefix: 0, midfix: 0, suffix: 0 },
      entity: NameRegExEntity,
      matches: this._evalRegEx(data, NamePrefixRegEx)
    };

    const nameInitials: Evaluation = {
      action: { discard: 1, joinable: 1, order: 3, prefix: 1, midfix: 0, suffix: 0 },
      entity: NameRegExEntity,
      matches: this._evalRegEx(data, NameInitialRegEx)
    };

    const nameMiddleInitials: Evaluation = {
      action: { discard: 1, joinable: 1, order: 3, prefix: 0, midfix: 1, suffix: 0 },
      entity: NameRegExEntity,
      matches: this._evalRegEx(data, NameMiddleInitialRegEx)
    };

    const namePlural: Evaluation = {
      action: { discard: 1, joinable: 1, order: 3, prefix: 0, midfix: 1, suffix: 1 },
      entity: NameRegExEntity,
      matches: this._evalRegEx(data, NamePuralRegEx)
    };

    const partName: Evaluation = {
      action: { discard: 1, joinable: 1, order: 4, prefix: 0, midfix: 0, suffix: 0 },
      entity: NameEntity,
      matches: this._evalKeyword(data, null, NamePartSet)
    };

    const nhs: Evaluation = {
      action: { discard: 0, joinable: 0, order: 1, prefix: 0, midfix: 0, suffix: 0 },
      entity: NHSEntity,
      matches: this._evalRegEx(data, findNHSNumber)
    };

    const skipGrammar: Evaluation = {
      action: { discard: 1, joinable: 0, order: 2, prefix: 0, midfix: 0, suffix: 0 },
      entity: SkipWordEntity,
      matches: this._evalRegEx(data, SkipGrammarRegEx)
    };

    const skipWord: Evaluation = {
      action: { discard: 1, joinable: 0, order: 3, prefix: 0, midfix: 0, suffix: 0 },
      entity: SkipWordEntity,
      matches: this._evalKeyword(data, null, SkipWordSet)
    };

    const tel: Evaluation = {
      action: { discard: 0, joinable: 0, order: 2, prefix: 0, midfix: 0, suffix: 0 },
      entity: TelephoneEntity,
      matches: this._evalRegEx(data, findUKTelephone)
    };

    const times: Evaluation = {
      action: { discard: 0, joinable: 0, order: 1, prefix: 0, midfix: 0, suffix: 0 },
      entity: TimeEntity,
      matches: this._evalRegEx(data, findTime)
    };

    const url: Evaluation = {
      action: { discard: 0, joinable: 0, order: 1, prefix: 0, midfix: 0, suffix: 0 },
      entity: URLEntity,
      matches: this._evalRegEx(data, findURL)
    };

    matches = this._sortMatches(data, 
      banking, currency, dates, 
      emails, eth, householdItem,
      location, locationPrefix1, locationPrefix2, 
      medication, medicalAbbr, medicalTerm,
      namePrefix, nameMidfix, nameInitials, 
      nameMiddleInitials, namePlural, names, namesEnding, nhs,
      postcode, properName, properNameJoin, partName,
      tel, times, url,
      skipGrammar, skipWord
    );
    return Promise.resolve(matches);
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

  private _evalKeyword(data: string, testFn?: Function | null, ...keywords: any): TextMatch[] {
    data = data.replace("_", " ");
    const re: RegExp = new RegExp(/\b[a-z]+\b/, "gmi");
    const result: TextMatch[] = [];
    let m: RegExpExecArray | null;
    let word: string, fullword: string, passed: boolean;
    while ((m = re.exec(data)) !== null) {
      word = m[0].toLowerCase();
      let l: number = keywords.length;
      for (let i = 0; i < l; i++) {
        if (m && keywords[i].has(word)) {
          fullword = m[0];
          passed = true;
          if (testFn) {
            passed = testFn(fullword);
          }
          if (passed) {
            result.push({
              end: m.index + m[0].length - 1,
              how: "keyword match",
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

  private _evalRegEx(data: string, re: any, testFn?: Function | null): TextMatch[] {
    const result: any[] = [];
    let passed: boolean;
    if (typeof re === "function") {
      re(data).forEach((m: RegExpExecArray) => {
        passed = true;
        if (testFn) {
          passed = testFn(m[0]);
        }
        if (passed) {
          result.push({
            end: m.index + m[0].length - 1,
            how: re.name,
            id: this._id(m[0]),
            length: m[0].length,
            start: m.index,
            value: m[0]
          });
        }
      });
    } else {
      re.forEach((r: RegExp) => {
        let m: RegExpExecArray | null;
        while ((m = r.exec(data)) !== null) {
          passed = true;
          if (testFn) {
            passed = testFn(m[0]);
          }
          if (passed) {
            result.push({
              end: m.index + m[0].length - 1,
              how: r.source,
              id: this._id(m[0]),
              length: m[0].length,
              start: m.index,
              value: m[0]
            });
          }
        }
      });
    }
    return result;
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
    const d: Action = deepCopy(curr.action);
    d.discard = 0;
    curr.action = d;
    curr.match.length = curr.match.value.length;
    curr.match.end = next.match.end;
    curr.action.prefix = curr.action.midfix = curr.action.suffix = 0;
    return curr;
  }

  private _joinable(curr: MatchedEntity, next: MatchedEntity): boolean {
    const matchingDomains: boolean = next.entity.domain === curr.entity.domain;
    const currIsJoinable: boolean = curr.action.joinable === 1;
    const alignedInText: boolean = (next.match.start > curr.match.end) && (next.match.start <= (curr.match.end + 2));
    let outcome: boolean = alignedInText && matchingDomains && currIsJoinable;
    if (matchingDomains && alignedInText) {
      outcome = curr.action.suffix === 0 && next.action.prefix !== 1;
    }
    return outcome;
  }

  private _removeOrphans(list: MatchedEntity[]) {
    let pre: MatchedEntity | undefined, mid: MatchedEntity | undefined, suf: MatchedEntity | undefined;

    const neighbors = (a: MatchedEntity, b: MatchedEntity) => a.match.end + 2 >= b.match.start && a.entity.domain === b.entity.domain;
    const nofix = (e: MatchedEntity) => e.action.prefix === 0 && e.action.midfix === 0 && e.action.suffix === 0;
    const wipe = (e: MatchedEntity) => {
      e.action = deepCopy(e.action);
      e.action.prefix = e.action.midfix = e.action.suffix = 0;
    };
    const okPrefix  = (e: MatchedEntity) => nofix(e) || e.action.prefix;
    const okMidfix = (e: MatchedEntity) => nofix(e) || e.action.midfix;
    const okSuffix = (e: MatchedEntity) => nofix(e) || e.action.suffix;
    
    let i = list.length - 1;
    while (i > -1) {
      if (i > list.length - 1) {
        i = list.length - 1;
      }
      suf = list[i];
      mid = i - 1 > -1 ? list[i-1] : undefined;
      pre = i - 2 > -1 ? list[i-2] : undefined;
      
      if (mid && neighbors(mid, suf)) {
        if (pre && neighbors(pre, mid)) { // evaluate a-b-c
          if (!okSuffix(suf)) {
            list.splice(i, 1);
          } else if (!okMidfix(mid)) {
            list.splice(i - 1, 1);
          } else if (!okPrefix(pre)) {
            list.splice(i - 2, 1);
          } else {
            i -= 2;
            wipe(pre);
            wipe(mid);
            wipe(suf);
          }
        } else { // evaluate b-c
          if (nofix(suf)) {
            if (okPrefix(mid)) {
              i -= 2;
              wipe(mid);
            } else {
              list.splice(i - 1, 1);
              i = list.length - 1;
            }
          } else {
            if (okSuffix(suf)) {
              wipe(suf);
            } else {
              list.splice(i, 1);
              i = list.length - 1;
            }
          }
        }
      } else {
        if (nofix(suf)) {
          --i;
        } else { // c had some -fix but no neighbor
          list.splice(i, 1);
        }
      }
    }
  }

  private _sortMatches(data: string, ...args: any): MatchedEntity[] {
    const result: MatchedEntity[] = [];
    const v: MatchedEntity[] = [];

    args.forEach((arg: Evaluation) => {
      arg.matches.forEach((match: TextMatch) => {
        v.push({ action: arg.action, entity: arg.entity, match: match });
      });
    });

    v.sort((a, b) => {
      return a.match.start < b.match.start
        ? -1 
        : a.match.start > b.match.start
          ? 1 
          : 0;
    }).sort((a, b) => {
      return a.match.start === b.match.start && a.action.order < b.action.order
        ? -1 
        : a.match.start === b.match.start && a.action.order > b.action.order
          ? 1 
          : 0;
    });

    let current: MatchedEntity, peek: MatchedEntity, cursor: number = 0;

    while (v.length > 0) {
      current = v.shift() as MatchedEntity;
      let skip: boolean = cursor === current.match.start ? false : cursor >= current.match.end;
      let lookAhead: boolean = v.length > 0 && !skip;
      while (lookAhead) {
        lookAhead = false;
        peek = v[0];
        if (cursor > current.match.start) {
          // is cursor beyond start of current entity? Yes => skip
          skip = true;
        } else if (peek.match.start === current.match.start && peek.match.end === current.match.end) {
          v.shift();
          lookAhead = v.length > 0;
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
        if (current.action.discard === 0 || current.action.joinable === 1) {
          result.push(current);
        }
      }
    }

    this._removeOrphans(result);

    if (result.length > 1) {
      let i = 0;
      while (i < result.length - 1) {
        let peek = result[i + 1];
        let current = result[i];
        const canJoin: boolean = this._joinable(current, peek);
        if (canJoin) {
          result[i + 1] = this._join(current, peek, data);
          result.splice(i, 1);
          continue;
        } else if (current.action.discard) {
          result.splice(i, 1);
          continue;
        }
        ++i;
      }
      if (result[result.length - 1].action.discard) {
        result.pop();
      }
    } else if (result.length === 1) {
      if (result[0].action.discard === 1) {
        result.pop();
      }
    }

    return result;
  }
}