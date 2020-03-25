import type { Entity } from "../../typings/PSCleaner";

export const AgeEntity: Entity = { 
  color: "#cc33ee", 
  discard: 0, 
  domain: "AGE", 
  joinable: 0, 
  label: "Duration", 
  mask: "DURATION",
  order: 1,
  prefix: 0,
  suffix: 0,
  type: "regular expression" 
};

export const BankingEntity: Entity = { 
  color: "#994320", 
  discard: 0, 
  domain: "MONEY", 
  joinable: 0, 
  label: "Banking", 
  mask: "BANKING",
  order: 1,
  prefix: 0,
  suffix: 0,
  type: "regular expression" 
};

export const CurrencyEntity: Entity = { 
  color: "#994360", 
  discard: 0, 
  domain: "MONEY", 
  joinable: 0, 
  label: "Currency", 
  mask: "CURRENCY",
  order: 1,
  prefix: 0,
  suffix: 0,
  type: "regular expression" 
};

export const DateEntity: Entity = { 
  color: "#e800e8", 
  discard: 0, 
  domain: "DATETIME", 
  joinable: 0, 
  label: "DateTime", 
  mask: "DATETIME",
  order: 1,
  prefix: 0,
  suffix: 0,
  type: "regular expression" 
};

export const EmailEntity: Entity = { 
  color: "#ff8000", 
  discard: 0, 
  domain: "EMAIL", 
  joinable: 0, 
  label: "Contact", 
  mask: "EMAIL",
  order: 1,
  prefix: 0,
  suffix: 0,
  type: "regular expression" 
};

export const EthnicityEntity: Entity = {
  color: "#0050ff",
  discard: 0,
  domain: "NAME",
  joinable: 1,
  label: "Ethnicity",
  mask: "ETHNIC",
  order: 2,
  prefix: 0,
  suffix: 0,
  type: "keyword"
};

export const LocationEntity: Entity = { 
  color: "#00ff00", 
  discard: 0, 
  domain: "NAME", 
  joinable: 0, 
  label: "Location", 
  mask: "LOCATION",
  order: 1,
  prefix: 0,
  suffix: 0,
  type: "regular expression" 
};

export const LocationSuffixEntity: Entity = {
  color: "#00ff00",
  discard: 1,
  domain: "NAME",
  joinable: 1,
  label: "Location",
  mask: "LOCATION",
  order: 2,
  prefix: 0,
  suffix: 1,
  type: "keyword"
};

export const LocationModifierEntity: Entity = {
  color: "#00ff00",
  discard: 1,
  domain: "NAME",
  joinable: 1,
  label: "Name",
  mask: "NAME",
  order: 2,
  prefix: 0,
  suffix: 0,
  type: "keyword"
};

export const LocationPrefixEntity: Entity = {
  color: "#00ff00",
  discard: 1,
  domain: "NAME",
  joinable: 1,
  label: "Location",
  mask: "LOCATION",
  order: 2,
  prefix: 1,
  suffix: 0,
  type: "regular expression"
};

export const NameEntity: Entity = {
  color: "#00a0ff",
  discard: 0,
  domain: "NAME",
  joinable: 1,
  label: "Name",
  mask: "NAME",
  order: 2,
  prefix: 0,
  suffix: 0,
  type: "keyword"
};

export const NamesEndingEntity: Entity = { 
  color: "#00e0ff", 
  discard: 0, 
  domain: "NAME", 
  joinable: 1, 
  label: "Name", 
  mask: "NAMEREG",
  order: 2,
  prefix: 0,
  suffix: 0,
  type: "regular expression" 
};

export const NHSEntity: Entity = { 
  color: "#0040cc", 
  discard: 0, 
  domain: "MEDICAL", 
  joinable: 0, 
  label: "RecordID", 
  mask: "NHS NUMBER",
  order: 1,
  prefix: 0,
  suffix: 0,
  type: "regular expression" 
};

export const TelephoneEntity: Entity = { 
  color: "#ff80ff", 
  discard: 0, 
  domain: "CONTACT", 
  joinable: 0, 
  label: "Contact", 
  mask: "TELEPHONE",
  order: 2,
  prefix: 0,
  suffix: 0,
  type: "regular expression" 
};

export const SkipWordEntity: Entity = { 
  color: "#0050ff", 
  discard: 1, 
  domain: "SKIP", 
  joinable: 0, 
  label: "Skip", 
  mask: "SKIP",
  order: 1,
  prefix: 0,
  suffix: 0,
  type: "keyword" 
};

export const TerritoryEntity: Entity = {
  color: "#80ff80",
  discard: 0,
  domain: "NAME",
  joinable: 1,
  label: "Location",
  mask: "LOCATION",
  order: 2,
  prefix: 0,
  suffix: 0,
  type: "keyword"
};

export const TimeEntity: Entity = { 
  color: "#dfbfff",
  discard: 0,
  domain: "DATETIME",
  joinable: 0,
  label: "Time",
  mask: "TIME",
  order: 2,
  prefix: 0,
  suffix: 0,
  type: "regular expression" 
};

export const URLEntity: Entity = { 
  color: "#ffc58a",
  discard: 0,
  domain: "CONTACT",
  joinable: 0,
  label: "Url",
  mask: "URL",
  order: 1,
  prefix: 0,
  suffix: 0,
  type: "regular expression" 
};