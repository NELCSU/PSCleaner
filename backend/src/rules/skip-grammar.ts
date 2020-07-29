const a: RegExp[] = [
  /\b\w{2,}\-\d{1,2}\b/gmi,
  /\b\d+\s(?:mile|kilometer|km)s?\b/gmi,
  /\b(?:first|last)\s\d+\b/gmi,
  /\bat\shome\b/gmi,
  /\ba\sbath\b/gmi,
  /\bin\s(?:early|late)?\s(?:April|Jan|June|May)\b/gm,
  /\bmid\-\w+\b/gmi,
  /\bnext\sdoor\b/gmi,
  /\bon\stop\sof\b/gmi,
  /\bon\s(?:Fri|Mon|Satur|Sun|Thurs|Tues|Wednes)day\b/gm,
  /\bwent\sover\b/gmi,

  /[a-z]+[\'\‘\’\`](?:ll|re|ve)/gmi,
  /[a-z]+n[\'\‘\’\`]t/gmi
];
const SkipGrammarRegEx: Set<RegExp> = new Set();
a.forEach(term => SkipGrammarRegEx.add(term));
export {
  SkipGrammarRegEx
};