/**
 * Removes new line and extraneous whitespace from text
 * @param text - text to clean up
 * @returns
 */
export function cleanText(text: string): string {
  let r: string = text.replace(/(?:\r\n|\r|\n)/g, "<br>");
  r = r.replace(/[ \t]+/g, " ");
  r = r.replace(/\s?[\-]\s?/g, "-");
  r = r.replace(/<br>/g, "  ");
  return r;
}
