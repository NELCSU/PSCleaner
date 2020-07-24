const a: RegExp[] = [
  /\bball\sbearing\b/gmi,
  /\bclimbing\sframe\b/gmi,
  /\bdining\sroom\b/gmi,
  /\bfishing\shook\b/gmi,
  /\bhot\swater\sbottle\b/gmi,
  /\bhover\sboard\b/gmi,
  /\bskate\spark\b/gmi,
  /\btennis\srackett?\b/gmi,
  /\btrampol(?:ine)?\b/gmi
];
const HouseholdItemRegEx: Set<RegExp> = new Set();
a.forEach(term => HouseholdItemRegEx.add(term));
export {
  HouseholdItemRegEx
};