/**********************************************************************
 * These patterns should be ignored as they loosely match to 
 * clinical abbreviations
 * 
 * Actions needed
 * 
 * (medium priority)
 * Obtain a full list of clinical abbreviations to test what generates
 * false positives. The list below is not exhaustive.
 * 
 * (low priority)
 * This list could do with a clean up as some false positive 
 * generating words have been rationalised over time.
 **********************************************************************/
const a: RegExp[] = [
  /\babdo\b/gmi,
  /\badhd\b/gmi,
  /\bantibac\b/gmi,
  /\bALTE\b/gm,

  /\bBIB[Aa]?\b/gm, // brought in by (ambulance)

  /\bc\/o\b/gmi,    // complaining of
  /\bcoag\b/gmi,    // coagulation
  /\bcopd\b/gmi,    // chronic obstructive pulmonary disease
  /\bcssu\b/gmi,

  /\bdatix\b/gmi,
  /\bdexa\b/gmi,
  /\bDIB\b/gm,      // difficulty in breathing
  /\bdisloc\b/gmi,  // dislocation
  /\bdsch\b/gmi,    // discharge

  /\bED\b/gm,
  /\bEMA[Ss]\b/gm,
  /\betoh\b/gmi,

  /\bFOO?SH\b/gm,

  /\bGORD\b/gm,

  /\bhaem\b/gmi,
  /\bhosp\b/gmi,
  /\bhypo\b/gmi,

  /\blac\b/gmi,       // laceration

  /\bibup\b/gmi,
  /\binhib\b/gmi,
  /\bivab\b/gmi,
  /\biwob\b/gmi,

  /\b[alu]{1,2}rti\b/gmi,
  /\blucc\b/gmi,

  /\bmedevac\b/gmi,
  /\bMUA\b/gm,

  /\bn[\/\+\&]v\b/gmi,
  /\bNIC\b/gm,
  /\bNLOC\b/gm,
  /\bNSTEMI\b/gm,

  /\bo\/a\b/gmi,
  /\bortho\b/gmi,

  /\bpea?rla\s\d+/gmi,
  /\bPERLA\b/gm,
  /\bpmhx?\b/gmi,
  /\bpreg\b/gmi,
  /\bpssu\b/gmi,
  /\bpsych\b/gmi,
  /\bptsd\b/gmi,

  /\br\/o\b/gmi,
  /\bresp\b/gmi,
  /\bROMM\b/gmi,

  /\bSAH\b/gm,
  /\bsitu\b/gmi,
  /\bs\/o\b/gmi,
  /\bsymp\b/gmi,

  /\bTBSA\b/gmi,      // total body surface area
  /\bTIA\b/gm,

  /\buclh\b/gmi,
  
  /\bviru\b/gmi,

  /\by\/day\b/gmi     // yesterday
];
const MedicalAbbrRegEx: Set<RegExp> = new Set();
a.forEach(term => MedicalAbbrRegEx.add(term));
export {
  MedicalAbbrRegEx
};