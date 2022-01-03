/**********************************************************************
 * Matches words that are capitalised and form part of a sequence end
 * Typically found as surnames
 **********************************************************************/
export const ProperNameSetJoinSuffixOnly: Set<string> = new Set([
// AD
"adjutant",

// AG
"agile",

// AI
"airstream",

// AL
"albino",
"alchemist",
"alibi",
"aliment",
"aloe",
"aloha",
"alterman",

// AM
"ambles",
"amino",

// AN
"anointing",

// AR
"arbiter",
"arid",
"armadillo",
"artful",

// AS
"askings",
"assay",
"assegai",
"asteroid",

// AT
"attende",

// AW
"aways",
"awed",
"awes",
"awol",

// BA
"ball",
"baller",
"baloney",
"banger",
"banish",
"barbaric",
"barbs",
"bares",
"barterer",
"bash",
"basher",
"batters",

// BE
"bead",
"beatles",
"beed",
"beet",
"belay",
"bending",
"bendy",

// BI
"bigger",
"bitten",

// BL
"bleach",
"blinder",
"blush",

// BO
"bolt",
"boner",
"bones",
"boney",
"booster",

// BR
"bragger",
"braver",
"bravos",
"brawls",
"bricking",
"brio",
"brisk",
"broadest",
"brood",
"broody",
"browner",
"brightly",

// BU
"buggy",
"bump",
"bumps",
"bunk",
"burner",

// CA
"cabernet",
"came",
"cartel",

// CE
"cedar",
"celt",
"centra",

// CH
"chancelor",
"chancer",
"charmer",
"charmers",
"charnel",
"cheeks",
"chihuahua",
"chock",
"cholera",
"chopper",
"chopping",
"choppy",

// CL
"clashing",
"cloudier",
"cloyed",
"cluck",
"clunk",
"clutter",

// CO
"cobra",
"coldwater",
"colic",
"collarbone",
"communal",
"cosier",
"councilman",
"councilor",
"cousins",
"cower",
"cowherd",
"cowls",
"coyote",
"cozy",

// CR
"cranks",
"craps",
"crass",
"crayon",
"crazier",
"creamer",
"croak",
"croissant",
"crossing",
"cruder",
"cruise",
"crumb",
"crumble",
"crumbs",
"crumby",
"crusher",
"crust",
"crystalline",

// CU
"curtly",

// CY
"cymbalist",
"cypher",
"cyphers",

// DA
"darks",

// DE
"decamp",
"december",
"decker",
"deckers",
"decree",
"denier",

// DI
"diamond",
"dib",
"diesel",
"disco",
"diwali",

// DO
"dockman",
"downhill",

// DR
"drape",
"draws",
"dreamer",
"dredge",
"dredger",
"drier",
"dries",
"drowns",

// DU
"duffer",

// EA
"earing",
"earner",
"earthly",
"earthy",

// EL
"elves",
"elvish",

// EM
"embody",

// EV
"even",
"evenly",
"evidence",

// FA
"fable",
"facia",
"fairer",
"fairest",
"faker",
"falsetto",
"faraway",
"faultless",

// FE
"fearless",
"fel",
"fell",
"ferment",
"fetcher",
"fetish",
"fetus",

// FI
"fiat",
"fibia",
"fickle",
"fickler",
"figs",
"filcher",
"filler",
"fillers",
"finder",
"finders",
"finely",
"fingers",
"fins",
"fireman",
"fires",
"fishbone",
"fisheye",
"fitter",

// FJ
"fjord",

// FL
"flair",
"flak",
"flakes",
"flatness",
"flatter",
"flatters",
"flattery",
"flick",
"flicker",
"flier",
"florid",
"fluent",
"flurry",
"flute",
"flutter",
"flyer",

// FO
"fobs",
"foci",
"foe",
"foist",
"fonder",
"fonts",
"foody",
"foray",
"forbear",
"foresee",
"forgo",
"formica",
"foward",
"foyer",

// FR
"fracas",
"frack",
"framer",
"francs",
"franker",
"frees",
"friends",
"fries",
"frisbee",
"frist",
"fritter",
"frizzle",
"frock",
"fruitier",
"fruits",

// FU
"fungi",
"funk",
"furnish",
"furrier",

// GA
"gaffer",
"gaily",
"gaiter",
"gaiters",
"gamer",
"ganglion",
"garb",
"garish",
"garnish",
"gash",
"gasman",
"gasmen",
"gassier",
"gateau",
"gatherer",
"gauche",
"gaud",

// GE
"geared",
"geez",
"geisha",
"genus",
"getting",
"geyser",

// GH
"ghana",
"ghoul",

// GI
"giddy",
"gingery",
"given",

// GL
"gland",
"glans",
"glass",
"glassing",
"glazer",
"glazers",
"glides",
"glitter",
"globus",
"glum",

// GO
"goatee",
"gobble",
"gobby",
"gobi",
"goers",
"golem",
"gondola",
"good",
"goop",
"goopy",
"gorges",
"gossip",
"goto",
"gouger",
"gouges",
"gourmet",
"gout",
"gouty",
"gowns",

// GR
"grabber",
"graced",
"grad",
"granges",
"grate",
"grater",
"grates",
"grazer",
"greenish",
"grevious",
"greyer",
"grille",
"grills",
"grinder",
"gross",

// GU
"gum",

// HA
"hammock",

// HE
"healing",

// HO
"holding",
"home",
"hoop",
"hoover",
"hopping",

// HU
"huger",
"hugger",
"hunker",
"huntress",
"hurler",
"hurt",
"hurter",
"hurtle",
"husky",
"hustings",

// HY
"hypes",

// IN
"inwards",

// IR
"ironman",

// JA
"jabs",
"jackets",

// JE
"jeeps",
"jeer",
"jerrycan",

// JU
"jutting",
"justices",
"juvenile",

// KA
"kart",

// KE
"keying",
"keylock",
"kettler",

// KH
"khaki",

// KI
"killings",
"kink",
"kins",
"kippers",
"kith",
"kitsch",

// KN
"knighting",
"knuckles",

// KO
"kobold",
"kongo",
"kook",

// KR
"kraal",

// KU
"kudu",

// LA
"lackey",
"lager",

// LE
"leaders",
"leak",
"leaker",
"lenders",

// LI
"lieu",
"lighten",
"lightens",

// LO
"logins",
"logo",
"looper",
"lorry",

// LU
"ludo",
"lumber",
"luncheon",
"lurker",
"lute",
"lutes",

// MA
"mangler",
"mangos",
"mantel",
"mantissa",
"marksman",

// MI
"milder",

// MO
"morally",
"mowers",

// MU
"mudder",
"musing",
"mutt",

// MY
"myriad",

// NA
"nails",

// OB
"ober",

// ON
"onions",

// OR
"orifice",

// OT
"otterman",

// OU
"outhouse",

// OV
"overcast",
"overdrive",
"overlock",
"overly",

// PA
"pannel",
"park",

// PE
"peeler",
"peeling",
"peels",
"perish",

// PI
"pickings",
"pile",
"piston",

// PL
"plasterer",
"platter",
"pledge",
"pledger",
"plier",
"plush",

// PO
"pole",

// PR
"prise",
"privateer",
"proffer",
"pronounced",
"proton",

// PU
"puncher",
"putty",

// QU
"quails",
"quake",
"quakes",
"quarterman",
"quasar",
"quash",
"quasi",
"quitter",
"quivers",

// RA
"rabbis",
"rachet",
"raffle",
"railing",
"rainwater",
"ramming",
"rancher",
"rang",
"rant",

// RE
"records",
"renal",
"repress",
"resus",
"retina",
"retro",

// RH
"rhythm",

// RI
"richly",
"riverman",
"rivet",
"rize",

// RO
"roadhouse",
"rocker",
"roller",
"romanic",
"romp",
"romper",
"rotas",
"rote",
"rotter",
"roughen",
"rouser",
"router",

// RU
"ruble",
"rubles",
"ruder",
"rued",
"rumage",
"rummage",
"rushing",
"rusted",
"rustler",
"rut",
"ruts",

// SA
"saws",

// SC
"scalera",
"scallion",
"scallions",
"schemer",
"scholastic",
"sconce",
"scram",
"scratcher",
"screws",
"scriber",
"scullion",
"scank",
"schooler",
"schooling",
"screech",

// SE
"seaborne",
"seashore",
"seeker",
"seige",
"semis",
"sensing",
"sequin",
"servile",
"sewing",

// SH
"shackles",
"sharks",
"sharpen",
"shaven",
"sheerer",
"shelling",
"shells",
"shifter",
"shillings",
"shingles",
"shoecraft",
"sholder",
"shoreman",
"shoring",
"shortsleeve",
"shortsleeves",
"showers",
"showman",
"showmen",
"shrift",
"shuffler",

// SI
"sideboard",
"sieving",
"signer",
"silvered",
"silversmith",
"simmering",
"sings",
"sinker",
"sinner",
"sinning",

// SK
"skews",
"skimming",
"skins",
"skivers",

// SL
"slapper",
"slappy",
"slaved",
"slaver",
"slavish",
"sledger",
"slick",
"slicker",
"slinkey",
"sliver",
"slivers",
"slob",
"slogan",
"sloth",

// SM
"small",
"smaller",
"smears",
"smelt",
"smirk",
"smitten",

// SN
"sniff",
"snitch",
"snowman",

// SO
"sorter",
"soul",
"sours",
"souvenir",
"sown",
"soy",
"soya",

// SP
"spacer",
"spaghetti",
"spanks",
"spanky",
"spanner",
"spanning",
"spar",
"sparks",
"sparrowhawk",
"spas",
"spate",
"spearing",
"spearman",
"spearpoint",
"spears",
"spec",
"speck",
"speckle",
"specks",
"specter",
"spector",
"speller",
"spelling",
"spellings",
"spells",
"spender",
"spitter",
"spitters",
"splinter",
"splitter",
"spoiler",
"spokes",
"spores",
"spory",
"sprain",
"sprang",
"sprout",
"sprung",
"spurring",

// SQ
"squeezy",
"squelch",
"squid",

// ST
"stabs",
"stackable",
"stacker",
"stairs",
"stallions",
"stamps",
"starfish",
"starker",
"starlet",
"stasis",
"stater",
"states",
"steely",
"stencil",
"steppe",
"steri",
"sterner",
"stickler",
"stickman",
"stifle",
"stiller",
"stills",
"stitcher",
"stockfish",
"stocky",
"stomps",
"story",
"stouter",
"stoves",
"strain",
"strainer",
"streaker",
"streamer",
"strider",
"strongman",
"strum",
"strummer",
"studier",
"stumbles",
"stutter",
"stutters",

// SU
"superman",
"surer",
"surfer",
"surviver",

// SW
"swaddle",
"swagger",
"swallows",
"swam",
"swarm",
"swastika",
"swede",
"sweeper",
"sweeten",
"sweetner",
"swilling",
"swindle",
"swindles",

// TA
"taker",
"taming",
"tampon",
"tanking",
"tapper",
"tarbush",
"tarot",
"tarp",
"tattoo",
"taxis",

// TE
"teehee",
"teem",
"teeter",
"teeters",
"teflon",
"teller",
"telling",
"tempo",
"temporal",
"terrine",
"teste",
"tester",
"testy",
"tether",

// TH
"thee",
"thermidor",
"thermos",
"thongs",
"thou",
"threader",
"thug",
"thundercloud",

// TI
"tikka",
"tilde",
"tinder",
"tingler",
"tingling",
"tint",
"tinter",
"tints",
"titter",

// TO
"toffee",
"tones",
"tonic",
"tonne",
"tonner",
"tonsil",
"torrents",
"tort",
"toxin",

// TR
"tracer",
"trad",
"trembly",
"tremor",
"tricker",
"trickle",
"triplet",
"trounce",
"troupe",
"trouser",
"truffles",

// TU
"tunes",
"tuning",
"turban",

// TW
"twang",
"twelves",
"twitcher",

// TY
"tyranny",
"tyre",
"tyres",

// UB
"uber",

// UN
"unknow",
"untied",

// UP
"uphold",

// UR
"urea",

// VA
"varnish",
"vase",
"vax",

// VE
"vendetta",
"vermilion",
"vermillion",

// VI
"vials",
"vibe",
"victus",
"vigour",
"visage",
"viscera",

// VO
"volcano",

// WA
"waffle",
"waft",
"wagoner",
"wailer",
"waiter",
"waiters",
"walkingstick",
"waltz",
"waltzing",
"wank",
"wanker",
"wanna",
"warring",
"wart",
"washing",
"washup",
"wattage",

// WE
"wealths",
"weakly",
"wean",
"weathered",
"weatherer",
"weathers",
"weeder",
"ween",
"weening",
"welder",
"welding",
"welds",
"welp",
"welt",
"went",

// WH
"whaler",
"whaling",
"wheeling",
"whiter",
"whitish",
"whittler",

// WI
"wineglass",
"wingers",
"wiper",
"wireman",
"wiser",
"wisher",

// WO
"wolfing",
"wolverine",
"wonderland",
"wonders",

// WR
"wrencher",
"wrestler",
"wring",
"wringer",

// YA
"yack",
"yank",
"yankee",

// YE
"yeast",

// YO
"yob",
"yokes",

// ZI
"zilch",
"zinger",
"zips"
]);