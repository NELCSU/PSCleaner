const a: RegExp[] = [
  /\bachilles\stendon/gmi,
  /\baddison\sdisease\b/gmi,
  /\balzheimers?\b/gmi,
  /\bamerican\scutaneous\sleishmaniasis\b/gmi,
  /\bangio[\-\s]oedema\bb/gmi,
  /\bback\sof\shead\b/gmi,
  /\bback\spassage\b/gmi,
  /\bbarking\scough\b/gmi,
  /\b(?:bee|wasp)\ssting\b/gmi,
  /\bblood\surate\b/gmi,
  /\bbowmans\smembrane\b/gmi,
  /\bboxer'?s\sfracture\b/gmi,
  /\bbrugada\ssyndrome\b/gmi,
  /\bcat\sbite\b/gmi,
  /\bcocc[iy]x\b/gmi,
  /\bcolles'?[\-\s]fracture\b/gmi,
  /\bc[or]{2}yz[ao]l?\b/gmi,
  /\bcostal\schondritis\b/gmi,
  /\bcysts?\sof\smorgagni\b/gmi,
  /\bdiarro?he?o?a\b/gmi,
  /\bdossett\sbox\b/gmi,
  /\be[\-\s]?coli\b/gmi,
  /\bepididymo[\-\s]orchitis\b/gmi,
  /\becthyma\sgangrenosum\b/gmi,
  /\bescherichia\scoli\b/gmi,
  /\bevans\ssyndrome\b/gmi,
  /\bpinky\sfinger\b/gmi,
  /\bfanconi\ssyndrome\b/gmi,
  /\bflu\svacc(?:ine|ination)?\b/gmi,
  /\bfrank\sh[ae]{2}maturia\b/gmi,
  /\bgram[-\s]neg(?:ative)?\b/gmi,
  /\bpalm[ae]r\saspect\b/gmi,
  /\bperformed\sheimlich\b/gmi,
  /\bhay\sfever\b/gmi,
  /\bhenoch[\-\s]schonlein\spurpura\b/gmi,
  /\bhickmann?\slines?\b/gmi,
  /\biga\svasculitis\b/gmi,
  /\binflammation\sof\sbursa\b/gmi,
  /\bkab(?:oo|u)ki\ssyndrome\b/gmi,
  /\bkawasaki\sdisease\b/gmi,
  /\blittle\stoe\b/gmi,
  /\blobar\spneumonia\b/gmi,
  /\bloop\sof\shenle\b/gmi,
  /\blower\s(?:arm|lobe)\b/gmi,
  /\blupus\snephritis\b/gmi,
  /\blymes?\sdisease\b/gmi,
  /\bMAC\ssedation\b/gmi,
  /\bmallory[\-\s]weiss\stear\b/gmi,
  /\bmantle\scell\b/gmi,
  /\bmobitz\stype\b/gmi,
  /\bmongolian\sblue\sspots?\b/gmi,
  /\bneisseria\smeningitidis\b/gmi,
  /\bng\s(?:feed|tube)s?\b/gmi,
  /\bparenchymal\b/gmi,
  /\bpar[ao]n[iy]chia\b/gmi,
  /\bpityriasis\srosea\b/gmi,
  /\bplaster\sof\sparis\b/gmi,
  /\b(?:pink|red)\s(?:bumps?|cheeks)\b/gmi,
  /\bpott'?s\sfracture\b/gmi,
  /\bproteus\smirabilis\b/gmi,
  /\bosteogen[io]us\b/gmi,
  /\bsalter[\-\s]harris\s(?:fracture|type\s[IVX1-9]{1,3})\b/gmi,
  /\bsick(?:el|le)\scell\b/gmi,
  /\b(?:side|upper)\s(?:arm|head)\b/gmi,
  /\bsupracondu?[ly]{2}ar\b/gmi,
  /\btalc\spleurodesis\b/gmi,
  /\bfracture\sof\stalus\b/gmi,
  /\btinea\spedis\b/gmi,
  /\bvaso\s?vagal\b/gmi,
  /\bweber\stype\sc\sfracture\b/gmi,
  /\bwhite\scoating\son\b/gmi,
  /\bwolff[\-\s]parkinson[\-\s]white\b/gmi,
  /\bx[\-\s]ray(?:ed|s)?\b/gmi
];
const MedicalTermRegEx: Set<RegExp> = new Set();
a.forEach(term => MedicalTermRegEx.add(term));
export {
  MedicalTermRegEx
};