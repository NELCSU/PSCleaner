const a: RegExp[] = [
  /\b(?:APEC|CIA|DEFRA|HMRC|MHRA|MIT|NAO|OPEC|PHE|PLO|SETI)\b/gm,
  
  /\b(?:amazon|american\sexpress)\b/gmi,
  // B
  /\bburger\sking\b/gmi,
  /\b(?:central|reserve|world)\sbank\b/gmi,
  // C
  /\b(?:(?:catholic|orthodox)\schurch|church\sof\sengland|coca\scola)\b/gmi,
  // D
  /\b(?:district|federal|supreme)\scourt\b/gmi,
  // E
  /\beasyjet\b/gmi,
  // H
  /\bhigh\scommission\b/gmi,
  // J
  /\b(?:jp\smorgan\schase|junior\sand\sinfants?)\b/gmi,
  // K
  /\bku\sklux\sklan\b/gmi,
  // L
  /\blaw\sschool\b/gmi,
  // N
  /\b(?:national\scollege|nato|newshub)\b/gmi,
  /\bnhs\s(?:england|london|scotland|wales)\b/gmi,
  // P
  /\b(?:public\shealth\sengland|premier\sleague)\b/gmi,
  /\bPublic\sHealth\b/gmi,
  // R
  /\b(?:royal\s(?:college|mail|navy)|the\sred\scross)\b/gmi,
  // S
  /\bserco\b/gmi,
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