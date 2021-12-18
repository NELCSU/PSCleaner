/**********************************************************************
 * These patterns should be ignored as they loosely match to 
 * clinical abbreviations
 * 
 * Action needed
 * 
 * (low priority)
 * This list could do with a clean up as some false positive 
 * generating words have been rationalised over time.
 **********************************************************************/
const a: RegExp[] = [
  /\b[a-z]{2,}\-\d{1,2}\b/gmi,
  /\d+[\s-](?:bead|day|feet|foot|hand|mile|min|kilometer|km|oz|stair|step|time|week)s?\b/gmi,
  /\b(?:first|last|tier)\s\d+/gmi,
  /\d+\sof\b/gmi,
  /\d+[\s-](?:(?:out)?\sof|in)[\s-]\d+/gmi,

  /\b(?:APEC|CIA|DEFRA|ED|HMRC|MHRA|MIT|NAO|OPEC|PHE|PLO|SETI)\b/gm,

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
  /\banglo[\s-]saxon\b/gmi,
  /\bapril\sfool['‘’`s]{1,2}?\sday\b/gmi,
  /\ba(?:mazon|merican\sexpress|strazeneca)\b/gmi,
  
  // B
  /\bback\s(?:burn|head|of|riding)\b/gmi,
  /\bbarking\sdog\b/gmi,
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
  /\bbent\s(?:down|inwards|over)\b/gmi,
  /\bb(?:ritish\sairways|urger\sking)\b/gmi,
  /\b(?:central|reserve|world)\sbank\b/gmi,
  /\bburkina\sfaso\b/gmi,
  /\bball\svs\b/gmi,
  /\bbump\sto\b/gmi,

  // C
  /\bcame\sback\b/gmi,
  /\bCan\sthe\b/gm,
  /\bchild\sof\b/gmi,
  /\b(?:bark|wood)\schipping\b/gmi,
  /\bchipping\s(?:against|away|on)\b/gmi,
  /\bthe\s(?:bill|eve|lord|white)\b/gm,
  /\bcarole?\s(?:services?|sing(?:ers?|ing))\b/gm,
  /\bchief\sof\sstaff\b/gmi,
  /\bclash\sof\b/gmi,
  /\bto\sclose\b/gm,
  /\bconcerns\smount\b/gmi,
  /\bcul[\s-]de[\s-]sac\b/gmi,
  /\bcut\s(?:end\sof|foot|hand|through)\b/gmi,
  /\bcar\spark\b/gmi,
  /\bcafés?\b/gmi,
  /\bcoca[\s-]cola\b/gmi,
  /\bcayman\sislands\b/gmi,
  /\bcentral\safrican\srepublic\b/gmi,
  /\bcabo\sverde\b/gmi,
  /\bcôte\sd'ivoire\b/gmi,
  /\b(?:channel\sislands|community\scentre|costa\srica)\b/gmi,
  /\b(?:arts|community|national|royal|sports|technical)\scollege\b/gmi,
  /\bczech\srepublic\b/gmi,
  /\ba\scar\b/gmi,
  /\bconer\sof\b/gmi,

  // D
  /\bd[eé]j[aà]\svu\b/gmi,
  /\bde\sjour\b/gm,
  /\bdeep\s(?:blue|cave|green|hole|lake|mine|pond|purple|red|sea|tunnel|water)s?\b/gmi,
  /\bdirector[\s\-]general\b/gmi,
  /\bdrive\sdown\b/gmi,
  /\bdown\s(?:shaft|stairs?)\b/gmi,
  /\b(?:district|federal|supreme)\scourt\b/gmi,
  /\bdominican\srepublic\b/gmi,
  /\bdua['‘’`s]{1,2}\slayer\b/gmi,

  // E
  /\beastern\sbloc\b/gmi,
  /\ben\smasse\b/gmi,
  /\bet\scetera\b/gmi,
  /\b(?:Jan(?:uary)?|February|March|April|May|June|July|August|(?:Septem|Octo|Novem|Decem)ber)[\/\s-]+(?:Jan(?:uary)?|February|March|April|May|June|July|August|(?:Septem|Octo|Novem|Decem)ber)\b/gmi,
  /\b(?:after|as|before|beginning|between|beyond|by|day|during|early|end(?:ed|ing)?|for|from|if|in|mid(?:dle)?|month|last|late|on|since|start(?:ed|ing)?|the|till|to|until|week|when)(?:\s(?:and|of|this))?[\s\-](?:Jan(?:uary)?|February|March|April|May|June|July|August|(?:Septem|Octo|Novem|Decem)ber)(?:(?:and|or|through|to|\s|-)+(?:Jan(?:uary)?|February|March|April|May|June|July|August|(?:Septem|Octo|Novem|Decem)ber))?\b/gmi,
  /\b(?:after|as|before|beginning|between|beyond|by|day|during|early|end(?:ed|ing)?|for|from|if|in|mid(?:dle)?|last|late|on|since|start(?:ed|ing)?|the|till|to|until|week|when)(?:\s(?:and|of|this))?[\s\-](?:(?:Mon|Tues|Wednes|Thurs|Fri|Satur|Sun)day)(?:(?:and|or|through|to|\s|-)+(?:(?:Mon|Tues|Wednes|Thurs|Fri|Satur|Sun)day))?\b/gmi,
  /\b(?:christmas|new\syear[’‘'`]?s)\s(?:day|eve|season|week|weekend)\b/gmi,
  /\b(?:early\slearning|easyjet)\b/gmi,
  /\bel\ssalvador\b/gmi,
  /\bthis\seve\b/gm,
  
  // F
  /\bfalls?\s(?:down|from|off|on|over)\b/gmi,
  /\bf[ae]ll\sdown\sthe\stairs\b/gmi,
  /\bf[ae]ll\s[io]n\s?to\b/gmi,
  /\bforce\sfield\b/gmi,
  /\bfoster\s(?:carer|father|mother|parent)\b/gmi,
  /\b(?:fa\scup|faroe\sislands)\b/gmi,
  /\bFirst\sMinister\b/gm,
  /\bFood\sBank\b/gm,
  /\bface\sfirst\b/gmi,

  // G
  /\bin\sthe\sgarden\b/gmi,
  /\bgood\s(?:friday|morning)\b/gmi,
  /\bgreat\sbritish\b/gmi,
  /\bguinea\spig\b/gmi,
  /\bgung[\s-]ho\b/gm,
  /\b(?:great\sbritain|guinea[\s-]bissau)\b/gmi,
  /\bGreen\sPass\b/gm,

  // H
  /\bhail\smary\b/gmi,
  /\bhanky[\s-]panky\b/gmi,
  /\bHeard\sa\b/gm,
  /\bholding\s(?:child|hands\swith)\b/gmi,
  /\bHope\sof\b/gm,
  /\bHopes\s(?:for|that)\b/gm,
  /\bhunker\sdown\b/gmi,
  /\bhard\sedge\b/gmi,
  /\bhigh\scommission\b/gmi,
  /\bhong\skong\b/gmi,
  /\bhow\s(?:far|fell|long)\b/gmi,

  // I
  /\b(?:inner|lower|outer|upper)\s(?:inner|lower|outer|upper)\b/gmi,
  /\bin\slieu\sof\b/gmi,
  /\bivy\sleague\b/gmi,
  /\bivory\scoast\b/gmi,
  /\bin\sthe\s(?:bottom|side|top)\sof\b/gmi,
  /\binto\sthe\s(?:bottom|side|top)\sof\b/gmi,

  // J
  /\b(?:jp\smorgan\schase|(?:infant|junior)\sand\s(?:infants?|junior))\b/gmi,
  /\bJoint\sCommittee\b/gm,

  // K
  /\bku\sklux\sklan\b/gmi,

  // L
  /\blanded\son\s(?:back|bottom)\b/gmi,
  /\blaissez[\s-]faire\b/gmi,
  /\blate[\s-]comer\b/gmi,
  /\blent\sback\b/gmi,
  /\blo\sand\sbehold\b/gmi,
  /\blinkedin\b/gmi,
  /\blower\squadrant\b/gmi,
  /\blarge\spiece\b/gmi,

  // M
  /\bmark\sto\b/gmi,
  /\bmike\s(?:check|drop)\b/gm,
  /\bmark\smy\swords\b/gmi,
  /\bmay\shave\b/gmi,
  /\bmea\sculpa\b/gmi,
  /\bmid\-\w+\b/gmi,
  /\bmiddle\seast\b/gmi,
  /(?!\.\s)Mine\swas\b/gm,
  /\bmodus\s(?:operandi|vivendi)\b/gmi,
  /\bmore\son\b/gmi,
  /\bmotley\screw\b/gmi,
  /\bmurphy['‘’`s]{1,2}\slaw\b/gmi,
  /\bmarshall\sislands\b/gmi,
  /\bnorth\smacedonia\b/gmi,

  // N
  /\bnew\syear\b/gmi,
  /\bnobel\sprize\b/gmi,
  /\bnon\-\w+\b/gmi,
  /\b(?:nato|newshub|northern\sireland)\b/gmi,
  /\bnhs\s(?:england|london|scotland|wales)\b/gmi,
  /\bnew\syork\stimes\b/gmi,
  /\bnorth\samerica\b/gmi,
  /\bno\sreal\b/gmi,

  // O
  /\bone\sof\sthe\b/gmi,
  /\bon\sfoot\b/gmi,
  /\bon\stop\sof\b/gmi,
  /\boverton\swindow\b/gmi,
  /\bon\s(?:the\s)?(?:floor|shelf|table)\b/gmi,

  // P
  /\bhaving\sa\spaddy\b/gmi,
  /\bpeace\sprize\b/gmi,
  /\bto\speter\sout\b/gm,
  /\bpetri\sdish\b/gmi,
  /\bpower\sclub\b/gmi,
  /\bquod\serat\b/gmi,
  /\bpound\s(?:coins?|sterling)\b/gmi,
  /\bpenny\scoins?\b/gmi,
  /\bpapua\snew\sguinea\b/gmi,
  /\bpublic\shealth\s(?:england|scotland|wales)\b/gmi,
  /\bpremier\sleague\b/gmi,
  /\bPublic\sHealth\b/gmi,

  // R
  /\b(?:into|the)\sriver\b/gmi,
  /\bred\sbead\b/gmi,
  /\brusty\snails\b/gmi,
  /\bran\s(?:back|up)\b/gmi,
  /\brice\spaddy\b/gmi,
  /\broad\smap\b/gm,
  /\brust\sbelt\b/gmi,
  /\bround[\s-]?robin\b/gmi,
  /\broyal\s(?:family|guard|mail|navy)\b/gmi,

  // S
  /\b(?:small|medium|large)[\s-]scale\b/gmi,
  /\bsub-station\b/gmi,
  /\b(?:It|He|She|They)\ssaid\b/gm,
  /\b[Ss]ales\sof\s\w+\b/gm,
  /\b(?:santa\sclaus|santa['‘’`s]{1,2}?\sgrottos?)\b/gmi,
  /\bsmall\s(?:arms|mark)\b/gmi,
  /\bstepping\son\b/gmi,
  /\b(?:autumn|spring|summer|winter)\s(?:camp|period)\b/gmi,
  /\b(?:sao\stome|san\smarino)\b/gmi,
  /\bsaint\s(?:kitts|lucia|vincent)\b/gmi,
  /\bsierra\sleone\b/gmi,
  /\bsolomon\sislands\b/gmi,
  /\bsouth\samerica\b/gmi,
  /\bsaudi\sarabia\b/gmi,
  /\bserco\b/gmi,
  /\bslovakia\b/gmi,
  /\bsouth\s(?:africa|sudan)\b/gmi,
  /\bsri\slanka\b/gmi,
  /\bside\sof\b/gmi,
  /\bschol\sactivity\b/gmi,

  // T
  /\bbig\stech\b/gmi,
  /\btooth\s*fairy\b/gmi,
  /\btrod\son\b/gmi,
  /\bfinancial\stimes\b/gmi,
  /\bThe\sGrand\sTour\b/gm,
  /\btimor[\s-]leste\b/gmi,

  // U
  /\bupper\squadrant\b/gmi,
  /\bUncle\sTom\b/gm,
  /\b[Üüu]ber\salles\b/gmi,
  /\bultra\s(?:high|low|non)\b/gmi,
  /\bunder\slevel\b/gmi,
  /\bwake\sup\b/gmi,
  /\bwilly[\s-]nilly\b/gmi,
  /\bto\sthe\swise\b/gmi,
  /\b(?:unesco|unicef|united\snations|un\sorgani[sz]ations?)\b/gmi,
  /\bunited\s(?:arab\semirates|states\sof\samerica)\b/gmi,

  // V
  /\bvirgin\satlantic\b/gmi,

  // W
  /\bpiece\sof\swood\b/gmi,
  /\bway\s(?:home|of\sthe)\b/gmi,
  /\bwent\s(?:down|into)\b/gmi,
  /\bwill\sneed\b/gmi,

  // Y
  /\byoung\speople\b/gmi,

  /[A-Za-z]+['‘’`](?:ll|re|ve)/gm,
  /[A-Za-z]+n['‘’`]t/gm
];
const SkipGrammarRegEx: Set<RegExp> = new Set();
a.forEach(term => SkipGrammarRegEx.add(term));
export {
  SkipGrammarRegEx
};