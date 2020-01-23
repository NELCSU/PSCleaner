/**
 * @see https://2ality.com/2019/10/shared-mutable-state.html
 * @param original 
 */
export function deepCopy (original: any): any {
  if (Array.isArray(original)) {
    const copy: any[] = [];
    for (const [index, value] of original.entries()) {
      copy[index] = deepCopy(value);
    }
    return copy;
  } else if (typeof original === "object" && original !== null) {
    const copy: any = {};
    for (const [key, value] of Object.entries(original)) {
      copy[key] = deepCopy(value);
    }
    return copy;
  } else {
    return original;
  }
}