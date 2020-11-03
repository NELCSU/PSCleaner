const a: string[] = [
  "cum",
  "da",
  "de",
  "der",
  "dos",
  "el",
  "et",
  "ho",
  "la",
  "le",
  "los",
  "ul",
  "un",
  "van",
  "von",
  "y"
];

const NamePartSet: Set<string> = new Set();
let L: number = a.length;

for (let i = 0; i < L; i++) {
  NamePartSet.add(a[i]);
}

const NameInitialRegEx: RegExp[] = [
  /\b(?<![\\\/\&])[A-Z]\./gm,
  /\b(?:dr|mt|rt|st)\.?(?=\s)/gmi
];

const NamePrefixRegEx: RegExp[] = [
  new RegExp(/\b(?:a|aa|d|is|l|mu|na|o|ra|sa|za)[\'\‘\’\`]/, "gmi")
];

const NamePuralRegEx: RegExp[] = [
  new RegExp(/(?<=[a-z]{2})[\'\‘\’\`]s\b/, "gmi"),
  new RegExp(/(?<=[a-z]s)[\'\‘\’\`]/, "gmi")
];

export {
  NameInitialRegEx,
  NamePartSet,
  NamePrefixRegEx,
  NamePuralRegEx
};