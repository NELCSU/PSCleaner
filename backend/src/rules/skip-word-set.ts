/***********************************************************
 * These words should be ignored if matched by other means
 ***********************************************************/
const a: string[] = [
"abandon",
"abscissa",
"absurd",
"abuzz",
"abyss",
"achiote",
"acrobat",
"addenda",
"adhoc",
"adieux",
"adjourn",
"adlib",
"admix",
"adobe",
"adopt",
"aestheticsy",
"affidavit",
"afford",
"afghanistan",
"agenda",
"agio",
"agog",
"agouti",
"ahem",
"ahoy",
"airborne",
"akimbo",
"alacarte",
"albeit",
"album",
"alfalfa",
"alfatah",
"alien",
"aliquot",
"alkyl",
"allele",
"almanac",
"aloes",
"alopecia",
"alpaca",
"also",
"alumni",
"ammo",
"amniote",
"among",
"anaconda",
"anarcho",
"aneurysm",
"angio",
"angola",
"anorak",
"antebellum",
"antenna",
"anthem",
"anti",
"antifa",
"antigun",
"antiwar",
"aorta",
"apartheid",
"aperitif",
"apparatchik",
"applaud",
"apriori",
"archipelago",
"arcs",
"asap",
"ascii",
"assegais",
"assoc",
"astir",
"astrolabe",
"asylum",
"athlete",
"auks",
"autho",
"auto",
"autobahn",
"autobahns",
"automata",
"avantgarde",
"aviso",
"axolotl",
"azerbaijan",
"aztec",

// B
"baboon",
"babyish",
"babys",
"bacilli",
"baddy",
"badminton",
"badmouth",
"bagatelle",
"bailiwick",
"baklava",
"balalaika",
"ballerina",
"ballyhoo",
"banana",
"bandanna",
"bahamas",
"banshee",
"baobab",
"barista",
"barotrauma",
"barracuda",
"battleaxe",
"bazaar",
"bazooka",
"bazookas",
"beatnik",
"bedstead",
"beef",
"bestowal",
"bevvy",
"biltong",
"biotec",
"bivouac",
"bhutan",
"blabbermouth",
"blitzkrieg",
"blob",
"bloc",
"blowjob",
"bludgeon",
"bollox",
"bolshevik",
"bono",
"boob",
"boomerang",
"bosnia",
"botswana",
"boyish",
"braille",
"brasserie",
"brassiere",
"bricabrac",
"brickbat",
"bronchi",
"bronze",
"brooch",
"broods",
"broth",
"brunei",
"brushoff",
"brushwood",
"brusque",
"bullseye",
"bureau",
"burundi",
"byebye",

"cacao",
"caddie",
"caddy",
"cadenza",
"cadet",
"cadre",
"cairn",
"calc",
"calico",
"caliph",
"callup",
"calorie",
"calumny",
"camaraderie",
"cameo",
"cameraman",
"camhs",
"camra",
"canaan",
"canada",
"canard",
"canoes",
"canon",
"cantata",
"canton",
"canyon",
"capita",
"cappuccino",
"capybara",
"carabinieri",
"caravan",
"cardbord",
"cardigan",
"caribou",
"carpark",
"carte",
"carton",
"casanova",
"cascade",
"cascades",
"cascara",
"cases",
"cashmere",
"casino",
"castoff",
"castrato",
"cataclysm",
"catamaran",
"catastrophe",
"cauda",
"caugh",
"cavalryman",
"caviare",
"cctv",
"cedarwood",
"ceilidh",
"ceilidhs",
"celeb",
"celsius",
"cephalopods",
"cerebellum",
"cesspool",
"chad",
"chai",
"chameleon",
"chamiso",
"chap",
"char",
"charabanc",
"charcuterie",
"chateau",
"cheddar",
"cheetah",
"chef",
"chekov",
"cheque",
"cherub",
"cherubim",
"chihuahua",
"chihuahuas",
"childhoods",
"chili",
"chill",
"chilli",
"chimpanzee",
"china",
"chinoiserie",
"chintz",
"chintzy",
"chivvy",
"chlorophyll",
"chomp",
"chug",
"chum",
"chutzpah",
"cicada",
"circa",
"circs",
"civic",
"clang",
"clayey",
"cleanshaven",
"clef",
"clergyman",
"clientele",
"clingfilm",
"clique",
"cloaca",
"clod",
"clods",
"clumsy",
"coax",
"coca",
"cockatoo",
"coda",
"cods",
"cofferdam",
"cognac",
"cognoscenti",
"collagen",
"combat",
"combo",
"comfort",
"comfy",
"commando",
"commissar",
"communique",
"complete",
"conceit",
"concerti",
"concerto",
"concordat",
"conferva",
"confetti",
"confidante",
"conga",
"congo",
"conjunctiva",
"contexts",
"continua",
"contralto",
"convo",
"copra",
"copycat",
"corf",
"corgi",
"corp",
"corrigenda",
"coterie",
"cottonmouth",
"counterfeit",
"counterpane",
"countryman",
"countrys",
"coy",
"coyote",
"crak",
"crawl",
"crayon",
"crib",
"critique",
"crowd",
"crumby",
"crux",
"cuba",
"cuckoo",
"culdesac",
"cultivar",
"cupola",
"curie",
"curl",
"curricula",
"curt",
"cusp",
"cutoff",
"cyan",
"cyborg",
"cycad",
"czar",
"czechia",
"dachshund",
"dactyl",
"daddy",
"dagga",
"dairyman",
"dais",
"data",
"datum",
"daub",
"davinci",
"dazzler",
"deadeye",
"dearie",
"debonair",
"debts",
"debut",
"debutante",
"decamp",
"deceit",
"deco",
"deejay",
"deem",
"deepsea",
"defacto",
"defang",
"defraud",
"delete",
"deli",
"delicatessen",
"delta",
"deluge",
"deluxe",
"demagog",
"demigod",
"demigods",
"demijohns",
"demur",
"deplete",
"desiderata",
"desideratum",
"detente",
"diadem",
"diamante",
"diamond",
"diaphragm",
"dictum",
"dildo",
"dilettante",
"dimout",
"dingdong",
"dingo",
"diphthong",
"dirge",
"disavowal",
"disco",
"discomfort",
"discotheque",
"dismay",
"dissatisfy",
"ditto",
"diva",
"diwali",
"dizzy",
"djibouti",
"dodecahedra",
"dodo",
"does",
"dofa",
"doge",
"dogma",
"domino",
"donga",
"donjuan",
"doorno",
"doubts",
"dovecote",
"downhill",
"downtown",
"downtrod",
"doyen",
"doyenne",
"drachm",
"drachma",
"dracula",
"dragoon",
"drawbridge",
"dressy",
"driftwood",
"drizzly",
"drones",
"drowzy",
"drub",
"dryish",
"dudgeon",
"duffel",
"dully",
"dungeon",
"dunghill",
"duomo",
"dusky",
"dyke",
"ebay",
"ebbs",
"echidna",
"echo",
"echoes",
"eddy",
"eerie",
"effet",
"effigy",
"effort",
"eggs",
"eisteddfod",
"elal",
"elastin",
"elgreco",
"elixir",
"elnino",
"embay",
"embezzler",
"emblazon",
"emcs",
"emir",
"emoji",
"emojis",
"encamp",
"engarde",
"enigma",
"enjoy",
"ennui",
"enrich",
"entente",
"entree",
"envy",
"epitap",
"epoch",
"errata",
"errs",
"ersatz",
"esau",
"espn",
"esteem",
"eswatini",
"ethno",
"etui",
"eukaryote",
"eureka",
"eurekas",
"exanthem",
"exec",
"exert",
"exhibit",
"expo",
"externa",
"eyebrow",
"faceoff",
"facto",
"factotum",
"fahrenheit",
"falsehoods",
"falsetto",
"fandango",
"faqs",
"farad",
"farmstead",
"faroff",
"farrago",
"fatwa",
"faun",
"faux",
"femur",
"ferryman",
"fetal",
"fevr",
"fiasco",
"fibrosa",
"fibula",
"fiesta",
"figtree",
"fiji",
"firewood",
"fisheye",
"fizzy",
"fjord",
"flak",
"flamingo",
"flimsy",
"floe",
"floods",
"floozie",
"foci",
"foehns",
"foes",
"folio",
"fonder",
"fontanelle",
"foodie",
"foods",
"footbridge",
"foothill",
"forbad",
"forecastle",
"forecourt",
"forfeit",
"forte",
"fossa",
"foulup",
"franc",
"frangipani",
"fraud",
"frenzy",
"freon",
"fresco",
"friar",
"frigid",
"frisby",
"frisky",
"frisson",
"frivol",
"frizzy",
"froth",
"frustum",
"ftse",
"func",
"fungi",
"fuzz",
"fuzzy",
"gabon",
"gaffe",
"gaga",
"gaijin",
"gala",
"galena",
"galileo",
"galleon",
"gambol",
"gamut",
"gaol",
"garde",
"gargantuan",
"gargoyle",
"gastropods",
"gateau",
"gateaux",
"guacamayo",
"guatemala",
"guyana",
"gaucherie",
"gaud",
"gauze",
"gawky",
"gazebo",
"gazelle",
"gcse",
"gecko",
"geez",
"geisha",
"gemini",
"gemsbok",
"genie",
"genius",
"gerbil",
"germane",
"gerund",
"gestapo",
"gesundheit",
"ghana",
"ghetto",
"giddy",
"gigolo",
"gimmickry",
"gingham",
"ginseng",
"giraffe",
"giro",
"gladness",
"glib",
"glim",
"glitzy",
"glob",
"globohomo",
"globule",
"gluon",
"glut",
"glyph",
"goalmouth",
"gobi",
"gods",
"goes",
"goethe",
"gofundme",
"gonad",
"gonna",
"goodbye",
"goods",
"gossip",
"gotcha",
"gotta",
"gouda",
"govt",
"goyim",
"grad",
"graffiti",
"grammar",
"grandad",
"grandma",
"grandpa",
"grannie",
"greenie",
"greenish",
"grenada",
"greyish",
"grille",
"grimm",
"grindstone",
"grizzly",
"grommet",
"groovier",
"grotesque",
"grotto",
"grub",
"gruyere",
"guacamole",
"guanaco",
"guano",
"guffaw",
"gulfwar",
"gulp",
"gumtree",
"gunwale",
"guru",
"guzzler",
"gymkhana",
"hacienda",
"hafnia",
"haiku",
"hairdo",
"haiti",
"hajj",
"hakea",
"halibut",
"hallelujah",
"hallo",
"handoff",
"handyman",
"hangup",
"hansard",
"hardwood",
"hardwoods",
"harridan",
"havoc",
"hawthorn",
"hazel",
"headbang",
"headbutt",
"headby",
"heartburn",
"heartwood",
"heaveho",
"heavier",
"helio",
"helix",
"hematochezia",
"henna",
"herod",
"heroes",
"hertz",
"herzegovina",
"hexane",
"heydey",
"hieroglyph",
"highbrow",
"highwayman",
"hii",
"hijab",
"hippo",
"hitherto",
"hoax",
"hobo",
"hoes",
"hoggs",
"homestead",
"hometown",
"hominem",
"homo",
"honshu",
"hoodie",
"hoodlum",
"hoods",
"hookah",
"hooligan",
"horde",
"horizon",
"horseshoes",
"hosanna",
"hosta",
"hotrod",
"howlings",
"hsbc",
"http",
"https",
"hullabaloo",
"hullo",
"humane",
"hundredth",
"hurl",
"hurrah",
"husky",
"hxpc",
"hyaena",
"hydra",
"hydro",
"hydrocele",
"hyena",
"hygiene",
"hyperspadius",
"hypospadius",
"ibex",
"iceberg",
"icosahedra",
"idea",
"idiocy",
"idyll",
"igloo",
"iglu",
"iguana",
"ikea",
"imago",
"imam",
"imbroglio",
"immunisation",
"immuno",
"imms",
"impala",
"impedimenta",
"impugn",
"inane",
"include",
"incomplete",
"indie",
"infanta",
"infantryman",
"info",
"infra",
"inhumane",
"instead",
"intaglio",
"interim",
"intermix",
"interviewee",
"intifada",
"inveigh",
"iota",
"ipda",
"iraq",
"israel",
"itll",
"jackal",
"jackdaw",
"jacuzzi",
"jaguar",
"jahweh",
"jazz",
"jazzy",
"jehad",
"jerboas",
"jihad",
"jihadi",
"jingo",
"jobsworth",
"journeyman",
"julep",
"jumbo",
"junta",
"juryman",
"kappa",
"karma",
"kazakhstan",
"kebab",
"kenya",
"keppra",
"khaki",
"khalif",
"kibbutz",
"kiddie",
"kidney",
"killjoy",
"kilns",
"kilohertz",
"kilowatt",
"kimono",
"kiosk",
"kiribati",
"kirigami",
"kitsch",
"kiwi",
"kiwis",
"knack",
"knackers",
"kneedeep",
"knell",
"knighthoods",
"koala",
"kongo",
"kookaburra",
"kosovo",
"kpmg",
"kraal",
"krypton",
"kudu",
"kungfu",
"kyrgyzstan",
"lachrymal",
"lacuna",
"laddie",
"lagoon",
"laird",
"lambda",
"lapd",
"lapp",
"largemouth",
"larva",
"larynx",
"latte",
"latvia",
"laud",
"laugh",
"laxness",
"laybys",
"layman",
"layoff",
"lazuli",
"lebanon",
"lebensraum",
"legato",
"leitmotif",
"leitmotiv",
"lemsip",
"lemur",
"lento",
"leotard",
"leprechaun",
"lepton",
"lesotho",
"lessen",
"lesson",
"leviathan",
"lewd",
"lgbt",
"libretti",
"libretto",
"libya",
"lichee",
"lichi",
"liechtenstein",
"lien",
"liftoff",
"limbo",
"lingerie",
"lingua",
"lino",
"lira",
"litchi",
"literati",
"lithe",
"littler",
"livelihoods",
"livlihoods",
"loath",
"loch",
"loci",
"loco",
"logjam",
"logo",
"logoff",
"lorelei",
"lotto",
"loudmouth",
"lowbrow",
"lowish",
"lowness",
"lullaby",
"luncheon",
"luxembourg",
"lychee",
"lynx",
"macaque",
"macaroni",
"machismo",
"macho",
"madam",
"mademoiselle",
"maelstrom",
"mafiosi",
"magenta",
"magi",
"magma",
"mahatma",
"mailto",
"major",
"malawi",
"mali",
"malta",
"malva",
"mamba",
"mandela",
"mango",
"mangrove",
"manna",
"mantissa",
"maori",
"mara",
"marijuana",
"marina",
"marmot",
"marque",
"marquis",
"marsala",
"martingale",
"martini",
"martyr",
"martyry",
"marzipan",
"mascara",
"maseru",
"masque",
"massif",
"matt",
"matte",
"maumau",
"mauritius",
"maxi",
"mayhap",
"mayhem",
"mazurka",
"meanie",
"meataxe",
"medicamentosa",
"medulla",
"megahertz",
"megawatt",
"memento",
"memoir",
"menagerie",
"menhir",
"menorah",
"merino",
"mesquite",
"messiah",
"messy",
"mestesos",
"mestizo",
"methods",
"metoo",
"mexico",
"mezzosoprano",
"microfarad",
"midair",
"middlebrow",
"midi",
"mien",
"milieu",
"milieux",
"militiaman",
"mimosa",
"mini",
"minke",
"misfeasor",
"mishap",
"miso",
"mitt",
"mitzvah",
"mixup",
"moas",
"mocha",
"moduli",
"mogul",
"moldova",
"molehill",
"momentum",
"monaco",
"mono",
"montenegro",
"moods",
"morocco",
"morphia",
"mosque",
"mosquitoes",
"motherstobe",
"motif",
"motion",
"motormouth",
"motto",
"mourn",
"moussaka",
"mps",
"mrna",
"mrsa",
"mucosa",
"muddy",
"muesli",
"mufti",
"mulatto",
"mullah",
"multi",
"multiforme",
"mumbo",
"mumbojumbo",
"mumps",
"mundane",
"murmur",
"musky",
"muslim",
"musos",
"mustang",
"mutt",
"muzak",
"myanmar",
"myna",
"mystique",
"myth",
"",
"nadir",
"naevus",
"naphtha",
"narco",
"natal",
"nauru",
"nausea",
"nautili",
"navvy",
"nazi",
"nazis",
"ndebele",
"nebula",
"negev",
"negro",
"neighborhoods",
"neighbourhoods",
"neon",
"nestegg",
"netflix",
"nett",
"neutrino",
"nexus",
"ngos",
"nicaragua",
"nightingale",
"nimby",
"ninja",
"ninjas",
"nirvana",
"nkda",
"nocte",
"nocturne",
"noddy",
"nods",
"nomad",
"noncombat",
"normla",
"nosw",
"noun",
"novelle",
"nuclei",
"nurseryman",
"nutmeg",
"nyala",
"oblique",
"obloquy",
"oboe",
"oboes",
"obsolete",
"ochre",
"octagon",
"oddjob",
"odds",
"odyssey",
"offal",
"offgait",
"oilrig",
"okapi",
"okay",
"oldie",
"olecranon",
"omhx",
"onto",
"onyx",
"opaque",
"operetta",
"orang",
"orangutan",
"oratorio",
"orca",
"origami",
"orphan",
"ostrich",
"outburn",
"outdo",
"outdoes",
"outfox",
"outgo",
"outswam",
"overawe",
"overbig",
"overburn",
"overcrowd",
"overdo",
"overdoes",
"overhang",
"overhung",
"overmix",
"oversea",
"overzealous",
"ovum",
"padre",
"pagoda",
"pakistan",
"palau",
"panama",
"panga",
"pantheon",
"panto",
"papa",
"paparazzi",
"papaya",
"paprika",
"papyri",
"papyrus",
"para",
"paraguay",
"paramountcy",
"pariah",
"parka",
"parkas",
"paroxysm",
"partum",
"passersby",
"pasta",
"pastille",
"patela",
"patisserie",
"pavlov",
"paye",
"payoff",
"pekan",
"pele",
"peninsular",
"pentathlete",
"people",
"peperoni",
"perestroika",
"pergola",
"peri",
"periods",
"perionychia",
"periph",
"peru",
"perv",
"pesky",
"pesos",
"petechia",
"phalynx",
"pharaoh",
"phlox",
"phonon",
"phyla",
"phylum",
"physique",
"piano",
"pianoforte",
"picaresque",
"piccolo",
"pickaxe",
"picturesque",
"pieta",
"pigeon",
"pilsner",
"pingpong",
"pinna",
"pique",
"piso",
"pistachio",
"pizazz",
"pizza",
"pizzicato",
"placebo",
"placenta",
"plaque",
"plateau",
"plateaux",
"playoff",
"plaza",
"pleb",
"pleura",
"plexus",
"plod",
"plods",
"plumbago",
"plummet",
"plumtree",
"pluto",
"plywood",
"pods",
"poem",
"poet",
"pogo",
"pogrom",
"politico",
"polka",
"polkas",
"polo",
"polyhedra",
"polyp",
"polyps",
"pomelo",
"pommel",
"pomp",
"poncho",
"ponder",
"pooch",
"pooh",
"popeye",
"porno",
"porphyry",
"portaloo",
"portfolio",
"portico",
"portmanteau",
"postburn",
"postcava",
"postpartum",
"potato",
"potatoes",
"potpourri",
"pouffe",
"prairie",
"prang",
"precava",
"prefab",
"prelim",
"premiere",
"premix",
"pretexts",
"prev",
"prig",
"prod",
"prodeo",
"prodigy",
"prods",
"profane",
"prolix",
"pronoun",
"pronto",
"propane",
"proviso",
"proximo",
"psycho",
"ptarmigan",
"pterodactyl",
"puffa",
"pulp",
"puma",
"pummel",
"pupa",
"purdah",
"purl",
"purpura",
"purrs",
"pussycat",
"putsch",
"putt",
"putti",
"puzzle",
"pyracantha",
"qatar",
"quad",
"quadrille",
"quagga",
"quantum",
"quartz",
"quash",
"quasi",
"quay",
"queit",
"queue",
"queuer",
"quill",
"quite",
"quondam",
"quota",
"rabat",
"rabbi",
"radar",
"radii",
"radius",
"raduis",
"railwayman",
"rajah",
"ramadan",
"ramrod",
"rani",
"ratatouille",
"rattan",
"rayon",
"razzmatazz",
"realpolitik",
"rebury",
"rebut",
"recto",
"redeem",
"redeye",
"redoubts",
"redsea",
"redux",
"redwood",
"reef",
"referenda",
"regale",
"regatta",
"registrar",
"rememeber",
"remix",
"renewal",
"replete",
"repo",
"requite",
"resculpt",
"resea",
"resow",
"",
"reticula",
"retsina",
"reveille",
"revs",
"rhino",
"rhizome",
"rhymed",
"rialto",
"rich",
"ricksha",
"rickshaw",
"rigid",
"ripoff",
"risky",
"risotto",
"risque",
"rococo",
"rodeo",
"rods",
"roes",
"rollmop",
"rommel",
"romp",
"rosewood",
"rota",
"rotunda",
"roughie",
"rrom",
"ruddy",
"rumba",
"runoff",
"runrig",
"russia",
"sabbat",
"safari",
"safaris",
"saga",
"sago",
"sahib",
"saipan",
"saki",
"salaam",
"salb",
"saliva",
"salsa",
"salvo",
"samba",
"samoa",
"samurai",
"sanctum",
"sandalwood",
"sandcastle",
"sandwich",
"sanserif",
"sarcophagi",
"sari",
"saris",
"satinwood",
"satisfy",
"satnav",
"satsuma",
"satyr",
"savanna",
"savvy",
"sawmill",
"scalar",
"scank",
"scauld",
"sch",
"schemata",
"scherzi",
"schmalz",
"schnapps",
"schoo",
"schwa",
"scientific",
"scientist",
"scifi",
"scoff",
"scorpio",
"scram",
"scrooge",
"scrotum",
"scrub",
"scuba",
"scud",
"sculpt",
"scythe",
"seaborne",
"seacow",
"seagod",
"seaman",
"sedan",
"seem",
"seethe",
"selfie",
"selloff",
"semi",
"sensei",
"septum",
"sepulchre",
"seraglio",
"serai",
"serenata",
"serif",
"serum",
"sexton",
"shag",
"shah",
"shall",
"sham",
"shaman",
"shaven",
"sheath",
"sheen",
"sheik",
"sheikh",
"sheikhs",
"sherbert",
"shill",
"shindig",
"shipborne",
"shisha",
"shiver",
"shivers",
"shoddy",
"shoes",
"shoo",
"showoff",
"shrewd",
"shriek",
"shrub",
"shun",
"shuteye",
"shyer",
"sibyl",
"sickbay",
"sienna",
"sierra",
"siesta",
"sigma",
"silent",
"silos",
"simeon",
"sirius",
"sjambok",
"skim",
"skindeep",
"skis",
"slang",
"slav",
"slavs",
"sleaze",
"sleigh",
"slim",
"slob",
"slogan",
"slur",
"slut",
"smallmouth",
"smalltown",
"smegma",
"smidgeon",
"smog",
"smooch",
"smorgasbord",
"smug",
"smut",
"snag",
"snark",
"snoek",
"snub",
"snug",
"soandso",
"soda",
"soddy",
"sods",
"sofa",
"softwood",
"sojourn",
"solfa",
"solo",
"solvents",
"sombrero",
"sonata",
"soprano",
"sores",
"sorghum",
"soso",
"souk",
"souks",
"souvenir",
"soya",
"spaghetti",
"sparerib",
"spark",
"spec",
"speedcop",
"spinach",
"spinoff",
"spiritedl",
"sponge",
"spongebob",
"spool",
"spoor",
"sprang",
"sprig",
"springbok",
"spur",
"sputnik",
"squad",
"squash",
"squaw",
"srilanka",
"staccato",
"staggers",
"standby",
"standoff",
"statuesque",
"stead",
"steppe",
"stereo",
"steri",
"stew",
"stigma",
"stigmata",
"stiletto",
"stimuli",
"stir",
"stoa",
"stoep",
"stoma",
"stomata",
"stomp",
"stooge",
"stoolpigeon",
"straigh",
"strata",
"stratum",
"strengthner",
"strop",
"strut",
"stucco",
"stuccoed",
"stun",
"stupor",
"sturgeon",
"styx",
"substrata",
"substratum",
"subtexts",
"sudan",
"sufe",
"suite",
"sulphur",
"sultana",
"sunburn",
"sundaes",
"superheroes",
"supernova",
"supra",
"surfeit",
"surg",
"surgeon",
"surgerys",
"sushi",
"swab",
"swad",
"swag",
"swam",
"swan",
"swap",
"swastika",
"swastikas",
"swat",
"swazi",
"swazis",
"sweden",
"switzerland",
"swop",
"syllabi",
"sylph",
"symbiote",
"symbol",
"sync",
"synods",
"syria",
"tabasco",
"tableau",
"tableaux",
"tableno",
"tabogan",
"tachi",
"tachyon",
"tackledby",
"taiwan",
"tahr",
"tajikistan",
"take",
"takeoff",
"talc",
"tallyho",
"talmud",
"tangelo",
"tango",
"tanle",
"tapioca",
"tapir",
"taramasalata",
"tarmac",
"tarmacadam",
"tarzan",
"tattoo",
"taverna",
"taxi",
"taxman",
"technique",
"techno",
"teddy",
"teehee",
"teem",
"teethe",
"teh",
"tele",
"tempo",
"tendon",
"termini",
"terracotta",
"terrazzo",
"tesco",
"tetrahedra",
"texts",
"than",
"thaw",
"thee",
"them",
"there",
"thereon",
"thesauri",
"theta",
"they",
"thong",
"thou",
"thousandth",
"threadmill",
"throes",
"thru",
"thud",
"thug",
"thundercloud",
"tiara",
"tibula",
"tightwad",
"tikka",
"tiktok",
"tilde",
"tipoff",
"tiptoes",
"tiro",
"tithe",
"tloc",
"tobacco",
"tobago",
"toccata",
"todat",
"toddy",
"todo",
"todya",
"toes",
"tofu",
"toga",
"togo",
"toitoi",
"tokamak",
"tomato",
"tomatoes",
"tonne",
"toolkit",
"topaz",
"torah",
"tori",
"torpor",
"torque",
"touchandgo",
"toughie",
"trad",
"tradeoff",
"trak",
"trammel",
"tranquil",
"trapezius",
"trauma",
"traumata",
"treadmill",
"trek",
"tremolo",
"trig",
"trimaran",
"trinidad",
"tripods",
"triptych",
"trod",
"troika",
"troikas",
"trouser",
"truncheon",
"tsetse",
"tuatara",
"tuba",
"tundra",
"tundras",
"turbo",
"turgid",
"turkmenistan",
"tutu",
"tuvalu",
"twang",
"twat",
"twee",
"twerk",
"tyke",
"typo",
"uhuh",
"ukulele",
"ulna",
"ultimatum",
"unabl",
"unalbe",
"undercroft",
"undergoes",
"undersea",
"underwood",
"undoes",
"unfurl",
"unique",
"unjam",
"unshaven",
"unsung",
"unto",
"untrod",
"unzip",
"uphill",
"uptown",
"urbane",
"urea",
"uruguay",
"uvula",
"uzbekistan",
"vacua",
"vaduz",
"valhalla",
"valuta",
"vanuatu",
"vangogh",
"vapor",
"vat",
"veldt",
"vellum",
"velum",
"venezuela",
"ventriloquy",
"verandah",
"vermicelli",
"vermouth",
"versa",
"vessels",
"vestibule",
"vetoes",
"vibrato",
"video",
"vietnam",
"vigilante",
"vindaloo",
"vino",
"virago",
"virtuosi",
"virtuoso",
"vista",
"viva",
"vodka",
"volcano",
"voodoo",
"wacko",
"wadi",
"waif",
"wallaby",
"waltz",
"waltzed",
"waltzing",
"wanna",
"wannabee",
"wanton",
"wapiti",
"warmth",
"warmup",
"warzones",
"watermill",
"waterpark",
"watt",
"wavier",
"weepings",
"weetabix",
"weighbridge",
"weirdo",
"welt",
"whacko",
"wham",
"whatsapp",
"whee",
"whelk",
"whereon",
"whey",
"which",
"whimsy",
"whir",
"whirlpool",
"whisker",
"whisky",
"whitsun",
"whoa",
"whys",
"widgeon",
"width",
"wifi",
"wigeon",
"windburn",
"windshield",
"windshields",
"windward",
"withdrawal",
"withdrawl",
"wittering",
"wodan",
"woes",
"wombat",
"wont",
"woods",
"wrath",
"writeoff",
"writhe",
"wroth",
"xanthein",
"yacht",
"yankee",
"yoga",
"yougov",
"yoyo",
"yuan",
"zephyr",
"zeroes",
"zigzag",
"zimbabwe"
];
const SkipWordSet: Set<string> = new Set();
a.forEach(i => SkipWordSet.add(i));
export { SkipWordSet };