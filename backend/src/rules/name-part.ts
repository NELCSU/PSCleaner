const a: string[] = [
  "ar",
  "cum",
  "da",
  "de",
  "der",
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
  NamePartSet,
  NameFragmentRegEx,
  NamePuralRegEx
};