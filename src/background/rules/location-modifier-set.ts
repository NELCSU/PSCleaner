import type { Entity } from "../../typings/pscleaner";

const LocationModifierEntity: Entity = {
  color: "#00a0ff",
  discard: 1,
  domain: "NAME",
  joinable: 1,
  label: "Name",
  mask: "NAME",
  order: 2,
  type: "keyword"
};

const LocationModifier: Set<string> = new Set([
"central",
"east", 
"eastern",
"great", 
"greater",
"inner",
"little", 
"long",
"lower",
"new",
"north", 
"northern",
"old",
"outer",
"south", 
"southern",
"upper",
"west", 
"western"
]);

export {
  LocationModifier,
  LocationModifierEntity
};