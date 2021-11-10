const a: RegExp[] = [
  // CHAIR
  /(?<=IV28.{2,25})\bchair\b/gi,
  /\bchair\b(?=.{2,20}IV28)/gi,
  /(?<=(?:DG9|TR21|KW17|TR12).{2,10})\bthe\schair\b/gi,
  /\bthe\schair\b(?=.{2,10}(?:DG9|TR21|KW17|TR12))/gi,

  // RUGBY
  /(?<=(?:addr|CV21|dr[io]ve|live|stay|town|warwick).{2,25})\brugby\b/gi,
  /\brugby\b(?=.{1,20}(?:addr|CV21|warwick))/gi,
];
const LocationContextRegEx: Set<RegExp> = new Set();
a.forEach(term => LocationContextRegEx.add(term));
export {LocationContextRegEx};