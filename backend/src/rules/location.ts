export const LocationPrefixRegEx: RegExp[] = [
  /\b(?<!\d[,\\\/])(?:[1-9]\d{0,3}\-)?[1-9]\d{0,3}[a-h]?(?=\s[a-z]{2}\s[a-z]{3,})/gmi,
  /\b(?<!\d[,\\\/])(?:[1-9]\d{0,3}\-)?[1-9]\d{0,3}[a-h]?(?=\s[a-z]{4,})/gmi
];

export const LocationMidfixRegEx: RegExp[] = [
  /(?!\w\s)&(?<!\s\w)/gmi,
  /\b(?:and|for|of|on)\b/gmi,
  /\b(?:(?:[io]n|of)\s)?the\b/gmi,
  /\-y\-/gmi
];

export const LocationSuffixRegEx: RegExp[] = [
  /[\-\s]on[\-\s]sea\b/gmi,
  /[\-\s]on[\-\s]the[\-\s]wall\b/gmi,
];

const a: RegExp[] = [
  /\bP\.?O\.?\sBox\s\d+\b/gmi,
  /\b(?:apartment|block|suite|unit)\s(?:\d\w?|\d\d?|\w\d?)\b|\b\d+(st|nd|rd|th)\sFloor\b/gmi,

  /\babdication\swood\b/gmi,
  /\babundant\sgrace\b/gmi,
  /\bacademy\s(?:brae|close|court|crescent|drive|fields|gardens|house|lane|park|place|quadrant|road|square|street|terrace|view|way)\b/gmi,
  /\bAccess\s(?:[Rr]oad|[Ss]chool|[Ww]ay)\b/gm,
  /\baccommodation\s(?:lane|road)\b/gmi,
  /\bacquaintance\shill\b/gmi,
  /\badjuncts\scovert\b/gmi,
  /\badjustment\s(?:bottom|ground)\b/gmi,
  /\badmin\s(?:building|road)\b/gmi,
  /\badventure\s(?:lane|place)\b/gmi,
  /\badventurers?\s(?:drove|fen|land|quay|way)\b/gmi,
  /\bagitator\sroad\b/gmi,
  /\baggravation\swood\b/gmi,
  /\baggregate\swalk\b/gmi,
  /\bagony\spoint\b/gmi,
  /\bairborne\s(?:avenue|close|drive)\b/gmi,
  /\ball\ssaints\b/gmi,
  /\balliance\s(?:avenue|close|house|lane|place|road|square|street|terrace|way)\b/gmi,
  /\bThe\sGod\sAlmighty\b/gm,
  /\baircraft\s(?:esplanade|way)\b/gmi,
  /\b(?:Hairy|Little|The)\sArm\b/gm,
  /\bamphitheatre\swood\b/gmi,
  /\banchoring\s(?:hill|plantation)\b/gmi,
  /\bannealing\s(?:close|lane)\b/gmi,
  /\bantiquarian\scoppice\b/gmi,
  /\bstrand\sannealing\b/gmi,
  /\banimal\sfarm\scountry\spark\b/gmi,
  /\bapprentice\s(?:close|drive|gardens|lane|way)\b/gmi,
  /\bLondon\sApprentice\b/gm,
  /\barterial\s(?:avenue|road)\b/gmi,
  /\bartichoke\s(?:dell|hill|place)\b/gmi,
  /\b(?:barge|boshboil|east|holcot|loch|nan|peel|sandwell|walgrave|west)\sarm\b/gmi,
  /\barm\s(?:north|lane|road)\b/gmi,
  /\barmy\s(?:camp|foundation|road|row|station)\b/gmi,
  /\b(?:east|glyne|west)\sascent\b/gmi,
  /\bassembly\s(?:avenue|close|passage|road|rooms|square|street|walk|way)\b/gmi,
  /\bassociation\s(?:road|street|way)\b/gmi,
  /\battorney\s(?:court|croft)\b/gmi,
  /\baviation\s(?:avenue|drive|lane|road|way)\b/gmi,
  /\baviator\s(?:court|house|way)\b/gmi,
  /\bback\so['f]?\sthe\sworld\b/gmi,
  /\bThe\sBanks?\b/gm,
  /\bbank\sof\s(?:roseisle|the\sgate)\b/gmi,
  /\b(?:old)?\sbathing\s(?:pool|well\swood|wood)\b/gmi,
  /\bThe\sBig\sAct\b/gm,
  /\bbleaching\s(?:hill|rocks)\b/gmi,
  /\bbleeding\s(?:heart\syard|wolf\slane)\b/gmi,
  /\bbonfire\s(?:close|clump|corner|hall|hanger|hill|lane|plantation)\b/gmi,
  /\b(?:the|cherry)\sbounce\b/gmi,
  /\bbouncer?s?\s(?:lane|road)\b/gmi,
  /\bbrief\sstreet\b/gmi,
  /\bbritons\s(?:copse|hill|lane)\b/gmi,
  /\bbrother\s(?:hills|isle|loch)\b/gmi,
  /\bBus\s(?:Combe|Drove|Link|Sile|Taing)\b/gm,
  /\bThe\sBus\b/gm,
  /\bbusiness\s(?:centre|court|park)\b/gmi,
  /\bC\sof\sE\b/gm,
  /\bcabinet\s(?:close|way|wood)\b/gmi,
  /\b(?:hampton\scare|care\s(?:centre|hill|village))\b/gmi,
  /\bCare\sHome\b/gm,
  /\bcentury\s(?:avenue|belt|close|court|drive|fields|gardens|lane|lodge|mews|park|place|plantation|ponds|road|square|street|view|walk|way|wood)\b/gmi,
  /\bchaos\s(?:clumps|pool)\b/gmi,
  /\bbread\sand\scheese\s(?:cove|drove|lane)\b/gmi,
  /\b(?:Cheese\sHole|The\sCheeses)\b/gm,
  /\bcheese\s(?:copse|corner|gate|hill|lane|pond|rock|wood)\b/gmi,
  /\bcheesecake\sspinney\b/gmi,
  /\bchief\s(?:street|way)\b/gmi,
  /\bchoke\s(?:lane|walk)\b/gmi,
  /\bcinema\s(?:drive|plantation|street)\b/gmi,
  /\bcoesau[\s\-]whips\b/gmi,
  /\bcommando\s(?:access|ridge)\b/gmi,
  /\bcommercial\s(?:avenue|brow|buildings|close|court|crescent|end|gardens|gate|hill|lane|ope|place|primary|quay|road|row|school|street|terrace|villas|way)\b/gmi,
  /\bStryd\sCommercial\b/gm,
  /\bcommittee\sroad\b/gmi,
  /\bcommis?sioner\'?s?\s(?:court|harbour|lane|road|square|street|wharf|wood)\b/gmi,
  /\bcommonwealth\s(?:avenue|close|drive|road|view|way)\b/gmi,
  /\bcommunity\s(?:avenue|close|drive|forest|free\sschool|hall|hospital|lane|place|road|street|way|woodland)\b/gmi,
  /\bconstitution\s(?:court|crescent|hill|lane|opening|place|rise|road|street|terrace)\b/gmi,
  /\bconstitutional\s(?:avenue|hill|street)\b/gmi,
  /\bcouncil\s(?:avenue|hill|lane|of\seurope|road|street|terrace|wood|yard)\b/gmi,
  /\bcrawl\s(?:lane|meadow|wood)\b/gmi,
  /\bcrazies\shill\b/gmi,
  /\bcrazy\s(?:hill|lane|pit\sspinney|well\spool)\b/gmi,
  /\bcrusaders?\s(?:avenue|bank|close|crescent|drive|gardens|rise|road)\b/gmi,
  /\bcrusader?s?\sway\b/gmi,
  /\bThe\sCrusades\b/gm,
  /\bsnail'?s?[\-\s]creep\b/gmi,
  /\b(?:bird|cross|heart)\sin\shand\s(?:church|lane|neuk|pike|road|sand|side|stones|street|wynd|yard)\b/gmi,
  /\bculture\sclose\b/gmi,
  /\bThe\sCurtain\b/gm,
  /\bcurtains?\s(?:lane|place|pond|road|yards)\b/gmi,
  /\bcutthroat\s(?:dean|lane|plantation|wood)\b/gmi,
  /\bData\sDrive\b/gm,
  /\bdead\s(?:cow\spoint|edge|hill|lane|sea)\b/gmi,
  /\bDead\s(?:Eye|Lake|Man's|Man\sWood|Moss\sWood|Wife's|Woman's|Wood)\b/gm,
  /\bdefence\s(?:academy|close|street)\b/gmi,
  /\bkill\sdevil\scopse\b/gmi,
  /\b(?:seven|shoe)\sdevil\'?s?\slane\b/gmi,
  /\bthe\sdevil'?s\s(?:barn|cheesewring|dingle|dressing\sroom|elbow|highway|kitchen|point|punchbowl)b/gmi,
  /\bdigital\sway\b/gmi,
  /\bdiversity\s(?:avenue|drive)\b/gmi,
  /\bDoor\s(?:Bottom|Cove|Covert|Dam|Drove|Head|Hill|Top)\b/gm,
  /\bdoor\sof\sthe\s(?:heugh|kame)\b/gmi,
  /\b(?:cuttiford'?s|durdle|northern|somerton|thirle)\sdoor\b/gmi,
  /\b(?:Barn|Cabin)\sDoor\b/gm,
  /\b(?:Harrys|Wheat)\sDream\b/gm,
  /\b[Dd]umb\s(?:[Bb]ob\s[Ss]pinney|[Hh]all|[Hh]ope|[Pp]ool|[Pp]ots|(?:[Tt]om|[Ww]oman)\'?s\s[Ll]ane)\b/gm,
  /\bearth\s(?:copse|green|holes|holme|lane|primary|street|wall|wood)\b/gmi,
  /\beducation\sroad\b/gmi,
  /\bempire\s(?:avenue|centre|close|court|crescent|drive|gate|grove|mews|parade|park|passage|road|street|terrace|villas|walk|way|wharf)\b/gmi,
  /\benergy\s(?:centre|park|plant|street|works)\b/gmi,
  /\bequity\s(?:road|street)\b/gmi,
  /\beuropean\s(?:college|school|way)\b/gmi,
  /\bExecutive\sBusiness\sCentre\b/gm,
  /\bflying\s(?:high\sacademy|bull|dingle|dutchman|fields|fox|park|scotsman)\b/gmi,
  /\bfree\s(?:church|down|grammar|green|heath|hill|hospital|lane|prae|street)\b/gmi,
  /\broyal\sfree\b/gmi,
  /\bFree\s(?:Fields|Health|State|Town|Trade|Wood)\b/gm,
  /\bFamily\s(?:hub|pond)\b/gm,
  /\bThe\sOld\sFire\sStation\b/gm,
  /\bFire\s(?:Beacon|Wood)\b/gm,
  /\bfire\s(?:beacon\s(?:hill|lane|plantation|point|wood)|bell\salley|coppice|fly\savenue|hill|lane|opal|plantation|station(?:close|lane|road|square|yard)|thorn\sclose)\b/gmi,
  /\bSixth\sForm\b/gm,
  /\bforwards?\s(?:close|drive|green|hill|lane|road|way)\b/gmi,
  /\bfoundation\s(?:close|lake|square|street|way)\b/gmi,
  /\bframe\s(?:green|heath|lane|wood)\b/gmi,
  /\b(?:East|[Ff]orest|[Hh]olywell|Main|North|River|Sea|South|The)\sFront\b/gm,
  /\b[Ff]ront\s(?:[Bb]ay|[Bb]each|Block|[Cc]lump|[Cc]opse|[Cc]overt|[Dd]rive|[Ff]ield|[Hh]ill|[Hh]ome|[Hh]orse|Lane|Lawn|[Pp]ark|[Pp]lantation|[Pp]ool|[Rr]oad|[Rr]ow|[Ss]treet|[Tt]errace|[Ww]ater|[Ww]ay|[Ww]ood)\b/gm,
  /\bfront\s(?:brents|corkickle|lebanon|nook)\b/gmi,
  /\b(?:devil'?s?)frying\span\b/gmi,
  /\bfrying\span\spond\b/gmi,
  /\bfunny[\s\-]shaped\swood\b/gmi,
  /\b(?:bodmin|wrexham)\sgeneral\b/gmi,
  /\bgeneral\s(?:booth|castle|downs|drive|graham|havelock|lane|roy|stracey\'?s|street|wade\'?s?|wolfe)\b/gmi,
  /\bgeneral\'?s?\s(?:avenue|close|copse|drive|grove|lane|loch|mews|plantation|rock|stream|street|walk|wood)\b/gmi,
  /\bglassworks?\s(?:mews|sixth|street)\b/gmi,
  /\bgleaming\swood\sdrive\b/gmi,
  /\bglimpsing\sgreen\b/gmi,
  /\bgod\s(?:meadow|nore|rock)\b/gmi,
  /\bThe\sGod\sAlmighty\b/gm,
  /\bgovernors?\s(?:drive|close|marsh|mews|road|wood|yard)\b/gmi,
  /\bgraduate\s(?:court|lane)\b/gmi,
  /\bgrange\stherapeutic\b/gmi,
  /\bGreybearded\sMan\b/gm,
  /\bguardians\s(?:close|court|road|walk|way|wood)\b/gmi,
  /\bguesses\swood\b/gmi,
  /\bgunshot\s(?:common|shaw)\b/gmi,
  /\bhabitat\sway\b/gmi,
  /\bhand\s(?:avenue|bank|causeway|close|copse|court|dale|farm|green|lake|lane|marsh|street|trough|wood)\b/gmi,
  /\b(?:hand\sand\spen|crossway\shand|the\sawful\shand)\b/gmi,
  /\bholy\sfamily\b/gmi,
  /\bhealth\s(?:centre\sroad|place|street)\b/gmi,
  /\bvale\sof\shealth\b/,
  /\b(?:hole|slett|stairs)\sof\sthe\sheel\b/gmi,
  /\bheel\s(?:brae|field|lane|of\sthe\skame|road|shaw)\b/gmi,
  /\bheight\sof\sthe\sworld\b/gmi,
  /\b(?:cove\ship|hip\s(?:crescent|lane|walk))\b/gmi,
  /\bhockey\s(?:close|fields|hill)\b/gmi,
  /\bheat\shaggies\b/gmi,
  /\b(?:Back|Bay|Bell|Black|Blind|Blue|Boat|Coach\s[Aa]nd|Dead|Dog|Dray|East|Filly|Flying|Forty|Front|High|Hobby|Knook|Little|Long|Low|Lower|New|Nine|North|Old|Pack|Post|Prancing|Rampant|Red|Shire|Small|South|(?:Moss|Stack|Well)\s[Oo]f\s[Tt]he|Stallion|Stoned?|The|Three|Tobban|Trench|Trotting|Upper|Wagg?on\sand|West|Wet|Wh[iy]te|Yellow|Yonder)\sHorses?\b/gm,
  /\bhorses?\s(?:ba[cn]k|barrow|bog|bridge|buile|carr|castle|chestnut|cleeve|cleu[cg]h|cliff|close|clough|clump|common|coombe|coppice|coppy|copse|course|cove|covert|craig|crofts?|crook|cross|dale|down|drove|dub|dyke|edge|end|eye|fair|fayre|fen|field|flags|ga[gt]e|geos?|green|grove|guards|haven|hay|head|helliacks|hey|hill|hillock|holme|ho[lp]es?|house|hovel|island|isles?|keld|knowe|lane|lawn?|lea|leaze|ledge|leys|lie|loch|lynch|mark|market|marsh|meadows|mill|moors?|neck|noup|of|of\sthe|paddocks?|parks?|pastures?|pill|plain|plot|ponds?|pool|pot|pow|race|reach|rill|road|rocks?|sands?|shaw|shoes?|sound|stone|street|ware|water|watering|well|whim|wood|wynd|yard)\b/gmi,
  /\bhorse\s(?:&|and)\s(?:farrier|gate|groom|jockey)\b/gmi,
  /\bheol\shurricane\b/gmi,
  /\bheritage\s(?:avenue|close|court|drive|farm|field|foundation|gardens|gate|green|heights|hill|house|lane|lawn|mews|park|railway|rise|road|school|square|stables|view|voluntary|walk|way)\b/gmi,
  /\b(?:[Ss]winnerton|The)\sHeritage\b/gm,
  /\bhurricane\s(?:avenue|close|court|drive|gate|grove|place|road|way|wood)\b/gmi,
  /\bThe\sKiosk\b/gm,
  /\bknees?\shill\b/gmi,
  /\bknee\sof\b/gmi,
  /\b(?:The|Muckle|Snickert)\sKnees?\b/gm,
  /\bice\s(?:cleugh|drove|hill|house|pond|street)\b/gmi,
  /\bInaccessible\sPinnacle\b/gm,
  /\bindependent\s(?:hill|street)\b/gmi,
  /\bIndependent\sWay\b/gm,
  /\bindependents\sroad\b/gmi,
  /\bindustrial\s(?:access\sroad|avenue|court|estate|park|place|road|street|terrace|way)\b/gmi,
  /\binstitute\s(?:avenue|beach|hill|lane|place|road|row|street|terrace|wood)\b/gmi,
  /\b(?:ashford|birmingham|ebbsfleet|harwich|lamb\sholm|lycee|pancras|stratford)\sinternational\b/gmi,
  /\binternational\s(?:academy|airport|approach|avenue|centre|college|drive|ferry|gate|girls|port|(?:business\s)?school|university|view|way)\b/gmi,
  /\b(?:burnet|grid|ogof)\siron\b/gmi,
  /\biron\s(?:acton|carr|cliff|close|cove|covert|crag|craig|down|drive|geo|groves|hellia|hill|hogg|howe|keld|lane|latch|leys|mills?|ness|pikes|plantation|plat|road|row|scars?|slunk|tower|way|well)\b/gmi,
  /\bIron\s(?:Band|Bar|Bridge|Car|Cross|Dish|Duke|Foundry|Gate|Man|Mine|Point|Railway|Shovel)\b/gm,
  /\bkick\shill\b/gmi,
  /\bkremlin\sdrive\b/gmi,
  /\bleague\s(?:hill|hole)\b/gmi,
  /\bline\s(?:geo|hill|lane|learning|path|plantation|railway|road|square\swood|street|thorns|view|way|wood)\b/gmi,
  /\b(?:barn|bunk|colliery|honeybourne|lea|mill|poppy|purbeck|watercress)\sline\b/gmi,
  /\bLine\s(?:Close)\b/gm,
  /\b(?:Anne|Friendly|Knotty|Lavender|Long|Main|New|Pipe|The|Whiskey)\sLine\b/gm,
  /\bloading\s(?:bay|hope)\b/gmi,
  /\blottery\s(?:row|street)\b/gmi,
  /\bThe\sLottery\b/gm,
  /\b(?:the)?(?:old|poor)\sman\sof\b/gmi,
  /\bman\s(?:close|gardens|hill|lane|o'\s(?:war|wick)|place|plantation|way|wood|street)\b/gmi,
  /\b(?:lady|lord)\smayor'?s?\s(?:drive|walk|whins)\b/gmi,
  /\bmasonic\s(?:hall|lane|street)\b/gmi,
  /\bmayor'?s?\s(?:avenue|close|croft|drive|lane|pool|road|street|walk|wood)\b/gmi,
  /\bmedia\sway\b/gmi,
  /\bThe\sMedical\sWing\b/gm,
  /\bmedical\savenue\b/gmi,
  /\bThe\sMere\b/gm,
  /\bmetal\s(?:box\sway|bridge|street)\b/gmi,
  /\bmetropolitan\s(?:close|drive|mews|pit|station)\b/gmi,
  /\bmilitary\s(?:close|drive|lane|port|road)\b/gmi,
  /\bMilitary\s(?:Court|School|Training\sArea|Way)\b/gm,
  /\bminister\'?s?\s(?:beach|brae|court|flag|geo|hill|lane|moss|park|pool|pot|rock|street)\b/gmi,
  /\bmission\s(?:close|court|drive|field|gardens|grove|hall|hospital|lane|place|road|street|view|way)\b/gmi,
  /\b(?:The\s)?Old\sMission\b/gm,
  /\b(?:royal\s)?national\s(?:avenue|bank|crescent|college|court|drive|forest|gate|hospital|park|road|school|star|street)\b/gmi,
  /\bNatural\s(?:[Dd]ike|Wood)\b/gm,
  /\bnetwork\s(?:65|way)\b/gmi,
  /\bnormal\s(?:avenue|terrace)\b/gmi,
  /\bnutshell\slane\b/gmi,
  /\bofficer[s']{0,2}?\s(?:copse|field|gardens|quarters|road|row)\b/gmi,
  /\bpains?\s(?:close|copse|court|dale|den|end|flat|hill|lane|moor|pasture|road|rock|way|wood)\b/gmi,
  /\bparliamentary\sroad\b/gmi,
  /\bpeople\spark\sway\b/gmi,
  /\bplatform\s(?:\d+|drive|road|street)\b/gmi,
  /\bplung(?:e|ing)\s(?:drove|pool|road)\b/gmi,
  /\bpolice\sstation\s(?:road|square)\b/gmi,
  /\bPolice\s[Ss]treet\b/gm,
  /\bpoliceman'?s(?:lane|loke|wood)\b/gmi,
  /\bporpoise\shill\b/gmi,
  /\bporridge\s(?:bottom|cairn|green|pot\salley)\b/gmi,
  /\bpress\s(?:drive|hill|lane|meadow|moor|reserviors|ridge|road|street|way)\b/gmi,
  /\bpride\s(?:close|court|hill|parkway|place|point|view|way)\b/gmi,
  /\bprimary\s(?:academy|avenue|campus|close|court|gardens|road|view|way)\b/gmi,
  /\bprime\s(?:close|coppices|four|gill|lane|parkway|place|street|view)\b/gmi,
  /\bpublic\s(?:hall|garden|park|wood)\b/gmi,
  /\bquality\s(?:corner|plantation|row|street)\b/gmi,
  /\bobserver\s(?:close|court|drive|point|way)\b/gmi,
  /\boccupation\s(?:close|gardens|lane|road|street|wood)\b/gmi,
  /\boffice\s(?:approach|avenue|brae|close|coppice|court|entry|field|gardens|green|hill|lane|mews|place|plantation|pool|road|row|slip|square|street|village|way|wood|yard)\b/gmi,
  /\b(?:port|tan)\soffice(?:\sbuilding)?\b/gmi,
  /\bonward\s(?:street|way)\b/gmi,
  /\bpeppermint\s(?:close|drive|grove|mews|place|road|walk|way)\b/gmi,
  /\bPlaying\sPlace\b/gm,
  /\bplaying\sfield\s(?:close|lane|road)\b/gmi,
  /\bpresident\s(?:drive|place|plantation|road|street|way)\b/gmi,
  /\bolympic\s(?:avenue|boulevard|close|court|crescent|drive|legacy\spark|mews|park|primary|square|street|way)\b/gmi,
  /\bThe\sRangers\b/gm,
  /\brangers\s(?:avenue|close|court|square|walk)\b/gmi,
  /\bRC\b/gm,
  /\breform\s(?:beach|place|road|row|street|strip)\b/gmi,
  /\breformatory\scollege\b/gmi,
  /\brelief\s(?:channel|road|wood)\b/gmi,
  /\b(?:avenue|garden|road)\sof\sremembrance\b/gmi,
  /\bremembrance\s(?:avenue|close|gardens|grove|road|way|wood)\b/gmi,
  /\bresearch\s(?:avenue|road|way)\b/gmi,
  /\brifle\s(?:coppice|fields|green|hill|plantation|road|spinney|street|way)\b/gmi,
  /\b(?:Rifle\sRange|The\sRifles)\b/gm,
  /\brifleman\'?s?\s(?:close|copse|lane|row|street|walk)\b/gmi,
  /\brifles\s(?:lane|way)\b/gmi,
  /\brocking\s(?:moor|stone)\b/gmi,
  /\b(?:College|The)\sRoundabouts?\b/gm,
  /\broundabouts?\s(?:coppice|copse|covert|hill|lane|plantation|road|spinney|wood)\b/gmi,
  /\broyal\snavy\savenue\b/gmi,
  /\bscandinavia\sheights\b/gmi,
  /\bscandinavian\sway\b/gmi,
  /\bscience\s(?:academy|area|central|college|park|road|school)\b/gmi,
  /\bSocial\sScience\b/gm,
  /\bsecret\s(?:close|flats|gardens|lake|spring|waters|wood)\b/gmi,
  /\bservice\s(?:area|reservoir|road|route|station|street)\b/gmi,
  /\b(?:black|cat|fingland|jock'?s?|rough)\sshoulder\b/gmi,
  /\bshoulder\s(?:hill|of\s(?:craig|lune|mutton))\b/gmi,
  /\bshill\s(?:bank|close|hill|moor)\b/gmi,
  /\bsilent\s(?:bank|garden|pools?|street|woman\spark)\b/gmi,
  /\bsilicon\scourt\b/gmi,
  /\bskating\spond\b/gmi,
  /\b(?:Boarding|Family|Free|Special)\sSchool\b/gm,
  /\bspiceball\spark\b/gmi,
  /\bspringbok\sclose\b/gmi,
  /\bstate\s(?:farm|rock)\b/gmi,
  /\bThe\sState\sHospital\b/gm,
  /\bHill\sof\sState\b/gm,
  /\bstrangers\s(?:lane|way)\b/gmi,
  /\bstyle\s(?:close|lane|loke|park|road|street|way)\b/gmi,
  /\b(?:Knowle|Step|The|Well)\sStyle\b/gm,
  /\bsurgeon'?s\s(?:court|fields|gully)\b/gmi,
  /\bswinging\sbasin\b/gmi,
  /\btale\s(?:vale|wood)\b/,
  /\b(?:higher|lower)\stale\b/,
  /\btaxi\sway\b/gmi,
  /\bteapot\s(?:bank|corner|hill|lane|street)\b/gmi,
  /\btearing\sledge\b/gmi,
  /\btechnical\s(?:college|street)\b/gmi,
  /\btechnology\s(?:avenue|building|close|college|drive|road)\b/gmi,
  /\bterm\snant\b/gmi,
  /\bthick\s(?:cleuch|copse|covert|hollins|shaw|wood)\b/gmi,
  /\bgorse\sthick\b/gmi,
  /\btime\s(?:park|square)\b/gmi,
  /\b(?:east|geo\sof\sthe|west)\stoe\b/gmi,
  /\b(?:Heel|The)\sToe\b/gm,
  /\bToe\sHead\b/gm,
  /\btradesman\swalk\b/gmi,
  /\btrainers\sbrae\b/gmi,
  /\btransforming\sstation\b/gmi,
  /\btransport\s(?:avenue|lane|plantation|road)\b/gmi,
  /\btreaty\s(?:park|road|street)\b/gmi,
  /\btripping\sgreen\b/gmi,
  /\btroublesome\sreach\b/gmi,
  /\btrust\s(?:close|corner|court|fold|road)\b/gmi,
  /\btrustees?\s(?:close|wood)\b/gmi,
  /\bThe\s(?:Waterwheel)\b/gm,
  /\btyphoon\s(?:close|road|way)\b/gmi,
  /\bunnamed\s(?:rd|road)\b/gmi,
  /\bunion\s(?:arcade|avenue|bank|bay|belt|brae|buildings?|castle|close|court|crescent|cross|dock|drift|drive|drove|gardens|gate|gorse|green|grove|hall|hill|house|lane|mill|mine|park|passage|place|plantation|quay|rise|road|row|spinney|square|street|terrace|view|walk|way|wynd|yard)\b/gmi,
  /\bUnited\s(?:[Aa]rab|[Cc]ollege|[Dd]owns|[Dd]rive|[Kk]ingdom|[Rr]oad|[Ss]tates|[Ww]ay)\b/gm,
  /\bunit\sroad\b/gmi,
  /\buniversity\s(?:academy|avenue|barns|boulevard|campus|centre|close|college|court|crescent|drive|farm|garden|hospital|house|parks?|parkway|place|quays|road|street|terrace|walk|way|wood)\b/gmi,
  /\bupping\scopse\b/gmi,
  /\bThe\sVikings\b/gm,
  /\bvikings\s(?:close|court|way)\b/gmi,
  /\bwar\s(?:beds|cleave|coppice|dale|dike|down|field|fields|hill|lane|plantation|memorial\shospital|moor|ness|office\sroad)\b/gmi,
  /\b(?:The)?\sMan\s(?:of|o\')\sWar\b/gm,
  /\bpant-y-war\b/gmi,
  /\bWarriors\sWay\b/gm,
  /\b(?:Badgers|Carn|Channel|Craig|Gimli|Joannies|Middle|The|Trinity)\sWatch\b/gm,
  /\bwatch\s(?:avenue|cleu[cg]h|close|copse|crags|craig|croft|currick|elm|hill|house|knott|knowe|lane|law|moss|plantation|rigg|rock|street|water|wood)\b/gmi,
  /\bwaterwheel\s(?:close|court|lane|rise|way)\b/gmi,
  /\bwatery\s(?:bottom|brake|close|combe|dyke|gate|geo|grove|haven|hill|knowe|lane|marsh|orchard|pots|road|street|way|wood)\b/gmi,
  /\bwealth\s(?:hole|of\swaters)\b/gmi,
  /\bweeping\s(?:cross|elm)\b/gmi,
  /\bwelfare\s(?:avenue|close|crescent|park|road|view)\b/gmi,
  /\b(?:four|the)\swindings\b/gmi,
  /\bwhisky\spot\b/gmi,
  /\bwhistlestop\s(?:close|wood)\b/gmi,
  /\bwildlife\s(?:walk|way)\b/gmi,
  /\bwindfall\s(?:court|way|wood)\b/gmi,
  /\bwildflowers?\s(?:close|crescent|drive|grove|meadow|way)\b/gmi,
  /\bwindings\sroad\b/gmi,
  /\bwire\s(?:field|hill|lane|mill|plantation|platt|pond)\b/gmi,
  /\bWire\sCut\b/gm,
  /\bwooded\sclose\b/gmi,
  /\bworld\s(?:end|way|wood)\b/gmi,
  /\bworships\shill\b/gmi,
  /\byouth\s(?:close|wood)\b/gmi,
  /\bzone\spoint\b/gmi
];
const LocationRegEx: Set<RegExp> = new Set();
a.forEach(term => LocationRegEx.add(term));
export {
  LocationRegEx
};