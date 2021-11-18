/**********************************************************************
 * Pattern matches statements of age
 **********************************************************************/
export const AgeRegEx: RegExp[] = [
  /\b\d{1,3}[\s\-]years?[\s\-]old\b/gmi,
  /\b\d{1,3}[\s\-]y[\\\/]o\b/gmi,
  /\b\baged?\s\d{1,3}(?!\s?(?:and|to|\-)\s?\d{1,3})\b\b/gmi,
];