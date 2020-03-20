import type { SimpleEntity } from "../../typings/PSCleaner";

export const OrdinalRegEx: RegExp[] = [
  /\d+(?:st|nd|rd|th)\b/,
  /\b[first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth]\b/
];

export const CardinalRegEx: RegExp[] = [
  /\b[one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|thousand|million|billion|trillion]b/
];