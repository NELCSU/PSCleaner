const a: RegExp[] = [
  /\b(?:APEC|CIA|DEFRA|HMRC|MHRA|MIT|NAO|OPEC|PHE|PLO|SETI)\b/gm,
  
  /\b(?:amazon|american\sexpress)\b/gmi,
  // B
  /\bburger\sking\b/gmi,
  /\b(?:central|reserve|world)\sbank\b/gmi,
  /\bburkina\sfaso\b/gmi,
  // C
  /\b(?:(?:catholic|orthodox)\schurch|church\sof\sengland|coca\scola)\b/gmi,
  /\bcentral\safrican\srepublic\b/gmi,
  /\bcabo\sverde\b/gmi,
  /\bcôte\sd'ivoire\b/gmi,
  /\b(?:channel\sislands|community\scentre|costa\srica)\b/gmi,
  /\b(?:arts|community|national|royal|sports|technical)\scollege\b/gmi,
  /\bczech\srepublic\b/gmi,
  // D
  /\b(?:district|federal|supreme)\scourt\b/gmi,
  /\bdominican\srepublic\b/gmi,
  // E
  /\b(?:early\slearning|easyjet)\b/gmi,
  /\bel\ssalvador\b/gmi,
  // F
  /\b(?:fa\scup|faroe\sislands)\b/gmi,
  // G
  /\b(?:great\sbritain|guinea[\s-]bissau)\b/gmi,
  // H
  /\b(?:high\scommission|hong\skong|community\shospital)\b/gmi,
  // J
  /\b(?:jp\smorgan\schase|(?:infant|junior)\sand\s(?:infants?|junior))\b/gmi,
  // K
  /\bku\sklux\sklan\b/gmi,
  // M
  /\bmarshall\sislands\b/gmi,
  /\bnorth\smacedonia\b/gmi,
  // N
  /\b(?:nato|newshub|northern\sireland)\b/gmi,
  /\bnhs\s(?:england|london|scotland|wales)\b/gmi,
  // P
  /\bpapua\snew\sguinea\b/gmi,
  /\b(?:public\shealth\s(?:england|scotland|wales)|premier\sleague)\b/gmi,
  /\bPublic\sHealth\b/gmi,
  // R
  /\b(?:royal\s(?:mail|navy)|the\sred\scross)\b/gmi,
  // S
  /\b(?:sao\stome|san\smarino)\b/gmi,
  /\bsaint\s(?:kitts|lucia|vincent)\b/gmi,
  /\bsierra\sleone\b/gmi,
  /\bsolomon\sislands\b/gmi,
  /\b(?:saudi\sarabia|serco|slovakia|south\s(?:africa|sudan)|sri\slanka|(?:aided|community|day|high|law|(?:pre-)?preparatory|primary|secondary)\sschool)\b/gmi,
  // T
  /\bfinancial\stimes\b/gmi,
  /\btimor[\s-]leste\b/gmi,
  // U
  /\b(?:unesco|unicef|united\snations|un\sorgani[sz]ations?)\b/gmi,
  /\bunited\s(?:arab\semirates|states\sof\samerica)\b/gmi,
];
const OrganisationRegEx: Set<RegExp> = new Set();
a.forEach(term => OrganisationRegEx.add(term));
export {
  OrganisationRegEx
};