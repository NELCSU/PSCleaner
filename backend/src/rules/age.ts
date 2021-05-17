export const AgeRegEx: RegExp[] = [
  /\d{1,3}[\s\-]years?[\s\-]old\b/gmi,
  /\d{1,3}[\s\-]y[\\\/]o\b/gmi,
  /\bage[ds]?[\s\:]\d{1,3}(\sand\s\d{1,3})?/gmi,
];