/**********************************************************************
 * These patterns should be ignored as they loosely match to 
 * product categories
 * 
 * Action needed
 * 
 * (low priority)
 * This list could do with a clean up as some false positive 
 * generating words have been rationalised over time.
 **********************************************************************/
const a: RegExp[] = [
  // A
  /\balmat\s(?:3[\s-]in[\s-]1\s)?non[\s-]bio\b/gmi,
  /\baqua\s?bead\b/gmi,
  /\bariel\s(?:non|(?:2|3|two|three)[\s-]in[\s-](?:1|one)|liquitab|tablets?|washing)\b/gmi,
  /\baveeno\smoisturiser\b/gmi,
  /\bavon\sair\b/gmi,
  /\bairwick\b/gmi,
  
  // B
  /\bbali\sbreeze\b/gmi,
  /\bbean\sbag\b/gmi,
  /\bball\s(?:bearing|from\searing)\b/gmi,
  /\bangle\sgrinder\b/gmi,
  /\bblue\stack\b/gmi,
  /\bbaby\s(?:matt|sling|walker)\b/gmi,
  /\bbath\splug\b/gmi,
  /\bbatterie\b/gmi,
  /\b(?:bunk|divan)\sbed\b/gmi,
  /\b(?:bleach|(?:hot\s)?water)\sbottle\b/gmi,
  /\bbottle\sof\s(?:bleach|(?:hot\s)?water)\b/gmi,
  /\bbottom\ssteps?\b/gmi,
  /\bbumbo\b/gmi,
  /\bbazuka\sgell?\b/gmi,
  /\bblack\stea\b/gmi,

  // C
  /\bcar\sseat\b/gmi,
  /\bcheddar\scheese\b/gmi,
  /\bcamping\s(?:pot|stove)s?\b/gmi,
  /\bcandle\swax\b/gmi,
  /\bswallow[a-z]*\schalk\b/gmi,
  /\bchain\ssaw\b/gmi,
  /\bcoat\shanger\b/gmi,
  /\bc[ou]tto[mn]\s(?:bud|wool)\b/gmi,
  /\bclimbing\sframe\b/gmi,
  /\bcuticura\shand\b/gmi,
  /\bcorner\sof\stable\b/gmi,
  /\bcoffee?\stable\b/gmi,
  /\bcomfort\spure\b/gmi,

  // D
  /\bdaz\s3[\s-]?in[\s-]?1\b/gmi,
  /\bdiamonte\s(?:bead|stone)\b/gmi,
  /\bdyson\s(?:appliance|brand|hoover|vacuum)s?\b/gmi,
  /\bdog\scage\b/gmi,
  /\bdog\sbite\b/gmi,
  /\bduplo\b/gmi,
  /\bdinn?ing\s(?:chair|room)\b/gmi,

  // E
  /\beau\sde\scologne\b/gmi,
  /\bear\sring\b/gmi,
  /\beating\smcdonalds\b/gmi,

  // F
  /\bfairy\snon[\s-]bio\b/gmi,
  /\bfishing\shook\b/gmi,
  /\bfrench\s(?:fries|fry|windows?)\b/gmi,

  // G
  /\bgas\spipe\b/gmi,
  /\bgreen\s(?:ball|bead)\b/gmi,

  // H
  /\bhedge\scutter\b/gmi,
  /\bhover\sboard\b/gmi,
  /\bhula\shoop\b/gmi,
  /\bhair\sdryer\b/gmi,
  /\b(?:by|with)(?:\sa)?\shamm[ae]r\b/gmi,
  /\bhand\s(?:rail|saw)\b/gmi,
  /\bhome\s(?:garden|stairs)\b/gmi,
  /\bhorse\sbox\b/gmi,
  /\bhot\scoffee?\b/gmi,

  // J
  /\b[Jj]erry\scans?\b/gm,
  /\b(?:canning|mason)\sjar\b/gmi,
  /\b(?:car|lift)\sjack\b/gmi,

  // K
  /\ba\sk[ei]ttle\b/gmi,
  /\bkettle\sburn\b/gmi,
  /\bthe\skit\b/gmi,

  // L
  /\blawn\smower\b/gmi,

  // M
  /\bmoses\s(?:basket|blanket)\b/gmi,
  /\bmanial\senvelope\b/gmi,

  // N
  /\bnail\spolish\b/gmi,
  /\bn[eu]rff?\sgun\b/gmi,

  // O
  /\bottaman\b/gmi,

  // P
  /\bpearl\sbe[ae]d\b/gmi,
  /\bpink\sbead\b/gmi,
  /\bpranaro\sdiffuser\b/gmi,
  /\bplaydoh\b/gmi,
  /\bpu[cs]h\s?chair\b/gmi,
  /\bpateo\sdoor\b/gmi,
  /\ba\spennie\b/gmi,

  // R
  /\brocking\shorse\b/gmi,
  /\brusty\snail\b/gmi,
  /\bround\scutter\b/gmi,

  // S
  /\bs(?:tanley|wiss\sarmy)\sknife\b/gmi,
  /\bscarf\spin\b/gmi,
  /\bsewing\s(?:kit|machine)\b/gmi,
  /\bsma\sgold\b/gmi,
  /\bstair\sgate\b/gmi,
  /\bspace\shopper\b/gmi,
  /\b(?:off|on|riding)\ssedgeway\b/gmi,

  // T
  /\btissue\spap?per\b/gmi,
  /\bteddy\sbear\b/gmi,
  /\btic\stac\b/gmi,
  /\btoliet\b/gmi,
  /\btik\stok\b/gmi,
  /\btop\sof(?:\sthe)?\sstairs\b/gmi,
  /\btop\sbunk\b/gmi,
  /\btrampol(?:ine)?\b/gmi,
  /\btrump\scard\b/gmi,
  /\bT\.?V\.?\s(?:stand|unit)\b/gmi,
  /\btrapese\b/gmi,
  /\btravelcot\b/gmi,

  // V
  /\bvenetian\s(?:blind|window)s?\b/gmi,
  /\bvix\ssteam\b/gmi,

  // W
  /\bwendy\shouse\b/gmi,
  /\bwhite\sspirit\b/gmi,
  /\bwindow\ssill\b/gmi,

  // Z
  /\bzimmer\sframe\b/gmi
];
const ProductsRegEx: Set<RegExp> = new Set();
a.forEach(term => ProductsRegEx.add(term));
export {
  ProductsRegEx
};