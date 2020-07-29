const a: RegExp[] = [
  /\bball\sbearing\b/gmi,
  /\bbent\s(?:down|inwards|over)\b/gmi,
  /\bcandle\swax\b/gmi,
  /\bclimbing\sframe\b/gmi,
  /\bdining\sroom\b/gmi,
  /\bdog\sbite\b/gmi,
  /\bfalls?\s(?:down|from|off|on)\b/gmi,
  /\bfell\s(?:backwards?|down|forward|from|off|on)\b/gmi,
  /\bfire\sdoor\b/gmi,
  /\bfishing\shook\b/gmi,
  /\bfriends\shouse\b/gmi,
  /\bhurt\s(?:neck|shoulder)\b/gmi,
  /\bgas\spipe\b/gmi,
  /\bglass\s(?:cut|table)\b/gmi,
  /\bhair\sdryer\b/gmi,
  /\bhead\sinj(?:ury)?\b/gmi,
  /\bhot\swater\sbottle\b/gmi,
  /\bhover\sboard\b/gmi,
  /\blower\sleg\b/gmi,
  /\bkick\sthe\sball\b/gmi,
  /\bkitchen\sknife\b/gmi,
  /\bmuddy\sfield\b/gmi,
  /\bon\s(?:shelf|table)\b/gmi,
  /\bpiggy\sback\b/gmi,
  /\b(?:play(?:ed|ing|s)?\srugby)\b/gmi,
  /\brocking\shorse\b/gmi,
  /\bskate\spark\b/gmi,
  /\bslipped\sfoot\b/gmi,
  /\bstair\sgate\b/gmi,
  /\btennis\srackett?\b/gmi,
  /\bthe\sbath\b/gmi,
  /\btrampol(?:ine)?\b/gmi,
  /\btrod\son\b/gmi,
  /\bwater\sbottle\b/gmi,
  /\bwindow\ssill\b/gmi,
  /\bwooden\sdoor\b/gmi,
  /\bzimmer\sframe\b/gmi
];
const RospaRegEx: Set<RegExp> = new Set();
a.forEach(term => RospaRegEx.add(term));
export {
  RospaRegEx
};