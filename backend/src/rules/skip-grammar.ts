const a: RegExp[] = [
  /\b\w{2,}\-\d{1,2}\b/gmi,
  /\b\d+\s(?:mile|kilometer|km)s?\b/gmi,
  /\b(?:first|last)\s\d+\b/gmi,
  /\bat\shome\b/gmi,
  /\ba\sbath\b/gmi,
  /\b(?:in|since)\s(?:(?:early|mid|late)[\s\-])?(?:April|Jan|June|May)\b/gmi,
  /\bend\sof\s(?:April|Jan|June|May)\b/gmi,
  /\bmid\-\w+\b/gmi,
  /\bnext\sdoor\b/gmi,
  /\bon\stop\sof\b/gmi,
  /\b(?:from|on)\s(?:Fri|Mon|Satur|Sun|Thurs|Tues|Wednes)day\b/gmi,
  /\bstepping\son\b/gmi,
  /\bwent\sover\b/gmi,

  /[a-z]+[\'\‘\’\`](?:ll|re|ve)/gmi,
  /[a-z]+n[\'\‘\’\`]t/gmi
];
const SkipGrammarRegEx: Set<RegExp> = new Set();
a.forEach(term => SkipGrammarRegEx.add(term));
export {
  SkipGrammarRegEx
};