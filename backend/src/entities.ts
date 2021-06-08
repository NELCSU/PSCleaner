import { ipcMain as ipc } from "electron";
import type { Entity } from "../types/PSCleaner";

export const AgePatternEntity: Entity = {
  color: "#999900",
  description: "A person's age",
  domain: "AGE",
  enabled: true,
  id: "entityAgePattern",
  label: "Age",
  mask: "AGE",
  type: "regular expression"
};

export const BankingPatternEntity: Entity = {
  color: "#994320",
  description: "UK bank account and card numbers",
  domain: "MONEY",
  enabled: true,
  id: "entityBankPattern",
  label: "Banking",
  mask: "BANKING",
  type: "regular expression"
};

export const CurrencyPatternEntity: Entity = {
  color: "#994360",
  description: "UK currency values",
  domain: "MONEY",
  enabled: true,
  id: "entityCurrencyPattern",
  label: "Currency",
  mask: "CURRENCY",
  type: "regular expression"
};

export const DatePatternEntity: Entity = {
  color: "#e800e8",
  description: "Long and short dates",
  domain: "DATETIME",
  enabled: true,
  id: "entityDatePattern",
  label: "DateTime",
  mask: "DATETIME",
  type: "regular expression"
};

export const EmailPatternEntity: Entity = {
  color: "#ff8000",
  description: "Email and @mention text",
  domain: "EMAIL",
  enabled: true,
  id: "entityEmailPattern",
  label: "Email",
  mask: "EMAIL",
  type: "regular expression"
};

export const EthnicityListEntity: Entity = {
  color: "#0050ff",
  description: "Ethnicity / nationality",
  domain: "NAME",
  enabled: true,
  id: "entityEthnicityList",
  label: "Ethnicity",
  mask: "ETHNIC",
  type: "keyword"
};

export const LocationListEntity: Entity = {
  color: "#00ff00",
  description: "Street and place names",
  domain: "NAME",
  enabled: true,
  id: "entityLocationList",
  label: "Name",
  mask: "LOCATION",
  type: "keyword"
};

export const LocationPatternEntity: Entity = {
  color: "#00ee00",
  description: "Street and place names (pattern)",
  domain: "NAME",
  enabled: true,
  id: "entityLocationPattern",
  label: "Name",
  mask: "LOCATION",
  type: "regular expression"
};

export const NameListEntity: Entity = {
  color: "#00a0ff",
  description: "Names",
  domain: "NAME",
  enabled: true,
  id: "entityNameList",
  label: "Name",
  mask: "NAME",
  type: "keyword"
};

export const NamePatternEntity: Entity = {
  color: "#00e0ff",
  description: "Names (pattern)",
  domain: "NAME",
  enabled: true,
  id: "entityNamePattern",
  label: "Name",
  mask: "NAME",
  type: "regular expression"
};

export const NHSPatternEntity: Entity = {
  color: "#0040cc",
  description: "NHS numbers",
  domain: "MEDICAL",
  enabled: true,
  id: "entityNHSPattern",
  label: "NHS number",
  mask: "NHS NUMBER",
  type: "regular expression"
};

export const PostcodePatternEntity: Entity = {
  color: "#00dd00",
  description: "UK postcode",
  domain: "LOCATION",
  enabled: true,
  id: "entityPostcodePattern",
  label: "Postcode",
  mask: "POSTCODE",
  type: "regular expression"
};

export const SkipWordListEntity: Entity = {
  color: "#cccccc",
  description: "Remove potential false positives",
  domain: "SKIP",
  enabled: true,
  id: "entitySkipWordList",
  label: "Skip words",
  mask: "SKIP",
  type: "keyword"
};

export const SkipWordPatternEntity: Entity = {
  color: "#cccccc",
  description: "Remove potential false positives (pattern)",
  domain: "SKIP",
  enabled: true,
  id: "entitySkipWordPattern",
  label: "SkipRegEx",
  mask: "SKIPPED",
  type: "regular expression"
};

export const TelephonePatternEntity: Entity = {
  color: "#ff80ff",
  description: "UK telephone numbers",
  domain: "CONTACT",
  enabled: true,
  id: "entityTelephonePattern",
  label: "UK Tel",
  mask: "TELEPHONE",
  type: "regular expression"
};

export const TimePatternEntity: Entity = {
  color: "#dfbfff",
  description: "Time of day",
  domain: "DATETIME",
  enabled: true,
  id: "entityTimePattern",
  label: "Time",
  mask: "TIME",
  type: "regular expression"
};

export const URLPatternEntity: Entity = {
  color: "#ffc58a",
  description: "URLs",
  domain: "CONTACT",
  enabled: true,
  id: "entityURLPattern",
  label: "Url",
  mask: "URL",
  type: "regular expression"
};

export class Entities {
  public list: Map<string, Entity> = new Map();

  constructor() {
    this.list.set(AgePatternEntity.id, AgePatternEntity);
    this.list.set(BankingPatternEntity.id, BankingPatternEntity);
    this.list.set(CurrencyPatternEntity.id, CurrencyPatternEntity);
    this.list.set(DatePatternEntity.id, DatePatternEntity);
    this.list.set(EmailPatternEntity.id, EmailPatternEntity);
    this.list.set(EthnicityListEntity.id, EthnicityListEntity);
    this.list.set(LocationListEntity.id, LocationListEntity);
    this.list.set(LocationPatternEntity.id, LocationPatternEntity);
    this.list.set(NameListEntity.id, NameListEntity);
    this.list.set(NamePatternEntity.id, NamePatternEntity);
    this.list.set(NHSPatternEntity.id, NHSPatternEntity);
    this.list.set(PostcodePatternEntity.id, PostcodePatternEntity);
    this.list.set(SkipWordListEntity.id, SkipWordListEntity);
    this.list.set(SkipWordPatternEntity.id, SkipWordPatternEntity);
    this.list.set(TimePatternEntity.id, TimePatternEntity);
    this.list.set(TelephonePatternEntity.id, TelephonePatternEntity);
    this.list.set(URLPatternEntity.id, URLPatternEntity);

    ipc.on("get-entities", e => e.reply("entity-list", [...this.list.values()]));
    ipc.on("toggle-entity", (_, id) => this.toggle(id));
  }

  public clear(): Entities {
    for (const e  of this.list.values()) {
      e.enabled = true;
    }
    return this;
  }

  public exclude(id: string[]): Entities {
    for (const entity of this.list.values()) {
      if (id.length > 0) {
        entity.enabled = !(id.findIndex(ex => ex === entity.id) > -1);
      } else {
        entity.enabled = true;
      }
    }
    return this;
  }

  public toggle(id: string): Entities {
    const ent: Entity | undefined = this.list.get(id);
    if (ent) {
      ent.enabled = !ent.enabled;
      this.list.set(id, ent);
    }
    return this;
  }
}