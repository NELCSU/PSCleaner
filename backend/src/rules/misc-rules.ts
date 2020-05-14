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
  new RegExp(/\b(?:[0123]?\d(?:st|nd|rd|th)?)(?:[\s\-\.]{0,3}|\sof\s)?(?:jan\.?|janu?a?ry|feb\.?|febr?ua?ry|mar\.?|march|apr\.?|april|may|jun\.?|june|jul\.?|july|aug\.?|august|sept?\.?|september|oct\.?|october|nov\.?|november|dec\.?|december)(?:(?:[\s\-\.,]{0,3})(?:\d\d|\d\d\d\d))?\b/, "gmi"),
  new RegExp(/\b(?:jan\.?|janu?a?ry|feb\.?|febr?ua?ry|mar\.?|march|apr\.?|april|may|jun\.?|june|jul\.?|july|aug\.?|august|sept?\.?|september|oct\.?|october|nov\.?|november|dec\.?|december)(?:(?:[\s\-\.,]{0,3})(?:\d\d|\d\d\d\d))(?:[\s\-\.,]{0,3}\d\d\d\d)?\b/, "gmi"),
  new RegExp(/\b(?:mon\.?|monday|tues?\.?|tuesday|wed\.?|wednesday|thurs?\.?|thursday|fri\.?|friday|sat\.?|saturday|sun\.?|sunday|jan\.?|janu?a?ry|feb\.?|febr?ua?ry|mar\.?|march|apr\.?|april|may|jun\.?|june|jul\.?|july|aug\.?|august|sept?\.?|september|oct\.?|october|nov\.?|november|dec\.?|december)\s(?:the )?(?:[0123]?\d(?:st|nd|rd|th))\b/, "gmi"),
  
  // dd mm yy(yy)
  new RegExp(/\b(?:0?[1-9]|[12]\d|3[01])[\s\.\/\-]{1,3}(?:0?[1-9]|[12]\d|3[01])[\s\.\/\-]{1,3}\d\d(?:\d\d)?\b/,"gmi"),
  // yy(yy) mm dd
  new RegExp(/\b\d\d(?:\d\d)?[\s\.\/\-]{1,3}(?:0?[1-9]|[12]\d|3[01])[\s\.\/\-]{1,3}(?:0?[1-9]|[12]\d|3[01])\b/,"gmi"),

  new RegExp(/\b(?<=(?:after|and|before|between|during|early|in|in the|late|on|until)\s)(?:[12]\d\d\d|Jan\.?|Janu?a?ry|Feb\.?|Febr?ua?ry|Mar\.?|March|Apr\.?|April|May|Jun\.?|June|Jul\.?|July|Aug\.?|August|Sept?\.?|September|Oct\.?|October|Nov\.?|November|Dec\.?|December)\b/, "gm"),
  new RegExp(/\b(?<=(?:on)\s)(?:mon|tues|wednes|thurs|fri|satur|sun)day\b/, "gmi")
];

export const EmailRegEx: RegExp[] = [
  new RegExp(/\b(?:[''\w+\-\_\.]+)@(?:[\w+\-\_\.]+)\.(?:[\w+\-\_\.]+)\b/, "gmi"),
  new RegExp(/\@\w+\b/, "gmi")
];

/*
1st, 2nd, 3rd, 4th, one, two, three, four, five, six, seven, eight, nine, ten
eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen
twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety
first, second, third, fourth, fifth, sixth, seventh, eighth, nineth, tenth
eleventh, twelfth, thirteenth, fourteenth, fifteenth, sixteenth, seventeenth, eighteenth, nineteenth
twentieth, thirtieth, fortieth, fiftieth, sixtieth, seventieth, eightieth, ninetieth
hundred, hundredth, thousand, thousandth, million
*/
export const LocationPrefixRegEx: RegExp[] = [
  new RegExp(/\b(?<![,\\\/])(?:[1-9]\d{0,3}\-)?[1-9]\d{0,3}[a-h]?(?=\s[a-z]{3,})/, "gmi"),
  new RegExp(/(?:(?:\d+(?:st|nd|rd|th))|One|First|Two|Second|Three|Third|Four(?:teenth|teen|th)?|Fort(?:ieth|y)|Five|Fift(?:eenth|een|h|ieth|y)|Six(?:teenth|teen|th|tieth|ty)?|Seven(?:teenth|teen|th|tieth|ty)?|Eight(?:eenth|een|h|ieth|y)?|Nine(?:teenth|teen|th|tieth|ty)?|Ten(?:th)?|Eleven(?:th)?|Twel(?:fth|ve)|Thirt(?:eenth|een|ieth|y)|Twent(?:|ieth|y)|Hundred(?:th)?|Thousand(?:th)?|Million(?:th)?)\b/, "gm"),
  new RegExp(/\b(?:Bay|City|Hall|Isle|Ministry|University)\sof\b/, "gm")
];

export const LocationRegEx: RegExp[] = [
  new RegExp(/\b(?:GIR|[a-zA-Z][a-zA-Z]?(?:[0-9][a-zA-Z]|[0-9]{1,2}))(?:[ ]{0,3})(?:[0-9][a-zA-Z]{2})\b/, "gmi"),
  new RegExp(/\bP\.?O\.?\sBox\s\d+\b/, "gmi"),
  new RegExp(/\b(?:apartment|block|suite|unit)\s(?:\d\w?|\d\d?|\w\d?)\b|\b\d+(st|nd|rd|th)\sFloor\b/, "gmi"),
  new RegExp(/(?<![\."]\s+)The\s[A-Z][a-z]+\b/, "gm")
];

export const NHSRegEx: RegExp[] = [
  new RegExp(/[34679]\d\d\s?\d\d\d\s?\d\s?\d\s?\d\s?\d/, "gmi")
];

export const SkipRegEx: RegExp[] = [
  new RegExp(/\bmid\-\w+\b/, "gmi"),
  new RegExp(/\b\w{2,}\-\d{1,2}\b/, "gmi"),
  new RegExp(/\b\d+(?:g|mg|ml)\b/, "gm"),
  new RegExp(/\b(?:BIBA|CAMHS|CAMS|DIB|DOB|ED|EMAS|LAT|MUA|NIC|NLOC|NLWC|PANP|PEARL|PERLA|ROM|SOB|UTI)\b/, "gm")
];

export const TelephoneRegEx: RegExp[] = [
  new RegExp(/(?:\+?\(?44\)?|0044\s?)\s?\(?0?\)?\s?\d\s?\d\)?[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d?/, "gmi"),
  new RegExp(/\(?0\)?[\s\-]?\d?[\s\-]?\d[\s\-]?\d\)?[\s\-]?\d\)?[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d?[\s\-]?\d[\s\-]?\d\d/, "gmi"),
];

export const TimeRegEx: RegExp[] = [
  new RegExp(/\b(?:[1-9]|1[0-2])\s?o[''\s]{1,2}clock\b/, "gmi"),
  new RegExp(/(?:[1-9]|1[0-2])\s?[ap]\.?m\.?/, "gmi"),
  new RegExp(/(?:[12]?\d[\.:][0-5]\d)(?:\s?[ap]\.?m\.?)?/, "gmi"),
  new RegExp(/\b(?:[01]\d|2[0123]|\d):[0-5]\d(?:[:.]\d{1,4})?\b/, "gmi"),
  new RegExp(/(?:on|at|@)\s?(?:[01]\d|2[0123]|\d)[0-5]\d\b/, "gmi") // @1700
];

export const URLRegEx: RegExp[] = [
  new RegExp(/\b(?:(?:https?:\/\/)?www.[\w\/\?~&=%\+\-:\._\d]+|https?:\/\/[\w\/\?~&=%\+\-:\._\d]+)\b/, "gmi")
];