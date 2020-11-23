const a: RegExp[] = [
  /\b(?:APEC|CIA|MIT|PLO|SETI)\b/gm,
  
  /\bburger\sking\b/gmi,
  /\b(?:catholic|orthodox)\schurch\b/gmi,
  /\bfox\snews\b/gmi,
  /\bjp\smorgan\schase\b/gmi,
  /\bku\sklux\sklan\b/gmi,
  /\b(?:new\syork|la|washington)\s(?:news|post|times)\b/gmi,
  /\b(?:central|world)\sbank\b/gmi,
  /\bnational\scollege\b/gmi,
  /\broyal\snavy\b/gmi,
  /\bsinovac\b/gmi,
  /\bunited\snations\b/gmi,
];
const OrganisationRegEx: Set<RegExp> = new Set();
a.forEach(term => OrganisationRegEx.add(term));
export {
  OrganisationRegEx
};