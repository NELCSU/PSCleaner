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
  /\bangle\sgrinder\b/gmi,
  
  // BA
  /\bbarbie\sdoll\b/gmi,
  /\bbali\sbreeze\b/gmi,
  /\bball\s(?:bearing|from\searing)\b/gmi,
  /\bbaby\s(?:matt|sling|walker)\b/gmi,
  /\bbath\splug\b/gmi,
  /\bbatterie\b/gmi,
  /\bbazuka\sgell?\b/gmi,

  // BE
  /\bbean\sbag\b/gmi,

  // BL
  /\bblue\stack\b/gmi,
  /\bblack\stea\b/gmi,
  /\bbleach\sbottle\b/gmi,

  // BO
  /\bbottle\sof\s(?:bleach|(?:hot\s)?water)\b/gmi,
  /\bbottom\ssteps?\b/gmi,

  // BU
  /\bbunk\sbed\b/gmi,
  /\bbumbo\b/gmi,

  // CA
  /\bcar\sseat\b/gmi,
  /\bcamping\s(?:pot|stove)s?\b/gmi,
  /\bcandle\swax\b/gmi,

  // CH
  /\bcheddar\scheese\b/gmi,
  /\bchain\ssaw\b/gmi,

  // CL
  /\bclimbing\sframe\b/gmi,

  // CO
  /\bcoat\shanger\b/gmi,
  /\bc[ou]tto[mn]\s(?:bud|wool)\b/gmi,
  /\bcorner\sof\stable\b/gmi,
  /\bcoffee?\stable\b/gmi,
  /\bcomfort\spure\b/gmi,

  // CU
  /\bcuticura\shand\b/gmi,

  // DA
  /\bdaz\s3[\s-]?in[\s-]?1\b/gmi,

  // DI
  /\bdivan\sbed\b/gmi,
  /\bdiamonte\s(?:bead|stone)\b/gmi,
  /\bdinn?ing\s(?:chair|room)\b/gmi,

  // DO
  /\bdog\s(?:bite|cage)\b/gmi,
  /\bdoor\shand[ae]l\b/gmi,

  // DU
  /\bduplo\b/gmi,

  // DY
  /\bdyson\s(?:appliance|brand|hoover|vacuum)s?\b/gmi,

  // E
  /\beau\sde\scologne\b/gmi,
  /\bear\sring\b/gmi,
  /\beating\smcdonalds\b/gmi,

  // F
  /\bfairy\snon[\s-]bio\b/gmi,
  /\bfishing\shook\b/gmi,
  /\bfrench\s(?:fries|fry|windows?)\b/gmi,
  /\bfidge\sdoor\b/gmi,

  // G
  /\bgas\spipe\b/gmi,
  /\bgreen\s(?:ball|bead)\b/gmi,

  // H
  /\b(?:hot\s)?water\sbottle\b/gmi,
  /\bhedge\scutter\b/gmi,
  /\bhover\sboard\b/gmi,
  /\bhula\shoop\b/gmi,
  /\bhair\sdryer\b/gmi,
  /\b(?:by|with)(?:\sa)?\shamm[ae]r\b/gmi,
  /\bhand\s(?:rail|saw)\b/gmi,
  /\bhome\s(?:garden|stairs)\b/gmi,
  /\bhorse\sbox\b/gmi,
  /\bhot\scoffee?\b/gmi,
  /\bheely\sshoes?\b/gmi,

  // J
  /\b[Jj]erry\scans?\b/gm,
  /\b(?:canning|mason)\sjar\b/gmi,
  /\b(?:car|lift)\sjack\b/gmi,
  /\bjenga\sblock\b/gmi,
  /\bjumper\sroo\b/gmi,

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
  /\bonesie\b/gmi,
  /\bottaman\b/gmi,

  // PA
  /\bpateo\sdoor\b/gmi,

  // PE
  /\bpearl\sbe[ae]d\b/gmi,
  /\ba\spennie\b/gmi,

  // PI
  /\bpink\sbead\b/gmi,

  // PL
  /\bplaydoh\b/gmi,
  /\bplastic\smike\b/gmi,

  // PR
  /\bpranaro\sdiffuser\b/gmi,

  // PU
  /\bpu[cs]h\s?chair\b/gmi,

  // R
  /\brocking\shorse\b/gmi,
  /\brusty\snail\b/gmi,
  /\bround\scutter\b/gmi,
  /\brubber\styers\b/gmi,

  // SC
  /\bscarf\spin\b/gmi,

  // SE
  /\b(?:off|on|riding)\ssedgeway\b/gmi,
  /\bsewing\s(?:kit|machine)\b/gmi,

  // SH
  /\bshinpad\b/gmi,

  // SM
  /\bsma\sgold\b/gmi,

  // SP
  /\bspace\shopper\b/gmi,

  // ST
  /\bstanley\sknife\b/gmi,
  /\bstair\sgate\b/gmi,

  // SW
  /\bswiss\sarmy\sknife\b/gmi,

  // T
  /\bT\.?V\.?\s(?:stand|unit)\b/gmi,

  // TE
  /\bteddy\sbear\b/gmi,

  // TI
  /\btissue\spap?per\b/gmi,
  /\btic\stac\b/gmi,
  /\btik\stok\b/gmi,

  // TO
  /\btoliet\b/gmi,
  /\btop\sof(?:\sthe)?\sstairs\b/gmi,
  /\btop\sbunk\b/gmi,

  // TR
  /\btrampol(?:ine)?\b/gmi,
  /\btrump\scard\b/gmi,
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