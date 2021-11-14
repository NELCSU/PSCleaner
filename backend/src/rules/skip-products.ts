const a: RegExp[] = [
  // A
  /\baqua\s?bead\b/gmi,
  /\bariel\s(?:non|(?:2|3|two|three)[\s-]in[\s-](?:1|one)|liquitab|tablets?|washing)\b/gmi,
  
  // B
  /\bbali\sbreeze\b/gmi,
  /\bbean\sbag\b/gmi,
  /\bball\s(?:bearing|from\searing)\b/gmi,
  /\bangle\sgrinder\b/gmi,
  /\bblue\stack\b/gmi,
  /\bbaby\s(?:sling|walker)\b/gmi,
  /\bbath\splug\b/gmi,
  /\bbatterie\b/gmi,
  /\b(?:bunk|divan|wooden)\sbed\b/gmi,
  /\b(?:bleach|(?:hot\s)?water)\sbottle\b/gmi,
  /\bbottle\sof\s(?:bleach|(?:hot\s)?water)\b/gmi,
  /\bbottom\ssteps?\b/gmi,

  // C
  /\bcheddar\scheese\b/gmi,
  /\bcamping\s(?:pot|stove)s?\b/gmi,
  /\bcandle\swax\b/gmi,
  /\bswallow[a-z]*\schalk\b/gmi,
  /\bchain\ssaw\b/gmi,
  /\bcoat\shanger\b/gmi,
  /\bcotto[mn]\s(?:bud|wool)\b/gmi,
  /\bclimbing\sframe\b/gmi,
  /\bcuticura\shand\b/gmi,
  /\bcorner\sof\stable\b/gmi,

  // D
  /\bdyson\s(?:appliance|brand|hoover|vacuum)s?\b/gmi,
  /\bdog\scage\b/gmi,
  /\bdog\sbite\b/gmi,

  // E
  /\beau\sde\scologne\b/gmi,
  /\bear\sring\b/gmi,
  /\beating\smcdonalds\b/gmi,

  // F
  /\bfishing\shook\b/gmi,
  /\bfrench\sfries\b/gmi,

  // G
  /\bgas\spipe\b/gmi,

  // H
  /\bhover\sboard\b/gmi,
  /\bhula\shoop\b/gmi,
  /\bhair\sdryer\b/gmi,
  /\b(?:by|with)(?:\sa)?\shammer\b/gmi,
  /\bhand\s(?:rail|saw)\b/gmi,
  /\bhome\s(?:garden|stairs)\b/gmi,
  /\bhorse\sbox\b/gmi,

  // J
  /\b[Jj]erry\scans?\b/gm,
  /\b(?:canning|mason)\sjar\b/gmi,
  /\b(?:car|lift)\sjack\b/gmi,

  // K
  /\bkettle\sburn\b/gmi,

  // L
  /\b(?:a|from|of|off|on)\sladder\b/gmi,
  /\bladder\sf[ae]ll\b/gmi,

  // M
  /\bmoses\s(?:basket|blanket)\b/gmi,
  /\bmanial\senvelope\b/gmi,

  // N
  /\bn[eu]rff?\sgun\b/gmi,

  // P
  /\bpearl\sbe[ae]d\b/gmi,
  /\bpranaro\sdiffuser\b/gmi,
  /\bplaydoh\b/gmi,

  // R
  /\brocking\shorse\b/gmi,
  /\brusty\snail\b/gmi,

  // S
  /\b(?:stanley|swiss\sarmy)\sknife\b/gmi,
  /\bscarf\spin\b/gmi,
  /\bsewing\smachine\b/gmi,
  /\bsma\sgold\b/gmi,
  /\bstair\sgate\b/gmi,

  // T
  /\bteddy\sbear\b/gmi,
  /\btic\stac\b/gmi,
  /\btoliet\b/gmi,
  /\btik\stok\b/gmi,
  /\btop\sof\sthe\sstairs\b/gmi,
  /\btrampol(?:ine)?\b/gmi,
  /\btrump\scard\b/gmi,

  // V
  /\bvenetian\s(?:blind|window)s?\b/gmi,
  /\bvix\ssteam\b/gmi,

  // W
  /\bwendy\shouse\b/gmi,
  /\bwhite\sspirit\b/gmi,
  /\bwindow\ssill\b/gmi,
  /\bwooden\s(?:bench|door|floor)\b/gmi,

  // Z
  /\bzimmer\sframe\b/gmi
];
const ProductsRegEx: Set<RegExp> = new Set();
a.forEach(term => ProductsRegEx.add(term));
export {
  ProductsRegEx
};