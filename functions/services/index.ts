/**
 * Removes new line and extraneous whitespace from text
 * @param text - text to clean up
 * @returns
 */
async function normalize(text: string): Promise<string> {
  let r: string = text.replace(/[ \t]+/gm, " ");
  r = r.replace(/(\r\n|\r|\n)+/g, "$1");
  r = r.replace(/\s?[\-]\s?/g, "-");
  r = r.replace(/\s?[\/]\s?/g, "/");
  r = r.replace(/\s?[\\]\s?/g, "\\");
  return r;
}

export {
  normalize
};