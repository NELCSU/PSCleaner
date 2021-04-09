const a: RegExp[] = [
  /\b(?:american|australian)\sfootball\b/gmi,
  /\bbali\sbreeze\b/gmi,
  /\bball\sbearing\b/gmi,
  /\bangle\sgrinder\b/gmi,
  /\bariel\s(?:liquitab|tablets?|washing)\b/gmi,
  /\bastro\sturf\b/gmi,
  // B
  /\bbaby\s(?:sling|walker)\b/gmi,
  /\bbali\sbreeze\b/gmi,
  /\bf[ae]ll\sin\sbath\b/gmi,
  /\bbatterie\b/gmi,
  /\bbean\sbag\b/gmi,
  /\bbent\s(?:down|inwards|over)\b/gmi,
  /\bblue\stack\b/gmi,
  /\b(?:bunk|divan|wooden)\sbed\b/gmi,
  // C
  /\bcamping\s(?:pot|stove)s?\b/gmi,
  /\bcandle\swax\b/gmi,
  /\bswallow[a-z]*\schalk\b/gmi,
  /\bchain\ssaw\b/gmi,
  /\bcheddar\scheese\b/gmi,
  /\bcoat\shanger\b/gmi,
  /\bcotton\sbud\b/gmi,
  /\bclimbing\sframe\b/gmi,
  /\bcut\sthrough\b/gmi,
  /\bcuticura\shand\b/gmi,
  // D
  /\bdog\scage\b/gmi,
  /\bdog\sbite\b/gmi,
  // E
  /\beau\sde\scologne\b/gmi,
  /\bear\sring\b/gmi,
  /\beating\smcdonalds\b/gmi,
  // F
  /\bfalls?\s(?:down|from|off|on|over)\b/gmi,
  /\bfell\s(?:backwards?|down|forward|from|off|on|out|over)\b/gmi,
  /\bfirst\saider\b/gmi,
  /\bfishing\shook\b/gmi,
  /\bfrench\sfries\b/gmi,
  /\bfriends\shouse\b/gmi,
  /\b(?:cut|hurt)\s(?:hand|shoulder)\b/gmi,
  // G
  /\b(?:gas\spipe|garage\sdoor)\b/gmi,
  /\bgetting\s(?:in|from|to|out)\b/gmi,
  /\bglass\s(?:cut|table)\b/gmi,
  // H
  /\bhair\sdryer\b/gmi,
  /\b(?:by|with)(?:\sa)?\shammer\b/gmi,
  /\bhand\s(?:rail|saw)\b/gmi,
  /\bhard\sedge\b/gmi,
  /\bhead\sinj(?:ury)?\b/gmi,
  /\b(?:bleach|(?:hot\s)?water)\sbottle\b/gmi,
  /\bbottle\sof\s(?:bleach|(?:hot\s)?water)\b/gmi,
  /\bhorse\sbox\b/gmi,
  /\bhover\sboard\b/gmi,
  /\bhula\shoop\b/gmi,
  // J
  /\b(?:canning|mason)\sjar\b/gmi,
  /\b(?:ji?u)?[\s-]?jitsu\b/gmi,
  /\blower\sleg\b/gmi,
  /\b(?:car|lift)\sjack\b/gmi,
  // L
  /\b(?:from|of|off|on)\sladder\b/gmi,
  // M
  /\bmartial\sarts?\b/gmi,
  /\bmoses\sbasket\b/gmi,
  /\b(?:muddy|playing|rugby)\sfields?\b/gmi,
  // O
  /\bon\s(?:shelf|table)\b/gmi,
  // P
  /\brice\spaddy\b/gmi,
  /\bpaint\sballing\b/gmi,
  /\b(?:cutting|piece\sof)\swood\b/gmi,
  /\bpiggy\sback\b/gmi,
  /\bping\spong\b/gmi,
  /\b(?:penny|pound)\scoin\b/gmi,
  /\bplay(?:ed|ing|s)?\s(?:with\s)?(?:frisb(?:ee|y)|rugby)\b/gmi,
  /\bplaydoh\b/gmi,
  // R
  /\b(?:nations\s)?rugby\s(?:league|union)\b/gmi,
  /\b(?:rocking\shorse|roller\scoaster)\b/gmi,
  // S
  /\bscarf\spin\b/gmi,
  /\bsewing\smachine\b/gmi,
  /\bshoulder\sblade\b/gmi,
  /\bskate\s?park\b/gmi,
  /\bsma\sgold\b/gmi,
  /\bstair\sgate\b/gmi,
  /\b(?:stanley|swiss\sarmy)\sknife\b/gmi,
  /\bstung\sby\b/gmi,
  // T
  /\btable\stennis\b/gmi,
  /\btaekwondo\b/gmi,
  /\btennis\srackett?\b/gmi,
  /\bthe\sbath\b/gmi,
  /\btic\stac\b/gmi,
  /\btoliet\b/gmi,
  /\btrampol(?:ine)?\b/gmi,
  /\btrod\son\b/gmi,
  // V
  /\bvenetian\s(?:blind|window)s?\b/gmi,
  // W
  /\bwashing\smachine\b/gmi,
  /\bwendy\shouse\b/gmi,
  /\bwhite\sspirit\b/gmi,
  /\bwindow\ssill\b/gmi,
  /\bwooden\s(?:bench|chair|door|floor)\b/gmi,
  // Z
  /\bzimmer\sframe\b/gmi
];
const DailyActivitiesRegEx: Set<RegExp> = new Set();
a.forEach(term => DailyActivitiesRegEx.add(term));
export {
  DailyActivitiesRegEx
};