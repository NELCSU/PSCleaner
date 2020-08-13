const a: RegExp[] = [
  /\b\w{2,}\-\d{1,2}\b/gmi,
  /\b\d+\s(?:mile|kilometer|km|steps)s?\b/gmi,
  /\b(?:first|last)\s\d+\b/gmi,
  /\bap{1,3}rox\b/gmi,
  /\bat\shome\b/gmi,
  /\b(?:between|from|in)\s(?:April|Jan|June|July|March|May|September)\s(?:and|to)\s(?:April|Jan|June|July|March|May|September)\b/gmi,
  /\bthe\seve\sof\b/gmi,
  /\bbank\sholiday\b/gmi,
  /\ba\sbath\b/gmi,
  /\bchief\sof\sstaff\b/gmi,
  /\bdirector[\s\-]general\b/gmi,
  /\b(?:as|in|since|until)\s(?:(?:early(?:\sas)?|mid|late(?:\sas)?)[\s\-])?(?:April|Jan|June|July|May|September)\b/gmi,
  /\b(?:end|middle|start)\sof\s(?:April|Jan|June|July|May|September)\b/gmi,
  /\bfoster\s(?:carer|father|mother|parent)\b/gmi,
  /\bgood\s(?:evening|morning|night)\b/gmi,
  /\bhead\son\b/gmi,
  /\bmid\-\w+\b/gmi,
  /\bnon\-\w+\b/gmi,
  /\bnext\sdoor\b/gmi,
  /\bone\sof\sthe\b/gmi,
  /\bon\sfoot\b/gmi,
  /\bon\stop\sof\b/gmi,
  /\bprime\sminister\b/gmi,
  /\b(?:from|on)\s(?:Fri|Mon|Satur|Sun|Thurs|Tues|Wednes)day\b/gmi,
  /\b(?:during|since)\s(?:(?:early|mid|late)[\s\-])?(?:April|Jan|June|July|March|May|September)\b/gmi,
  /\bfrom\s(?:(?:early|mid|late)[\s\-])?(?:April|Jan|June|July|May|September)\b/gmi,
  /\bstepping\son\b/gmi,
  /\bsummer\scamp\b/gmi,
  /\bwent\sover\b/gmi,

  /[a-z]+[\'\‘\’\`](?:ll|re|ve)/gmi,
  /[a-z]+n[\'\‘\’\`]t/gmi
];
const SkipGrammarRegEx: Set<RegExp> = new Set();
a.forEach(term => SkipGrammarRegEx.add(term));
export {
  SkipGrammarRegEx
};