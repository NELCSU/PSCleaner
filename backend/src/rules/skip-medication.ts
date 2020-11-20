const a: RegExp[] = [
  /\d+(?:g|mg|ml|mmol)\b/gm,

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

  /\b(?:ac[io]cl|umifen)ovir\b/gmi,
  /\b(?:adalimu|bamlanivi)mab\b/gmi,
  /\balimentum\b/gmi,
  /\b(?:co\-?)?amox?iclav\b/gmi,
  /\barrestin\b/gmi,
  /\baugment[iu]m\b/gmi,
  /\bavigan\b/gmi,
  /\bben[ao]dryl\b/gmi,
  /\bcal?pol\b/gmi,
  /\bcefuroxime\b/gmi,
  /\bcetiri?zine\b/gmi,
  /\bcodiene\b/gmi,
  /\b(?:(?:co\-?)?cod[ao]|(?:co\-?)?dyd?ra|der|para[aceort]+|salbut?[ao])mol\b/gmi,
  /\bcorazol\b/gmi,
  /\bcurevac\b/gmi,
  /\bdiclofenac\b/gmi,
  /\bdihydrocodiene\b/gmi,
  /\bdioral[ty]{2}e\b/gmi,
  /\bepi\spen\b/gmi,
  /\b(?:favipi?r[ai]|remdesi)vir\b/gmi,
  /\bfluclox\b/gmi,
  /\bfluox[ei]tie?ne\b/gmi,
  /\bmethotrexate\b/gmi,
  /\bnicorette\b/gmi,
  /\bomeprazoel\b/gmi,
  /\bprozac\b/gmi,
  /\btramadol\b/gmi,
  /\btrimethopr[io]m\b/gmi,
  /\bviagra\b/gmi
];
const MedicationRegEx: Set<RegExp> = new Set();
a.forEach(term => MedicationRegEx.add(term));
export {
  MedicationRegEx
};