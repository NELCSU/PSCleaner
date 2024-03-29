/**********************************************************************
 * Pattern matches UK location names beginning with 'The'
 * 
 * Action needed
 * 
 * (medium priority)
 * These create false positives and should be revised over time
 **********************************************************************/
export const LocationTheRegEx: RegExp[] = [
  /\bThe\sAb(?:be['‘’`s]{1,2}|bey)\b/gm,
  /\bThe\sAc(?:ademy|orns?|res?)\b/gm,
  /\bThe\sAl(?:cove|lotments?|monds|oes|t|tars)\b/gm,
  /\bThe\sAmerica\b/gm,
  /\bThe\sAn(?:nunciation|tiquaries|ts|vil)\b/gm,
  /\bThe\sAp(?:iary|pleyard|proach|rons)\b/gm,
  /\bThe\sAquadrome\b/gm,
  /\bThe\sArc(?:ade|hbishop['‘’`s]{1,2}|hery|hes|hway)?\b/gm,
  /\bThe\sAr(?:ans|bory|bours|k|moury|ms|t\sAcademy)\b/gm,
  /\bThe\sA(?:sh|uks|venues?|xis)\b/gm,
  
  // B
  /\bThe\sBail(?:iwick|s)\b/gm,
  /\bThe\sBa(?:bes|cks|d\sStep|keries|ker[sy]|nks?|tts|ulks?)\b/gm,
  /\bThe\sBal(?:es|k)\b/gm,
  /\bThe\sBar(?:nyard|on[sy]|racks|rows)\b/gm,
  /\bThe\sBas(?:ins|s|ses|tard)\b/gm,
  /\bThe\sBat(?:ch|ches|he|tery(?:\s[Bb]anks)?)\b/gm,
  /\bThe\sBea(?:cons?|gles|ms|n\sAcre|rs?|st)\b/gm,
  /\bThe\sBee(?:s|f\sBarrel|hives?)\b/gm,
  /\bThe\sBe(?:ck|eches|dwyns|ll|lsteads|nefits|rries)\b/gm,
  /\bThe\sBig\s(?:Act|House|Thorns|Yard)\b/gm,
  /\bThe\sBi(?:ble\sCollege|rches|tches)\b/gm,
  /\bThe\sBl(?:ack\sSpout|uebells)\b/gm,
  /\bThe\sBou(?:ght|levard|nds?|ndaries|ndary)\b/gm,
  /\bThe\sBo(?:ar|g|lt|re)\b/gm,
  /\bThe\sBra(?:ckens?|ids?|ke|kes\sWood|nd|wn)\b/gm,
  /\bThe\sBre(?:ach|aches|ech|ezes?)\b/gm,
  /\bThe\sBria(?:r[sy])\b/gm,
  /\bThe\sBrid(?:ges?|le)\b/gm,
  /\bThe\sBri(?:ckyard|ers?|g|ng|t)\b/gm,
  /\bThe\sBro(?:ads?|adway|oks|oms|ugh|ws?|xbourne)\b/gm,
  /\bThe\sBun(?:galows|tings?)\b/gm,
  /\bThe\sBu(?:cklers|dding|ffer|ll\sRing|tchery|tts)\b/gm,
  /\bThe\sBy(?:e|e?[\s-](?:[Pp]ass|[Ww]ays?))\b/gm,
  
  // C
  /\bThe\sCa(?:ble|irns|irn\sHead|lls?|pes|stle|thedral|useway)\b/gm,
  /\bThe\sCam(?:p|pus)\b/gm,
  /\bThe\sCan(?:al|dlemakers)\b/gm,
  /\bThe\sCar(?:penters|riages|t\sTrack|ts)\b/gm,
  /\bThe\sCha(?:lets|lks?|mbers|pel|pelry|rt|rters?|tters|ucer)\b/gm,
  /\bThe\sChan(?:cellor|cery|dlers|nels?|tries|ters)\b/gm,
  /\bThe\sChe(?:ck|eses|rwell)\b/gm,
  /\bThe\sCh(?:imes|imneys|ocolate\sWorks|ristian)\b/gm,
  /\bThe\sCi(?:rcle|rcuits?|rcus|ty)\b/gm,
  /\bThe\sClo(?:ck\sWood|isters|se|vers|ves|ud)\b/gm,
  /\bThe\sCl(?:amps?|assics|ay|earings|ears|eats|imb|ippers|ub|umps?)\b/gm,
  /\bThe\sCoach(?:\s(?:Drive|Houses?|Road)|works)\b/gm,
  /\bThe\sCoa(?:lpits|st(?:\sGuards)?)\b/gm,
  /\bThe\sCob(?:bler|bles)?\b/gm,
  /\bThe\sCokers\b/gm,
  /\bThe\sCol(?:lege|liers|liery|onnade|ony|ts|umbines?)\b/gm,
  /\bThe\sCom(?:bs|frey|mons?|munity\sCollege|p|pass)\b/gm,
  /\bThe\sCon(?:duit|nection|ifers|stables|suls)\b/gm,
  /\bThe\sCop(?:es|pice|per\s[Bb]eeches|se)?\b/gm,
  /\bThe\sCor(?:morant|nfields|n|ners|nfields|ries)\b/gm,
  /\bThe\sCou(?:nty|rse|rtrooms|rts?|rtyards?)\b/gm,
  /\bThe\sCove(?:rs|rts?|s|t)\b/gm,
  /\bThe\sCo(?:-?[Oo]perative|ttage|ttons|w)\b/gm,
  /\bThe\sCra(?:dle|fty?|gs|nny|ven|y)\b/gm,
  /\bThe\sCre(?:amery|ed|ek|scents?|st)\b/gm,
  /\bThe\sCricketers\b/gm,
  /\bThe\sCro(?:fts?|fters|ps|ok|ss|ssings?|sspath|ssroads|ssways|wns)\b/gm,
  /\bThe\sCr(?:ucible|umbles|usades|ypt)\b/gm,
  /\bThe\sCu(?:ckoo|lvert|rtain|rve|tter|tting(?:\sStrip|s)?)\b/gm,
  /\bThe\sCy(?:cle\sWorks|gnets|linders)\b/gm,
  
  // D
  /\bThe\sDa(?:ffodils|iry|rk\sShore|shes)\b/gm,
  /\bThe\sDe(?:af\sAcademy|als|anery|er\sLeap)\b/gm,
  /\bThe\sDi(?:al|sputes|strict\sChurch|tch)\b/gm,
  /\bThe\sDo(?:cks?|ves|wns?|wns\sBrake)\b/gm,
  /\bThe\sDr(?:ain|ays|ift|iftway|ive|ums?)\b/gm,
  /\bThe\sDu(?:ck\sLagoon|e)\b/gm,
  /\bThe\sDy(?:es|ke\sForest|kes)\b/gm,
  
  // E
  /\bThe\sEa(?:ger|rldoms|rls|rthquake)\b/gm,
  /\bThe\sEl(?:ders|even\sAcre|lipse|ms)\b/gm,
  /\bThe\sEn(?:gine(?:\sGreen)?|try)\b/gm,
  /\bThe\sEx(?:change|pressway)\b/gm,
  /\bThe\sE(?:-Act|dge|ducation\sVillage|ight\sAcres|piphany|yes)\b/gm,
  
  // F
  /\bThe\sFar(?:m|mlands|mstead|riers|things)\b/gm,
  /\bThe\sFa(?:irground|irways?|lcon|lconers|lcons|lls?|n|wn)\b/gm,
  /\bThe\sFe(?:athers|eder|ll(?:s|\sWay)?|llows|rries|rry|rns)\b/gm,
  /\bThe\sFid(?:dle|dlers)\b/gm,
  /\bThe\sFi(?:elders|ndings|rs|sheries|sher[sy]|ve\sSprings)\b/gm,
  /\bThe\sFla(?:gs|sh|shes)\b/gm,
  /\bThe\sFl(?:etches|eece|eets?|ints|oats|ood|ourish|yers)\b/gm,
  /\bThe\sFol(?:ds?|ders|dings|lies|ly)\b/gm,
  /\bThe\sFoothills\b/gm,
  /\bThe\sFore(?:stry|stside)\b/gm,
  /\bThe\sFor(?:d|ding|ces?|ge|ks|t|ties|tress|tunes|ty(?:\sacres?)?|um)\b/gm,
  /\bThe\sFou(?:ndry|r\s(?:Acres?|Tubs|Wents)|ntains?)\b/gm,
  /\bThe\sFo(?:x|xgloves|xholes|xes)\b/gm,
  /\bThe\sFra(?:minghams|mptons)\b/gm,
  /\bThe\sFre(?:e\sSchool|ehold|eway|nchman)\b/gm,
  /\bThe\sFriars\b/gmi,
  /\bThe\sFur(?:long|lough|rows?|ylde)\b/gm,
  
  // G
  /\bThe\sGal(?:lery|leries|lops?|e)\b/gm,
  /\bThe\sGa(?:bles|ges|ng|ngway|ps?|rlands|rners|teways?|vels)\b/gm,
  /\bThe\sGeo\b/gm,
  /\bThe\sGl(?:ades?|assworks|eanings|impse|obal\sAcademy|obe)\b/gm,
  /\bThe\sGo(?:d\sAlmighty|oose|re|rge|rses?|slings|ssamers)\b/gm,
  /\bThe\sGran(?:aries|ary|d|ge)\b/gm,
  /\bThe\sGra(?:dient|in\sStore|tes|ves|zings|zing\sGrounds)\b/gm,
  /\bThe\sGre(?:en(?:\sDrift)?|ens|ens\sClose|at\sFace|at\sGully|y\sCorries|ys)\b/gm,
  /\bThe\sGri(?:d|p|pes|st)\b/gm,
  /\bThe\sGro(?:ve|in|unds|ves)\b/gm,
  /\bThe\sGul(?:f|l|let|ley|ls|ly)\b/gm,
  /\bThe\sGu(?:ards?|ides\sFlat|ild|n|t|tter|vnor['‘’`s]{1,2}\sBelt|ys)\b/gm,

  // H
  /\bThe\sHa(?:lve|ngers?|nging|ngs|rd(?:\sInterchange)?|t)\b/gm,
  /\bThe\sHe(?:adway|ath|athery|edge\s?[Rr]ow|dges|ights?|ritage|rmitage|rons?|xagon)\b/gm,
  /\bThe\sHigh(?:lands|light|way|\sSchool)?\b/gm,
  /\bThe\sHi(?:des?|deaway|lls?|llocks?|ves?)\b/gm,
  /\bThe\sHol(?:dings|es?|lies|lows?|lyoaks|mwoods)\b/gm,
  /\bThe\sHome(?:lands|s|steads?)\b/gm,
  /\bThe\sHor(?:n|nbeams|nets?|sefair|se\s?[Ss]hoes?|ses?)\b/gm,
  /\bThe\sHo(?:e|g|ods|ming|oks?|pes|pper)\b/gm,
  /\bThe\sHu(?:b|ddles|mp|ndred|nt\sClose|rdles|stings|tches)\b/gm,

  // I
  /\bThe\sImage\sCentre\b/gm,
  /\bThe\sIn(?:ch|ches|cline|closures|field|nings|takes?|terchange)\b/gm,
  /\bThe\sI(?:ll\sCraig|ronworks|slands?|sles?|ve)\b/gm,
  
  // J
  /\bThe\sJu(?:bilee|nction|nipers)\b/gm,
  /\bThe\sJ(?:amb|etty|ewel|cb\sAcademy|etties|oint)\b/gm,
  
  // K
  /\bThe\sKe(?:els|en|ep|nnels|strels|t|ttle|ys?)\b/gm,
  /\bThe\sKi(?:lns?|ng['‘’`s]{1,2}|ngfishers|osk|rk['‘’`s]{1,2}\sAlarm)\b/gm,
  /\bThe\sKn(?:ight|ights\sTemplar|ock|olls|otty\sLine)\b/gm,
  
  // L
  /\bThe\sLam(?:b|p|preys)\b/gm,
  /\bThe\sLan(?:cers|dings|ds?|dslip|e|terns?|yard)\b/gm,
  /\bThe\sLau(?:nches|rels)\b/gm,
  /\bThe\sLa(?:ce\sMill|dle|kes?|irs?|rches|sh|w)\b/gm,
  /\bThe\sLe(?:ap|ases|e|igh|ndings|ngth|ss|vels?)\b/gm,
  /\bThe\sLi(?:nks|on|p|st|zard)\b/gm,
  /\bThe\sLittle\s(?:Belt|Boltons|Brook|Gonerby|Gorge|Horse\sShoe|Minch|Rooks|Rough|Ship)\b/gm,
  /\bThe\sLo(?:bby|ckers|ng\sS(?:hoot|traight)|rd['‘’`s]{1,2}\sHighway|ts)\b/gm,
  /\bThe\sLod(?:ge|gings)\b/gm,
  /\bThe\sLoo(?:kout|ms|ps)\b/gm,

  // M
  /\bThe\sMag(?:ical\sWood|nolias|pies)\b/gm,
  /\bThe\sMan(?:acles|\so['‘’`]?\sWar|or|sion\sMews|tles)\b/gm,
  /\bThe\sMar(?:ch|es?|ina|iners|lins|sh|shes|tingales|y\sRose)\b/gm,
  /\bThe\sMa(?:idens|ll|llards|llows|ples|sons)\b/gm,
  /\bThe\sMe(?:adows?|dical\sWing|et|etings|ridians|re)\b/gm,
  /\bThe\sMi(?:dlands?|ll\sStream|llstones|lls?|llion)\b/gm,
  /\bThe\sMo(?:le|or|t|unts?|untain)\b/gm,
  /\bThe\sMuslins\b/gm,

  // N
  /\bThe\sNa(?:meless|p|pping|tional\sSchool)\b/gm,
  /\bThe\sNe(?:edles?|therlands|utral\sGround|w\s(?:Cut|Forest))\b/gm,
  /\bThe\sNo(?:des|oks?|ose|strils)\b/gm,
  /\bThe\sNu(?:rseries|rsery)\b/gm,

  // O
  /\bThe\sOlde?\sA(?:uctoneer|rmoury)\b/gm,
  /\bThe\sOlde?\sB(?:arnyard|rickyard)\b/gm,
  /\bThe\sOlde?\sC(?:oach\s(?:House|Road|Yard)|ourtyard|reamery)\b/gm,
  /\bThe\sOlde?\sDairy\sFarm\b/gm,
  /\bThe\sOlde?\sF(?:airground|armyard|ire\sStation)\b/gm,
  /\bThe\sOlde?\sG(?:asworks|ated\sRoad|ranary)\b/gm,
  /\bThe\sOlde?\sH(?:ighway|op\sYard)\b/gm,
  /\bThe\sOlde?\sL(?:arches|aundry)\b/gm,
  /\bThe\sOlde?\sM(?:an|ission)\b/gm,
  /\bThe\sOlde?\sN(?:urseries|ursery)\b/gm,
  /\bThe\sOlde?\sPriest\b/gm,
  /\bThe\sOlde?\sRoad\b/gm,
  /\bThe\sOlde?\sSt(?:able\sYard|ackyard|ation\sRoad|ubble)\b/gm,
  /\bThe\sOlde?\sS(?:aw\sMills?|chool\sField|idings)\b/gm,
  /\bThe\sOlde?\sT(?:annery|ennis\sCourts)\b/gm,
  /\bThe\sOlde?\sV(?:inery|ineries|ineyards?)\b/gm,
  /\bThe\sOlde?\sW(?:alled\sGarden|arehouse|ife|oodyard)\b/gm,
  /\bThe\sOa(?:ks|sis)?\b/gm,
  /\bThe\sOr(?:angery|chards?|chids)\b/gm,
  /\bThe\sO(?:ctagon|d|lympia|spreys?|tters|utlook|val|xen)\b/gm,
  
  // P
  /\bThe\sPa(?:cket\sLanding|ddocks?|goda|lms|ye)\b/gm,
  /\bThe\sPar(?:ade|chments|ishes|lour)\b/gm,
  /\bThe\sPat(?:hway\sFields|hfinders?|ios)\b/gm,
  /\bThe\sPavill?ions?(?:\sEnd)?\b/gm,
  /\bThe\sPe(?:aks|el|ntagon|ppercorns)\b/gm,
  /\bThe\sPhoenix\b/gm,
  /\bThe\sPi(?:les|nch|nes|newoods|nfold|nnacles?|ts?|tch)\b/gm,
  /\bThe\sPla(?:ins?|nes|ntations?|nted\sField|nters|nting|teau|tters)\b/gm,
  /\bThe\sPl(?:easures|easure\sGrounds|umbs)\b/gm,
  /\bThe\sPoi(?:nts|nters?)\b/gm,
  /\bThe\sPo(?:les|or\sMan|plars|ppies|rch|tatoe\sGround)\b/gm,
  /\bThe\sPr(?:eserve|iest|imroses|iories|ior[sy]?|y)\b/gm,
  /\bThe\sPro(?:menades?|spect|vidence|w)\b/gm,
  /\bThe\sPu(?:lpit|rse|ts?)\b/gm,
  /\bThe\sPyramid\b/gm,
  
  // Q
  /\bThe\sQua(?:d|drangle|drant|rries|rry|rter|ys?)\b/gm,
  /\bThe\sQu(?:een['‘’`s]{1,2}\sChurch|een\sMother\s(?:Court|Reservoir)|ilts|orum)\b/gm,
  
  // R
  /\bThe\sR(?:\sJ\sMitchell|ye)\b/gm,
  /\bThe\sRa(?:kes?|lly|m|mblers|mparts?)\b/gm,
  /\bThe\sRai(?:l|lway(?:\sSidings)?|n)\b/gm,
  /\bThe\sRan(?:d|gers|k)\b/gm,
  /\bThe\sRea(?:ch|ches|dings)\b/gm,
  /\bThe\sRed(?:dings|woods)\b/gm,
  /\bThe\sRes(?:ervation|erve|ervoir|idences?|olution)\b/gm,
  /\bThe\sRe(?:cess|ctangle|gents|ndezvous|ntal\sRocks|nts|treat)\b/gm,
  /\bThe\sRi(?:b|dings?|des?|dges?|fles|ft|ses?|sing|verbank|vers)\b/gm,
  /\bThe\sRin(?:gs?|gway|k)\b/gm,
  /\bThe\sRoa(?:ches|r)\b/gm,
  /\bThe\sRobins\b/gm,
  /\bThe\sRockery\b/gm,
  /\bThe\sRod(?:e|ings|s)\b/gm,
  /\bThe\sRoes?\b/gm,
  /\bThe\sRollers\b/gm,
  /\bThe\sRoo(?:keries|kery|ks|st)\b/gm,
  /\bThe\sRope(?:makers['‘’`]?|walk|way)\b/gm,
  /\bThe\sRos(?:[ae]ry|\s(?:School|[Ww]alk))\b/gm,
  /\bThe\sRotunda\b/gm,
  /\bThe\sRough(?:\s(?:Grounds?|Park|Patch|Strip)|s)?\b/gm,
  /\bThe\sRou(?:ndabouts?|ts)\b/gm,
  /\bThe\sRoyal(?:\s(?:Drift|Free|High|Masonic|National)|ty)\b/gm,
  /\bThe\sRu(?:ff|ins|mp|n|nners|nway|sh|shes|sk)\b/gm,

  // S
  /\bThe\sSa(?:ddle|ints|le|ndbags|ucers|w\s?[Mm]ills?)\b/gm,
  /\bThe\sSca(?:le(?:\sTarn)?|r|rves)\b/gm,
  /\bThe\sSc(?:imitars|old|ores?|rambles|rape|ullery|ythes)\b/gm,
  /\bThe\sSea(?:gulls|l|ms|rs)\b/gm,
  /\bThe\sSe(?:cret\sGarden|ntinels|rpentine|ttlement|werage\sBeds)\b/gm,
  /\bThe\sSha(?:des?|llows|mbles|rd|rper)\b/gm,
  /\bThe\sShe(?:arers|arings|epfold)\b/gm,
  /\bThe\sShi(?:elds|p|pwrights|res?)\b/gm,
  /\bThe\sSho(?:als?|ots|res?|t)\b/gm,
  /\bThe\sSh(?:rubbery|un)\b/gm,
  /\bThe\sSi(?:dings?|gnals|lls|lvers|sters)\b/gm,
  /\bThe\sSk(?:eres|ipper)\b/gm,
  /\bThe\sSla(?:cks?|de|de\sGreens|ke|ngs|tes?|ughters)\b/gm,
  /\bThe\sSle(?:eve|ights)\b/gm,
  /\bThe\sSl(?:ips|ipway|ithers|obs|opes|ough)\b/gm,
  /\bThe\sSm(?:elt|ithy)\b/gm,
  /\bThe\sSmall\s(?:Downs|Isles|Woods)\b/gm,
  /\bThe\sSnipe\b/gm,
  /\bThe\sSo(?:le|und|w)\b/gm,
  /\bThe\sSp(?:lashes|rings?|rig|ruces|ur)\b/gm,
  /\bThe\sSpa(?:\sPromenade|de|in|rrows)?\b/gm,
  /\bThe\sSpe(?:ars|ctacles)\b/gm,
  /\bThe\sSpi(?:got|ke|llway|ndles?|nnakers?|nne[ry]s?|res|t|tal)\b/gm,
  /\bThe\sSpo(?:rtsman|t|ut)\b/gm,
  /\bThe\sSqu(?:ires|irrels)\b/gm,
  /\bThe\sStat(?:e\sHospital|utes)\b/gm,
  /\bThe\sSta(?:cks?|ff|gs|kes|lls|mpers|nces|ples|rs|rlings)\b/gm,
  /\bThe\sStab(?:les?(?:\s(?:[Pp]ool|[Yy]ard))?)?\b/gm,
  /\bThe\sSte(?:ep|eplechase|eples|pping\sStones|ps|ws?)\b/gm,
  /\bThe\sSti(?:les?|ll|nts|rrup|tch|tchings)\b/gm,
  /\bThe\sSto(?:cks|kes?|nes?|ops?|w)\b/gm,
  /\bThe\sStra(?:ight(?:s|\sMile)?|its?|nds?|ngles|y)\b/gm,
  /\bThe\sStripe?\b/gm,
  /\bThe\sStu(?:dios?|dy|mble)\b/gm,
  /\bThe\sStyle\b/gm,
  /\bThe\sSu(?:bway|mmit|mps|nny\sRoad)\b/gm,
  /\bThe\sSw(?:a[bgn]|amp|eep|ill)\b/gm,
  /\bThe\sSycamores\b/gm,

  // T
  /\bThe\sTab(?:ards|ernacle)\b/gm,
  /\bThe\sTa(?:il(?:\s[Rr]ace)?|n|nners|nnery|rns?|sk|xiway)\b/gm,
  /\bThe\sTe(?:e|mplars|mple|n\sAcres|nnis(?:\sCourt)?|rraces)\b/gm,
  /\bThe\sThr(?:eshers|oat)\b/gm,
  /\bThe\sTh(?:atch|atchers|ickets?|imbles|ird|istles|rift|orns|oroughfare)\b/gm,
  /\bThe\sTi(?:mber\sway|mbers|ns|the|things)\b/gm,
  /\bThe\sTow(?:ers?|path)\b/gm,
  /\bThe\sTo(?:ll|llgate|mb|mbstone|n|ngues|ons|piary|ppings|re|rs)\b/gm,
  /\bThe\sTr(?:am|amway|ap|eehouse|ees|eetops|ench|iangle|ip|undle|ough)\b/gm,
  /\bThe\sTur(?:k|n|ning|npike|nstiles?|rets)\b/gm,
  /\bThe\sTu(?:mbles?|mblers)\b/gm,
  /\bThe\sTw(?:enties|innings|ist|o\s(?:Acre|Brothers))\b/gm,

  // U
  /\bThe\sU(?:nderpass|nderway|niversity\s[Oo]f|pper\sHuddles)\b/gm,

  // V
  /\bThe\sVa(?:le|lleys?|ns?|r)\b/gm,
  /\bThe\sVin(?:es?|eries|ery|eyard|tage\sPair)\b/gm,
  /\bThe\sVi(?:aduct|ctory|ews?|kings|llage|olets?)\b/gm,
  /\bThe\sVo(?:mit|yager\sAcademy)\b/gm,

  // W
  /\bThe\sW\sAuns\b/gm,
  /\bThe\sWa(?:d|des|ge\sOf|ggonway|its|kerings|ver)\b/gm,
  /\bThe\sWal(?:led\sGardens?|nuts|lows|thams)\b/gm,
  /\bThe\sWalk(?:s?|way)\b/gm,
  /\bThe\sWar(?:ds?|drobe|dens|e|ns|rens?)\b/gm,
  /\bThe\sWas(?:h|hing\s(?:Pool|Tub))\b/gm,
  /\bThe\sWatch\b/gm,
  /\bThe\sWater(?:course|cress\sLine|ing|falls?|front|mark|s|shed|side|ways?|\sRun|wheel)\b/gm,
  /\bThe\sWay(?:back|side)\b/gm,
  /\bThe\sWe(?:ar|avers|bs|dges|irs?|llheads|lls?|nt)\b/gm,
  /\bThe\sWhi(?:p|rlpool|rls|sky\sLine|stlers?|te\sRose|thy['‘’`s]{1,2})\b/gm,
  /\bThe\sWh(?:ale|arf|arfage|eel|eelers)\b/gm,
  /\bThe\sWi(?:ck|ckets?|itterings)\b/gm,
  /\bThe\sWid(?:e\sWaters|ow)\b/gm,
  /\bThe\sWil(?:d\sFlower\sMeadow|derness|lows?)\b/gm,
  /\bThe\sWin(?:dings?|dmills|g|nows)\b/gm,
  /\bThe\sWis(?:h|p)\b/gm,
  /\bThe\sWoo(?:ds|dlarks|dlands?|dpeckers|dyard)\b/gm,
  /\bThe\sWo(?:nders|oldridges|rking\sMen['‘’`s]{1,2}|rks|rries)\b/gm,
  /\bThe\sWr(?:angle|angling|ens?)\b/gm,
  
  // Y
  /\bThe\sY(?:ard|ellow\s*Man)\b/gm,
  
  // Z
  /\bThe\sZig\sZag\b/gm
];