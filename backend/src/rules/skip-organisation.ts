const a: RegExp[] = [
  /\b(?:APEC|CIA|DEFRA|HMRC|MHRA|MIT|NAO|OPEC|PHE|PLO|SETI)\b/gm,
  
  /\b(?:amazon|american\sexpress)\b/gmi,
  // B
  /\bburger\sking\b/gmi,
  /\b(?:central|reserve|world)\sbank\b/gmi,
  // C
  /\b(?:(?:catholic|orthodox)\schurch|church\sof\sengland|coca\scola)\b/gmi,
  /\b(?:channel\sislands|community\scentre)\b/gmi,
  /\b(?:arts|community|national|royal|sports)\scollege\b/gmi,
  // D
  /\b(?:district|federal|supreme)\scourt\b/gmi,
  // E
  /\b(?:early\slearning|easyjet)\b/gmi,
  // F
  /\b(?:fa\scup|faroe\sislands)\b/gmi,
  // G
  /\bgreat\sbritain\b/gmi,
  // H
  /\b(?:high\scommission|hong\skong|community\shospital)\b/gmi,
  // J
  /\b(?:jp\smorgan\schase|(?:infant|junior)\sand\s(?:infants?|junior))\b/gmi,
  // K
  /\bku\sklux\sklan\b/gmi,
  // N
  /\b(?:nato|newshub|northern\sireland)\b/gmi,
  /\bnhs\s(?:england|london|scotland|wales)\b/gmi,
  // P
  /\b(?:public\shealth\s(?:england|scotland|wales)|premier\sleague)\b/gmi,
  /\bPublic\sHealth\b/gmi,
  // R
  /\b(?:royal\s(?:mail|navy)|the\sred\scross)\b/gmi,
  // S
  /\b(?:saudi\sarabia|serco|south\s(?:africa|korea)|sri\slanka|(?:community|day|high|law|(?:pre-)?preparatory|primary|secondary)\sschool)\b/gmi,
  // T
  /\bFinancial\sTimes\b/gmi,
  // U
  /\b(?:unesco|unicef|united\snations|un\sorgani[sz]ations?)\b/gmi,
];
const OrganisationRegEx: Set<RegExp> = new Set();
a.forEach(term => OrganisationRegEx.add(term));
export {
  OrganisationRegEx
};