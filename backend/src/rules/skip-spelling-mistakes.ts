/**********************************************************************
 * These words should be ignored when matched from regular expressions
 **********************************************************************/
const a: string[] = [
// A
"addr",
"anlke",        // ankle
"approc",       // approx

// B
"becime",       // become
"brusinig",     // bruising

// C
"concerte",     // concrete
"coughin",      // coughing

// D
"drowsey",      // drowsy

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

// P 
"pushcahir",    // pushchair

// R
"rnag",         // rang

// S
"seld",         // self

// T
"trood",        // trod

// U
"uanle",        // unable
"unabe",        // unable

// V
"vomittig",     // vomiting
"vulvula",      // vulva
];
const SkipSpellingSet: Set<string> = new Set();
a.forEach(i => SkipSpellingSet.add(i));
export { SkipSpellingSet };