const a: RegExp[] = [
  /\b\w{2,}\-\d{1,2}\b/gmi,
  /\d+[\s-](?:day|mile|kilometer|km|step|week)s?\b/gmi,
  /\b(?:first|last|tier)\s\d+/gmi,
  /\d+\sof\b/gmi,
  /\d+[\s-](?:(?:out)?\sof|in)[\s-]\d+/gmi,

  /\ball\sof\b/gmi,
  /\ba\s(?:frank|penny|stone)\b/gmi,
  /\breal\sale\b/gmi,
  /\bamerican\sdream\b/gmi,
  /\bap{1,3}rox\b/gmi,
  /\barab\sspring\b/gmi,
  /\bassociate\sdean\b/gmi,
  /\bat\shome\b/gmi,
  /\bbaby\sjesus\b/gmi,
  /\bbank\sholiday\b/gmi,
  /\bbaby\sboomer\b/gmi,
  /\bthe\s[Bb]anks?\b/gm,
  /\bbank\sof\s\w+\b/gmi,
  /\b(?:Battle\sagainst|The\sBattle)\b/gm,
  /\bbear\sin\smind\b/gmi,
  /\bblack\s(?:box|friday)\b/gmi,
  /\bbona\sfide\b/gmi,
  /\bbrave\snew\b/gmi,
  /\bbroken\soff\b/gmi,
  /\bCan\sthe\b/gm,
  /\bchild\sof\b/gmi,
  /\b(?:bark|wood)\schipping\b/gmi,
  /\bchipping\s(?:against|away|on)\b/gmi,
  /\ba\sbath\b/gmi,
  /\bthe\s(?:bill|eve|lord|professors|white)\b/gmi,
  /\bcarole?\s(?:services?|sing(?:ers?|ing))\b/gm,
  /\bchief\sof\sstaff\b/gmi,
  /\bcity\scentre\b/gmi,
  /\bclash\sof\b/gmi,
  /\bconcerns\smount\b/gmi,
  /\bcul[\s-]de[\s-]sac\b/gmi,
  /\bdéjà\svu\b/gmi,
  /\bdirector[\s\-]general\b/gmi,
  /\bdua'?s\slayer\b/gmi,
  /\beastern\sbloc\b/gmi,
  /\ben\smasse\b/gmi,
  /\bet\scetera\b/gmi,
  /\b(?:beginning|by|during|early|end(?:ed)?|from|in|in\sthe|mid|middle|last|late|on|since|start|until)(?:\s|\-|as|of)+(?:(?:Jan|Febr)uary|March|April|May|June|July|August|(?:Septem|Octo|Novem|Decem)ber|(?:Mon|Tues|Wednes|Thurs|Fri|Satur|Sun)day)\b/gmi,
  /\b(?:(?:Jan|Febr)uary|March|April|May|June|July|August|(?:Septem|Octo|Novem|Decem)ber|(?:Mon|Tues|Wednes|Thurs|Fri|Satur|Sun)day)(?:and|through|to|\-|\s)+(?:(?:Jan|Febr)uary|March|April|May|June|July|August|(?:Septem|Octo|Novem|Decem)ber|(?:Mon|Tues|Wednes|Thurs|Fri|Satur|Sun)day)\b/gmi,
  /\b(?:christmas|new\syear[’‘'`]?s)\s(?:day|eve|season|week|weekend)\b/gmi,
  /\bforce\sfield\b/gmi,
  /\bfoster\s(?:carer|father|mother|parent)\b/gmi,
  /\bfriends\sof\b/gmi,
  /\bgood\sfriday\b/gmi,
  /\bguinea\spig\b/gmi,
  /\bgung[\s-]ho\b/gm,
  /\bhail\smary\b/gmi,
  /\bhanky[\s-]panky\b/gmi,
  /\bhead\son\b/gmi,
  /\bholding\s(?:child|hands\swith)\b/gmi,
  /\bHope\sof\b/gm,
  /\bHopes\s(?:for|that)\b/gm,
  /\bhunker\sdown\b/gmi,
  /\bin\slieu\sof\b/gmi,
  /\bin-the-back\b/gmi,
  /\bivy\sleague\b/gmi,
  /\blaissez[\s-]faire\b/gmi,
  /\blate[\s-]comer\b/gmi,
  /\blent\sback\b/gmi,
  /\blo\sand\sbehold\b/gmi,
  /\bmark\smy\swords\b/gmi,
  /\bmay\shave\b/gmi,
  /\bmea\sculpa\b/gmi,
  /\bmid\-\w+\b/gmi,
  /\bmiddle\seast\b/gmi,
  /(?!\.\s)Mine\swas\b/gm,
  /\bmodus\s(?:operandi|vivendi)\b/gmi,
  /\bmore\son\b/gmi,
  /\bmotley\screw\b/gmi,
  /\bmurphy'?s\slaw\b/gmi,
  /\bnew\syear\b/gmi,
  /\bnobel\sprize\b/gmi,
  /\bnon\-\w+\b/gmi,
  /\bone\sof\sthe\b/gmi,
  /\bon\sfoot\b/gmi,
  /\bon\stop\sof\b/gmi,
  /\boverton\swindow\b/gmi,
  // P
  /\bhaving\sa\spaddy\b/gmi,
  /\bpeace\sprize\b/gmi,
  /\bto\speter\sout\b/gm,
  /\bpetri\sdish\b/gmi,
  /\bpower\sclub\b/gmi,
  /\b(?:lower|upper)\squadrant\b/gmi,
  /\bquod\serat\b/gmi,
  // R
  /\bran\sback\b/gmi,
  /\broad\smap\b/gm,
  /\brust\sbelt\b/gmi,
  /\b[Ss]ales\sof\s\w+\b/gm,
  /\b(?:santa\sclaus|santa'?s?\sgrottos?)\b/gmi,
  /\bsmall\sarms\b/gmi,
  /\bstepping\son\b/gmi,
  /\b(?:autumn|spring|summer|winter)\s(?:camp|period)\b/gmi,
  /\bbig\stech\b/gmi,
  /\btik\stok\b/gmi,
  /\b(?:back|top)\sof\sfoot\b/gmi,
  /\btooth\s*fairy\b/gmi,
  /\b[Üüu]ber\salles\b/gmi,
  /\bultra\s(?:high|low)\b/gmi,
  /\bunder\slevel\b/gmi,
  /\bwake\sup\b/gmi,
  /\bwent\s(?:back|over)\b/gmi,
  /\bwilly[\s-]nilly\b/gmi,
  /\bto\sthe\swise\b/gmi,
  /\byoung\speople\b/gmi,

  /[A-Za-z]+['‘’`](?:ll|re|ve)/gm,
  /[A-Za-z]+n['‘’`]t/gm
];
const SkipGrammarRegEx: Set<RegExp> = new Set();
a.forEach(term => SkipGrammarRegEx.add(term));
export {
  SkipGrammarRegEx
};