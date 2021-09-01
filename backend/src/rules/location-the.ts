export const LocationTheRegEx: RegExp[] = [
  /\bThe\sAb(?:be['‘’`s]*|bey)\b/gm,
  /\bThe\sAc(?:ademy|orns?|res?)\b/gm,
  /\bThe\sAl(?:cove|lotments?|monds|oes|t|tars)\b/gm,
  /\bThe\sAmerica\b/gm,
  /\bThe\sAn(?:nunciation|tiquaries|ts|vil)\b/gm,
  /\bThe\sAp(?:iary|pleyard|proach|rons)\b/gm,
  /\bThe\sAquadrome\b/gm,
  /\bThe\sAr(?:ans|bory|bours|c|cade|chbishop['‘’`s]*|chery|ches|chway|k|m|moury|ms|t\sAcademy)\b/gm,
  /\bThe\sA(?:sh|uks|venues?|wful\sHand|xe|xis)\b/gm,
  
  /\bThe\sBa(?:bes|cks?|d\sStep|iliwick|ils|keries|ker[sy]|nks?|tts|ulks?|ys?)\b/gm,
  /\bThe\sBal(?:es|k|ls?)\b/gm,
  /\bThe\sBar(?:nyard|on[sy]|racks|rows|s)?\b/gm,
  /\bThe\sBas(?:ins?|s|ses|tard)\b/gm,
  /\bThe\sBat(?:ch|ches|he|tery(?:\s[Bb]anks)?)\b/gm,
  /\bThe\sBea(?:ch|cons?|m|rs?|st)\b/gm,
  /\bThe\sBe(?:ck|eches|dwyns|es|ef\sBarrel|ehives?|ll|lsteads|lt|nch|nefits|rries|nt)\b/gm,
  /\bThe\sBi(?:ble\sCollege|g\sAct|n|rches|te?|tches)\b/gm,
  /\bThe\sBl(?:ade|ind|uebells)\b/gm,
  /\bThe\sBo(?:ar|at|g|lt|oks|ot|re|rder|ttom|ught|ulevard|unds?|undaries|undary|wl)\b/gm,
  /\bThe\sBra(?:ckens?|ids?|ke|kes\sWood|mbles|nch|nd|wn)\b/gm,
  /\bThe\sBre(?:ach|aches|ech|ezes?)\b/gm,
  /\bThe\sBri(?:ars|ary|ckyard|dges?|dle(?:\s(?:Lane|Path|Road|Way))?|ers?|g|ng|t)\b/gm,
  /\bThe\sBro(?:ads?|adway|oks|oms?|thers|ugh|ws?|xbourne)\b/gm,
  /\bThe\sBru(?:sh|shes)\b/gm,
  /\bThe\sBu(?:cklers|dding|ffer|ngalows|ntings?|ll\sRing|rns?|s|sh|shes|sy|tchery|tts)\b/gm,
  /\bThe\sBy(?:e|e?[\s-](?:[Pp]ass|[Ww]ays?))\b/gm,
  
  /\bThe\sCa(?:ble|irns|lf|lls?|pes|st|stle|t|thedral|useway)\b/gm,
  /\bThe\sCam(?:p|pus)\b/gm,
  /\bThe\sCan(?:al|dle|dlemakers)\b/gm,
  /\bThe\sCar(?:e|penters|riages|t\sTrack|ts)?\b/gm,
  /\bThe\sCentre\b/gm,
  /\bThe\sCha(?:in|ir|lets|lks?|mbers|pel|pelry|rt|rters?|se|tters|ucer)\b/gm,
  /\bThe\sChan(?:cellor|cery|dlers|nels?|tries|ters)\b/gm,
  /\bThe\sCh(?:eck|eeses|erwell|ild['‘’`]?s\sSeat|imes|imneys|ocolate\sWorks)\b/gm,
  /\bThe\sCi(?:rcle|rcuits?|rcus|ty)\b/gm,
  /\bThe\sCl(?:amps?|assics|earings|ears|eats|imb|ippers|ock\sWood|ose|oud|ub|umps?)\b/gm,
  /\bThe\sCoach(?:\s(?:Drive|Houses?|Road)|works)\b/gm,
  /\bThe\sCoa(?:lpits|st(?:\sGuards)?)\b/gm,
  /\bThe\sCob(?:bler|bles)?\b/gm,
  /\bThe\sCokers\b/gm,
  /\bThe\sCol(?:lege|liers|liery|onnade|ony|ts|umbines?)\b/gm,
  /\bThe\sCom(?:bs|frey|mons?|munity\sCollege|p|pass)\b/gm,
  /\bThe\sCon(?:duit|nection|ifers|stables|suls)\b/gm,
  /\bThe\sCop(?:es|pice|per\s[Bb]eeches|se)?\b/gm,
  /\bThe\sCor(?:morant|nfields|n|ners?|nfields|ries)\b/gm,
  /\bThe\sCou(?:nty|rse|rtrooms|rts?|rtyards?)\b/gm,
  /\bThe\sCove(?:rs|rts|s|t)\b/gm,
  /\bThe\sCo(?:-?[Oo]perative|ttage|ttons|w)\b/gm,
  /\bThe\sCra(?:dle|fty?|gs|nny|ven|y)\b/gm,
  /\bThe\sCre(?:amery|ed|ek|scents?|ase|st)\b/gm,
  /\bThe\sCricketers\b/gm,
  /\bThe\sCro(?:fts?|fters|ps|ok|ss|ssings?|sspath|ssroads|ssways|wns)\b/gm,
  /\bThe\sCr(?:ucible|umbles|usades|ypt)\b/gm,
  /\bThe\sCu(?:ckoo|lvert|p|rtain|rve|t|tter|ttings?)\b/gm,
  /\bThe\sCy(?:cle\sWorks|gnets|linders)\b/gm,
  
  /\bThe\sDa(?:ffodils|iry|shes)\b/gm,
  /\bThe\sDe(?:af\sAcademy|als|anery|ep|er\sLeap)\b/gm,
  /\bThe\sDi(?:al|sputes|strict\sChurch|tch)\b/gm,
  /\bThe\sDo(?:cks?|ors|ves|wns?|wns\sBrake)\b/gm,
  /\bThe\sDr(?:ain|ays|ift(?:way)?|ive|iveway|ums?)\b/gm,
  /\bThe\sDue\b/gm,
  /\bThe\sDy(?:es|ke\sForest|kes)\b/gm,
  
  /\bThe\sEa(?:ger|rls|rthquake)\b/gm,
  /\bThe\sEl(?:ders|even\sAcre|lipse|ms)\b/gm,
  /\bThe\sEn(?:d|gine(?:\sGreen)?|try)\b/gm,
  /\bThe\sE(?:-Act|dge|ducation\sVillage|ight\sAcres|piphany|xchange|xpressway|yes)\b/gm,
  
  /\bThe\sFa(?:irground|irways?|lcon|lconers|lcons|lls?|n|rm|rmlands|rmstead|rriers|rthings|wn)\b/gm,
  /\bThe\sFe(?:athers|eder|lls?|llows|n|nce|rries|rry)\b/gm,
  /\bThe\sFi(?:ddle|ddlers|elds?|elders|ndings|nger|rs|rst|sheries|sher[sy]|ve\sSprings)\b/gm,
  /\bThe\sFl(?:ags|ash|ashes|ats?|etches|eece|eets?|ints|oats|ood|oors?|ourish|yers)\b/gm,
  /\bThe\sFol(?:ds?|ders|dings|lies|ly)\b/gm,
  /\bThe\sFoot(?:hills|path)?\b/gm,
  /\bThe\sFore(?:head|st|stry|stside)\b/gm,
  /\bThe\sFor(?:d|ces?|ge|ks|t|ties|tress|tunes|ty(?:\sacres?)?|um)\b/gm,
  /\bThe\sFo(?:undry|ur\s(?:Acres?|Tubs|Wents)|x|xholes|xes)\b/gm,
  /\bThe\sFra(?:minghams|mptons)\b/gm,
  /\bThe\sFre(?:e\sSchool|ehold|eway|nchman)\b/gm,
  /\bThe\sFriars\b/gmi,
  /\bThe\sFront\b/gm,
  /\bThe\sF(?:urlong|urlough|urrows?|ylde)\b/gm,
  
  /\bThe\sGa(?:bles|ges|llery|lleries|llops?|le|ng|ngway|ps?|rdens?|rlands|rners|tes?|teways?|vels)\b/gm,
  /\bThe\sGe(?:ars?|o)\b/gm,
  /\bThe\sGl(?:ades?|assworks|impse|obal\sAcademy|obe)\b/gm,
  /\bThe\sGo(?:al|ats\sLeap\sPool|d\sAlmighty|re|rge|rses?)\b/gm,
  /\bThe\sGra(?:dient|in\sStore|naries|nary|nd|nge|sslands|tes|ves|zings|zing\sGrounds)\b/gm,
  /\bThe\sGre(?:en(?:\sDrift)?|ens|ens\sClose|at\sFace|at\sGully|y\sCorries|ys)\b/gm,
  /\bThe\sGri(?:d|p|pes|st)\b/gm,
  /\bThe\sGro(?:ve|in|unds|ves)\b/gm,
  /\bThe\sGu(?:ards?|ides\sFlat|ild|lf|ll|llet|lley|lls|lly|n|t|tter|vnor['‘’`]?s\sBelt|ys)\b/gm,

  /\bThe\sHa(?:lve|ngers?|nging|ngs|rbour|rd(?:\sInterchange)?|t)\b/gm,
  /\bThe\sHe(?:ads?|adway|ath|edge\s?[Rr]ow|dges|ights?|ritage)\b/gm,
  /\bThe\sHi(?:de|deaway|gh|ghlight|gh\sSchool|lls?|ves?)\b/gm,
  /\bThe\sHol(?:dings|es?|lies|lows?|lyoaks|mwoods)\b/gm,
  /\bThe\sHome(?:lands|s|steads?)\b/gm,
  /\bThe\sHor(?:n|nbeams|nets?|sefair|se\s?[Ss]hoes?|ses?)\b/gm,
  /\bThe\sHo(?:e|g|ods|ming|oks?|pes|pper|spital)\b/gm,
  /\bThe\sHu(?:b|ddles|mp|ndred|nt\sClose|rdles|stings|tches)\b/gm,

  /\bThe\sImage\sCentre\b/gm,
  /\bThe\sIn(?:ch|ches|cline|closures|field|nings|takes?|terchange)\b/gm,
  /\bThe\sI(?:ll\sCraig|ronworks|slands?|sles?|ve)\b/gm,
  
  /\bThe\sJu(?:bilee|mps|nction|nipers)\b/gm,
  /\bThe\sJ(?:amb|etty|ewel|cb\sAcademy|etties|oint)\b/gm,
  
  /\bThe\sKe(?:els|en|ep|nnels|strels|t|ttle|ys?)\b/gm,
  /\bThe\sKi(?:ilns?|ng['‘’`]?s|ngfishers|osk|rk['‘’`]?s\sAlarm)\b/gm,
  /\bThe\sKn(?:ees?|ock)\b/gm,
  
  /\bThe\sL\sStrip\b/gm,
  /\bThe\sLa(?:kes?|mp|nds?|ne|nding|nterns|rches|sh|unches|urels|w)\b/gm,
  /\bThe\sLe(?:ap|ases|e|igh|ndings|ngth|ss|vels?)\b/gm,
  /\bThe\sLi(?:ght|nes?|nks?|on|p|st|zard)\b/gm,
  /\bThe\sLittle\s(?:Belt|Boltons|Brook|Gonerby|Gorge|Horse\sShoe|Minch|Rooks|Rough|Ship)\b/gm,
  /\bThe\sLo(?:an|bby|ckers|ch\sThat\sEbbs\s[Aa]nd\sFlows|ng\sS(?:hoot|traight)|ts|ttery|w)\b/gm,
  /\bThe\sLod(?:ge|gings)\b/gm,
  /\bThe\sLoo(?:kout|ms|ps?)\b/gm,
  /\bThe\sLunch\b/gm,

  /\bThe\sMan(?:acles|\so['‘’`]?\sWar|or|sion\sMews|tles)\b/gm,
  /\bThe\sMar(?:ch|es?|ina|iners|lins|sh|shes|tingales|y\sRose)\b/gm,
  /\bThe\sMa(?:gical\sWood|gnolias|gpies|idens|ll|llards|llows|sons)\b/gm,
  /\bThe\sMe(?:adows?|dical\sWing|et|etings|ridians|re)\b/gm,
  /\bThe\sMi(?:dlands?|ll\sStream|llstones|lls?|llion)\b/gm,
  /\bThe\sMo(?:le|or|t|unts?|untain)\b/gm,
  /\bThe\sMuslins\b/gm,

  /\bThe\sNa(?:meless|p|pping|tional\sSchool)\b/gm,
  /\bThe\sN(?:eedles?|eck\sGut|etherlands|eutral\sGround|oose|ostrils|urseries|ursery)\b/gm,

  /\bThe\sOlde?\sArmoury\b/gm,
  /\bThe\sOlde?\sB(?:arnyard|rickyard)\b/gm,
  /\bThe\sOlde?\sC(?:oach\s(?:House|Road|Yard)|ourtyard|reamery)\b/gm,
  /\bThe\sOlde?\sDairy\sFarm\b/gm,
  /\bThe\sOlde?\sF(?:airground|armyard|ire\sStation)\b/gm,
  /\bThe\sOlde?\sG(?:asworks|ated\sRoad|ranary)\b/gm,
  /\bThe\sOlde?\sHop\sYard\b/gm,
  /\bThe\sOlde?\sL(?:arches|aundry)\b/gm,
  /\bThe\sOlde?\sM(?:an|ission)\b/gm,
  /\bThe\sOlde?\sN(?:urseries|ursery)\b/gm,
  /\bThe\sOlde?\sPriest\b/gm,
  /\bThe\sOlde?\sRoad\b/gm,
  /\bThe\sOlde?\sS(?:aw\sMills?|chool\sField|idings|table\sYard|tackyard|tation\sRoad|tubble)\b/gm,
  /\bThe\sOlde?\sT(?:annery|ennis\sCourts)\b/gm,
  /\bThe\sOlde?\sV(?:inery|ineries|ineyards?)\b/gm,
  /\bThe\sOlde?\sW(?:alled\sGarden|arehouse|ife|oodyard)\b/gm,
  /\bThe\sOa(?:ks|sis)?\b/gm,
  /\bThe\sOr(?:angery|chards?|chids)\b/gm,
  /\bThe\sO(?:ctagon|d|lympia|pening|spreys?|tters|utlook|val|vens?|xen)\b/gm,
  
  /\bThe\sPa(?:cket\sLanding|ddle|ddocks?|goda|lms|ss|ye)\b/gm,
  /\bThe\sPar(?:ade|chments|ishes|k(?:\sPale)?|lour)\b/gm,
  /\bThe\sPat(?:ch|ches|h|hway(?:\sFields)?|ios)\b/gm,
  /\bThe\sPavill?ions?(?:\sEnd)?\b/gm,
  /\bThe\sPe(?:aks|ntagon|ppercorns)\b/gm,
  /\bThe\sPi(?:ece|eces|les|llow|lot|nch|nes|newoods|nfold|nnacles?|ts?|tch)\b/gm,
  /\bThe\sPla(?:ce|ins?|nes|nks|ntations?|nted\sField|nters|nting|teau|tters)\b/gm,
  /\bThe\sPl(?:easures|easure\sGrounds|ot|umbs)\b/gm,
  /\bThe\sPoi(?:nts?|nters?)\b/gm,
  /\bThe\sPo(?:les|nd|ols?|or\sMan|plars|ppies|rch|sts?|t|tatoe\sGround|und)\b/gm,
  /\bThe\sPr(?:eserve|iest|imroses|iories|ior[sy]?|y)\b/gm,
  /\bThe\sPro(?:menades?|spect|vidence|w)\b/gm,
  /\bThe\sPu(?:lpit|rse|ts?)\b/gm,
  /\bThe\sPyramid\b/gm,
  
  /\bThe\sQua(?:d|drangle|drant|rries|rry|rter|ys?)\b/gm,
  /\bThe\sQu(?:een['‘’`]?s\sChurch|een\sMother\s(?:Court|Reservoir)|ilts|orum)\b/gm,
  
  /\bThe\sR(?:\sJ\sMitchell|ye)\b/gm,
  /\bThe\sRac(?:e|ecourse|eground|k(?:\sIsle)?)\b/gm,
  /\bThe\sRa(?:il|ilway(?:\sSidings)?|in|lly|mp|mparts?|nd|nge(?:rs)?|nk|sh)\b/gm,
  /\bThe\sRea(?:ch|ches|dings)\b/gm,
  /\bThe\sRed(?:\sBrow|\sMaids['‘’`]?|dings|woods)\b/gm,
  /\bThe\sRes(?:ervation|erve|ervoir|idences?|olution|t(?:\s[Rr]oad)?)\b/gm,
  /\bThe\sRe(?:cess|ctangle|gents|ndezvous|ntal\sRocks|nts|treat)\b/gm,
  /\bThe\sRi(?:b|dings?|des?|dges?|fles|ft|ngs?|ngway|nk|ses?|sing|verbank|vers?)\b/gm,
  /\bThe\sRoa(?:ches|d|r)\b/gm,
  /\bThe\sRobins\b/gm,
  /\bThe\sRock(?:ery|s?)\b/gm,
  /\bThe\sRod(?:e|ings|s)\b/gm,
  /\bThe\sRoes?\b/gm,
  /\bThe\sRollers\b/gm,
  /\bThe\sRoo(?:keries|kery|ks|st)\b/gm,
  /\bThe\sRope(?:makers['‘’`]?|walk|way)\b/gm,
  /\bThe\sRos(?:[ae]ry|\s(?:School|[Ww]alk))\b/gm,
  /\bThe\sRotunda\b/gm,
  /\bThe\sRou(?:gh(?:\s(?:Grounds?|Park|Patch|Strip)|s)|nd|ndabouts?|ts)\b/gm,
  /\bThe\sRows?\b/gm,
  /\bThe\sRoyal(?:\s(?:Drift|Free|High|Masonic|National)|ty)\b/gm,
  /\bThe\sRu(?:ins|n|nners|sh)\b/gm,

  /\bThe\sSa(?:ddle|ints|le|ndbags|ucers|w\s?[Mm]ills?)\b/gm,
  /\bThe\sSc(?:ale(?:\sTarn)?|ar|arves|imitars|old|ores?|rambles|rape|ullery|ythes)\b/gm,
  /\bThe\sSe(?:agulls|al|ams|ars|at|cret\sGarden|ntinels|rpentine|ttlement|werage\sBeds)\b/gm,
  /\bThe\sSha(?:des?|llows|mbles|rd|rper)\b/gm,
  /\bThe\sShe(?:arers|arings|epfold|ll)\b/gm,
  /\bThe\sSh(?:ields|in|ip|ipwrights|ires?|oals?|oe|oots|ops|ores?|ort|ot|rubbery|un)\b/gm,
  /\bThe\sSi(?:blings|dings?|gnals|lls|lvers|sters)\b/gm,
  /\bThe\sSk(?:ate|eres|ipper)\b/gm,
  /\bThe\sSla(?:cks?|de|de\sGreens|ke|p|ngs|tes?|ughters)\b/gm,
  /\bThe\sSl(?:eeve|eights|ides?|ing|ips?|ipway|ithers|obs|opes|ough)\b/gm,
  /\bThe\sSm(?:elt|ithy)\b/gm,
  /\bThe\sSo(?:le|und)\b/gm,
  /\bThe\sSp(?:ain|ectacles|lashes|ortsman|ot|rings?|rig|ruces|ur)\b/gm,
  /\bThe\sSpi(?:ke|nnakers?|nne[ry]s?|t)\b/gm,
  /\bThe\sSqu(?:are|ires|irrels)\b/gm,
  /\bThe\sSta(?:cks?|ff|gs|irs|kes|lls|mpers|nces|ples|rs|rlings|te\sHospital|tutes)\b/gm,
  /\bThe\sStab(?:les?(?:\s(?:[Pp]ool|[Yy]ard))?)?\b/gm,
  /\bThe\sSte(?:ep|eplechase|eples|pping\sStones|ps|ws?)\b/gm,
  /\bThe\sSti(?:ck|les?|ll|nts|rrup|tch|tchings)\b/gm,
  /\bThe\sSto(?:cks|kes?|nes?|ops?|w)\b/gm,
  /\bThe\sStr(?:aight(?:s|\sMile)?|aits?|ands?|angles|ay|eam|eet|ing|ipe?)\b/gm,
  /\bThe\sStu(?:dios?|dy|mble)\b/gm,
  /\bThe\sStyle\b/gm,
  /\bThe\sSu(?:bway|mmit|mps|nny\sRoad)\b/gm,
  /\bThe\sSw(?:a[bgn]|allows|amp|eep|ill)\b/gm,
  /\bThe\sSycamores\b/gm,

  /\bThe\sTa(?:bards|bernacle|ble|il(?:\s[Rr]ace)?|n|nners|nnery|rns?|sk|xiway)\b/gm,
  /\bThe\sTe(?:e|n\sAcres|nnis(?:\sCourt)?)\b/gm,
  /\bThe\sTh(?:atch|atchers|ickets?|imbles|ird|istles|rift|orns?|oroughfare|roat)\b/gm,
  /\bThe\sTi(?:mber\sway|mbers|ns|ps|the|things)\b/gm,
  /\bThe\sTo(?:e|ll|llgate|n|ngues?|ppings|re|rs|wers?|wn|wpath)\b/gm,
  /\bThe\sTr(?:am|amway|ap|eehouse|ees|iangle|ip)\b/gm,
  /\bThe\sTu(?:mbles?|nnel|rn|rning|rnstiles|rrets)\b/gm,
  /\bThe\sTw(?:enties|innings|ist|o\s(?:Acre|Brothers))\b/gm,

  /\bThe\sU(?:nderpass|nderway|niversity\s[Oo]f|pper\sHuddles)\b/gm,

  /\bThe\sVa(?:le|lleys?|ns?|r)\b/gm,
  /\bThe\sVi(?:aduct|ctory|ews?|kings|llage|nes?|neries|nery|neyard|ntage\sPair|olets?)\b/gm,
  /\bThe\sVo(?:mit|yager\sAcademy)\b/gm,

  /\bThe\sW\sAuns\b/gm,
  /\bThe\sWa(?:d|des|ge\sOf|ggonway|its|kerings|ver)\b/gm,
  /\bThe\sWal(?:l|led\sGardens?|lnuts|lows|thams)\b/gm,
  /\bThe\sWalk(?:s?|way)\b/gm,
  /\bThe\sWar(?:ds?|drobe|dens|e|ns|rens?|t)\b/gm,
  /\bThe\sWas(?:h|hing\sTub)\b/gm,
  /\bThe\sWatch\b/gm,
  /\bThe\sWater(?:course|cress\sLine|ing|falls?|front|mark|s|shed|side|ways?|\sRun|wheel)\b/gm,
  /\bThe\sWay(?:back|side)?\b/gm,
  /\bThe\sWe(?:ar|avers|bs|dges|irs?|llheads|lls?|nt)\b/gm,
  /\bThe\sWh(?:ale|arf|eel|eelers|ip|irlpool|irls|isky\sLine|istlers?|ite\sRose|ithy['‘’`]?s)\b/gm,
  /\bThe\sWi(?:ck|ckets?|itterings)\b/gm,
  /\bThe\sWid(?:e\sWaters|ow)\b/gm,
  /\bThe\sWil(?:d\sFlower\sMeadow|derness|lows?)\b/gm,
  /\bThe\sWin(?:dings?|dmills|g|nows)\b/gm,
  /\bThe\sWis(?:h|p)\b/gm,
  /\bThe\sWoo(?:ds?|dlarks|dlands?|dpeckers|dyard)\b/gm,
  /\bThe\sWo(?:nders|oldridges|rking\sMen['‘’`s]*|rks|rries)\b/gm,
  /\bThe\sWr(?:angle|angling|ens?)\b/gm,
  
  /\bThe\sY(?:ard|ellow\s*Man)\b/gm,
  
  /\bThe\sZig\sZag\b/gm
];