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
"van",
"von"
];

const NamePartSet: Set<string> = new Set();
let L: number = a.length;

for (let i = 0; i < L; i++) {
  NamePartSet.add(a[i]);
}

const NameInitialRegEx: RegExp[] = [
  new RegExp(/\b(?<![\\\/\&])[A-Z]\./, "gm"),
  new RegExp(/\bO[\'\‘\’\`]/, "gm"),
  new RegExp(/\b(?:dr|mr|mrs|ms|sir|st)\b/, "gmi")
];

const NameMiddleInitialRegEx: RegExp[] = [
  new RegExp(/\b(?<![\\\/])[A-Z]\./, "gm")
];

const NamePuralRegEx: RegExp[] = [
  new RegExp(/(?<=[a-z][a-z])[\'\‘\’\`]s\b/, "gm")
];

export {
  NameInitialRegEx,
  NameMiddleInitialRegEx,
  NamePartSet,
  NamePuralRegEx
};