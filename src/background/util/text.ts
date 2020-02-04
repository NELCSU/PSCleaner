/**
 * Removes new line and extraneous whitespace from text
 * @param text - text to clean up
 * @returns
 */
export function cleanText(text: string): string {
  let r: string = text.replace(/(?:\r\n|\r|\n)/g, "<br>");
  r = r.replace(/\s?[\-]\s?/g, "-");
  r = r.replace(/\s?[\/]\s?/g, "/");
  r = r.replace(/\s?[\\]\s?/g, "\\");
  r = r.replace(/<br>/g, "  ");
  return r;
}

/**
 * Returns true if character is an aposthrophe
 * @param text - text to test for apostrophe character
 */
export function isApostrophe(text: string): boolean {
  return text === "'" || text === "’" || text === "`";
}