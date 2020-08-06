const a: RegExp[] = [
  /\b\w{2,}\-\d{1,2}\b/gmi,
  /\b\d+\s(?:mile|kilometer|km|steps)s?\b/gmi,
  /\b(?:first|last)\s\d+\b/gmi,
  /\bap{1,3}rox\b/gmi,
  /\bat\shome\b/gmi,
  /\b(?:between|in)\s(?:April|Jan|June|July|March|May|September)\s(?:and|to)\s(?:April|Jan|June|July|March|May|September)\b/gmi,
  /\bthe\seve\sof\b/gmi,
  /\ba\sbath\b/gmi,
  /\bchief\sof\sstaff\b/gmi,
  /\bdirector[\s\-]general\b/gmi,
  /\bin\s(?:(?:early|mid|late)[\s\-])?(?:April|Jan|June|July|May|September)\b/gmi,
  /\b(?:end|middle|start)\sof\s(?:April|Jan|June|July|May|September)\b/gmi,
  /\bhead\son\b/gmi,
  /\bmid\-\w+\b/gmi,
  /\bnon\-\w+\b/gmi,
  /\bnext\sdoor\b/gmi,
  /\bone\sof\sthe\b/gmi,
  /\bon\sfoot\b/gmi,
  /\bon\stop\sof\b/gmi,
  /\bprime\sminister\b/gmi,
  /\b(?:from|on)\s(?:Fri|Mon|Satur|Sun|Thurs|Tues|Wednes)day\b/gmi,
  /\b(?:during|from|since)(?:(?:early|mid|late)[\s\-])?(?:April|Jan|June|July|March|May|September)\b/gmi,
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