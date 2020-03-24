import type { Entity } from "../../typings/pscleaner";

const NameEntity: Entity = {
  color: "#00a0ff",
  discard: 0,
  domain: "NAME",
  joinable: 1,
  label: "Name",
  mask: "NAME",
  order: 2,
  type: "keyword"
};

const NamesEndingEntity: Entity = { 
   color: "#00e0ff", 
   discard: 0, 
   domain: "NAME", 
   joinable: 1, 
   label: "Name", 
   mask: "NAMEREG",
   order: 2,
   type: "regular expression" 
 };

const TerritoryEntity: Entity = {
  color: "#80ff80",
  discard: 0,
  domain: "NAME",
  joinable: 1,
  label: "Location",
  mask: "LOCATION",
  order: 2,
  type: "keyword"
};

export {
  NameEntity,
  NamesEndingEntity,
  TerritoryEntity
};