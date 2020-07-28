export const AgeRegEx: RegExp[] = [
  new RegExp(/(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|\d{1,3})[\s\-](?:years?|month)[\s\-]old\b/, "gmi"),
  new RegExp(/\baged?\s(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|\d{1,3})(?:\sand\s(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|\d{1,3}))?/, "gmi")
];

export const BankingRegEx: RegExp[] = [
  new RegExp(/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/, "gmi"),
  new RegExp(/^4[0-9]{12}(?:[0-9]{3})?$/, "gmi"),
  new RegExp(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/, "gmi"),
  new RegExp(/\b(\d){7,8}\b/, "gmi"),
  new RegExp(/\b(\d){2}-(\d){2}-(\d){2}\b/, "gmi")
];
