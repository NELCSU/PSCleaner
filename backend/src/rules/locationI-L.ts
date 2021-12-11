/**********************************************************************
 * Pattern matches UK location names
 * 
 * Action needed
 * 
 * (low priority)
 * Get these lists in alphabetical order and in the correct file
 **********************************************************************/
const a: RegExp[] = [
// IB
/\bibex\sclose\b/gmi,

// IC
/\bicicle\swood\b/gmi,
/\bice\s(?:cleugh|drove|hill|house|pond|street)\b/gmi,
/\biceland\s(?:road|skerry|street)\b/gmi,
/\bIcy\sPark\b/gm,

// ID
/\bidol\slane\b/gmi,
/\bideal\sbungalows\b/gmi,

// IL
/\billustrious\s(?:close|crescent|drive|road)\b/gmi,

// IM
/\bimage\s(?:hill|park|pool|road)\b/gmi,
/\bimpala\s(?:close|drive|gardens|way)\b/gmi,

// IN
/\bIn\sFell\b/gm,
/\binner\spenny\sledge\b/gmi,
/\binsignia\sclose\b/gmi,
/\bindependent\shill\b/gmi,
/\bi(?:n\smoor|nn(?:ings|ocence)|ntakes|tch)\slane\b/gmi,
/\bi(?:mplacable|mplement|ncinerator|ndependents|ndians)\sroad\b/gmi,
/\bInland\sSea\b/gm,
/\bin(?:dependent|dex|tended)\sstreet\b/gmi,
/\b(?:appleby[\s-]+in[\s-]+westmorland|ashford[\s-]+in[\s-]+the\swater|ashton[\s-]+in[\s-]+makerfield|askam[\s-]+in[\s-]+furness)\b/gmi,
/\b(?:barnby[\s-]+in[\s-]+the\swillows|barrow[\s-]+in[\s-]+furness|barton[\s-]+in[\s-]+(?:fabis|the\s(?:beans|clay))|barwick[\s-]+in[\s-]+elmet)\b/gmi,
/\b(?:belton[\s-]+in[\s-]+rutland|bilton[\s-]+in[\s-]+ainsty|blackwell[\s-]+in[\s-]+the\speak|bradley[\s-]+in[\s-]+the\smoors)\b/gmi,
/\bbird[\s-]+in[\s-]+(?:eye(?:\s(?:hill|shaw))?|hand\s(?:lane|passage|street|yard)|bush\sroad|hole\srock)\b/gmi,
/\b(?:braunston[\s-]+in[\s-]+rutland|broughton[\s-]+in[\s-]+(?:furness|amounderness))\b/gmi,
/\b(?:buckland[\s-]+in[\s-]+the\smoor|burley[\s-]+in[\s-]+wharfe?dale|burton[\s-]+in[\s-]+(?:lonsdale|kendal))\b/gmi,
/\b(?:carle?ton[\s-]+in[\s-]+(?:cleveland|craven|lindrick)|church[\s-]+in[\s-]+the\swood\slane|clapton[\s-]+in[\s-]+gordano)\b/gmi,
/\b(?:cleik[\s-]+him[\s-]+in[\s-]+pot|click[\s-]+em[\s-]+in[\s-]+dene|cooper['‘’`s]{1,2}[\s-]+in[\s-]+the\swood\scopse)\b/gmi,
/\b(?:coton[\s-]+in[\s-]+the\s(?:clay|elms)|cross[\s-]+in[\s-]+hand\s(?:church|lane)|dalton[\s-]+in[\s-]+furness)\b/gmi,
/\b(?:Cross\s[Ii]n\sHand|Hole[\s-]+[Ii]n[\s-]+[Tt]he[\s-]+Wall)\b/gm,
/\b(?:dane[\s-]+in[\s-]+shaw|dog[\s-]+in[\s-]+the[\s-]+lane|draycott[\s-]+in[\s-]+the[\s-]+(?:clay|moors))\b/gmi,
/\b(?:easton[\s-]+in[\s-]+gordano|fish[\s-]+in[\s-]+the[\s-]+well|forest[\s-]+in[\s-]+teesdale)\b/gmi,
/\b(?:hained[\s-]+in[\s-]+wood|hampton[\s-]+in[\s-]+arden|heart[\s-]+in[\s-]+hand[\s-]+road)\b/gmi,
/\b(?:henle?y[\s-]+in[\s-]+arden|hinton[\s-]+in[\s-]+the[\s-]+hedges|hole[\s-]+in[\s-]+the[\s-]+wall[\s-]+street)\b/gmi,
/\b(?:horton[\s-]+in[\s-]+ribblesdale|hospice[\s-]+in[\s-]+the[\s-]+weald|hutton[\s-]+in[\s-]+the[\s-]+forest)\b/gmi,
/\b(?:in[\s-]+bank[\s-]+wood|in[\s-]+moor[\s-]+lane|in[\s-]+pasture[\s-]+hill|ince[\s-]+in[\s-]+makerfield)\b/gmi,
/\b(?:irby[\s-]+in[\s-]+the[\s-]+marsh|jack[\s-]+in[\s-]+the[\s-]+green|just[\s-]+in[\s-]+roseland)\b/gmi,
/\b(?:kincardine[\s-]+in[\s-]+menteith|kirkby[\s-]+in[\s-]+(?:ashfield|furness|malhamdale)|kirton[\s-]+in[\s-]+lindsey)\b/gmi,
/\b(?:knave[\s-]+in[\s-]+hole|knights[\s-]+in[\s-]+the[\s-]+bottom|labour[\s-]+in[\s-]+vain\s(?:drove|hill|plantation|road))\b/gmi,
/\b(?:lindale[\s-]+and[\s-]+newton[\s-]+in[\s-]+cartmel|lindal[\s-]+in[\s-]+furness|little[\s-]+in[\s-]+sight)\b/gmi,
/\b(?:llansaintff?raed[\s-]+in[\s-]+el[vw]el|longville[\s-]+in[\s-]+the[\s-]+dale|luddington[\s-]+in[\s-]+the[\s-]+brook)\b/gmi,
/\b(?:marton[\s-]+in[\s-]+the-forest|mawgan[\s-]+in[\s-]+(?:meneage|pydar)|mercy[\s-]+in[\s-]+the[\s-]+bottom)\b/gmi,
/\b(?:middleton[\s-]+in[\s-]+teesdale|minster[\s-]+in[\s-]+sheppey|moreton[\s-]+in[\s-]+marsh)\b/gmi,
/\b(?:mottram[\s-]+in[\s-]+longdendale|newchurch[\s-]+in[\s-]+pendle|newton[\s-]+in[\s-]+(?:cartmel|makerfield|the[\s-]+isle))\b/gmi,
/\b(?:newtown[\s-]+in[\s-]+st[\s-]+martin|norton[\s-]+in[\s-]+(?:hales|the[\s-]+moors)|oaks[\s-]+in[\s-]+charnwood)\b/gmi,
/\b(?:pill[\s-]+and[\s-]+easton[\s-]+in[\s-]+gordano|pool[\s-]+in[\s-]+wharfedale|rose[\s-]+in[\s-]+(?:the[\s-]+bush|valley))\b/gmi,
/\b(?:sally[\s-]+in[\s-]+the[\s-]+wood|sgeir[\s-]+in-ao|sherburn[\s-]+in[\s-]+elmet|spital[\s-]+in[\s-]+the[\s-]+street)\b/gmi,
/\bst\.?[\s-]+(?:anthony[\s-]+in[\s-]+meneage|george[\s-]+in[\s-]+the[\s-]+east|giles[\s-]+in[\s-]+the[\s-]+wood)\b/gmi,
/\bst\.?[\s-]+(?:john['‘’`s]{1,2}[\s-]+in[\s-]+the[\s-]+vale|joseph['‘’`s]{1,2}[\s-]+in[\s-]+the[\s-]+park)\b/gmi,
/\bst\.?[\s-]+(?:just[\s-]+in[\s-]+(?:penwith|roseland)|laurence[\s-]+in[\s-]+thanet|martin[\s-]+in[\s-]+(?:meneage|the[\s-]+fields))\b/gmi,
/\bst\.?[\s-]+(?:mary[\s-]+in[\s-]+the[\s-]+(?:fields|marsh)|michael['‘’`s]{1,2}[\s-]+in[\s-]+the[\s-]+hamlet|mary[\s-]+in[\s-]+the[\s-]+marsh)\b/gmi,
/\bst\.?[\s-]+(?:peter['s]*[\s-]+in[\s-]+(?:chains|eastgate|thanet|the[\s-]+fields)|stephen[\s-]+in[\s-]+brannel)\b/gmi,
/\bst\.?[\s-]+(?:damian[\s-]+in[\s-]+the[\s-]+blean|martin[\s-]+in[\s-]+the[\s-]+fields|martin[\s-]+in[\s-]+meneage)\b/gmi,
/\b(?:stanford[\s-]+in[\s-]+the[\s-]+vale|stanton[\s-]+in[\s-]+peak|stanwardine[\s-]+in[\s-]+the[\s-]+(?:fields|wood))\b/gmi,
/\b(?:staunton[\s-]+in[\s-]+the[\s-]+vale|staveley[\s-]+in[\s-]+cartmel|stone[\s-]+in[\s-]+oxney)\b/gmi,
/\b(?:stonesdale[\s-]+in[\s-]+pasture|sutton[\s-]+in[\s-]+(?:ashfield|craven|the[\s-]+elms)|ta[mn]worth[\s-]+in[\s-]+arden)\b/gmi,
/\b(?:the[\s-]+lake[\s-]+in[\s-]+the[\s-]+wood|thornton[\s-]+in[\s-]+(?:craven|lonsdale)|thorpe[\s-]+in[\s-]+(?:balne|the[\s-]+fallows|the[\s-]+glebe))\b/gmi,
/\b(?:wall[\s-]+in[\s-]+green[\s-]+wood|walton[\s-]+in[\s-]+gordano|west[\s-]+in[\s-]+thirle[\s-]+(?:bay|coves|rocks))\b/gmi,
/\b(?:weston[\s-]+in[\s-]+(?:arden|gordano)|whatton[\s-]+in[\s-]+the-vale|widecombe[\s-]+in[\s-]+the[\s-]+moor)\b/gmi,
/\bInaccessible\sPinnacle\b/gm,
/\b(?:incline\s(?:lane|plantation|road|row|top|way)|(?:boltslaw|lady\smoyra)\sincline)\b/gmi,
/\bindomitable\splantation\b/gmi,
/\bindustrial\s(?:access\sroad|avenue|court|estate|park|place|road|street|terrace|way)\b/gmi,
/\bindustry\s(?:bank\splantation|lane|road|street)\b/gmi,
/\binfants?\sstreet\b/gmi,
/\b(?:high\sstreet|peover|rickinghall|tabley|walton)\sinferior\b/gmi,
/\b(?:clos|rhodfa)\singot|ingot\s(?:close|drive|street)\b/gmi,
/\bingress\s(?:gardens|park\savenue|street)\b/gmi,
/\bInland\s(?:Pool|Road|Sea)\b/gm,
/\blodge\sinlet\b/gmi,
/\binnkeepers\s(?:court|gardens)\b/gmi,
/\binnovation\s(?:avenue|boulevard|close|drive|square|way)\b/gmi,
/\binstitute\s(?:avenue|beach|hill|lane|place|road|row|street|terrace|wood)\b/gmi,
/\binstitution\s(?:place|road|street|terrace)\b/gmi,
/\binter[\s-](?:church|valley\sroad)\b/gmi,
/\b(?:almond|bury|centre)\sinterchange\b/gmi,
/\b(?:capital\s)?interchange\sway\b/gmi,
/\bintermediate\s(?:lake|road)\b/gmi,
/\b(?:ashford|birmingham|ebbsfleet|harwich|lamb\sholm|lycee|pancras|stratford)\sinternational\b/gmi,
/\bintakes\splantation\b/gmi,
/\binternational\s(?:academy|approach|avenue|drive|ferry|gate|girls|port|university|view|way)\b/gmi,
/\binvincible\s(?:close|drive|road|way)\b/gmi,
/\biol[\s-](?:ghaoith|bheathain)\b/gmi,
/\bionic\s(?:close|road|street)\b/gmi,
/\binnkeeper\sway\b/gmi,
/\bIndependent\sWay\b/gm,
/\bintaglio\sdrive\b/gmi,
/\binverurie\s(?:and|\&)\sdistrict\b/gmi,

// IR
/\birishman['‘’`s]{1,2}\sledge\b/gmi,
/\birony\sgeo\b/gmi,
/\bironing\sbox\sclump\b/gmi,
/\b(?:holms\sof\sire|ire\sgeo|ire['‘’`s]{1,2}\staing|sgurrachd\sire)\b/gmi,
/\birelands\s(?:croft\sclose|lane)\b/gmi,
/\biridium\s(?:court|way)\b/gmi,
/\b(?:ayre\sof|burnet|grid|ogof)\siron\b/gmi,
/\biron['‘’`s]{1,2}\s(?:acton|carr|cliff|copse|cove|covert|crag|craig|drive|geo|groves|hellia|hill|hogg|howe|keld|lane|leys|mills?|ness|pikes|plantation|plat|road|row|scars?|slunk|tower|way|well)\b/gmi,
/\bIron\s(?:Band|Bar|Bridge|Car|Cross|Dish|Duke|Foundry|Gate|Man|Mine|Point|Railway|Shovel)\b/gm,

// IS
/\bissues\s(?:road|wood)\b/gmi,
/\bisle\sof\sspar\b/gmi,

// JA
/\bj\sb\scourt\b/gmi,
/\bjacob['‘’`s]{1,2}\sladder\sway\b/gmi,
/\bjack['‘’`s]{1,2}\sledge\b/gmi,
/\bjack\so['‘’`]?\slantern\swood\b/gmi,
/\bjack\scabin\stop\b/gmi,
/\bjesuit\sclose\b/gmi,
/\bj(?:awbones?|udgement)\shill\b/gmi,
/\bj(?:awbone|olt|uggler['‘’`s]{1,2}|umper|uries)\slane\b/gmi,
/\bj(?:acker['‘’`s]{1,2}|oin)\sroad\b/gmi,
/\bjetting\sstreet\b/gmi,
/\bjetliner\sway\b/gmi,
/\bj(?:ackpot|ungle)\swood\b/gmi,
/\bjoinings\sbank\b/gmi,
/\bjobbing\scross\b/gmi,
/\bjob\sdrain\splace\b/gmi,
/\bjackass\s(?:lane|moor|shaw|wood)\b/gmi,
/\bjackdaw\s(?:close|crag|drive|griff|hill|lane|plantation|point|rise|road|way|wood)\b/gmi,
/\bJacket\sClose\b/gm,
/\b(?:jacket\s(?:de\shole|pill)|jacket['‘’`s]{1,2}\s(?:hill|point))\b/gmi,
/\bjail\s(?:holt|lane|road)\b/gmi,
/\bmiddle\sjamb\b/gmi,
/\bjaunty\s(?:avenue|close|crescent|drive|lane|mount|place|road|view|way)\b/gmi,
/\bjavelin\s(?:avenue|close|crescent|park|road|row|way)\b/gmi,
/\bjaw\s(?:bottom\splantation|hill|reservoir)\b/gmi,
/\b(?:linn|rowantree)\sjaw\b/gmi,
/\bwhale\sjaw\slane\b/gmi,
/\bLion['‘’`s]{1,2}\sJaws\b/gm,
/\bwhale\sjaws\shill\b/gmi,

// JE
/\bjericho\sbig\swood\b/gmi,
/\bjellies\shillock\b/gmi,
/\bjetstream\s(?:drive|way)\b/gmi,
/\bjetties\sriverside\scommon\b/gmi,
/\bjewellers\swynd\b/gmi,
/\bjewellery\squarter\b/gmi,
/\bjersey\slagoon\b/gmi,
/\bjedburgh\s(?:and|\&)\sdistrict\b/gmi,
/\bjenny['‘’`s]{1,2}\slantern\shill\b/gmi,

// JO
/\bjohn\sball\sclose\b/gmi,
/\bjohn\smartin['‘’`s]{1,2}\sledge\b/gmi,
/\bjohn\ssmart\sclose\b/gmi,
/\b(?:cae\sjob|job['‘’`s]{1,2}\s(?:cleugh|copse|corner|craig|cross|drain\splace|dub|hill|lane|plain|water|well|wood|yard))\b/gmi,
/\bjockey\s(?:bank|belt|cap\sclump|copse|end|field|green|hill|mead|meadow|road|street|way)\b/gmi,
/\bjockey['‘’`s]{1,2}\s(?:coppice|fields|plantation|wood)\b/gmi,
/\b(?:horse\sand\s)?jockey['‘’`s]{1,2}\slane\b/gmi,
/\b(?:coed\scae|scar)\sjockey\b/gmi,
/\bjocks\s(?:flat\swood|hill)\b/gmi,
/\bjoiners['‘’`]?\s(?:alley|arms|close|court|croft|gardens|hill|lane|mews|road|shop\splantation|way)\b/gmi,
/\bjoint\s(?:campus|hospital|houses|road|wood)\b/gmi,
/\bjoist\sfen\b/gmi,
/\b(?:no\sjoke\splantation|porth\sjoke)\b/gmi,
/\bjollys\slane\b/gmi,
/\bjourneyman['‘’`s]{1,2}\sgreen\b/gmi,

// JU
/\bjump\s(?:down\sbight|farm\sroad|primary\sschool|valley)\b/gmi,
/\bjunior\scadets\sroad\b/gmi,
/\bjugglers\s(?:close|moor)\b/gmi,
/\bjunction\scut\b/gmi,

// KA
/\bkangaroo\spond\b/gmi,
/\bKayak\sClose\b/gm,

// KE
/\bkew\sfoot\sroad\b/gmi,
/\bkendal\sstrickland\sand\sfell\b/gmi,
/\bkelyin\sof\skroos\b/gmi,
/\bkerridge['‘’`s]{1,2}\scut\b/gmi,
/\b(?:Castle\sKeep|Keep\sClose|Standards\sKeep)\b/gm,
/\b(?:acorn|albury|badgers|beechers|bricklow|cardwells|chandlers|conisbrough|crowhurst|delancey)\skeep\b/gmi,
/\b(?:castle\skeep\s(?:gardens|mews)|high\skeep\sfold)\b/gmi,
/\b(?:fawns|flycatcher|friars|goudhurst|jameson|king['‘’`s]{1,2}|marine|millers|monnow|norman)\skeep\b/gmi,
/\b(?:parfit|priors|ruspers|yeomans)\skeep\b/gmi,
/\bkennels\s(?:belt|coppice|drive|green|lane|plantation|road|row|spinney|wood)\b/gmi,
/\bkernel\s(?:bottom|close|drive|way)\b/gmi,
/\bkestrels['‘’`]*\s(?:croft|field\sprimary\sschool\sannexe|mead|way)\b/gmi,
/\bkey\s(?:and\scastle\syard|avenue|cleuch|copse|court|gardens|hill(?:\sdrive)?|hole)\b/gmi,
/\bkey\s(?:lane|plantation|road|sike\slane|street|view|way|west(?:\sclose)?|wood)\b/gmi,
/\b(?:mary\s)?key\sclose\b/gmi,
/\b(?:jacks|robert)?\skey\sdrive\b/gmi,
/\b(?:jacks\s)?key\sclough\b/gmi,
/\bkey(?:\ssike)?\slane\b/gmi,
/\bKey\sRoad\b/gm,
/\bkey\sstreet\b/gmi,
/\bkeysmith\sclose\b/gmi,
/\bkeystone\s(?:avenue|close|court|crescent|gardens|lane|mews|passage|primary\sschool|quadrant|road)\b/gmi,
/\bkeep\s(?:hatch|hill(?:\s(?:close|drive|end|road))?|lane|rise|street)\b/gmi,
/\bkeepsake\s(?:close|drive|gardens)\b/gmi,
/\bkey['‘’`s]{1,2}\s(?:croft|green)\b/gmi,
/\bLower\sKey\b/gm,
/\bkelso\s(?:and|\&)\sdistrict\b/gmi,

// KI
/\bkill\sof\squi\b/gmi,
/\bkineton\s&\sred\shorse\b/gmi,
/\bkitty['‘’`s]{1,2}\swent\b/gmi,
/\bkitchen\sball\scopse\b/gmi,
/\bking['‘’`s]{1,2}\schair\s(?:hill|plantation)\b/gmi,
/\bKing['‘’`s]{1,2}\sChair\b/gm,
/\bkirk\sfell\sghyll\b/gmi,
/\bKitchen\sLedge\b/gm,
/\bking\sstairs\sclose\b/gmi,
/\bki(?:lnhurst|ndersley['‘’`s]{1,2}|rklees)\scut\b/gmi,
/\bkings\ssconce\savenue\b/gmi,
/\bkingsmark\sfreeway\b/gmi,
/\bkidney\s(?:clump|covert|hill|plantation|pond|sands|wood)\b/gmi,
/\bkipling\stors\b/gmi,
/\bkingfishers\s(?:court|reach)\b/gmi,
/\bkid\s(?:cleughs|gate\sdrove|geo|glove\sroad|hill|islands|lane|moor|stone\shill|stones\shollow)\b/gmi,
/\bkissing\s(?:batch|copse|gate|tree\s(?:lane|way))\b/gmi,
/\bkitchen\s(?:avenue|ball\scopse|barrow\shill|bay|carr|clough|copse|coppice|corner|croft)\b/gmi,
/\bkitchen\s(?:drive|field|fold|gardens?|hill|lane|ledge|mead|meadow|moss|plantation)\b/gmi,
/\bkitchen\s(?:pond|pool|porth|street|wood)\b/gmi,
/\bki(?:ddies|ss)\swood\b/gmi,
/\bkidnappers['‘’`]?\slane\b/gmi,
/\b(?:cat\sand\s)?kittens\slane\b/gmi,
/\bkick\shill\b/gmi,
/\bkills\s(?:hill\scopse|wick)\b/gmi,
/\bkiller\sstreet\b/gmi,
/\bkiribati\sway\b/gmi,
/\bkill\sdevil\scopse\b/gmi,
/\bcaptain\skites\b/gmi,
/\bkites['‘’`]?\s(?:close|copse|croft(?:\sclose)?|farm\slane|hardwick|hill|independent)\b/gmi,
/\bkites['‘’`]?\s\s(?:nest\s(?:lane|walk)|redding\shill)\b/gmi,
/\bkips\swood\b/gmi,
/\b(?:brockhope|phawhope|whirly)\skips\b/gmi,
/\bkilt\srock\sviewpoint\b/gmi,
/\bkinetic\screscent\b/gmi,
/\bkingmaker\sway\b/gmi,

// KN
/\bknotts\sof\sthe\stongue\b/gmi,
/\bKnock\sFell\b/gm,
/\bknave[\s-]go[\s-]by\b/gmi,
/\bknights\stemplars\sgreen\b/gmi,
/\bKnights\sTemplars\b/gm,
/\bknees?\shill\b/gmi,
/\bknells\s(?:bottom|copse|park)\b/gmi,
/\bknow\sgap\slane\b/gmi,
/\bknock\sstreet\b/gmi,
/\bknacker['‘’`s]{1,2}\s(?:hole(?:\s(?:grove|lane))?|wood)\b/gmi,
/\bknee\sof\s(?:cairnsmore|scabra)\b/gmi,
/\b(?:Muckle|Snickert)\sKnees?\b/gm,
/\bknitters\sroad\b/gmi,
/\bknitting\s(?:needle|row)\slane\b/gmi,
/\bknobby\scopse\b/gmi,
/\bknock\sjargon\scourt\b/gmi,
/\bknocking\sstone(?:\shill)?\b/gmi,
/\bknockings?\swood\b/gmi,
/\bknotgrass\s(?:road|way)\b/gmi,
/\bknots\s(?:flat|hill|wood|yard)\b/gmi,
/\brough\sknots\splantation\b/gmi,
/\bknott\sgulf\b/gmi,
/\bknotty\s(?:ash|bink(?:\sgully)?|green|hill(?:\s(?:plantation|wood))?|lane|mews|way)\b/gmi,
/\bkrypton\sclose\b/gmi,

// KO
/\bkorea\sroad\b/gmi,

// KR
/\bkingston\snear\slewes\b/gmi,
/\bkremlin\sdrive\b/gmi,

// KY
/\bkyme\seau\b/gmi,
/\bkyle\sof\stongue\b/gmi,

/\bl\sspinney\b/gmi,
// LA
/\blarge\s(?:avenue|bar\shill|burra\sgeo|coppice|copse|covert|cruban|half\smoon\splantation|osier\sbed)\b/gmi,
/\blang\sgeo\sof\sthe\shead\b/gmi,
/\bladder\s(?:chine|cleuch|court|creek|field|hills?|law|rock)\b/gmi,
/\bladder['‘’`s]{1,2}\scoppice\b/gmi,
/\blade\sfoot\scove\b/gmi,
/\blane\sfoot\s(?:brow|road)\b/gmi,
/\bla(?:bourn['‘’`s]{1,2}|mb\shill)\sfell\b/gmi,
/\bLaws\sFell\b/gm,
/\blaunde\sbig\swood\b/gmi,
/\bladies['‘’`]?\sledge(?:\sneck)?\b/gmi,
/\blawrence['‘’`s]{1,2}\sledge\b/gmi,
/\blake\sdistrict\b/gmi,
/\blances\sclose\b/gmi,
/\blancers\s(?:close|court|croft|drive|walk|way)\b/gmi,
/\bladylike\sgrove\b/,
/\bladyship\swood\b/gmi,
/\blads\s(?:grave\sclough|head\splantation|hill)\b/gmi,
/\blagoon\s(?:drive|road|view|way)\b/gmi,
/\blambs['‘’`]?\s(?:bank|barn\spitch|cleugh|close|crescent|down(?:\slane)?|farm\s(?:close|road))\b/gmi,
/\blambs['‘’`]?\s(?:flat\slane|fold|frith\swood|green(?:\sroad)?|hill\s(?:close|drove)?|knowe|lane)\b/gmi,
/\blambs['‘’`]?\s(?:lane|lea|meadow|pottery\scourt|road|row|walk|well\sclose|wood)\b/gmi,
/\blambskin\sdale\b/gmi,
/\blampreys\slane\b/gmi,
/\bland\scut\slane\b/gmi,
/\blaw\sprimary\sschool\b/gmi,
/\bland\sof\snod\b/gmi,
/\blauder\srambling\b/gmi,
/\blaugharne\stownship\b/gmi,
/\blaughing\simage\scorner\b/gmi,
/\bLakes\s[Aa]nd\sGardens\b/gm,
/\bl(?:istening\spost|itchen)\sclose\b/gmi,
/\blairs\s(?:crescent|lane)\b/gmi,
/\bla(?:ck|g|nterns|ser|wyer['‘’`s]{1,2}|x)\slane\b/gmi,
/\ble(?:arning|ctern|g|gendary|nder|wd)\slane\b/gmi,
/\bli(?:d|p(?:\shill)?)\slane\b/gmi,
/\blo(?:cker|gic|ok['‘’`s]{1,2}|llipop)\slane\b/gmi,
/\blunch\slane\b/gmi,
/\ble(?:g(?:\sof\smutton)?|mongrass|sson)\sroad\b/gmi,
/\bli(?:beration|beria|mited|ne)\sroad\b/gmi,
/\blong\snuke\sroad\b/gmi,
/\bl(?:eg|iv(?:er|ing\swell))\sstreet\b/gmi,
/\bl(?:egends|izards|ogistics|ong\sswath)\sway\b/gmi,
/\bl(?:ittle\sbeauties|ineage|umps)\swood\b/gmi,
/\bLocal\s(?:Avenue|Board\sStreet)\b/gm,
/\blodging\sbrae\b/gmi,
/\blanky\s(?:gardens|hill)\b/gmi,
/\blanolin\sclose\b/gmi,
/\blairdship\sdrive\b/gmi,
/\bLine\sClose\b/gm,
/\blowness\scoppice\b/gmi,
/\blavendar\scroft\b/gmi,
/\bloaded\scamel\srock\b/gmi,
/\bladies['‘’`]?\s(?:beach|brae|chamber|cleugh|cove|drive|fields|flat|garden\swood|grove(?:\swood)?)\b/gmi,
/\bladies['‘’`]?\s(?:haugh|hill(?:\swood)?|hole(?:\s(?:planting|point))?|house\scopse|la[kn]e|lawn)\b/gmi,
/\bladies['‘’`]?\s(?:ledge(?:\sneck)?|linn|mile(?:\s(?:close|road))?|mire|moss|pond|pool|ride\swood)\b/gmi,
/\bladies['‘’`]?\s(?:row|seat|skerrs|spring(?:\s(?:drive|grove|wood))?|strip|table|walk(?:\s(?:plantation|wood))?|window|wood)\b/gmi,
/\b(?:harrogate\sladies\scollege|the\sladies\swalk|white\sladies\s(?:aston|close|court|walk))\b/gmi,
/\blakers\s(?:meadow|rise|road|school)\b/gmi,
/\blakeside\s(?:and\shaverthwaite\srailway|approach|at\swatermead|avenue|boulevard|campus)\b/gmi,
/\blakeside\s(?:chase|community\sprimary\sschool|county\sprimary\sschool|court|crescent)\b/gmi,
/\blakeside\s(?:gardens|grange|green|grove|halt|meadows|mews|miniature\srailway)\b/gmi,
/\blakeside\s(?:nursery\sand\sprimary\sschool|nursing\sand\sresidential\shome)\b/gmi,
/\blakeside\s(?:park(?:\sdrive)?|place|primary\sschool|railway|rise|road|school|way|wood)\b/gmi,
/\bLakeside\s(?:Close|Cottages|Drive|Estate|Terrace|View|Village|Walk)\b/gm,
/\blamp\s(?:acres?|close|court|hill|lane|post\slane|rock|wood(?:\sclose)?)\b/gmi,
/\b(?:adam['‘’`s]{1,2}|adventurers['‘’`]?|aley|back\scollege|bacon['‘’`s]{1,2}|bell|bishop['‘’`s]{1,2})\sland\b/gmi,
/\b(?:bottom|brand['‘’`s]{1,2}|bushy|butchers|camping|charity|church|college|colley|coombe)\sland\b/gmi,
/\b(?:dainty|deers|dimlington\shigh|easter|eight\sro[ao]ds|eppitts|findlays|freehold|gardeners)\sland\b/gmi,
/\b(?:glebe|godford|green\slane|hall|hart|haver|heathers|herrings|high|higher)\sland\b/gmi,
/\b(?:holme|johnson['‘’`s]{1,2}|jug|lammas|lewd|liam['‘’`s]{1,2}|light|long|lord['‘’`s]{1,2}|lovelings)\sland\b/gmi,
/\b(?:maen|marshalls|mary|mill|milne['‘’`s]{1,2}|muckle|oldfield|ouse|parson['‘’`s]{1,2}|partridge)\sland\b/gmi,
/\b(?:peaked|poor['‘’`s]{1,2}|quarter|reeves|robins|ruskin|sayers|snarham|spangate|stonehill)\sland\b/gmi,
/\b(?:sheringham\spoor|smithers|strife|sype|terwick|thirds|trinity\shouse|van\sdiem[ae]n['‘’`s]{1,2})\sland\b/gmi,
/\b(?:west\sside|wester|widows['‘’`]?|wilson['‘’`s]{1,2})\sland\b/gmi,
/\bland\sfloods\sdrove\b/gmi,
/\b(?:Land\s(?:Close|Ends|Part)|(?:Low|No[\s-]Man['‘’`s]{1,2}|Parish|rough)\sLand)\b/gm,
/\bland['‘’`s]{1,2}\send\b/gmi,
/\bland\sof\s(?:canaan|green\sginger|nod)\b/gmi,
/\bland\s(?:combe|coppice|cove|cut\slane|dike|end|floods\sdrove|gate|girl|grove|hill|lane|loch|mackie)\b/gmi,
/\bland\s(?:moor|oak|park|plantation|quarry|side|society\slane|street|taing|way|wood)\b/gmi,
/\b(?:promised\sland\s(?:academy|lane)|school\sland\slane|south\sland\sstreet|wood\sland\sway)\b/gmi,
/\blandfall\sdrive\b/gmi,
/\bLanding\s(?:Bay|Close|Lights)\b/gm,
/\blandings\slane\b/gmi,
/\b(?:blacksmith['‘’`s]{1,2}|broad|coble|east|frenchman['‘’`s]{1,2}|jarvis['‘’`]?|king['‘’`s]{1,2}|marsden|merchants|north|rawcliffe|roman|sandhall|south|steadholm|whitehall)\slanding\b/gmi,
/\blanding\s(?:carn|cove|knott|lane|light\sway|road|rock|scar|spinney|wood)\b/gmi,
/\b(?:princes\slanding\sstage|the\spacket\slanding)\b/gmi,
/\bLandscape\s(?:Close|Garden)\b/gm,
/\blandscape\s(?:dene|drive|lane|road|view)\b/gmi,
/\blandmark\s(?:court|house|place|road)\b/gmi,
/\bLandmark\sInternational\bSchool\b/gm,
/\blantern\s(?:bottom|close|court|grove|hill|lane|marshes|mews|moss\starn)\b/gmi,
/\blantern\s(?:pike(?:\sview)?|road|rock|view|way|wood|yard)\b/gmi,
/\blaps\swater\b/gmi,
/\blatin\s(?:close|gardens|grove|street)\b/gmi,
/\blatter\s(?:barrow|rig\smoss|road)\b/gmi,
/\b(?:launch\sstreet|ship\slaunch\sroad)\b/gmi,
/\blaundry\s(?:belt|burn\sclose|close|clump|copse|court|fields|hill|lane|loke|mews|place|plantation|pool|road|street|strip|way|wood|yard)\b/gmi,
/\blawyers['‘’`]?\s(?:close|creek|lane|wood)\b/gmi,
/\bLayer\sClose\b/gm,
/\blayer[\s-](?:breton(?:\sh(?:eath|ill))?|de[\s-]la[\s-]haye|gardens|knowe|marney|road|wood)\b/gmi,
/\b(?:noon\slayer\sdrive|broad\slaying)\b/gmi,
/\blanyard\s(?:drive|way)\b/gmi,

// LE
/\blegs\s(?:and\sstockings\swood|lane)\b/gmi,
/\bleak\s(?:hall\s(?:crescent|lane|road)?|street|willie|wood)\b/gmi,
/\bleak['‘’`s]{1,2}\splantation\b/gmi,
/\bleader\sfoot\b/gmi,
/\bleas\sfoot\ssand\b/gmi,
/\bleithen\sfoot\spool\b/gmi,
/\bleaning\sgrooves\sflat\b/gmi,
/\b(?:Inner|Mid|Mill)\sLead\b/gm,
/\b(?:lead\s(?:flats|green|hill|lane|mill\slane|mills|mine\s(?:clough|moss)|moor|pool|road|stone|street|wath\swood)|bridge\sof\slead\spot)\b/gmi,
/\bleader\s(?:avenue|close|court|foot|kip|road|street|vale|valley|williams\sroad|wood)\b/gmi,
/\b(?:eric\sleader\sclose|leader['‘’`s]{1,2}\s(?:spinney|way))\b/gmi,
/\bleading\s(?:drove|post\sstreet)\b/gmi,
/\bleads\s(?:cottages|road)\b/gmi,
/\bLeafy\sWood\b/gm,
/\bleafy\s(?:close|glade|grove(?:\scopse)?|lane|oak\sroad|rigg|rise|way)\b/gmi,
/\bleague\s(?:hill|hole)\b/gmi,
/\bLean\sLow\b/gm,
/\b(?:mc\s*lean\splace|lean['‘’`s]{1,2}\swood|leaner\sstack)\b/gmi,
/\b(?:cnoc|glen|james)\slean\b/gmi,
/\blean\s(?:hill|point|shaw|tom\splantation|wood)\b/gmi,
/\b(?:Deers\s)?Leap\sClose\b/gm,
/\b(?:Leap\sRocks|Salmons?\sLeap)\b/gm,
/\b(?:barry['‘’`s]{1,2}|barny['‘’`s]{1,2}|bays|bodrugan['‘’`s]{1,2}|bryan['‘’`s]{1,2}|butlers|byard['‘’`s]{1,2})\sleap\b/gmi,
/\b(?:cat|cottage|deer['‘’`s]{1,2}(?:\s(?:belt|drive|lane))?|dutchman['‘’`]s|fawns|hares)\sleap\b/gmi,
/\b(?:hawkes|huntsman['‘’`s]{1,2}|jock\syoung['‘’`s]{1,2}|jordan['‘’`s]{1,2}|katty['‘’`s]{1,2}|lord\soliphant['‘’`s]{1,2})\sleap\b/gmi,
/\b(?:nicolson['‘’`s]{1,2}|pikes|smales|st\slucas|stags|swinburn['‘’`s]{1,2}|wintour['‘’`s]{1,2})\sleap\b/gmi,
/\bleap\s(?:close\swood|gate|hill|isle|linn|moor|park|vale|valley(?:\screscent)?|view\sclose|wood)\b/gmi,
/\b(?:herds['‘’`]?\sleap\splantation|lover['‘’`s]{1,2}\sleap(?:\sstream)?)\b/gmi,
/\bleaping\s(?:birds\srise|stocks\sroad)\b/gmi,
/\b(?:leases\s(?:lane|road|wood)|(?:far|high|low)\sleases\slane)\b/gmi,
/\bledge\s(?:copse|hill|ley|plantation|point|side\splantation|wood)\b/gmi,
/\blee\sness\sledge\b/gmi,
/\blittle\s(?:crabs|english\sisland|high\srock|merrick|rag|rushy\sbay)\sledge\b/gmi,
/\bledge\sof\smackerel\srocks\b/gmi,
/\bLittle\sLedge\b/gm,
/\bLong\sLedge\b/gm,
/\bLower\sLedge\b/gm,
/\blebanon\s(?:avenue|close|drive|gardens|grove|park|road|street|terrace)\b/gmi,
/\blens\s(?:drive|road|wick)\b/gmi,
/\b(?:letter\s(?:box\s(?:lane|wood)|daill|hill|moor|muir|road|wood)|(?:coed|loch|mealna)\sletter)\b/gmi,
/\bletterbox\s(?:firs|plantation)\b/gmi,
/\b(?:ash|beamsley|bedford|brede|caldicot|calthorpe|chapel|chevet|church|cooks|crumlin\shigh|cwm)\slevel\b/gmi,
/\b(?:derbyshire|geary['‘’`s]{1,2}|glynleigh|heath\s(?:high|Low)|hooe|horse\seye|huntspill|long)\slevel\b/gmi,
/\b(?:manxey|muchelney|pett|redvein|scout\smoor\shigh|wentlooge|west\slangney|westhay|wood\sof)\slevel\b/gmi,
/\blevel\s(?:cleugh|common|crossing\sroad|drive|hill|lane|mare\slane|reservoirs|road|street|way)\b/gmi,
/\b(?:Lower\sForest\sLevel|Hard\sLevel\sForce|(?:Middle|North|Upper\sForest)\sLevel)\b/gm,
/\b(?:level\sof\smendalgief|level['‘’`s]{1,2}\sgreen|new\slevel\shill|old\slevel\sway|the\schaddock\slevel)\b/gmi,
/\bleveller\s(?:end|road|way)\b/gmi,

// LI
/\blincoln\sred\sclose\b/gmi,
/\blittle\sred\swood\b/gmi,
/\blivera\stongue\b/gmi,
/\blight\sfoot\slane\b/gmi,
/\blittle\s(?:ball\scopse|week\s(?:close|gardens|road))\b/gmi,
/\bliddells\sfell\sroad\b/gmi,
/\bli(?:ly|mestones|ng)\sfell\b/gmi,
/\blittle\s(?:dun|ewe|harter|mell|sca|stags)\sfell\b/gmi,
/\blittle\sfell\s(?:brae|lane|pasture|plantation|road)\b/gmi,
/\bLittle\sFell\b/gm,
/\blingo\sbig\swood\b/gmi,
/\blinley\sbig\swood\b/gmi,
/\blimehouse\scut\b/gmi,
/\blindrick\swith\sstudley\sroyal\sand\sfountains\b/gmi,
/\blittle\sstairs\spoint\b/gmi,
/\bLittle\s(?:Beside|Callipers|Cut|Man|Goat|Gulls|Load|Spenders|Tumblers)\b/gm,
/\blittle\s(?:kindles\srow|lances\shill|man['‘’`s]{1,2}\sway|parts\sdrove)\b/gmi,
/\blittle[\s-]go\splantation\b/gmi,
/\blittleborough\slakeside\b/gmi,
/\bLibrary\sClose\b/gm,
/\blibrary\s(?:avenue|clump|court|gardens|hill|lane|mews|park|place|plantation|road|spinney|street|walk|way)\b/gmi,
/\bLife\sClose\b/gm,
/\blife\s(?:christian\sacademy|health\scentre|hill|of\sman\splantation|rock|sciences\sutc|wood)\b/gmi,
/\blifeboat\s(?:avenue|hill|lane|plain|plantation|quay|road|way)\b/gmi,
/\b(?:Abbey|Eternal)\sLight\b/gm,
/\bLight\s(?:Ash|Close|Wood)\b/gm,
/\b(?:holmes['‘’`s]{1,2}|witney|stadium\sof)\slight\b/gmi,
/\blight\s(?:alders\slane|ash(?:\sclose|lane)|bank\slane|beds|birches|birks|bourne\sgreen|clough|copse|foot\slane)\b/gmi,
/\blight\s(?:grove|hall|haw|hazzles|hill|land\splantation|lane|moor|oaks(?:\s(?:avenue|close|road))?)\b/gmi,
/\blight\s(?:of\sthe\smaize|pine\shall\sroad|spout(?:\shollow)?)\b/gmi,
/\b(?:light['‘’`s]{1,2}\slane|north\slight\sway)\b/gmi,
/\blighter[\s-]than[\s-]air\sroad\b/gmi,
/\blighthouse\s(?:cristian|close|down|drive|fields?|grove|hill|lane|point|road|school|score|upper\sschool)\b/gmi,
/\blightning\s(?:close|grove|hill|lane|road|way)\b/gmi,
/\blikely\s(?:hill|wood)\b/gmi,
/\bline\s(?:geo|hill|lane|learning|path|plantation|railway|square\swood|street|thorns|view|way|wood)\b/gmi,
/\blinkage\scollage\b/gmi,
/\blimb\s(?:crescent|lane|road|valley)\b/gmi,
/\b(?:anne|barn|bunk|colliery|honeybourne|lea|mill|poppy|purbeck|watercress)\sline\b/gmi,
/\bline\s(?:geo|hill|square\swood|street|thorns|way|wood)\b/gmi,
/\b(?:anne\sline\sclose)\b/gmi,
/\b(?:Friendly|Knotty|Lavender|Long|Main|New|Pipe|Whiskey)\sLine\b/gm,
/\b(?:lithe\slochan|na\slithe|chrann[\s-]lithe)\b/gmi,
/\blive\smoor\b/gmi,
/\bLive\sStock\b/gm,

// LL
/\bllwyn[\s-]y[\s-]go\b/gmi,
/\bllanfihangel\snear\srogiet\b/gmi,

// LN
/\bLNG\sterminal\b/gmi,

// LO
/\blong\sbrick\sfield\b/gmi,
/\blorry\sbank\b/gmi,
/\blow\sred\scliff\b/gmi,
/\blower\sred\shill\b/gmi,
/\blong\stongue\sscrog\slane\b/gmi,
/\blord['‘’`s]{1,2}\stongue\b/gmi,
/\blon\sfel\b/gmi,
/\bloch\snam\sball\b/gmi,
/\blord\schair\shill\b/gmi,
/\blo(?:an|ch|ng)\sfell\b/gmi,
/\blow\s(?:auchenree|birk|cringle)\sfell\b/gmi,
/\blow\sfell\s(?:close|plantation)\b/gmi,
/\bLow\sFell\b/gm,
/\blow\s(?:green\sfell|holding\swood)\b/gmi,
/\blower\s(?:fell\splantation|house\sbig\swood|small\sclough|throat\spool)\b/gmi,
/\bloch\s(?:an\sair|arm|beauty|glass|of\s(?:pile|soy|the\sward))\b/gmi,
/\blooking\sglass\spond\b/gmi,
/\bLooking\sGlass\b/gm,
/\bLo(?:ck|ng|wer)\sCut\b/gm,
/\blong[\s-]go\slane\b/gmi,
/\blower\scloister\b/gmi,
/\blordsgate\stownship\b/gmi,
/\bLong\s(?:Goat|Load)\b/gm,
/\bload\s(?:brook|field\sroad|lane|of\shay\sroad|pool|road|street)\b/gmi,
/\bbull\sload\sdrove\b/gmi,
/\bloading\s(?:bay|hope)\b/gmi,
/\blobster\s(?:carr|geo|lane|road|rocks?)\b/gmi,
/\b(?:Local\s(?:Care\sCentre|Nature\sReserve)|Medway\sLocal)\b/gm,
/\b(?:log\s(?:geo|wood)|(?:ber|crook|tory)\slog)\b/gmi,
/\bLonely\s(?:Road|Wood)\b/gm,
/\blong\srap\splantation\b/gmi,
/\bLook\sOut(?!\!)\b/gm,
/\blook\swood\b/gmi,
/\blook[\s-]out\swood\b/gmi,
/\blook['‘’`s]{1,2}\slane\b/gmi,
/\blookout\s(?:clump|hill|lake|plantation|pool)\b/gmi,
/\b(?:dyer['‘’`s]{1,2}|zawn)\slookout\b/gmi,
/\bloop\s(?:court\smews|halt|hill|hole|lane|meadow|park|road|street|wood|wyke)\b/gmi,
/\bloop\sof\s(?:crooie|duresse|geoholdis|pool|sandber)\b/gmi,
/\b(?:cadgers['‘’`]?|castlegate|island|king['‘’`s]{1,2}|rough|russet|skerries\sof\sthe)\sloop\b/gmi,
/\b(?:Black|Long|Navigation|Spitfire|Thumb)\sLoop\b/gm,
/\b(?:hollyblue\slose|lose\s(?:hill|road))\b/gmi,
/\b(?:cragg|hobb['‘’`s]{1,2}|ned['‘’`s]{1,2})\slot\b/gmi,
/\blot\s(?:lane|law|wood)\b/gmi,
/\blord['‘’`s]{1,2}\slot(?:\s(?:road|wood))?\b/gmi,
/\blot['‘’`s]{1,2}\s(?:ait|bridge|coppice|dr[io]ve|hole|lane|pond|road|wife|wood)\b/gmi,
/\bpark\slot\swood\b/gmi,
/\blottery\s(?:row|street)\b/gmi,
/\blower\slandslip\b/gmi,

// LU
/\blumber\s(?:hill|lane|leys|wood)\b/gmi,
/\blumb\sfoot\b/gmi,
/\blucy['‘’`s]{1,2}\sledge\b/gmi,
/\blump\sof\sclay\sledge\b/gmi,
/\b(?:luck['‘’`s]{1,2}\s(?:lane|road|wood)|ledston\sluck|william\sluck\sclose)\b/gmi,
/\bLupins\sClose\b/gm,
/\blupus\s(?:drive|road|street|way)\b/gmi,
/\blushes\s(?:court|road)\b/gmi,
/\blushy\sgully\b/gmi,

// LY
/\blythe\sfell\s(?:avenue|road)\b/gmi,
/\blyre['‘’`s]{1,2}\s(?:cliff|cro|geo)\b/gmi,
/\bLyrical\sWay\b/gm,
/\blydney\s(?:and|\&)\sdistrict\b/gmi,
];
const LocationILRegEx: Set<RegExp> = new Set();
a.forEach(term => LocationILRegEx.add(term));
export {LocationILRegEx};