/**********************************************************************
 * These words should be ignored when matched from regular expressions
 **********************************************************************/
const a: string[] = [
// A
"acitevly",     // actively
"addr",
"analgeisa",    // analgesia
"analgesa",
"analgesai",
"analgisea",
"analgeais",
"analgseia",
"anelgeisa",
"anlke",        // ankle
"ankel",
"approc",       // approx
"aslepp",       // asleep

// B
"bathrom",      // bathroom
"becime",       // become
"blisterd",     // blisters
"brigde",       // bridge
"brusinig",     // bruising

// C
"complainig",   // complaining
"concerte",     // concrete
"cooffe",       // coffee
"coughin",      // coughing

// D
"deformaty",    // deformity
"drowsey",      // drowsy

// F
"fraity",       // frailty

// G
"greay",        // grey

// H
"headcahe",     // headache
"hoome",        // home

// I
"immedaite",    // immediate
"initallt",     // initially
"injruy",       // injury
"injuy",
"iside",        // inside

// K
"kiak",         // kayak

// L
"laert",        // alert
"lamenat",      // laminate
"liase",        // liaise

// M
"mobilsie",     // mobilise

// N
"nauesa",       // nausea
"nauseus",      // nauseous
"ncek",         // neck

// O
"obviosu",      // obvious
"obvoius",
"obvioius",
"ooen",         // open
"otherwsie",    // otherwise

// P
"paracetaol",   // paracetamol
"paracetmaol",
"pushcahir",    // pushchair

// R
"releif",       // relief
"remeber",      // remember
"reivew",       // review
"rnag",         // rang
"rubbig",       // rubbing
"rugbu",        // rugby

// S
"seld",         // self
"sinec",        // since
"slef",         // self
"slepp",        // sleep
"soem",         // some
"straigt",      // straight
"superficail",  // superficial
"swellig",      // swelling

// T
"theigh",       // thigh
"thorugh",      // thorough
"tierd",        // tired
"trioage",      // triage
"trood",        // trod

// U
"uanle",        // unable
"unabe",        // unable
"ulner",        // ulna

// V
"visaula",      // visualar
"vomittig",     // vomiting
"vomti",        // vomit
"vulvula",      // vulva

// W
"wakl",         // walk
"woiund",       // wound
"wrsit",        // wrist
];
const SkipSpellingSet: Set<string> = new Set();
a.forEach(i => SkipSpellingSet.add(i));
export { SkipSpellingSet };