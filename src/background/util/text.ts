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
  return text === "'" || text === "‘" || text === "’" || text === "`";
}

export function isHyphen(text: string): boolean {
	return text.length === 1 && (text === "‐" || text === "‑" || text === "-" || text === "⁃");
}

export function isPropercase(text: string): boolean {
	let proper: boolean = false, wordStart: boolean = true;
	for (let i = 0; i < text.length; i++) {
		if (isApostrophe(text[i]) || isHyphen(text[i]) || isSpace(text[i])) {
			wordStart = true;
			proper = false;
		} else if (text[i] === text[i].toLocaleLowerCase() && wordStart) {
			proper = false;
			break;
		} else if (text[i] === text[i].toLocaleUpperCase() && wordStart) {
			proper = true;
			wordStart = false;
		} else if (text[i] === text[i].toLocaleUpperCase() && !wordStart) {
			proper = false;
			break;
		}
	}
  return proper;
}

export function isSpace(text: string): boolean {
	return text.length > 0 && text.trim() === "";
}