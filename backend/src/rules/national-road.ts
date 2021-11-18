/**********************************************************************
 * These patterns match UK Motorway, A and B roads
 **********************************************************************/
export const NationalRoadRegEx: RegExp[] = [
  /\bA[1-9]\d{0,3}\(M\)/gm,
  /\b[ABM][1-9]\d{0,3}\b/gm,
];