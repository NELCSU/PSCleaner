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

export const CurrencyRegEx: RegExp[] = [
  new RegExp(/[$£€]\s*\d[\d,]*(?:\.\d{1,2})?(?:\s?(?:b|m|tr)illion|bn|k|m)?\b/, "gmi"),
  new RegExp(/\d[\d,\.]*(?:\s(?:b|m|tr)illion|bn|k|m|p)?\s?(?:pounds?|pence|euros?|dollars?|cents?)\b/, "gmi")
];

export const DateRegEx: RegExp[] = [
  new RegExp(/\b(?:[0123]?\d(?:st|nd|rd|th)?)(?:[\s\-\.]{0,3}|\sof\s)?(?:jan\.?|janu?a?ry|feb\.?|febr?ua?ry|mar\.?|march|apr\.?|april|may|jun\.?|june|jul\.?|july|aug\.?|august|sept?\.?|september|oct\.?|october|nov\.?|november|dec\.?|december)(?:(?:[\s\-\.]{0,3})(?:\d\d|\d\d\d\d))?\b/, "gmi"),
  new RegExp(/\b(?:jan\.?|janu?a?ry|feb\.?|febr?ua?ry|mar\.?|march|apr\.?|april|may|jun\.?|june|jul\.?|july|aug\.?|august|sept?\.?|september|oct\.?|october|nov\.?|november|dec\.?|december)(?:(?:[\s\-\.]{0,3})(?:\d\d|\d\d\d\d))(?:[\s\-\.,]{0,3}\d\d\d\d)?\b/, "gmi"),
  new RegExp(/\b(?:mon\.?|monday|tues?\.?|tuesday|wed\.?|wednesday|thurs?\.?|thursday|fri\.?|friday|sat\.?|saturday|sun\.?|sunday|jan\.?|janu?a?ry|feb\.?|febr?ua?ry|mar\.?|march|apr\.?|april|may|jun\.?|june|jul\.?|july|aug\.?|august|sept?\.?|september|oct\.?|october|nov\.?|november|dec\.?|december)\s(?:the )?(?:[0123]?\d(?:st|nd|rd|th))\b/, "gmi"),
  new RegExp(/\b[0123]?\d[\s\/]{1,3}[0123]?\d[\s\/]{1,3}\d\d(?:\d\d)?|\d\d(?:\d\d)?[\s\/]{1,3}[0123]?\d[\s\/]{1,3}[0123]?\d\b/, "gmi"),
  new RegExp(/\b[0123]?\d[\s\-]{1,3}[0123]?\d[\s\-]{1,3}\d\d(?:\d\d)?|\d\d(?:\d\d)?[\s\-]{1,3}[0123]?\d[\s\-]{1,3}[0123]?\d\b/, "gmi"),
  new RegExp(/\b[0123]?\d[\s\.]{1,3}[0123]?\d[\s\.]{1,3}\d\d(?:\d\d)?|\d\d(?:\d\d)?[\s\.]{1,3}[0123]?\d[\s\.]{1,3}[0123]?\d\b/, "gmi"),
  new RegExp(/\b(?<=(?:after|and|before|between|during|early|in|late|on|until)\s)[12]\d\d\d\b/, "gmi")
];

export const EmailRegEx: RegExp[] = [
  new RegExp(/\b(?:[''\w+\-\_\.]+)@(?:[\w+\-\_\.]+)\.(?:[\w+\-\_\.]+)\b/, "gmi"),
  new RegExp(/\@\w+\b/, "gmi")
];

export const LocationRegEx: RegExp[] = [
  new RegExp(/\b(?:GIR|[a-zA-Z][a-zA-Z]?(?:[0-9][a-zA-Z]|[0-9]{1,2}))(?:[ ]{0,3})(?:[0-9][a-zA-Z]{2})\b/, "gmi"),
  new RegExp(/\bP\.?O\.?\sBox\s\d+\b/, "gmi"),
  new RegExp(/\b(?:block|suite)\s(?:\d\w?|\d\d?|\w\d?)\b|\b\d+(st|nd|rd|th)\sFloor\b/, "gmi"),
  new RegExp(/\bThe\s[A-Z][a-z]+\b/, "gm")
];

export const NHSRegEx: RegExp[] = [
  new RegExp(/[34679]\d\d\s?\d\d\d\s?\d\s?\d\s?\d\s?\d/, "gmi")
];

export const TelephoneRegEx: RegExp[] = [
  new RegExp(/(?:\+?\(?44\)?|0044\s?)\s?\(?0?\)?\s?\d\s?\d\)?[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d?/, "gmi"),
  new RegExp(/\(?0\)?[\s\-]?\d?[\s\-]?\d[\s\-]?\d\)?[\s\-]?\d\)?[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d?[\s\-]?\d[\s\-]?\d\d/, "gmi"),
];

export const TimeRegEx: RegExp[] = [
  new RegExp(/\b(?:[1-9]|1[0-2])\s?o[''\s]{1,2}clock\b/, "gmi"),
  new RegExp(/(?:[12]?\d[\.:][0-5]\d|[1-9]|1[0-2])\s?[ap]\.?m\.?/, "gmi"),
  new RegExp(/\b(?:[01]\d|2[0123]|\d):[0-5]\d(?:[:.]\d{1,4})?\b/, "gmi")
];

export const URLRegEx: RegExp[] = [
  new RegExp(/\b(?:(?:https?:\/\/)?www.[\w\/\?~&=%\+\-:\._\d]+|https?:\/\/[\w\/\?~&=%\+\-:\._\d]+)\b/, "gmi")
];