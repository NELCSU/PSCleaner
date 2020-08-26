export const NamesEndingRegEx: RegExp[] = [
   /[a-z]*[À-ÖØ-öø-ÿãñõțũąğịňōıŚạşęăầẩőếěšảłộơńėčəāţș]+[a-z]*/gmi,

   /\b(Cl|Rd|St)\./gm,

   /\b[a-z]+borough\b/gmi,

   /\b[a-z]+berger\b/gmi,
   /\b[a-z]+bridge\b/gmi,
   /\b[a-z]+castle\b/gmi,
   /\b[a-z]+meadow\b/gmi,
   /\b[a-z]+oorthy\b/gmi,
   /\b[a-z]+strand\b/gmi,

   /\b[a-z]+ahman\b/gmi,
   /\b[a-z]+asong\b/gmi,
   /\b[a-z]+brook\b/gmi,
   /\b[a-z]+cliff\b/gmi,
   /\b[a-z]+court\b/gmi,
   /\b[a-z]+crest\b/gmi,
   /\b[a-z]+eimer\b/gmi,
   /\b[a-z]+eiser\b/gmi,
   /\b[a-z]+eston\b/gmi,
   /\b[a-z]+firth\b/gmi,
   /\b[a-z]+grove\b/gmi,
   /\b[a-z]+haven\b/gmi,
   /\b[a-z]+hayes\b/gmi,
   /\b[a-z]+hedge\b/gmi,
   /\b[a-z]+hurst\b/gmi,
   /\b[a-z]+laine\b/gmi,
   /\b[a-z]+leaze\b/gmi,
   /\b[a-z]+[a-mo-vx-z]eigh\b/gmi,
   /\b[a-z]+meade\b/gmi,
   /\b[a-z]+meyer\b/gmi,
   /\b[a-z]+marsh\b/gmi,
   /\b[a-z]+mrong\b/gmi,
   /\b[a-z]+oorty\b/gmi,
   /\b[a-z]+preet\b/gmi,
   /\b[a-z]+scher\b/gmi,
   /\b[a-z]+shire\b/gmi,
   /\b[a-z]+slade\b/gmi,
   /\b[a-z]+stein\b/gmi,
   /\b[a-z]+thorn\b/gmi,
   /\b[a-z]+urthy\b/gmi,
   /\b[a-z]+villa\b/gmi,
   /\b[a-z]+worth\b/gmi,
      
   /\b[a-z]+[a-dg-lp-su-z]ach\b/gmi,
   /\b[a-z]+[acd-gikovyz]ack\b/gmi,
   /\b[a-z]+[abd-mpqtux-z]ado\b/gmi,
   /\b[a-z]+[ajx-z]age\b/gmi,
   /\b[a-z]+[acd-km-pr-z]ago\b/gmi,
   /\b[a-z]+[a-gi-z]aha\b/gmi,
   /\b[a-z]+[acd-ko-qwx-z]ail\b/gmi,
   /\b[a-z]+[abd-km-prt-z]aim\b/gmi,
   /\b[a-z]+[a-cefi-knoqsux-z]ain\b/gmi,
   /\b[a-z]+[a-egjkmqu-z]air\b/gmi,
   /\b[a-z]+[hx-z]ais\b/gmi,
   /\b[a-z]+[vy]ake\b/gmi,
   /\b[a-z]+[adfw-z]ald\b/gmi,
   /\b[a-z]+[adgioqv-z]ale\b/gmi,
   /\b[a-z]+[dhx-z]all\b/gmi,
   /\b[a-z]+[a-cklmsvw-z]alo\b/gmi,
   /\b[a-z]+[adhk-nsuw-z]ama\b/gmi,
   /\b[a-z]+[hx-z]ame\b/gmi,
   /\b[a-z]+[hksx-z]ami\b/gmi,
   /\b[a-z]+[ex-z]amo\b/gmi,
   /\b[a-z]+kamp\b/gmi,
   /\b[a-z]+[swx-z]amy\b/gmi,
   /\b[a-z]+vand\b/gmi,
   /\b[a-z]+[abd-gi-km-quw-z]ane\b/gmi,
   /\b[a-z]+[a-z]ang\b/gmi,
   /\b[a-z]+[brx-z]any\b/gmi,
   /\b[a-z]+[lx-z]ape\b/gmi,
   /\b[a-z]+[afnq-sx]ard\b/gmi,
   /\b[a-z]+[ix-z]are\b/gmi,
   /\b[a-z]+[px-z]ark\b/gmi,
   /\b[a-z]+[fx-z]arm\b/gmi,
   /\b[a-z]+[a-df-vy]arn\b/gmi,
   /\b[a-z]+carr\b/gmi,
   /\b[a-z]+[aix-z]art\b/gmi,
   /\b[a-z]+[nw-z]ase\b/gmi,
   /\b[a-z]+[akpuvx-z]ash\b/gmi,
   /\b[a-z]+[a-djz]ask\b/gmi,
   /\b[a-z]+[nx-z]ass\b/gmi,
   /\b[a-z]+[w-z]ate\b/gmi,
   /\b[a-z]+[adknqrtuvx-z]ath\b/gmi,
   /\b[a-z]+waty\b/gmi,
   /\b[a-z]+[gp]aul\b/gmi,
   /\b[a-z]+[kx-z]aur\b/gmi,
   /\b[a-z]+[hl]aus\b/gmi,
   /\b[a-z]+nava\b/gmi,
   /\b[a-z]+[a-chx-z]bar\b/gmi,
   /\b[a-z]+[bxz]bel\b/gmi,
   /\b[a-z]+[ek]ber\b/gmi,
   /\b[a-z]+ubia\b/gmi,
   /\b[a-z]+[lux-z]bie\b/gmi,
   /\b[a-z]+ebig\b/gmi,
   /\b[a-z]+ubon\b/gmi,
   /\b[a-z]+acar\b/gmi,
   /\b[a-z]+[au-z]cat\b/gmi,
   /\b[a-z]+[hnu-z]cha\b/gmi,
   /\b[a-z]+[u-z]che\b/gmi,
   /\b[a-z]+[eijknqw-z]cia\b/gmi,
   /\b[a-z]+[iv]cic\b/gmi,
   /\b[a-z]+[a-clnux-z]cio\b/gmi,
   /\b[a-z]+ucla\b/gmi,
   /\b[a-z]+[ix-z]cot\b/gmi,
   /\b[a-z]+ecum\b/gmi,
   /\b[a-z]+rdad\b/gmi,
   /\b[a-z]+[bsx-z]dal\b/gmi,
   /\b[a-z]+[adhx-z]dar\b/gmi,
   /\b[a-z]+adat\b/gmi,
   /\b[a-z]+[aux-z]dee\b/gmi,
   /\b[a-z]+[ku]dem\b/gmi,
   /\b[a-z]+[deru-z]din\b/gmi,
   /\b[a-z]+idio\b/gmi,
   /\b[a-z]+[h-kr-z]dis\b/gmi,
   /\b[a-z]+ddol\b/gmi,
   /\b[a-z]+[sx-z]don\b/gmi,
   /\b[a-z]+rdor\b/gmi,
   /\b[a-z]+[a]dum\b/gmi,
   /\b[a-z]+[mtx-z]ead\b/gmi,
   /\b[a-z]+hean\b/gmi,
   /\b[a-z]+[bw-z]eba\b/gmi,
   /\b[a-z]+[chx-z]ebo\b/gmi,
   /\b[a-z]+ceby\b/gmi,
   /\b[a-z]+[bix-z]eca\b/gmi,
   /\b[a-z]+[bilu-z]ech\b/gmi,
   /\b[a-z]+[bu]eck\b/gmi,
   /\b[a-z]+[imx-z]ede\b/gmi,
   /\b[a-z]+[cfgx-z]edo\b/gmi,
   /\b[a-z]+[mvx-z]eed\b/gmi,
   /\b[a-z]+[bf]eek\b/gmi,
   /\b[a-z]+[a-gi-mo-qsu-z]eel\b/gmi,
   /\b[a-z]+[lrx-z]eem\b/gmi,
   /\b[a-z]+[a-jmnvx-z]een\b/gmi,
   /\b[a-z]+[dx-z]eep\b/gmi,
   /\b[a-z]+[bgjkmvx-z]eer\b/gmi,
   /\b[a-z]+[jx-z]eet\b/gmi,
   /\b[a-z]+oeft\b/gmi,
   /\b[a-z]+eega\b/gmi,
   /\b[a-z]+[h-lx-z]ego\b/gmi,
   /\b[a-z]+[belswx-z]ein\b/gmi,
   /\b[a-z]+[a-gi-z]eir\b/gmi,
   /\b[a-z]+[nx-z]eis\b/gmi,
   /\b[a-z]+[fvw-z]eld\b/gmi,
   /\b[a-z]+[fgrx-z]ell\b/gmi,
   /\b[a-z]+[kl]ema\b/gmi,
   /\b[a-z]+[gx-z]eme\b/gmi,
   /\b[a-z]+iemo\b/gmi,
   /\b[a-z]+[a-fi-lnpqs-z]ena\b/gmi,
   /\b[a-z]+wend\b/gmi,
   /\b[a-z]+[diw]ene\b/gmi,
   /\b[a-z]+[kls-z]epe\b/gmi,
   /\b[a-z]+[bkux-z]era\b/gmi,
   /\b[a-z]+[ov-z]erd\b/gmi,
   /\b[a-z]+[eimw]ere\b/gmi,
   /\b[a-z]+[iw]erk\b/gmi,
   /\b[a-z]+derl\b/gmi,
   /\b[a-z]+[kwx-z]ern\b/gmi,
   /\b[a-z]+[bi-kruvxy]ero\b/gmi,
   /\b[a-z]+[fgmwx-z]ert\b/gmi,
   /\b[a-z]+[bx-z]ese\b/gmi,
   /\b[a-z]+[a-knops-z]esh\b/gmi,
   /\b[a-z]+[be-lpuwx-z]eta\b/gmi,
   /\b[a-z]+[kl]ete\b/gmi,
   /\b[a-z]+[blnpx-z]eth\b/gmi,
   /\b[a-z]+[gkx-z]eti\b/gmi,
   /\b[a-z]+[ux-z]eto\b/gmi,
   /\b[a-z]+[ly]eve\b/gmi,
   /\b[a-z]+zeye\b/gmi,
   /\b[a-z]+[aux-z]eze\b/gmi,
   /\b[a-z]+[inx-z]far\b/gmi,
   /\b[a-z]+[ox-z]fio\b/gmi,
   /\b[a-z]+[ax-z]fur\b/gmi,
   /\b[a-z]+[agn]gam\b/gmi,
   /\b[a-z]+[inosx-z]gan\b/gmi,
   /\b[a-z]+tgar\b/gmi,
   /\b[a-z]+ngat\b/gmi,
   /\b[a-z]+egel\b/gmi,
   /\b[a-z]+[agxz]gen\b/gmi,
   /\b[a-z]+ggia\b/gmi,
   /\b[a-z]+[nx-z]gum\b/gmi,
   /\b[a-z]+[abkux-z]hal\b/gmi,
   /\b[a-z]+[abd-suvx-z]hat\b/gmi,
   /\b[a-z]+[sx-z]hea\b/gmi,
   /\b[a-z]+[kx-z]hel\b/gmi,
   /\b[a-z]+[jx-z]hen\b/gmi,
   /\b[a-z]+nhet\b/gmi,
   /\b[a-z]+[ax-z]hid\b/gmi,
   /\b[a-z]+[dx-z]him\b/gmi,
   /\b[a-z]+[dkx-z]hin\b/gmi,
   /\b[a-z]+[cx-z]hit\b/gmi,
   /\b[a-z]+[a-cnx-z]hoe\b/gmi,
   /\b[a-z]+[ckx-z]hon\b/gmi,
   /\b[a-z]+phot\b/gmi,
   /\b[a-z]+[kx-z]hup\b/gmi,
   /\b[a-z]+[a-rt-z]hut\b/gmi,
   /\b[a-z]+[ah-kqux-z]ian\b/gmi,
   /\b[a-z]+[anrx-z]iar\b/gmi,
   /\b[a-z]+aiat\b/gmi,
   /\b[a-z]+[eovx-z]ica\b/gmi,
   /\b[a-z]+[aw]ick\b/gmi,
   /\b[a-z]+[adeux-z]ida\b/gmi,
   /\b[a-z]+[jy]ide\b/gmi,
   /\b[a-z]+[any]iel\b/gmi,
   /\b[a-z]+diem\b/gmi,
   /\b[a-z]+[aeuvy]ier\b/gmi,
   /\b[a-z]+[djlx-z]ieu\b/gmi,
   /\b[a-z]+[nx-z]iew\b/gmi,
   /\b[a-z]+[mt]ife\b/gmi,
   /\b[a-z]+[amn]iga\b/gmi,
   /\b[a-z]+[hx-z]ige\b/gmi,
   /\b[a-z]+[ax-z]igh\b/gmi,
   /\b[a-z]+[hx-z]igo\b/gmi,
   /\b[a-z]+[ad-fux-z]ike\b/gmi,
   /\b[a-z]+[agmx-z]ila\b/gmi,
   /\b[a-z]+eild\b/gmi,
   /\b[a-z]+[klyz]ile\b/gmi,
   /\b[a-z]+[hmuv]ill\b/gmi,
   /\b[a-z]+[bhmsx-z]ilo\b/gmi,
   /\b[a-z]+[aehmox-z]ima\b/gmi,
   /\b[a-z]+[sx-z]ime\b/gmi,
   /\b[a-z]+[dx-z]imo\b/gmi,
   /\b[a-z]+[a-ehkloprsv-z]ina\b/gmi,
   /\b[a-z]+rinc\b/gmi,
   /\b[a-z]+[jq]ing\b/gmi,
   /\b[a-z]+gink\b/gmi,
   /\b[a-z]+zior\b/gmi,
   /\b[a-z]+dipe\b/gmi,
   /\b[a-z]+[ax-z]ird\b/gmi,
   /\b[a-z]+[sx-z]ire\b/gmi,
   /\b[a-z]+[kx-z]irk\b/gmi,
   /\b[a-z]+[ax-z]irt\b/gmi,
   /\b[a-z]+[mx-z]iry\b/gmi,
   /\b[a-z]+[abdhmou-z]isa\b/gmi,
   /\b[a-z]+[x-z]ise\b/gmi,
   /\b[a-z]+[aox-z]ish\b/gmi,
   /\b[a-z]+[lw-z]iso\b/gmi,
   /\b[a-z]+[ajox-z]ite\b/gmi,
   /\b[a-z]+[ejrx-z]ith\b/gmi,
   /\b[a-z]+[imr]ito\b/gmi,
   /\b[a-z]+hity\b/gmi,
   /\b[a-z]+[ej]ken\b/gmi,
   /\b[a-z]+jker\b/gmi,
   /\b[a-z]+[ix-z]kie\b/gmi,
   /\b[a-z]+[hu]kin\b/gmi,
   /\b[a-z]+[nx-z]kit\b/gmi,
   /\b[a-z]+blad\b/gmi,
   /\b[a-z]+[ghx-z]lag\b/gmi,
   /\b[a-z]+[aqx-z]lam\b/gmi,
   /\b[a-z]+[elqu-z]lan\b/gmi,
   /\b[a-z]+[anrx-z]lar\b/gmi,
   /\b[a-z]+[px-z]las\b/gmi,
   /\b[a-z]+blat\b/gmi,
   /\b[a-z]+alay\b/gmi,
   /\b[a-z]+[aks-z]lea\b/gmi,
   /\b[a-z]+alee\b/gmi,
   /\b[a-z]+[ax-z]lel\b/gmi,
   /\b[a-z]+elem\b/gmi,
   /\b[a-z]+[hx-z]ler\b/gmi,
   /\b[a-z]+fley\b/gmi,
   /\b[a-z]+[x-z]lia\b/gmi,
   /\b[a-z]+[ux-z]lis\b/gmi,
   /\b[a-z]+[aoux-z]lla\b/gmi,
   /\b[a-z]+[aix-z]llo\b/gmi,
   /\b[a-z]+blon\b/gmi,
   /\b[a-z]+dlow\b/gmi,
   /\b[a-z]+[b-flw-z]lum\b/gmi,
   /\b[a-z]+[ax-z]mal\b/gmi,
   /\b[a-z]+[ajx-z]man\b/gmi,
   /\b[a-z]+[hx-z]med\b/gmi,
   /\b[a-z]+[hmx-z]mel\b/gmi,
   /\b[a-z]+[mx-z]met\b/gmi,
   /\b[a-z]+[x-z]mis\b/gmi,
   /\b[a-z]+[ix-z]mma\b/gmi,
   /\b[a-z]+[ox-z]mme\b/gmi,
   /\b[a-z]+[axz]mph\b/gmi,
   /\b[a-z]+ynal\b/gmi,
   /\b[a-z]+[nx-z]nar\b/gmi,
   /\b[a-z]+[aw-z]nco\b/gmi,
   /\b[a-z]+[eiou-y]nda\b/gmi,
   /\b[a-z]+[ox-z]nde\b/gmi,
   /\b[a-z]+[aox-z]ndo\b/gmi,
   /\b[a-z]+[ahx-z]nee\b/gmi,
   /\b[a-z]+[jx-z]nen\b/gmi,
   /\b[a-z]+[bdfhklpsvx-z]ner\b/gmi,
   /\b[a-z]+[hx-z]ney\b/gmi,
   /\b[a-z]+[ox-z]nge\b/gmi,
   /\b[a-z]+[aeio]ngo\b/gmi,
   /\b[a-z]+[ir-z]nha\b/gmi,
   /\b[a-z]+[bdh-lsz]nia\b/gmi,
   /\b[a-z]+snim\b/gmi,
   /\b[a-z]+onio\b/gmi,
   /\b[a-z]+[aox-z]non\b/gmi,
   /\b[a-z]+[ao]not\b/gmi,
   /\b[a-z]+[au-z]nth\b/gmi,
   /\b[a-z]+[eiu-z]nza\b/gmi,
   /\b[a-z]+[bx-z]oam\b/gmi,
   /\b[a-z]+[a-gi-km-qs-z]obe\b/gmi,
   /\b[a-z]+[bou-z]ock\b/gmi,
   /\b[a-z]+[cmxy]oed\b/gmi,
   /\b[a-z]+[hrtx-z]oft\b/gmi,
   /\b[a-z]+[ax-z]oin\b/gmi,
   /\b[a-z]+soir\b/gmi,
   /\b[a-z]+[cx-z]ois\b/gmi,
   /\b[a-z]+[nxz]oke\b/gmi,
   /\b[a-z]+[aeghlmopsux-z]ola\b/gmi,
   /\b[a-z]+[cgm]ole\b/gmi,
   /\b[a-z]+dolf\b/gmi,
   /\b[a-z]+[gjp-sux-z]oli\b/gmi,
   /\b[a-z]+[hx-z]olt\b/gmi,
   /\b[a-z]+goly\b/gmi,
   /\b[a-z]+[bgx-z]oma\b/gmi,
   /\b[a-z]+[gkx-z]ome\b/gmi,
   /\b[a-z]+[a-hjv]ona\b/gmi,
   /\b[a-z]+kond\b/gmi,
   /\b[a-z]+[a-km-qu-z]ong\b/gmi,
   /\b[a-z]+[nv-z]ont\b/gmi,
   /\b[a-z]+[v-z]ony\b/gmi,
   /\b[a-z]+[wx-z]ood\b/gmi,
   /\b[a-z]+[lx-z]oof\b/gmi,
   /\b[a-z]+nook\b/gmi,
   /\b[a-z]+[kpx-z]ool\b/gmi,
   /\b[a-z]+[bxy]oom\b/gmi,
   /\b[a-z]+[bgkx-z]oon\b/gmi,
   /\b[a-z]+[fjkmnx-z]oor\b/gmi,
   /\b[a-z]+[lx-z]oot\b/gmi,
   /\b[a-z]+[gx-z]opa\b/gmi,
   /\b[a-z]+[gx-z]ope\b/gmi,
   /\b[a-z]+[iw]ora\b/gmi,
   /\b[a-z]+[bfjox-z]ord\b/gmi,
   /\b[a-z]+jore\b/gmi,
   /\b[a-z]+[kopvx-z]orn\b/gmi,
   /\b[a-z]+[fox-z]ort\b/gmi,
   /\b[a-z]+[w-z]ose\b/gmi,
   /\b[a-z]+[cgkx-z]ote\b/gmi,
   /\b[a-z]+[bmkx-z]oto\b/gmi,
   /\b[a-z]+[ahjs]oud\b/gmi,
   /\b[a-z]+[al]oul\b/gmi,
   /\b[a-z]+[jx-z]our\b/gmi,
   /\b[a-z]+[ahrx-z]owe\b/gmi,
   /\b[a-z]+[tx-z]own\b/gmi,
   /\b[a-z]+[nt]pal\b/gmi,
   /\b[a-z]+[ipx-z]pan\b/gmi,
   /\b[a-z]+[ex-z]pha\b/gmi,
   /\b[a-z]+[ox-z]pie\b/gmi,
   /\b[a-z]+[mpx-z]pil\b/gmi,
   /\b[a-z]+ipli\b/gmi,
   /\b[a-z]+[ex-z]ppe\b/gmi,
   /\b[a-z]+oppo\b/gmi,
   /\b[a-z]+hrab\b/gmi,
   /\b[a-z]+[a-deiru-z]ram\b/gmi,
   /\b[a-z]+[adh-kmw-z]ran\b/gmi,
   /\b[a-z]+[drx-z]ras\b/gmi,
   /\b[a-z]+[amx-z]rat\b/gmi,
   /\b[a-z]+[ahstx-z]ree\b/gmi,
   /\b[a-z]+uren\b/gmi,
   /\b[a-z]+arew\b/gmi,
   /\b[a-z]+[b-df-np-tw-z]rge\b/gmi,
   /\b[a-z]+[hx-z]ria\b/gmi,
   /\b[a-z]+[ei]rim\b/gmi,
   /\b[a-z]+[jx-z]rin\b/gmi,
   /\b[a-z]+[akx-z]ris\b/gmi,
   /\b[a-z]+[hsx-z]rit\b/gmi,
   /\b[a-z]+[ax-z]rma\b/gmi,
   /\b[a-z]+urny\b/gmi,
   /\b[a-z]+orof\b/gmi,
   /\b[a-z]+trog\b/gmi,
   /\b[a-z]+[anx-z]ron\b/gmi,
   /\b[a-z]+[eu]rre\b/gmi,
   /\b[a-z]+arso\b/gmi,
   /\b[a-z]+[aex-z]rto\b/gmi,
   /\b[a-z]+urty\b/gmi,
   /\b[a-z]+[gox-z]run\b/gmi,
   /\b[a-z]+drup\b/gmi,
   /\b[a-z]+[hx-z]rus\b/gmi,
   /\b[a-z]+nsae\b/gmi,
   /\b[a-z]+[aorsx-z]san\b/gmi,
   /\b[a-z]+[sx-z]sar\b/gmi,
   /\b[a-z]+ssat\b/gmi,
   /\b[a-z]+isay\b/gmi,
   /\b[a-z]+[ds-ux-z]sen\b/gmi,
   /\b[a-z]+[sx-z]sey\b/gmi,
   /\b[a-z]+rsic\b/gmi,
   /\b[a-z]+[ax-z]sie\b/gmi,
   /\b[a-z]+[sxy]sim\b/gmi,
   /\b[a-z]+asit\b/gmi,
   /\b[a-z]+[rt]sma\b/gmi,
   /\b[a-z]+[nsx-z]son\b/gmi,
   /\b[a-z]+[aex-z]sor\b/gmi,
   /\b[a-z]+[en]ssy\b/gmi,
   /\b[a-z]+rste\b/gmi,
   /\b[a-z]+usti\b/gmi,
   /\b[a-z]+[s-z]tan\b/gmi,
   /\b[a-z]+[aehu-z]tar\b/gmi,
   /\b[a-z]+[eiy]the\b/gmi,
   /\b[a-z]+athk\b/gmi,
   /\b[a-z]+[oux-z]tie\b/gmi,
   /\b[a-z]+[su]tin\b/gmi,
   /\b[a-z]+[au]tle\b/gmi,
   /\b[a-z]+[cdf-hlnp-rw-z]ton\b/gmi,
   /\b[a-z]+stow\b/gmi,
   /\b[a-z]+atsu\b/gmi,
   /\b[a-z]+[ou]tte\b/gmi,
   /\b[a-z]+buce\b/gmi,
   /\b[a-z]+[elw]uch\b/gmi,
   /\b[a-z]+auck\b/gmi,
   /\b[a-z]+kude\b/gmi,
   /\b[a-z]+[ao]udo\b/gmi,
   /\b[a-z]+[hk]udy\b/gmi,
   /\b[a-z]+auer\b/gmi,
   /\b[a-z]+auff\b/gmi,
   /\b[a-z]+[dlrx-z]uge\b/gmi,
   /\b[a-z]+[aehrx-z]ugh\b/gmi,
   /\b[a-z]+ouic\b/gmi,
   /\b[a-z]+ruie\b/gmi,
   /\b[a-z]+buil\b/gmi,
   /\b[a-z]+[sty]uim\b/gmi,
   /\b[a-z]+[x-z]uin\b/gmi,
   /\b[a-z]+[sx-z]uke\b/gmi,
   /\b[a-z]+[a-dhj-lorvx-z]ula\b/gmi,
   /\b[a-z]+[ax-z]uld\b/gmi,
   /\b[a-z]+[bgh]ule\b/gmi,
   /\b[a-z]+aull\b/gmi,
   /\b[a-z]+humy\b/gmi,
   /\b[a-z]+[b-km-sx-z]una\b/gmi,
   /\b[a-z]+[adeg-np-sv-z]und\b/gmi,
   /\b[a-z]+[hlx-z]une\b/gmi,
   /\b[a-z]+[ahjsx-z]ung\b/gmi,
   /\b[a-z]+quoy\b/gmi,
   /\b[a-z]+aurd\b/gmi,
   /\b[a-z]+[a-kn-tx-z]urk\b/gmi,
   /\b[a-z]+[bo]urn\b/gmi,
   /\b[a-z]+[bhpyz]ury\b/gmi,
   /\b[a-z]+[lmrx-z]usa\b/gmi,
   /\b[a-z]+nush\b/gmi,
   /\b[a-z]+euss\b/gmi,
   /\b[a-z]+[ikz]ute\b/gmi,
   /\b[a-z]+[dgx-z]uth\b/gmi,
   /\b[a-z]+[eg]uve\b/gmi,
   /\b[a-z]+[aglx-z]van\b/gmi,
   /\b[a-z]+[aeiu-z]var\b/gmi,
   /\b[a-z]+nver\b/gmi,
   /\b[a-z]+avet\b/gmi,
   /\b[a-z]+avie\b/gmi,
   /\b[a-z]+[a-cf-npqsu-z]war\b/gmi,
   /\b[a-z]+[au-z]wel\b/gmi,
   /\b[a-z]+[ao]wit\b/gmi,
   /\b[a-z]+[kx-z]won\b/gmi,
   /\b[a-z]+[aeiux-z]wse\b/gmi,
   /\b[a-z]+[ainx-z]yam\b/gmi,
   /\b[a-z]+ryde\b/gmi,
   /\b[a-z]+gyer\b/gmi,
   /\b[a-z]+[n-rx-z]yle\b/gmi,
   /\b[a-z]+[jx-z]zen\b/gmi,
   /\b[a-z]+cz[a-z]+\b/gmi,
   /\b[a-z]+rz[a-z]+\b/gmi,
   /\b[a-z]+tz[a-z]+\b/gmi,
               
   /\b[a-z]+a[ajq][a-z]\b/gmi,
   /\b[a-z]+a[oy][a-rt-z]\b/gmi,
   /\b[a-z]+ab[a-rt-wyz]\b/gmi,
   /\b[a-z]+ac[a-df-gijl-ru-xz]\b/gmi,
   /\b[a-z]+ad[a-df-np-rtu-xz]\b/gmi,
   /\b[a-z]+ae[a-ce-z]\b/gmi,
   /\b[a-z]+af[a-dg-ru-xz]\b/gmi,
   /\b[a-z]+ag[a-df-rt-xz]\b/gmi,
   /\b[a-z]+ah[b-rt-z]\b/gmi,
   /\b[a-z]+ai[abef-ko-qsu-z]\b/gmi,
   /\b[a-z]+ak[a-df-rt-xz]\b/gmi,
   /\b[a-z]+al[a-cg-jnqu-xz]\b/gmi,
   /\b[a-z]+am[cdf-hj-mqru-xz]\b/gmi,
   /\b[a-z]+an[a-cfhijl-ru-xz]\b/gmi,
   /\b[a-z]+ap[a-dfgi-ru-xz]\b/gmi,
   /\b[a-z]+ar[acg-joqu-xz]\b/gmi,
   /\b[a-z]+as[a-dfgijloqru-xz]\b/gmi,
   /\b[a-z]+at[a-dfgi-rt-xz]\b/gmi,
   /\b[a-z]+au[a-km-qu-z]\b/gmi,
   /\b[a-z]+av[b-df-np-xz]\b/gmi,
   /\b[a-z]+aw[a-jmo-qrt-z]\b/gmi,
   /\b[a-z]+ax[a-xz]\b/gmi,
   /\b[a-z]+az[a-df-xz]\b/gmi,

   /\b[a-z]+ba[a-dfh-kmo-qtu-z]\b/gmi,
   /\b[a-z]+bb[ac-xz]\b/gmi,
   /\b[a-z]+b[cdfhjkmpqsw-z][a-z]\b/gmi,
   /\b[a-z]+be[a-cfg-km-qu-xz]\b/gmi,
   /\b[a-z]+bi[bfh-mo-ru-z]\b/gmi,
   /\b[a-z]+bl[a-df-xz]\b/gmi,
   /\b[a-z]+bn[a-fh-z]\b/gmi,
   /\b[a-z]+bo[a-mpuvz]\b/gmi,
   /\b[a-z]+br[b-df-z]\b/gmi,
   /\b[a-z]+bt[a-pr-z]\b/gmi,
   /\b[a-z]+bu[acfh-mo-rt-xz]\b/gmi,
   /\b[a-z]+bv[a-rt-z]\b/gmi,

   /\b[a-z]+ca[acdg-koquvz]\b/gmi,
   /\b[a-z]+c[bgjqsvwx][a-z]\b/gmi,
   /\b[a-z]+cc[abd-z]\b/gmi,
   /\b[a-z]+cd[abd-z]\b/gmi,
   /\b[a-z]+ce[bcf-kmoqu-xz]\b/gmi,
   /\b[a-z]+cf[a-km-z]\b/gmi,
   /\b[a-z]+ch[b-dg-rt-xz]\b/gmi,
   /\b[a-z]+ci[bf-kqru-z]\b/gmi,
   /\b[a-z]+ck[a-ot-xz]\b/gmi,
   /\b[a-z]+cl[b-df-np-xz]\b/gmi,
   /\b[a-z]+cm[a-oq-z]\b/gmi,
   /\b[a-z]+cn[a-dfh-z]\b/gmi,
   /\b[a-z]+co[cfhi-ko-qu-xz]\b/gmi,
   /\b[a-z]+cp[a-ik-z]\b/gmi,
   /\b[a-z]+cr[bdf-np-xz]\b/gmi,
   /\b[a-z]+ct[b-ej-rt-z]\b/gmi,
   /\b[a-z]+cu[a-df-knoqu-z]\b/gmi,
   /\b[a-z]+cy[a-km-wyz]\b/gmi,

   /\b[a-z]+da[a-cf-km-qu-xz]\b/gmi,
   /\b[a-z]+d[bfhjkmqvwxz][a-z]\b/gmi,
   /\b[a-z]+dc[a-mo-z]\b/gmi,
   /\b[a-z]+dd[a-ce-z]\b/gmi,
   /\b[a-z]+de[a-cf-ko-qt-vz]\b/gmi,
   /\b[a-z]+dg[a-df-xz]\b/gmi,
   /\b[a-z]+di[be-kmp-ru-wyz]\b/gmi,
   /\b[a-z]+dl[a-df-hj-xz]\b/gmi,
   /\b[a-z]+dn[a-ru-z]\b/gmi,
   /\b[a-z]+do[abd-fh-ko-quvyz]\b/gmi,
   /\b[a-z]+dp[a-qs-z]\b/gmi,
   /\b[a-z]+dr[a-xz]\b/gmi,
   /\b[a-z]+ds[a-su-xz]\b/gmi,
   /\b[a-z]+dt[a-fh-z]\b/gmi,
   /\b[a-z]+du[acdf-lnoqrt-z]\b/gmi,
   /\b[a-z]+dy[a-df-km-z]\b/gmi,

   /\b[a-z]+ea[a-cgijoqu-z]\b/gmi,
   /\b[a-z]+eb[b-np-ru-xz]\b/gmi,
   /\b[a-z]+ec[b-dfgijl-ru-xz]\b/gmi,
   /\b[a-z]+ed[a-df-np-rt-xz]\b/gmi,
   /\b[a-z]+ee[a-cf-jmoqu-z]\b/gmi,
   /\b[a-z]+ef[a-ru-xz]\b/gmi,
   /\b[a-z]+eg[b-df-lnp-rt-xz]\b/gmi,
   /\b[a-z]+e[hjq][a-z]\b/gmi,
   /\b[a-z]+ei[bd-kmo-qt-z]\b/gmi,
   /\b[a-z]+ek[a-rt-xz]\b/gmi,
   /\b[a-z]+el[a-ceg-knoqru-xz]\b/gmi,
   /\b[a-z]+em[b-df-mqru-xz]\b/gmi,
   /\b[a-z]+en[bcf-np-rv-xz]\b/gmi,
   /\b[a-z]+eo[a-eg-qt-vx-z]\b/gmi,
   /\b[a-z]+ep[a-df-ru-xz]\b/gmi,
   /\b[a-z]+er[g-jqru-xz]\b/gmi,
   /\b[a-z]+es[a-dfgijl-ru-xz]\b/gmi,
   /\b[a-z]+et[b-dfgj-np-rt-xz]\b/gmi,
   /\b[a-z]+eu[a-ce-lnoqt-z]\b/gmi,
   /\b[a-z]+e[vz][a-df-xz]\b/gmi,
   /\b[a-z]+ew[a-mo-ru-xz]\b/gmi,
   /\b[a-z]+ex[a-df-hj-xz]\b/gmi,
   /\b[a-z]+ey[a-df-rt-z]\b/gmi,

   /\b[a-z]+fa[a-mo-qu-wyz]\b/gmi,
   /\b[a-z]+f[b-dghjkmnqsv-z][a-z]\b/gmi,
   /\b[a-z]+fe[a-cf-mo-qt-vxz]\b/gmi,
   /\b[a-z]+ff[a-eg-rt-xz]\b/gmi,
   /\b[a-z]+fi[e-kqru-wyz]\b/gmi,
   /\b[a-z]+fl[a-df-tv-xz]\b/gmi,
   /\b[a-z]+fo[a-fh-lo-qt-z]\b/gmi,
   /\b[a-z]+fp[a-nr-z]\b/gmi,
   /\b[a-z]+fr[a-xz]\b/gmi,
   /\b[a-z]+ft[a-gi-rt-xz]\b/gmi,
   /\b[a-z]+fu[a-km-qt-z]\b/gmi,

   /\b[a-z]+ga[a-df-koqu-xz]\b/gmi,   
   /\b[a-z]+gb[a-xz]\b/gmi,
   /\b[a-z]+g[cdfjkpqvwxz][a-z]\b/gmi,
   /\b[a-z]+ge[bcf-kpqu-xz]\b/gmi,
   /\b[a-z]+gg[a-fh-uz]\b/gmi,
   /\b[a-z]+gh[a-ru-xz]\b/gmi,
   /\b[a-z]+gi[bd-fhi-kmoqru-z]\b/gmi,
   /\b[a-z]+gl[a-df-np-xz]\b/gmi,
   /\b[a-z]+gm[a-rt-xz]\b/gmi,
   /\b[a-z]+gn[a-df-rt-xz]\b/gmi,
   /\b[a-z]+go[a-mo-qu-z]\b/gmi,
   /\b[a-z]+gr[a-df-rt-xz]\b/gmi,
   /\b[a-z]+gs[a-su-xz]\b/gmi,
   /\b[a-z]+gt[a-gi-z]\b/gmi,
   /\b[a-z]+gu[a-df-lo-ru-xz]\b/gmi,
   /\b[a-z]+gy[a-rt-z]\b/gmi,

   /\b[a-z]+ha[a-km-ru-z]\b/gmi,
   /\b[a-z]+h[b-dfgjknp-rv-xz][a-z]\b/gmi,
   /\b[a-z]+he[bcef-ko-quvxyz]\b/gmi,
   /\b[a-z]+hh[a-gi-ou-z]\b/gmi,
   /\b[a-z]+hi[abef-loqru-z]\b/gmi,
   /\b[a-z]+hl[a-xz]\b/gmi,
   /\b[a-z]+hm[a-rt-wyz]\b/gmi,
   /\b[a-z]+ho[a-cfh-koquvx-z]\b/gmi,
   /\b[a-z]+hs[a-uw-z]\b/gmi,
   /\b[a-z]+ht[a-gi-rt-xz]\b/gmi,
   /\b[a-z]+hu[a-oqru-z]\b/gmi,
   /\b[a-z]+hy[a-kn-z]\b/gmi,

   /\b[a-z]+ia[abf-kmo-qu-z]\b/gmi,
   /\b[a-z]+ib[a-df-mo-rt-z]\b/gmi,
   /\b[a-z]+ic[b-df-jl-ru-xz]\b/gmi,
   /\b[a-z]+id[b-df-np-rt-xz]\b/gmi,
   /\b[a-z]+ie[a-ceg-kno-qvyz]\b/gmi,
   /\b[a-z]+if[a-dg-ru-xz]\b/gmi,
   /\b[a-z]+ig[b-dfgij-lp-rt-z]\b/gmi,
   /\b[a-z]+i[h-jqw-y][a-z]\b/gmi,
   /\b[a-z]+ik[a-df-rt-xz]\b/gmi,
   /\b[a-z]+il[bcg-ju-xz]\b/gmi,
   /\b[a-z]+im[cdf-nqrt-xz]\b/gmi,
   /\b[a-z]+in[bfhijm-ru-wz]\b/gmi,
   /\b[a-z]+io[a-ce-ko-qu-z]\b/gmi,
   /\b[a-z]+ip[a-df-hk-ru-xz]\b/gmi,
   /\b[a-z]+ir[a-cf-jqnou-xz]\b/gmi,
   /\b[a-z]+is[bdfgijloqrv-xz]\b/gmi,
   /\b[a-z]+it[acdgijl-nprt-xz]\b/gmi,
   /\b[a-z]+iu[a-ln-z]\b/gmi,
   /\b[a-z]+iv[a-df-rt-xz]\b/gmi,
   /\b[a-z]+iz[a-df-y]\b/gmi,

   /\b[a-z]+j[a-ik-z][a-z]\b/gmi,
   /\b[a-z]+jj[a-ik-z]\b/gmi,

   /\b[a-z]+ka[a-z]\b/gmi,
   /\b[a-z]+k[b-df-hjmnp-rtv-z][a-z]\b/gmi,
   /\b[a-z]+ke[a-ce-kmo-quvxz]\b/gmi,
   /\b[a-z]+ki[a-cfh-mqrsu-z]\b/gmi,
   /\b[a-z]+kk[a-jl-rt-z]\b/gmi,
   /\b[a-z]+kl[a-df-xz]\b/gmi,
   /\b[a-z]+ko[a-mo-z]\b/gmi,
   /\b[a-z]+ks[a-xz]\b/gmi,
   /\b[a-z]+ku[a-oq-z]\b/gmi,

   /\b[a-z]+la[afh-loquvz]\b/gmi,
   /\b[a-z]+l[dkmp][a-rt-xz]\b/gmi,
   /\b[a-z]+lb[a-rt-vxz]\b/gmi,
   /\b[a-z]+lc[a-gi-xz]\b/gmi,
   /\b[a-z]+le[bcfh-ko-quvz]\b/gmi,
   /\b[a-z]+lf[a-ru-xz]\b/gmi,
   /\b[a-z]+lg[a-df-xz]\b/gmi,
   /\b[a-z]+l[hjqwxz][a-z]\b/gmi,
   /\b[a-z]+li[bf-moqru-z]\b/gmi,
   /\b[a-z]+ll[b-jmnp-rt-xz]\b/gmi,
   /\b[a-z]+ln[a-fh-z]\b/gmi,
   /\b[a-z]+lo[a-fh-koqsuvxz]\b/gmi,
   /\b[a-z]+lr[a-xz]\b/gmi,
   /\b[a-z]+ls[a-df-su-z]\b/gmi,
   /\b[a-z]+lt[a-gi-rt-xz]\b/gmi,
   /\b[a-z]+lu[acdfh-ln-rt-wyz]\b/gmi,
   /\b[a-z]+lv[a-df-z]\b/gmi,
   /\b[a-z]+ly[a-km-rt-wyz]\b/gmi,

   /\b[a-z]+ma[a-kmoqru-wyz]\b/gmi,
   /\b[a-z]+m[bn][a-rt-z]\b/gmi,
   /\b[a-z]+m[cfgjkq-tvwyz][a-z]\b/gmi,
   /\b[a-z]+md[a-rt-z]\b/gmi,
   /\b[a-z]+me[a-ce-kmo-qu-z]\b/gmi,
   /\b[a-z]+mh[a-wyz]\b/gmi,
   /\b[a-z]+mi[bf-kmo-ru-z]\b/gmi,
   /\b[a-z]+ml[a-xz]\b/gmi,
   /\b[a-z]+mm[b-df-ln-xz]\b/gmi,
   /\b[a-z]+mo[a-lo-qt-wz]\b/gmi,
   /\b[a-z]+mp[a-gj-oru-xz]\b/gmi,
   /\b[a-z]+mu[a-ln-rt-z]\b/gmi,
   /\b[a-z]+my[a-km-z]\b/gmi,   

   /\b[a-z]+na[a-df-km-oquvxz]\b/gmi,
   /\b[a-z]+n[fmpqv-x][a-z]\b/gmi,
   /\b[a-z]+nb[abd-fh-z]\b/gmi,
   /\b[a-z]+nc[a-dfgi-kmnp-ru-xz]\b/gmi,
   /\b[a-z]+nd[b-df-np-rt-xz]\b/gmi,
   /\b[a-z]+ne[bcf-kmpquvz]\b/gmi,
   /\b[a-z]+ng[a-df-np-rt-xz]\b/gmi,
   /\b[a-z]+n[hz][b-z]\b/gmi,
   /\b[a-z]+ni[e-kqru-wy]\b/gmi,
   /\b[a-z]+nj[a-rt-z]\b/gmi,
   /\b[a-z]+nk[a-rt-xz]\b/gmi,
   /\b[a-z]+nl[a-xz]\b/gmi,
   /\b[a-z]+nn[a-fh-mo-rt-xz]\b/gmi,
   /\b[a-z]+no[cf-ko-quvz]\b/gmi,
   /\b[a-z]+nr[a-df-xz]\b/gmi,
   /\b[a-z]+ns[a-df-suvxz]\b/gmi,
   /\b[a-z]+nt[a-gi-rt-xz]\b/gmi,
   /\b[a-z]+nu[a-df-knoqru-z]\b/gmi,
   /\b[a-z]+ny[a-kn-z]\b/gmi,

   /\b[a-z]+oa[a-cg-joqsu-z]\b/gmi,
   /\b[a-z]+ob[a-df-km-rt-z]\b/gmi,
   /\b[a-z]+oc[a-jl-ru-z]\b/gmi,
   /\b[a-z]+od[a-df-rt-xz]\b/gmi,
   /\b[a-z]+oe[bce-qs-xz]\b/gmi,
   /\b[a-z]+of[a-ru-xz]\b/gmi,
   /\b[a-z]+o[gx][a-rt-xz]\b/gmi,
   /\b[a-z]+o[hy][a-rt-z]\b/gmi,
   /\b[a-z]+oi[be-kmo-qu-z]\b/gmi,
   /\b[a-z]+o[jq][a-z]\b/gmi,
   /\b[a-z]+ok[a-df-rt-xz]\b/gmi,
   /\b[a-z]+ol[bcghjm-ru-xz]\b/gmi,
   /\b[a-z]+om[cf-rt-xz]\b/gmi,
   /\b[a-z]+on[bcfhijl-ru-xz]\b/gmi,
   /\b[a-z]+oo[a-ceg-joqu-z]\b/gmi,
   /\b[a-z]+op[b-df-rt-xz]\b/gmi,
   /\b[a-z]+or[cf-jlo-ru-wz]\b/gmi,
   /\b[a-z]+os[a-dfgi-ln-ru-xz]\b/gmi,
   /\b[a-z]+ot[a-dfgi-np-rt-xz]\b/gmi,
   /\b[a-z]+ou[a-ce-km-oqu-z]\b/gmi,
   /\b[a-z]+ow[a-df-kmo-rt-xz]\b/gmi,
   /\b[a-z]+o[vz][a-df-xz]\b/gmi,

   /\b[a-z]+pa[a-cfgi-ko-quvz]\b/gmi,
   /\b[a-z]+p[bdfgjkmnqv-xz][a-z]\b/gmi,
   /\b[a-z]+pc[abd-z]\b/gmi,
   /\b[a-z]+pe[bcfh-kopuvz]\b/gmi,
   /\b[a-z]+ph[b-df-rt-xz]\b/gmi,
   /\b[a-z]+pi[bf-ko-ru-wyz]\b/gmi,
   /\b[a-z]+pl[a-df-hj-xz]\b/gmi,
   /\b[a-z]+po[a-ce-lqru-wyz]\b/gmi,
   /\b[a-z]+pp[a-dfh-nq-xz]\b/gmi,
   /\b[a-z]+p[qs][a-df-np-xz]\b/gmi,
   /\b[a-z]+pr[a-df-np-wz]\b/gmi,
   /\b[a-z]+pt[a-ce-gj-np-rtv-xz]\b/gmi,
   /\b[a-z]+pu[a-ce-moqru-z]\b/gmi,
   /\b[a-z]+py[a-kn-qt-z]\b/gmi,

   /\b[a-z]+q[a-pr-z][a-z]\b/gmi,
   /\b[a-z]+qq[a-pr-z]\b/gmi,

   /\b[a-z]+ra[acdfh-koqruvz]\b/gmi,
   /\b[a-z]+r[bdfk][a-rt-xz]\b/gmi,
   /\b[a-z]+rc[a-dfgi-xz]\b/gmi,
   /\b[a-z]+re[bcf-koquvz]\b/gmi,
   /\b[a-z]+rg[a-df-np-rt-xz]\b/gmi,
   /\b[a-z]+rh[a-rt-z]\b/gmi,
   /\b[a-z]+ri[be-kqru-wy]\b/gmi,
   /\b[a-z]+r[jqwx][a-z]\b/gmi,
   /\b[a-z]+rl[a-ce-rt-xz]\b/gmi,
   /\b[a-z]+rm[b-rt-xz]\b/gmi,
   /\b[a-z]+rn[a-ef-np-ru-xz]\b/gmi,
   /\b[a-z]+ro[acdhi-kmquvxz]\b/gmi,
   /\b[a-z]+rp[a-gj-ru-xz]\b/gmi,
   /\b[a-z]+rr[a-df-qs-xz]\b/gmi,
   /\b[a-z]+rs[a-dfgj-np-su-xz]\b/gmi,
   /\b[a-z]+rt[a-gi-mp-rt-xz]\b/gmi,
   /\b[a-z]+ru[a-dfh-loqrt-z]\b/gmi,
   /\b[a-z]+rv[b-df-xz]\b/gmi,
   /\b[a-z]+ry[a-np-wyz]\b/gmi,

   /\b[a-z]+sa[a-df-ko-quvxz]\b/gmi,
   /\b[a-z]+s[dfgjqrwz][a-z]\b/gmi,
   /\b[a-z]+sb[ac-z]\b/gmi,
   /\b[a-z]+sc[a-df-rt-z]\b/gmi,
   /\b[a-z]+se[abf-kmo-qu-wz]\b/gmi,
   /\b[a-z]+sh[a-xz]\b/gmi,
   /\b[a-z]+si[bf-ko-ru-z]\b/gmi,
   /\b[a-z]+s[ky][a-rt-z]\b/gmi,
   /\b[a-z]+sl[a-df-su-xz]\b/gmi,
   /\b[a-z]+sm[b-rt-xz]\b/gmi,
   /\b[a-z]+sn[a-su-z]\b/gmi,
   /\b[a-z]+so[a-koqu-z]\b/gmi,
   /\b[a-z]+sp[a-rt-xz]\b/gmi,
   /\b[a-z]+ss[a-df-np-rt-xz]\b/gmi,
   /\b[a-z]+st[a-df-hj-np-rt-xz]\b/gmi,
   /\b[a-z]+su[a-df-koqt-z]\b/gmi,
   /\b[a-z]+sv[a-oq-z]\b/gmi,
   /\b[a-z]+sx[a-ln-z]\b/gmi,
   
   /\b[a-z]+ta[acdfh-ko-qu-wz]\b/gmi,
   /\b[a-z]+t[bdfgjkpqv-y][a-z]\b/gmi,
   /\b[a-z]+tc[a-gi-z]\b/gmi,
   /\b[a-z]+te[bcf-koqu-wz]\b/gmi,
   /\b[a-z]+th[a-df-jln-rt-xz]\b/gmi,
   /\b[a-z]+ti[bf-kqru-z]\b/gmi,
   /\b[a-z]+tl[a-df-xz]\b/gmi,
   /\b[a-z]+tm[a-rt-z]\b/gmi,
   /\b[a-z]+tn[a-cefh-z]\b/gmi,
   /\b[a-z]+to[a-df-kotuvz]\b/gmi,
   /\b[a-z]+tr[b-df-np-su-xz]\b/gmi,
   /\b[a-z]+ts[a-cefg-xz]\b/gmi,
   /\b[a-z]+tt[abdf-ln-ru-xz]\b/gmi,
   /\b[a-z]+tu[acf-oqt-z]\b/gmi,

   /\b[a-z]+ua[a-df-km-su-xz]\b/gmi,
   /\b[a-z]+ub[a-df-ru-xz]\b/gmi,
   /\b[a-z]+uc[a-dfgijl-su-xz]\b/gmi,
   /\b[a-z]+ud[a-df-np-rt-xz]\b/gmi,
   /\b[a-z]+ue[a-cf-km-qu-xz]\b/gmi,
   /\b[a-z]+uf[a-eg-ru-z]\b/gmi,
   /\b[a-z]+ug[a-dfgi-qt-xz]\b/gmi,
   /\b[a-z]+uh[a-rt-z]\b/gmi,
   /\b[a-z]+ui[fh-lqrsu-y]\b/gmi,
   /\b[a-z]+u[jqwxz][a-z]\b/gmi,
   /\b[a-z]+uk[a-df-xz]\b/gmi,
   /\b[a-z]+ul[cgh-jm-ru-xz]\b/gmi,
   /\b[a-z]+um[acdf-moqruvxz]\b/gmi,
   /\b[a-z]+un[bcfh-jl-ru-xz]\b/gmi,
   /\b[a-z]+uo[a-qt-xz]\b/gmi,
   /\b[a-z]+up[a-df-ru-xz]\b/gmi,
   /\b[a-z]+ur[acg-jlqu-xz]\b/gmi,
   /\b[a-z]+us[bdfgijl-ru-xz]\b/gmi,
   /\b[a-z]+ut[a-dfgi-rt-xz]\b/gmi,
   /\b[a-z]+uu[a-ln-tv-z]\b/gmi,
   /\b[a-z]+uv[a-df-rt-xz]\b/gmi,
   /\b[a-z]+uy[a-rt-z]\b/gmi,
   
   /\b[a-z]+va[a-df-kmo-qtu-z]\b/gmi,
   /\b[a-z]+v[b-df-hj-npqtw-z][a-z]\b/gmi,
   /\b[a-z]+ve[a-ce-ko-qu-wz]\b/gmi,
   /\b[a-z]+vi[cf-ko-rt-wyz]\b/gmi,
   /\b[a-z]+vo[a-quvxz]\b/gmi,
   /\b[a-z]+vr[a-df-z]\b/gmi,
   /\b[a-z]+vs[a-ce-z]\b/gmi,
   /\b[a-z]+vu[a-df-z]\b/gmi,
   /\b[a-z]+vv[a-uw-z]\b/gmi,
  
   /\b[a-z]+wa[a-qt-vz]\b/gmi,
   /\b[a-z]+w[bcf-hjmpqvx-z][a-z]\b/gmi,
   /\b[a-z]+w[dln][a-rt-xz]\b/gmi,
   /\b[a-z]+we[ace-km-qu-z]\b/gmi,
   /\b[a-z]+wi[a-fhj-lo-su-z]\b/gmi,
   /\b[a-z]+wk[a-rt-z]\b/gmi,
   /\b[a-z]+wo[a-fh-kmo-ru-z]\b/gmi,
   /\b[a-z]+wr[a-xz]\b/gmi,
   /\b[a-z]+ws[a-df-xz]\b/gmi,
   /\b[a-z]+wt[a-gi-rt-z]\b/gmi,
   /\b[a-z]+wu[a-lnoq-z]\b/gmi,
   /\b[a-z]+ww[a-vx-z]\b/gmi,
   
   /\b[a-z]+xa[abdf-ko-qu-z]\b/gmi,
   /\b[a-z]+x[b-df-hjkmnp-su-wz][a-z]\b/gmi,
   /\b[a-z]+xe[a-ce-ko-qu-xz]\b/gmi,
   /\b[a-z]+xi[fhi-kqru-wy]\b/gmi,
   /\b[a-z]+xl[a-df-xz]\b/gmi,
   /\b[a-z]+xo[b-lo-qt-z]\b/gmi,
   /\b[a-z]+xt[a-gi-xz]\b/gmi,
   /\b[a-z]+xy[a-wyz]\b/gmi,
   
   /\b[a-z]+ya[a-kn-rt-z]\b/gmi,
   /\b[a-z]+y[bn][a-df-xz]\b/gmi,
   /\b[a-z]+y[cf-kqu-x][a-z]\b/gmi,
   /\b[a-z]+yd[a-df-rt-z]\b/gmi,
   /\b[a-z]+ye[a-ce-qu-z]\b/gmi,
   /\b[a-z]+yl[a-df-rt-xz]\b/gmi,
   /\b[a-z]+ym[a-df-moq-rt-xz]\b/gmi,
   /\b[a-z]+yo[a-qt-z]\b/gmi,
   /\b[a-z]+y[pt][a-df-z]\b/gmi,
   /\b[a-z]+yr[a-df-np-rt-z]\b/gmi,
   /\b[a-z]+ys[a-df-su-z]\b/gmi,
   /\b[a-z]+yy[a-xz]\b/gmi,
   /\b[a-z]+yz[a-km-z]\b/gmi,

   /\b[a-z]+za[a-rt-z]\b/gmi,
   /\b[a-z]+ze[a-ce-mo-qt-z]\b/gmi,
   /\b[a-z]+zl[a-df-z]\b/gmi,
   /\b[a-z]+zo[b-rt-z]\b/gmi,
   /\b[a-z]+z[b-df-kmnp-y][a-z]\b/gmi,
   /\b[a-z]+zz[a-y]\b/gmi
];