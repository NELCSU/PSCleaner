const a: string[] = [
"el",
"et",
"da",
"de",
"der",
"dos",
"la",
"le",
"los",
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
  /\b(?:dr|mr|mrs|ms|mt|rt|sir|st)\.?(?=\s)/gmi
];

const NamePrefixRegEx: RegExp[] = [
  new RegExp(/\b[od][\'\‘\’\`]/, "gmi")
];

const NameMiddleInitialRegEx: RegExp[] = [
  new RegExp(/\b(?<![\\\/])[A-Z]\./, "gm")
];

const NamePuralRegEx: RegExp[] = [
  new RegExp(/(?<=[a-z]{2})[\'\‘\’\`]s\b/, "gmi"),
  new RegExp(/(?<=[a-z]s)[\'\‘\’\`]/, "gmi")
];

export {
  NameInitialRegEx,
  NameMiddleInitialRegEx,
  NamePartSet,
  NamePrefixRegEx,
  NamePuralRegEx
};