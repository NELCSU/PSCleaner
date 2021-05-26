const a: string[] = [
  "ar",
  "cum",
  "da",
  "de",
  "der",
  "do",
  "dos",
  "el",
  "es",
  "et",
  "ho",
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
  /\b(?:a|aa|b|d|is|l|mu|na|o|ra|sa|za)['‘’`]/gmi,
  /['‘’`](?:r)\b/gmi,
  /\b(?:an|can|ca|h|is|rt|tu)(?=-)/gmi,
];

const NamePuralRegEx: RegExp[] = [
  /(?<=[a-z]{2})['‘’`]s\b/gmi,
  /(?<=[a-z]s)['‘’`]/gmi
];

export {
  NameInitialRegEx,
  NamePartSet,
  NameFragmentRegEx,
  NamePuralRegEx
};