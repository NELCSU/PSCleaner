const a: string[] = [
"el",
"et",
"da",
"de",
"der",
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
  new RegExp(/\b(?<![\\\/])[A-Z]\./, "gm")
];

export {
  NameInitialRegEx,
  NamePartSet
};