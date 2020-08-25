const a: RegExp[] = [
  /\b\w{2,}\-\d{1,2}\b/gmi,
  /\b\d+\s(?:mile|kilometer|km|steps)s?\b/gmi,
  /\b(?:first|last)\s\d+\b/gmi,
  /\bap{1,3}rox\b/gmi,
  /\bat\shome\b/gmi,
  /\b(?:between|from|in|in\sthe|the)\s(?:January|February|March|April|May|June|July|August|September|October|November|December)\s?(?:and|to|\-)\s?(?:January|February|March|April|May|June|July|August|September|October|November|December)\b/gmi,
  /\bthe\seve\sof\b/gmi,
  /\bbank\sholiday\b/gmi,
  /\bchild\sof\b/gmi,
  /\ba\sbath\b/gmi,
  /\bchief\sof\sstaff\b/gmi,
  /\bdirector[\s\-]general\b/gmi,
  /\b(?:as|since)\s(?:(?:early(?:\sas)?|mid|late(?:\sas)?)[\s\-])?(?:January|February|March|April|May|June|July|August|September|October|November|December)\b/gmi,
  /\b(?:end|middle|start)\sof\s(?:January|February|March|April|May|June|July|August|September|October|November|December)\b/gmi,
  /\bfoster\s(?:carer|father|mother|parent)\b/gmi,
  /\bgood\s(?:evening|morning|night)\b/gmi,
  /\bhead\son\b/gmi,
  /\bmid\-\w+\b/gmi,
  /\bmore\son\b/gmi,
  /\bnon\-\w+\b/gmi,
  /\bnext\sdoor\b/gmi,
  /\bone\sof\sthe\b/gmi,
  /\bon\sfoot\b/gmi,
  /\bon\stop\sof\b/gmi,
  /\b(?:from|on)\s(?:Fri|Mon|Satur|Sun|Thurs|Tues|Wednes)day\b/gmi,
  /\b(?:during|since|until)\s(?:(?:early|mid|late)[\s\-])?(?:January|February|March|April|May|June|July|August|September|October|November|December)\b/gmi,
  /\b(?:from|in)\s(?:(?:early|mid|late)[\s\-])?(?:January|February|April|May|June|July|August|September|October|November|December)\b/gmi,
  /\b(?:from|in)\s(?:early|mid|late)[\s\-]March\b/gmi,
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