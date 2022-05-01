/**********************************************************************
 * Matches words that are frequently found in place names
 **********************************************************************/
export const NameSetJoinOnly: Set<string> = new Set([
  "academy",       // placenames (1k+)
  "avenue",        // placenames (1k+)
  "bridge",        // placenames (1k+)
  "castle",        // placenames (885)
  "catholic",      // placenames (1k+)
  "church",        // placenames (1k+)
  "cl",
  "common",        // placenames (1k+)
  "coppice",       // placenames (1k+)
  "copse",         // placenames (1k+)
  "courtyard",     // placenames (60)
  "crag",          // placenames (222)
  "crags",         // placenames (67)
  "crescent",      // placenames (1k+)
  "dr",
  "farm",          // placenames (1k+)
  "field",         // placenames (1k+)
  "gardens",       // placenames (1k+)
  "grange",        // placenames (1k+)
  "greater",       // name & placenames (17)
  "grove",         // placenames (1k+)
  "ii",            // name part
  "iii",           // name part
  "iv",            // name part
  "jr",            // name
  "lane",          // placenames (1k+)
  "little",        // placenames (1k+)
  "ln",
  "lodge",         // placenames (946)
  "manor",         // placenames (803)
  "mc",
  "mill",          // placenames (1k+)
  "moor",          // placenames (1k+)
  "mr",
  "mrs",
  "ms",
  "mt",
  "old",           // placenames (1k+)
  "plantation",    // placenames (1k+)
  "pond",          // placenames (1k+)
  "port",          // placenames (1k+)
  "rd",
  "road",          // placenames (1k+)
  "sea",           // placenames (189)
  "sir",           // placenames (214)
  "spinneys",      // placenames (37)
  "street",        // placenames (1k+)
  "sub",           // placenames (32)
  "wall",          // placenames (188)
  "wood",          // placenames (1k+)
  "yd"
]);