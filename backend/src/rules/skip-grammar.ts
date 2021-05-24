const a: RegExp[] = [
  /\b\w{2,}\-\d{1,2}\b/gmi,
  /\d+[\s-](?:day|mile|kilometer|km|step|week)s?\b/gmi,
  /\b(?:first|last|tier)\s\d+/gmi,
  /\d+\sof\b/gmi,
  /\d+[\s-](?:(?:out)?\sof|in)[\s-]\d+/gmi,

  /\band\sthe\b/gm,
  /\ball\sof\b/gmi,
  /\ba\s(?:frank|penny|stone)\b/gmi,
  /\bachille’?s\sheel\b/gmi,
  /\breal\sale\b/gmi,
  /\bamerican\sdream\b/gmi,
  /\bap{1,3}rox\b/gmi,
  /\barab\sspring\b/gmi,
  /\bassociate\sdean\b/gmi,
  /\bat\shome\b/gmi,
  /\bat\sthe\b/gmi,
  // B
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
  // C
  /\bCan\sthe\b/gm,
  /\bchild\sof\b/gmi,
  /\b(?:bark|wood)\schipping\b/gmi,
  /\bchipping\s(?:against|away|on)\b/gmi,
  /\ba\sbath\b/gmi,
  /\bthe\s(?:bill|eve|lord|professors|white)\b/gmi,
  /\bcarole?\s(?:services?|sing(?:ers?|ing))\b/gm,
  /\bchief\sof\sstaff\b/gmi,
  /\bclash\sof\b/gmi,
  /\bto\sclose\b/gm,
  /\bconcerns\smount\b/gmi,
  /\bcul[\s-]de[\s-]sac\b/gmi,
  // D
  /\b(?:d[eé]j[aà])\svu\b/gmi,
  /\bde\sjour\b/gm,
  /\bdirector[\s\-]general\b/gmi,
  /\bdrive\sdown\b/gmi,
  /\bdua['‘’`]?s\slayer\b/gmi,
  // E
  /\beastern\sbloc\b/gmi,
  /\ben\smasse\b/gmi,
  /\bet\scetera\b/gmi,
  /\b(?:after|as|before|beginning|beyond|by|day|during|early|end(?:ed|ing)?|from|in|mid(?:dle)?|month|last|late|on|since|start(?:ed|ing)?|the|until|week)(?:\s(?:of|this))?[\s\-](?:(?:Jan|Febr)uary|March|April|May|June|July|August|(?:Septem|Octo|Novem|Decem)ber)(?:(?:and|through|to|\s|-)+(?:(?:Jan|Febr)uary|March|April|May|June|July|August|(?:Septem|Octo|Novem|Decem)ber))?\b/gmi,
  /\b(?:after|as|before|beginning|beyond|by|day|during|early|end(?:ed|ing)?|from|in|mid(?:dle)?|last|late|on|since|start(?:ed|ing)?|the|until|week)(?:\s(?:of|this))?[\s\-](?:(?:Mon|Tues|Wednes|Thurs|Fri|Satur|Sun)day)(?:(?:and|through|to|\s|-)+(?:(?:Mon|Tues|Wednes|Thurs|Fri|Satur|Sun)day))?\b/gmi,
  /\b(?:christmas|new\syear[’‘'`]?s)\s(?:day|eve|season|week|weekend)\b/gmi,
  /\bforce\sfield\b/gmi,
  /\bfoster\s(?:carer|father|mother|parent)\b/gmi,
  /\bfriends\sof\b/gmi,
  // G
  /\bgood\s(?:friday|morning)\b/gmi,
  /\bgreat\sbritish\b/gmi,
  /\bguinea\spig\b/gmi,
  /\bgung[\s-]ho\b/gm,
  // H
  /\bhail\smary\b/gmi,
  /\bhanky[\s-]panky\b/gmi,
  /\bhead\s(?:first|on)\b/gmi,
  /\bholding\s(?:child|hands\swith)\b/gmi,
  /\bHope\sof\b/gm,
  /\bHopes\s(?:for|that)\b/gm,
  /\bhunker\sdown\b/gmi,
  // I
  /\bin\slieu\sof\b/gmi,
  /\bin-the-back\b/gmi,
  /\bivy\sleague\b/gmi,
  // L
  /\blaissez[\s-]faire\b/gmi,
  /\blate[\s-]comer\b/gmi,
  /\blent\sback\b/gmi,
  /\blo\sand\sbehold\b/gmi,
  // M
  /\bmark\smy\swords\b/gmi,
  /\bmay\shave\b/gmi,
  /\bmea\sculpa\b/gmi,
  /\bmid\-\w+\b/gmi,
  /\bmiddle\seast\b/gmi,
  /(?!\.\s)Mine\swas\b/gm,
  /\bmodus\s(?:operandi|vivendi)\b/gmi,
  /\bmore\son\b/gmi,
  /\bmotley\screw\b/gmi,
  /\bmurphy['‘’`]?s\slaw\b/gmi,
  // N
  /\bnew\syear\b/gmi,
  /\bnobel\sprize\b/gmi,
  /\bnon\-\w+\b/gmi,
  // O
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
  // S
  /\b(?:It|He|She|They)\ssaid\b/gm,
  /\b[Ss]ales\sof\s\w+\b/gm,
  /\b(?:santa\sclaus|santa['‘’`]?s?\sgrottos?)\b/gmi,
  /\bsmall\sarms\b/gmi,
  /\bstepping\son\b/gmi,
  /\b(?:autumn|spring|summer|winter)\s(?:camp|period)\b/gmi,
  // T
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