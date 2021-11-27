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
  /\bBIB\b/gm,   // brought in by
  /\bBIBA\b/gm, // brought in by ambulance
  /\bcopd\b/gmi,
  /\bcssu\b/gmi,
  /\bdatix\b/gmi,
  /\bdisloc\b/gmi,
  /\bED\b/gm,
  /\bEMAS\b/gm,
  /\betoh\b/gmi,
  /\bGORD\b/gm,
  /\bhaem\b/gmi,
  /\bhosp\b/gmi,
  /\bhypo\b/gmi,
  /\blac\b/gmi,
  /\bibup\b/gmi,
  /\binhib\b/gmi,
  /\bivab\b/gmi,
  /\biwob\b/gmi,
  /\b[alu]{1,2}rti\b/gmi,
  /\blucc\b/gmi,
  /\bmedevac\b/gmi,
  /\bMUA\b/gm,
  /\bNIC\b/gm,
  /\bNSTEMI\b/gm,
  /\bortho\b/gmi,
  /\PERLA\b/gm,
  /\bpmhx?\b/gmi,
  /\bpreg\b/gmi,
  /\bpssu\b/gmi,
  /\bpsych\b/gmi,
  /\bptsd\b/gmi,
  /\bresp\b/gmi,
  /\bSAH\b/gm,
  /\bsitu\b/gmi,
  /\bsymp\b/gmi,
  /\bTIA\b/gm,
  /\buclh\b/gmi,
  /\bviru\b/gmi
];
const MedicalAbbrRegEx: Set<RegExp> = new Set();
a.forEach(term => MedicalAbbrRegEx.add(term));
export {
  MedicalAbbrRegEx
};