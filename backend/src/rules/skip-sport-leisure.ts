const a: RegExp[] = [
  // A
  /\b(?:american|australian)\sfootball\b/gmi,
  /\bastro\sturf\b/gmi,

  // B
  /\bbrazilian\sju[\s-]?jitsu\b/gmi,

  // F
  /\bfoot\s*ball\b/gmi,

  // J
  /\b(?:ji?u)?[\s-]?jitsu\b/gmi,

  // M
  /\bmartial\sarts?\b/gmi,
  /\b(?:muddy|playing)\sfields?\b/gmi,
  /\bmonkey\spole\b/gmi,

  // P
  /\bpaint\sballing\b/gmi,
  /\bping\spong\b/gmi,
  /\bplay(?:ed|ing|s)?\s(?:with\s)?(?:frisb(?:ee|y)|rugby)\b/gmi,
  /\bgrand\sprix\b/gmi,
  /\bpool\s(?:ball|shower|table)s?\b/gmi,
  /\bpaddling\spool\b/gmi,

  // R
  /\brugby\s(?:club|fields?|inj(?:ury)?|league|training|union)\b/gmi,

  // S
  /\bskate\s?park\b/gmi,
  /\bsports\s(?:centre|hall)\b/gmi,
  /\bschool\splayground\b/gmi,
  /\bswimming\spool\b/gmi,

  // T
  /\btable\stennis\b/gmi,
  /\btennis\srackett?\b/gmi,
  /\btae\s?kwon\s?do\b/gmi,
];
const SportLeisureRegEx: Set<RegExp> = new Set();
a.forEach(term => SportLeisureRegEx.add(term));
export {
  SportLeisureRegEx
};