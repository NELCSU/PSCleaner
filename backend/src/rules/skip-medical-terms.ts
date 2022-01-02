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
  /\b(?:1st|2nd|3rd|[45]th)\s(?:episode|metacarp[ao]l|mc|mt|toes)\b/gmi,

  // AC
  /\bachilli?es\stendon/gmi,

  // AD
  /\badam['‘’`s]{1,2}\sapple\b/gmi,
  /\baddison['‘’`s]{1,2}\sdisease\b/gmi,

  // AL
  /\balcock['‘’`s]{1,2}\scanal\b/gmi,
  /\balzheimers?\b/gmi,

  // AM
  /\bamerican\scutaneous\sleishmaniasis\b/gmi,
  /\bampulla\sof\svater\b/gmi,

  // AN
  /\bangio[\s-]+oedema\bb/gmi,
  /\bantrum\sof\shighmore\b/gmi,
  /\bangle\sof\slouis\b/gmi,

  // AP
  /\bapneoas\b/gmi,

  // AR
  /\bartery\sof\s(?:adamkiewicz|percheron)\b/gmi,
  /\barhtogrypoci\b/gmi,

  // AS
  /\bas(?:th|ht)ma\b/gmi,

  // AU
  /\bauerbach['‘’`s]{1,2}\splexus\b/gmi,
  
  // BA
  /\bback\spain\b/gmi,
  /\bbatson['‘’`s]{1,2}\splexus\b/gmi,
  /\bbartholin['‘’`s]{1,2}\sglands?\b/gmi,
  /\bbaerveldt\s(?:shunt|tube)\b/gmi,
  /\bbachmann['‘’`s]{1,2}\sbundle\b/gmi,
  /\bback\spassage\b/gmi,
  /\bbarking\scough\b/gmi,
  /\bbalbiani\sbodies\b/gmi,

  // BE
  /\bbee\ssting\b/gmi,
  /\bbent\s(?:ankle|arm|back|finger|foot|knee|neck|shoulder|toe|wrist)\b/gmi,
  /\bbellini['‘’`s]{1,2}\sducts?\b/gmi,
  /\bbetz\scells?\b/gmi,
  /\bbell['‘’`s]{1,2}\snerve\b/gmi,
  
  // BI
  /\bbilharzia\b/gmi,
  /\bbillroth['‘’`s]{1,2}\scords\b/gmi,

  // BL
  /\bblood\surate\b/gmi,

  // BO
  /\bbone?y\stenderness\b/gmi,
  /\bbowman['‘’`s]{1,2}\s(?:capsule|membrane)\b/gmi,
  /\bboxer['‘’`s]{1,2}\sfract\w+\b/gmi,

  // BR
  /\bbrugada\ssyndrome\b/gmi,
  /\bbro(?:ca|dmann?)['‘’`s]{1,2}\sareas?\b/gmi,
  /\bbrady\sepisode\b/gmi,
  /\bbrunner['‘’`s]{1,2}\sglands?\b/gmi,
  /\bbroadarm\ssling\b/gmi,

  // BU
  /\bbuddy\sstrap\w*\b/gmi,
  /\bburn\s(?:dressing|finger|foot)s?\b/gmi,
  /\b[Bb]undle\sof\sHis\b/gm,
  /\bbuck['‘’`s]{1,2}\sfascia\b/gmi,
  /\bburkitt['‘’`s]{1,2}\slymphoma\b/gmi,

  // CA
  /\bcalcaneus\b/gmi,
  /\bc(?:ajal(?:[\s-]retzius)?|lara)\scells?\b/gmi,
  /\bcalyx\sof\sheld\b/gmi,
  /\bcalot['‘’`s]{1,2}\striangle\b/gmi,
  /\bcat\sbite\b/gmi,
  /\bcanals?\sof\s(?:alcock|cloquet|dorello|haversian|hering|huguier|lauth|schlemm|stilling)\b/gmi,
  /\bcaudal\sepidural\b/gmi,

  // CH
  /\bchassaignac['‘’`s]{1,2}\stubercle\b/gmi,

  // CI
  /\bcircle\sof\swillis\b/gmi,

  // CL
  /\bcloquet['‘’`s]{1,2}\scanal\b/gmi,
  
  // CO
  /\bcooper['‘’`s]{1,2}\s(?:fascia|iliopectineal|suspensory)\sligaments?\b/gmi,
  /\bcoll?e['‘’`s]{1,2}\s(?:fascia|fracture)\b/gmi,
  /\bcolumns\sof\sbertin\b/gmi,
  /\bcostal\schondritis\b/gmi,
  /\bcocc[iy]x\b/gmi,
  /\bcoller\sbone\b/gmi,
  /\bcoryz[ao]l\b/gmi,
  /\bcowper['‘’`s]{1,2}\sglands?\b/gmi,

  // CR
  /\bcrypts\sof\s(?:lieberk[üue]{1,2}hn|luschka)\b/gmi,
  /\bcricket\ssplint\b/gmi,

  // CU
  /\bcuvier['‘’`s]{1,2}\sducts?\b/gmi,
  /\bcut\s(?:hand|shoulder)\b/gmi,

  // CY
  /\bcysts?\sof\smorgagni\b/gmi,

  // DA
  /\bdarwin['‘’`s]{1,2}\stubercle\b/gmi,

  // DE
  /\bdenonvilliers['‘’`s]{1,2}\sfascia\b/gmi,
  /\bdescemet['‘’`s]{1,2}\smembrane\b/gmi,

  // DI
  /\bdiarro?he?o?a\b/gmi,
  /\bdisse['‘’`s]{1,2}\sspaces?\b/gmi,
  /\bdiamond\sblackfan\b/gmi,

  // DO
  /\bdorello['‘’`s]{1,2}\scanal\b/gmi,
  /\bdossett\sbox\b/gmi,
  /\bdouglas['‘’`s]{1,2}\s(?:line|pouch)s?\b/gmi,
  /\bdouble\s(?:lumen\s)?hickmann?\b/gmi,

  // DU
  /\bduane\ssyndrome\b/gmi,
  /\bducts?\sof\s(?:bellini|cuvier|gartner|luschka|m[üue]{1,2}llerian|santorini|stensen|wharton|wirsung|wolffian)\b/gmi,

  // DW
  /\bdwayne\ssyndrome\b/gmi,

  /\be[\s-]?coli\b/gmi,
  // EA
  /\bear\s(?:drum|lobe)s?\b/gmi,

  // EC
  /\becthyma\sgangrenosum\b/gmi,
  /\be(?:cz|xc)ema\b/gmi,

  // ED
  /\bedinger[\s–]westphal\snucleus\b/gmi,
  /\bedwards\ssyndrome\b/gmi,

  // EH
  /\behlers[\s-]*danlos\ssyndrome\b/gmi,

  // EP
  /\bepididymo[\s-]+orchitis\b/gmi,
  /\bepidermis\b/gmi,

  // ES
  /\bescherichia\scoli\b/gmi,

  // EU
  /\beustachian\stube\b/gmi,

  // EV
  /\bevans\ssyndrome\b/gmi,

  // FA
  /\bfallopian\stube\b/gmi,
  /\bfanconi\ssyndrome\b/gmi,
  /\bfall\shead\b/gmi,

  // FI
  /\bfirst\saider\b/gmi,
  /\bfirstaid\b/gmi,
  /\bfissure\sof\srolando\b/gmi,

  // FL
  /\bflu\svacc(?:ine|ination)?\b/gmi,

  // FO
  /\bfold\sof\s(?:hasner|treves)\b/gmi,
  /\bforam(?:en|ina)\sof\s(?:luschka|magendie|monro|thebesian|winslow)\b/gmi,

  // FR
  /\bfracture\sof\stalus\b/gmi,
  /\bfrank\sh[ae]{2}maturia\b/gmi,

  // FU
  /\bfutura\ssplint\b/gmi,

  // G
  /\bgallaudet['‘’`s]{1,2}\sfascia\b/gmi,
  /\bgartner['‘’`s]{1,2}\sducts?\b/gmi,
  /\bg(?:alen|iacomini)\sveins?\b/gmi,

  // GE
  /\bg(?:erota|lisson)['‘’`s]{1,2}\scapsule\b/gmi,
  /\bgerdy['‘’`s]{1,2}\sfib[er]{2}s?\b/gmi,

  //GI
  /\bgianotti[\s-]+crosti\ssyndrome\b/gmi,
  /\bgillick\scompetence\b/gmi,

  // GL
  /\bglands?\sof\s(?:bartholin|brunner|cowper|littr[eé]|meibomian|moll|montgomery|skene|von\sebner)\b/gmi,
  
  // GO
  /\bgolgi\s(?:apparatus|receptor)\b/gmi,
  /\bgood\spulse\b/gmi,

  // GR
  /\bgraafian\sfollicle\b/gmi,
  /\bgr[aäe]{1,2}fenberg\sspot\b/gmi,
  /\bgram[-\s]neg(?:ative)?\b/gmi,

  // GU
  /\bguillain[\s-]+barr[eé]\ssyndrome\b/gmi,

  // HA
  /\bhartmann['‘’`s]{1,2}\spouch\b/gmi,
  /\bhaversian['‘’`s]{1,2}\scanal\b/gmi,
  /\bhasner['‘’`s]{1,2}\sfold\b/gmi,
  /\bhay\sfever\b/gmi,
  
  //HE
  /\bhesselbach['‘’`s]{1,2}\striangle\b/gmi,
  /\bherr?ing['‘’`s]{1,2}\s(?:bodies|canal|nerve)\b/gmi,
  /\bheschl['‘’`s]{1,2}\sgyri\b/gmi,
  /\bhenle['‘’`s]{1,2}\sloop\b/gmi,
  /\bhenoch[\s-]+schonlein\spurpura\b/gmi,
  /\bheister['‘’`s]{1,2}\svalves?\b/gmi,

  // HI
  /\bhickmann?['‘’`s]{1,2}\slines?\b/gmi,
  /\bhirschsprung['‘’`s]{1,2}\sdisease\b/gmi,
  /\bhickmann?\sinsitu\b/gmi,

  // HO
  /\bh[\\\/]o\b/gmi,
  /\bhodgkin['‘’`s]{1,2}\slymphoma\b/gmi,
  /\bhouston['‘’`s]{1,2}\s(?:muscle|vavle)s?\b/gmi,

  // HU
  /\bhurthle\scells?\b/gmi,
  /\bhuguier['‘’`s]{1,2}\scanal\b/gmi,
  /\bhurt\s(?:ankle|arm|back|finger|foot|head|hip|jaw|knee|neck|shoulder|toe|wrist)\b/gmi,

  // HY
  /\bhydatids\sof\smorgagni\b/gmi,

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
  /\bkiesselbach['‘’`s]{1,2}\splexus\b/gmi,
  /\bkernohan\snotch\b/gmi,
  /\bkrause['‘’`s]{1,2}\send\b/gmi,
  /\bkab(?:oo|u)ki\ssyndrome\b/gmi,
  /\bkerckring['‘’`s]{1,2}\svalves?\b/gmi,
  /\bkawasaki['‘’`s]{1,2}\sdisease\b/gmi,
  /\b[a-z]+knee\b/gmi,

  // LA
  /\blang(?:erhans|hans\sgiant)\scells?\b/gmi,
  /\blacunae\sof\smorgagni\b/gmi,
  /\blauth['‘’`s]{1,2}\scanal\b/gmi,
  /\blanger['‘’`s]{1,2}\slines?\b/gmi,
  /\blassa\sfever\b/gmi,

  // LE
  /\bleft\sfoot\b/gmi,
  /\bleydig\scells?\b/gmi,
  /\bleuks\b/gmi,

  // LI
  /\blister['‘’`s]{1,2}\stubercle\b/gmi,
  /\blitt?le\s(?:finger|toe)s?\b/gmi,
  /\bligaments?\sof\s(?:cooper|lockwood|poupart|struthers|treves|treitz)\b/gmi,
  /\blines?\sof\s(?:douglas|hickmann?|langer|spiegelian)\b/gmi,
  /\blittre['‘’`s]{1,2}\sglands?\b/gmi,
  /\blissauer['‘’`s]{1,2}\stract\b/gmi,
  /\blichenoid\skeratosis?\b/gmi,
  /\blimbus\sof\svieussens\b/gmi,

  // LO
  /\blockjaw\b/gmi,
  /\bloop\sof\s(?:henle|meyer)\b/gmi,
  /\blower\s(?:arm|back|gum|head|leg|lobe)\b/gmi,
  /\blockwood['‘’`s]{1,2}\sligaments?\b/gmi,
  /\blovibond['‘’`s]{1,2}\sangle\b/gmi,
  /\blobar\spneumonia\b/gmi,

  // LU
  /\blumbago\b/gmi,
  /\bluschka['‘’`s]{0,2}\s(?:duct|foramina|joint)s?\b/gmi,
  /\blupus\snephritis\b/gmi,
  /\blund['‘’`s]{1,2}\snode\b/gmi,

  // LY
  /\blyme['‘’`s]{1,2}\sdisease\b/gmi,
  /\blynch\ssyndrome\b/gmi,

  // M
  /\bmonro\sforamina\b/gmi,
  /\bm(?:eibomian|oll|ontgomery)['‘’`s]{1,2}\sglands?\b/gmi,
  /\bm[üue]{1,2}llerian['‘’`s]{1,2}\sducts?\b/gmi,
  /\bm(?:antle|erkel)\scells?\b/gmi,
  /\bmeyer['‘’`s]{1,2}\sloop\b/gmi,
  /\bma?cewen['‘’`s]{1,2}\striangle\b/gmi,
  /\bmorison['‘’`s]{1,2}\spouch\b/gmi,
  /\bmeissner['‘’`s]{1,2}\splexus\b/gmi,
  /\bm[öoe]{1,2}ll['‘’`s]{1,2}\sspaces?\b/gmi,
  /\bmonteggia['‘’`s]{1,2}\sfract\w+\b/gmi,
  /\bmorton['‘’`s]{1,2}\sneuroma\b/gmi,
  /\bmirena\scoil\b/gmi,
  /\bmicke?y\sbutton\b/gmi,
  /\bmiddle\stoe\b/gmi,
  /\bMAC\ssedation\b/gmi,
  /\bmacula\b/gmi,
  /\bmallory[\s-]+weiss\stear\b/gmi,
  /\bmax\sdose\b/gmi,
  /\bmobitz\stype\b/gmi,
  /\bmongolian\sblue\sspots?\b/gmi,
  /\bmeckel['‘’`s]{1,2}\scartilage\b/gmi,
  /\bmcburney['‘’`s]{1,2}\spoint\b/gmi,
  /\bmeckel['‘’`s]{1,2}\sdiverticulum\b/,
  /\bm(?:alpighian|eissner)['‘’`s]{1,2}\scorpuscles?\b/gmi,
  /\bmc\sswelling\b/gmi,

  // N
  /\bN\/V\s(?:intact|observations)\b/gmi,
  /\bnpmh\b/gmi,
  /\bneisseria\smeningitidis\b/gmi,
  /\bng\s(?:feed|tube)s?\b/gmi,
  /\bNG\b/gm,
  /\bnode\sof\s(?:lund|ranvier|virchow)\b/gmi,
  /\bnissl\s(?:bodies|granules|substance)\b/gmi,
  /\bnerve\sof\s(?:bell|herr?ing)\b/gmi,
  /\bneurovascula\b/gmi,

  // O
  /\boto\/rhino/gmi,
  /\boedmea\b/gmi,
  /\bosteogen[io]us\b/gmi,
  /\bottawa\s(?:rule|sign)s?\b/gmi,
  /\borgan\sof\s(?:corti|zuckerkandl)\b/gmi,
  /\bouter\sfoot\b/gmi,
  /\bof\shead\b/gmi,

  // P
  /\bp(?:alsy|elvic|harma|harynx|helgm|hleugm|olio|ylori)\b/gmi,
  /\bpott['‘’`s]{1,2}\sfract\w+\b/gmi,
  /\bpimenta['‘’`s]{1,2}\spoint\b/gmi,
  /\bpacinian['‘’`s]{1,2}\scorpuscles?\b/gmi,
  /\bprussak['‘’`s]{1,2}\sspaces?\b/gmi,
  /\bp(?:aneth|urkinje)\scells?\b/gmi,
  /\bpoupart['‘’`s]{1,2}\sligaments?\b/gmi,
  /\bpurkinje['‘’`s]{1,2}\sfib[er]{2}s?\b/gmi,
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
  /\bpink\s(?:bumps?|cheeks|eye|skin)\b/gmi,
  /\bproteus\smirabilis\b/gmi,
  /\bpeyer['‘’`s]{1,2}\spatches\b/gmi,
  /\bparieto[\s-]+occipital\b/gmi,
  /\bpearl\ssize\b/gmi,
  /\bpost\singestion\b/gmi,

  // R
  /\bring\sfinger\b/gmi,
  /\bred\s(?:bump|call|cheek|eye|mark|nail|skin)s?\b/gmi,
  /\brenshaw\scells?\b/gmi,
  /\bretzius['‘’`s]{1,2}\sspaces?\b/gmi,
  /\bruffini['‘’`s]{1,2}\scorpuscles?\b/gmi,
  /\brectum\b/gmi,
  /\breichert['‘’`s]{1,2}\scartilage\b/gmi,
  /\brathke['‘’`s]{1,2}\spouch\b/gmi,
  /\braynaud['‘’`s]{1,2}\sdisease\b/gmi,
  /\bretzius\sveins?\b/gmi,
  /\bradi[au]l\spulse\b/gmi,
  /\broof\sof\smouth\b/gmi,
  /\brotter['‘’`s]{1,2}\slymph\b/gmi,
  /\briedel['‘’`s]{1,2}\slobe\b/gmi,
  /\brokitansky[\s–]aschoff\ssinuses\b/gmi,
  /\brolandic\sfissure\b/gmi,
  /\branvier['‘’`s]{1,2}\snode\b/gmi,

  // SA
  /\bsalter[\s-]+harris\b/gmi,
  /\bsantorini['‘’`s]{1,2}\sducts?\b/gmi,

  // SC
  /\bschwann\scells?\b/gmi,
  /\bschlemm['‘’`s]{1,2}\scanal\b/gmi,
  /\bscarlett?\sfever\b/gmi,

  // SE
  /\bsertoli\scells?\b/gmi,

  // SH
  /\bshrapnell['‘’`s]{1,2}\smembrane\b/gmi,
  /\bshoulder\sblade\b/gmi,
  /\bsharpey['‘’`s]{1,2}\sfib[er]{2}s?\b/gmi,

  // SI
  /\bside\s(?:of\s)?(?:arm|back|head)\b/gmi,
  /\bsinus\sof\svalsalva\b/gmi,
  /\bsick[le]{2}\scells?\b/gmi,

  // SK
  /\bskene['‘’`s]{1,2}\sglands?\b/gmi,

  // SM
  /\bsmall\sswelling\b/gmi,

  // SP
  /\bspiegelian['‘’`s]{1,2}\s(?:fascia|line|lobe)s?\b/gmi,
  /\bsphincter\sof\soddi\b/gmi,
  /\bsputum\b/gmi,
  /\bspaces?\sof\s(?:disse|m[öoe]{1,2}ll|prussak|retzius|traube|virchow[\s–]robin)\b/gmi,

  // ST
  /\bsteri[\s-]strip\b/gmi,
  /\bstung\sby\b/gmi,
  /\bstruthers['‘’`s]{1,2}\sligaments?\b/gmi,
  /\bstreptococci\b/gmi,
  /\bstilling['‘’`s]{1,2}\scanal\b/gmi,
  /\bstensen['‘’`s]{1,2}\sducts?\b/gmi,

  // SU
  /\bsupra?condu?[ly]{2}ar\b/gmi,

  // SY
  /\bsylvian\saqueduct\b/gmi,

  // TA
  /\btalus['‘’`s]{1,2}\sfract\w+\b/gmi,
  /\btalc\spleurodesis\b/gmi,
  /\btachycardi\b/gmi,

  // TE
  /\btenckhoff\scatheter\b/gmi,

  // TH
  /\bthebesian['‘’`s]{1,2}\s(?:foramina|valves?|veins?)\b/gmi,
  /\bthenar?\seminence\b/gmi,
  /\bthumb\sspica\b/gmi,

  // TI
  /\btinea\spedis\b/gmi,

  // TO
  /\btop\sof\s(?:the\s)?(?:back|foot|head)\b/gmi,
  /\btorcular\sherophili\b/gmi,
  /\btourette['‘’`s]{1,2}\ssyndrome\b/gmi,

  // TR
  /\btreitz['‘’`s]{1,2}\sligaments?\b/gmi,
  /\btraube['‘’`s]{1,2}\sspaces?\b/gmi,
  /\btreves['‘’`s]{1,2}\s(?:fold|ligament)s?\b/gmi,  

  // U
  /\bu(?:lna|rethra|teri)\b/gmi,
  /\bupper\s(?:arm|back|gum|head|leg|lobe)\b/gmi,

  // V
  /\bvon\sebner['‘’`s]{1,2}\sglands?\b/gmi,
  /\bverucca\b/gmi,
  /\bvirchow[\s–]robin['‘’`s]{1,2}\sspaces?\b/gmi,
  /\bvieussen['‘’`s]{1,2}\svalves?\b/gmi,
  /\bvalves?\sof\s(?:heister|houston|kerckring|thebesian|vieussens)\b/gmi,
  /\bveil\sof\streves\b/gmi,
  /\bvaso\s?vagal\b/gmi,
  /\bveins?\sof\s(?:galen|giacomini|retzius|thebesian)\b/gmi,
  /\bvirchow['‘’`s]{1,2}\snode\b/gmi,
  /\bvomm?itt?\b/gmi,
  /\bvulva\b/gmi,
  /\bvascula\b/gmi,
  
  // W
  /\bwell\sperfused\b/gmi,
  /\bweber\stype\s[a-z]['‘’`s]{1,2}\sfract\w+\b/gmi,
  /\bw(?:harton|irsung|olffian)['‘’`s]{1,2}\sducts?\b/gmi,
  /\bwernicke['‘’`s]{1,2}\sareas?\b/gmi,
  /\bwasp\ssting\b/gmi,
  /\bwenckebach['‘’`s]{1,2}\sbundle\b/gmi,
  /\bwaldenstrom\smacroglobulinemia\b/gmi,
  /\bwolf[ef][\s-]+parkin?son(?:[\s-]+white)?\b/gmi,
  /\bwaldeyer['‘’`s]{1,2}\stonsillar\b/gmi,
  /\bweibel[\s–]palade\sbody\b/gmi,
  /\bwell\s(?:baby|child)\b/gmi,
  /\bwharton['‘’`s]{1,2}\sjelly\b/gmi,
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