/**********************************************************************
 * Matches words that are capitalised and form part of a sequence
 * 
 * Action needed
 * 
 * (medium priority)
 * Remove the standalone cases as these get missed and/or generate
 * false positives
 **********************************************************************/
export const ProperNameSetJoinOnly: Set<string> = new Set([
"aa",               // name
"ab",               // name
"abd",              // name
"accord",           // name & placenames (9)
"achilles",         // name & placenames (7)
"achy",             // name
"acorn",            // name & placenames (50)
"acre",             // name & placenames (722)
"acres",            // name & placenames (254)
"adds",             // name
"adh",              // name
"adl",              // name
"admiral",          // name & placenames (36)
"adn",              // name
"aerial",           // name & placenames (2)
"africa",           // name & placenames (7)
"african",          // ethnicity
"aided",            // name & placenames (111)
"aider",            // name
"airfield",         // placename (216)
"airport",          // placename (113)
"airs",             // name
"al",               // name
"albania",          // name
"alias",            // name
"algeria",          // name
"allied",           // names & placenames (2)
"allotment",        // placenames (122)
"allotments",       // placenames (20)
"ally",             // name
"alms",             // name & placenames (14)
"aloof",            // name
"alpha",            // name & placenames (19)
"alphas",           // name
"alt",              // name & placenames (68)
"alters",           // name
"ambush",           // name & placename
"amen",             // name & placenames (3)
"amnesty",          // name
"amps",             // name
"anchors",          // name & placename
"andorra",          // name & placename
"angling",          // name & placenames (3)
"auguish",          // name & placename
"annex",            // name & placenames (4)
"anon",             // name
"ant",              // name & placenames (2)
"antelope",         // name & placenames (7)
"antigua",          // name & placenames (5)
"antique",          // name
"antler",           // name & placenames (4)
"anus",             // name
"apex",             // name & placenames (8)
"apathy",           // name
"apple",            // placenames (82)
"approach",         // placenames (399)
"apps",             // name & placenames (3)
"arbor",            // name & placenames (20)
"arc",              // placenames (8)
"arcade",           // name & placenames (14)
"archdeacon",       // name & placenames (13)
"archery",          // name & placenames (19)
"arches",           // placenames (24)
"arenas",           // name
"argentina",        // name
"argos",            // name & placenames (4)
"ark",              // name & placenames (54)
"armenia",          // name & placename
"armor",            // name & placename
"armour",           // name & placenames (23)
"arms",             // name and placenames (49)
"arsenal",          // name & placenames (9)
"art",              // name & placenames (42)
"arts",             // name & placenames (90)
"ascension",        // name & placenames (8)
"asia",             // name & placename
"atlantic",         // name & placenames (29)
"atomic",           // name
"auburn",           // name & placenames (14)
"audit",            // name & placename
"august",           // name & placenames (9)
"aura",             // name
"austria",          // name
"avatar",           // name
"awkward",          // name & placename
"axe",              // name & placenames (21)
"axon",             // name & placenames (4)
"axing",            // name
"axion",            // name
"axle",             // name & placenames (2)
"aye",              // name & placenames (2)
"azalea",           // name & placenames (14)
"azure",            // name & placenames (4)

// B
"baby",             // name & placenames (8)
"bachelor",         // name & placenames (7)
"back",             // placenames (1k+)
"backs",            // name & placename (4)
"bacon",            // name & placenames (22)
"bad",              // placenames (275)
"badge",            // name & placename
"badminton",        // name & placenames (19)
"bail",             // name & placenames (9)
"bailiff",          // name & placenames (5)
"bails",            // name & placename
"baker",            // name & placenames (33)
"bakers",           // placenames (60)
"bakery",           // placenames (21)
"bakes",            // name & placename
"bald",             // name & placenames (6)
"balder",           // name & placenames (5)
"balding",          // name & placenames (2)
"baldy",            // name & placename
"bales",            // name & placenames (8)
"balk",             // name & placenames (92)
"balling",          // name
"balls",            // name & placenames (21)
"balm",             // name & placenames (6)
"bamboo",           // name & placenames (2)
"bame",             // name & placename
"ban",              // placenames (31)
"banal",            // name
"bands",            // name & placenames (2)
"bangladesh",       // name
"bangle",           // name
"bangs",            // name & placename
"banister",         // name & placenames (7)
"banks",            // name & placenames (240)
"banner",           // name & placenames (20)
"banning",          // name & placenames (3)
"bannister",        // name & placenames (22)
"bans",             // name
"bar",              // placenames (189)
"bard",             // name & placenames (13)
"barefoot",         // name & placenames (3)
"barge",            // name & placenames (20)
"barges",           // name & placenames (4)
"baring",           // name & placenames (11)
"bark",             // name & placenames (27)
"barks",            // name & placenames (2)
"barons",           // name & placenames (24)
"barracks",         // name & placenames (32)
"barrage",          // name & placenames (2)
"barren",           // name & placenames (5)
"barring",          // name & placenames (3)
"barrows",          // name & placenames (25)
"bars",             // name & placenames (16)
"barter",           // name & placenames (6)
"barters",          // name & placenames (2)
"basal",            // name
"basin",            // name & placenames (74)
"basing",           // name & placenames (18)
"bass",             // name & placenames (14)
"batch",            // names & placenames (60)
"bath",             // placenames (116)
"bathe",            // name & placenames (3)
"bather",           // name & placename
"batman",           // name & placename
"baton",            // name & placenames (4)
"bats",             // name & placenames (5)
"batter",           // name & placenames (6)
"batting",          // name & placename
"battles",          // name & placenames (6)
"batton",           // name & placenames (2)
"baulk",            // name & placenames (26)
"bay",              // name
"bays",             // name & placenames (11)
"beagles",          // name & placenames (4)
"beak",             // name & placenames (4)
"beams",            // name & placenames (4)
"beaner",           // name
"beanie",           // name & placenames (2)
"beans",            // name & placenames (6)
"beats",            // name & placenames (2)
"beaux",            // name & placename
"beavers",          // name & placenames (9)
"beach",            // placenames (403)
"beady",            // name & placename
"beam",             // placenames (21)
"beard",            // name & placenames (9)
"bearded",          // name & placename
"beards",           // name & placenames (5)
"bearer",           // name
"bearfoot",         // name & placename
"bears",            // name & placenames (11)
"bedding",          // name & placenames (4)
"beds",             // placenames (44)
"bee",              // name & placenames (32)
"bees",             // name & placenames (15)
"beg",              // name & placenames (24)
"began",            // name & placenames (3)
"beggars",          // placenames (21)
"beige",            // name
"belgium",          // name & placenames (2)
"belize",           // name
"bell",             // name & placenames (241)
"bells",            // name & placenames (63)
"belt",             // placenames (837)
"bend",             // placenames (14)
"bending",          // name & placenames (3)
"benin",            // name & placenames (2)
"bendy",            // name & placename (2)
"bent",             // name & placenames (57)
"best",             // name & placenames (13)
"beta",             // name & placenames (10)
"bib",              // name & placenames (5)
"biba",             // name
"bibles",           // name & placename
"bibs",             // name
"bicep",            // name
"bidder",           // name & placenames (3)
"biers",            // name
"bile",             // name & placenames (4)
"bin",              // name & placenames (15)
"binder",           // name & placenames (4)
"binding",          // name & placename
"binning",          // name & placenames (7)
"bishopric",        // placename
"bitten",           // name & placename
"black",            // placenames (744)
"blacks",           // name & placenames (7)
"blades",           // name & standalone & placenames (6)
"bled",             // name
"blessed",          // name & placenames (22)
"blessing",         // name & placenames (4)
"blew",             // name
"blind",            // name & placenames (40)
"blue",             // placenames (222)
"bluebell",         // name & placenames (52)
"blueberry",        // name & placenames (15)
"bluebird",         // name & placenames (13)
"blunt",            // name & placenames (7)
"bo",               // name
"boar",             // name & placenames (27)
"boarder",          // name
"boards",           // name & placenames (6)
"boat",             // placenames (77)
"bode",             // name
"bog",              // name & placenames (150)
"bolder",           // name & placename
"bolivia",          // name & placename
"bond",             // name & placenames (44)
"bonnet",           // name & placenames (10)
"bony",             // name
"bo",               // name
"boo",              // name & placenames (4)
"boomer",           // name & place name
"booms",            // name
"boon",             // name & placenames (14)
"booth",            // name & placenames (102)
"boots",            // name & placenames (4)
"booze",            // name & placenames (5)
"border",           // placenames (36)
"borders",          // name & placenames (10)
"bore",             // name & placenames (15)
"boss",             // placenames (9)
"bot",              // name & placenames (2)
"bound",            // name & placenames (9)
"bouts",            // name & placenames (4)
"bowels",           // usrname & placename
"bowling",          // name & placenames (70)
"boxer",            // name & placenames (5)
"boys",             // name & placenames (71)
"bracket",          // name & placenames (2)
"braid",            // name & placenames (40)
"brail",            // name & placenames (5)
"brainer",          // name
"brake",            // placenames (514)
"brakes",           // name & placenames (11)
"bramble",          // name & placenames (69)
"bran",             // name & placenames (28)
"brandish",         // name & placenames (4)
"brandy",           // name & placenames (34)
"bras",             // name & placenames (8)
"brash",            // name
"brass",            // name & placenames (10)
"brassier",         // name
"brat",             // name & placenames (8)
"brawn",            // name & placenames (8)
"brays",            // name & placenames (14)
"brazas",           // name
"braze",            // name & placename
"brazer",           // name
"brazier",          // name & placenames (7)
"breed",            // name & placenames (2)
"breeds",           // name & placenames (2)
"breedy",           // name
"breeze",           // name
"brews",            // name
"brewster",         // name & placenames (20)
"brey",             // name
"briar",            // name & placenames (89)
"briars",           // name & placenames (19)
"bricks",           // name & placenames (4)
"bridegroom",       // name & placename
"brides",           // name & placenames (26)
"bridges",          // name & placenames (44)
"bridle",           // name & placenames (51)
"brier",            // name & placenames (30)
"briers",           // name & placenames (11)
"brig",             // name & placenames (46)
"brigand",          // name
"brimstone",        // name & placenames (15)
"brine",            // name & placenames (9)
"brines",           // name & placenames (2)
"bringer",          // name & placenames (2)
"brink",            // name & placenames (14)
"bristle",          // name & placenmes (4)
"brittles",         // name
"broach",           // name & placenames (10)
"brooks",           // name & placenames (62)
"broom",            // name & placenames (176)
"brooms",           // name & placenames (19)
"bros",             // name & placename
"brotherhood",      // name & placenames (4)
"brough",           // name & standalone & placenames (75)
"brow",             // name & placenames (619)
"brownfield",       // name & placenames (3)
"brownie",          // name & placenames (7)
"browning",         // name & placenames (21)
"browns",           // name & placenames (34)
"browse",           // name & placenames (3)
"brum",             // name & placename
"brunt",            // name & placenames (27)
"bruse",            // name
"brushwood",        // name & placenames (7)
"brace",            // name & placenames (14)
"brand",            // name & placenames (29)
"brands",           // name & placenames (13)
"brasil",           // name
"brave",            // name
"bravery",          // name & placename
"bravo",            // names & placenames (2)
"brazil",           // name & placenames (4)
"breach",           // name  & placenames (42)
"breaks",           // name & placenames (10)
"breech",           // name & placenames (10)
"brew",             // name & placenames (3)
"brewers",          // name & placenames (22)
"brewery",          // placenames (39)
"brick",            // placenames (106)
"bright",           // name & placenames (29)
"brighten",         // name & placename
"brighter",         // name & placename
"brit",             // name & placenames (4)
"britain",          // name & placenames (11)
"brits",            // name
"brittle",          // name & placenames (6)
"bro",              // name & placenames (148)
"broad",            // placenames (468)
"broccoli",         // name & placename
"bu",               // name
"bubbles",          // name
"buckle",           // name & placenames (14)
"buckler",          // name & placenames (10)
"bucklers",         // placenames (12)
"buckles",          // name & placenames (8)
"bud",              // name & placename
"budding",          // name & placenames (4)
"budge",            // name & placenames (5)
"buggy",            // name & placename
"buff",             // name & placenames (5)
"buffer",           // name & placenames (2)
"building",         // placenames (91)
"buildings",        // placenames (112)
"bullion",          // name & placenames (8)
"bullions",         // name
"bulgaria",         // name
"bun",              // name & placenames (104)
"bundle",           // name & placenames (2)
"bung",             // name & placename
"bungee",           // name
"bunion",           // name
"bunk",             // name & placename
"bunker",           // name & placenames (13)
"bunkum",           // name
"buns",             // name & placename
"bunt",             // name & placename
"bunter",           // name & placename
"bunting",          // name & placenames (20)
"bunts",            // name & placenames (5)
"bunty",            // name
"burka",            // name & placename
"burma",            // name & placenames (8)
"burn",             // standalone & placenames (256)
"burns",            // name & placenames (54)
"burnt",            // placenames (131)
"bushes",           // placenames (154)
"butchers",         // name & placenames (17)
"butt",             // placenames (62)
"butter",           // placenames (33)
"buttercup",        // name & placenames (23)
"button",           // placenames (23)
"buttress",         // name & placenames (9)
"buzz",             // name & placename
"buzzer",           // name
"bye",              // name & placenames (21)
"byway",            // name & placenames (3)

// CA
"cal",              // name & placenames (3)
"caldron",          // name & placenames (13)
"calender",         // name & placenames (4)
"calico",           // name & placenames (12)
"caliph",           // name & placenames (2)
"caller",           // name & placenames (5)
"cam",              // name & placenames (78)
"camo",             // name
"cabbage",          // name & placenames (12)
"cables",           // name & placenames (3)
"cactus",           // name & placenames (2)
"cad",              // name & placenames (4)
"caddie",           // name & placename
"caddies",          // name & placenames (2)
"caddy",            // name & placenames (5)
"cadence",          // name
"cadenza",          // name
"cadet",            // name & placenames (5)
"caesar",           // name & placenames (19)
"cairn",            // name & placenames (170)
"cabal",            // name & placenames (3)
"cadre",            // name
"cage",             // name & placenames (14)
"cairns",           // name & placenames (29)
"calf",             // name & placenames (77)
"came",             // name & placenames (9)
"camp",             // placenames (111)
"camper",           // name & placenames (9)
"camping",          // name & placenames (6)
"camps",            // name & placenames (26)
"canada",           // name & standalone & placenames (38)
"canal",            // name & placenames (89)
"canals",           // name
"canaries",         // placenames (2)
"canary",           // name & placenames (14)
"cant",             // name & placenames (7)
"canteen",          // name & placename
"capes",            // name
"caps",             // name & placenames (4)
"captain",          // placenames (30)
"car",              // placenames (50)
"caravan",          // name & placenames (16)
"cardamon",         // name
"cardigan",         // standalone & placenames (26)
"cardinal",         // name & placenames (43)
"careless",         // name & placenames (3)
"caribbean",        // name
"cargo",            // standalone & placenames (7)
"carnival",         // name & placenames (2)
"carpenter",        // name & placenames (18)
"carpenters",       // placenames (26)
"carte",            // name & placenames (2)
"carton",           // name & placenames (4)
"cartridge",        // name & placenames (7)
"cas",              // name & placenames (21)
"cases",            // name & placename
"cash",             // name & placename (9)
"cashier",          // name
"cat",              // name & placenames (108)
"catcher",          // name & placenames (3)
"cathedral",        // standalone & placenames (59)
"cause",            // standalone & placenames (3)
"celsius",          // name
"cemetery",         // placenames (22)
"centre",           // placenames (677)
"centenary",        // placenames (21)
"central",          // placenames (381)
"chad",             // name & placenames (28)
"chafe",            // name
"chafes",           // name
"chaff",            // name & placenames (4)
"chaffinch",        // name & standalone & placenames (17)
"chagrin",          // name
"chai",             // name
"chalet",           // name & placenames (6)
"chalice",          // name & placenames (7)
"chalk",            // name & standalone & placenames (60)
"chalker",          // name & placename
"challenger",       // name & placenames (7)
"chambers",         // name & placenames (33)
"champ",            // name
"champagne",        // name & placename
"champaign",        // name
"chance",           // name & placenames (17)
"chancellor",       // name & placenames (17)
"chancellors",      // standalone & placenames (10)
"chancery",         // standalone & placenames (16)
"chandlers",        // standalone & placenames (37)
"channel",          // placenames (135)
"channels",         // name & placenames (5)
"chant",            // name & placenames (4)
"chanting",         // name & placenames (2)
"chantries",        // standalone
"chap",             // name & placename
"chapels",          // standalone & placenames (4)
"chaplain",         // name & placenames (2)
"chapter",          // standalone & placenames (16)
"char",             // name & placenames (4)
"charabanc",        // standalone
"chard",            // name & standalone & placenames (22)
"charity",          // name & placenames (34)
"charges",          // name & placename
"chart",            // placenames (28)
"charterhouse",     // standalone & placenames (19)
"charters",         // name & placenames (15)
"chaser",           // name & placenames (4)
"chasm",            // name & placename
"chaste",           // name
"chastity",         // name
"chat",             // name & placenames (5)
"chateau",          // name & placenames (3)
"chatters",         // name
"checker",          // name & placenames (4)
"chemistry",        // standalone & placenames (2)
"chi",              // name & placenames (3)
"chicken",          // placenames (15)
"children",         // name & placenames (16)
"childrens",        // placenames (24)
"childs",           // name & placenames (17)
"chile",            // name
"chime",            // name & placenames (3)
"chimes",           // name & placenames (9)
"chimney",          // standalone & placenames (32)
"chimneys",         // placenames (13)
"chin",             // name & placename
"china",            // name & placenames (17)
"chole",            // name
"chord",            // name
"chosen",           // name & placenames (5)
"christ",           // name & placenames (133)
"christians",       // name
"christmas",        // name & placenames (14)
"circle",           // placenames (245)
"circus",           // name & placenames (123)
"city",             // placenames (196)
"civic",            // placenames (11)
"cj",               // name
"clamp",            // name & placenames (12)
"clap",             // name & placenames (12)
"cleat",            // standalone & placenames (5)
"clipper",          // name & placenames (13)
"close",            // placenames (1k+)
"cloud",            // name & placenames (18)
"clump",            // name & placenames (643)
"clumps",           // standalone & placenames (42)
"cluster",          // standalone & placename
"cloak",            // name & placenames (7)
"clouds",           // standalone & placenames (5)
"cloudy",           // name & placenames (2)
"clout",            // name
"clove",            // name & placenames (12)
"clover",           // name & placenames (81)
"clovers",          // standalone & placenames (3)
"cloves",           // standalone & placenames (3)
"coachman",         // name & placenames (7)
"coachway",         // standalone & placenames (3)
"coals",            // name & placenames (2)
"cobble",           // name & placenames (15)
"cobbler",          // name & placenames (25)
"cobblestones",     // standalone & placename
"cobles",           // standalone
"cobweb",           // name & placename
"cockerel",         // name & standalone & placenames (2)
"cockles",          // standalone & placenames (4)
"cockpit",          // standalone & placenames (9)
"cockpits",         // standalone
"cockrel",          // name
"cocoa",            // name & placenames (2)
"cockup",           // standalone & placenames (2)
"coda",             // name & placename
"coddles",          // standalone
"coffer",           // name
"coffin",           // name & placenames (10)
"cog",              // name & standalone & placenames (5)
"cokes",            // name & placename
"coking",           // name & placename
"colliers",         // standalone & placenames (34)
"colliery",         // placenames (89)
"colonnade",        // standalone & placenames (6)
"colts",            // name & standalone & placenames (16)
"coltsfoot",        // standalone & placenames (17)
"columbia",         // name & standalone & placenames (20)
"columbine",        // name & placenames (11)
"columbus",         // name & placenames (14)
"combers",          // standalone & placenames (3)
"combo",            // name
"combs",            // name & standalone & placenames (25)
"comely",           // name & placenames (22)
"comers",           // standalone & placenames (30)
"comet",            // name & placenames (12)
"comforter",        // name
"commodore",        // name & placenames (10)
"comp",             // name & standalone & placenames (4)
"compot",           // name
"comrade",          // name & placename
"conclaves",        // name
"concord",          // name & standalone & placenames (12)
"condor",           // name & placenames (11)
"cone",             // name & placenames (5)
"cones",            // name & placename
"coney",            // name & placenames (70)
"coneys",           // name
"confer",           // name
"confetti",         // name & placename
"congos",           // name
"conifer",          // name & placenames (21)
"conifers",         // standalone & placenames (4)
"conk",             // name
"conker",           // name & placenames (4)
"conquest",         // name & standalone & placenames (10)
"constable",        // name & standalone & placenames (38)
"contentment",      // name
"contra",           // name
"contras",          // name
"convent",          // placenames (45)
"converse",         // name
"cooing",           // name
"cook",             // name & placenames (77)
"cooks",            // name & placenames (24)
"cooling",          // name & standalone & placenames (7)
"coon",             // name
"coop",             // name & placenames (7)
"cope",             // name & placenames (12)
"copes",            // name & placenames (9)
"copier",           // name
"copper",           // name & placenames (60)
"copra",            // name
"coral",            // name & standalone & placenames (24)
"cordial",          // name
"cords",            // name
"cores",            // name & placenames (2)
"coring",           // name
"cork",             // name & standalone & placenames (15)
"cormorant",        // standalone & placenames (12)
"cornerstone",      // name & standalone & placenames (3)
"corporal",         // name & placenames (10)
"corpus",           // name & placenames (11)
"corral",           // name & placenames (2)
"corries",          // placenames (2)
"corsair",          // standalone & placenames (5)
"corse",            // name & standalone & placenames (27)
"cos",              // name & placenames (4)
"countryman",       // standalone & placenames (4)
"courtier",         // name & placename
"coven",            // name & standalone & placenames (11)
"covenant",         // name & placenames (5)
"covert",           // placenames (1k+)
"coves",            // name & standalone & placenames (11)
"coward",           // name & placenames (7)
"cowgate",          // standalone & placenames (5)
"cowl",             // name & placenames (4)
"cowpen",           // standalone & placenames (12)
"coy",              // name & placenames (8)
"coal",             // placenames (90)
"coast",            // name & standalone & placenames (27)
"coastal",          // placenames (16)
"coaster",          // name & place name
"coastguard",       // placenames (11)
"coat",             // standalone & placenames (31)
"coats",            // name & placenames (10)
"cock",             // name & placenames (87)
"coil",             // name
"coke",             // name & placenames (6)
"college",          // placenames (1k+)
"collegiate",       // placenames (18)
"colombia",         // name
"colonel",          // name & placenames (12)
"comb",             // name & placenames (23)
"comfort",          // name & placenames (13)
"comma",            // name & placenames (4)
"commissar",        // name
"commons",          // name & placenames (22)
"community",        // placenames (1k+)
"compass",          // name & placenames (28)
"comprehensive",    // placenames (94)
"conduit",          // name & placenames (31)
"congo",            // name & placenames (2)
"cons",             // name & placenames (2)
"consul",           // name & placenames (5)
"cooker",           // name
"cops",             // name & placename
"cordon",           // name & standalone & placenames (5)
"cornea",           // name
"corneal",          // name & standalone
"corner",           // placenames (674)
"cornerstones",     // standalone & placename
"corners",          // name & placenames (11)
"cornice",          // name & placename
"corns",            // name & placename
"corona",           // name & placenames (8)
"coronation",       // placenames (55)
"corp",             // name & placenames (6)
"cosmic",           // name & placename
"cosmos",           // name
"cot",              // name & placenames (29)
"cottage",          // placenames (213)
"cottages",         // placenames (266)
"cotton",           // name & placenames (90)
"countess",         // name & placenames (39)
"counts",           // name & place name
"county",           // placenames (462)
"courier",          // name & placenames (4)
"court",            // placenames (1k+)
"courts",           // name & placenames (20)
"courtside",        // standalone & place name
"courtyards",       // standalone & placenames (2)
"cow",              // placenames (180)
"crackpot",         // standalone & placename
"cradle",           // name & placenames (20)
"cradles",          // standalone & placename
"cram",             // name & placenames (2)
"crampon",          // name
"cranberry",        // standalone & placenames (30)
"crane",            // name & placenames (71)
"cranes",           // standalone & placenames (17)
"cranny",           // name & placenames (4)
"craven",           // name & placenames (72)
"cray",             // name & placenames (32)
"craze",            // name & placenames (2)
"crease",           // name & placenames (5)
"creche",           // name
"credo",            // name & placename
"creed",            // name & standalone & placenames (12)
"creeds",           // name & placename
"creeper",          // name & placename
"cress",            // name & placenames (14)
"cretin",           // name
"crick",            // name & standalone & placenames (14)
"crier",            // name & placenames (2)
"crimp",            // name & standalone & placenames (2)
"crimson",          // name & placenames (8)
"cripple",          // name & placenames (10)
"criss",            // name & placename
"crofters",         // standalone & placenames (24)
"crofts",           // name & placenames (74)
"crook",            // name & placenames (103)
"crooked",          // name & placenames (56)
"crooks",           // name & standalone & placenames (17)
"cropper",          // name & standalone & placenames (11)
"crosspost",        // standalone & placename
"crotch",           // name & placename
"crouch",           // name & standalone & placenames (46)
"crow",             // name & placenames (175)
"crumbles",         // standalone & placenames (2)
"crux",             // name & placename
"crafts",           // name & placenames (3)
"cramp",            // name & placenames (6)
"crank",            // name & standalone & placenames (4)
"crate",            // name & placenames (4)
"crater",           // name & placename
"crates",           // name & placenames (4)
"creak",            // name & placenames (2)
"creek",            // placenames (311)
"crest",            // name & placenames (116)
"crew",             // name & placenames (11)
"crews",            // name & placenames (5)
"crib",             // placenames (23)
"cricketers",       // standalone & placenames (20)
"crisp",            // name & placenames (8)
"crock",            // name & placenames (14)
"cross",            // standalone (SY12) & placenames (1k+)
"crosses",          // standalone & placenames (9)
"crossings",        // placenames (10)
"crossroads",       // standalone & placenames (8)
"crown",            // placenames (146)
"crutch",           // name & placenames (5)
"crystal",          // name & placenames (28)
"csec",             // name
"cull",             // name & placenames (6)
"culling",          // name & placenames (2)
"cullings",         // name & placenames (2)
"cults",            // standalone & placenames (17)
"culvert",          // name & placenames (11)
"cunning",          // name & placenames (7)
"cupid",            // name & placenames (8)
"cupola",           // standalone & placenames (6)
"curf",             // standalone & placenames (4)
"curie",            // name & placenames (12)
"curio",            // name
"curler",           // name
"curls",            // name & placenames (3)
"curly",            // name & placenames (9)
"currant",          // name & placenames (2)
"curry",            // name & placenames (24)
"curt",             // name
"cub",              // name & placenames (2)
"cuba",             // name & placenames (3)
"cuff",             // name & standalone & placenames (4)
"curds",            // name & place names (2)
"curl",             // name & placenames (4)
"curling",          // name & placenames (22)
"cutter",           // name & placenames (7)
"cyan",             // name
"cyber",            // name & placename
"cygnet",           // standalone & placenames (20)
"cyprus",           // name & placenames (13)
"cymbal",           // name & placename
"czar",             // name & placename

// D
"dairy",            // name & placenames (81)
"dance",            // name & placenames (11)
"darker",           // name & placename
"darts",            // name & placenames (2)
"daughters",        // name & placename
"day",              // name & placenames (77)
"days",             // name & placenames (11)
"deanery",          // placenames (23)
"deem",             // name
"deeming",          // name & placename
"deep",             // name
"delta",            // name & placenames (21)
"deluxe",           // name
"demon",            // name
"denmark",          // name & placenames (21)
"dent",             // name & placenames (22)
"dental",           // name & placenames (12)
"deus",             // name
"dial",             // name & placenames (27)
"digger",           // name & placenames (2)
"dike",             // name & placenames (89)
"dikes",            // durname & placenames (10)
"dj",               // name
"doc",              // name & placenames (7)
"dock",             // placenames (212)
"docker",           // name & placenames (10)
"docklands",        // standalone & placenames (5)
"docks",            // name & standalone & placenames (37)
"dockyard",         // standalone & placenames (3)
"doctors",          // name & placenames (14)
"dog",              // placenames (98)
"dolphin",          // name & placenames (37)
"dolphins",         // standalone & placenames (2)
"dominica",         // name & placenames (4)
"dominion",         // name & placenames (10)
"dong",             // name
"doppler",          // name & placename
"downhill",         // name & standalone & placenames (5)
"downs",            // placenames (422)
"downside",         // standalone & placenames (20)
"doyen",            // name
"drab",             // name & placename
"dragoon",          // name & placenames (8)
"draper",           // name & placenames (12)
"drapery",          // standalone & placenames (2)
"draught",          // standalone & placenames (3)
"drawback",         // standalone & placenames (2)
"dray",             // name & placenames (11)
"dresser",          // name & placenames (3)
"drey",             // name & placenames (2)
"drift",            // placenames (115)
"drive",            // placenames (1k+)
"droll",            // name
"droop",            // name & standalone & placenames (2)
"dross",            // name & placename
"drove",            // placenames (1k+)
"drover",           // name & placenames (9)
"drovers",          // standalone & placenamess (23)
"drub",             // standalone & placename
"drudge",           // name & placename
"druid",            // standalone & placenames (26)
"drummer",          // name & placenames (9)
"drumming",         // standalone & placenames (2)
"dryer",            // name & placenames (2)
"dragon",           // name & placenames (28)
"dragonfly",        // name & placenames (12)
"dragons",          // placenames (11)
"drawbridge",       // name & standalone & placenames (3)
"draws",            // name & placename
"dream",            // name & placenames (2)
"dressing",         // name & placename
"drivers",          // name & placenames (8)
"drum",             // standalone & placenames (67)
"dry",              // placenames (77)
"dual",             // name & placename
"duchy",            // placenames (16)
"duke",             // name & placenames (106)
"dukes",            // name & placenames (63)
"dull",             // name & placenames (6)
"duplex",           // name & placename
"dutchess",         // name
"duvet",            // name
"dynasty",          // name & placename
"dye",              // name & placenames (9)
"dyes",             // name & placenames (2)
"dyke",             // name & placenames (200)
"dykes",            // name & placenames (70)
"dynamite",         // name
"dynamos",          // name

// E
"eagle",            // name & standalone & placenames (80)
"eagles",           // name & standalone & placenames (22)
"eaves",            // name & placenames (36)
"earl",             // name & placenames (79) 
"earls",            // place names (70)
"early",            // name & place names (53)
"east",             // placenames (1k+)
"easter",           // place names (176)
"easterly",         // name & place names (10)
"eastern",          // placenames (112)
"eastside",         // standalone & placenames (11)
"echo",             // name
"echoes",           // name & placename
"eco",              // name & placenames (3)
"edge",             // placenames (468)
"edi",              // name
"eel",              // name & placenames (20)
"egypt",            // name & placenames (17)
"eid",              // name & placename
"eighteen",         // name & placenames (11)
"elbow",            // standalone & placenames (17)
"elder",            // placenames (48)
"elders",           // name & placenames (4)
"electro",          // name
"elf",              // name & placenames (11)
"elk",              // name & placenames (2)
"elks",             // name & placenames (2)
"elm",              // name & placenames (230)
"elms",             // name & placenames (109)
"embers",           // name & placenames (2)
"emblem",           // name & placenames (5)
"emirates",         // name
"emu",              // name & placenames (2)
"end",              // placenames (1k+)
"endo",             // name
"endow",            // name
"ends",             // name & placenames (53)
"endurance",        // name & placename
"england",          // placenames (1k+)
"entry",            // placenames (43)
"epee",             // name
"equilbrium",       // standalone
"era",              // name & placename
"eras",             // name
"eritrea",          // name
"escort",           // name & placename
"essence",          // name
"est",              // name & placenames (4)
"estate",           // placenames (457)
"ethiopia",         // name
"euro",             // name & placename
"europa",           // name & placenames (14)
"europe",           // name & placenames (3)
"evangelist",       // name & placenames (12)
"exchange",         // standalone & placenames (29)
"exe",              // name & placenames (20)
"expressway",       // placenames (23)
"excel",            // name & placenames (2)
"exodus",           // name
"extol",            // name
"eye",              // standalone & placenames (58)
"eyed",             // name & placename
"ezema",            // name

// F
"fab",              // name & placenames (3)
"facit",            // standalone & placenames (2)
"facto",            // name
"faggot",           // standalone
"fairs",            // name & placenames (2)
"fairyland",        // standalone & placename
"faithfull",        // name & placenames (2)
"fakes",            // name & placename
"falcon",           // name & standalone & placenames (48)
"falconer",         // name & placenames (20)
"faller",           // name & placename
"fallow",           // name & placenames (39)
"fam",              // name
"fang",             // name & placenames (13)
"fanny",            // name & placenames (23)
"fantasia",         // name & placenames (2)
"farad",            // name
"fared",            // name
"farmer",           // name & placenames (18)
"farmers",          // standalone & placenames (21)
"farmhouse",        // name & placenames (15)
"farmlands",        // standalone & placenames (6)
"farms",            // name & placenames (5)
"farrier",          // name & placenames (19)
"farriers",         // standalone & placenames (26)
"farris",           // name
"farthings",        // standalone & placenames (16)
"fascia",           // name
"fat",              // name & placenames (4)
"fatale",           // name
"fathom",           // name
"fatwa",            // name
"faun",             // name
"fauna",            // name & placenames (3)
"favors",           // name
"fawn",             // name & placenames (13)
"fawns",            // name & standalone & placenames (6)
"fair",             // placenames (149)
"fairy",            // name & placenames (33)
"falls",            // name & placenames (91)
"fan",              // placenames (51)
"fancy",            // name & placenames (14)
"far",              // placenames (239)
"fares",            // name
"farthing",         // name & placenames (43)
"fatty",            // name & placename
"favour",           // name
"favourite",        // name & placename
"ferns",            // name & placenames (7)
"ferous",           // name
"ferrier",          // name & placenames (15)
"ferryman",         // name & placenames (4)
"fester",           // name & placenames (2)
"feeder",           // name & placenames (9)
"felling",          // name & placenames (7)
"fellon",           // name
"fellows",          // name & placenames (11)
"fells",            // name & placenames (44)
"feral",            // name
"fern",             // name & placenames (104)
"ferret",           // name & placenames (104)
"ferric",           // name
"ferries",          // name & placenames (3)
"ferry",            // placenames (287)
"feta",             // name
"fetas",            // name
"fetch",            // name & placename
"fete",             // name
"fiasco",           // name
"fiddler",          // name & placenames (28)
"fidelity",         // name
"fides",            // name
"fizz",             // name
"fielder",          // name & placenames (5)
"fielders",         // name & placenames (9)
"fielding",         // name & placenames (24)
"fields",           // name & placenames (1k+)
"fiery",            // name & placenames (8)
"fiesta",           // name & placenames (3)
"fiestas",          // name
"fig",              // name & placenames (4)
"fiji",             // name & placename
"filching",         // standalone & placenames (2)
"filly",            // name & placename
"fin",              // name & placenames (8)
"finch",            // name & placenames (42)
"fine",             // name & placenames (10)
"fines",            // name & placenames (4)
"finesse",          // name
"finland",          // name & placenames (2)
"finning",          // name & placenames (2)
"fir",              // name & placenames (187)
"firs",             // standalone & placenames (264)
"fish",             // name & placenames (78)
"fisher",           // name & placenames (91)
"fishers",          // standalone & placenames (37)
"fishery",          // standalone & placenames (8)
"fishpond",         // standalone & placenames (22)
"fishponds",        // standalone & placenames (18)
"five",             // placenames (139)
"flack",            // name & placenames (4)
"flan",             // name & placenames (2)
"flasher",          // name & placename
"flax",             // name & placenames (29)
"flay",             // name & placename
"fleece",           // name & placenames (9)
"fleet",            // standalone & placenames (119)
"fleets",           // standalone & placenames (6)
"fletchers",        // standalone & placenames (17)
"fletching",        // standalone & placenames (6)
"flint",            // name & standalone & placenames (52)
"floe",             // name
"floodgate",        // name & placenames (7)
"flora",            // name & placenames (23)
"floss",            // name & placenames (4)
"flosser",          // name
"flail",            // name & placename
"flake",            // name & placename (5)
"flank",            // name & placename
"flash",            // standalone & placenames (32)
"flat",             // placenames (224)
"flats",            // standalone & placenames (92)
"flourish",         // name & placename
"flowers",          // name & placenames (21)
"fluke",            // name & placenames (6)
"flushing",         // standalone & placenames (4)
"flux",             // name & placenames (3)
"foggy",            // name & placenames (5)
"folio",            // name & placename
"fontanel",         // name
"fontanelle",       // name
"foor",             // name
"fora",             // name & placenames (3)
"forage",           // name & placenames (2)
"fording",          // name & placename
"forger",           // name & placename
"forges",           // name & placenames (2)
"foil",             // name & placename
"fold",             // placenames (998)
"folds",            // name & standalone & placenames (20)
"folks",            // name & placenames (4)
"follows",          // name & placenames (2)
"folly",            // name & placenames (137)
"font",             // name & placenames (10)
"footbridge",       // standalone
"footman",          // name & placename
"foots",            // name & placenames (6)
"footways",         // standalone
"ford",             // name & placenames (245)
"fords",            // name & placenames (10)
"fore",             // name & placenames (43)
"foreman",          // name & placenames (5)
"foreshore",        // standalone & placenames (8)
"forester",         // name & placenames (25)
"foresters",        // standalone & placenames (20)
"forestside",       // standalone & placenames (7)
"forge",            // name & placenames (129)
"forgiveness",      // name
"forks",            // name & placenames (3)
"fort",             // standalone & placenames (81)
"forte",            // name & placenames (5)
"forth",            // standalone (ML11) & placenames (63)
"forties",          // name & standalone & placenames (11)
"fortress",         // name & placenames (4)
"forts",            // name & placenames (2)
"fortunate",        // name
"foul",             // name & placenames (20)
"fowl",             // name & placenames (8)
"fowls",            // name & placenames (4)
"foxtrot",          // nane & placename
"foxy",             // name & placename

// FR
"franc",            // name & placenames (2)
"freeman",          // name & placenames (37)
"freemen",          // name & placenames (4)
"freer",            // name & placenames (12)
"frenchman",        // name & placenames (10)
"fresco",           // name & placename
"friar",            // name & placenames (63)
"friars",           // placenames (104)
"friary",           // name & standalone & placenames (31)
"frisk",            // name & placename
"fryer",            // name & placenames (9)
"fryers",           // name & placenames (4)
"france",           // name & placenames (24)
"fray",             // name & placenames (4)
"freehold",         // standalone & placenames (13)
"freight",          // name & placenames (3)
"fresh",            // standalone & placenames (11)
"freshwater",       // name & standalone & placenames (21)
"friday",           // name & placenames (27)
"friend",           // name & placenames (8)
"friendly",         // standalone & placenames (9)
"frisby",           // name & standalone & placenames (6)
"frolic",           // name & placename
"frost",            // name & standalone & placenames (29)

// FU
"funnel",           // name & placenames (5)
"furlong",          // name & placenames (175)
"furlough",         // name & placename
"furnace",          // name & standalone & placenames (40)
"furrow",           // name & placenames (21)
"furry",            // name & placename
"fury",             // name & placenames (3)

// G
"gaff",             // name & placenames (2)
"gaits",            // standalone
"gala",             // name & placenames (17)
"gale",             // name & standalone & placenames (44)
"galena",           // name & placenames (4)
"gales",            // name & placenames (12)
"galileo",          // name & placenames (3)
"gallant",          // name & placenames (7)
"galleon",          // name & placenames (6)
"galley",           // name & placenames (27)
"gallon",           // name & placenames (4)
"gallop",           // name & placenames (8)
"gallops",          // name & placenames (5)
"gallow",           // name & placenames (26)
"gamble",           // name & placenames (18)
"gambles",          // name & placenames (3)
"gambol",           // name & placename
"gammon",           // name & placenames (7)
"gammons",          // name & placenames (4)
"gander",           // name & placenames (9)
"garde",            // name & placenames (3)
"garden",           // placenames (433)
"gardener",         // name & placenames (22)
"gardeners",        // standalone & placenames (21)
"garland",          // name & standalone & placenames (25)
"garlands",         // standalone & placenames (5)
"garner",           // name & placenames (11)
"gazelle",          // name & placenames (5)
"gable",            // name & standalone & placenames (11)
"gables",           // name & placenames (36)
"gabon",            // name
"gaga",             // name
"gage",             // name & placenames (13)
"gainer",           // name & placename
"gains",            // name & placenames (11)
"gait",             // name & placenames (85)
"gall",             // name & placenames (43)
"gallows",          // standalone & placenames (50)
"games",            // name & placenames (6)
"gamma",            // name & placename
"gap",              // placenames (139)
"gape",             // name & placename
"gatehouse",        // name & placenames (24)
"gates",            // name & placenames (127)
"gateway",          // standalone & placenames (41)
"gaudy",            // name & placename
"gauge",            // name & placenames (3)
"gaunt",            // name & standalone & placenames (21)
"gauntlet",         // name & placenames (5)
"gauze",            // name & placenames (4)
"gay",              // name & placenames (22)
"gayer",            // name & placename
"gays",             // name & placenames (5)
"geese",            // name & placenames (3)
"gem",              // name & placenames (4)
"gemini",           // name & standalone & placenames (8)
"genie",            // name & placename
"gent",             // name & placenames (4)
"gentry",           // name & placenames (3)
"geo",              // name & placenames (1k+)
"geos",             // name & placenames (107)
"gest",             // name & placenames (4)
"gears",            // name & placenames (3)
"genesis",          // name & placenames (4)
"gentile",          // name
"gentiles",         // name
"germans",          // name & placenames (9)
"germany",          // name & placenames (4)
"gibraltar",        // standaline & placenames (22)
"gift",             // name & placenames (2)
"gin",              // name & placenames (14)
"ginger",           // name & placenames (6)
"gins",             // name & placenames (2)
"gipsy",            // name & placenames (29)
"given",            // name & placename
"giver",            // name & placename
"glade",            // name & placenames (213)
"glasshouse",       // standalone & placenames (18)
"glasshouses",      // standalone & placenames (2)
"glorious",         // name
"glory",            // name & placenames (8)
"glow",             // name & placename
"glacier",          // name & placenames (2)
"gladiola",         // name
"gladness",         // name
"glam",             // name
"glaze",            // name & placenames (6)
"glazier",          // name & placenames (4)
"gleam",            // name
"glean",            // name & placenames (4)
"glee",             // name
"glib",             // name & placename
"glide",            // name
"glider",           // name & placenames (2)
"gnat",             // name & placename
"goad",             // name & palcenames (3)
"godly",            // name & placenames (3)
"godsend",          // name & placename
"godson",           // name & placenames (7)
"goings",           // name & placename
"golly",            // name & standalone & placenames (2)
"goodly",           // name & placename
"goodwill",         // name & placenames (4)
"goon",             // name & placenames (2)
"goose",            // name & placenames (82)
"gooseberry",       // name & placenames (6)
"gopher",           // name & placenames (3)
"goshawk",          // name & placenames (11)
"gosling",          // name & placenames (20)
"gospel",           // name & placenames (19)
"goth",             // name & placename
"gouge",            // name & placename
"gourd",            // name & placename
"goy",              // name & placenames (2) 
"goats",            // name & placenames (7)
"gold",             // name & placenames (46)
"golden",           // placenames (137)
"goldfinch",        // name & placenames (16)
"golds",            // name & placenames (9)
"goodness",         // name
"goods",            // name & placenames (10)
"gore",             // name & placenames (78)
"gored",            // standalone & placenames (8)
"gores",            // name & placenames (8)
"gorge",            // name & placenames (17)
"gorse",            // name & placenames (510)
"gorses",           // standalone & placenames (7)
"gory",             // standalone
"gosh",             // name & placename
"gouda",            // name & placename
"granite",          // name & placenames (4)
"grants",           // name & placenames (18)
"grapes",           // name & placenames (4)
"grapevine",        // name & placenames (2)
"grasslands",       // standalone & placenames (3)
"gratitude",        // name & placename
"gravels",          // standalone & placenames (2)
"graves",           // name & placenames (17)
"graveyard",        // standalone & placename
"greece",           // name & placename
"grey",             // name & placenames (159)
"great",            // placenames (1k+)
"green",            // placenames (1k+)
"greenhouse",       // name & placenames (10)
"grid",             // name & placenames (13)
"grind",            // name & placenames (6)
"gripe",            // name & placename
"gripper",          // name & placename
"gross",            // name & placenames (2)
"ground",           // placenames (238)
"grounds",          // name & placenames (75)
"groundwater",      // name & placename
"groves",           // name & placenames (37)
"graces",           // name & placenames (7)
"gracious",         // name & placenames (5)
"grader",           // name & placename
"graft",            // name & palcename
"grail",            // name & placename
"grain",            // standalone & placenames (56)
"gram",             // name & placename
"grammar",          // name & placenames (204)
"grams",            // name & placename
"gran",             // name & placenames (4)
"granary",          // standalone & placenames (31)
"grandsire",        // standalone & placenames (3)
"gravel",           // name & standalone & placenames (81)
"gravely",          // name & placenames (2)
"graver",           // name & placenames (2)
"grays",            // name & standalone & placenames (34)
"greasy",           // name & placenames (2)
"greatness",        // name & standalone & placenames (3)
"greave",           // standalone & placenames (52)
"greaves",          // name & standalone & placenames (39)
"greedy",           // name & placenames (2)
"greener",          // name & placenames (4)
"greenie",          // name & placenames (3)
"greens",           // standalone & placenames (53)
"greet",            // standalone & placenames (6)
"grenade",          // name & placename
"greyling",         // name & placenames (2)
"grieve",           // name & placenames (16)
"grieves",          // name & placenames (3)
"grime",            // name & placenames (6)
"grist",            // name & placenames (5)
"grit",             // name & placenames (6)
"gritter",          // name
"gritters",         // name
"grizzle",          // name
"groat",            // name & placenames (10)
"groats",           // standalone & placenames (2)
"grogger",          // name
"gromet",           // name
"grommet",          // name
"groom",            // name & placenames (16)
"groomer",          // name
"grooms",           // name & placenames (8)
"groper",           // name
"grotto",           // name & placenames (16)
"grouse",           // name & placenames (16)
"grout",            // name & placename
"grower",           // name & placenames (3)
"grown",            // name & placename
"grub",             // name & placenames (10)
"grubs",            // name & placename
"gruel",            // name
"gruff",            // name
"grumbling",        // name & placename
"guano",            // name & placename
"guilder",          // name & placename
"guinness",         // name & placenames (6)
"guise",            // name & placenames (7)
"gull",             // name & placenames (38)
"gullet",           // name & placenames (10)
"gulley",           // name & placenames (4)
"gully",            // name & placenames (210)
"gunnery",          // name & placenames (3)
"gunning",          // name & placenames (8)
"gunny",            // name
"gunstock",         // name & placename
"guppy",            // name & standalone & placenames (4)
"gush",             // name
"gust",             // name
"gusto",            // name
"gusty",            // name
"gutting",          // name
"guys",             // name & placenames (8)
"guardhouse",       // standalone & placenames (3)
"guardian",         // name & placenames (10)
"guatemala",        // name
"guest",            // name & placenames (14)
"guide",            // standalone & placenames (15)
"guild",            // name & placenames (15)
"guinea",           // name & placenames (20)
"gums",             // name & placenames
"gun",              // standalone & placenames (43)
"guns",             // name & placenames (8)
"guru",             // name & placenames (6)
"gutter",           // name & placenames (67)
"guyana",           // name & placename
"gypsy",            // name & placenames (17)

// H
"ha",               // name & placenames (23)
"hail",             // name & standalone & placenames (10)
"hails",            // name & placenames (2)
"hairs",            // name
"haj",              // name
"hajj",             // name
"halfway",          // standalone & placenames (30)
"hall",             // name
"hamburger",        // name
"hammer",           // name & placenames (31)
"han",              // name & placename
"handball",         // standalone
"handler",          // name
"handover",         // name
"hands",            // name & placenames (14)
"handy",            // name & placenames (4)
"hanger",           // name & placenames (237)
"hanging",          // placenames (106)
"happiness",        // name
"harbour",          // name & placenames (300)
"harness",          // name & placenames (7)
"harsh",            // name
"hash",             // name & placename
"hashish",          // name
"haste",            // name & placename
"hasten",           // name
"hasty",            // name & placenames (6)
"herdsman",         // name & placenames (2)
"hermit",           // name & placenames (14)
"hermitage",        // name & placenames (51)
"hero",             // name & placenames (2)
"herod",            // name & placenames (4)
"heron",            // name & placenames (97)
"heros",            // name
"herring",          // name & placenames (29)
"hertz",            // name
"hes",              // name
"hex",              // name
"heads",            // name & placenames (77)
"headstone",        // standalone & placenames (6)
"headward",         // name
"headway",          // standalone & placenames (7)
"healing",          // name & standalone & placenames (5)
"heard",            // name & placenames (4)
"heart",            // name & placenames (59)
"hearth",           // name & placenames (4)
"hearthstone",      // standalone & placenames (2)
"heartlands",       // standalone & placenames (7)
"heaven",           // name & placenames (7)
"hedge",            // name & placenames (71)
"hedgerow",         // standalone & placenames (13)
"hedges",           // name & placenames (39)
"heights",          // placenames (450)
"held",             // name & placenames (2)
"helps",            // name & placename
"hemp",             // name & placenames (14)
"herald",           // name & placenames (13)
"hey",              // placenames (393)
"hick",             // name & placenames (13)
"hickory",          // name & placenames (13)
"hicks",            // name & placenames (22)
"hides",            // name & placenames (7)
"highland",         // name & standalone & placenames (47)
"highlander",       // name & standalone & placenames (4)
"highlands",        // name & standalone & placenames (26)
"highness",         // name
"highway",          // standalone & placenames (61)
"highways",         // standalone
"hide",             // standalone & placenames (22)
"high",             // placenames (1k+)
"higher",           // placenames (1k+)
"hijab",            // name
"hills",            // name & placenames (633)
"hind",             // name & placenames (34)
"hinge",            // name
"hires",            // name
"hitch",            // name & placenames (11)
"hive",             // standalone & name & placenames (20)
"hives",            // name & placenames (6)
"hillock",          // name & placenames (192)
"hillocks",         // name & placenames (41)
"hilly",            // name & placenames (35)
"hilt",             // name & placename
"hilts",            // name
"hinch",            // name & placename
"hinder",           // name & placenames (2)
"hinders",          // name & placename
"hippo",            // name
"hippy",            // name & placename
"hiss",             // name & placename
"hitches",          // name & placenames (3)
"hitching",         // name & placename
"hitler",           // name
"hitter",           // name & placename
"hoary",            // name
"hobbit",           // name & placename
"hobble",           // name & placenames (2)
"hoc",              // name
"hock",             // name & placenames (5)
"hocky",            // name
"hod",              // name & placenames (8)
"hoe",              // name & placenames (55)
"hoes",             // name
"hogmanay",         // name
"hombre",           // name
"homeground",       // standalone & placename
"homestead",        // name & placenames (26)
"homily",           // name
"hone",             // name & placenames (11)
"honer",            // name & placename
"hones",            // name
"honesty",          // name & placenames (3)
"honey",            // name & placenames (85)
"honeybee",         // name & placenames (4)
"honeydew",         // name & placenames (2)
"honeysucker",      // name
"honeysuckle",      // name & standalone & placenames (22)
"honing",           // name & standalone & placenames (5)
"honor",            // name & placenames (11)
"honoree",          // name
"hood",             // name & placenames (78)
"hoodless",         // name
"hoody",            // name
"hoof",             // name & placename
"hooker",           // name & placenames (11)
"hooks",            // name & placenames (15)
"hoops",            // name & standalone & placenames (2)
"hoove",            // standalone & placenames (4)
"hoper",            // name
"hopper",           // name & placenames (18)
"hoppers",          // name & placenames (6)
"horde",            // name
"horn",             // placenames (86)
"hornbeam",         // standalone & placenames (31)
"hornbeams",        // standalone & placenames (3)
"horns",            // name & placenames (27)
"horny",            // name & placename
"hosanna",          // name
"hosier",           // name & placenames (2)
"hosp",             // name & placename
"hosta",            // name & standalone & placenames (4)
"hotter",           // name
"hound",            // standalone & placenames (22)
"houseman",         // name & placenames (6)
"housemate",        // name
"hovel",            // name & placenames (15)
"hover",            // name
"howdy",            // name
"howl",             // name & placenames (15)
"howlings",         // name
"howls",            // name
"hows",             // name & placenames (16)
"hobby",            // name & placenames (11)
"hoist",            // name & placenames (3)
"holder",           // name & placenames (14)
"holders",          // standalone & placenames (13)
"holdfast",         // standalone & placenames (2)
"hole",             // placenames (269)
"holes",            // name & placenames (106)
"holiness",         // name
"hollow",           // placenames (342)
"hollows",          // name & standalone & placenames (16)
"holster",          // name
"holy",             // placenames (188)
"home",             // placenames (1k+)
"homelands",        // standalone & placenames (12)
"homes",            // name & placenames (11)
"homo",             // name
"honour",           // name & placenames (4)
"hoot",             // name
"hooter",           // name
"hoots",            // name
"hoover",           // name & placenames (5)
"hop",              // name & placenames (51)
"hopes",            // name & placenames (13)
"horseback",        // standalone & placenames (2)
"horseman",         // name & placenames (14)
"horseshoe",        // standalone & placenames (55)
"hose",             // name & standalone & placenames (8)
"hospice",          // name & placenames (144)
"house",            // placenames (1k+)
"houses",           // placenames (105)
"how",              // standalone & placenames (120)
"hub",              // name & placenames (6)
"hubby",            // name
"hud",              // name & placenames (6)
"huddle",           // name & placenames (2)
"hues",             // name
"huff",             // name & placename
"hula",             // name & placenames (2)
"hulk",             // name & standalone & placenames (4)
"hulks",            // name & placename
"hulls",            // name & placenames (3)
"hum",              // name & placename
"humble",           // name & placenames (16)
"humbles",          // name & placename
"humid",            // name
"hummer",           // name & standalone & placenames (3)
"hummingbird",      // name & placenames (5)
"hums",             // name
"hung",             // name & placename
"hunts",            // name & placenames (35)
"huntsman",         // name & placenames (20)
"hurdle",           // name & placenames (9)
"hurling",          // name & placename
"hurray",           // name
"husbands",         // name & placenames (2)
"hush",             // name & placenames (2)
"husk",             // name & placenames (2)
"hustler",          // name & placenames (3)
"hutch",            // name & placenames (4)
"hutches",          // name
"huts",             // name & placename
"hundred",          // placenames (49)
"hurts",            // name & placenames (2)
"hut",              // name & placenames (27)
"hydra",            // name & placenames
"hyacinth",         // name & placenames (8)
"hydros",           // name
"hymen",            // name
"hymn",             // name
"hyperion",         // name & placenames (8)

// I
"ibis",             // name & placenames (6)
"ibu",              // name
"iceman",           // name
"ichor",            // name
"ides",             // name & placename
"idle",             // name & placenames (12)
"idler",            // name
"il",               // name
"ilk",              // name & placename
"imam",             // name & placename
"immaculate",       // name & placenames (8)
"imms",             // name
"imperial",         // name & placenames (30)
"inane",            // name
"inch",             // name & placenames (56)
"inches",           // name & standalone & placenames (4)
"inclosure",        // placenames (170)
"incognito",        // name
"india",            // name & placenames (18)
"indie",            // name & placenames (5)
"indigo",           // name & placenames (7)
"indonesia",        // name
"infanta",          // name
"infield",          // name & placenames (7)
"infirmary",        // standalone & placenames (45)
"ing",              // name & placenames (78)
"ingrow",           // standalone & placenames (4)
"inks",             // name & placenames (2)
"inn",              // name & placenames (105)
"inner",            // placenames (117)
"innocent",         // name
"inns",             // name & placenames (9)
"insole",           // name & placenames (5)
"inspire",          // standalone & placenames (2)
"intake",           // standalone & placenames (53)
"inward",           // name & placenames (4)
"ion",              // name & placenames (3)
"ions",             // name
"iota",             // name
"ip",               // name
"iran",             // name
"ireland",          // name & placenames (27)
"iris",             // name & placenames (23)
"irk",              // name & placenames (3)
"ironmonger",       // name & placenames (5)
"irons",            // name & placenames (9)
"ironworks",        // standalone & placenames (3)
"island",           // placenames (674)
"islands",          // placenames (54)
"isle",             // name & placenames (215)
"isles",            // name & placenames (30)
"italy",            // name & placename
"ith",              // name
"ive",              // name & placenames (11)
"ivory",            // name & placenames (10)

// J
"jackal",           // name & placename
"jacks",            // name & placenames (22)
"jaguar",           // name & standalone & placenames (4)
"jamaica",          // name & placenames (16)
"jammer",           // name
"jammy",            // name & placename
"jams",             // name & placenames (2)
"japan",            // name & placenames (4)
"jarred",           // name
"java",             // name & placenames (8)
"jazz",             // name & placenames (2)
"jealous",          // name & placenames (2)
"jeans",            // placenames (5)
"jehad",            // name
"jelly",            // name
"jest",             // name
"jester",           // name & placenames (4)
"jet",              // name & placenames (4)
"jetty",            // name & placenames (18)
"jewel",            // name & placenames (11)
"jewels",           // name & placenames (2)
"jewess",           // name
"jewry",            // name & placenames (3)
"jews",             // name & placenames (5)
"jezebel",          // name
"jia",              // name
"jiffy",            // name
"jihad",            // name
"jingle",           // name & placenames (3)
"jingles",          // name
"jingling",         // name & placename
"jingo",            // name
"jinks",            // name
"jinx",             // name
"jitsu",            // name
"jj",               // name
"jobs",             // name & placenames (2)
"jock",             // name & placenames (36)
"joiner",           // name & placenames (8)
"joker",            // name
"jolly",            // name & placenames (31)
"jot",              // name
"joule",            // name & placenames (3)
"joules",           // name & placenames (3)
"journey",          // name
"journo",           // name
"joust",            // name
"jovial",           // name
"joyful",           // name
"joyous",           // name
"joys",             // name & placenames (4)
"jubilant",         // name
"jubilee",          // name & placenames (109)
"judas",            // name & placenames (3)
"judge",            // name & placenames (18)
"judges",           // name & placenames (11)
"jug",              // name & placenames (3)
"july",             // name & placename (2)
"jumble",           // name & placenames (8)
"jumbles",          // standalone & placenames (4)
"jumbo",            // name
"jumpers",          // standalone & placenames (5)
"jumps",            // name & placenames (4)
"jun",              // name & placenames (2)
"junction",         // placenames (107)
"june",             // name & placenames (11)
"juniper",          // name & standalone & placenames (40)
"junta",            // name
"jungles",          // name
"jupiter",          // name & placenames (17)
"jury",             // name & placenames (10)
"justice",          // name & placenames (15)

// K
"kaftan",           // name
"kappa",            // name
"kale",             // name & placenames (6)
"kales",            // name
"karaoke",          // name
"karma",            // name & placename
"kart",             // name
"keel",             // name & placenames (14)
"keels",            // name & standalone
"keeper",           // name & placenames (27)
"keepers",          // name & placenames (42)
"kelp",             // name & placenames (2)
"kennel",           // name & placenames (68)
"kerbs",            // name
"kerns",            // name
"kestrel",          // name & standalone & placenames (32)
"ket",              // name & placenames (2)
"keto",             // name
"keys",             // name & placenames (36)
"keen",             // name & standalone & placenames (28)
"keg",              // name & placenames (2)
"kenya",            // name & placenames (3)
"kettle",           // name & standalone & placenames (38)
"kettles",          // name & placenames (6)
"khalif",           // name
"kicker",           // name & placename
"kilo",             // name
"kilts",            // name
"kimono",           // name
"kimonos",          // name
"kindle",           // name & placename
"kindred",          // name
"kingly",           // name & placename
"kings",            // name & placenames (330)
"kinsman",          // standalone & placenames (2)
"kipper",           // name & placenames (2)
"kipping",          // name & placenames (6)
"kisser",           // name
"kite",             // name & placenames (44)
"kitten",           // name & placenames (2)
"kittie",           // name
"kitty",            // name & placenames (26)
"kiwi",             // name & placenames (5)
"kicks",            // name & placenames (3)
"kiddie",           // name
"kiln",             // name & placenames (235)
"kilns",            // placenames (21)
"kin",              // name & placenames (2)
"kinder",           // name & placenames (17)
"kingdom",          // standalone & placenames (9)
"kingfisher",       // name & placenames (45)
"kitchens",         // name & placename
"knock",            // standalone & placenames (74)
"knuckle",          // name & placenames (2)
"knuckles",         // name & placename
"knack",            // name & placename
"knell",            // name & placenames (3)
"knightly",         // name & placenames (2)
"knitter",          // name & placename
"knob",             // name & placenames (18)
"knocker",          // name & placenames (2)
"knoll",            // name & placenames (170)
"knolls",           // name & placenames (16)
"knot",             // name & placenames (17)
"knotting",         // standalone & placenames (6)

// LA
"labrador",         // name & placenames (5)
"labour",           // name & placenames (5)
"lace",             // name & placenames (15)
"lacrosse",         // name & placenames (2)
"lad",              // name & placenames (9)
"laddie",           // name & placenames (2)
"laden",            // name & placename
"ladle",            // name & placenames (3)
"ladybird",         // name & placenames (5)
"lady",             // placenames (580)
"lake",             // name & placenames (941)
"laker",            // name & placenames (7)
"lakes",            // name & placenames (116)
"lair",             // name & placenames (15)
"laird",            // name & placenames (32)
"lairds",           // placenames (16)
"lama",             // name & placename
"lamas",            // name & standalone & placenames (2)
"lamb",             // name & placenames (95)
"lame",             // name & placenames (2)
"lamprey",          // name & standalone & placenames (4)
"lancer",           // name & placenames (6)
"lancet",           // name & placenames (2)
"lancing",          // name & standalone & placenames (20)
"lander",           // name & placenames (9)
"landers",          // name & placenames (2)
"lanes",            // name & placenames (60)
"lang",             // name & placenames (81)
"lanyards",         // standalone & placename
"lambing",          // name & placenames (6)
"lander",           // name & placenames (9)
"lands",            // name & placenames (149)
"laos",             // name
"larches",          // standalone & placenames (42)
"large",            // name & placenames (12)
"lash",             // name & placenames (6)
"laughing",         // name & placenames (3)
"lava",             // name
"law",              // name & standalone (ML8) & placenames (456)
"lay",              // name & placenames (29)

// LE
"leaders",          // name & placenames (2)
"leaks",            // name & placename
"leaning",          // name & placename
"lease",            // name & placenames (13)
"leaves",           // name & placenames (10)
"legend",           // name & placename
"legions",          // name & placename
"lego",             // name
"legos",            // name
"legs",             // name & placenames (4)
"leisure",          // name & placenames (10)
"lent",             // name & standalone & placenames (7)
"lenten",           // name & placenames (4)
"leotard",          // name
"lesser",           // name & placenames (7)
"lettuce",          // name & placename
"levellers",        // standalone & placenames (2)
"levels",           // name & placenames (15)

// LI
"libel",            // name
"libya",            // name
"lies",             // name & placename
"lighter",          // name & placename (2)
"lights",           // name & placenames (6)
"limber",           // name & placenames (11)
"limbo",            // name & standalone & placenames (2)
"lime",             // name & placenames (131)
"linear",           // name & placenames (6)
"linen",            // name & placenames (10)
"lines",            // name & placenames (18)
"linger",           // name & placename
"link",             // name & placenames (191)
"links",            // name & placenames (93)
"lion",             // name  & placenames (118)
"lite",             // name & placenames (3)
"littler",          // name & placenames (8)
"lizard",           // name & standalone & placenames (14)

// LO
"loads",            // name & placenames (3)
"loan",             // placenames (318)
"lobe",             // name
"lobes",            // name
"loc",              // name & placenames (2)
"lock",             // name & placenames (125)
"locker",           // name & placenames (9)
"login",            // name & placenames (6)
"lolly",            // name
"lone",             // name & placenames (23)
"lonesome",         // name & placenames (4)
"long",             // placenames (1k+)
"longtail",         // standalone & placenames (4)
"loose",            // standalone & placenames (16)
"lord",             // name & placenames (131)
"lorry",            // name & placename
"love",             // name
"low",              // placenames (917)
"lower",            // placenames (1k+)

// LU
"lucid",            // name
"lucifer",          // name & placename
"luckly",           // name
"lug",              // standalone & placenames (9)
"lullaby",          // name
"lumbers",          // name & placename
"lumen",            // name & placename
"lupine",           // name & placename
"lupis",            // name
"lurch",            // name
"lure",             // name & placename
"lurk",             // name & placename
"lurks",            // name & placename
"lush",             // name
"lusher",           // name & placenames (4)
"lusted",           // name & placenames (2)
"lusty",            // name & standalone & placenames (4)
"lucky",            // name & placenames (6)
"lump",             // name & placenames (6)
"lumpy",            // name & placenames (2)
"luna",             // name & placenames (6)
"lunar",            // name & placenames (5)
"lunas",            // name
"luxembourg",       // name & placenames (4)

// LY
"lychee",           // name
"lye",              // name & standalone & placenames (40)
"lyes",             // name & placenames (3)
"lynx",             // name & placenames (7)
"lyric",            // name & placenames (6)

// MA
"macedonia",        // name & standalone
"macro",            // name & placename
"madam",            // name & placenames (19)
"mafia",            // name
"mag",              // name & placenames (9)
"mage",             // name
"magenta",          // name & placenames (6)
"mages",            // name
"magi",             // name
"magnet",           // name & placenames (4)
"magnolia",         // name & placenames (20)
"magnolias",        // standalone
"magnum",           // name & placenames (3)
"magpies",          // standalone & placename
"mags",             // name & placename
"maid",             // name & placenames (12)
"maiden",           // name & placenames (83)
"maidens",          // name & standalone & placenames (14)
"main",             // standalone & placenames (121)
"mainland",         // standalone & placenames (2)
"majesty",          // name
"major",            // name & placenames (41)
"majors",           // name & placenames (9)
"malaysia",         // name
"mali",             // name & placenames (4)
"mallard",          // name & placenames (36)
"mallards",         // standalone & placenames (13)
"mallet",           // name & placenames (13)
"mallow",           // name & placenames (20)
"mallows",          // name & placenames (11)
"malls",            // name & placenames (2)
"malta",            // name & placenames (6)
"mama",             // name
"mamas",            // name
"mamba",            // name & placename
"mandela",          // name & placenames (14)
"mane",             // name & placename
"manes",            // name & placename
"mangle",           // name & placenames (3)
"mangles",          // name & placename
"mango",            // name & placename
"mangold",          // name & placename
"manhood",          // name & placename
"mania",            // name
"manias",           // name
"manifold",         // name & standalone & placenames (10)
"manilla",          // name & placenames (7)
"manly",            // name & placenames (2)
"manna",            // name & placenames (3)
"manners",          // name & placenames (13)
"manning",          // name & placenames (18)
"manors",           // standalone & placenames (2)
"mantle",           // name & placenames (17)
"mantra",           // name
"mara",             // name & placenames (17)
"marcher",          // name & placename
"mare",             // name & placenames (54)
"mares",            // name & placenames (5)
"marigold",         // name & placenames (16)
"marigolds",        // standalone
"marina",           // name & standalone & placenames (36)
"marinas",          // name
"marine",           // name & placenames (73)
"mariner",          // name & standalone & placenames (16)
"marines",          // name & placename
"marionette",       // name
"marjoram",         // name & placenames (8)
"market",           // placenames (224)
"marks",            // name & placenames (58)
"marlinespike",     // standalone
"marmalade",        // name & placename
"marmite",          // name
"marmot",           // name & placename
"maroon",           // name & placenames (3)
"marque",           // name
"marques",          // name
"marquess",         // name & placenames (4)
"marquis",          // name & placenames (17)
"marrow",           // name & placenames (6)
"mars",             // name & placenames (12)
"marsala",          // name & placenames (2)
"marsh",            // name & placenames (720)
"marshal",          // name & placenames (8)
"marshalls",        // standalone & placenames (20)
"marshes",          // standalone & placenames (210)
"marshland",        // standalone & placenames (18)
"marshlands",       // standalone & placenames (8)
"martial",          // name & placename
"martian",          // name & placename
"martingale",       // name & standalone & placenames (10)
"martini",          // name & placename
"martinis",         // name
"martyr",           // name & placenames (12)
"martyrs",          // placenames (25)
"marvel",           // name & placenames (4)
"marvellous",       // name
"mascara",          // name
"mascot",           // name & placenames (2)
"mash",             // name & placenames (2)
"massed",           // name
"masseur",          // name
"massif",           // name & placename
"masters",          // name & placenames (10)
"mate",             // name & placename
"mates",            // name & placename
"math",             // name & placenames (3)
"mats",             // name
"matted",           // name
"mauritius",        // name & placenames (3)
"maxim",            // name
"maxima",           // name

// ME
"meadow",           // placenames (1k+)
"meadows",          // placenames (670)
"median",           // name & placename
"mediate",          // name
"meet",             // name & placenames (6)
"meh",              // name
"men",              // name & placenames (13)
"mere",             // placenames (271)
"mesh",             // name & placenames (2)
"messenger",        // name & placenames (7)
"messing",          // name & placenames (5)
"meta",             // name & placename
"methodist",        // placenames (66)
"mexico",           // name & placenames (3)

// MI
"middle",           // placenames (729)
"millenium",        // name & placenames (13)
"millennium",       // name & placenames (33)
"mills",            // name & placenames (202)
"millstone",        // name & placenames (33)
"millstones",       // standalone & placenames (3)
"min",              // name & placenames (44)
"miners",           // name & placenames (13)
"mines",            // name & placenames (10)
"mink",             // name & placenames (4)
"minke",            // name
"minks",            // name
"miracle",          // name
"mis",              // name & placenames (4)
"miso",             // name
"miss",             // name & placenames (13)
"mist",             // name & placename
"mister",           // name & placename

// MO
"moist",            // name
"moldova",          // name
"mole",             // name & placenames (24)
"moles",            // name & placenames (9)
"molten",           // name & placename
"mon",              // name
"monaco",           // name & placenames (2)
"monday",           // name & placenames (9)
"montenegro",       // name
"monument",         // standalone & placenames (28)
"more",             // name & placenames (90)
"morn",             // name & placename
"morocco",          // name & placename
"mosquito",         // name & placenames (8)
"moss",             // placenames (1k+)
"mosses",           // name & placenames (2)
"mossy",            // name & placenames (27)
"mould",            // name & placenames (3)
"moulding",         // name & placename
"moulds",           // name & placename
"mountain",         // placenames (110)
"mounts",           // name & placenames (19)
"mourning",         // name & placename
"mower",            // name & placenames (3)

// MU
"mu",               // name
"mural",            // name
"muse",             // name & placenames (4)
"muslim",           // name
"muslin",           // name & placenames (2)
"mustache",         // name
"musters",          // standalone & placenames (4)
"myanmar",          // name

// NA
"nags",             // name & placenames (6)
"nah",              // name & placename
"nan",              // placenames (1k+)
"nans",             // name & placenames (6)
"nappy",            // name & placenames (2)
"nations",          // name & placenames (2)
"navy",             // name & placenames (4)

// NE
"nepal",            // name & placename
"nephew",           // name & placename
"neptune",          // name & placenames (21)
"netherlands",      // standalone & placenames (6)
"nevis",            // name & placenames (25)
"new",              // placenames (1k+)
"newborn",          // name & placenames (3)

// NH
"nhs",              // placenames (15)

// NI
"nicaragua",        // name
"niger",            // name & placenames (2)
"nigeria",          // name & placename
"nineteen",         // name & placenames (4)
"nip",              // name & placenames (4)

// NO
"noddy",            // name & placenames (4)
"nomad",            // name & placename
"non",              // name
"nook",             // name & placenames (300+)
"nooks",            // name & placenames (10)
"norm",             // name
"noon",             // name
"nosed",            // name
"nosier",           // name
"noun",             // name
"nova",             // name & placenames (21)
"novelle",          // name
"novels",           // name
"north",            // placenames (1k+)
"northern",         // placenames (84)
"northside",        // standalone & placenames (14)
"northward",        // standalone & placenames (4)
"norway",           // name & placenames (17)
"notch",            // name & placename
"november",         // name & placename

// NU
"numbers",          // name & placenames (2)
"nun",              // name & placenames (28)
"nunnery",          // name & placenames (27)
"nuro",             // name
"nurs",             // name & placenames (3)
"nursey",           // name & placenames (7)
"nutty",            // name & placename

// OA
"oak",              // name & placenames (796)
"oaken",            // name & placenames (45)
"oaks",             // name & placenames (301)
"oar",              // name & placename
"oasis",            // name & placenames (37)
"oath",             // standalone & placenames (5)
"oats",             // name & placenames (4)

// OB
"obelisk",          // standalone & placenames (15)
"observatory",      // standalone & placenames (16)
"obsidian",         // name & placename

// OC
"occidental",       // name
"ocean",            // name & placenames (30)
"ochre",            // name & placenames (8)
"octave",           // name
"october",          // name & placenames (2)

// OD
"odder",            // standalone & placename
"ode",              // name
"odor",             // name
"odour",            // name

// OG
"ogle",             // name & standalone & placenames (14)
"ogles",            // name

// OH
"oh",               // name
"ohm",              // name
"ohms",             // name

// OK
"okapi",            // name

// OL
"olds",             // name & placename
"oldschool",        // name
"olive",            // name & placenames (47)
"olympia",          // name & standalone & placenames (10)

// OM
"om",               // name
"oman",             // name & placenames (2)
"omega",            // name & placenames (9)
"omen",             // name
"omit",             // name

// ON
"oneness",          // name
"onyx",             // name & placenames (6)

// OO
"oot",              // name

// OP
"opportune",        // name & placename
"opus",             // name & placename

// OR
"orange",           // standalone & placenames (30)
"orchid",           // name & placenames (32)
"orchard",          // placenames (787)
"orchards",         // standalone & placenames (26)
"ordnance",         // standalone & placenames (13)
"ore",              // name & standalone & placenames (17)
"orient",           // name & placenames (8)
"oriental",         // name & placenames (5)
"orphan",           // name & placenames (3)
"orth",             // name & placenames (2)
"ortho",            // name

// OS
"osprey",           // name & standalone & placenames (29)
"ospreys",          // standalone
"ostrich",          // name & placenames (4)

// OT
"otter",            // name & placenames (55)
"ottoman",          // name & placename

// OU
"outcast",          // standalone & placename
"outer",            // placenames (118)
"outfield",         // standalone & placenames (8)
"outing",           // name & placenames (2)
"outlaw",           // name & placenames (2)

// OV
"oval",             // name & placenames (112)
"ovens",            // name & placenames (9)
"ovenstone",        // name & placename
"overburn",         // standalone & placenames (4)
"overland",         // name & placenames (8)

// OW
"owes",             // name
"owl",              // name & placenames (46)
"owlet",            // standalone & placenames (15)

// OX
"ox",               // placenames (92)

// OY
"oyster",           // name & placenames (25)

// OZ
"oz",               // name

// PA
"pace",             // name
"pacer",            // name
"pacific",          // name & placenames (7)
"pacify",           // name
"packer",           // name & placenames (11)
"packsaddle",       // standalone & placenames (6)
"paddle",           // name & placenames (4)
"paddock",          // name & placenames (251)
"paddocks",         // standalone & placenames (56)
"padre",            // name & placename
"pae",              // name
"paed",             // name
"pagan",            // name & placenames (4)
"pagans",           // suranem & placename
"page",             // name & placenames (52)
"pages",            // name & placenames (16)
"pagoda",           // name & placenames (8)
"paisley",          // name & placenames (28)
"pal",              // name & placenames (4)
"paladin",          // name & placename
"palate",           // name
"palace",           // placenames (76)
"palau",            // name
"paler",            // name
"pales",            // name & placenames (5)
"palfrey",          // name & standalone & placenames (11)
"paling",           // name & placenames (3)
"pall",             // name & placenames (3)
"pallet",           // name & placenames (3)
"pallette",         // name
"palms",            // name & placenames (4)
"pan",              // standalone & placenames (24)
"panama",           // name & placenames (7)
"panacea",          // name
"panache",          // name & placename
"pancake",          // name & placenames (5)
"panda",            // name & placenames (2)
"pander",           // name
"pandora",          // name & placenames (7)
"pane",             // name & placename
"panes",            // name
"panfil",           // name
"pang",             // name & placename
"panga",            // name
"pannier",          // name & placenames (4)
"panniers",         // name & placenames (2)
"panning",          // name
"pansy",            // name & placenames (7)
"panorama",         // standalone & placenames (7)
"pans",             // name & placenames (10)
"panther",          // name & placenames (4)
"pantie",           // name & placename
"panting",          // name
"pantry",           // name & placenames (3)
"panzer",           // name
"papaya",           // name
"par",              // name & placenames (16)
"para",             // name
"parade",           // placenames (448)
"parades",          // name
"parcel",           // name & placenames (2)
"parliament",       // name & placenames (22)
"parlour",          // name & placenames (18)
"parrot",           // name & placenames (8)
"passage",          // placenames (183)
"passageway",       // placename
"pasty",            // name
"patch",            // placenames (74)
"patches",          // name & placenames (8)
"patella",          // name
"path",             // placenames (399)
"pathways",         // standalone & placenames (6)

// PE
"paw",              // name & placenames (3)
"paye",             // name & placenames (2)
"payer",            // name
"pea",              // name & placenames (16)
"peace",            // name & placenames (39)
"peaks",            // name & placenames (18)
"pealer",           // name
"pealing",          // name
"peas",             // name & placenames (9)
"peat",             // name & placenames (68)
"pebble",           // name & placenames (22)
"ped",              // name
"pedal",            // name
"pedo",             // name
"peek",             // name & placenames (6)
"peeks",            // name & placenames (4)
"peel",             // name & standalone & placenames (101)
"pen",              // placenames (824)
"peninsula",        // standalone & placenames (15)
"pent",             // name & placenames (2)
"peoples",          // name & placenames (2)
"perks",            // name & placenames (4)
"perla",            // name
"perpetual",        // name & placenames (5)
"perseverance",     // name & placenames (8)
"peru",             // name & placenames (2)
"pest",             // name & placenames (2)
"pester",           // name & placename
"pesto",            // name
"pat",              // name
"petal",            // name & placenames (2)
"petals",           // name
"petard",           // name & placenames (2)
"petering",         // name
"petit",            // name & placenames (10)
"petite",           // name
"petty",            // name & standalone & placenames (22)
"petunia",          // name & placenames (8)

// PH
"philippines",      // name

// PI
"picking",          // name & placenames (3)
"piece",            // placenames (265)
"pigeon",           // name & placenames (37)
"piles",            // name & placenames (6)
"pills",            // name
"pimple",           // name & placenames (2)
"pinch",            // name & placenames (5)
"pincher",          // name & placename
"pinches",          // name
"pinching",         // name & placename
"pincushion",       // standalone & placenames (3)
"pine",             // placenames (147)
"piner",            // name & placename
"pines",            // name & placenames (38)
"pinfold",          // name & standalone & placenames (43)
"ping",             // name
"pinged",           // standalone
"pinion",           // name & placenames (2)
"pink",             // standalone & placenames (25)
"pinkie",           // name & standalone & placenames (10)
"pinks",            // name & placenames (5)
"pinky",            // name
"pinna",            // name
"pinnacle",         // standalone & placenames (22)
"pinnacles",        // standalone & placenames (3)
"pinning",          // name
"pins",             // name & placenames (5)
"pint",             // name
"pip",              // name
"piso",             // name
"pit",              // placenames (350)
"pitchers",         // name & placenames (4)
"pitches",          // name & placenames (3)
"pitter",           // name & placenames (2)

// PL
"plain",            // placenames (268)
"plains",           // standalone & placenames (35)
"plant",            // name & placenames (58)
"plantations",      // standalone & placenames (365)
"planter",          // name & placename
"planting",         // name & placenames (66)
"plants",           // name & placenames (11)
"plaster",          // name & placenames (5)
"plasters",         // name & placename
"plateau",          // name & placenames (3)
"platinum",         // name & placenames (4)
"playground",       // standalone & placenames (4)
"pluck",            // name & placenames (5)
"plum",             // name & placenames (30)
"plumb",            // name & placenames (11)
"plumber",          // name & placenames (3)
"plume",            // name & placenames (6)
"plump",            // name & standalone & placenames (9)
"plumtree",         // name & placenames (25)
"pluto",            // name & placenames (5)

// PO
"pocket",           // standalone & placenames (16)
"pod",              // name & placenames (3)
"point",            // placenames (1k+)
"poland",           // name & placenames (4)
"poles",            // name & placenames (16)
"poll",             // placenames (195)
"polo",             // name & placenames (11)
"ponder",           // name & placenames (4)
"pool",             // placenames (1k+)
"pools",            // placennames (57)
"poor",             // name & placenames (39)
"pops",             // name
"porcupine",        // standalone & placenames (2)
"pore",             // name
"portal",           // name & placenames (17)
"porters",          // standalone & placenames (25)
"ports",            // name & placenames (8)
"portugal",         // name & placenames (8)
"post",             // placenames (126)
"postern",          // standalone & placenames (14)
"pot",              // placenames (220)
"potash",           // name & standalone & placenames (7)
"pothole",          // standalone
"pots",             // standalone & placenames (21)
"pound",            // standalone & placenames (125)
"pounds",           // name & placenames (4)
"pout",             // name & placenames (3)

// PR
"pram",             // name
"pre",              // name & placenames (32)
"premier",          // name & placenames (13)
"presser",          // name
"pressing",         // name & placename
"prestige",         // name & placename
"presto",           // name & placenames (2)
"prev",             // name
"price",            // name & placenames (42)
"priest",           // name & standalone & placenames (73)
"priestly",         // name & placenames (3)
"primal",           // name
"primes",           // name & placenames (2)
"primrose",         // name & standalone & placenames (88)
"primroses",        // standalone & placename
"princes",          // name & standalone & placenames (60)
"princess",         // name & placenames (103)
"principe",         // name & placename
"printers",         // name & placenames (15)
"prion",            // standalone & placenames (2)
"priors",           // placenames (86)
"priory",           // placenames (224)
"pristine",         // name
"procter",          // name & placenames (7)
"proctor",          // name & placenames (25)
"prod",             // name & placename
"prof",             // name
"prole",            // name & placename
"proles",           // name
"prom",             // name & placename
"promise",          // name
"prong",            // name
"prophet",          // name & placenames (2)
"prospect",         // standalone & placenames (72)
"prosper",          // name & standalone & placenames (6)
"prosperity",       // name & placename
"provence",         // name & placenames (7)
"proverbs",         // name
"providence",       // name & standalone & placenames (29)
"provost",          // name & placenames (69)
"prow",             // name & placename
"prows",            // name
"prox",             // name
"prude",            // name
"prune",            // name & placenames (2)
"pry",              // name & placenames (14)

// PS
"psalm",            // name
"psalms",           // name

// PU
"pulling",          // name & placenames (3)
"pumpkin",          // name & placenames (2)
"punchbowl",        // standalone & placenames (8)
"punches",          // name & placename

// PY
"pyres",            // name
"pythagoras",       // name

// Q
"quack",            // name & placename
"quadrant",         // placenames (199)
"quail",            // name & placenames (19)
"quaker",           // name & placenames (16)
"quakers",          // name & placenames (17)
"quarrels",         // name & placename
"quarry",           // name & placenames (283)
"quarter",          // standalone & placenames (51)
"quarters",         // name & placenames (10)
"quarts",           // standalone & placename
"quartz",           // name & placenames (5)
"quay",             // placenames (278)
"quays",            // standalone & placenames (17)
"queen",            // name & placenames (322)
"queens",           // standalone & placenames (111)
"queer",            // name & placename
"quelch",           // name & placename
"quell",            // name & placenames (4)
"quested",          // name & placenames (2)
"quick",            // standalone & placenames (14)
"quicksets",        // standalone
"quill",            // name & standalone & placenames (5)
"quills",           // standalone
"quilt",            // name & placenames (2)
"quilter",          // name & placenames (8)
"quince",           // name & standalone & placenames (14)

// RA
"rabat",            // name
"rabbi",            // name
"rac",              // name
"racy",             // name
"raff",             // name
"raft",             // name & placenames (2)
"rafter",           // name & placename
"rag",              // name & placenames (21)
"rags",             // standalone & placenames (6)
"raider",           // name & placename
"rainbow",          // name & placenames (36)
"rainbows",         // name & placename
"rains",            // name & placenames (3)
"rake",             // name & standalone & placenames (86)
"raker",            // name & placenames (2)
"rakers",           // name & placenames (2)
"rakes",            // name & standalone & placenames (19)
"ramble",           // name & placename
"rambler",          // name & placenames (5)
"rami",             // name & placename
"ramus",            // name & placenames (2)
"rands",            // name & placenames (8)
"ranger",           // name & placenames (12)
"racecourse",       // standalone & placenames (27)
"rad",              // name & placenames (6)
"radian",           // name & placename
"radiance",         // name & placename
"radion",           // name
"radish",           // name & placenames (3)
"radix",            // name
"radon",            // name
"railway",          // placenames (201)
"rain",             // name & placenames (10)
"raise",            // standalone & placenames (14)
"raisin",           // name
"ramadan",          // name
"ramp",             // name & placenames (14)
"rams",             // name & placenames (30)
"ran",              // name & placename
"rand",             // name & standalone & placenames (17)
"rang",             // name
"rash",             // name & placenames (12)
"rats",             // name & placenames (5)
"raves",            // name
"raw",              // standalone & placenames (16)
"rayon",            // name & placenames (2)

// RE
"reach",            // placenames (298)
"read",             // name & placenames (30)
"real",             // name & placenames (5)
"reaper",           // name & placenames (6)
"rebel",            // name & placename
"rebut",            // name
"rector",           // name & placenames (7)
"rectory",          // placenames (85)
"red",              // name & standalone & placenames (534)
"refuge",           // standalone & placenames (2)
"reg",              // name & placenames (4)
"regency",          // standalone & placenames (24)
"regent",           // name & placenames (73)
"regatta",          // name & placenames (5)
"regiment",         // placenames (7)
"regis",            // name & placenames (54)
"rejoice",          // name
"relay",            // name & placenames (2)
"remnant",          // name & placename
"res",              // name
"reservoir",        // placenames (906)
"reservoirs",       // placenames (37)
"revival",          // name & placename

// RH
"rhapsody",         // name & placenames (2)
"rhino",            // name & placename
"rhyme",            // name & placename
"rhymes",           // name & standalone

// RI
"rich",             // name & placenames (13)
"richer",           // name & placenames (3)
"riches",           // name & placenames (4)
"ride",             // placenames (261)
"rides",            // name & placenames (4)
"ridge",            // placenames (459)
"ridges",           // name & placenames (13)
"riding",           // name & placenames (94)
"ridings",          // name & placenames (45)
"rife",             // name & placenames (2)
"rings",            // name & placenames (14)
"ringway",          // standalone & placenames (30)
"rink",             // name & placenames (10)
"rinks",            // name & placenames (3)
"rise",             // placenames (1k+)
"rising",           // name & placenames (30)
"riverbank",        // standalone & placenames (19)
"riverbanks",       // standalone & placename
"riverhead",        // standalone & placenames (8)
"rivers",           // standalone & placenames (41)
"riverway",         // standalone & placenames (3)

// RJ
"rj",               // name

// RO
"roach",            // name & standalone & placenames (25)
"roaches",          // standalone & placenames (5)
"roads",            // name & placenames (52)
"roate",            // name
"robbers",          // name & placename
"robe",             // name & placename
"robes",            // name & placename
"robins",           // name & placenames (44)
"rockers",          // name & placename
"rocket",           // name & placenames (11)
"rococo",           // name
"rod",              // name & placenames (13)
"rode",             // name & standalone & placenames (17)
"rods",             // name & placenames (5)
"roe",              // name & placenames (75)
"roes",             // name & placenames (2)
"rom",              // name & placenames (4)
"romaine",          // name & placenames (2)
"rook",             // name & placenames (47)
"rooker",           // name & placenames (3)
"rooks",            // name & placenames (22)
"roomy",            // name
"ropes",            // name & placenames (8)
"ropewalk",         // standalone & placenames (8)
"roping",           // name & placename
"rosary",           // name
"rosebud",          // name & placenames (4)
"rosebush",         // name & standalone & placenames (4)
"rosemary",         // name & standalone & placenames (33)
"roses",            // name & placenames (3)
"rosewood",         // name & standalone & placenames (23)
"rosy",             // name & placenames (5)
"rotary",           // name & placenames (10)
"rotunda",          // name & placenames (2)
"rouge",            // name & placename
"rough",            // placenames (640)
"roughs",           // standalone & placenames (20)
"roundhouse",       // standalone & placenames (14)
"rouse",            // name & placenames (14)
"rover",            // name & placenames (5)
"rovers",           // name & placename (2)
"rox",              // name & placenames (2)
"roam",             // name & placenames (4)
"roar",             // name & placenames (5)
"rock",             // placenames (936)
"rocks",            // placenames (379)
"roles",            // name & placename
"rolex",            // name
"rolls",            // name & placenames (23)
"rolly",            // name
"roly",             // name
"romania",          // name
"rookery",          // placenames (81)
"rooms",            // name & standalone & placenames (6)
"roost",            // name & placenames (11)
"rogue",            // name & placenames (4)
"rogues",           // name & placenames (5)
"rosier",           // name & placenames (8)
"round",            // placenames (230)
"rounding",         // name & placenames (3)
"rounds",           // name & placenames (12)
"row",              // placenames (1k+)
"rower",            // name & placenames (2)
"rowing",           // name & placename
"royal",            // name & placenames (417)
"royalty",          // name & placenames (9)

// RU
"ruck",             // name & placenames (9)
"rucks",            // name & placename
"rudder",           // name & placenames (2)
"ruddy",            // name & standalone & placenames (3)
"rude",             // name & placename
"rues",             // name & placenames (2)
"ruff",             // name & placenames (9)
"ruffer",           // name & placename
"ruffle",           // name & placename
"ruffles",          // name & placenames (3)
"ruffs",            // name & placenames (3)
"ruins",            // standalone & placenames (6)
"rune",             // name & placename
"rung",             // name
"rush",             // name & placenames (72)
"russia",           // name & placenames (5)
"rustic",           // name & placenames (9)
"rum",              // name & standalone & placenames (5)
"rumble",           // name & placenames (11)
"rumbles",          // name & placenames (3)
"rump",             // name & placename
"rumple",           // name & placename
"rumps",            // name & placename
"runway",           // standalone & placenames (3)
"ruse",             // name & placenames (2)
"rushes",           // placenames (15)
"rusk",             // name & placenames (4)
"russet",           // placenames (17)
"rust",             // name & placenames (5)
"rusty",            // name & placenames (2)

// RY
"rye",              // name & placenames (111)

// SA
"safari",           // name & placenames (2)
"sage",             // name & placenames (21)
"said",             // name & placename
"sailing",          // name & placename
"saints",           // name & placenames (215)
"sale",             // standalone & placenames (35)
"saline",           // name & placenames (7)
"saliva",           // name
"samoa",            // name & placenames (2)
"sample",           // name & placename
"sans",             // name & placenames (4)
"saturday",         // name & placenames (3)
"saucer",           // name & placenames (4)
"saw",              // name & placenames (39)
"sawmills",         // standalone & placenames (8)
"sawn",             // name & placenames (2)

// SC
"scales",           // name & standalone & placenames (25)
"schooner",         // name & placenames (10)
"scolding",         // name & placename
"scopes",           // name & placename
"scorer",           // name & placenames (3)
"scorpio",          // name & placenames (2)
"scotch",           // name & placenames (45)
"scout",            // name & standalone & placenames (41)
"scrape",           // name & placenames (7)
"scraper",          // name & placenames (3)
"scar",             // placenames (274)
"scarf",            // name & placenames (19)
"schools",          // name & placenames (129)
"schoolyard",       // standalone & placename
"score",            // standalone & placenames (36)
"scotland",         // name & placenames (64)
"screen",           // standalone & placenames (2)

// SE
"seabirds",         // standalone
"seagull",          // name & placenames (4)
"seal",             // standalone & placenames (48)
"seals",            // name & placenames (10)
"seam",             // name & placename
"seaman",           // name & placenames (10)
"seamen",           // name & placename
"sears",            // name & placenames (4)
"seas",             // name & placenames (6)
"seascape",         // standalone
"seater",           // name & standalone & placenames (2)
"seaward",          // name & placenames (12)
"seaway",           // standalone & placenames (10)
"seaways",          // standalone
"sedan",            // name & standalone & placenames (3)
"seed",             // standalone & placenames (16)
"seedy",            // name & placenames (3)
"seer",             // name & placename (5)
"seers",            // name & placenames (2)
"seething",         // standalone & placenames (10)
"selves",           // name & placenames (2)
"sepia",            // name & placenames (2)
"sepulchre",        // name & placenames (5)
"sequoia",          // name & placenames (4)
"serai",            // name
"seraphim",         // name & placenames (2)
"serb",             // name
"serenade",         // name & placename
"serendipity",      // name & placename
"serene",           // name & placename
"serenity",         // name & placenames (4)
"sergeant",         // name & placenames (14)
"serif",            // name & placename
"sermon",           // name & placenames (4)
"sermons",          // name & placename
"serpentine",       // standalone & placenames (19)
"setter",           // name & standalone & placenames (18)
"setters",          // name & placenames (3)
"settler",          // name & placename
"sewer",            // name & placenames (4)
"sexton",           // name & placenames (11)
"seaside",          // standalone & placenames (15)
"seat",             // standalone & placenames (64)
"self",             // name & placenamess (5)
"sellers",          // name & placenames (6)
"selling",          // name & placenames (3)
"sells",            // name & placenames (3)
"send",             // standalone & placenames (8)
"senegal",          // name
"sentry",           // standalone & placenames (9)
"september",        // name & placenames (3)
"sesame",           // name & placename
"sessions",         // name & placenames (4)
"settle",           // standalone & placenames (24)
"settles",          // name & placename
"seven",            // name & placenames (130)
"severs",           // name & placenames (4)
"seward",           // name & placenames (7)

// SH
"shack",            // name & placenames (2)
"shackle",          // name & placenames (2)
"shaded",           // name
"shader",           // name & standalone & placenames (2)
"shady",            // name & placenames (18)
"shaft",            // name & placenames (13)
"shaggy",           // name & placenames (2)
"shaker",           // name & palcenames (3)
"shakier",          // name
"shaman",           // name
"shambles",         // standalone & placenames (7)
"shames",           // name
"shandy",           // name & placename
"shank",            // name & placenames (23)
"shanks",           // name & placenames (12)
"shanty",           // name & placename
"shard",            // name & placenames (10)
"sharpness",        // standalone & placenames (5)
"shatter",          // name & placenames (2)
"shawl",            // name & standalone & placename (2)
"sheaf",            // name & placenames (15)
"shearer",          // name & placenames (10)
"shearing",         // name & placenames (11)
"sheaves",          // name & placenames (2)
"sheen",            // name & standalone & placenames (25)
"sheens",           // name & placenames (2)
"sheepfold",        // standalone & placenames (10)
"sheering",         // standalone & placenames (11)
"sheik",            // name
"shekel",           // name
"shekels",          // name
"shell",            // standalone & placenames (33)
"sheriff",          // name & placenames (42)
"sheriffs",         // name & placenames (10)
"shuck",            // name & placename
"shun",             // name & placenames (16)
"shyer",            // name
"shale",            // name & placenames (10)
"sharp",            // name & placenames (38)
"sharps",           // name & placenames (12)
"shat",             // name
"shave",            // name & placenames (9)
"shaver",           // name & placename
"shavers",          // name & placename
"shaves",           // name & placenames (3)
"shear",            // name & placenames (17)
"shears",           // name & placenames (14)
"sheath",           // name & placenames (3)
"sheep",            // placenames (92)
"sheet",            // standalone & placenames (12)
"sheets",           // name & placenames (2)
"shelf",            // standalone & placenames (15)
"shelt",            // name & placename
"shepherd",         // name & placenames (39)
"shepherds",        // name & standalone & placenames (70)
"sherbert",         // name
"shield",           // name & placenames (42)
"shields",          // name & placenames (25)
"shilling",         // name & placenames (14)
"shim",             // name & placename
"shimmy",           // name
"shin",             // name  & placenames (9)
"shines",           // name
"shingle",          // name & placenames (12)
"shingler",         // name & placename
"shining",          // name & placenames (8)
"shiny",            // name & placename
"shipping",         // standalone & placenames (3)
"shipwright",       // name & placenames (3)
"shire",            // name & standalone & placenames (61)
"shires",           // name & placenames (18)
"shirk",            // name & placename
"shisha",           // name
"shiver",           // name & placename
"shivers",          // name & placename
"shivery",          // name & placenames (3)
"shoals",           // name & standalone & placenames (9)
"shoemaker",        // name & placenames (5)
"shone",            // name & placenames (3)
"shoo",             // name
"shooter",          // name & placenames (9)
"shop",             // standalone & placenames (37)
"shoreland",        // name & placenames (2)
"shores",           // name & placenames (8)
"shoreside",        // standalone & placenames (2)
"shorn",            // name & placenames (3)
"short",            // name & placenames (143)
"shorten",          // name & placenames (4)
"shorty",           // name
"shoveller",        // name & placename
"showering",        // name & placenames (2)
"shrapnel",         // name & placenames (2)
"shrubbery",        // standalone & placenames (49)
"shutter",          // name & placenames (5)

// SI
"sibyl",            // name
"silica",           // name & placenames (3)
"silk",             // name & placenames (34)
"silks",            // name & placename
"silky",            // name & placename
"sill",             // name & placenames (2)
"sills",            // name & placenames (6)
"silo",             // name & placenames (3)
"silver",           // name & placenames (176)
"silvers",          // name & placenames (4)
"simian",           // name
"simmer",           // name & placename
"simmers",          // name & placename
"singe",            // name & placename
"singers",          // name & placenames (5)
"singleton",        // name & standalone & placenames (33)
"sinks",            // name & placenames (5)
"sip",              // name
"sippy",            // name
"sir",              // name
"sired",            // name
"sires",            // name & placename
"sirius",           // name & placenames (7)
"sis",              // name
"sissy",            // name & placename
"sicker",           // name
"sickle",           // name & placenames (4)
"sickles",          // name & placenames (2)
"side",             // placenames (514)
"sides",            // name & placenames (5)
"sideway",          // standalone & placenames (2)
"siege",            // name & placename
"sienna",           // name & placenames (5)
"sierra",           // name & placenames (3)
"sieve",            // name & placename
"sigma",            // name & placename
"signet",           // standalone & placenames (3)
"sim",              // name & placenames (12)
"sine",             // name & placenames (4)
"singer",           // standalone & placenames (11)
"sins",             // name
"sire",             // name & placename
"sites",            // name & placename
"situ",             // name & placename

// SK
"skew",             // name & placenamese (12)
"skiff",            // name & placenames (4)
"skillet",          // name & placename
"skipper",          // name & placnames (14)
"skiver",           // name & placename
"skylark",          // name & standalone & placenames (23)
"skier",            // name & placename
"sky",              // name & placenames (14)

// SL
"slack",            // name & placenames (203)
"slacks",           // name & placenames (11)
"slake",            // name & placenames (5)
"slang",            // name & placenames (6)
"slate",            // name & placenames (48)
"slates",           // name & placenames (11)
"slaughter",        // name & placenames (15)
"slav",             // name
"slaw",             // name
"slay",             // name & placenames (6)
"sled",             // name & standalone & placenames (10)
"sledge",           // name & placenames (5)
"sleek",            // name
"sleigh",           // name & placenames (7)
"sleight",          // name & standalone & placenames (10)
"sleights",         // name & standalone & placenames (14)
"slew",             // name & placenames (7)
"slickly",          // standalone & placename
"slider",           // name & placename
"slim",             // name & placenames (3)
"sling",            // name & standalone & placenames (13)
"slinger",          // name & placenames (2)
"slip",             // placenames (40)
"slipper",          // name & placenames (10)
"slippers",         // name & placenames (2)
"slippy",           // name & placename
"slipway",          // standalone & placenames (5)
"slips",            // name & placenames (5)
"slits",            // standalone
"sloop",            // name & placenames (2)
"sloppy",           // name & placenames (2)
"slough",           // name & standalone & placenames (33)
"sly",              // name & placenames (8)

// SM
"smalls",           // name & placenames (3)
"smiler",           // name & placename
"smiles",           // name & placename
"smily",            // name
"smite",            // name & placenames (4)
"smithy",           // standalone & placenames (119)
"smock",            // name & placenames (9)
"smokey",           // name & placenames (3)
"smugglers",        // standalone & placenames (20)

// SN
"snail",            // placenames (14)
"snails",           // placenames (9)
"snake",            // placenames (23)
"snap",             // standalone & placenames (5)
"snapper",          // name & standalone & placenames (2)
"snare",            // name & placenames (3)
"snipe",            // name & standalone & placenames (30)
"snipes",           // name & placenames (4)
"snow",             // name & placenames (40)
"snowball",         // name & placenames (4)
"snowdrop",         // name & placenames (23)

// SO
"soar",             // standalone & placenames (24)
"sob",              // name
"socks",            // name & placename
"somalia",          // name
"son",              // name
"sos",              // name
"sound",            // placenames (196)
"south",            // placenames (1k+)
"southern",         // placenames (56)
"southward",        // name & standalone & placenames (11)
"sovereign",        // name & standalone & placenames (28)
"sow",              // name & placenames (18)
"sorrels",          // name & standalone & placename
"sorrow",           // name & placename
"sorrows",          // name & placename
"soso",             // name
"souk",             // name
"sour",             // name & placenames (10)

// SP
"spa",              // placenames (99)
"spade",            // name & placenames (5)
"sparkle",          // name
"sparrow",          // name & standalone & placenames (50)
"sparrows",         // standalone & placenames (13)
"spear",            // name & placenames (15)
"speedway",         // name & standalone & placenames (2)
"spiller",          // name & placenames (2)
"spillers",         // name & placename
"spilling",         // name & placename
"spires",           // name & placenames (16)
"spittle",          // name & placenames (8)
"splash",           // name & placenames (7)
"spoor",            // name & placename
"spore",            // name & placename
"spain",            // name & placenames (9)
"spice",            // name & placenames (4)
"spike",            // name & placenames (5)
"spikes",           // name & placenames (2)
"spinner",          // name & standalone & placenames (12)
"spinney",          // name & placenames (1k+)
"spinning",         // name & placenames (19)
"splendid",         // name
"splendor",         // name
"splendour",        // name
"sports",           // name & placenames (108)
"sportsfield",      // standalone & placename
"sportsman",        // name & placenames (4)
"sprays",           // standalone & placenames (3)
"spree",            // name
"spring",           // placenames (945)
"springs",          // name & placenames (132)
"springwater",      // name & placenames (9)
"sprite",           // name & placenames (2)
"spruce",           // name & standalone & placenames (39)
"spry",             // name & placenames (3)
"spur",             // name & placenames (88)
"spurn",            // standalone & placenames (8)
"spurs",            // name & placenames (2)

// SQ
"squalls",          // name & placename
"square",           // placenames (1k+)
"squire",           // name & placenames (32)
"squires",          // name & placenames (35)
"squirrel",         // name & placenames (37)
"squirrels",        // standalone & placenames (19)

// ST
"stellar",          // name & placename
"stevia",           // name
"stile",            // name & placenames (93)
"stiles",           // name & placenames (19)
"stim",             // name
"stirrup",          // name & placenames (8)
"stoat",            // name & placenames (4)
"stockhouse",       // name & placenames (4)
"stokes",           // name & placenames (27)
"stomp",            // name & placename
"stone",            // name & placenames (588)
"stoner",           // name & placenames (3)
"stoners",          // name & placenames (2)
"stones",           // name & placenames (150)
"stoney",           // name & placnames (123)
"stoop",            // name & standalone & placenames (11)
"stoops",           // name & placenames (6)
"stopper",          // name & placenames (3)
"storey",           // name & placenames (20)
"stork",            // name & placenames (4)
"storks",           // name & placename
"stormer",          // name & placenames (2)
"stormy",           // name & placenames (7)
"stout",            // name & standalone & placenames (11)
"stradling",        // name & placenames (7)
"strait",           // name & placenames (8)
"straits",          // name & standalone (LA10) & placenames (11)
"strand",           // name & placenames (89)
"strands",          // standalone & placenames (3)
"strata",           // name & placenames (3)
"strawberry",       // name & placenames (59)
"straws",           // name & placenames (2)
"stray",            // name & placenames (17)
"stream",           // standalone (TA4) & placenames (145)
"streams",          // name & placenames (5)
"stretcher",        // name & placename
"stride",           // name & placename (4)
"striker",          // name & placenames (1)
"stripling",        // name & placename
"strode",           // name & standalone & placenames (18)
"strop",            // name & placename
"strut",            // name & placename
"stub",             // name & placenames (10)
"stubbing",         // name & placenames (21)
"stubbles",         // name & placenames (2)
"stubby",           // name & placenames (5)
"stump",            // name & placenames (13)
"stumps",           // name & placenames (8)
"sturdy",           // name & placenames (7)
"sturgeon",         // name & placenames (6)
"styes",            // name & placenames (4)
"styles",           // name & placenames (15)
"styx",             // name
"stab",             // standalone & placenames (4)
"stables",          // name & placenames (35)
"stack",            // placenames (315)
"stacks",           // name & placenames (64)
"staggers",         // name & placename
"stain",            // name & placenames (7)
"staining",         // standalone & placenames (10)
"stains",           // name & placenames (3)
"stairgate",        // standalone
"stakes",           // name & standalone & placenames (12)
"stalk",            // name & placenames (2)
"stalker",          // name & placenames (5)
"stall",            // name & placenames (8)
"stalling",         // name & placenames (4)
"stallion",         // name & placenames (3)
"stalls",           // name & placenames (8)
"stammer",          // name & placename
"stammers",         // name & standalone & placenames (8)
"stamp",            // name & placenames (9)
"stand",            // standalone & placenames (25)
"standard",         // standalone & placenames (20)
"standards",        // standalone & placenames (5)
"standfast",        // name & placenames (4)
"staple",           // name & placenames (44)
"staplers",         // standalone & placenames (8)
"staples",          // name & placenames (15)
"star",             // name & placenames (98)
"stark",            // name & placenames (11)
"starlight",        // name & placenames (3)
"starling",         // name & standalone & placenames (31)
"starlings",        // name & placenames (6)
"starring",         // name & placenames (5)
"starry",           // name & placenames (3)
"stars",            // name & placenames (10)
"starts",           // name & placenames (4)
"stately",          // name & placename
"station",          // placenames (777)
"stave",            // name & standalone & placenames (3)
"staves",           // name & placenames (2)
"stead",            // name & standalone & placenames (25)
"steamer",          // name & placenames (6)
"steed",            // name & placenames (4)
"steeds",           // name & placenames (5)
"steel",            // name & placenames (65)
"steels",           // name & placenames (2)
"steep",            // standalone & placenames (32)
"steeples",         // standalone & placenames (3)
"steers",           // name & placenames (6
"stent",            // name & placenames (6)
"stepper",          // name & placename
"steppes",          // standalone & placenames (6)
"stepping",         // name & placenames (15)
"sterling",         // name & placenames (18)
"stern",            // name & placenames (3)
"sterns",           // name & placenames (2)
"stew",             // name & placenames (12)
"steward",          // name & placenames (22)
"stewards",         // standalone & placenames (11)
"sticker",          // name & placenames (4)
"stilts",           // name & placename
"sting",            // name & placenames (2)
"stinger",          // name & placename
"stitch",           // name & placenames (6)
"stock",            // standalone & placenames (82)
"stocking",         // name & placenames (38)
"stocks",           // name & placenames (60)
"stores",           // name & placenames (11)
"storm",            // name & placenames (6)
"stove",            // standalone & placenames (5)
"strange",          // name & placenames (9)
"streets",          // name & placenames (6)
"strife",           // name & placenames (3)
"strip",            // placenames (593)
"stripe",           // name & placenames (11)
"strips",           // standalone & placenames (54)
"strokes",          // name & placename
"stroll",           // name & placename
"stung",            // standalone & placename

// SU
"sublet",           // name
"sublime",          // name
"sucre",            // name
"suede",            // name
"sues",             // name
"suet",             // name & placename
"suety",            // name
"suey",             // name
"sugarloaf",        // standalone & placenames (7)
"sullen",           // name
"sully",            // name & standalone & placenames (16)
"sultana",          // name
"sultanas",         // name
"sum",              // name
"summed",           // name
"summer",           // name & placenames (116)
"summerhouse",      // standalone & placenames (21)
"summerly",         // name & placename
"summers",          // name & placenames (23)
"summons",          // name & placename
"sump",             // name & placename
"sunbeam",          // name & standalone & placenames (10)
"sung",             // name & placename
"sunken",           // name & placenames (4)
"sunlight",         // standalone & placenames (8)
"sunray",           // name & placename
"suns",             // name
"sunshine",         // name & placenames (13)
"sup",              // name
"sushi",            // name
"suss",             // name
"suave",            // name
"success",          // name & placename
"suckling",         // name & placenames (6)
"sudan",            // name & placenames (2)
"sudden",           // standalone & placenames (2)
"sugar",            // name & placenames (32)
"sugars",           // name & placenames
"sulphur",          // name
"summit",           // standalone & placenames (22)
"sumo",             // name
"sun",              // name & placenames (78)
"sunday",           // name & placenames (5)

// SW
"swamp",            // name & placenames (7)
"sway",             // name & standalone & placenames (8)
"swears",           // name
"sweden",           // name & placenames (10)
"sweet",            // placenames (56)
"sweets",           // name & placenames (5)
"swell",            // standalone & placenames (10)
"swift",            // name & standalone & placenames (33)
"swifts",           // standalone & placenames (8)
"swinger",          // name & placename
"swine",            // standalone & placenames (32)
"swords",           // name & placenames (2)
"swan",             // name & placenames (141)
"sward",            // name & placenames (6)
"sweeter",          // name & placename
"sweetie",          // name
"sweetness",        // name
"switchback",       // standalone & placenames (5)
"switcher",         // name & placename

// SY
"sycamore",         // name & standalone & placenames (54)
"symphonia",        // name
"symphony",         // name & placenames (6)
"synod",            // standalone & placenames (2)
"syphon",           // name & placename
"syria",            // name

// T
"tabasco",          // name
"tabby",            // name & placenames (3)
"tabernacle",       // name & placenames (10)
"tachi",            // name
"tailor",           // name & placenames (8)
"tailors",          // standalone & placenames (3)
"tak",              // name & placenames (2)
"talisman",         // name & placenames (12)
"talon",            // name & placenames (4)
"tame",             // name & placenames (28)
"tamer",            // name & placenames (3)
"tames",            // name
"tan",              // name & placenames (187)
"tango",            // name
"tangy",            // name & placename
"tankard",          // name & placenames (4)
"tanks",            // name & placename
"tanner",           // name & placenames (31)
"tanners",          // name & placenames (37)
"tannery",          // name & placenames (21)
"tannoy",           // name & placename
"taper",            // name & placenames (3)
"taphouse",         // name & placenames (5)
"tapping",          // name & placenames (3)
"taps",             // name & placename
"tar",              // name & standalone & placenames (18)
"tardy",            // standalone & placename
"tariff",           // name & placenames (2)
"tarn",             // name & placenames (264)
"tarns",            // standalone & placenames (9)
"tarragon",         // name & placenames (7)
"tart",             // name & placenames (3)
"tartan",           // name & placenames (3)
"tartar",           // name & placenames (3)
"tarty",            // name & placenames (2)
"tarzan",           // name
"tat",              // name & placenames (2)
"tatters",          // name
"tattle",           // name & placenames (4)
"taunt",            // name & placename
"taverna",          // name
"tawny",            // name & placenames (15)
"tables",           // name & placename
"tack",             // name & placenames (6)
"tally",            // name & placenames (13)
"taverner",         // name & placenames (7)
"taverners",        // standalone & placenames (11)
"teak",             // name & placenames (4)
"teal",             // name & placenames (20)
"teardrop",         // name & placename
"teas",             // name & placenames (5)
"teats",            // name & placenames (2)
"tellers",          // name & placename
"telly",            // name
"tempest",          // name & placenames (17)
"templar",          // name & placenames (22)
"temples",          // name & placenames (3)
"tennant",          // name & placenames (13)
"tenner",           // name & placename
"tenor",            // name & placenames (2)
"tequilla",         // name
"termini",          // name
"tern",             // name & placenames (28)
"terrace",          // placenames (1k+)
"terrier",          // name & placenames (2)
"terriers",         // standalone & placenames (3)
"tea",              // name & placenames (10)
"tears",            // name & placenames (2)
"tech",             // name & placename
"tee",              // name & placenames (10)
"teed",             // name
"tel",              // name & placename
"temperance",       // name & placenames (13)
"temperence",       // name
"tenant",           // name & placenames (8)
"thorns",           // name & standalone & placenames (92)
"thoroughfare",     // standalone & placenames (6)
"throne",           // name & placenames (3)
"thu",              // name
"thursday",         // name & placename
"thatch",           // name & placenames (20)
"thatcher",         // name & placenames (13)
"thaw",             // name & placename
"thistle",          // name & placenames (57)
"thong",            // name & standalone & placenames (4)
"thorn",            // name & standalone & placenames (152)
"thornbush",        // standalone & placenames (7)
"thrasher",         // name & placenames (3)
"thresh",           // name & placename
"thresher",         // name & placenames (8)
"threshold",        // standalone & placenames (3)
"thrift",           // name & placenames (24)
"thrill",           // name & placename
"thrower",          // name & placenames (4)
"thrums",           // standalone & placenames (4)
"thrush",           // name & placenames (18)
"thumpers",         // standalone
"thunder",          // name & placenames (10)
"thyme",            // name & placenames (11)
"tiara",            // name
"tick",             // name & placenames (7)
"tickler",          // name & placename
"tidings",          // name & placename
"tig",              // name
"tiller",           // name & placenames (7)
"tilling",          // name & placenames (7)
"tilt",             // name & placenames (12)
"tilts",            // standalone & placenames (2)
"timbers",          // name & placenames (15)
"tingle",           // name & placenames (9)
"tinkle",           // name & placenames (2)
"tinny",            // name & placename
"tinsel",           // name & placenames (2)
"tipper",           // name & placenames (7)
"tipple",           // name & placename
"tipples",          // name & placename
"tiro",             // name
"tit",              // name & placename
"tithe",            // name & placenames (49)
"tittle",           // name & placenames (2)
"titty",            // name & placenames (2)
"tive",             // name
"tidy",             // name & placenames (3)
"tier",             // name
"tills",            // name & placenames (2)
"times",            // name & placenames (4)
"timings",          // name
"tin",              // name & placenames (12)
"tinker",           // name & placenames (38)
"tipping",          // name & placenames (10)
"tiptoe",           // standalone & placenames (7)
"tj",               // name
"tock",             // name & placename
"toddy",            // name & placenames (2)
"todo",             // name
"tofu",             // name
"tomb",             // name & placename
"tombs",            // name & placename
"tome",             // name
"tomes",            // name
"toner",            // name & placenames (4)
"toon",             // name & placenames (4)
"topaz",            // name & placenames (8)
"topper",           // name & placename
"topsy",            // name
"tornado",          // name & placenames (2)
"torrent",          // name & placename
"tot",              // name & placenames (6)
"tote",             // name & standalone & placenames (9)
"totter",           // name & placenames (2)
"tottle",           // name & placenames (4)
"totty",            // name & placenames (2)
"touche",           // name
"touches",          // name & placenames (4)
"touchstone",       // name & placenames (5)
"tout",             // name & placenames (10)
"tows",             // name & placenames (2)
"toes",             // name & placename
"togo",             // name & placenames (2)
"toks",             // name
"toll",             // placenames (138)
"tollgate",         // standalone & placenames (25)
"tollgates",        // standalone
"ton",              // name & placenames (46)
"tone",             // standalone & placenames (10)
"tong",             // name & standalone & placenames (31)
"tongs",            // name & placenames (4)
"toot",             // name & placenames (10)
"top",              // placenames (477)
"topping",          // name & placenames (13)
"tops",             // name & placenames (16)
"tor",              // name & placenames (269)
"torah",            // name & placenames (10)
"torch",            // name & placenames (3)
"tory",             // name & placenames (8)
"toucan",           // standalone & placenames (3)
"touch",            // standalone & placenames (10)
"tow",              // name & placenames (18)
"toward",           // standalone & placenames (8)
"tower",            // placenames (204)
"towers",           // names & placenames (47)
"town",             // placenames (629)
"towns",            // name & placenames (15)
"towpath",          // standalone & placenames (10)
"trammel",          // name & placename
"tramp",            // name & placename
"tranny",           // name
"traverse",         // name & placenames (3)
"treacle",          // name & placenames (5)
"treble",           // name & placenames (4)
"trek",             // name & placename
"trench",           // name & standalone & placenames (30)
"tri",              // name & placenames (24)
"trickey",          // name & placenames (4)
"trident",          // name & standalone & placenames (8)
"trimming",         // name & placenames (3)
"trace",            // name & placenames (2)
"trackside",        // standalone & placenames (2)
"trader",           // name & placenames (2)
"trak",             // name
"tram",             // name & placenames (21)
"tramway",          // standalone & placenames (17)
"tranquillity",     // standalone & placenames (3)
"treasure",         // name & placenames (6)
"tree",             // placeanames (834)
"trees",            // name & placenames (142)
"triangle",         // standalone & placenames (30)
"trimmer",          // name & placenames (2)
"trinidad",         // name & placenames (7)
"triumph",          // standalone & placenames (9)
"trodden",          // name & placename
"troop",            // name & placename
"trooper",          // name & placenames (6)
"trope",            // name
"true",             // name & placenames (2)
"truly",            // name
"trunk",            // standalone & placenames (7)
"trotter",          // name & placenames (6)
"trough",           // standalone & placenames (33)
"trout",            // name & placenames (27)
"trowel",           // name & placenames (2)
"truce",            // name & placename
"trucker",          // name
"truelove",         // name & placename
"trumpet",          // name & standalone & placenames (5)
"trumps",           // name & placenames (8)
"trundle",          // name & placenames (8)
"tripe",            // name & placename
"trippy",           // name
"troll",            // name & placenames (3)
"trombone",         // name
"tsar",             // name
"tuba",             // name
"tubby",            // name & placenames (5)
"tuber",            // name
"tuft",             // name & placenames (5)
"tufts",            // name & placenames (6)
"tugs",             // name
"tulip",            // name & placenames (18)
"turk",             // name & placenames (7)
"turns",            // name & placename
"tusk",             // name & placename
"tut",              // name & placenames (4)
"tuesday",          // name & placenames (2)
"tumble",           // name & standalone & placenames (7)
"tumbling",         // name & placenames (10)
"tundra",           // name & placenames (3)
"turbo",            // name & placename
"turks",            // name & placenames (7)
"turn",             // standalone & placenames (62)
"turp",             // name & placenames (2)
"turtle",           // name & placenames (6)
"tutor",            // name & placenames (5)
"tutu",             // name & placename
"twine",            // name & placenames (6)
"twining",          // name & placenames (7)
"twinkle",          // name
"twinning",         // name & placename
"twee",             // name & placename
"tweed",            // name & standalone & placenames (27)
"twenty",           // standalone & placenames (31)
"twins",            // name & placenames (3)
"twitchings",       // name & placename

// U
"upfield",          // name & standalone & placenames (3)
"urbane",           // name
"usher",            // name & placenames (12)
"uss",              // name
"utc",              // placenames (20)
"uti",              // name
"utopia",           // name & placenames (2)
"ultra",            // name & placenames (3)
"unicorn",          // name & placenames (18)
"unique",           // name & placename
"uphill",           // name & standalone & placenames (11)
"upper",            // placenames (1k+)

// V
"vain",             // name & placenames (6)
"vale",             // name & placenames (995)
"valency",          // name & placenames (3)
"valiant",          // name & placenames (9)
"valor",            // name & placename
"vandal",           // name
"vane",             // name & placenames (14)
"vanes",            // name
"vanity",           // name & placenames (3)
"varsity",          // standalone & placenames (6)
"vassal",           // name
"vats",             // name & placenames (5)
"vault",            // name & placenames (7)
"valentines",       // name & standalone & placenames (13)
"valley",           // placenames (921)
"valuta",           // name
"vanguard",         // standalone & placenames (10)
"vanilla",          // name & placenames (2)
"vein",             // name & placenames (2)
"velvet",           // name & placenames (8)
"venezuela",        // name & placename
"venue",            // name & placenames (5)
"versatile",        // name & placename
"vest",             // name & placename
"veal",             // name & placenames (6)
"vector",           // name & placename
"venerable",        // name & placenames (3)
"vent",             // name & placename
"verdant",          // name & placenames (5)
"verge",            // name & placename
"verger",           // name & placename
"verges",           // name & placenames (2)
"verse",            // name
"via",              // name
"viaduct",          // standalone & placenames (27)
"victorian",        // name & placenames (3)
"victory",          // name & standalone & placenames (34)
"view",             // placenames (1k+)
"vigil",            // name
"vigilant",         // name & placenames (2)
"vigilante",        // name
"viking",           // name & standalone & placenames (21)
"vile",             // name & placenames (2)
"village",          // placenames (529)
"virgin",           // name & placenames (17)
"vit",              // name
"vitae",            // name & placename
"vicarage",         // name & standalone & placenames (90)
"vicars",           // name & placenames (24)
"vigor",            // name & placenames (6)
"villas",           // name & placenames (314)
"vine",             // name & placenames (61)
"vinegar",          // name & placenames (6)
"vines",            // name & placenames (9)
"vineyard",         // name & standalone & placenames (37)
"vino",             // name
"vinter",           // name & placename
"viola",            // name & placenames (31)
"violin",           // name
"viper",            // name & placenames (2)
"vipers",           // name
"virgo",            // name & placename
"virtuoso",         // name
"virtuous",         // name
"viscount",         // name & placenames (17)
"vise",             // name
"vison",            // name
"vista",            // name & placenames (26)
"vistas",           // name
"vitality",         // name & placename
"viva",             // name & placename
"vortex",           // name & placename
"vogue",            // name & standalone & placenames (3)
"vole",             // name & standalone & placenames (5)
"volt",             // name & placename
"vowel",            // name
"vowels",           // name & placename

// W
"wa",               // name
"wacko",            // name
"wales",            // name & placenames (141)
"walk",             // placenames (1k+)
"walker",           // name & placenames (92)
"walks",            // name & placenames (38)
"wane",             // name & placename
"ward",             // name & placenames (153)
"warden",           // name & standalone & placenames (50)
"warder",           // name & placename
"wards",            // name & placenames (28)
"warns",            // name & placenames (2)
"wary",             // name & placename
"wash",             // standalone & placenames (58)
"washer",           // name & placenames (8)
"wasp",             // name & placenames (7)
"waterfall",        // name & placenames (51)
"waterfront",       // standalone & placenames (19)
"watermill",        // standalone & placenames (19)
"waters",           // name & placenames (109)
"waterway",         // standalone & placenames (10)
"waterways",        // standalone & placenames (4)
"wax",              // name & placename
"way",              // placenames (1k+)
"wayfarers",        // standalone & placenames (6)
"wayfaring",        // standalone & placenames (4)
"wayfarings",       // standalone & placename
"waymark",          // name & placename
"ways",             // name & placenames (32)
"wayside",          // standalone & placenames (19)
"wayward",          // name & placename
"wears",            // name & placenames (2)
"weaving",          // name & placenames (5)
"wednesday",        // name & placename
"wee",              // name & standalone & placenames (32)
"weeding",          // name & placename
"weeks",            // name & placenames (7)
"weights",          // name & placenames (2)
"weld",             // name & placenames (12)
"well",             // placenames (613)
"wells",            // name & placenames (205)
"wellspring",       // name & placenames (12)
"wellsprings",      // standalone & placenames (3)
"west",             // placenames (1k+)
"western",          // placenames (186)
"westside",         // standalone & placenames (14)
"wharf",            // name & standalone & placenames (283)
"wheatstone",       // name & placenames (6)
"whisker",          // name & placename
"whistle",          // name & placenames (10)
"white",            // name & placenames (833)
"whites",           // name & placenames (33)
"whitsun",          // name & placenames (5)
"wicker",           // name & standalone & placenames (7)
"wicket",           // standalone & placenames (13)
"wicking",          // name & placenames (3)
"widgeon",          // name & placenames (8)
"widgeons",         // standalone & placenames (2)
"wield",            // name & standalone & placenames (7)
"wiener",           // name
"wieners",          // name
"wig",              // name & placenames (22)
"wiggle",           // name & placenames (2)
"wild",             // name & placenames (99)
"wildcard",         // name
"wildcat",          // name & placenames (6)
"wilds",            // name & placenames (6)
"wilt",             // name
"wilts",            // name & placename
"winch",            // name & placenames (28)
"winder",           // name & standalone & placenames (19)
"windless",         // name
"windmills",        // standalone & placename
"wink",             // name
"winks",            // name & placename
"winless",          // standalone & placename
"winner",           // name & placenames (7)
"winnings",         // name & placenames (4)
"winsome",          // name
"winter",           // name & placenames (70)
"wintergreen",      // standalone & placenames (9)
"winters",          // name & standalone & placenames (12)
"wisdom",           // name & placenames (9)
"wise",             // name & placenames (22)
"witch",            // name & placenames (22)
"witcher",          // name & placenames (2)
"wither",           // name & placenames (6)
"withers",          // name & placenames (11)
"wittering",        // name & standalone & placenames (15)
"witting",          // name & placename
"wizard",           // name & placename
"wicks",            // name & placenames (21)
"wilder",           // name & placenames (5)
"will",             // name & placenames (17)
"willow",           // name & placenames (283)
"willows",          // name & standalone & placenames (65)
"wills",            // name & placenames (20)
"winded",           // standalone
"winding",          // name & placenames (25)
"windy",            // name & placenames (70)
"wing",             // name & standalone & placenames (21)
"winners",          // name & placename
"winning",          // name & placenames (8)
"wires",            // name & placename
"woodcutters",      // standalone & placenames (5)
"woods",            // name & placenames (630)
"woollen",          // name & placenames (3)
"wools",            // name & placenames (3)
"workman",          // name & placenames (2)
"worm",             // name
"worms",            // name & placename (8)
"worship",          // name & placename
"worth",            // standalone & placenames (29)
"worthy",           // name & placenames (26)
"wrench",           // name & placenames (3)
"wroth",            // name & placename
"wack",             // name
"wacker",           // name & placenames (3)
"wacks",            // name
"wadding",          // name & placename
"waddle",           // name & placename
"waddles",          // name & placenames (2)
"wader",            // name & placename
"wadi",             // name
"wafer",            // name & placenames (2)
"wager",            // name & placenames (4)
"waggle",           // name & placename
"waggon",           // name & placenames (10)
"waggoner",         // name & placenames (3)
"wail",             // name
"walkers",          // name & standalone & placenames (32)
"wallet",           // name & placenames (2)
"walling",          // name & placenames (7)
"wallop",           // name & placenames (13)
"walls",            // name & standalone & placenames (74)
"wand",             // name & placenames (6)
"wanderer",         // name & placenames (2)
"wanders",          // name & placename
"wands",            // name & placename
"wanes",            // name & placename
"wanton",           // name & placenames (3)
"warble",           // name & placename
"ware",             // name & standalone & placenames (38)
"wares",            // name & placenames (6)
"warlock",          // name & placenames (3)
"warrens",          // name & placenames (13)
"watches",          // standalone (CA12)
"watchman",         // name & placenames (7)
"waterings",        // standalone & placenames (4)
"waterlilies",      // standalone (GU51)
"waterlily",        // standalone & placenames (3)
"watt",             // name & placenames (53)
"watts",            // name & placenames (32)
"waver",            // name & standalone & placenames (11)
"weal",             // name & placenames (2)
"weald",            // name & standalone & placenames (67)
"weary",            // name & placenames (4)
"weasel",           // name & placenames (6)
"weatherhead",      // name & placenames (4)
"weatherly",        // name & placenames (4)
"weaver",           // name & standalone & placenames (52)
"weavers",          // name & standalone & placenames (59)
"webs",             // name
"wedge",            // name & placenames (7)
"wedlock",          // name & placename
"weeds",            // name & placename
"weedy",            // name & placenames (2)
"weens",            // name & placename
"weighbridge",      // standalone & placenames (6)
"weir",             // name & standalone & placenames (88)
"wellhead",         // standalone & placenames (10)
"welling",          // name & standalone & placenames (10)
"welly",            // name & placename
"westward",         // name & placenames (23)
"wetter",           // name
"whack",            // name & placenames (5)
"whale",            // standalone & placenames (34)
"whalebone",        // name & standalone & placenames (11)
"wham",             // name & placenames (17)
"whee",             // name
"wheeler",          // name & placenames (35)
"wheelers",         // standalone & placenames (21)
"wheelhouse",       // name & placenames (4)
"whetstone",        // name & standalone (N20) & placenames (24)
"whetstones",       // standalone (GL14)
"whey",             // name & placenames (3)
"whim",             // name & placenames (8)
"whippy",           // name
"whirl",            // name & placenames (3)
"whirlpool",        // standalone (PA34)
"whistler",         // name & placenames (10)
"whit",             // name & placenames (9)
"whiteness",        // standalone & placenames (8)
"whitey",           // name & placename
"whitling",         // name & placenames (2)
"whittle",          // name & standalone & placenames (47)
"whittles",         // name & placenames (6)
"whooper",          // name & placenames (2)
"woad",             // name & placenames (3)
"woe",              // name
"wolfs",            // name & placenames (4)
"womble",           // name & placename
"won",              // name
"woodcraft",        // name & placenames (2)
"woodland",         // name & standalone & placenames (153)
"woodpecker",       // standalone & placenames (25)
"woodyard",         // name & standalone & placenames (12)
"woof",             // name & placename
"wort",             // name & placenames (3)
"wrack",            // name & placename
"wraith",           // name & placename
"wrangle",          // name & standalone & placenames (15)
"wrangles",         // name & placename
"wrath",            // name & placenames (3)
"wray",             // name & standalone & placenames (32)
"wreath",           // name & placenames (3)
"wrest",            // name & placename
"wright",           // name & placenames (69)
"wry",              // name & placenames (2)

// X
"xenon",            // name

// Y
"yarn",             // name & placenames (14)
"yarrow",           // name & placenames (24)
"yea",              // name & placenames (4)
"yearling",         // name & placenames (2)
"yester",           // name & placenames (5)
"yeoman",           // name & placenames (29)
"yew",              // name & placenames (111)
"yews",             // name & placenames (16)
"yoke",             // name & standalone & placenames (8)
"yon",              // name & placenames (2)
"yore",             // name & placenames (3)
"yoyo",             // name
"yuan",             // name
"ya",               // name
"yard",             // placenames (854)
"yards",            // placenames (27)
"yawn",             // name & placename
"yell",             // standalone & placenames (12)
"yelling",          // name & placename
"yemen",            // name
"yen",              // name
"yielding",         // name & placenames (3)
"ymca",             // placenames (2)
"yoga",             // name & placename (2)
"young",            // name & placenames (73)
"younger",          // name & placenames (6)

// Z
"zambia",           // name
"zealand",          // name & placenames (15)
"zebra",            // name & placenames (2)
"zeppelin",         // name
"zinc",             // name & placenames (2)
"zen",              // name
"zenith",           // name & standalone & placename
"zephyr",           // name & placenames (2)
"zippy",            // name
"zircon",           // name & placename
"zodiac"            // name & placenames (2)
]);