/**
 * Removes new line and extraneous whitespace from text
 * @param {string} text - text to clean up
 * @returns {string}
 */
export function cleanText(text: string): string {
  let result: string = text.replace(/(?:\r\n|\r|\n)/g, " ");
  result = result.replace(/\s+/g, " ");
  result = result.replace(/\s?[\-]\s?/g, "-");
  result = result.replace(/\s?[\/]\s?/g, "/");
  result = result.replace(/\s?[\\]\s?/g, "\\");
  return result;
}