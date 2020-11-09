import type { Action, Entity, Evaluation, MatchedEntity, TextMatch } from "../types/PSCleaner";
import type { Entities } from "./entities";
import {
  LocationPrefixRegEx, LocationRegEx,
  LocationMidfixRegEx, LocationSuffixRegEx
} from "./rules/location";
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
import { NameInitialRegEx, NamePartSet, NamePrefixRegEx, NamePuralRegEx } from "./rules/name-part";
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
  private _entities: Entities;

  public trace: boolean = true;

  constructor(entities: Entities) {
    this._entities = entities;
  }
  
  /**
   * Returns list of matched entities
   * @param data - body of text to evaluate
   */  
  public async evaluate(data: string): Promise<MatchedEntity[]> {
    let matches: MatchedEntity[] = [];

    const bankingEntity: Entity = this._entities.list.get("entityBankPattern") as Entity;
    const currencyEntity: Entity = this._entities.list.get("entityCurrencyPattern") as Entity;
    const dateEntity: Entity = this._entities.list.get("entityDatePattern") as Entity;
    const emailEntity: Entity = this._entities.list.get("entityEmailPattern") as Entity;
    const ethEntity: Entity = this._entities.list.get("entityEthnicityList") as Entity;
    const householdItemEntity: Entity = this._entities.list.get("entitySkipWordPattern") as Entity;
    const postcodeEntity: Entity = this._entities.list.get("entityPostcodePattern") as Entity;
    const locationPatternEntity: Entity = this._entities.list.get("entityLocationPattern") as Entity;
    const namesPatternEntity: Entity = this._entities.list.get("entityNamePattern") as Entity;
    const namesEntity: Entity = this._entities.list.get("entityNameList") as Entity;
    const medicalTermEntity: Entity = this._entities.list.get("entitySkipWordPattern") as Entity;
    const nhsEntity: Entity = this._entities.list.get("entityNHSPattern") as Entity;
    const skipGrammarEntity: Entity = this._entities.list.get("entitySkipWordPattern") as Entity;
    const skipWordEntity: Entity = this._entities.list.get("entitySkipWordList") as Entity;
    const telEntity: Entity = this._entities.list.get("entityTelephonePattern") as Entity;
    const timesEntity: Entity = this._entities.list.get("entityTimePattern") as Entity;
    const urlEntity: Entity = this._entities.list.get("entityURLPattern") as Entity;
    const searches: Evaluation[] = [];

    if (bankingEntity.enabled) {
      searches.push({
        action: { discard: 0, joinable: 0, order: 1, pos: 0, prefix: 0, midfix: 0, suffix: 0 },
        entity: bankingEntity,
        matches: this._evalRegEx(data, findBankingNumbers)
      });
    }

    if (currencyEntity.enabled) {
      searches.push({
        action: { discard: 0, joinable: 0, order: 1, pos: 0, prefix: 0, midfix: 0, suffix: 0 },
        entity: currencyEntity,
        matches: this._evalRegEx(data, findCurrency)
      });
    }

    if (dateEntity.enabled) {
      searches.push({
        action: { discard: 0, joinable: 0, order: 1, pos: 0, prefix: 0, midfix: 0, suffix: 0 },
        entity: dateEntity,
        matches: this._evalRegEx(data, findDate)
      });
    }

    if (emailEntity.enabled) {
      searches.push({
        action: { discard: 0, joinable: 0, order: 1, pos: 0, prefix: 0, midfix: 0, suffix: 0 },
        entity: emailEntity,
        matches: this._evalRegEx(data, findEmail)
      });
    }

    if (ethEntity.enabled) {
      searches.push({
        action: { discard: 0, joinable: 1, order: 2, pos: 0, prefix: 0, midfix: 0, suffix: 0 },
        entity: ethEntity,
        matches: this._evalKeyword(data, null, EthnicitySet)
      });
    }

    if (householdItemEntity.enabled) {
      searches.push({
        action: { discard: 1, joinable: 0, order: 1, pos: 0, prefix: 0, midfix: 0, suffix: 0 },
        entity: householdItemEntity,
        matches: this._evalRegEx(data, RospaRegEx)
      });
    }

    if (postcodeEntity.enabled) {
      searches.push({
        action: { discard: 0, joinable: 0, order: 2, pos: 0, prefix: 0, midfix: 0, suffix: 0 },
        entity: postcodeEntity,
        matches: this._evalRegEx(data, findUKPostcode)
      });
    }

    if (locationPatternEntity.enabled) {
      searches.push({
        action: { discard: 0, joinable: 0, order: 2, pos: 0, prefix: 0, midfix: 0, suffix: 0 },
        entity: locationPatternEntity,
        matches: this._evalRegEx(data, LocationRegEx)
      });

      searches.push({
        action: { discard: 1, joinable: 1, order: 3, pos: 0, prefix: 1, midfix: 0, suffix: 0 },
        entity: locationPatternEntity,
        matches: this._evalRegEx(data, LocationPrefixRegEx)
      });

      searches.push({
        action: { discard: 1, joinable: 1, order: 3, pos: 0, prefix: 1, midfix: 0, suffix: 0 },
        entity: locationPatternEntity,
        matches: this._evalRegEx(data, findOrdinal, (n: string) => isPropercase(n))
      });

      searches.push({
        action: { discard: 1, joinable: 1, order: 3, pos: 0, prefix: 0, midfix: 1, suffix: 0 },
        entity: locationPatternEntity,
        matches: this._evalRegEx(data, LocationMidfixRegEx)
      });

      searches.push({
        action: { discard: 1, joinable: 1, order: 3, pos: 0, prefix: 0, midfix: 0, suffix: 1 },
        entity: locationPatternEntity,
        matches: this._evalRegEx(data, LocationSuffixRegEx)
      });
    }

    if (namesPatternEntity.enabled) {
      searches.push({
        action: { discard: 0, joinable: 1, order: 4, pos: 0, prefix: 0, midfix: 0, suffix: 0 },
        entity: namesPatternEntity,
        matches: this._evalRegEx(data, NamesEndingRegEx)
      });

      searches.push({
        action: { discard: 1, joinable: 1, order: 3, pos: 0, prefix: 0, midfix: 0, suffix: 0 },
        entity: namesPatternEntity,
        matches: this._evalRegEx(data, NamePrefixRegEx)
      });

      searches.push({
        action: { discard: 1, joinable: 1, order: 3, pos: 0, prefix: 1, midfix: 1, suffix: 0 },
        entity: namesPatternEntity,
        matches: this._evalRegEx(data, NameInitialRegEx)
      });

      searches.push({
        action: { discard: 1, joinable: 1, order: 3, pos: 1, prefix: 0, midfix: 1, suffix: 1 },
        entity: namesPatternEntity,
        matches: this._evalRegEx(data, NamePuralRegEx)
      });
    }

    if (namesEntity.enabled) {
      searches.push({
        action: { discard: 0, joinable: 1, order: 4, pos: 0, prefix: 0, midfix: 0, suffix: 0 },
        entity: namesEntity,
        matches: this._evalKeyword(data, null, NameSetAD, NameSetEH, NameSetIL, NameSetMP, NameSetQT, NameSetUZ)
      });

      searches.push({
        action: { discard: 0, joinable: 1, order: 2, pos: 0, prefix: 0, midfix: 0, suffix: 0 },
        entity: namesEntity,
        matches: this._evalKeyword(data, (n: string) => isPropercase(n), ProperNameSet)
      });

      searches.push({
        action: { discard: 1, joinable: 1, order: 2, pos: 0, prefix: 0, midfix: 0, suffix: 0 },
        entity: namesEntity,
        matches: this._evalKeyword(data, (n: string) => isPropercase(n), ProperNameSetJoinOnly)
      });

      searches.push({
        action: { discard: 1, joinable: 1, order: 4, pos: 0, prefix: 0, midfix: 0, suffix: 0 },
        entity: namesEntity,
        matches: this._evalKeyword(data, null, NamePartSet)
      });
    }

    if (medicalTermEntity.enabled) {
      searches.push({
        action: { discard: 1, joinable: 0, order: 1, pos: 0, prefix: 0, midfix: 0, suffix: 0 },
        entity: medicalTermEntity,
        matches: this._evalRegEx(data, MedicalAbbrRegEx)
      });

      searches.push({
        action: { discard: 1, joinable: 0, order: 1, pos: 0, prefix: 0, midfix: 0, suffix: 0 },
        entity: medicalTermEntity,
        matches: this._evalRegEx(data, MedicalTermRegEx)
      });

      searches.push({
        action: { discard: 1, joinable: 0, order: 1, pos: 0, prefix: 0, midfix: 0, suffix: 0 },
        entity: medicalTermEntity,
        matches: this._evalRegEx(data, MedicationRegEx)
      });
    }

    if (nhsEntity.enabled) {
      searches.push({
        action: { discard: 0, joinable: 0, order: 1, pos: 0, prefix: 0, midfix: 0, suffix: 0 },
        entity: nhsEntity,
        matches: this._evalRegEx(data, findNHSNumber)
      });
    }

    if (skipGrammarEntity.enabled) {
      searches.push({
        action: { discard: 1, joinable: 0, order: 2, pos: 0, prefix: 0, midfix: 0, suffix: 0 },
        entity: skipGrammarEntity,
        matches: this._evalRegEx(data, SkipGrammarRegEx)
      });
    }

    if (skipWordEntity.enabled) {
      searches.push({
        action: { discard: 1, joinable: 0, order: 3, pos: 0, prefix: 0, midfix: 0, suffix: 0 },
        entity: skipWordEntity,
        matches: this._evalKeyword(data, null, SkipWordSet)
      });
    }

    if (telEntity.enabled) {
      searches.push({
        action: { discard: 0, joinable: 0, order: 2, pos: 0, prefix: 0, midfix: 0, suffix: 0 },
        entity: telEntity,
        matches: this._evalRegEx(data, findUKTelephone)
      });
    }

    if (timesEntity.enabled) {
      searches.push({
        action: { discard: 0, joinable: 0, order: 1, pos: 0, prefix: 0, midfix: 0, suffix: 0 },
        entity: timesEntity,
        matches: this._evalRegEx(data, findTime)
      });
    }

    if (urlEntity.enabled) {
      searches.push({
        action: { discard: 0, joinable: 0, order: 1, pos: 0, prefix: 0, midfix: 0, suffix: 0 },
        entity: urlEntity,
        matches: this._evalRegEx(data, findURL)
      });
    }

    matches = this._sortMatches(data, ...searches);
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
    if (!next.action.pos) {
      d.discard = 0;
    }
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
    
    let i = 0;
    while (i < list.length) {
      pre = list[i];
      mid = i + 1 > list.length - 1 ? undefined : list[i + 1];
      suf = i + 2 > list.length - 1 ? undefined : list[i + 2];

      if (mid && neighbors(pre, mid)) {
        if (suf && neighbors(mid, suf)) { // evaluate a-b-c
          if (!okPrefix(pre)) {
            list.splice(i, 1);
          } else if (!okMidfix(mid)) {
            list.splice(i + 1, 1);
          } else if (!okSuffix(suf)) {
            i += 1;
            wipe(pre);
          } else {
            i += 2;
            wipe(pre);
            wipe(mid);
            wipe(suf);
          }
        } else { // evaluate a-b
          if (nofix(pre)) {
            if (okSuffix(mid)) {
              i += 2;
              wipe(mid);
            } else {
              list.splice(i + 1, 1);
            }
          } else {
            if (okPrefix(pre)) {
              if (okSuffix(mid) || nofix(mid)) {
                wipe(pre);
                wipe(mid);
                i += 2;
              } else {
                list.splice(i + 1, 1);
                if (i > 0) {
                  --i;
                }
              }
            } else {
              list.splice(i, 1);
            }
          }
        }
      } else {
        if (nofix(pre)) {
          ++i;
        } else { // a had some -fix but no neighbor
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
          current.debug = `Collision detected for keyword: "${current.match.value}".
          [1]: ${current.match.how} in ${current.entity.label} [2]: ${peek.match.how} in ${peek.entity.label}`;
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