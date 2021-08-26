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
/\bi(?:nsignia)\sclose\b/gmi,
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
/\b(?:cleik[\s-]+him[\s-]+in[\s-]+pot|click[\s-]+em[\s-]+in[\s-]+dene|cooper['‘’`]?s[\s-]+in[\s-]+the\swood\scopse)\b/gmi,
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
/\bst\.?[\s-]+(?:john['‘’`]?s[\s-]+in[\s-]+the[\s-]+vale|joseph['‘’`]?s[\s-]+in[\s-]+the[\s-]+park)\b/gmi,
/\bst\.?[\s-]+(?:just[\s-]+in[\s-]+(?:penwith|roseland)|laurence[\s-]+in[\s-]+thanet|martin[\s-]+in[\s-]+(?:meneage|the[\s-]+fields))\b/gmi,
/\bst\.?[\s-]+(?:mary[\s-]+in[\s-]+the[\s-]+(?:fields|marsh)|michael['‘’`s]*[\s-]+in[\s-]+the[\s-]+hamlet|mary[\s-]+in[\s-]+the[\s-]+marsh)\b/gmi,
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

// IR
/\birony\sgeo\b/gmi,
/\bironing\sbox\sclump\b/gmi,
/\b(?:holms\sof\sire|ire\sgeo|ire['‘’`]?s\staing|sgurrachd\sire)\b/gmi,
/\birelands\s(?:croft\sclose|lane)\b/gmi,
/\biridium\s(?:court|way)\b/gmi,
/\b(?:ayre\sof|burnet|grid|ogof)\siron\b/gmi,
/\biron['‘’`s]*\s(?:acton|carr|cliff|close|copse|cove|covert|crag|craig|down|drive|geo|groves|hellia|hill|hogg|howe|keld|lane|latch|leys|mills?|ness|pikes|plantation|plat|road|row|scars?|slunk|tower|way|well)\b/gmi,
/\bIron\s(?:Band|Bar|Bridge|Car|Cross|Dish|Duke|Foundry|Gate|Man|Mine|Point|Railway|Shovel)\b/gm,

// IS
/\bissues\s(?:road|wood)\b/gmi,

// JA
/\bjack\scabin\stop\b/gmi,
/\bjesuit\sclose\b/gmi,
/\bj(?:awbones?|udgement)\shill\b/gmi,
/\bj(?:awbone|olt|uggler['‘’`]?s|umper|uries)\slane\b/gmi,
/\bj(?:acker['‘’`]?s|oin)\sroad\b/gmi,
/\bjetting\sstreet\b/gmi,
/\bjetliner\sway\b/gmi,
/\bj(?:ackpot|ungle)\swood\b/gmi,
/\bjoinings\sbank\b/gmi,
/\bjobbing\scross\b/gmi,
/\bjob\sdrain\splace\b/gmi,
/\bjackass\s(?:lane|moor|shaw|wood)\b/gmi,
/\bjackdaw\s(?:close|crag|drive|griff|hill|lane|plantation|point|rise|road|way|wood)\b/gmi,
/\bJacket\sClose\b/gm,
/\b(?:jacket\s(?:de\shole|pill)|jacket['‘’`]?s\s(?:hill|point))\b/gmi,
/\bjail\s(?:holt|lane|road)\b/gmi,
/\bmiddle\sjamb\b/gmi,
/\bjaunty\s(?:avenue|close|crescent|drive|lane|mount|place|road|view|way)\b/gmi,
/\bjavelin\s(?:avenue|close|crescent|park|road|row|way)\b/gmi,
/\bjaw\s(?:bones\shill|bottom\splantation|hill|reservoir)\b/gmi,
/\b(?:linn|rowantree)\sjaw\b/gmi,
/\bwhale\sjaw\slane\b/gmi,
/\bLion['‘’`]?s\sJaws\b/gm,
/\bwhale\sjaws\shill\b/gmi,

// JE
/\bjellies\shillock\b/gmi,
/\bjetstream\s(?:drive|way)\b/gmi,
/\bjetties\sriverside\scommon\b/gmi,
/\bjewellers\swynd\b/gmi,
/\bjewellery\squarter\b/gmi,

// JO
/\b(?:cae\sjob|job['‘’`s]*\s(?:cleugh|copse|corner|craig|cross|drain\splace|dub|hill|lane|plain|water|well|wood|yard))\b/gmi,
/\bjockey\s(?:bank|belt|cap\sclump|copse|end|field|green|hill|mead|meadow|road|street|way)\b/gmi,
/\bjockey['‘’`s]*\s(?:coppice|fields|plantation|wood)\b/gmi,
/\b(?:horse\sand\s)?jockey['‘’`s]*\slane\b/gmi,
/\b(?:coed\scae|scar)\sjockey\b/gmi,
/\bjocks\s(?:flat\swood|hill)\b/gmi,
/\bjoiners['‘’`]?\s(?:alley|arms|close|court|croft|gardens|hill|lane|mews|road|shop\splantation|way)\b/gmi,
/\bjoint\s(?:campus|hospital|houses|road|wood)\b/gmi,
/\bjoist\sfen\b/gmi,
/\b(?:no\sjoke\splantation|porth\sjoke)\b/gmi,
/\b(?:jollys\slane|through\sjollys)\b/gmi,
/\bjourneyman['‘’`]?s\sgreen\b/gmi,

// JU
/\bjugglers\s(?:close|moor)\b/gmi,

// KA
/\bkangaroo\spond\b/gmi,

// KE
/\b(?:Castle\sKeep|Keep\sClose|Standards\sKeep)\b/gm,
/\b(?:acorn|albury|badgers|beechers|bricklow|cardwells|chandlers|conisbrough|crowhurst|delancey)\skeep\b/gmi,
/\b(?:castle\skeep\s(?:gardens|mews)|high\skeep\sfold)\b/gmi,
/\b(?:fawns|flycatcher|friars|goudhurst|jameson|king['‘’`]?s|marine|millers|monnow|norman)\skeep\b/gmi,
/\b(?:parfit|priors|ruspers|yeomans)\skeep\b/gmi,
/\bkey\s(?:and\scastle\syard|avenue|cleuch|copse|court|gardens|hill(?:\sdrive)?|hole)\b/gmi,
/\bkey\s(?:lane|plantation|road|sike\slane|street|view|way|west(?:\sclose)?|wood)\b/gmi,
/\b(?:mary\s)?key\sclose\b/gmi,
/\b(?:jacks|robert)?\skey\sdrive\b/gmi,
/\b(?:jacks\s)?key\sclough\b/gmi,
/\bkey(?:\ssike)?\slane\b/gmi,
/\bKey\sRoad\b/gm,
/\bkey\sstreet\b/gmi,
/\bkeep\s(?:hatch|hill(?:\s(?:close|drive|end|road))?|lane|rise|street)\b/gmi,
/\bkey['‘’`s]*\s(?:croft|green)\b/gmi,
/\bLower\sKey\b/gm,

// KI
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
/\bkiller\sstreet\b/gmi,
/\bkiribati\sway\b/gmi,
/\bkill\sdevil\scopse\b/gmi,
/\bcaptain\skites\b/gmi,
/\bkites['‘’`]?\s(?:close|copse|croft(?:\sclose)?|farm\slane|hardwick|hill|independent)\b/gmi,
/\bkites['‘’`]?\s\s(?:nest\s(?:lane|walk)|redding\shill)\b/gmi,
/\bkips\swood\b/gmi,
/\b(?:brockhope|phawhope|whirly)\skips\b/gmi,
/\bkilt\srock\sviewpoint\b/gmi,
/\blittle\skindles\srow\b/gmi,
/\bkinetic\screscent\b/gmi,
/\bkingmaker\sway\b/gmi,

// KN
/\bknees?\shill\b/gmi,
/\bknow\sgap\slane\b/gmi,
/\bknock\sstreet\b/gmi,
/\bknacker['‘’`]?s\s(?:hole(?:\s(?:grove|lane))?|wood)\b/gmi,
/\bknee\sof\s(?:cairnsmore|scabra)\b/gmi,
/\b(?:Muckle|Snickert)\sKnees?\b/gm,
/\bknock\sjargon\scourt\b/gmi,
/\bknott\sgulf\b/gmi,

// KO
/\bkorea\sroad\b/gmi,

// KR
/\bkremlin\sdrive\b/gmi,

// LA
/\blaughing\simage\scorner\b/gmi,
/\bLakes\s[Aa]nd\sGardens\b/gm,
/\bl(?:istening\spost|itchen)\sclose\b/gmi,
/\bla(?:ck|g|nterns|ser|wyer['‘’`]?s|x)\slane\b/gmi,
/\ble(?:arning|ctern|g|gendary|nder|wd)\slane\b/gmi,
/\bli(?:d|p(?:\shill)?)\slane\b/gmi,
/\blo(?:cker|gic|ok['‘’`]?s|llipop)\slane\b/gmi,
/\blunch\slane\b/gmi,
/\ble(?:g(?:\sof\smutton)?|mongrass|sson)\sroad\b/gmi,
/\bli(?:beration|beria|mited|ne)\sroad\b/gmi,
/\blong\snuke\sroad\b/gmi,
/\bl(?:eg|iv(?:er|ing\swell))\sstreet\b/gmi,
/\bl(?:egends|izards|ogistics|ong\sswath)\sway\b/gmi,
/\bl(?:ittle\sbeauties|ineage|umps)\swood\b/gmi,
/\bLocal\s(?:Avenue|Board\sStreet)\b/gm,
/\blodging\sbrae\b/gmi,
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
/\bdavy\slamp\b/gmi,
/\b(?:adam['‘’`]?s|adventurers['‘’`]?|aley|back\scollege|bacon['‘’`]?s|bell|bishop['‘’`]?s)\sland\b/gmi,
/\b(?:bottom|brand['‘’`]?s|bushy|butchers|camping|charity|church|college|colley|coombe)\sland\b/gmi,
/\b(?:dainty|deers|dimlington\shigh|easter|eight\sro[ao]ds|eppitts|findlays|freehold|gardeners)\sland\b/gmi,
/\b(?:garth|glebe|godford|green\slane|hall|happy|hart|haver|heathers|herrings|high|higher)\sland\b/gmi,
/\b(?:holme|johnson['‘’`]?s|jug|lammas|lewd|liam['‘’`]?s|light|long|lord['‘’`]?s|lovelings)\sland\b/gmi,
/\b(?:maen|marshalls|mary|mill|milne['‘’`]?s|muckle|oldfield|ouse|parson['‘’`]?s|partridge)\sland\b/gmi,
/\b(?:peaked|poor['‘’`]?s|quarter|reeves|robins|ruskin|sayers|snarham|spangate|stonehill)\sland\b/gmi,
/\b(?:sheringham\spoor|smithers|strife|sype|terwick|thirds|trinity\shouse|van\sdiem[ae]n['‘’`]?s)\sland\b/gmi,
/\b(?:west\sside|wester|widows['‘’`]?|wilson['‘’`]?s)\sland\b/gmi,
/\b(?:Land\s(?:Close|Ends|Part)|(?:Low|No[\s-]Man['‘’`]?s|Parish|rough)\sLand)\b/gm,
/\bland['‘’`]?s\send\b/gmi,
/\bland\s(?:combe|coppice|cove|cut\slane|dike|end|floods\sdrove|gate|girl|grove|hill|lane|loch|mackie)\b/gmi,
/\bland\s(?:moor|oak|of\s(?:canaan|green\sginger|nod)|park|plantation|quarry|side|society\slane|street|taing|way|wood)\b/gmi,
/\b(?:promised\sland\s(?:academy|lane)|school\sland\slane|south\sland\sstreet|wood\sland\sway)\b/gmi,
/\bLanding\s(?:Bay|Close|Lights)\b/gm,
/\b(?:blacksmith['‘’`]?s|broad|coble|east|frenchman['‘’`]?s|jarvis['‘’`]?|king['‘’`]?s|marsden|merchants|north|rawcliffe|roman|sandhall|south|steadholm|whitehall)\slanding\b/gmi,
/\blanding\s(?:carn|cove|knott|lane|light\sway|road|rock|scar|spinney|wood)\b/gmi,
/\b(?:princes\slanding\sstage|the\spacket\slanding)\b/gmi,
/\bLandscape\s(?:Close|Garden)\b/gm,
/\blandscape\s(?:dene|drive|lane|road|view)\b/gmi,
/\blaps\swater\b/gmi,
/\blatin\s(?:close|gardens|grove|street)\b/gmi,
/\blatter\s(?:barrow|rig\smoss|road)\b/gmi,
/\b(?:launch\sstreet|ship\slaunch\sroad)\b/gmi,
/\blaundry\s(?:belt|burn\sclose|close|clump|copse|court|fields|hill|lane|loke|mews|place|plantation|pool|road|street|strip|way|wood|yard)\b/gmi,
/\blawyers['‘’`]?\s(?:close|creek|lane|wood)\b/gmi,
/\bLayer\sClose\b/gm,
/\blayer[\s-](?:breton(?:\sh(?:eath|ill))?|de[\s-]la[\s-]haye|gardens|knowe|marney|road|wood)\b/gmi,
/\b(?:marks\stey\sand\slayer|noon\slayer\sdrive|broad\slaying)\b/gmi,

// LE
/\b(?:Inner|Mid|Mill)\sLead\b/gm,
/\b(?:lead\s(?:flats|green|hill|lane|mill\slane|mills|mine\s(?:clough|moss)|moor|pool|road|stone|street|wath\swood)|bridge\sof\slead\spot)\b/gmi,
/\bleader\s(?:avenue|close|court|foot|kip|road|street|vale|valley|williams\sroad|wood)\b/gmi,
/\b(?:eric\sleader\sclose|leader['‘’`]?s\s(?:spinney|way)|stain\swater\sleader)\b/gmi,
/\bleading\s(?:drove|post\sstreet)\b/gmi,
/\bleads\s(?:cottages|road)\b/gmi,
/\bLeafy\sWood\b/gm,
/\bleafy\s(?:close|glade|grove(?:\scopse)?|lane|oak\sroad|rigg|rise|way)\b/gmi,
/\bleague\s(?:hill|hole)\b/gmi,
/\bLean\sLow\b/gm,
/\b(?:mc\s*lean\splace|lean['‘’`]?s\swood|leaner\sstack)\b/gmi,
/\b(?:cnoc|glen|james)\slean\b/gmi,
/\blean\s(?:hill|point|shaw|tom\splantation|wood)\b/gmi,
/\b(?:Deers\s)?Leap\sClose\b/gm,
/\b(?:Leap\sRocks|Salmons?\sLeap)\b/gm,
/\b(?:barry['‘’`]?s|barny['‘’`]?s|bays|bodrugan['‘’`]?s|bryan['‘’`]?s|butlers|byard['‘’`]?s)\sleap\b/gmi,
/\b(?:cat|cottage|deer['‘’`s]{0,2}(?:\s(?:belt|drive|lane))?|dutchman['‘’`]s|fawns|hares)\sleap\b/gmi,
/\b(?:hawkes|huntsman['‘’`]?s|jock\syoung['‘’`]?s|jordan['‘’`]?s|katty['‘’`]?s|lord\soliphant['‘’`]?s)\sleap\b/gmi,
/\b(?:nicolson['‘’`]?s|pikes|smales|st\slucas|stags|swinburn['‘’`]?s|wintour['‘’`]?s)\sleap\b/gmi,
/\bleap\s(?:close\swood|gate|hill|isle|linn|moor|park|vale|valley(?:\screscent)?|view\sclose|wood)\b/gmi,
/\b(?:herds['‘’`]?\sleap\splantation|lover['‘’`]?s\sleap(?:\sstream)?)\b/gmi,
/\bleaping\s(?:birds\srise|stocks\sroad)\b/gmi,
/\b(?:leases\s(?:lane|road|wood)|(?:far|high|low)\sleases\slane)\b/gmi,
/\b(?:back|front)\slebanon\b/gmi,
/\blebanon\s(?:avenue|close|drive|gardens|grove|park|road|street|terrace)\b/gmi,
/\blens\s(?:drive|road|wick)\b/gmi,
/\b(?:letter\s(?:box\s(?:lane|wood)|daill|hill|moor|muir|road|wood)|(?:coed|loch|mealna)\sletter)\b/gmi,
/\bletterbox\s(?:firs|plantation)\b/gmi,
/\b(?:ash|beamsley|bedford|brede|caldicot|calthorpe|chapel|chevet|church|cooks|crumlin\shigh|cwm)\slevel\b/gmi,
/\b(?:derbyshire|geary['‘’`]?s|glynleigh|heath\s(?:high|Low)|hooe|horse\seye|huntspill|long)\slevel\b/gmi,
/\b(?:manxey|muchelney|pett|redvein|scout\smoor\shigh|wentlooge|west\slangney|westhay|wood\sof)\slevel\b/gmi,
/\blevel\s(?:cleugh|common|crossing\sroad|drive|hill|lane|mare\slane|reservoirs|road|street|way)\b/gmi,
/\b(?:Lower\sForest\sLevel|Hard\sLevel\sForce|(?:Middle|North|Upper\sForest)\sLevel)\b/gm,
/\b(?:level\sof\smendalgief|level['‘’`]?s\sgreen|new\slevel\shill|old\slevel\sway|rhew\slevel\slane|the\schaddock\slevel)\b/gmi,
/\bleveller\s(?:end|road|way)\b/gmi,

// LI
/\bLittle\sBeside\b/gm,
/\blittleborough\slakeside\b/gmi,
/\bLibrary\sClose\b/gm,
/\blibrary\s(?:avenue|clump|court|gardens|hill|lane|mews|park|place|plantation|road|spinney|street|walk|way)\b/gmi,
/\b(?:maughan|newington)\slibrary\b/gmi,
/\bLife\sClose\b/gm,
/\blife\s(?:christian\sacademy|health\scentre|hill|of\sman\splantation|rock|sciences\sutc|wood)\b/gmi,
/\blifeboat\s(?:avenue|hill|lane|plain|plantation|quay|road|way)\b/gmi,
/\b(?:Abbey|Eternal)\sLight\b/gm,
/\bLight\s(?:Ash|Close|Wood)\b/gm,
/\b(?:holmes['‘’`]?s|witney|stadium\sof)\slight\b/gmi,
/\blight\s(?:alders\slane|ash(?:\sclose|lane)|bank\slane|beds|birches|birks|bourne\sgreen|clough|copse|foot\slane)\b/gmi,
/\blight\s(?:grove|hall|haw|hazzles|hill|land\splantation|lane|moor|oaks(?:\s(?:avenue|close|road))?)\b/gmi,
/\blight\s(?:of\sthe\smaize|pine\shall\sroad|spout(?:\shollow)?)\b/gmi,
/\b(?:light['‘’`]?s\slane|north\slight\sway)\b/gmi,
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
/\blittle\sgulls\b/gmi,
/\bLive\sStock\b/gm,

// LO
/\b(?:Little|Long)\sLoad\b/gm,
/\bload\s(?:brook|field\sroad|lane|of\shay\sroad|pool|road|street)\b/gmi,
/\bbull\sload\sdrove\b/gmi,
/\bloading\s(?:bay|hope)\b/gmi,
/\blobster\s(?:carr|geo|lane|road|rocks?)\b/gmi,
/\b(?:Local\s(?:Care\sCentre|Nature\sReserve)|Medway\sLocal)\b/gm,
/\bloch\s(?:an\sair|arm|beauty)\b/gmi,
/\b(?:log\s(?:geo|wood)|(?:ber|crook|tory)\slog)\b/gmi,
/\bLonely\s(?:Road|Wood)\b/gm,
/\blong\srap\splantation\b/gmi,
/\blookout\s(?:clump|hill|lake|plantation|pool)\b/gmi,
/\b(?:dyer['‘’`]?s|zawn)\slookout\b/gmi,
/\bloop\s(?:court\smews|halt|hill|hole|lane|meadow|park|road|street|wood|wyke)\b/gmi,
/\bloop\sof\s(?:crooie|duresse|geoholdis|pool|sandber)\b/gmi,
/\b(?:cadgers['‘’`]?|castlegate|island|king['‘’`]?s|rough|russet|skerries\sof\sthe)\sloop\b/gmi,
/\b(?:Black|Long|Navigation|Spitfire|Thumb)\sLoop\b/gm,
/\b(?:hollyblue\slose|lose\s(?:hill|road))\b/gmi,
/\b(?:cragg|hobb['‘’`]?s|ned['‘’`]?s)\slot\b/gmi,
/\blot\s(?:lane|law|wood)\b/gmi,
/\b(?:lord['‘’`]?s\slot(?:\s(?:road|wood))?|lot['‘’`]?s\s(?:bridge|coppice|hole|pond|wife|wood))\b/gmi,
/\b(?:park\slot\swood|rough\slot\scopse)\b/gmi,
/\blots\s(?:ait|dr[io]ve|lane|road|wood)\b/gmi,
/\blottery\s(?:row|street)\b/gmi,

// LU
/\b(?:luck['‘’`s]*\s(?:lane|road|wood)|ledston\sluck|william\sluck\sclose)\b/gmi,
/\bLupins\sClose\b/gm,
/\blupus\s(?:drive|road|street|way)\b/gmi,
/\blushes\s(?:court|road)\b/gmi,
/\blushy\sgully\b/gmi,

// LY
/\blyre['‘’`s]*\s(?:cliff|cro|geo)\b/gmi,
/\bLyrical\sWay\b/gm,
];
const LocationILRegEx: Set<RegExp> = new Set();
a.forEach(term => LocationILRegEx.add(term));
export {LocationILRegEx};