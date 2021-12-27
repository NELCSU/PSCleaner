/**********************************************************************
 * These words should be ignored when matched from regular expressions
 **********************************************************************/
const a: string[] = [
// A
"addr",
"analgeisa",    // analgesia
"analgesa",
"anlke",        // ankle
"approc",       // approx
"aslepp",       // asleep

// B
"becime",       // become
"brusinig",     // bruising

// C
"complainig",   // complaining
"concerte",     // concrete
"coughin",      // coughing

// D
"drowsey",      // drowsy

// F
"fraity",       // frailty

// G
"greay",        // grey

// H
"headcahe",     // headache

// I
"initallt",     // initially
"injruy",       // injury

// K
"kiak",         // kayak

// L
"laert",        // alert
"lamenat",      // laminate

// M
"mobilsie",     // mobilise

// N
"nauesa",       // nausea
"ncek",         // neck

// O
"obviosu",      // obvious
"obvoius",
"otherwsie",    // otherwise

// P 
"pushcahir",    // pushchair

// R
"releif",       // relief
"remeber",      // remember
"rnag",         // rang
"rubbig",       // rubbing

// S
"seld",         // self
"slepp",        // sleep
"soem",         // some
"straigt",      // straight
"superficail",  // superficial
"swellig",      // swelling

// T
"theigh",       // thigh
"thorugh",      // thorough
"tierd",        // tired
"trood",        // trod

// U
"uanle",        // unable
"unabe",        // unable
"ulner",        // ulna

// V
"vomittig",     // vomiting
"vomti",        // vomit
"vulvula",      // vulva
];
const SkipSpellingSet: Set<string> = new Set();
a.forEach(i => SkipSpellingSet.add(i));
export { SkipSpellingSet };