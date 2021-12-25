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
"ncek",         // neck

// O
"otherwsie",    // otherwise

// P 
"pushcahir",    // pushchair

// R
"remeber",      // remember
"rnag",         // rang
"rubbig",       // rubbing

// S
"seld",         // self

// T
"theigh",       // thigh
"thorugh",      // thorough
"trood",        // trod

// U
"uanle",        // unable
"unabe",        // unable
"ulner",        // ulna

// V
"vomittig",     // vomiting
"vulvula",      // vulva
];
const SkipSpellingSet: Set<string> = new Set();
a.forEach(i => SkipSpellingSet.add(i));
export { SkipSpellingSet };