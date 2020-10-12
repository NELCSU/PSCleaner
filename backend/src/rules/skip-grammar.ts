const a: RegExp[] = [
  /\b\w{2,}\-\d{1,2}\b/gmi,
  /\b\d+\s(?:mile|kilometer|km|step|week)s?\b/gmi,
  /\b(?:first|last)\s\d+\b/gmi,
  /\bd+\sof\b/gmi,
  /\bd+\s(?:out)?\sof\s\d+\b/gmi,
  /\b(?:american|australian)\sfootball\b/gmi,
  /\bap{1,3}rox\b/gmi,
  /\bat\shome\b/gmi,
  /\b(?:between|from|in|in\sthe|of|the)\s(?:January|February|March|April|May|June|July|August|September|October|November|December)\s?(?:and|through|to|\-)\s?(?:(?:early|mid|late)[\s\-])?(?:January|February|March|April|May|June|July|August|September|October|November|December)\b/gmi,
  /\bthe\seve\sof\b/gmi,
  /\bbank\sholiday\b/gmi,
  /\bchild\sof\b/gmi,
  /\b(?:bark|wood)\schipping\b/gmi,
  /\bchipping\s(?:against|away|on)\b/gmi,
  /\ba\sbath\b/gmi,
  /\bchief\sof\sstaff\b/gmi,
  /\bcity\scentre\b/gmi,
  /\bdirector[\s\-]general\b/gmi,
  /\ben\smasse\b/gmi,
  /\b(?:as|since)\s(?:(?:early(?:\sas)?|mid|late(?:\sas)?)[\s\-])?(?:January|February|March|April|May|June|July|August|September|October|November|December)\b/gmi,
  /\b(?:beginning|end|middle|start)\sof\s(?:January|February|March|April|May|June|July|August|September|October|November|December)\b/gmi,
  /\bnew\syear[\’\‘\'\`]?s\seve\b/gmi,
  /\bfoster\s(?:carer|father|mother|parent)\b/gmi,
  /\bgood\s(?:evening|morning|night)\b/gmi,
  /\bhead\son\b/gmi,
  /\bHope\sof\b/gm,
  /\bhunker\sdown\b/gmi,
  /\bmartial\sarts?\b/gmi,
  /\bmea\sculpa\b/gmi,
  /\bmid\-\w+\b/gmi,
  /\bmodus\soperandi\b/gmi,
  /\bmore\son\b/gmi,
  /\bnon\-\w+\b/gmi,
  /\bone\sof\sthe\b/gmi,
  /\bon\sfoot\b/gmi,
  /\bon\stop\sof\b/gmi,
  /\bplaying\sfields\b/gmi,
  /\brugby\s(?:field|league|union)\b/gmi,
  /\b(?:from|on|since)\s(?:Fri|Mon|Satur|Sun|Thurs|Tues|Wednes)day\b/gmi,
  /\b(?:Fri|Mon|Satur|Sun|Thurs|Tues|Wednes)day\sand\s(?:Fri|Mon|Satur|Sun|Thurs|Tues|Wednes)day\b/gmi,
  /\b(?:during|in\sthe|since|until)\s(?:(?:early|mid|late)[\s\-])?(?:January|February|March|April|May|June|July|August|September|October|November|December)\b/gmi,
  /\b(?:by|from|in|last)\s(?:(?:early|mid|late)[\s\-])?(?:January|February|April|May|June|July|August|September|October|November|December)\b/gmi,
  /\b(?:by|from|in)\s(?:early|mid|late)[\s\-]March\b/gmi,
  /\b[Ss]ales\sof\s\w+\b/gm,
  /\bstepping\son\b/gmi,
  /\bsummer\scamp\b/gmi,
  /\b(?:back|top)\sof\sfoot\b/gmi,
  /\bunited\snations\b/gmi,
  /\bwent\sover\b/gmi,

  /[a-z]+[\'\‘\’\`](?:ll|re|ve)/gmi,
  /[a-z]+n[\'\‘\’\`]t/gmi
];
const SkipGrammarRegEx: Set<RegExp> = new Set();
a.forEach(term => SkipGrammarRegEx.add(term));
export {
  SkipGrammarRegEx
};