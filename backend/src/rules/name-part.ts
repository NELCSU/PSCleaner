const a: string[] = [
  "ar",
  "cum",
  "da",
  "de",
  "der",
  "dos",
  "el",
  "et",
  "ho",
  "i",
  "ii",
  "iii",
  "iv",
  "la",
  "le",
  "los",
  "n",
  "na",
  "nam",
  "nan",
  "o",
  "t",
  "ul",
  "un",
  "van",
  "v",
  "vc",
  "vi",
  "vii",
  "viii",
  "von",
  "y",
  "yn",
  "yr"
];

const NamePartSet: Set<string> = new Set();
let L: number = a.length;

for (let i = 0; i < L; i++) {
  NamePartSet.add(a[i]);
}

const NameInitialRegEx: RegExp[] = [
  /\b(?<![\\\/\&])[A-Z]\./gm,
  /\b(?:dr|mc|mt|st)\.?(?=\s)/gmi
];

const NameFragmentRegEx: RegExp[] = [
  /\b(?:a|aa|d|is|l|mu|na|o|ra|sa|za)[\'\‘\’\`]\b/gmi
];

const NamePuralRegEx: RegExp[] = [
  /(?<=[a-z]{2})[\'\‘\’\`]s\b/gmi,
  /(?<=[a-z]s)[\'\‘\’\`]/gmi
];

export {
  NameInitialRegEx,
  NamePartSet,
  NameFragmentRegEx,
  NamePuralRegEx
};