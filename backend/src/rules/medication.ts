const a: RegExp[] = [
  /\b(?:co\-?)?amoxiclav\b/gmi,
  /\bbenodryl\b/gmi,
  /\bcal?pol\b/gmi,
  /\bcefuroxime\b/gmi,
  /\b(?:co\-?)?cod[ao]mol\b/gmi,
  /\b(?:co\-?)?dyd?ramol\b/gmi,
  /\bcorazol\b/gmi,
  /\bdiclofenac\b/gmi,
  /\bdioral[ty]{2}e\b/gmi,
  /\bfluclox\b/gmi,
  /\bfluox[ei]tie?ne\b/gmi,
  /\binfliximab\b/gmi,
  /\bmethotrexate\b/gmi,
  /\bparacet[aeo]?ma?ol\b/gmi,
  /\bprozac\b/gmi,
  /\bsalbut?amol\b/gmi
];
const MedicationRegEx: Set<RegExp> = new Set();
a.forEach(term => MedicationRegEx.add(term));
export {
  MedicationRegEx
};