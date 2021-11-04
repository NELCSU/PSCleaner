const a: RegExp[] = [
  // A
  /\b(?:american|australian)\sfootball\b/gmi,
  /\bastro\sturf\b/gmi,

  // J
  /\b(?:ji?u)?[\s-]?jitsu\b/gmi,

  // M
  /\bmartial\sarts?\b/gmi,
  /\b(?:muddy|playing|rugby)\sfields?\b/gmi,

  // P
  /\bpaint\sballing\b/gmi,
  /\bping\spong\b/gmi,
  /\bplay(?:ed|ing|s)?\s(?:with\s)?(?:frisb(?:ee|y)|rugby)\b/gmi,
  /\bgrand\sprix\b/gmi,

  // R
  /\b(?:nations\s)?rugby\s(?:league|union)\b/gmi,

  // S
  /\bskate\s?park\b/gmi,
  /\bsports\shall\b/gmi,

  // T
  /\btable\stennis\b/gmi,
  /\btennis\srackett?\b/gmi,
];
const SportLeisureRegEx: Set<RegExp> = new Set();
a.forEach(term => SportLeisureRegEx.add(term));
export {
  SportLeisureRegEx
};