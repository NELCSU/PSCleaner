const a: RegExp[] = [
  /\b(?:APEC|CIA|DEFRA|HMRC|MHRA|MIT|NAO|OPEC|PLO|SETI)\b/gm,
  
  /\bburger\sking\b/gmi,
  /\b(?:catholic|orthodox)\schurch\b/gmi,
  /\bjp\smorgan\schase\b/gmi,
  /\b(?:district|supreme)\scourt\b/gmi,
  /\bku\sklux\sklan\b/gmi,
  /\blaw\sschool\b/gmi,
  /\b(?:central|reserve|world)\sbank\b/gmi,
  /\bnational\scollege\b/gmi,
  /\bnhs\s(?:england|scotland|wales)\b/gmi,
  /\bpubic\shealth\sengland\b/gmi,
  /\broyal\s(?:college|navy)\b/gmi,
  /\bserco\b/gmi,
  /\b(?:nato|unesco|unicef|united\snations)\b/gmi,
];
const OrganisationRegEx: Set<RegExp> = new Set();
a.forEach(term => OrganisationRegEx.add(term));
export {
  OrganisationRegEx
};