const a: RegExp[] = [
  /\bachilli?es\stendon/gmi,
  /\badam['‘’`]?s?\sapple\b/gmi,
  /\b(?:addison|hirschsprung|kawasaki|lyme|raynaud)['‘’`]?s?\sdisease\b/gmi,
  /\b(?:alcock|cloquet|dorello|haversian|hering|huguier|lauth|schlemm|stilling)['‘’`]?s?\scanal\b/gmi,
  /\bcanals?\sof\s(?:alcock|cloquet|dorello|haversian|hering|huguier|lauth|schlemm|stilling)\b/gmi,
  /\balzheimers?\b/gmi,
  /\bamerican\scutaneous\sleishmaniasis\b/gmi,
  /\bangio[\s-]+oedema\bb/gmi,
  /\bapneoas\b/gmi,
  /\bartery\sof\s(?:adamkiewicz|percheron)\b/gmi,
  /\bas(?:th|ht)ma\b/gmi,
  /\b(?:auerbach|batson|kiesselbach|little|meissner)['‘’`]?s?\splexus\b/gmi,
  // B
  /\bbaerveldt\s(?:shunt|tube)\b/gmi,
  /\b(?:bachmann|wenckebach)['‘’`]?s?\sbundle\b/gmi,
  /\bback\sof\shead\b/gmi,
  /\bback\spassage\b/gmi,
  /\bbarking\scough\b/gmi,
  // C
  /\bcaudal\sepidural\b/gmi,
  /\bglands?\sof\s(?:bartholin|brunner|cowper|littr[eé]|meibomian|moll|montgomery|skene|von\sebner)\b/gmi,
  /\b(?:bartholin|brunner|cowper|littr[eé]|meibomian|moll|montgomery|skene|von\sebner)['‘’`]?s?\sglands?\b/gmi,
  /\bedinger[\s–]westphal\snucleus\b/gmi,
  /\b(?:bellini|cuvier|gartner|luschka|m[üue]{1,2}llerian|santorini|stensen|wharton|wirsung|wolffian)['‘’`]?s?\sducts?\b/gmi,
  // D
  /\bdexa\b/gmi,
  /\bdiarro?he?o?a\b/gmi,
  /\bducts?\sof\s(?:bellini|cuvier|gartner|luschka|m[üue]{1,2}llerian|santorini|stensen|wharton|wirsung|wolffian)\b/gmi,
  /\bforamina\sof\s(?:luschka|monro|thebesian)\b/gmi,
  /\b(?:luschka|monro|thebesian)\sforamina\b/gmi,
  /\bforamen\sof\s(?:magendie|winslow)\b/gmi,
  /\b(?:bee|wasp)\ssting\b/gmi,
  /\b(?:eustachian|fallopian)\stube\b/gmi,
  /\bnerve\sof\s(?:bell|herr?ing)\b/gmi,
  /\b(?:bell|herr?ing)['‘’`]?s?\snerve\b/gmi,
  /\b(?:balbiani|herr?ing|nissl)\sbodies\b/gmi,
  /\bbrady\sepisode\b/gmi,
  /\bcolumns\sof\sbertin\b/gmi,
  /\b(?:betz|cajal[\s-](?:retzius\s)?|clara|hurthle|kupffer|langerhans|langhans\sgiant|leydig|mantle|merkel|paneth|purkinje|renshaw|schwann|sertoli|sick[le]{2})\scells?\b/gmi,
  /\bbillroth['‘’`]?s?\scords\b/gmi,
  /\bblood\surate\b/gmi,
  /\b(?:bowman|gerota|glisson)['‘’`]?s?\scapsule\b/gmi,
  /\b(?:bowman|descemet|shrapnell)['‘’`]?s?\smembrane\b/gmi,
  /\b(?:boxer|colles|monteggia['‘’`s]*|pott|salter[\s-]+harris|talus|weber\stype\s[a-z])['‘’`]?s?\sfract\w+\b/gmi,
  /\bsalter[\s-]+harris\s(?:type\s)?[IVX1-9]{1,3}\b/gmi,
  // syndrome
  /\b(?:brugada|duane|dwayne|edwards|ehlers[\s-]*danlos|evans|fanconi)\ssyndrome\b/gmi,
  /\b(?:gianotti[\s-]+crosti|guillain[\s-]+barr[eé]|kab(?:oo|u)ki|lynch)\ssyndrome\b/gmi,
  /\b(?:phel[ai][mn][\s-]+mcderm[io]d|prader[\s-]+willi)\ssyndrome\b/gmi,
  
  /\b(?:broca|brodmann?|wernicke)['‘’`]?s?\sareas?\b/gmi,
  /\b(?:buck|colles|cooper|denonvilliers|gallaudet|spiegelian)['‘’`]?s?\sfascia\b/gmi,
  /\b(?:burkitt|hodgkin)['‘’`]?s?\slymphoma\b/gmi,
  /\bcooper['‘’`]?s?\s(?:iliopectineal|suspensory)\sligaments?\b/gmi,
  /\b(?:cooper|lockwood|poupart|struthers|treves|treitz)['‘’`]?s?\sligaments?\b/gmi,
  /\bligaments?\sof\s(?:cooper|lockwood|poupart|struthers|treves|treitz)\b/gmi,
  /\bcalyx\sof\sheld\b/gmi,
  /\b(?:calot|hesselbach|macewen)['‘’`]?s?\striangle\b/gmi,
  /\bantrum\sof\shighmore\b/gmi,
  /\b[Bb]undle\sof\sHis\b/gm,
  /\bcat\sbite\b/gmi,
  /\bdiamond\sblack(?:fan)?\b/gmi,
  /\bear\s(?:drum|lobe)s?\b/gmi,
  /\b(?:chassaignac|darwin|lister)['‘’`]?s?\stubercle\b/gmi,
  /\bcocc[iy]x\b/gmi,
  /\bcricket\ssplint\b/gmi,
  /\bspaces?\sof\s(?:disse|m[öoe]{1,2}ll|prussak|retzius|traube|virchow[\s–]robin)\b/gmi,
  /\b(?:disse|m[öoe]{1,2}ll|prussak|retzius|traube|virchow[\s–]robin)['‘’`]?s?\sspaces?\b/gmi,
  /\bgolgi\s(?:apparatus|receptor)\b/gmi,
  /\bc[or]{2}yz[ao]l?\b/gmi,
  /\borgan\sof\s(?:corti|zuckerkandl)\b/gmi,
  /\bcostal\schondritis\b/gmi,
  /\bpouch\sof\s(?:douglas|hartmann|morison|rathke)\b/gmi,
  /\b(?:douglas|hartmann|morison|rathke)['‘’`]?s?\spouch\b/gmi,
  /\b(?:cysts?|hydatids|lacunae)\sof\smorgagni\b/gmi,
  // J
  /\bjew[ei]tt\sbrace\b/gmi,
  /\bjobson\shorne\sprobe\b/gmi,
  // L
  /\blichenoid\skeratosis?\b/gmi,
  /\bdossett\sbox\b/gmi,
  /\be[\s-]?coli\b/gmi,
  /\b(?:gerdy|purkinje|sharpey)['‘’`]?s?\sfib[er]{2}s?\b/gmi,
  /\bepididymo[\s-]+orchitis\b/gmi,
  /\becthyma\sgangrenosum\b/gmi,
  /\bescherichia\scoli\b/gmi,
  // M
  /\bmorton['‘’`]?s\sneuroma\b/gmi,
  /\bmirena\scoil\b/gmi,
  /\bmicke?y\sbutton\b/gmi,
  /\bnissl\sgranules\b/gmi,
  /\bnissl\ssubstance\b/gmi,
  /\bflu\svacc(?:ine|ination)?\b/gmi,
  /\bfrank\sh[ae]{2}maturia\b/gmi,
  /\b(?:galen|giacomini|retzius|thebesian)\sveins?\b/gmi,
  /\bveins?\sof\s(?:galen|giacomini|retzius|thebesian)\b/gmi,
  /\bgraafian\sfollicle\b/gmi,
  /\bgr[aäe]{1,2}fenberg\sspot\b/gmi,
  /\bgram[-\s]neg(?:ative)?\b/gmi,
  /\bcrypts\sof\s(?:lieberk[üue]{1,2}hn|luschka)\b/gmi,
  /\bpalm[ae]r\saspect\b/gmi,
  /\bperformed\sheimlich\b/gmi,
  /\b(?:hasner|treves)['‘’`]?s?\sfold\b/gmi,
  /\bfold\sof\s(?:hasner|treves)\b/gmi,
  /\b(?:hay|scarlett?)\sfever\b/gmi,
  /\b(?:inner|lower|outer|upper)\s(?:inner|lower|outer|upper)\b/gmi,
  /\bvalves?\sof\s(?:heister|houston|kerckring|thebesian|vieussens)\b/gmi,
  /\b(?:heister|houston|kerckring|thebesian|vieussens)['‘’`]?s?\svalves?\b/gmi,
  /\blines?\sof\s(?:douglas|hickmann?|langer|spiegelian)\b/gmi,
  /\bleuks\b/gmi,
  /\b(?:douglas|hickmann?|langer|spiegelian)['‘’`]?s?\slines?\b/gmi,
  // H
  /\bheschl['‘’`]?s?\sgyri\b/gmi,
  /\bhouston['‘’`]?s?\smuscle\b/gmi,
  /\bhenoch[\s-]+schonlein\spurpura\b/gmi,
  /\bdouble\s(?:lumen\s)?hickmann?\b/gmi,
  /\bhickmann?\sinsitu\b/gmi,
  /\biga\svasculitis\b/gmi,
  /\binflammation\sof\sbursa\b/gmi,
  /\binjurys\b/gmi,
  /\bkernohan\snotch\b/gmi,
  /\bislets\sof\slangerhans\b/gmi,
  /\bpores\sof\skohn\b/gmi,
  /\bangle\sof\slouis\b/gmi,
  /\blovibond['‘’`]?s?\sangle\b/gmi,
  /\b(?:mcburney|pimenta)['‘’`]?s?\spoint\b/gmi,
  /\bkrause['‘’`]?s?\send\b/gmi,
  /\blissauer['‘’`]?s?\stract\b/gmi,
  /\blittle\stoe\b/gmi,
  /\b(?:meckel|reichert)['‘’`]?s?\scartilage\b/gmi,
  /\bparieto[\s-]+occipital\b/gmi,
  /\bmeckel['‘’`]?s?\sdiverticulum\b/,
  /\blobar\spneumonia\b/gmi,
  /\b(?:malpighian|meissner|pacinian|ruffini)['‘’`]?s?\scorpuscles?\b/gmi,
  /\bloop\sof\s(?:henle|meyer)\b/gmi,
  /\b(?:henle|meyer)['‘’`]?s?\sloop\b/gmi,
  /\blower\s(?:arm|back|lobe)\b/gmi,
  /\b(?:lund|ranvier|virchow)['‘’`]?s?\snode\b/gmi,
  /\bnode\sof\s(?:lund|ranvier|virchow)\b/gmi,
  /\blupus\snephritis\b/gmi,
  /\bluschka['‘’`]?s?\sjoints\b/gmi,
  /\bMAC\ssedation\b/gmi,
  /\bmacula\b/gmi,
  /\bmallory[\s-]+weiss\stear\b/gmi,
  /\bmax\sdose\b/gmi,
  /\bmobitz\stype\b/gmi,
  /\bmongolian\sblue\sspots?\b/gmi,
  // N
  /\bneisseria\smeningitidis\b/gmi,
  /\bng\s(?:feed|tube)s?\b/gmi,
  /\bNG\b/gm,
  /\bsphincter\sof\soddi\b/gmi,
  /\bpapez\scircuit\b/gmi,
  /\bparenchymal\b/gmi,
  /\bpar[ao]n[iy]chia\b/gmi,
  /\bpityriasis\srosea\b/gmi,
  /\bplaster\sof\sparis\b/gmi,
  /\b(?:pink|red)\s(?:bumps?|cheeks|eye)\b/gmi,
  /\bproteus\smirabilis\b/gmi,
  /\bpeyer['‘’`]?s?\spatches\b/gmi,
  /\bosteogen[io]us\b/gmi,
  /\bottawa\s(?:signs?\s)?negative\b/gmi,
  /\bisland\sof\sreil\b/gmi,
  /\b(?:riedel|spiegelian)['‘’`]?s?\slobe\b/gmi,
  /\brokitansky[\s–]aschoff\ssinuses\b/gmi,
  /\bsinus\sof\svalsalva\b/gmi,
  /\brolandic\sfissure\b/gmi,
  /\bfissure\sof\srolando\b/gmi,
  /\brotter['‘’`]?s?\slymph\b/gmi,
  /\b(?:side|upper)\s(?:arm|head)\b/gmi,
  /\bsplinter\s(?:bottom|under)\b/gmi,
  /\bsupracondu?[ly]{2}ar\b/gmi,
  /\b(?:pinky|ring)\sfinger\b/gmi,
  /\bradi[au]l\spulse\b/gmi,
  /\broof\sof\smouth\b/gmi,
  /\bsylvian\saqueduct\b/gmi,
  // T
  /\btalc\spleurodesis\b/gmi,
  /\btenckhoff\scatheter\b/gmi,
  /\btorcular\sherophili\b/gmi,
  /\bfracture\sof\stalus\b/gmi,
  /\btinea\spedis\b/gmi,
  /\bveil\sof\streves\b/gmi,
  /\bvaso\s?vagal\b/gmi,
  /\bampulla\sof\svater\b/gmi,
  /\blimbus\sof\svieussens\b/gmi,
  /\b(?:bilharzia|coryzol|e(?:cz|xc)ema|infarct|influenza|insitu|lockjaw|lumbago|npmh|palsy|pelvic|pharma|pharynx|phelgm|phleugm|polio|pylori|rectum|sputum|streptococci|ulna|urethra|uteri|verucca|vulva)\b/gmi,
  /\bwaldenstrom\smacroglobulinemia\b/gmi,
  /\bwaldeyer['‘’`]?s?\stonsillar\b/gmi,
  /\bweibel[\s–]palade\sbody\b/gmi,
  /\bwell\schild\b/gmi,
  /\bwharton['‘’`]?s?\sjelly\b/gmi,
  /\bwhite\scoating\son\b/gmi,
  /\bwhite\slines\sof\stoldt\b/gmi,
  /\bwormian\sbones\b/gmi,
  /\bcircle\sof\swillis\b/gmi,
  /\bwalk\son\stoes\b/gmi,
  /\bwolf[ef][\s-]+parkin?son(?:[\s-]+white)?\b/gmi,
  /\bx[\s-]*ray(?:ed|s)?\b/gmi,
  /\bzonule\sof\szinn\b/gmi,
  /\bzygoma\b/gmi,
  /\bzygote\b/gmi
];
const MedicalTermRegEx: Set<RegExp> = new Set();
a.forEach(term => MedicalTermRegEx.add(term));
export {
  MedicalTermRegEx
};