const a: RegExp[] = [
  /\d+(?:g|mg|ml)\b/gm,

  // https://en.wikipedia.org/wiki/Drug_nomenclature
  /\b[a-z]+axine\b/gmi,
  /\b[a-z]+ciclib\b/gmi,
  /\b[a-z]+de[gn]ib\b/gmi,
  /\b[a-z]+lisib\b/gmi,
  /\b[a-z]+lukast\b/gmi,
  /\b[a-z]+olol\b/gmi,
  /\b[a-z]+oxacin\b/gmi,
  /\b[a-z]+oxetine\b/gmi,
  /\b[a-z]+parib\b/gmi,
  /\b[a-z]+prazole\b/gmi,
  /\b[a-z]+rafenib\b/gmi,
  /\b[a-z]+sartan\b/gmi,
  /\b[a-z]+tinib\b/gmi,
  /\b[a-z]+vastatin\b/gmi,
  /\b[a-z]+xaban\b/gmi,
  /\b[a-z]+ximab\b/gmi,
  /\b[a-z]+zomib\b/gmi,
  /\b[a-z]+zumab\b/gmi,

  // A
  /\ba(?:limentum|loe\svera|mox?iclav|rrestin|ugment[iu]m|vigan)\b/gmi,
  //B
  /\bb(?:en[ao]dryl|onjela)\b/gmi,
  // C
  /\bc(?:al?pol|efuroxime|etiri?zine|larithro|odiene|oronavac|orazol|urevac)\b/gmi,
  // D
  /\bdi(?:clofenac|hydrocodiene|oral[ty]{2}e)\b/gmi,
  // E
  /\bepi\spen\b/gmi,
  // F
  /\bf(?:avipi?r[ai]vir|lu(?:clox|ox[ei]tie?ne))\b/gmi,
  /\bfrank\shematuria\b/gmi,
  // L
  /\blopinavir\b/gmi,
  // M
  /\bmolnupiravir\b/gmi,
  /\bm(?:anuka\shoney|ethotrexate|idaz|oderna)\b/gmi,
  // N
  /\bnicorette\b/gmi,
  // O
  /\bomeprazoel\b/gmi,
  // P
  /\bprozac\b/gmi,
  // R
  /\bremdesivir\b/gmi,
  // S
  /\bsinovac\b/gmi,
  // T
  /\btr(?:amadol|imethopr[io]m|uxima)\b/gmi,
  // V
  /\bviagra\b/gmi
];
const MedicationRegEx: Set<RegExp> = new Set();
a.forEach(term => MedicationRegEx.add(term));
export {
  MedicationRegEx
};