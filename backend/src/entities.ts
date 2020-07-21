import { ipcMain as ipc } from "electron";
import type { Entity } from "../types/PSCleaner";

export const AgeEntity: Entity = { 
  color: "#cc33ee", 
  description: "Person's age via pattern match",
  domain: "AGE", 
  label: "Age/duration", 
  mask: "DURATION",
  type: "regular expression" 
};

export const BankingEntity: Entity = { 
  color: "#994320", 
  description: "UK banking identitfiers via pattern match",
  domain: "MONEY", 
  label: "Banking", 
  mask: "BANKING",
  type: "regular expression" 
};

export const CurrencyEntity: Entity = { 
  color: "#994360", 
  description: "Currency text via pattern match",
  domain: "MONEY", 
  label: "Currency", 
  mask: "CURRENCY",
  type: "regular expression" 
};

export const DateEntity: Entity = { 
  color: "#e800e8", 
  description: "Long and short dates via pattern match",
  domain: "DATETIME", 
  label: "DateTime", 
  mask: "DATETIME",
  type: "regular expression" 
};

export const EmailEntity: Entity = { 
  color: "#ff8000", 
  description: "Email and @Mention via pattern match",
  domain: "EMAIL", 
  label: "Email", 
  mask: "EMAIL",
  type: "regular expression" 
};

export const EthnicityEntity: Entity = {
  color: "#0050ff",
  description: "List of ethnicities/nationalities",
  domain: "NAME",
  label: "Ethnicity",
  mask: "ETHNIC",
  type: "keyword"
};

export const LocationEntity: Entity = { 
  color: "#00ff00", 
  description: "List of location identifiers",
  domain: "NAME", 
  label: "Name", 
  mask: "LOCATION",
  type: "keyword" 
};

export const LocationRegExEntity: Entity = { 
  color: "#00ee00", 
  description: "Location identifier via pattern match",
  domain: "NAME", 
  label: "Name", 
  mask: "LOCATION",
  type: "regular expression" 
};

export const NameEntity: Entity = {
  color: "#00a0ff",
  description: "List of names",
  domain: "NAME",
  label: "Name",
  mask: "NAME",
  type: "keyword"
};

export const NameRegExEntity: Entity = { 
  color: "#00e0ff", 
  description: "Name via pattern match",
  domain: "NAME", 
  label: "Name", 
  mask: "NAME",
  type: "regular expression" 
};

export const NHSEntity: Entity = { 
  color: "#0040cc", 
  description: "NHS number via pattern match",
  domain: "MEDICAL",  
  label: "NHS number", 
  mask: "NHS NUMBER",
  type: "regular expression" 
};

export const SkipWordEntity: Entity = { 
  color: "#0050ff", 
  description: "List of words",
  domain: "SKIP", 
  label: "Skip words", 
  mask: "SKIP",
  type: "keyword" 
};

export const TelephoneEntity: Entity = { 
  color: "#ff80ff", 
  description: "UK telephone number via pattern match",
  domain: "CONTACT", 
  label: "UK Tel", 
  mask: "TELEPHONE",
  type: "regular expression" 
};

export const TimeEntity: Entity = { 
  color: "#dfbfff",
  description: "Time text via pattern match",
  domain: "DATETIME",
  label: "Time",
  mask: "TIME",
  type: "regular expression" 
};

export const URLEntity: Entity = { 
  color: "#ffc58a",
  description: "URL text via pattern match",
  domain: "CONTACT",
  label: "Url",
  mask: "URL",
  type: "regular expression" 
};

/**
 * ### Manages entities
 * #### API  (ipc request -> response)
 * 1. get-entities  -> entity-list - returns list of entities
 * 2. get-entities  -> entity-list-error
 */
export class Entities {
  constructor() {
    ipc.on("get-entities", e => {
      Entities.getList()
        .then(
          success => e.reply("entity-list", success),
          failure => e.reply(failure, [])
        );
    });
  }

  /**
   * returns list of entities
   */
  public static getList(): Promise<Entity[]> {
    return Promise.resolve(
      [
        AgeEntity, BankingEntity, CurrencyEntity, 
        DateEntity, EmailEntity, EthnicityEntity,
        LocationEntity, LocationRegExEntity,
        NameEntity, NHSEntity, SkipWordEntity,
        TelephoneEntity, TimeEntity, URLEntity
      ].sort((a, b) => a.label > b.label ? 1 : -1)
    );
  }
}