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
  /\b(?:a|aa|b|d|is|l|mu|na|o|ra|sa|za)['‘’`]/gmi,
  /['‘’`](?:r)\b/gmi,
  /\b(?:an|can|ca|h|is|rt|tu)(?=-)/gmi,
  /(?<=\b[A-Z][a-z]+-)(?:a[fn]|a|ba[cn]k|bar|beech|berth|big|bi|blew|brain|castle|ca[pr]|clip|corn|cut|doll|don|drain|dyke|d|earn|e[mn]|end|eye|e|fan|franc|fro|gains|gate|gest|glazier|grove|gun|go|hardy|hale|haul|heart|hen|hil[lt]|him|hole|hurt|h|is|m[ai]|men|mere|moors|marriage|nah|o[dln]|pennant|pant|park|pica|post|p[ei]n|roe|ri|'?r|sand|saint|shop|stent|stair|st|sub|super|tail|tore|t[ao]n|t|walk|y)\b/gmi,
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