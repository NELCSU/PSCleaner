/**********************************************************************
 * These words should be ignored when matched from regular expressions
 **********************************************************************/
const a: string[] = [
// A
"addr",
"approc",       // approx
// B
"brusinig",     // bruising
// C
"coughin",      // coughing
// D
"drowsey",      // drowsy
// I
"initallt",     // initially
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
// V
"vomittig",     // vomiting
];
const SkipSpellingSet: Set<string> = new Set();
a.forEach(i => SkipSpellingSet.add(i));
export { SkipSpellingSet };