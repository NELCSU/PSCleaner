export type EntityType = "Regular expression" | "Word list";

export type Entity = {
  id: number,
  name: string,
  color: string,
  domain: string,
  type: EntityType,
  reg_ex: string
}

export type MatchedEntity = {
  entity: string,
  entityId: number,
  entityDomain: string,
  value: string,
  start: number,
  end: number,
  length: number
}

export type WordPosition = {
  start: number,
  end: number,
  length: number
}
