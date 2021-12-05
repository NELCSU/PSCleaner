/**********************************************************************
 * These patterns should be ignored as they loosely match to 
 * medication terms
 * 
 * Actions needed
 * 
 * (medium priority)
 * Obtain a full list of clinical terms to test what generates
 * false positives. The list below is not exhaustive.
 * 
 * (low priority)
 * This list could do with a clean up as some false positive 
 * generating words have been rationalised over time.
 **********************************************************************/
const a: RegExp[] = [
  /\b(?:1st|2nd|3rd|[45]th)\s(?:mt|toes)\b/gmi,

  // A
  /\bachilli?es\stendon/gmi,
  /\badam['‘’`s]{0,2}\sapple\b/gmi,
  /\baddison['‘’`s]{0,2}\sdisease\b/gmi,
  /\balcock['‘’`s]{0,2}\scanal\b/gmi,
  /\balzheimers?\b/gmi,
  /\bamerican\scutaneous\sleishmaniasis\b/gmi,
  /\bangio[\s-]+oedema\bb/gmi,
  /\bapneoas\b/gmi,
  /\bartery\sof\s(?:adamkiewicz|percheron)\b/gmi,
  /\bas(?:th|ht)ma\b/gmi,
  /\bauerbach['‘’`s]{0,2}\splexus\b/gmi,
  /\bantrum\sof\shighmore\b/gmi,
  /\bangle\sof\slouis\b/gmi,
  /\bampulla\sof\svater\b/gmi,
  
  // B
  /\bbatson['‘’`s]{0,2}\splexus\b/gmi,
  /\bbee\ssting\b/gmi,
  /\bb(?:artholin|runner)['‘’`s]{0,2}\sglands?\b/gmi,
  /\bbaerveldt\s(?:shunt|tube)\b/gmi,
  /\bbachmann['‘’`s]{0,2}\sbundle\b/gmi,
  /\bback\spassage\b/gmi,
  /\bbarking\scough\b/gmi,
  /\bbent\s(?:ankle|arm|back|finger|foot|knee|neck|shoulder|toe|wrist)\b/gmi,
  /\bbro(?:ca|dmann?)['‘’`s]{0,2}\sareas?\b/gmi,
  /\bbuck['‘’`s]{0,2}\sfascia\b/gmi,
  /\bburkitt['‘’`s]{0,2}\slymphoma\b/gmi,
  /\bbrugada\ssyndrome\b/gmi,
  /\bbellini['‘’`s]{0,2}\sducts?\b/gmi,
  /\bbetz\scells?\b/gmi,
  /\bbillroth['‘’`s]{0,2}\scords\b/gmi,
  /\bblood\surate\b/gmi,
  /\bbowman['‘’`s]{0,2}\s(?:capsule|membrane)\b/gmi,
  /\bboxer['‘’`s]{0,2}\sfract\w+\b/gmi,
  /\bbell['‘’`s]{0,2}\snerve\b/gmi,
  /\bbalbiani\sbodies\b/gmi,
  /\bbrady\sepisode\b/gmi,
  /\b[Bb]undle\sof\sHis\b/gm,
  /\bbilharzia\b/gmi,
  /\bbuddy\sstrap\w*\b/gmi,
  /\bburnt\s(?:bottom|top)\b/gmi,
  
  // C
  /\bc(?:ajal(?:[\s-]retzius)?|lara)\scells?\b/gmi,
  /\bcuvier['‘’`s]{0,2}\sducts?\b/gmi,
  /\bcoryz[ao]l\b/gmi,
  /\bcowper['‘’`s]{0,2}\sglands?\b/gmi,
  /\bcloquet['‘’`s]{0,2}\scanal\b/gmi,
  /\bcircle\sof\swillis\b/gmi,
  /\bcanals?\sof\s(?:alcock|cloquet|dorello|haversian|hering|huguier|lauth|schlemm|stilling)\b/gmi,
  /\bcoll?e['‘’`s]{0,2}\s(?:fascia|fracture)\b/gmi,
  /\bcaudal\sepidural\b/gmi,
  /\bcooper['‘’`s]{0,2}\s(?:fascia|iliopectineal|suspensory)\sligaments?\b/gmi,
  /\bcalyx\sof\sheld\b/gmi,
  /\bcalot['‘’`s]{0,2}\striangle\b/gmi,
  /\bcat\sbite\b/gmi,
  /\bchassaignac['‘’`s]{0,2}\stubercle\b/gmi,
  /\bcocc[iy]x\b/gmi,
  /\bcoller\sbone\b/gmi,
  /\bcricket\ssplint\b/gmi,
  /\bcostal\schondritis\b/gmi,
  /\bcysts?\sof\smorgagni\b/gmi,
  /\bcolumns\sof\sbertin\b/gmi,
  /\bcrypts\sof\s(?:lieberk[üue]{1,2}hn|luschka)\b/gmi,

  // D
  /\bdarwin['‘’`s]{0,2}\stubercle\b/gmi,
  /\bdorello['‘’`s]{0,2}\scanal\b/gmi,
  /\bdenonvilliers['‘’`s]{0,2}\sfascia\b/gmi,
  /\bdescemet['‘’`s]{0,2}\smembrane\b/gmi,
  /\bd(?:uane|wayne)\ssyndrome\b/gmi,
  /\bdexa\b/gmi,
  /\bdiarro?he?o?a\b/gmi,
  /\bducts?\sof\s(?:bellini|cuvier|gartner|luschka|m[üue]{1,2}llerian|santorini|stensen|wharton|wirsung|wolffian)\b/gmi,
  /\bdisse['‘’`s]{0,2}\sspaces?\b/gmi,
  /\bdiamond\sblackfan\b/gmi,
  /\bdouglas['‘’`s]{0,2}\spouch\b/gmi,
  /\bdossett\sbox\b/gmi,
  /\bdouglas['‘’`s]{0,2}\slines?\b/gmi,
  /\bdouble\s(?:lumen\s)?hickmann?\b/gmi,

  // E
  /\be(?:dwards|hlers[\s-]*danlos|vans)\ssyndrome\b/gmi,
  /\be(?:cz|xc)ema\b/gmi,
  /\be[\s-]?coli\b/gmi,
  /\bedinger[\s–]westphal\snucleus\b/gmi,
  /\beustachian\stube\b/gmi,
  /\bepididymo[\s-]+orchitis\b/gmi,
  /\becthyma\sgangrenosum\b/gmi,
  /\bescherichia\scoli\b/gmi,
  /\bear\s(?:drum|lobe)s?\b/gmi,

  // F
  /\bfallopian\stube\b/gmi,
  /\bfanconi\ssyndrome\b/gmi,
  /\bfold\sof\s(?:hasner|treves)\b/gmi,
  /\bfrank\sh[ae]{2}maturia\b/gmi,
  /\bforam(?:en|ina)\sof\s(?:luschka|magendie|monro|thebesian|winslow)\b/gmi,
  /\bfissure\sof\srolando\b/gmi,
  /\bfracture\sof\stalus\b/gmi,
  /\bflu\svacc(?:ine|ination)?\b/gmi,
  /\bfirst\saider\b/gmi,
  /\bfall\shead\b/gmi,

  // G
  /\bgallaudet['‘’`s]{0,2}\sfascia\b/gmi,
  /\bgartner['‘’`s]{0,2}\sducts?\b/gmi,
  /\bg(?:erota|lisson)['‘’`s]{0,2}\scapsule\b/gmi,
  /\bg(?:alen|iacomini)\sveins?\b/gmi,
  /\bgerdy['‘’`s]{0,2}\sfib[er]{2}s?\b/gmi,
  /\bglands?\sof\s(?:bartholin|brunner|cowper|littr[eé]|meibomian|moll|montgomery|skene|von\sebner)\b/gmi,
  /\bg(?:ianotti[\s-]+crosti|uillain[\s-]+barr[eé])\ssyndrome\b/gmi,
  /\bgillick\scompetence\b/gmi,
  /\bgraafian\sfollicle\b/gmi,
  /\bgr[aäe]{1,2}fenberg\sspot\b/gmi,
  /\bgram[-\s]neg(?:ative)?\b/gmi,
  /\bgolgi\s(?:apparatus|receptor)\b/gmi,

  // H
  /\bhickmann?['‘’`s]{0,2}\slines?\b/gmi,
  /\bhartmann['‘’`s]{0,2}\spouch\b/gmi,
  /\bh(?:aversian|ering|uguier)['‘’`s]{0,2}\scanal\b/gmi,
  /\bhesselbach['‘’`s]{0,2}\striangle\b/gmi,
  /\bhurthle\scells?\b/gmi,
  /\bherr?ing['‘’`s]{0,2}\s(?:bodies|nerve)\b/gmi,
  /\bheschl['‘’`s]{0,2}\sgyri\b/gmi,
  /\bhouston['‘’`s]{0,2}\smuscle\b/gmi,
  /\bhenoch[\s-]+schonlein\spurpura\b/gmi,
  /\bhasner['‘’`s]{0,2}\sfold\b/gmi,
  /\bhay\sfever\b/gmi,
  /\bh(?:eister|ouston)['‘’`s]{0,2}\svalves?\b/gmi,
  /\bhickmann?\sinsitu\b/gmi,
  /\bhenle['‘’`s]{0,2}\sloop\b/gmi,
  /\bhirschsprung['‘’`s]{0,2}\sdisease\b/gmi,
  /\bhodgkin['‘’`s]{0,2}\slymphoma\b/gmi,
  /\bhydatids\sof\smorgagni\b/gmi,
  /\bhurt\s(?:ankle|arm|back|finger|foot|head|hip|jaw|knee|neck|shoulder|toe|wrist)\b/gmi,
  /\b(?:cut|hurt)\s(?:hand|shoulder)\b/gmi,
  /\bh[\\\/]o\b/gmi,

  // I
  /\bin(?:farct|fluenza|situ)\b/gmi,
  /\biga\svasculitis\b/gmi,
  /\binflammation\sof\sbursa\b/gmi,
  /\binjurys\b/gmi,
  /\binner\slobe\b/gmi,
  /\bislets\sof\slangerhans\b/gmi,
  /\bisland\sof\sreil\b/gmi,

  // J
  /\bjew[ei]tt?\sbrace\b/gmi,
  /\bjobson\shorne\sprobe\b/gmi,

  // K
  /\bkupffer\scells?\b/gmi,
  /\bkiesselbach['‘’`s]{0,2}\splexus\b/gmi,
  /\bkernohan\snotch\b/gmi,
  /\bkrause['‘’`s]{0,2}\send\b/gmi,
  /\bkab(?:oo|u)ki\ssyndrome\b/gmi,
  /\bkerckring['‘’`s]{0,2}\svalves?\b/gmi,
  /\bkawasaki['‘’`s]{0,2}\sdisease\b/gmi,
  /\b[a-z]+knee\b/gmi,

  // L
  /\bleft\sfoot\b/gmi,
  /\blyme['‘’`s]{0,2}\sdisease\b/gmi,
  /\bl(?:angerhans|anghans\sgiant|eydig)\scells?\b/gmi,
  /\bl(?:ockjaw|umbago)\b/gmi,
  /\blacunae\sof\smorgagni\b/gmi,
  /\blauth['‘’`s]{0,2}\scanal\b/gmi,
  /\blanger['‘’`s]{0,2}\slines?\b/gmi,
  /\bluschka['‘’`s]{0,2}\sducts?\b/gmi,
  /\blittle['‘’`s]{0,2}\splexus\b/gmi,
  /\blynch\ssyndrome\b/gmi,
  /\blister['‘’`s]{0,2}\stubercle\b/gmi,
  /\blockwood['‘’`s]{0,2}\sligaments?\b/gmi,
  /\blittr[eé]['‘’`s]{0,2}\sglands?\b/gmi,
  /\blissauer['‘’`s]{0,2}\stract\b/gmi,
  /\blittle\s(?:finger|toe)\b/gmi,
  /\blichenoid\skeratosis?\b/gmi,
  /\bluschka\sforamina\b/gmi,
  /\bligaments?\sof\s(?:cooper|lockwood|poupart|struthers|treves|treitz)\b/gmi,
  /\blines?\sof\s(?:douglas|hickmann?|langer|spiegelian)\b/gmi,
  /\bleuks\b/gmi,
  /\blupus\snephritis\b/gmi,
  /\bluschka['‘’`s]{0,2}\sjoints\b/gmi,
  /\blovibond['‘’`s]{0,2}\sangle\b/gmi,
  /\blassa\sfever\b/gmi,
  /\bloop\sof\s(?:henle|meyer)\b/gmi,
  /\blower\s(?:arm|back|gum|head|leg|lobe)\b/gmi,
  /\blund['‘’`s]{0,2}\snode\b/gmi,
  /\blobar\spneumonia\b/gmi,
  /\blimbus\sof\svieussens\b/gmi,

  // M
  /\bmonro\sforamina\b/gmi,
  /\bm(?:eibomian|oll|ontgomery)['‘’`s]{0,2}\sglands?\b/gmi,
  /\bm[üue]{1,2}llerian['‘’`s]{0,2}\sducts?\b/gmi,
  /\bm(?:antle|erkel)\scells?\b/gmi,
  /\bmeyer['‘’`s]{0,2}\sloop\b/gmi,
  /\bma?cewen['‘’`s]{0,2}\striangle\b/gmi,
  /\bmorison['‘’`s]{0,2}\spouch\b/gmi,
  /\bmeissner['‘’`s]{0,2}\splexus\b/gmi,
  /\bm[öoe]{1,2}ll['‘’`s]{0,2}\sspaces?\b/gmi,
  /\bmonteggia['‘’`s]{0,2}\sfract\w+\b/gmi,
  /\bmorton['‘’`]?s\sneuroma\b/gmi,
  /\bmirena\scoil\b/gmi,
  /\bmicke?y\sbutton\b/gmi,
  /\bmiddle\stoe\b/gmi,
  /\bMAC\ssedation\b/gmi,
  /\bmacula\b/gmi,
  /\bmallory[\s-]+weiss\stear\b/gmi,
  /\bmax\sdose\b/gmi,
  /\bmobitz\stype\b/gmi,
  /\bmongolian\sblue\sspots?\b/gmi,
  /\bmeckel['‘’`s]{0,2}\scartilage\b/gmi,
  /\bmcburney['‘’`s]{0,2}\spoint\b/gmi,
  /\bmeckel['‘’`s]{0,2}\sdiverticulum\b/,
  /\bm(?:alpighian|eissner)['‘’`s]{0,2}\scorpuscles?\b/gmi,

  // N
  /\bN\/V\sintact\b/gmi,
  /\bnpmh\b/gmi,
  /\bneisseria\smeningitidis\b/gmi,
  /\bng\s(?:feed|tube)s?\b/gmi,
  /\bNG\b/gm,
  /\bnode\sof\s(?:lund|ranvier|virchow)\b/gmi,
  /\bnissl\s(?:bodies|granules|substance)\b/gmi,
  /\bnerve\sof\s(?:bell|herr?ing)\b/gmi,
  /\bneurovascula\b/gmi,

  // O
  /\bosteogen[io]us\b/gmi,
  /\bottawa\s(?:(?:rule|sign)s?\s)?(?:negative|positive)\b/gmi,
  /\borgan\sof\s(?:corti|zuckerkandl)\b/gmi,
  /\bouter\sfoot\b/gmi,
  /\bof\shead\b/gmi,

  // P
  /\bp(?:alsy|elvic|harma|harynx|helgm|hleugm|olio|ylori)\b/gmi,
  /\bpott['‘’`s]{0,2}\sfract\w+\b/gmi,
  /\bpimenta['‘’`s]{0,2}\spoint\b/gmi,
  /\bpacinian['‘’`s]{0,2}\scorpuscles?\b/gmi,
  /\bprussak['‘’`s]{0,2}\sspaces?\b/gmi,
  /\bp(?:aneth|urkinje)\scells?\b/gmi,
  /\bpoupart['‘’`s]{0,2}\sligaments?\b/gmi,
  /\bpurkinje['‘’`s]{0,2}\sfib[er]{2}s?\b/gmi,
  /\bpores\sof\skohn\b/gmi,
  /\bpouch\sof\s(?:douglas|hartmann|morison|rathke)\b/gmi,
  /\bpalm[ae]r\saspect\b/gmi,
  /\bperformed\sheimlich\b/gmi,
  /\bpapez\scircuit\b/gmi,
  /\bparenchymal\b/gmi,
  /\bpar[ao]n[iy]chia\b/gmi,
  /\bpityriasis\srosea\b/gmi,
  /\bp(?:hel[ai][mn][\s-]+mcderm[io]d|rader[\s-]+willi)\ssyndrome\b/gmi,
  /\bpinky\sfinger\b/gmi,
  /\bplaster\sof\sparis\b/gmi,
  /\bpink\s(?:bumps?|cheeks|eye)\b/gmi,
  /\bproteus\smirabilis\b/gmi,
  /\bpeyer['‘’`s]{0,2}\spatches\b/gmi,
  /\bparieto[\s-]+occipital\b/gmi,
  /\bPERLA\b/gm,
  /\bpearl\ssize\b/gmi,
  /\bpost\singestion\b/gmi,

  // R
  /\bring\sfinger\b/gmi,
  /\bred\s(?:bump|call|cheek|eye|mark|nail)s?\b/gmi,
  /\brenshaw\scells?\b/gmi,
  /\bretzius['‘’`s]{0,2}\sspaces?\b/gmi,
  /\bruffini['‘’`s]{0,2}\scorpuscles?\b/gmi,
  /\brectum\b/gmi,
  /\breichert['‘’`s]{0,2}\scartilage\b/gmi,
  /\brathke['‘’`s]{0,2}\spouch\b/gmi,
  /\braynaud['‘’`s]{0,2}\sdisease\b/gmi,
  /\bretzius\sveins?\b/gmi,
  /\bradi[au]l\spulse\b/gmi,
  /\broof\sof\smouth\b/gmi,
  /\brotter['‘’`s]{0,2}\slymph\b/gmi,
  /\briedel['‘’`s]{0,2}\slobe\b/gmi,
  /\brokitansky[\s–]aschoff\ssinuses\b/gmi,
  /\brolandic\sfissure\b/gmi,
  /\branvier['‘’`s]{0,2}\snode\b/gmi,

  // SA
  /\bsalter[\s-]+harris['‘’`s]{0,2}\sfract\w+\b/gmi,
  /\bsalter[\s-]+harris\s(?:type\s)?[IVX1-9]{1,3}\b/gmi,
  /\bsantorini['‘’`s]{0,2}\sducts?\b/gmi,

  // SC
  /\bschwann\scells?\b/gmi,
  /\bschlemm['‘’`s]{0,2}\scanal\b/gmi,
  /\bscarlett?\sfever\b/gmi,

  // SE
  /\bsertoli\scells?\b/gmi,

  // SH
  /\bshrapnell['‘’`s]{0,2}\smembrane\b/gmi,
  /\bshoulder\sblade\b/gmi,
  /\bsharpey['‘’`s]{0,2}\sfib[er]{2}s?\b/gmi,

  // SI
  /\bside\s(?:of\s)?(?:arm|back|head)\b/gmi,
  /\bsinus\sof\svalsalva\b/gmi,
  /\bsick[le]{2}\scells?\b/gmi,

  // SK
  /\bskene['‘’`s]{0,2}\sglands?\b/gmi,

  // SP
  /\bspiegelian['‘’`s]{0,2}\s(?:fascia|line|lobe)s?\b/gmi,
  /\bsphincter\sof\soddi\b/gmi,
  /\bsputum\b/gmi,
  /\bspaces?\sof\s(?:disse|m[öoe]{1,2}ll|prussak|retzius|traube|virchow[\s–]robin)\b/gmi,

  // ST
  /\bsteri[\s-]strip\b/gmi,
  /\bstung\sby\b/gmi,
  /\bstruthers['‘’`s]{0,2}\sligaments?\b/gmi,
  /\bstreptococci\b/gmi,
  /\bstilling['‘’`s]{0,2}\scanal\b/gmi,
  /\bstensen['‘’`s]{0,2}\sducts?\b/gmi,

  // SU
  /\bsupra?condu?[ly]{2}ar\b/gmi,

  // SY
  /\bsylvian\saqueduct\b/gmi,

  // T
  /\btalus['‘’`s]{0,2}\sfract\w+\b/gmi,
  /\bTIA\b/gm,
  /\btre(?:ves|itz)['‘’`s]{0,2}\sligaments?\b/gmi,
  /\btraube['‘’`s]{0,2}\sspaces?\b/gmi,
  /\btalc\spleurodesis\b/gmi,
  /\btenckhoff\scatheter\b/gmi,
  /\btop\sof\s(?:the\s)?(?:back|foot|head)\b/gmi,
  /\btorcular\sherophili\b/gmi,
  /\btinea\spedis\b/gmi,
  /\btreves['‘’`s]{0,2}\sfold\b/gmi,
  /\bthebesian['‘’`s]{0,2}\s(?:foramina|valves?|veins?)\b/gmi,
  /\btourette['‘’`s]{0,2}\ssyndrome\b/gmi,

  // U
  /\bu(?:lna|rethra|teri)\b/gmi,
  /\bupper\s(?:arm|back|gum|head|leg|lobe)\b/gmi,

  // V
  /\bvon\sebner['‘’`s]{0,2}\sglands?\b/gmi,
  /\bverucca\b/gmi,
  /\bvirchow[\s–]robin['‘’`s]{0,2}\sspaces?\b/gmi,
  /\bvieussen['‘’`s]{0,2}\svalves?\b/gmi,
  /\bvalves?\sof\s(?:heister|houston|kerckring|thebesian|vieussens)\b/gmi,
  /\bveil\sof\streves\b/gmi,
  /\bvaso\s?vagal\b/gmi,
  /\bveins?\sof\s(?:galen|giacomini|retzius|thebesian)\b/gmi,
  /\bvirchow['‘’`s]{0,2}\snode\b/gmi,
  /\bvomm?itt?\b/gmi,
  /\bvulva\b/gmi,
  /\bvascula\b/gmi,
  
  // W
  /\bweber\stype\s[a-z]['‘’`s]{0,2}\sfract\w+\b/gmi,
  /\bw(?:harton|irsung|olffian)['‘’`s]{0,2}\sducts?\b/gmi,
  /\bwernicke['‘’`s]{0,2}\sareas?\b/gmi,
  /\bwasp\ssting\b/gmi,
  /\bwenckebach['‘’`s]{0,2}\sbundle\b/gmi,
  /\bwaldenstrom\smacroglobulinemia\b/gmi,
  /\bwolf[ef][\s-]+parkin?son(?:[\s-]+white)?\b/gmi,
  /\bwaldeyer['‘’`s]{0,2}\stonsillar\b/gmi,
  /\bweibel[\s–]palade\sbody\b/gmi,
  /\bwell\schild\b/gmi,
  /\bwharton['‘’`s]{0,2}\sjelly\b/gmi,
  /\bwhite\scoating\son\b/gmi,
  /\bwhite\slines\sof\stoldt\b/gmi,
  /\bwormian\sbones\b/gmi,
  /\bwalk\son\stoes\b/gmi,
  /\bwalking\sboot\b/gmi,
  /\bweight[\s-]bear\b/gmi,
  /\bwt\sbear\b/gmi,

  // X
  /\bx[\s-]*ray(?:ed|s)?\b/gmi,

  // Z
  /\bzonule\sof\szinn\b/gmi,
  /\bzygoma\b/gmi,
  /\bzygote\b/gmi
];
const MedicalTermRegEx: Set<RegExp> = new Set();
a.forEach(term => MedicalTermRegEx.add(term));
export {
  MedicalTermRegEx
};