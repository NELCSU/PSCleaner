const a: string[] = [
"el",
"et",
"da",
"de",
"der",
"la",
"le",
"los",
];

const NamePartSet: Set<string> = new Set();
let L: number = a.length;

for (let i = 0; i < L; i++) {
  NamePartSet.add(a[i]);
}

export {
  NamePartSet
};