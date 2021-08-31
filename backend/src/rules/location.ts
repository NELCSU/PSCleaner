export const LocationPrefixRegEx: RegExp[] = [
  /\bNo\.?\s\d+/gm, // e.g. No. 7
  /(?<![.,\\\/0])[1-9]\d{0,3}[a-h]?(?:-[1-9]\d{0,3}[a-h]?)?(?<!$)(?=\s[a-z]{2,})/gmi // e.g. 12-14a [Somewhere Street]
];
export const LocationMidfixRegEx: RegExp[] = [
  /(?![a-z]{2,}\s)&(?<!\s[a-z]{2,})/gmi,
  /\b(?:a|an|of)\b/gmi,
  /\b(?:And|The)\b/gm
];
const a: RegExp[] = [
  /\bP\.?O\.?\sBox\s\d+\b/gmi,
  /\b(?:Apartment|Block|Suite|Unit)\s(?:\d[A-Z]?|\d\d?|[A-Z]\d?)\b/gm,
  /\b\d+(?:st|nd|rd|th)\sFloor\b/gm,
  /\b(?:Road|Street)\s(?:No\s)?(?:\d+[abc]?|To\sThe)\b/gm,
];
const LocationRegEx: Set<RegExp> = new Set();
a.forEach(term => LocationRegEx.add(term));
export {LocationRegEx};