/**
 * Removes new line and extraneous whitespace from text
 * @param {string} text - text to clean up
 * @returns {string}
 */
export function cleanText(text: string): string {
  let result: string = text.replace(/(?:\r\n|\r|\n)/g, " ");
  result = result.replace(/\s+/g, " ");
  return result;
}