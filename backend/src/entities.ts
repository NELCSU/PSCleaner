import { ipcMain as ipc } from "electron";
import type { Entity } from "../types/PSCleaner";

export const BankingPatternEntity: Entity = {
  color: "#994320",
  description: "UK banking identitfiers via pattern match",
  domain: "MONEY",
  enabled: true,
  id: "entityBankPattern",
  label: "Banking",
  mask: "BANKING",
  type: "regular expression"
};

export const CurrencyPatternEntity: Entity = {
  color: "#994360",
  description: "Currency text via pattern match",
  domain: "MONEY",
  enabled: true,
  id: "entityCurrencyPattern",
  label: "Currency",
  mask: "CURRENCY",
  type: "regular expression"
};

export const DatePatternEntity: Entity = {
  color: "#e800e8",
  description: "Long and short dates via pattern match",
  domain: "DATETIME",
  enabled: true,
  id: "entityDatePattern",
  label: "DateTime",
  mask: "DATETIME",
  type: "regular expression"
};

export const EmailPatternEntity: Entity = {
  color: "#ff8000",
  description: "Email and @Mention via pattern match",
  domain: "EMAIL",
  enabled: true,
  id: "entityEmailPattern",
  label: "Email",
  mask: "EMAIL",
  type: "regular expression"
};

export const EthnicityListEntity: Entity = {
  color: "#0050ff",
  description: "List of ethnicities/nationalities",
  domain: "NAME",
  enabled: true,
  id: "entityEthnicityList",
  label: "Ethnicity",
  mask: "ETHNIC",
  type: "keyword"
};

export const LocationListEntity: Entity = {
  color: "#00ff00",
  description: "List of location identifiers",
  domain: "NAME",
  enabled: true,
  id: "entityLocationList",
  label: "Name",
  mask: "LOCATION",
  type: "keyword"
};

export const LocationPatternEntity: Entity = {
  color: "#00ee00",
  description: "Location identifier via pattern match",
  domain: "NAME",
  enabled: true,
  id: "entityLocationPattern",
  label: "Name",
  mask: "LOCATION",
  type: "regular expression"
};

export const NameListEntity: Entity = {
  color: "#00a0ff",
  description: "List of names",
  domain: "NAME",
  enabled: true,
  id: "entityNameList",
  label: "Name",
  mask: "NAME",
  type: "keyword"
};

export const NamePatternEntity: Entity = {
  color: "#00e0ff",
  description: "Name via pattern match",
  domain: "NAME",
  enabled: true,
  id: "entityNamePattern",
  label: "Name",
  mask: "NAME",
  type: "regular expression"
};

export const NHSPatternEntity: Entity = {
  color: "#0040cc",
  description: "NHS number via pattern match",
  domain: "MEDICAL",
  enabled: true,
  id: "entityNHSPattern",
  label: "NHS number",
  mask: "NHS NUMBER",
  type: "regular expression"
};

export const PostcodePatternEntity: Entity = {
  color: "#00dd00",
  description: "Postcode via pattern match",
  domain: "LOCATION",
  enabled: true,
  id: "entityPostcodePattern",
  label: "Postcode",
  mask: "POSTCODE",
  type: "regular expression"
};

export const SkipWordListEntity: Entity = {
  color: "#0050ff",
  description: "List of words for de-selection",
  domain: "SKIP",
  enabled: true,
  id: "entitySkipWordList",
  label: "Skip words",
  mask: "SKIP",
  type: "keyword"
};

export const SkipWordPatternEntity: Entity = {
  color: "#cccccc",
  description: "Regular expressions matching words for de-selection",
  domain: "SKIP",
  enabled: true,
  id: "entitySkipWordPattern",
  label: "Medical",
  mask: "MEDICAL",
  type: "regular expression"
};

export const TelephonePatternEntity: Entity = {
  color: "#ff80ff",
  description: "UK telephone number via pattern match",
  domain: "CONTACT",
  enabled: true,
  id: "entityTelephonePattern",
  label: "UK Tel",
  mask: "TELEPHONE",
  type: "regular expression"
};

export const TimePatternEntity: Entity = {
  color: "#dfbfff",
  description: "Time text via pattern match",
  domain: "DATETIME",
  enabled: true,
  id: "entityTimePattern",
  label: "Time",
  mask: "TIME",
  type: "regular expression"
};

export const URLPatternEntity: Entity = {
  color: "#ffc58a",
  description: "URL text via pattern match",
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

  public toggle(id: string): Entities {
    const ent: Entity | undefined = this.list.get(id);
    if (ent) {
      ent.enabled = !ent.enabled;
      this.list.set(id, ent);
    }
    return this;
  }
}