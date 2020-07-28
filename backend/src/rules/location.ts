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
  new RegExp(/(?:(?:\d+(?:st|nd|rd|th))|One|First|Two|Second|Three|Third|Four(?:teenth|teen|th)?|Fort(?:ieth|y)|Five|Fift(?:eenth|een|h|ieth|y)|Six(?:teenth|teen|th|tieth|ty)?|Seven(?:teenth|teen|th|tieth|ty)?|Eight(?:eenth|een|h|ieth|y)?|Nine(?:teenth|teen|th|tieth|ty)?|Ten(?:th)?|Eleven(?:th)?|Twel(?:fth|ve)|Thirt(?:eenth|een|ieth|y)|Twent(?:|ieth|y)|Hundred(?:th)?|Thousand(?:th)?|Million(?:th)?)\b/, "gm")
];

export const LocationMidfixRegEx: RegExp[] = [
  new RegExp(/\band\b/, "gmi"),
  new RegExp(/\bfor\b/, "gmi"),
  new RegExp(/\bof\b/, "gmi"),
  new RegExp(/\bof\sthe\b/, "gmi"),
  new RegExp(/\bon\b/, "gmi"),
  new RegExp(/\bon\sthe\b/, "gmi"),
  new RegExp(/\bthe\b/, "gmi"),
  new RegExp(/\-y\-/, "gmi")
];

const a: RegExp[] = [
  /\bP\.?O\.?\sBox\s\d+\b/gmi,
  /\b(?:apartment|block|suite|unit)\s(?:\d\w?|\d\d?|\w\d?)\b|\b\d+(st|nd|rd|th)\sFloor\b/gmi,
  /\-on\-sea\b/gmi,
  /\-on\-the\-wall\b/gmi,
  /\b(?:HMS|UK|USA?)\b/gm,

  /\babdication\swood\b/gmi,
  /\babundant\sgrace\b/gmi,
  /\bacquaintance\shill\b/gmi,
  /\badjuncts\scovert\b/gmi,
  /\badjustment\s(?:bottom|ground)\b/gmi,
  /\badmin\s(?:building|road)\b/gmi,
  /\baccommodation\s(?:lane|road)\b/gmi,
  /\badventure\s(?:lane|place)\b/gmi,
  /\badventurers?\s(?:drove|fen|land|quay|way)\b/gmi,
  /\baggravation\swood\b/gmi,
  /\baggregate\swalk\b/gmi,
  /\bagony\spoint\b/gmi,
  /\baircraft\s(?:esplanade|way)\b/gmi,
  /\bback\so['f]?\sthe\sworld\b/gmi,
  /\bbleaching\s(?:hill|rocks)\b/gmi,
  /\bbrother\s(?:hills|isle|loch)\b/gmi,
  /\bcoesau[\s\-]whips\b/gmi,
  /\bcommonwealth\s(?:avenue|close|drive|road|view|way)\b/gmi,
  /\bfunny[\s\-]shaped\swood\b/gmi,
  /\bheight\sof\sthe\sworld\b/gmi,
  /\bhockey\s(?:close|fields|hill)\b/gmi,
  /\bice\s(?:cleugh|drove|hill|house|pond|street)\b/gmi,
  /\bloading\s(?:bay|hope)\b/gmi,
  /\bplatform\s(?:\d+|drive|road|street)\b/gmi,
  /\bporpoise\shill\b/gmi,
  /\bporridge\s(?:bottom|cairn|green|pot\salley)\b/gmi,
  /\bskating\spond\b/gmi,
  /\bswinging\sbasin\b/gmi,
  /\btaxi\sway\b/gmi,
  /\bteapot\s(?:bank|corner|hill|lane|street)\b/gmi,
  /\btearing\sledge\b/gmi,
  /\btechnical\s(?:college|street)\b/gmi,
  /\btechnology\s(?:avenue|building|close|college|drive|road)\b/gmi,
  /\bThe\s(?:Waterwheel)\b/gm,
  /\bwaterwheel\s(?:close|court|lane|rise|way)\b/gmi,
  /\bwatery\s(?:bottom|brake|close|combe|dyke|gate|geo|grove|haven|hill|knowe|lane|marsh|orchard|pots|road|street|way|wood)\b/gmi,
  /\bwealth\s(?:hole|of\swaters)\b/gmi,
  /\bweeping\s(?:cross|elm)\b/gmi,
  /\bwelfare\s(?:avenue|close|crescent|park|road|view)\b/gmi,
  /\b(?:four|the)\swindings\b/gmi,
  /\bwhisky\spot\b/gmi,
  /\bwildlife\s(?:walk|way)\b/gmi,
  /\bwindfall\s(?:court|way|wood)\b/gmi,
  /\bwildflowers?\s(?:close|crescent|drive|grove|meadow|way)\b/gmi,
  /\bwindings\sroad\b/gmi,
  /\bwooded\sclose\b/gmi,
  /\bworld\s(?:end|way|wood)\b/gmi,
  /\byouth\s(?:close|wood)\b/gmi,
  /\bzone\spoint\b/gmi
];
const LocationRegEx: Set<RegExp> = new Set();
a.forEach(term => LocationRegEx.add(term));
export {
  LocationRegEx
};