/**********************************************************************
 * These patterns should be ignored as they loosely match to 
 * sports/leisure categories
 * 
 * Action needed
 * 
 * (low priority)
 * This list could do with a clean up as some false positive 
 * generating words have been rationalised over time.
 **********************************************************************/
const a: RegExp[] = [
  // A
  /\b(?:american|australian)\sfootball\b/gmi,
  /\bastr[ao]\sturf\b/gmi,

  // B
  /\bboulder\sclimbing\b/gmi,
  /\bbrazilian\sju[\s-]?jitsu\b/gmi,

  // D
  /\bdance\s(?:hall)\b/gmi,
  /\bdodge\sball\b/gmi,

  // F
  /\bfoot\s*ball\b/gmi,

  // J
  /\b(?:ji?u)?[\s-]?jitsu\b/gmi,

  // M
  /\bmar(?:sh|ti)al\sarts?\b/gmi,
  /\b(?:muddy|playing)\sfields?\b/gmi,
  /\bmonkey\spole\b/gmi,

  // P
  /\bpaint\sballing\b/gmi,
  /\bping\spong\b/gmi,
  /\bplay(?:ed|ing|s)?\s(?:with\s)?frisb(?:ee|y)\b/gmi,
  /\bgrand\sprix\b/gmi,
  /\bpool\s(?:ball|shower|table)s?\b/gmi,

  // R
  /\bred\sball\b/gmi,

  // S
  /\bskate\s?park\b/gmi,
  /\bsports\s(?:centre|field|ground|hall)\b/gmi,
  /\bstar\ssequin\b/gmi,

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