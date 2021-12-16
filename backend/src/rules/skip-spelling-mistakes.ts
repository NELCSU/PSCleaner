/**********************************************************************
 * These words should be ignored when matched from regular expressions
 **********************************************************************/
const a: string[] = [
// A
"addr",
"approc",       // approx
// C
"coughin",      // coughing
// I
"initallt",     // initially
// L
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