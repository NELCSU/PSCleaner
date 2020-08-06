export const NamesEndingRegEx: RegExp[] = [
   new RegExp(/[a-z]*[À-ÖØ-öø-ÿãñõțũąğịňōıŚạşęăầẩőếěšảłộơńėčəāţș]+[a-z]*/, "gmi"),

   new RegExp(/\b(Cl|Rd|St)\./, "gm"),

   new RegExp(/\b[A-Z][a-z]+(?<=\ssaid)\b/, "gm"),
   new RegExp(/\b[A-Z][a-z]+(?<=\ssays)\b/, "gm"),

   new RegExp(/\b[a-z]+borough\b/, "gmi"),

   new RegExp(/\b[a-z]+berger\b/, "gmi"),
   new RegExp(/\b[a-z]+bridge\b/, "gmi"),
   new RegExp(/\b[a-z]+oorthy\b/, "gmi"),
   new RegExp(/\b[a-z]+strand\b/, "gmi"),

   new RegExp(/\b[a-z]+ahman\b/, "gmi"),
   new RegExp(/\b[a-z]+brook\b/, "gmi"),
   new RegExp(/\b[a-z]+cliff\b/, "gmi"),
   new RegExp(/\b[a-z]+court\b/, "gmi"),
   new RegExp(/\b[a-z]+crest\b/, "gmi"),
   new RegExp(/\b[a-z]+eimer\b/, "gmi"),
   new RegExp(/\b[a-z]+eiser\b/, "gmi"),
   new RegExp(/\b[a-z]+eston\b/, "gmi"),
   new RegExp(/\b[a-z]+firth\b/, "gmi"),
   new RegExp(/\b[a-z]+grove\b/, "gmi"),
   new RegExp(/\b[a-z]+haven\b/, "gmi"),
   new RegExp(/\b[a-z]+hurst\b/, "gmi"),
   new RegExp(/\b[a-z]+[a-mo-vx-z]eigh\b/, "gmi"),
   new RegExp(/\b[a-z]+meade\b/, "gmi"),
   new RegExp(/\b[a-z]+meyer\b/, "gmi"),
   new RegExp(/\b[a-z]+marsh\b/, "gmi"),
   new RegExp(/\b[a-z]+oorty\b/, "gmi"),
   new RegExp(/\b[a-z]+shire\b/, "gmi"),
   new RegExp(/\b[a-z]+asong\b/, "gmi"),
   new RegExp(/\b[a-z]+stein\b/, "gmi"),
   new RegExp(/\b[a-z]+thorn\b/, "gmi"),
   new RegExp(/\b[a-z]+urthy\b/, "gmi"),
   new RegExp(/\b[a-z]+villa\b/, "gmi"),
   new RegExp(/\b[a-z]+worth\b/, "gmi"),
      
   new RegExp(/\b[a-z]+[a-dg-lp-su-z]ach\b/, "gmi"),
   new RegExp(/\b[a-z]+[hux-z]ado\b/, "gmi"),
   new RegExp(/\b[a-z]+[x-z]age\b/, "gmi"),
   new RegExp(/\b[a-z]+[nx-z]ago\b/, "gmi"),
   new RegExp(/\b[a-z]+[dhx-z]ail\b/, "gmi"),
   new RegExp(/\b[a-z]+[ix-z]aim\b/, "gmi"),
   new RegExp(/\b[a-z]+[bsux-z]ain\b/, "gmi"),
   new RegExp(/\b[a-z]+[dkwx-z]air\b/, "gmi"),
   new RegExp(/\b[a-z]+[hx-z]ais\b/, "gmi"),
   new RegExp(/\b[a-z]+[w-z]ald\b/, "gmi"),
   new RegExp(/\b[a-z]+[adgioqv-z]ale\b/, "gmi"),
   new RegExp(/\b[a-z]+[dhx-z]all\b/, "gmi"),
   new RegExp(/\b[a-z]+[a-cklmw-z]alo\b/, "gmi"),
   new RegExp(/\b[a-z]+[adhk-nsuw-z]ama\b/, "gmi"),
   new RegExp(/\b[a-z]+[hx-z]ame\b/, "gmi"),
   new RegExp(/\b[a-z]+[hkx-z]ami\b/, "gmi"),
   new RegExp(/\b[a-z]+[ex-z]amo\b/, "gmi"),
   new RegExp(/\b[a-z]+kamp\b/, "gmi"),
   new RegExp(/\b[a-z]+[swx-z]amy\b/, "gmi"),
   new RegExp(/\b[a-z]+vand\b/, "gmi"),
   new RegExp(/\b[a-z]+[abd-gi-km-quw-z]ane\b/, "gmi"),
   new RegExp(/\b[a-z]+[a-z]ang\b/, "gmi"),
   new RegExp(/\b[a-z]+[bx-z]any\b/, "gmi"),
   new RegExp(/\b[a-z]+[lx-z]ape\b/, "gmi"),
   new RegExp(/\b[a-z]+[afnq-sx]ard\b/, "gmi"),
   new RegExp(/\b[a-z]+[ix-z]are\b/, "gmi"),
   new RegExp(/\b[a-z]+[px-z]ark\b/, "gmi"),
   new RegExp(/\b[a-z]+[fx-z]arm\b/, "gmi"),
   new RegExp(/\b[a-z]+[aix-z]art\b/, "gmi"),
   new RegExp(/\b[a-z]+[nw-z]ase\b/, "gmi"),
   new RegExp(/\b[a-z]+[akpuvx-z]ash\b/, "gmi"),
   new RegExp(/\b[a-z]+[nx-z]ass\b/, "gmi"),
   new RegExp(/\b[a-z]+[w-z]ate\b/, "gmi"),
   new RegExp(/\b[a-z]+[adknqrtuvx-z]ath\b/, "gmi"),
   new RegExp(/\b[a-z]+waty\b/, "gmi"),
   new RegExp(/\b[a-z]+[kx-z]aur\b/, "gmi"),
   new RegExp(/\b[a-z]+haus\b/, "gmi"),
   new RegExp(/\b[a-z]+[a-chx-z]bar\b/, "gmi"),
   new RegExp(/\b[a-z]+[bxz]bel\b/, "gmi"),
   new RegExp(/\b[a-z]+ubia\b/, "gmi"),
   new RegExp(/\b[a-z]+[lux-z]bie\b/, "gmi"),
   new RegExp(/\b[a-z]+acar\b/, "gmi"),
   new RegExp(/\b[a-z]+[au-z]cat\b/, "gmi"),
   new RegExp(/\b[a-z]+[nu-z]cha\b/, "gmi"),
   new RegExp(/\b[a-z]+[u-z]che\b/, "gmi"),
   new RegExp(/\b[a-z]+[ejknqw-z]cia\b/, "gmi"),
   new RegExp(/\b[a-z]+[iv]cic\b/, "gmi"),
   new RegExp(/\b[a-z]+[a-clnx-z]cio\b/, "gmi"),
   new RegExp(/\b[a-z]+[ix-z]cot\b/, "gmi"),
   new RegExp(/\b[a-z]+ecum\b/, "gmi"),
   new RegExp(/\b[a-z]+rdad\b/, "gmi"),
   new RegExp(/\b[a-z]+[bsx-z]dal\b/, "gmi"),
   new RegExp(/\b[a-z]+[adhx-z]dar\b/, "gmi"),
   new RegExp(/\b[a-z]+adat\b/, "gmi"),
   new RegExp(/\b[a-z]+[ax-z]dee\b/, "gmi"),
   new RegExp(/\b[a-z]+[deru-z]din\b/, "gmi"),
   new RegExp(/\b[a-z]+[h-kr-z]dis\b/, "gmi"),
   new RegExp(/\b[a-z]+ddol\b/, "gmi"),
   new RegExp(/\b[a-z]+[sx-z]don\b/, "gmi"),
   new RegExp(/\b[a-z]+[a]dum\b/, "gmi"),
   new RegExp(/\b[a-z]+[mtx-z]ead\b/, "gmi"),
   new RegExp(/\b[a-z]+hean\b/, "gmi"),
   new RegExp(/\b[a-z]+[bw-z]eba\b/, "gmi"),
   new RegExp(/\b[a-z]+[chx-z]ebo\b/, "gmi"),
   new RegExp(/\b[a-z]+[ix-z]eca\b/, "gmi"),
   new RegExp(/\b[a-z]+[bilu-z]ech\b/, "gmi"),
   new RegExp(/\b[a-z]+ueck\b/, "gmi"),
   new RegExp(/\b[a-z]+[imx-z]ede\b/, "gmi"),
   new RegExp(/\b[a-z]+[cfx-z]edo\b/, "gmi"),
   new RegExp(/\b[a-z]+[x-z]eed\b/, "gmi"),
   new RegExp(/\b[a-z]+[a-gi-mo-qsu-z]eel\b/, "gmi"),
   new RegExp(/\b[a-z]+[lrx-z]eem\b/, "gmi"),
   new RegExp(/\b[a-z]+[a-jmnvx-z]een\b/, "gmi"),
   new RegExp(/\b[a-z]+[dx-z]eep\b/, "gmi"),
   new RegExp(/\b[a-z]+[bgjkmvx-z]eer\b/, "gmi"),
   new RegExp(/\b[a-z]+[jx-z]eet\b/, "gmi"),
   new RegExp(/\b[a-z]+oeft\b/, "gmi"),
   new RegExp(/\b[a-z]+[h-lx-z]ego\b/, "gmi"),
   new RegExp(/\b[a-z]+[lswx-z]ein\b/, "gmi"),
   new RegExp(/\b[a-z]+[a-gi-z]eir\b/, "gmi"),
   new RegExp(/\b[a-z]+[nx-z]eis\b/, "gmi"),
   new RegExp(/\b[a-z]+[fvw-z]eld\b/, "gmi"),
   new RegExp(/\b[a-z]+[fgrx-z]ell\b/, "gmi"),
   new RegExp(/\b[a-z]+kema\b/, "gmi"),
   new RegExp(/\b[a-z]+[gx-z]eme\b/, "gmi"),
   new RegExp(/\b[a-z]+[a-fi-lnpqs-z]ena\b/, "gmi"),
   new RegExp(/\b[a-z]+wend\b/, "gmi"),
   new RegExp(/\b[a-z]+[diw]ene\b/, "gmi"),
   new RegExp(/\b[a-z]+[kls-z]epe\b/, "gmi"),
   new RegExp(/\b[a-z]+[kux-z]era\b/, "gmi"),
   new RegExp(/\b[a-z]+[ov-z]erd\b/, "gmi"),
   new RegExp(/\b[a-z]+[eimw]ere\b/, "gmi"),
   new RegExp(/\b[a-z]+[gmwx-z]ert\b/, "gmi"),
   new RegExp(/\b[a-z]+[wx-z]ern\b/, "gmi"),
   new RegExp(/\b[a-z]+[ruxy]ero\b/, "gmi"),
   new RegExp(/\b[a-z]+[ox-z]esa\b/, "gmi"),
   new RegExp(/\b[a-z]+[bx-z]ese\b/, "gmi"),
   new RegExp(/\b[a-z]+[nx-z]esh\b/, "gmi"),
   new RegExp(/\b[a-z]+[h-lpx-z]eta\b/, "gmi"),
   new RegExp(/\b[a-z]+[kl]ete\b/, "gmi"),
   new RegExp(/\b[a-z]+[blnx-z]eth\b/, "gmi"),
   new RegExp(/\b[a-z]+[gkx-z]eti\b/, "gmi"),
   new RegExp(/\b[a-z]+[ux-z]eto\b/, "gmi"),
   new RegExp(/\b[a-z]+[ly]eve\b/, "gmi"),
   new RegExp(/\b[a-z]+[aux-z]eze\b/, "gmi"),
   new RegExp(/\b[a-z]+[inx-z]far\b/, "gmi"),
   new RegExp(/\b[a-z]+[ox-z]fio\b/, "gmi"),
   new RegExp(/\b[a-z]+[ax-z]fur\b/, "gmi"),
   new RegExp(/\b[a-z]+[an]gam\b/, "gmi"),
   new RegExp(/\b[a-z]+[inosx-z]gan\b/, "gmi"),
   new RegExp(/\b[a-z]+egel\b/, "gmi"),
   new RegExp(/\b[a-z]+[agxz]gen\b/, "gmi"),
   new RegExp(/\b[a-z]+[nx-z]gum\b/, "gmi"),
   new RegExp(/\b[a-z]+[abkux-z]hal\b/, "gmi"),
   new RegExp(/\b[a-z]+[abd-suvx-z]hat\b/, "gmi"),
   new RegExp(/\b[a-z]+[sx-z]hea\b/, "gmi"),
   new RegExp(/\b[a-z]+[kx-z]hel\b/, "gmi"),
   new RegExp(/\b[a-z]+[x-z]hen\b/, "gmi"),
   new RegExp(/\b[a-z]+[ax-z]hid\b/, "gmi"),
   new RegExp(/\b[a-z]+[dx-z]him\b/, "gmi"),
   new RegExp(/\b[a-z]+[dkx-z]hin\b/, "gmi"),
   new RegExp(/\b[a-z]+[cx-z]hit\b/, "gmi"),
   new RegExp(/\b[a-z]+[a-cnx-z]hoe\b/, "gmi"),
   new RegExp(/\b[a-z]+[cx-z]hon\b/, "gmi"),
   new RegExp(/\b[a-z]+[kx-z]hup\b/, "gmi"),
   new RegExp(/\b[a-z]+[h-kqx-z]ian\b/, "gmi"),
   new RegExp(/\b[a-z]+[arx-z]iar\b/, "gmi"),
   new RegExp(/\b[a-z]+[evx-z]ica\b/, "gmi"),
   new RegExp(/\b[a-z]+[aw]ick\b/, "gmi"),
   new RegExp(/\b[a-z]+[adux-z]ida\b/, "gmi"),
   new RegExp(/\b[a-z]+[jy]ide\b/, "gmi"),
   new RegExp(/\b[a-z]+[ny]iel\b/, "gmi"),
   new RegExp(/\b[a-z]+[aeuvy]ier\b/, "gmi"),
   new RegExp(/\b[a-z]+[lx-z]ieu\b/, "gmi"),
   new RegExp(/\b[a-z]+[nx-z]iew\b/, "gmi"),
   new RegExp(/\b[a-z]+[mt]ife\b/, "gmi"),
   new RegExp(/\b[a-z]+[amn]iga\b/, "gmi"),
   new RegExp(/\b[a-z]+[hx-z]ige\b/, "gmi"),
   new RegExp(/\b[a-z]+[ax-z]igh\b/, "gmi"),
   new RegExp(/\b[a-z]+[hx-z]igo\b/, "gmi"),
   new RegExp(/\b[a-z]+[ad-fux-z]ike\b/, "gmi"),
   new RegExp(/\b[a-z]+[gmx-z]ila\b/, "gmi"),
   new RegExp(/\b[a-z]+[klyz]ile\b/, "gmi"),
   new RegExp(/\b[a-z]+[hmu]ill\b/, "gmi"),
   new RegExp(/\b[a-z]+[bhmsx-z]ilo\b/, "gmi"),
   new RegExp(/\b[a-z]+[aehmx-z]ima\b/, "gmi"),
   new RegExp(/\b[a-z]+[sx-z]ime\b/, "gmi"),
   new RegExp(/\b[a-z]+[dx-z]imo\b/, "gmi"),
   new RegExp(/\b[a-z]+[a-ekloprsv-z]ina\b/, "gmi"),
   new RegExp(/\b[a-z]+gink\b/, "gmi"),
   new RegExp(/\b[a-z]+[ax-z]ird\b/, "gmi"),
   new RegExp(/\b[a-z]+[sx-z]ire\b/, "gmi"),
   new RegExp(/\b[a-z]+[kx-z]irk\b/, "gmi"),
   new RegExp(/\b[a-z]+[ax-z]irt\b/, "gmi"),
   new RegExp(/\b[a-z]+[mx-z]iry\b/, "gmi"),
   new RegExp(/\b[a-z]+[abdhmou-z]isa\b/, "gmi"),
   new RegExp(/\b[a-z]+[x-z]ise\b/, "gmi"),
   new RegExp(/\b[a-z]+[aox-z]ish\b/, "gmi"),
   new RegExp(/\b[a-z]+[lw-z]iso\b/, "gmi"),
   new RegExp(/\b[a-z]+[ajox-z]ite\b/, "gmi"),
   new RegExp(/\b[a-z]+[ejrx-z]ith\b/, "gmi"),
   new RegExp(/\b[a-z]+rito\b/, "gmi"),
   new RegExp(/\b[a-z]+[ix-z]kie\b/, "gmi"),
   new RegExp(/\b[a-z]+[hu]kin\b/, "gmi"),
   new RegExp(/\b[a-z]+[nx-z]kit\b/, "gmi"),
   new RegExp(/\b[a-z]+[ghx-z]lag\b/, "gmi"),
   new RegExp(/\b[a-z]+[aqx-z]lam\b/, "gmi"),
   new RegExp(/\b[a-z]+[elqu-z]lan\b/, "gmi"),
   new RegExp(/\b[a-z]+[anrx-z]lar\b/, "gmi"),
   new RegExp(/\b[a-z]+[px-z]las\b/, "gmi"),
   new RegExp(/\b[a-z]+alay\b/, "gmi"),
   new RegExp(/\b[a-z]+[as-z]lea\b/, "gmi"),
   new RegExp(/\b[a-z]+[ax-z]lel\b/, "gmi"),
   new RegExp(/\b[a-z]+[hx-z]ler\b/, "gmi"),
   new RegExp(/\b[a-z]+fley\b/, "gmi"),
   new RegExp(/\b[a-z]+[x-z]lia\b/, "gmi"),
   new RegExp(/\b[a-z]+[ux-z]lis\b/, "gmi"),
   new RegExp(/\b[a-z]+[aoux-z]lla\b/, "gmi"),
   new RegExp(/\b[a-z]+[aix-z]llo\b/, "gmi"),
   new RegExp(/\b[a-z]+blon\b/, "gmi"),
   new RegExp(/\b[a-z]+[b-flw-z]lum\b/, "gmi"),
   new RegExp(/\b[a-z]+[ax-z]mal\b/, "gmi"),
   new RegExp(/\b[a-z]+[ax-z]man\b/, "gmi"),
   new RegExp(/\b[a-z]+[hx-z]med\b/, "gmi"),
   new RegExp(/\b[a-z]+[mx-z]mel\b/, "gmi"),
   new RegExp(/\b[a-z]+[mx-z]met\b/, "gmi"),
   new RegExp(/\b[a-z]+[x-z]mis\b/, "gmi"),
   new RegExp(/\b[a-z]+[ix-z]mma\b/, "gmi"),
   new RegExp(/\b[a-z]+[ox-z]mme\b/, "gmi"),
   new RegExp(/\b[a-z]+[axz]mph\b/, "gmi"),
   new RegExp(/\b[a-z]+[nx-z]nar\b/, "gmi"),
   new RegExp(/\b[a-z]+[aw-z]nco\b/, "gmi"),
   new RegExp(/\b[a-z]+[eiou-y]nda\b/, "gmi"),
   new RegExp(/\b[a-z]+[ox-z]nde\b/, "gmi"),
   new RegExp(/\b[a-z]+[aox-z]ndo\b/, "gmi"),
   new RegExp(/\b[a-z]+[ahx-z]nee\b/, "gmi"),
   new RegExp(/\b[a-z]+[jx-z]nen\b/, "gmi"),
   new RegExp(/\b[a-z]+[bdfhklpsvx-z]ner\b/, "gmi"),
   new RegExp(/\b[a-z]+[hx-z]ney\b/, "gmi"),
   new RegExp(/\b[a-z]+[ox-z]nge\b/, "gmi"),
   new RegExp(/\b[a-z]+[aeio]ngo\b/, "gmi"),
   new RegExp(/\b[a-z]+[ir-z]nha\b/, "gmi"),
   new RegExp(/\b[a-z]+[bdh-lsz]nia\b/, "gmi"),
   new RegExp(/\b[a-z]+[aox-z]non\b/, "gmi"),
   new RegExp(/\b[a-z]+[au-z]nth\b/, "gmi"),
   new RegExp(/\b[a-z]+[eiu-z]nza\b/, "gmi"),
   new RegExp(/\b[a-z]+[bx-z]oam\b/, "gmi"),
   new RegExp(/\b[a-z]+[a-gi-km-qs-z]obe\b/, "gmi"),
   new RegExp(/\b[a-z]+[bou-z]ock\b/, "gmi"),
   new RegExp(/\b[a-z]+[cmxy]oed\b/, "gmi"),
   new RegExp(/\b[a-z]+[rtx-z]oft\b/, "gmi"),
   new RegExp(/\b[a-z]+[ax-z]oin\b/, "gmi"),
   new RegExp(/\b[a-z]+soir\b/, "gmi"),
   new RegExp(/\b[a-z]+[cx-z]ois\b/, "gmi"),
   new RegExp(/\b[a-z]+[nxz]oke\b/, "gmi"),
   new RegExp(/\b[a-z]+[aeghlmpsux-z]ola\b/, "gmi"),
   new RegExp(/\b[a-z]+[cgm]ole\b/, "gmi"),
   new RegExp(/\b[a-z]+dolf\b/, "gmi"),
   new RegExp(/\b[a-z]+[psux-z]oli\b/, "gmi"),
   new RegExp(/\b[a-z]+[hx-z]olt\b/, "gmi"),
   new RegExp(/\b[a-z]+[bgx-z]oma\b/, "gmi"),
   new RegExp(/\b[a-z]+[gkx-z]ome\b/, "gmi"),
   new RegExp(/\b[a-z]+[a-hv]ona\b/, "gmi"),
   new RegExp(/\b[a-z]+[a-fh-km-qu-z]ong\b/, "gmi"),
   new RegExp(/\b[a-z]+[nv-z]ont\b/, "gmi"),
   new RegExp(/\b[a-z]+[v-z]ony\b/, "gmi"),
   new RegExp(/\b[a-z]+[wx-z]ood\b/, "gmi"),
   new RegExp(/\b[a-z]+[lx-z]oof\b/, "gmi"),
   new RegExp(/\b[a-z]+[kpx-z]ool\b/, "gmi"),
   new RegExp(/\b[a-z]+[bxy]oom\b/, "gmi"),
   new RegExp(/\b[a-z]+[bgx-z]oon\b/, "gmi"),
   new RegExp(/\b[a-z]+[fjkmnx-z]oor\b/, "gmi"),
   new RegExp(/\b[a-z]+[lx-z]oot\b/, "gmi"),
   new RegExp(/\b[a-z]+[gx-z]opa\b/, "gmi"),
   new RegExp(/\b[a-z]+[gx-z]ope\b/, "gmi"),
   new RegExp(/\b[a-z]+[bfjox-z]ord\b/, "gmi"),
   new RegExp(/\b[a-z]+[kopx-z]orn\b/, "gmi"),
   new RegExp(/\b[a-z]+[fox-z]ort\b/, "gmi"),
   new RegExp(/\b[a-z]+[w-z]ose\b/, "gmi"),
   new RegExp(/\b[a-z]+[cgkx-z]ote\b/, "gmi"),
   new RegExp(/\b[a-z]+[bmkx-z]oto\b/, "gmi"),
   new RegExp(/\b[a-z]+aoul\b/, "gmi"),
   new RegExp(/\b[a-z]+[jx-z]our\b/, "gmi"),
   new RegExp(/\b[a-z]+[hrx-z]owe\b/, "gmi"),
   new RegExp(/\b[a-z]+[tx-z]own\b/, "gmi"),
   new RegExp(/\b[a-z]+[nt]pal\b/, "gmi"),
   new RegExp(/\b[a-z]+[ix-z]pan\b/, "gmi"),
   new RegExp(/\b[a-z]+[ex-z]pha\b/, "gmi"),
   new RegExp(/\b[a-z]+[ox-z]pie\b/, "gmi"),
   new RegExp(/\b[a-z]+[mpx-z]pil\b/, "gmi"),
   new RegExp(/\b[a-z]+[ex-z]ppe\b/, "gmi"),
   new RegExp(/\b[a-z]+oppo\b/, "gmi"),
   new RegExp(/\b[a-z]+[a-deiru-z]ram\b/, "gmi"),
   new RegExp(/\b[a-z]+[adi-kmw-z]ran\b/, "gmi"),
   new RegExp(/\b[a-z]+[drx-z]ras\b/, "gmi"),
   new RegExp(/\b[a-z]+[amx-z]rat\b/, "gmi"),
   new RegExp(/\b[a-z]+[ahtx-z]ree\b/, "gmi"),
   new RegExp(/\b[a-z]+uren\b/, "gmi"),
   new RegExp(/\b[a-z]+arew\b/, "gmi"),
   new RegExp(/\b[a-z]+[b-df-np-tw-z]rge\b/, "gmi"),
   new RegExp(/\b[a-z]+[hx-z]ria\b/, "gmi"),
   new RegExp(/\b[a-z]+[ei]rim\b/, "gmi"),
   new RegExp(/\b[a-z]+[jx-z]rin\b/, "gmi"),
   new RegExp(/\b[a-z]+[akx-z]ris\b/, "gmi"),
   new RegExp(/\b[a-z]+[sx-z]rit\b/, "gmi"),
   new RegExp(/\b[a-z]+[ax-z]rma\b/, "gmi"),
   new RegExp(/\b[a-z]+urny\b/, "gmi"),
   new RegExp(/\b[a-z]+[anx-z]ron\b/, "gmi"),
   new RegExp(/\b[a-z]+[u]rre\b/, "gmi"),
   new RegExp(/\b[a-z]+arso\b/, "gmi"),
   new RegExp(/\b[a-z]+[aex-z]rto\b/, "gmi"),
   new RegExp(/\b[a-z]+urty\b/, "gmi"),
   new RegExp(/\b[a-z]+[gox-z]run\b/, "gmi"),
   new RegExp(/\b[a-z]+drup\b/, "gmi"),
   new RegExp(/\b[a-z]+[hx-z]rus\b/, "gmi"),
   new RegExp(/\b[a-z]+[aorsx-z]san\b/, "gmi"),
   new RegExp(/\b[a-z]+[sx-z]sar\b/, "gmi"),
   new RegExp(/\b[a-z]+ssat\b/, "gmi"),
   new RegExp(/\b[a-z]+[dsux-z]sen\b/, "gmi"),
   new RegExp(/\b[a-z]+[sx-z]sey\b/, "gmi"),
   new RegExp(/\b[a-z]+[ax-z]sie\b/, "gmi"),
   new RegExp(/\b[a-z]+[sxy]sim\b/, "gmi"),
   new RegExp(/\b[a-z]+tsma\b/, "gmi"),
   new RegExp(/\b[a-z]+[nsx-z]son\b/, "gmi"),
   new RegExp(/\b[a-z]+[aex-z]sor\b/, "gmi"),
   new RegExp(/\b[a-z]+[en]ssy\b/, "gmi"),
   new RegExp(/\b[a-z]+rste\b/, "gmi"),
   new RegExp(/\b[a-z]+[s-z]tan\b/, "gmi"),
   new RegExp(/\b[a-z]+[ahu-z]tar\b/, "gmi"),
   new RegExp(/\b[a-z]+[eiy]the\b/, "gmi"),
   new RegExp(/\b[a-z]+athk\b/, "gmi"),
   new RegExp(/\b[a-z]+[oux-z]tie\b/, "gmi"),
   new RegExp(/\b[a-z]+[su]tin\b/, "gmi"),
   new RegExp(/\b[a-z]+[au]tle\b/, "gmi"),
   new RegExp(/\b[a-z]+[cdf-hlnp-rw-z]ton\b/, "gmi"),
   new RegExp(/\b[a-z]+atsu\b/, "gmi"),
   new RegExp(/\b[a-z]+[ou]tte\b/, "gmi"),
   new RegExp(/\b[a-z]+buce\b/, "gmi"),
   new RegExp(/\b[a-z]+[el]uch\b/, "gmi"),
   new RegExp(/\b[a-z]+kude\b/, "gmi"),
   new RegExp(/\b[a-z]+oudo\b/, "gmi"),
   new RegExp(/\b[a-z]+[hk]udy\b/, "gmi"),
   new RegExp(/\b[a-z]+auer\b/, "gmi"),
   new RegExp(/\b[a-z]+[dlrx-z]uge\b/, "gmi"),
   new RegExp(/\b[a-z]+[aehrx-z]ugh\b/, "gmi"),
   new RegExp(/\b[a-z]+buil\b/, "gmi"),
   new RegExp(/\b[a-z]+[sty]uim\b/, "gmi"),
   new RegExp(/\b[a-z]+[x-z]uin\b/, "gmi"),
   new RegExp(/\b[a-z]+[sx-z]uke\b/, "gmi"),
   new RegExp(/\b[a-z]+[a-dhj-lrvx-z]ula\b/, "gmi"),
   new RegExp(/\b[a-z]+[ax-z]uld\b/, "gmi"),
   new RegExp(/\b[a-z]+[bgh]ule\b/, "gmi"),
   new RegExp(/\b[a-z]+aull\b/, "gmi"),
   new RegExp(/\b[a-z]+humy\b/, "gmi"),
   new RegExp(/\b[a-z]+[b-km-sx-z]una\b/, "gmi"),
   new RegExp(/\b[a-z]+[adeg-np-sv-z]und\b/, "gmi"),
   new RegExp(/\b[a-z]+[hx-z]une\b/, "gmi"),
   new RegExp(/\b[a-z]+[ahsx-z]ung\b/, "gmi"),
   new RegExp(/\b[a-z]+[a-kn-tx-z]urk\b/, "gmi"),
   new RegExp(/\b[a-z]+ourn\b/, "gmi"),
   new RegExp(/\b[a-z]+[bhpyz]ury\b/, "gmi"),
   new RegExp(/\b[a-z]+[lmx-z]usa\b/, "gmi"),
   new RegExp(/\b[a-z]+nush\b/, "gmi"),
   new RegExp(/\b[a-z]+[ikz]ute\b/, "gmi"),
   new RegExp(/\b[a-z]+[dx-z]uth\b/, "gmi"),
   new RegExp(/\b[a-z]+guve\b/, "gmi"),
   new RegExp(/\b[a-z]+[alx-z]van\b/, "gmi"),
   new RegExp(/\b[a-z]+[aeiu-z]var\b/, "gmi"),
   new RegExp(/\b[a-z]+nver\b/, "gmi"),
   new RegExp(/\b[a-z]+avet\b/, "gmi"),
   new RegExp(/\b[a-z]+[a-cf-npqsu-z]war\b/, "gmi"),
   new RegExp(/\b[a-z]+[au-z]wel\b/, "gmi"),
   new RegExp(/\b[a-z]+[kx-z]won\b/, "gmi"),
   new RegExp(/\b[a-z]+[aeiux-z]wse\b/, "gmi"),
   new RegExp(/\b[a-z]+[ainx-z]yam\b/, "gmi"),
   new RegExp(/\b[a-z]+ryde\b/, "gmi"),
   new RegExp(/\b[a-z]+[n-rx-z]yle\b/, "gmi"),
   new RegExp(/\b[a-z]+[jx-z]zen\b/, "gmi"),
   new RegExp(/\b[a-z]+cz[a-z]+\b/, "gmi"),
   new RegExp(/\b[a-z]+rz[a-z]+\b/, "gmi"),
   new RegExp(/\b[a-z]+tz[a-z]+\b/, "gmi"),
               
   new RegExp(/\b[a-z]+a[ajq][a-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+a[boy][a-rt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ac[a-df-gijl-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ad[a-df-np-rtu-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ae[a-ce-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+af[a-dg-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ag[a-df-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ah[b-rt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ai[abef-ko-qsu-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ak[a-df-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+al[a-cg-jnqu-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+am[cdf-hj-mqru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+an[a-cfhijl-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ap[a-dfgi-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ar[acg-joqu-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+as[a-dfgijloqru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+at[a-dfgi-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+au[a-km-qu-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+av[b-df-np-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+aw[a-jmo-qrt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ax[a-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+az[a-df-xz]\b/, "gmi"),

   new RegExp(/\b[a-z]+ba[a-dfh-kmo-qtu-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+bb[ac-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+b[cdfhjkmpqsw-z][a-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+be[a-cfg-km-qu-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+bi[bfh-mo-ru-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+bl[a-df-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+bn[a-fh-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+bo[a-mpuvz]\b/, "gmi"),
   new RegExp(/\b[a-z]+br[b-df-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+bt[a-pr-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+bu[acfh-mo-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+bv[a-rt-z]\b/, "gmi"),

   new RegExp(/\b[a-z]+ca[acdg-koquvz]\b/, "gmi"),
   new RegExp(/\b[a-z]+c[bcfgjqsvwx][a-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+cd[abd-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ce[bcf-kmoqu-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ch[b-dg-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ci[bf-kqru-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ck[a-ot-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+c[lr][b-df-np-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+cm[a-oq-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+cn[a-df-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+co[cfhi-ko-qu-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+cp[a-ik-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ct[b-ej-rt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+cu[a-df-knoqu-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+cy[a-km-wyz]\b/, "gmi"),

   new RegExp(/\b[a-z]+da[a-cf-km-qu-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+d[bdfhjkmqvwxz][a-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+dc[a-mo-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+de[a-cf-ko-qt-vz]\b/, "gmi"),
   new RegExp(/\b[a-z]+dg[a-df-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+di[be-kmp-ru-wyz]\b/, "gmi"),
   new RegExp(/\b[a-z]+dl[a-df-hj-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+dn[a-ru-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+do[abd-fh-ko-quvyz]\b/, "gmi"),
   new RegExp(/\b[a-z]+dp[a-qs-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+dr[a-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ds[a-su-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+dt[a-fh-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+du[acdf-lnoqrt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+dy[a-df-km-z]\b/, "gmi"),

   new RegExp(/\b[a-z]+ea[a-cgijoqu-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+eb[b-np-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+e[cs][b-dfgijl-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ed[a-df-np-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ee[a-cf-jmoqu-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ef[a-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+eg[b-df-lnp-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+e[hjq][a-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ei[bd-kmo-qt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ek[a-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+el[a-ceg-knoqru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+em[b-df-mqru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+en[bcf-np-rv-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+eo[a-eg-qt-vx-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ep[a-df-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+er[g-jqru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+et[b-dfgj-np-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+eu[a-ce-lnoqt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+e[vz][a-df-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ew[a-mo-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ex[a-df-hj-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ey[a-df-rt-z]\b/, "gmi"),

   new RegExp(/\b[a-z]+fa[a-mo-qu-wyz]\b/, "gmi"),
   new RegExp(/\b[a-z]+f[b-dghjkmnpqsv-z][a-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+fe[a-cf-mo-qt-vxz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ff[a-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+fi[e-kqru-wyz]\b/, "gmi"),
   new RegExp(/\b[a-z]+fl[a-df-tv-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+fo[a-fh-lo-qt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+fr[a-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ft[a-gi-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+fu[a-km-qt-z]\b/, "gmi"),

   new RegExp(/\b[a-z]+ga[a-df-koqu-xz]\b/, "gmi"),   
   new RegExp(/\b[a-z]+gb[a-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+g[cdfjkpqvwxz][a-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ge[bcf-kpqu-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+gg[a-fh-uz]\b/, "gmi"),
   new RegExp(/\b[a-z]+gh[a-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+gi[bd-fhi-kmoqru-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+gl[a-df-np-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+gm[a-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+gn[a-df-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+go[a-mo-qu-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+gr[a-df-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+gs[a-su-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+gt[a-gi-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+gu[a-df-lo-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+gy[a-rt-z]\b/, "gmi"),

   new RegExp(/\b[a-z]+ha[a-km-ru-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+h[b-df-hjknp-rv-xz][a-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+he[bcef-ko-quvxyz]\b/, "gmi"),
   new RegExp(/\b[a-z]+hi[abef-loqru-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+hl[a-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+hm[a-rt-wyz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ho[a-cfh-koquvx-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+hs[a-uw-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ht[a-gi-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+hu[a-oqu-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+hy[a-kn-z]\b/, "gmi"),

   new RegExp(/\b[a-z]+ia[abf-kmo-qu-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ib[a-df-mo-rt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ic[b-df-jl-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+id[b-df-np-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ie[a-ceg-kno-qvyz]\b/, "gmi"),
   new RegExp(/\b[a-z]+if[a-dg-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ig[b-dfgij-lp-rt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+i[h-jqw-y][a-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ik[a-df-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+il[bcg-ju-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+im[cdf-nqrt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+in[bfhijm-ru-wz]\b/, "gmi"),
   new RegExp(/\b[a-z]+io[a-ce-ko-qu-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ip[a-df-hk-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ir[a-cf-jqnou-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+is[bdfgijloqrv-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+it[acdgijl-nprt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+iu[a-ln-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+iv[a-df-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+iz[a-df-y]\b/, "gmi"),

   new RegExp(/\b[a-z]+j[a-z][a-z]\b/, "gmi"),

   new RegExp(/\b[a-z]+ka[a-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+k[b-df-hjmnp-rtv-z][a-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ke[a-ce-kmo-quvxz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ki[a-cfh-mqrsu-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+kk[a-rt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+kl[a-df-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ko[a-mo-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ks[a-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ku[a-oq-z]\b/, "gmi"),

   new RegExp(/\b[a-z]+la[afh-loquvz]\b/, "gmi"),
   new RegExp(/\b[a-z]+l[bdkmp][a-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+lc[a-gi-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+le[bcfh-ko-quvz]\b/, "gmi"),
   new RegExp(/\b[a-z]+lf[a-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+lg[a-df-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+l[hjqwxz][a-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+li[bf-moqru-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ll[b-jmnp-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ln[a-fh-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+lo[a-fh-koqsuvxz]\b/, "gmi"),
   new RegExp(/\b[a-z]+lr[a-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ls[a-df-su-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+lt[a-gi-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+lu[acdfh-ln-rt-wyz]\b/, "gmi"),
   new RegExp(/\b[a-z]+lv[a-df-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ly[a-km-rt-wyz]\b/, "gmi"),

   new RegExp(/\b[a-z]+ma[a-kmoqru-wyz]\b/, "gmi"),
   new RegExp(/\b[a-z]+m[bn][a-rt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+m[cfgjkq-tvwyz][a-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+md[a-rt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+me[a-ce-kmo-qu-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+mh[a-wyz]\b/, "gmi"),
   new RegExp(/\b[a-z]+mi[bf-kmo-ru-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ml[a-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+mm[b-df-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+mo[a-lo-qt-wz]\b/, "gmi"),
   new RegExp(/\b[a-z]+mp[a-gj-oru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+mu[a-ln-rt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+my[a-km-z]\b/, "gmi"),   

   new RegExp(/\b[a-z]+na[a-df-km-oquvxz]\b/, "gmi"),
   new RegExp(/\b[a-z]+n[bfmpqv-x][a-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+nc[a-dfgi-kmnp-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+nd[b-df-np-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ne[bcf-kmpquvz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ng[a-df-np-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+n[hz][b-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ni[e-kqru-wy]\b/, "gmi"),
   new RegExp(/\b[a-z]+nj[a-rt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+nk[a-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+nl[a-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+nn[a-fh-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+no[cf-ko-quvz]\b/, "gmi"),
   new RegExp(/\b[a-z]+nr[a-df-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ns[a-df-suvxz]\b/, "gmi"),
   new RegExp(/\b[a-z]+nt[a-gi-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+nu[a-df-knoqru-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ny[a-kn-z]\b/, "gmi"),

   new RegExp(/\b[a-z]+oa[a-cg-joqsu-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ob[a-df-km-rt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+oc[a-jl-ru-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+od[a-df-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+oe[bce-qs-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+of[a-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+o[gx][a-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+o[hy][a-rt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+oi[be-kmo-qu-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+o[jq][a-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ok[a-df-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ol[bcghjm-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+om[cf-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+on[bcfhijl-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+oo[a-ceg-joqu-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+op[b-df-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+or[cf-jlo-ru-wz]\b/, "gmi"),
   new RegExp(/\b[a-z]+os[a-dfgi-ln-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ot[a-dfgi-np-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ou[a-ce-km-oqu-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ow[a-df-kmo-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+o[vz][a-df-xz]\b/, "gmi"),

   new RegExp(/\b[a-z]+pa[a-cfgi-ko-quvz]\b/, "gmi"),
   new RegExp(/\b[a-z]+p[b-dfgjkmnqv-xz][a-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+pe[bcfh-kopuvz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ph[b-df-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+pi[bf-ko-ru-wyz]\b/, "gmi"),
   new RegExp(/\b[a-z]+pl[a-df-hj-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+po[a-ce-lqru-wyz]\b/, "gmi"),
   new RegExp(/\b[a-z]+p[pqs][a-df-np-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+pr[a-df-np-wz]\b/, "gmi"),
   new RegExp(/\b[a-z]+pt[a-gj-np-rtv-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+pu[a-ce-moqru-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+py[a-kn-qt-z]\b/, "gmi"),

   new RegExp(/\b[a-z]+q[a-z][a-z]\b/, "gmi"),

   new RegExp(/\b[a-z]+ra[acdfh-koqruvz]\b/, "gmi"),
   new RegExp(/\b[a-z]+r[bdfk][a-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+rc[a-dfgi-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+re[bcf-kquvz]\b/, "gmi"),
   new RegExp(/\b[a-z]+rg[a-df-np-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+rh[a-rt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ri[be-kqru-wy]\b/, "gmi"),
   new RegExp(/\b[a-z]+r[jqwx][a-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+rl[a-ce-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+rm[b-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+rn[a-ef-np-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ro[acdhi-kmquvxz]\b/, "gmi"),
   new RegExp(/\b[a-z]+rp[a-gj-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+rr[a-df-qs-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+rs[a-dfgj-np-su-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+rt[a-gi-mp-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ru[a-dfh-loqrt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+rv[b-df-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ry[a-np-wyz]\b/, "gmi"),

   new RegExp(/\b[a-z]+sa[a-df-ko-quvxz]\b/, "gmi"),
   new RegExp(/\b[a-z]+s[bdfgjqrwz][a-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+sc[a-df-rt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+se[abf-kmo-qu-wz]\b/, "gmi"),
   new RegExp(/\b[a-z]+sh[a-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+si[bf-ko-ru-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+s[ky][a-rt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+sl[a-df-su-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+sm[b-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+sn[a-su-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+so[a-koqu-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+sp[a-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ss[a-df-np-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+st[a-df-hj-np-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+su[a-df-koqt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+sv[a-oq-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+sx[a-ln-z]\b/, "gmi"),
   
   new RegExp(/\b[a-z]+ta[acdfh-ko-qu-wz]\b/, "gmi"),
   new RegExp(/\b[a-z]+t[bdfgjkpqv-y][a-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+tc[a-gi-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+te[bcf-hjkoqu-wz]\b/, "gmi"),
   new RegExp(/\b[a-z]+th[a-df-jln-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ti[bf-kqru-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+tl[a-df-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+tm[a-rt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+tn[a-fh-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+to[a-df-kotuvz]\b/, "gmi"),
   new RegExp(/\b[a-z]+tr[b-df-np-su-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ts[a-cefg-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+tt[abdf-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+tu[acf-oqt-z]\b/, "gmi"),

   new RegExp(/\b[a-z]+ua[a-df-km-su-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ub[a-df-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+uc[a-dfgijl-su-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ud[a-df-np-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ue[a-cf-km-qu-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+uf[a-eg-ru-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ug[a-dfgi-qt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+uh[a-rt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ui[fh-lqrsu-y]\b/, "gmi"),
   new RegExp(/\b[a-z]+u[jqwxz][a-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+uk[a-df-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ul[cgh-jm-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+um[acdf-moqruvxz]\b/, "gmi"),
   new RegExp(/\b[a-z]+un[bcfh-jl-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+uo[a-qt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+up[a-df-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ur[acg-jlqu-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+us[bdfgijl-ru-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ut[a-dfgi-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+uu[a-ln-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+uv[a-df-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+uy[a-rt-z]\b/, "gmi"),
   
   new RegExp(/\b[a-z]+va[a-df-kmo-qtu-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+v[b-df-hj-npqtv-z][a-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ve[a-ce-ko-qu-wz]\b/, "gmi"),
   new RegExp(/\b[a-z]+vi[cf-ko-rt-wyz]\b/, "gmi"),
   new RegExp(/\b[a-z]+vo[a-quvxz]\b/, "gmi"),
   new RegExp(/\b[a-z]+vr[a-df-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+vs[a-ce-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+vu[a-df-z]\b/, "gmi"),
  
   new RegExp(/\b[a-z]+wa[a-qt-vz]\b/, "gmi"),
   new RegExp(/\b[a-z]+w[bcf-hjmpqv-z][a-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+w[dln][a-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+we[ace-km-qu-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+wi[a-fhj-lo-su-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+wk[a-rt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+wo[a-fh-kmo-ru-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+wr[a-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ws[a-df-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+wt[a-gi-rt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+wu[a-lnoq-z]\b/, "gmi"),
   
   new RegExp(/\b[a-z]+xa[abdf-ko-qu-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+x[b-df-hjkmnp-su-wz][a-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+xe[a-ce-ko-qu-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+xi[fhi-kqru-wy]\b/, "gmi"),
   new RegExp(/\b[a-z]+xl[a-df-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+xo[b-lo-qt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+xt[a-gi-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+xy[a-wyz]\b/, "gmi"),
   
   new RegExp(/\b[a-z]+ya[a-kn-rt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+y[bn][a-df-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+y[cf-kqu-y][a-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+yd[a-df-rt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ye[a-ce-qu-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+yl[a-df-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+ym[a-df-moq-rt-xz]\b/, "gmi"),
   new RegExp(/\b[a-z]+yo[a-qt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+y[pt][a-df-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+yr[a-df-np-rt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ys[a-df-su-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+yz[a-km-z]\b/, "gmi"),

   new RegExp(/\b[a-z]+za[a-rt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+ze[a-ce-mo-qt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+zl[a-df-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+zo[b-rt-z]\b/, "gmi"),
   new RegExp(/\b[a-z]+z[b-df-kmnp-z][a-z]\b/, "gmi")
];