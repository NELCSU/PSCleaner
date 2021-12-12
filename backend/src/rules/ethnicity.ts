/**********************************************************************
 * Pattern matches ethnicities
 **********************************************************************/
const a: string[] = [
"abayudaya",
"abazgi",
"abazin",
"abidji",
"abron",
"abure",
"acehnese",
"achi",
"acholi",
"adangbe",
"adja",
"adjarian",
"adjoukrou",
"adjukru",
"adygean",
"afrikaans",
"afrikaner",
"agaw",
"ahafo",
"ahanta",
"ahom",
"aizi",
"aja",
"ajie",
"akeu",
"akha",
"akoose",
"akuapem",
"akwamu",
"alawite",
"albanian",
"algerian",
"alibamu",
"alladian",
"alur",
"ambalavasi",
"ambonese",
"american",
"amharic",
"amis",
"amish",
"amoltepec",
"anatri",
"andalusian",
"andorran",
"angolan",
"angolar",
"anioma",
"antaifasy",
"antanosy",
"antemoro",
"aowin",
"apulian",
"arab",
"arabian",
"arabic",
"aragonese",
"arain",
"arakanese",
"aranese",
"argentine",
"arha",
"armenian",
"aro",
"aromanian",
"arpitan",
"arsi",
"aruban",
"arvanite",
"ashanti",
"assin",
"assiniboine",
"assyrian",
"asturian",
"athpare",
"atikamekw",
"atoni",
"attie",
"aukstaitian",
"australian",
"austrian",
"avar",
"avatime",
"awadhi",
"awi",
"awjila",
"ayrum",
"azorean",
"bahamian",
"bahing",
"bahnar",
"bahraini",
"bai",
"baidya",
"baishya",
"bajalan",
"bakwe",
"balangao",
"balanta",
"balearic",
"balinese",
"baloch",
"balochi",
"bamileke",
"bamum",
"banda",
"banjarese",
"bantawa",
"baoule",
"barbadian",
"baria",
"bariba",
"barthelemoise",
"barujibi",
"basilicatan",
"baster",
"bavarian",
"bawm",
"bedaria",
"bedouin",
"belarusian",
"belgian",
"bemba",
"bembe",
"bengali",
"beninese",
"berber",
"bermudian",

"betawi",
"betawian",
"bete",
"beti",
"betsileo",
"bhagalia",
"bhambi",
"bhoi",
"bhumij",
"bhutanese",
"biate",
"bikol",
"bilen",
"bishnupriya",
"bissaun",
"boer",
"bolivian",
"bolon",
"bonairian",
"boran",
"bosniak",
"bosnian",
"botswanan",
"boyanese",
"bozom",
"braber",
"brahmin",
"brazilian",
"brong",
"bru",
"bruneian",
"buddhist",
"budu",
"buginese",
"bugti",
"bukusu",
"buledi",
"bulgarian",
"burgundian",
"burmese",
"burundian",
"burushaski",
"butonese",
"bwa",
"caicos",
"calabrian",
"cambodian",
"cameroonian",
"campanian",
"canadian",
"cantabrian",
"cantonese",
"cappadocian",
"castilian",
"catalan",
"cayuga",
"chadian",
"chaha",
"chakma",
"chaldean",
"chamorro",
"chaoui",
"chechen",
"chenoua",
"cherepon",
"cherkesogai",
"cherokee",
"chewa",
"chhetri",
"chilean",
"chinese",
"chirag",
"chokri",
"chokwe",
"chontal",
"chumburung",
"chutiya",
"chuwabu",
"chūgoku",
"circassian",
"cirebonese",
"cochin",
"colognian",
"colombian",
"comoran",
"comorian",
"congolese",
"coptic",
"cordilleran",
"cornish",
"corsican",
"cossack",
"coushatta",
"cree",
"creole",
"croat",
"croatian",
"cuban",
"curacaoan",
"cuyunon",
"cypriot",
"dagaaba",
"dagomba",
"damor",
"dane",
"danish",
"dargin",
"dargwa",
"debri",
"deg",
"deori",
"dhangar",
"dholi",
"digo",
"dinka",
"djiboutian",
"dogon",
"dogra",
"dogri",
"dominican",
"dongolawi",
"dubla",
"dubli",
"dungri",

"dutch",
"dzongkha",
"ecuadorean",
"ecuadorian",
"edo",
"efutu",
"egun",
"egyptian",
"eket",
"ekoi",

"emilian",
"english",
"eritrean",
"esan",
"estonian",
"ethiopian",
"evalue",
"ewe",
"fante",
"feyli",
"finnish",
"firozkohi",
"flemish",
"fogni",
"fon",
"franconian",
"french",
"frisian",
"friulian",
"fujianese",
"fula",
"fulfulde",
"fuzhounese",
"gabol",
"gabonese",
"gaelic",
"galician",
"gambian",
"gametia",
"ganda",
"garasia",
"gascon",
"gayo",
"gayonese",
"ga–dangme",
"gbagyi",
"gbaya",
"georgian",
"german",
"ghanchi",
"ghazini",

"giay",
"gibraltarian",
"giriama",
"goffal",
"gola",
"gonja",
"gorontaloan",
"gourmanche",
"gozitan",
"greek",
"greenlander",
"greenlandic",
"grenadian",
"griko",
"groning",
"guamanian",
"guatemalan",
"guianese",
"guinean",
"gurage",
"gurma",
"guyanese",
"hadhrami",
"hadiya",
"hadiyya",
"haeke",
"hainanese",
"haitian",
"hakka",
"haratin",
"hausa",
"haveke",
"hawaiian",
"hayhurum",
"hebrew",
"hebridean",
"helenian",
"hemba",
"hemshin",
"hessian",
"hoa",
"hoklo",
"honduran",
"hongkonger",
"honichi",
"huastecan",
"huba",
"hui",
"huilliche",
"hunanese",
"hungarian",
"hutterite",
"iban",
"icelander",
"icelandic",
"idakho",
"idoma",
"ifugao",
"igbo",
"igorot",
"ika",
"ikwo",
"indian",
"indonesian",
"ingush",
"inor",
"inughuit",
"inuktitut",
"iranian",
"iranun",
"irish",
"iroquoi",
"iroquoian",
"isan",
"isu",
"isukha",
"italian",
"itawis",
"ivorian",
"ixil",
"izzi",
"jagoi",
"jalia",
"jalon",
"jamaican",
"jamshidi",
"japanese",
"jasz",
"javanese",
"jerbi",
"jew",
"jewish",
"jicarilla",
"jingpo",
"jola",
"jordanian",
"juhurim",
"jukun",
"kabardian",
"kabyle",

"kakwa",
"kalaallit",
"kalanguya",
"kalenjin",
"kamba",
"kami",
"kanembu",
"kankanaey",
"kannada",
"kannadiga",
"kansai",
"kapsiki",
"karabakhi",
"karadaghi",
"karbi",
"karenic",
"karko",
"kasa",
"kashubian",
"kataria",
"keiyo",
"kelantanese",
"keningau",
"khalpa",
"khatri",
"khayo",
"khetran",
"khezha",
"khoekhoe",
"khoja",
"kichepo",
"kikuyu",
"kilba",
"kiranti",
"kiribatian",
"kisa",
"kisan",
"kistane",
"kittitian",
"kluet",
"knanaya",
"koli",
"kom",
"komi",
"konjo",
"korean",
"kosovan",
"kosovar",
"koya",
"krache",
"krahn",
"kru",
"kubachi",
"kui",
"kuku",
"kula",
"kulung",
"kurd",
"kurdish",
"kurmanji",
"kursenieki",
"kurukh",
"kuwaiti",
"kven",
"kwa",
"kwavi",
"kyode",
"lak",
"lamaholot",
"lamba",
"lamboya",
"lampung",
"lao",
"laotian",
"latgalian",
"latvian",
"laz",
"lebanese",
"leonean",
"leonese",
"lezgian",
"liberian",
"liechtensteiner",
"ligurian",
"limba",
"limbu",
"lipovan",
"lisu",
"lithuanian",
"lorrainer",
"lotud",
"luapula",
"luba",
"luban",
"lucian",
"luganda",
"luhya",
"lukpa",
"lulua",
"luo",
"maasai",
"macanese",
"macedonian",
"madi",
"madurese",
"mafa",
"magahi",
"maharastra",
"mahishya",
"mahl",
"makassarese",
"makhuwa",
"makoa",
"makua",
"malagasy",
"malawian",
"malaysian",
"maldivian",
"malian",
"maltese",
"mambila",
"mamboru",
"manchu",
"mandailing",
"mandar",
"mandarese",
"manding",
"mandinka",
"mandja",
"mappila",
"marachi",
"marakwet",
"marama",
"maronite",
"marri",
"marshallese",
"masa",
"mattokki",
"mauritanian",
"mauritian",
"mavchi",
"mayombe",
"mazatecan",
"mbaise",
"mbodomo",
"medumba",
"mengal",
"mennonite",
"mescalero",
"meskhetian",
"mewasi",
"mexican",
"mgbo",
"miccosukee",
"micronesian",
"mienic",
"mikea",
"mingrelian",
"minokok",
"mising",
"miskito",
"mixe",
"mizo",
"miꞌkmaq",
"mlomp",
"mocho",
"moldovan",
"molisan",
"molise",
"momna",
"monegasque",
"mongol",
"mongolian",
"mongondow",
"montenegrin",
"montserratian",
"mopan",
"moravian",
"mordvin",
"mordvinic",
"moroccan",
"mozabite",
"mozambican",
"mru",
"muher",
"mumuye",
"munanese",
"munji",
"muria",
"mursi",
"murutic",
"muscogee",
"muscovite",
"musgu",
"musi",
"mwera",
"māori",
"naba",
"nafusi",
"nama",
"namibian",
"nathembo",
"nepalese",
"newar",
"ngai",
"ngaju",
"ngalop",
"ngomba",
"ngombale",
"nguni",
"ngwa",
"ngwe",
"nias",
"nigerian",
"ningbonese",
"nirdhi",
"niuneton",
"nkoro",
"nkoroo",
"nobiin",
"nogai",
"norwegian",
"nubian",
"nuer",
"nuna",
"nunatukavut",
"nung",
"nyadu",
"nyole",
"nzema",
"obolo",
"occitan",
"odia",
"ogba",
"ogoni",
"ohafia",
"ohuhu",
"oneida",
"orcadian",
"oromo",
"osing",
"ossetian",
"otomi",
"ovahimba",
"ovambo",
"palembangese",
"palestinian",
"panamanian",
"pangasinese",
"pashayi",
"pashto",
"pashtun",

"persian",
"peruvian",
"picard",
"piedmontese",
"pitafi",
"poitevin",
"polynesian",
"pomeranian",
"pontic",
"provencal",
"putianese",
"qaratay",
"qemant",
"qiangic",
"rade",
"rajput",
"rakhine",
"rejangese",
"reunionese",
"rhinelander",
"rican",
"rifian",
"rinconada",
"roma",
"romagnol",
"romanian",
"russian",
"rusyn",
"ruthenian",
"sabaot",
"sadgop",
"saha",
"saho",
"sahrawi",

"salale",
"salinero",
"salvadorean",
"sambal",
"sambalic",
"sami",
"samin",
"sammarinese",
"samoan",
"samogitian",
"sanggau",
"sangirese",
"sanglechi",
"sanmarinese",
"santal",
"sardinian",
"sarikoli",
"sarki",
"sarnaism",
"sasak",
"satsugū",
"savu",
"scandanavian",
"scottish",
"sefwi",
"selonian",
"selungai",
"sembakung",
"seminole",
"senegalese",
"senufo",
"sepedi",
"serbian",
"serer",
"serudung",
"sesotho",
"shahsevan",
"shaigiya",
"shanghainese",
"shapsug",
"shenva",
"sherbro",
"shetlander",
"shiite",
"shilha",
"shilluk",
"shunri",
"sibe",
"sichuanese",
"sicilian",
"sika",
"sikh",
"silesian",
"sindhi",
"singaporean",
"sinhalese",
"sipakapense",
"siwi",
"slovene",
"slovenian",
"soga",
"somalian",
"soninke",
"soqotri",
"soran",
"sotho",
"spaniard",
"spanish",
"subei",
"sudanese",
"sudeten",
"sui",
"sumba",
"sumbanese",
"sumbawa",
"sundanese",
"surinamese",
"surma",
"susu",
"svan",
"swabian",
"swedish",
"swiss",
"syrian",
"szekely",
"tabasaranese",
"tachoni",
"tadvi",
"tagal",
"tagalog",
"tahitian",
"taishanese",
"taiwanese",
"tajik",
"talpur",
"talysh",
"tama",
"tambanuo",
"tamprusi",
"tandroy",
"tanka",
"tanzanian",
"tarok",
"tauki",
"taungyo",
"tboli",
"temne",
"tenggerese",
"teochew",
"terengganuarian",
"theravada",
"tibetan",
"ticino",
"timorese",
"timoric",
"timugon",
"tiriki",
"tiwa",
"tlapanec",
"tobagonian",
"togolese",
"tontemboan",
"toraja",
"tornedalian",
"toshavim",
"toubou",
"toucouleur",
"transylvanian",
"trentini",
"tringgu",
"trinidadian",
"trique",
"tristanian",
"tshangla",
"tsimihety",
"tugen",
"tujia",
"tunisian",
"tunumiit",
"turkish",
"turkmen",
"tuscan",
"tuscarora",
"tushetian",
"tuvan",
"twi",
"tyrolean",
"tzeltal",
"udmurt",
"ukrainian",
"umbrian",
"urum",
"uzbek",
"vagla",
"vagri",
"valencian",
"vasava",
"venetian",
"verdean",
"vezo",
"vietnamese",
"vincentian",
"waawa",
"waci",
"wakhi",
"waldensian",
"wallisian",
"walloon",
"wenzhou",
"wodaabe",
"wolayitta",
"wollo",
"xaragure",
"xibe",
"xinca",
"xong",
"yakkha",
"yakoma",
"yakut",
"yao",
"yaw",
"yazghulami",
"yazidi",
"yemba",
"yemeni",
"yemenite",
"yerwa",
"yidgha",
"yimchunger",
"yoruba",
"yuchi",

"zaghawa",
"zambian",
"zay",
"zealander",
"zou"
];
/**
 * @link https://en.wikipedia.org/wiki/list_of_contemporary_ethnic_groups
 */
const EthnicitySet: Set<string> = new Set();
a.forEach(i => EthnicitySet.add(i));
export { EthnicitySet };