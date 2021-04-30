export const NamesEndingRegEx: RegExp[] = [
   /[a-z]*[À-ÖØ-öø-ÿãñõțũūąğịňōıŚạşęăầẩőếěšảłộđơńėčćəāţș]+[a-z]*/gmi,

   /\b[A-Z][a-z]+(?=\ssaid[\.\s\,])/gm,

   /\b(?:gilfach|[a-z]+bo?ro)'/gmi,

   /\b[a-z]+boroughs?\b/gmi,
   /\b[a-z]+ch?esters?\b/gmi,

   /\b[a-z]+berger\b/gmi,
   /\b[a-z]+bridge\b/gmi,
   /\b[a-z]+castle\b/gmi,
   /\b[a-z]+church\b/gmi,
   /\b[a-z]+greave\b/gmi,
   /\b[a-z]+ingdon\b/gmi,
   /\b[a-z]+meadows?\b/gmi,
   /\b[a-z]+oorthy\b/gmi,
   /\b[a-z]+shields?\b/gmi,
   /\b[a-z]+strand\b/gmi,

   /\b[a-z]+ahman\b/gmi,
   /\b[a-z]+asong\b/gmi,
   /\b[a-z]+brooks?\b/gmi,
   /\b[a-z]+cliff\b/gmi,
   /\b[a-z]+court\b/gmi,
   /\b[a-z]+crest\b/gmi,
   /\b[a-z]+eimer\b/gmi,
   /\b[a-z]+eiser\b/gmi,
   /\b[a-z]+eston\b/gmi,
   /\b[a-z]+firth\b/gmi,
   /\b[a-z]+[abdhijl-or-uwy]gard\b/gmi,
   /\b[a-z]+grove\b/gmi,
   /\b[a-z]+haven\b/gmi,
   /\b[a-z]+hayes\b/gmi,
   /\b[a-z]+hedges?\b/gmi,
   /\b[a-z]+hofer\b/gmi,
   /\b[a-z]+[a-su-z]hree\b/gmi,
   /\b[a-z]+hurst\b/gmi,
   /\b[a-z]+kirch\b/gmi,
   /\b[a-z]+laine\b/gmi,
   /\b[a-z]+leaze\b/gmi,
   /\b[a-z]+[a-mo-vx-z]eigh\b/gmi,
   /\b[a-z]+meade\b/gmi,
   /\b[a-z]+meyer\b/gmi,
   /\b[a-z]+marsh\b/gmi,
   /\b[a-z]+mouth\b/gmi,
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

   /\b[a-z]+[iou]nto\b/gmi,

   /\b[a-z]+[a-dg-lp-su-z]ach\b/gmi,
   /\b[a-z]+[acd-gikovyz]ack\b/gmi,
   /\b[a-z]+[abd-mpqtuw-z]ado\b/gmi,
   /\b[a-z]+[ajx-z]age\b/gmi,
   /\b[a-z]+[a-gi-z]aha\b/gmi,
   /\b[a-z]+[bhwz]aid\b/gmi,
   /\b[a-z]+[acd-ko-qwx-z]ail\b/gmi,
   /\b[a-z]+[abd-km-prs-z]aim\b/gmi,
   /\b[a-z]+[a-cefi-knoqsux-z]ain\b/gmi,
   /\b[a-z]+[a-egjkmqu-z]air\b/gmi,
   /\b[a-z]+[vy]ake\b/gmi,
   /\b[a-z]+[adfw-z]ald\b/gmi,
   /\b[a-z]+[adgioqv-z]ale\b/gmi,
   /\b[a-z]+[dg-jx-z]all\b/gmi,
   /\b[a-z]+[a-eg-z]alo\b/gmi,
   /\b[a-z]+nalt\b/gmi,
   /\b[a-z]+[dfiluv]aly\b/gmi,
   /\b[a-z]+[adhk-ns-uw-z]ama\b/gmi,
   /\b[a-z]+[hx-z]ame\b/gmi,
   /\b[a-z]+[a-koqs-z]ami\b/gmi,
   /\b[a-z]+[abd-lmpr-z]amo\b/gmi,
   /\b[a-z]+[ckz]amp\b/gmi,
   /\b[a-z]+[a-dh-jrsv-z]amy\b/gmi,
   /\b[a-z]+[adefi-kovw]and\b/gmi,
   /\b[a-z]+[abd-gi-km-quw-z]ane\b/gmi,
   /\b[a-z]+[a-z]ang\b/gmi,
   /\b[a-z]+[aimyz]ank\b/gmi,
   /\b[a-z]+[brx-z]any\b/gmi,
   /\b[a-z]+[lx-z]ape\b/gmi,
   /\b[a-z]+[afnq-sx]ard\b/gmi,
   /\b[a-z]+[aivx-z]are\b/gmi,
   /\b[a-z]+[npx-z]ark\b/gmi,
   /\b[a-z]+[fx-z]arm\b/gmi,
   /\b[a-z]+[a-df-vy]arn\b/gmi,
   /\b[a-z]+[abix-z]art\b/gmi,
   /\b[a-z]+[nw-z]ase\b/gmi,
   /\b[a-z]+[akpuvx-z]ash\b/gmi,
   /\b[a-z]+[a-djz]ask\b/gmi,
   /\b[a-z]+[nx-z]ass\b/gmi,
   /\b[a-z]+[w-z]ate\b/gmi,
   /\b[a-z]+[adknoqrtuvx-z]ath\b/gmi,
   /\b[a-z]+waty\b/gmi,
   /\b[a-z]+[gp]aul\b/gmi,
   /\b[a-z]+[kx-z]aur\b/gmi,
   /\b[a-z]+[hl]aus\b/gmi,
   /\b[a-z]+[a-km-rtv-z]ava\b/gmi,
   /\b[a-z]+[a-chx-z]bar\b/gmi,
   /\b[a-z]+[ao]bee\b/gmi,
   /\b[a-z]+[bxz]bel\b/gmi,
   /\b[a-z]+[ek]ber\b/gmi,
   /\b[a-z]+[bghnstuvyz]bia\b/gmi,
   /\b[a-z]+[lux-z]bie\b/gmi,
   /\b[a-z]+[aou]bon\b/gmi,
   /\b[a-z]+[b-gi-qs-z]bor\b/gmi,
   /\b[a-z]+[aou]bun\b/gmi,
   /\b[a-z]+[adgjkmprtvz]can\b/gmi,
   /\b[a-z]+[au]car\b/gmi,
   /\b[a-z]+[au-z]cat\b/gmi,
   /\b[a-z]+[a-z]cha\b/gmi,
   /\b[a-z]+[u-z]che\b/gmi,
   /\b[a-z]+[eijknqw-z]cia\b/gmi,
   /\b[a-z]+[iv]cic\b/gmi,
   /\b[a-z]+[a-cilnrux-z]cio\b/gmi,
   /\b[a-z]+[nuwy]cla\b/gmi,
   /\b[a-z]+[inx-z]cot\b/gmi,
   /\b[a-z]+[b-hjkmnp-rt-z]cum\b/gmi,
   /\b[a-z]+[a-ce-np-z]dad\b/gmi,
   /\b[a-z]+[bjsx-z]dal\b/gmi,
   /\b[a-z]+[adhx-z]dar\b/gmi,
   /\b[a-z]+[aux-z]dee\b/gmi,
   /\b[a-z]+[adklmru]dem\b/gmi,
   /\b[a-z]+[bce-hjkmp-qstv-z]den\b/gmi,
   /\b[a-z]+[aiklr]dep\b/gmi,
   /\b[a-z]+gder\b/gmi,
   /\b[a-z]+[deoru-z]din\b/gmi,
   /\b[a-z]+[b-qstv-z]dio\b/gmi,
   /\b[a-z]+[h-kr-z]dis\b/gmi,
   /\b[a-z]+adoc\b/gmi,
   /\b[a-z]+[a-hj-z]dol\b/gmi,
   /\b[a-z]+[gmnsx-z]don\b/gmi,
   /\b[a-z]+[b-hj-lmo-qstv-z]dor\b/gmi,
   /\b[a-z]+[d]dow\b/gmi,
   /\b[a-z]+[a]dum\b/gmi,
   /\b[a-z]+[mtx-z]ead\b/gmi,
   /\b[a-z]+deam\b/gmi,
   /\b[a-z]+[hi]ean\b/gmi,
   /\b[a-z]+[a-np-z]eba\b/gmi,
   /\b[a-z]+[a-qs-z]eby\b/gmi,
   /\b[a-z]+[bix-z]eca\b/gmi,
   /\b[a-z]+[bilu-z]ech\b/gmi,
   /\b[a-z]+[abefgi-kmos-wyz]eck\b/gmi,
   /\b[a-z]+[aimx-z]ede\b/gmi,
   /\b[a-z]+[cfgx-z]edo\b/gmi,
   /\b[a-z]+aedy\b/gmi,
   /\b[a-z]+[hmvx-z]eed\b/gmi,
   /\b[a-z]+[bf]eek\b/gmi,
   /\b[a-z]+[a-gi-mo-qsu-z]eel\b/gmi,
   /\b[a-z]+[lrx-z]eem\b/gmi,
   /\b[a-z]+[a-jmnvx-z]een\b/gmi,
   /\b[a-z]+[dx-z]eep\b/gmi,
   /\b[a-z]+[bgjkmvx-z]eer\b/gmi,
   /\b[a-z]+[degijnpqs-vx-z]eet\b/gmi,
   /\b[a-z]+[a-gijnorsuyz]eff\b/gmi,
   /\b[a-z]+oeft\b/gmi,
   /\b[a-z]+[a-ce-ko-z]ega\b/gmi,
   /\b[a-z]+[h-lx-z]ego\b/gmi,
   /\b[a-z]+[a-dy]eia\b/gmi,
   /\b[a-z]+[adfghklnotuwyz]eil\b/gmi,
   /\b[a-z]+[behlswx-z]ein\b/gmi,
   /\b[a-z]+[a-gi-z]eir\b/gmi,
   /\b[a-z]+[nrx-z]eis\b/gmi,
   /\b[a-z]+[abd-fj-z]eld\b/gmi,
   /\b[a-z]+[afgrx-z]ell\b/gmi,
   /\b[a-z]+[a-ce-gklo-qu-w]ema\b/gmi,
   /\b[a-z]+[gx-z]eme\b/gmi,
   /\b[a-z]+[a-gi-ln-qs-uw-z]emo\b/gmi,
   /\b[a-z]+[a-fi-lnpqs-z]ena\b/gmi,
   /\b[a-z]+wend\b/gmi,
   /\b[a-z]+[deiw]ene\b/gmi,
   /\b[a-z]+[yz]eno\b/gmi,
   /\b[a-z]+[kls-z]epe\b/gmi,
   /\b[a-z]+[bjkux-z]era\b/gmi,
   /\b[a-z]+[ov-z]erd\b/gmi,
   /\b[a-z]+[beikmwy]ere\b/gmi,
   /\b[a-z]+[iw]erk\b/gmi,
   /\b[a-z]+derl\b/gmi,
   /\b[a-z]+[fgkmwx-z]ern\b/gmi,
   /\b[a-z]+[bdgi-kruvxy]ero\b/gmi,
   /\b[a-z]+[abf-hkmwx-z]ert\b/gmi,
   /\b[a-z]+[bx-z]ese\b/gmi,
   /\b[a-z]+[a-knops-z]esh\b/gmi,
   /\b[a-z]+[be-lnpuwx-z]eta\b/gmi,
   /\b[a-z]+[klu]ete\b/gmi,
   /\b[a-z]+[a-dlnpx-z]eth\b/gmi,
   /\b[a-z]+[a-z]eti\b/gmi,
   /\b[a-z]+[a-mo-qs-z]eto\b/gmi,
   /\b[a-z]+[hm]eur\b/gmi,
   /\b[a-z]+jeus\b/gmi,
   /\b[a-z]+[ly]eve\b/gmi,
   /\b[a-z]+[hnz]eye\b/gmi,
   /\b[a-z]+[aux-z]eze\b/gmi,
   /\b[a-z]+[s]fan\b/gmi,
   /\b[a-z]+[finx-z]far\b/gmi,
   /\b[a-z]+[a-df-hj-mo-qs-vx-z]fat\b/gmi,
   /\b[a-z]+zfer\b/gmi,
   /\b[a-z]+afey\b/gmi,
   /\b[a-z]+[o]fia\b/gmi,
   /\b[a-z]+[ox-z]fio\b/gmi,
   /\b[a-z]+efon\b/gmi,
   /\b[a-z]+[aex-z]fur\b/gmi,
   /\b[a-z]+ygal\b/gmi,
   /\b[a-z]+[agn]gam\b/gmi,
   /\b[a-z]+[ginosx-z]gan\b/gmi,
   /\b[a-z]+[amt]gar\b/gmi,
   /\b[a-z]+[a-df-qstv-z]gat\b/gmi,
   /\b[a-z]+egel\b/gmi,
   /\b[a-z]+[agxz]gen\b/gmi,
   /\b[a-z]+[dgjmtuw]gia\b/gmi,
   /\b[a-z]+[a-ce-hj-ps-wyz]gil\b/gmi,
   /\b[a-z]+[io]gne\b/gmi,
   /\b[a-z]+[nx-z]gum\b/gmi,
   /\b[a-z]+[acgi-lnsuvyz]gun\b/gmi,
   /\b[a-z]+[a-cf-su-z]gut\b/gmi,
   /\b[a-z]+[abkoux-z]hal\b/gmi,
   /\b[a-z]+[abd-suvx-z]hat\b/gmi,
   /\b[a-z]+[sx-z]hea\b/gmi,
   /\b[a-z]+[gkox-z]hel\b/gmi,
   /\b[a-z]+[jx-z]hen\b/gmi,
   /\b[a-z]+nhet\b/gmi,
   /\b[a-z]+ahew\b/gmi,
   /\b[a-z]+[ax-z]hid\b/gmi,
   /\b[a-z]+[a-hj-ortuw-z]him\b/gmi,
   /\b[a-z]+[dgkx-z]hin\b/gmi,
   /\b[a-z]+[cx-z]hit\b/gmi,
   /\b[a-z]+[a-cgnx-z]hoe\b/gmi,
   /\b[a-z]+[abcnr]hog\b/gmi,
   /\b[a-z]+chom\b/gmi,
   /\b[a-z]+[cksx-z]hon\b/gmi,
   /\b[a-z]+[adeg-oruwy]hor\b/gmi,
   /\b[a-z]+[a-qt-z]hot\b/gmi,
   /\b[a-z]+chow\b/gmi,
   /\b[a-z]+[kx-z]hup\b/gmi,
   /\b[a-z]+[a-rt-z]hut\b/gmi,
   /\b[a-z]+[ah-kqux-z]ian\b/gmi,
   /\b[a-z]+[anrx-z]iar\b/gmi,
   /\b[a-z]+[a-qs-z]iat\b/gmi,
   /\b[a-z]+[ejovx-z]ica\b/gmi,
   /\b[a-z]+[aw]ick\b/gmi,
   /\b[a-z]+[adeux-z]ida\b/gmi,
   /\b[a-z]+[jy]ide\b/gmi,
   /\b[a-z]+[ayz]ido\b/gmi,
   /\b[a-z]+[aeou]idy\b/gmi,
   /\b[a-z]+[a-oq-su-z]iel\b/gmi,
   /\b[a-z]+[a-tv-z]iem\b/gmi,
   /\b[a-z]+[aeuvy]ier\b/gmi,
   /\b[a-z]+[lm]iet\b/gmi,
   /\b[a-z]+[djlsx-z]ieu\b/gmi,
   /\b[a-z]+[nx-z]iew\b/gmi,
   /\b[a-z]+[mt]ife\b/gmi,
   /\b[a-z]+[amn]iga\b/gmi,
   /\b[a-z]+[dhx-z]ige\b/gmi,
   /\b[a-z]+[ax-z]igh\b/gmi,
   /\b[a-z]+[a-ce-hjln-prsuvx-z]igo\b/gmi,
   /\b[a-z]+[ad-fuw-z]ike\b/gmi,
   /\b[a-z]+[agmx-z]ila\b/gmi,
   /\b[a-z]+eild\b/gmi,
   /\b[a-z]+[akloyz]ile\b/gmi,
   /\b[a-z]+[aghmuv]ill\b/gmi,
   /\b[a-z]+[bhmnsx-z]ilo\b/gmi,
   /\b[a-z]+[adehmosx-z]ima\b/gmi,
   /\b[a-z]+[sx-z]ime\b/gmi,
   /\b[a-z]+[a-jl-qsu-z]imo\b/gmi,
   /\b[a-z]+[a-ehkloprsv-z]ina\b/gmi,
   /\b[a-z]+[a-eghl-nptvw]inc\b/gmi,
   /\b[a-z]+[jq]ing\b/gmi,
   /\b[a-z]+[dg]ink\b/gmi,
   /\b[a-z]+[wz]ior\b/gmi,
   /\b[a-z]+[de]ipe\b/gmi,
   /\b[a-z]+[ax-z]ird\b/gmi,
   /\b[a-z]+[x-z]ire\b/gmi,
   /\b[a-z]+[kx-z]irk\b/gmi,
   /\b[a-z]+[ax-z]irt\b/gmi,
   /\b[a-z]+[mx-z]iry\b/gmi,
   /\b[a-z]+[abdehmou-z]isa\b/gmi,
   /\b[a-z]+[x-z]ise\b/gmi,
   /\b[a-z]+[aox-z]ish\b/gmi,
   /\b[a-z]+[lw-z]iso\b/gmi,
   /\b[a-z]+eiss\b/gmi,
   /\b[a-z]+[ajox-z]ite\b/gmi,
   /\b[a-z]+[ejrx-z]ith\b/gmi,
   /\b[a-z]+[ilmrz]ito\b/gmi,
   /\b[a-z]+hity\b/gmi,
   /\b[a-z]+akel\b/gmi,
   /\b[a-z]+[ej]ken\b/gmi,
   /\b[a-z]+jker\b/gmi,
   /\b[a-z]+uket\b/gmi,
   /\b[a-z]+[ix-z]kie\b/gmi,
   /\b[a-z]+[cf-hjknoqtu-xz]kin\b/gmi,
   /\b[a-z]+[abdf-rt-z]kit\b/gmi,
   /\b[a-z]+[aceno]ksy\b/gmi,
   /\b[a-z]+[bd-fh-km-z]lad\b/gmi,
   /\b[a-z]+[b-eg-sv-z]lag\b/gmi,
   /\b[a-z]+[a-ceg-km-z]lam\b/gmi,
   /\b[a-z]+[elqu-z]lan\b/gmi,
   /\b[a-z]+[anrx-z]lar\b/gmi,
   /\b[a-z]+[px-z]las\b/gmi,
   /\b[a-z]+[abdg-oqr-tz]lat\b/gmi,
   /\b[a-z]+[abdf-kmoqsu-z]lay\b/gmi,
   /\b[a-z]+[aks-z]lea\b/gmi,
   /\b[a-z]+[au]lee\b/gmi,
   /\b[a-z]+[ax-z]lel\b/gmi,
   /\b[a-z]+elem\b/gmi,
   /\b[a-z]+glen\b/gmi,
   /\b[a-z]+[hx-z]ler\b/gmi,
   /\b[a-z]+[fw]ley\b/gmi,
   /\b[a-z]+[x-z]lia\b/gmi,
   /\b[a-z]+hlin\b/gmi,
   /\b[a-z]+glip\b/gmi,
   /\b[a-z]+[ux-z]lis\b/gmi,
   /\b[a-z]+alit\b/gmi,
   /\b[a-z]+[aoux-z]lla\b/gmi,
   /\b[a-z]+[aiux-z]llo\b/gmi,
   /\b[a-z]+blom\b/gmi,
   /\b[a-z]+blon\b/gmi,
   /\b[a-z]+dlow\b/gmi,
   /\b[a-z]+[b-flw-z]lum\b/gmi,
   /\b[a-z]+[ax-z]mal\b/gmi,
   /\b[a-z]+[acjx-z]man\b/gmi,
   /\b[a-z]+[aiy]mca\b/gmi,
   /\b[a-z]+[hx-z]med\b/gmi,
   /\b[a-z]+[hmx-z]mel\b/gmi,
   /\b[a-z]+[cdghjknstvwxz]mer\b/gmi,
   /\b[a-z]+[mx-z]met\b/gmi,
   /\b[a-z]+[x-z]mis\b/gmi,
   /\b[a-z]+[ix-z]mma\b/gmi,
   /\b[a-z]+[ox-z]mme\b/gmi,
   /\b[a-z]+[axz]mph\b/gmi,
   /\b[a-z]+[dghik-ostwy]mor\b/gmi,
   /\b[a-z]+[b-dfhjpstwyz]nal\b/gmi,
   /\b[a-z]+[nx-z]nar\b/gmi,
   /\b[a-z]+[aw-z]nco\b/gmi,
   /\b[a-z]+[eiou-y]nda\b/gmi,
   /\b[a-z]+[ox-z]nde\b/gmi,
   /\b[a-z]+[aox-z]ndo\b/gmi,
   /\b[a-z]+[fhntwy]ndy\b/gmi,
   /\b[a-z]+[ahx-z]nee\b/gmi,
   /\b[a-z]+[jx-z]nen\b/gmi,
   /\b[a-z]+[bdfhklpsvx-z]ner\b/gmi,
   /\b[a-z]+[hx-z]ney\b/gmi,
   /\b[a-z]+[ox-z]nge\b/gmi,
   /\b[a-z]+[aeio]ngo\b/gmi,
   /\b[a-z]+[eir-z]nha\b/gmi,
   /\b[a-z]+[bdfh-lsz]nia\b/gmi,
   /\b[a-z]+vnic\b/gmi,
   /\b[a-z]+[a-df-z]nim\b/gmi,
   /\b[a-z]+[eo]nio\b/gmi,
   /\b[a-z]+[aox-z]non\b/gmi,
   /\b[a-z]+nnos\b/gmi,
   /\b[a-z]+[a-hjlmopsu-z]not\b/gmi,
   /\b[a-z]+[a-jlmo-rt-z]now\b/gmi,
   /\b[a-z]+[au-z]nth\b/gmi,
   /\b[a-z]+[a-hj-np-tv-z]nto\b/gmi,
   /\b[a-z]+[eiu-z]nza\b/gmi,
   /\b[a-z]+[bx-z]oam\b/gmi,
   /\b[a-z]+[a-gi-km-qs-z]obe\b/gmi,
   /\b[a-z]+[bou-z]ock\b/gmi,
   /\b[a-z]+[ak]ode\b/gmi,
   /\b[a-z]+[cmxy]oed\b/gmi,
   /\b[a-z]+[hrtx-z]oft\b/gmi,
   /\b[a-z]+[aghn]oil\b/gmi,
   /\b[a-z]+[ax-z]oin\b/gmi,
   /\b[a-z]+[a-gi-mo-ruw-z]oir\b/gmi,
   /\b[a-z]+[csx-z]ois\b/gmi,
   /\b[a-z]+[noxz]oke\b/gmi,
   /\b[a-z]+noky\b/gmi,
   /\b[a-z]+[aeghlmopsu-z]ola\b/gmi,
   /\b[a-z]+vold\b/gmi,
   /\b[a-z]+[cgm]ole\b/gmi,
   /\b[a-z]+dolf\b/gmi,
   /\b[a-z]+[gjp-sux-z]oli\b/gmi,
   /\b[a-z]+[hx-z]olt\b/gmi,
   /\b[a-z]+goly\b/gmi,
   /\b[a-z]+[bgux-z]oma\b/gmi,
   /\b[a-z]+[egkox-z]ome\b/gmi,
   /\b[a-z]+[a-pt-z]ona\b/gmi,
   /\b[a-z]+kond\b/gmi,
   /\b[a-z]+[a-km-qtu-z]ong\b/gmi,
   /\b[a-z]+[mnv-z]ont\b/gmi,
   /\b[a-z]+[v-z]ony\b/gmi,
   /\b[a-z]+[wx-z]ood\b/gmi,
   /\b[a-z]+[lx-z]oof\b/gmi,
   /\b[a-z]+nook\b/gmi,
   /\b[a-z]+[kpx-z]ool\b/gmi,
   /\b[a-z]+[bxy]oom\b/gmi,
   /\b[a-z]+[bgjkx-z]oon\b/gmi,
   /\b[a-z]+[a-ce-km-z]oor\b/gmi,
   /\b[a-z]+[lx-z]oot\b/gmi,
   /\b[a-z]+[gox-z]opa\b/gmi,
   /\b[a-z]+[gx-z]ope\b/gmi,
   /\b[a-z]+[fi-kos-uwyz]ora\b/gmi,
   /\b[a-z]+[bfjox-z]ord\b/gmi,
   /\b[a-z]+[aegijkoquyz]ore\b/gmi,
   /\b[a-z]+[jkopsvx-z]orn\b/gmi,
   /\b[a-z]+[fox-z]ort\b/gmi,
   /\b[a-z]+[w-z]ose\b/gmi,
   /\b[a-z]+[ac-kn-qsu-z]oss\b/gmi,
   /\b[a-z]+[cgkx-z]ote\b/gmi,
   /\b[a-z]+[j]oth\b/gmi,
   /\b[a-z]+[bmkx-z]oto\b/gmi,
   /\b[a-z]+[a-km-os-z]oud\b/gmi,
   /\b[a-z]+[a-egi-pr-z]oul\b/gmi,
   /\b[a-z]+[jx-z]our\b/gmi,
   /\b[a-z]+mout\b/gmi,
   /\b[a-z]+[giknpsyz]ove\b/gmi,
   /\b[a-z]+[tx-z]own\b/gmi,
   /\b[a-z]+[a-dfgjln-su-xz]pad\b/gmi,
   /\b[a-z]+[jnt]pal\b/gmi,
   /\b[a-z]+[ipx-z]pan\b/gmi,
   /\b[a-z]+[eg-noprsu]pat\b/gmi,
   /\b[a-z]+[ex-z]pha\b/gmi,
   /\b[a-z]+[ox-z]pie\b/gmi,
   /\b[a-z]+[mpx-z]pil\b/gmi,
   /\b[a-z]+ipli\b/gmi,
   /\b[a-z]+[ex-z]ppe\b/gmi,
   /\b[a-z]+[io]ppo\b/gmi,
   /\b[a-z]+[ho]rab\b/gmi,
   /\b[a-z]+[a-deiru-z]ram\b/gmi,
   /\b[a-z]+[adh-kmw-z]ran\b/gmi,
   /\b[a-z]+[drx-z]ras\b/gmi,
   /\b[a-z]+[a-su-z]rac\b/gmi,
   /\b[a-z]+[agmux-z]rat\b/gmi,
   /\b[a-z]+[ai]rcy\b/gmi,
   /\b[a-z]+[astx-z]ree\b/gmi,
   /\b[a-z]+[ad-ioruz]reg\b/gmi,
   /\b[a-z]+uren\b/gmi,
   /\b[a-z]+[aeiou]req\b/gmi,
   /\b[a-z]+arew\b/gmi,
   /\b[a-z]+[b-df-np-tw-z]rge\b/gmi,
   /\b[a-z]+[hx-z]ria\b/gmi,
   /\b[a-z]+[cfjkmnqsv-xz]ric\b/gmi,
   /\b[a-z]+[eiz]rim\b/gmi,
   /\b[a-z]+[jx-z]rin\b/gmi,
   /\b[a-z]+[cdf-pstv-z]rio\b/gmi,
   /\b[a-z]+[akx-z]ris\b/gmi,
   /\b[a-z]+[dghlsx-z]rit\b/gmi,
   /\b[a-z]+[ax-z]rma\b/gmi,
   /\b[a-z]+[ao]rno\b/gmi,
   /\b[a-z]+urny\b/gmi,
   /\b[a-z]+orof\b/gmi,
   /\b[a-z]+trog\b/gmi,
   /\b[a-z]+[anx-z]ron\b/gmi,
   /\b[a-z]+[b]row\b/gmi,
   /\b[a-z]+[eu]rre\b/gmi,
   /\b[a-z]+arso\b/gmi,
   /\b[a-z]+[aex-z]rto\b/gmi,
   /\b[a-z]+urty\b/gmi,
   /\b[a-z]+[agox-z]run\b/gmi,
   /\b[a-z]+[dt]rup\b/gmi,
   /\b[a-z]+[hx-z]rus\b/gmi,
   /\b[a-z]+nsae\b/gmi,
   /\b[a-z]+ssam\b/gmi,
   /\b[a-z]+[aorsx-z]san\b/gmi,
   /\b[a-z]+[nsx-z]sar\b/gmi,
   /\b[a-z]+[as]sat\b/gmi,
   /\b[a-z]+isay\b/gmi,
   /\b[a-z]+[ds-ux-z]sen\b/gmi,
   /\b[a-z]+[sx-z]sey\b/gmi,
   /\b[a-z]+ssia\b/gmi,
   /\b[a-z]+rsic\b/gmi,
   /\b[a-z]+[ax-z]sie\b/gmi,
   /\b[a-z]+[sxy]sim\b/gmi,
   /\b[a-z]+[t]sin\b/gmi,
   /\b[a-z]+[t]sis\b/gmi,
   /\b[a-z]+[a-cf-hj-mq-su-xz]sit\b/gmi,
   /\b[a-z]+[rt]sma\b/gmi,
   /\b[a-z]+[bcf-hj-lnsuwx-z]son\b/gmi,
   /\b[a-z]+[aex-z]sor\b/gmi,
   /\b[a-z]+[aceikntu]sos\b/gmi,
   /\b[a-z]+[y]sse\b/gmi,
   /\b[a-z]+[u]sso\b/gmi,
   /\b[a-z]+[en]ssy\b/gmi,
   /\b[a-z]+rste\b/gmi,
   /\b[a-z]+[eu]sti\b/gmi,
   /\b[a-z]+[aeiou]sul\b/gmi,
   /\b[a-z]+gsun\b/gmi,
   /\b[a-z]+ttam\b/gmi,
   /\b[a-z]+[s-z]tan\b/gmi,
   /\b[a-z]+[aehu-z]tar\b/gmi,
   /\b[a-z]+dter\b/gmi,
   /\b[a-z]+[eiy]the\b/gmi,
   /\b[a-z]+athk\b/gmi,
   /\b[a-z]+[oux-z]tie\b/gmi,
   /\b[a-z]+ttil\b/gmi,
   /\b[a-z]+[su]tin\b/gmi,
   /\b[a-z]+[au]tle\b/gmi,
   /\b[a-z]+[cdf-hl-np-rw-z]ton\b/gmi,
   /\b[a-z]+stow\b/gmi,
   /\b[a-z]+atsu\b/gmi,
   /\b[a-z]+[aou]tte\b/gmi,
   /\b[a-z]+[aeiou]tve\b/gmi,
   /\b[a-z]+buce\b/gmi,
   /\b[a-z]+[delw]uch\b/gmi,
   /\b[a-z]+auck\b/gmi,
   /\b[a-z]+kude\b/gmi,
   /\b[a-z]+[abdf-mo-su-z]udo\b/gmi,
   /\b[a-z]+[hk]udy\b/gmi,
   /\b[a-z]+[ae]uer\b/gmi,
   /\b[a-z]+auff\b/gmi,
   /\b[a-z]+[dlrx-z]uge\b/gmi,
   /\b[a-z]+[aehrx-z]ugh\b/gmi,
   /\b[a-z]+ouic\b/gmi,
   /\b[a-z]+ruie\b/gmi,
   /\b[a-z]+[a-pr-z]uim\b/gmi,
   /\b[a-z]+[x-z]uin\b/gmi,
   /\b[a-z]+[abefi-pt-z]uit\b/gmi,
   /\b[a-z]+[msx-z]uke\b/gmi,
   /\b[a-z]+[dhnors]uky\b/gmi,
   /\b[a-z]+[a-dhj-lorvx-z]ula\b/gmi,
   /\b[a-z]+[ax-z]uld\b/gmi,
   /\b[a-z]+[bgh]ule\b/gmi,
   /\b[a-z]+aull\b/gmi,
   /\b[a-z]+[ahorst]umy\b/gmi,
   /\b[a-z]+[b-km-sx-z]una\b/gmi,
   /\b[a-z]+[adeg-np-sv-z]und\b/gmi,
   /\b[a-z]+[ahlx-z]une\b/gmi,
   /\b[a-z]+[ahjsx-z]ung\b/gmi,
   /\b[a-z]+ounk\b/gmi,
   /\b[a-z]+[gqr]uoy\b/gmi,
   /\b[a-z]+[abdeijl-oqsu-z]urd\b/gmi,
   /\b[a-z]+[a-kn-tx-z]urk\b/gmi,
   /\b[a-z]+wurm\b/gmi,
   /\b[a-z]+[beo]urn\b/gmi,
   /\b[a-z]+[bhikpyz]ury\b/gmi,
   /\b[a-z]+[lmrx-z]usa\b/gmi,
   /\b[a-z]+nush\b/gmi,
   /\b[a-z]+euss\b/gmi,
   /\b[a-z]+[ikz]ute\b/gmi,
   /\b[a-z]+[a-df-hiklnpstv-z]uth\b/gmi,
   /\b[a-z]+[eg]uve\b/gmi,
   /\b[a-z]+[aglrx-z]van\b/gmi,
   /\b[a-z]+[aeiku-z]var\b/gmi,
   /\b[a-z]+nver\b/gmi,
   /\b[a-z]+[a-df-hjkmnpqstvy]vet\b/gmi,
   /\b[a-z]+[b-hj-np-tv-z]via\b/gmi,
   /\b[a-z]+[a-np-su-z]vie\b/gmi,
   /\b[a-z]+[a-cf-npqsu-z]war\b/gmi,
   /\b[a-z]+[a-df-np-z]wel\b/gmi,
   /\b[a-z]+[al]win\b/gmi,
   /\b[a-z]+[a-cf-lo-su-z]wit\b/gmi,
   /\b[a-z]+[gkx-z]won\b/gmi,
   /\b[a-z]+[aeiux-z]wse\b/gmi,
   /\b[a-z]+[bdf-i]yal\b/gmi,
   /\b[a-z]+[a-z]yam\b/gmi,
   /\b[a-z]+[b-gi-z]yde\b/gmi,
   /\b[a-z]+gyer\b/gmi,
   /\b[a-z]+[a-z]yet\b/gmi,
   /\b[a-z]+[n-rx-z]yle\b/gmi,
   /\b[a-z]+[a-cfijmnp-ru-z]yne\b/gmi,
   /\b[a-z]+[b-hj-np-z]zen\b/gmi,
   /\b[a-z]+nzle\b/gmi,
   /\b[a-z]+cz[a-z]+\b/gmi,
   /\b[a-z]+rz[a-z]+\b/gmi,
   /\b[a-z]+tz[a-z]+\b/gmi,

   /\b[a-z]+a[ajq][a-z]\b/gmi,
   /\b[a-z]+a[oy][a-rt-z]\b/gmi,
   /\b[a-z]+ab[a-prt-wyz]\b/gmi,
   /\b[a-z]+ac[abdfgijl-oqru-xz]\b/gmi,
   /\b[a-z]+ad[acdf-np-rtu-xz]\b/gmi,
   /\b[a-z]+ae[a-ce-z]\b/gmi,
   /\b[a-z]+af[a-dg-pru-xz]\b/gmi,
   /\b[a-z]+ag[a-df-prt-xz]\b/gmi,
   /\b[a-z]+ah[b-prt-z]\b/gmi,
   /\b[a-z]+ai[abef-ko-qsu-z]\b/gmi,
   /\b[a-z]+ak[a-df-prt-xz]\b/gmi,
   /\b[a-z]+al[a-cg-jnqu-xz]\b/gmi,
   /\b[a-z]+am[cdf-hj-mqru-xz]\b/gmi,
   /\b[a-z]+an[a-cfhijl-ru-xz]\b/gmi,
   /\b[a-z]+ap[a-dfgi-ru-xz]\b/gmi,
   /\b[a-z]+ar[acg-joqru-xz]\b/gmi,
   /\b[a-z]+as[a-dfgijloqru-xz]\b/gmi,
   /\b[a-z]+at[a-dfgi-prt-xz]\b/gmi,
   /\b[a-z]+au[a-km-qu-z]\b/gmi,
   /\b[a-z]+av[b-df-npr-xz]\b/gmi,
   /\b[a-z]+aw[a-jmo-qrt-z]\b/gmi,
   /\b[a-z]+ax[aehilotuwx]\b/gmi,
   /\b[a-z]+az[a-df-pr-xz]\b/gmi,

   /\b[a-z]+ba[a-dfh-kmo-qtu-z]\b/gmi,
   /\b[a-z]+bb[ac-pr-w]\b/gmi,
   /\b[a-z]+bc[ac-pr-z]\b/gmi,
   /\b[a-z]+bd[ac-pr-z]\b/gmi,
   /\b[a-z]+be[a-cfg-km-qu-xz]\b/gmi,
   /\b[a-z]+b[cdfhjkpsw-z][a-z]\b/gmi,
   /\b[a-z]+bi[bf-mo-ru-z]\b/gmi,
   /\b[a-z]+bl[a-df-xz]\b/gmi,
   /\b[a-z]+bm[a-vx-z]\b/gmi,
   /\b[a-z]+bn[ac-eh-jl-pr-z]\b/gmi,
   /\b[a-z]+bo[a-mpuvz]\b/gmi,
   /\b[a-z]+bq[aeilou]\b/gmi,
   /\b[a-z]+br[b-df-pr-z]\b/gmi,
   /\b[a-z]+bt[a-pr-z]\b/gmi,
   /\b[a-z]+bu[acfh-mo-rt-xz]\b/gmi,
   /\b[a-z]+bv[ae-prtu]\b/gmi,

   /\b[a-z]+ca[acdg-koquvz]\b/gmi,
   /\b[a-z]+cb[aeio]\b/gmi,
   /\b[a-z]+cc[aehikosuy]\b/gmi,
   /\b[a-z]+cd[ad-os-uy]\b/gmi,
   /\b[a-z]+ce[bcf-kmoqu-xz]\b/gmi,
   /\b[a-z]+cf[a-km-z]\b/gmi,
   /\b[a-z]+ch[b-dg-rt-xz]\b/gmi,
   /\b[a-z]+ci[bf-kqru-z]\b/gmi,
   /\b[a-z]+cj[aeinouy]\b/gmi,
   /\b[a-z]+ck[a-ot-xz]\b/gmi,
   /\b[a-z]+cl[b-df-np-xz]\b/gmi,
   /\b[a-z]+cm[a-ik-os-uy]\b/gmi,
   /\b[a-z]+cn[a-dfh-z]\b/gmi,
   /\b[a-z]+co[cfhi-ko-qu-xz]\b/gmi,
   /\b[a-z]+cp[abd-ik-rt-z]\b/gmi,
   /\b[a-z]+cqu\b/gmi,
   /\b[a-z]+cr[bdf-np-xz]\b/gmi,
   /\b[a-z]+cs[aceiouy]\b/gmi,
   /\b[a-z]+ct[b-ej-rt-z]\b/gmi,
   /\b[a-z]+cu[a-df-knoqu-z]\b/gmi,
   /\b[a-z]+cv[acs]\b/gmi,
   /\b[a-z]+cw[adeik-or-uy]\b/gmi,
   /\b[a-z]+cxi\b/gmi,
   /\b[a-z]+cy[a-km-wyz]\b/gmi,

   /\b[a-z]+da[a-cf-km-qt-xz]\b/gmi,
   /\b[a-z]+d[bfjkmqvwxz][a-z]\b/gmi,
   /\b[a-z]+dc[a-mo-z]\b/gmi,
   /\b[a-z]+dd[ace-z]\b/gmi,
   /\b[a-z]+de[a-cf-koqt-vyz]\b/gmi,
   /\b[a-z]+dg[a-df-xz]\b/gmi,
   /\b[a-z]+dh[a-km-z]\b/gmi,
   /\b[a-z]+di[be-kmp-ru-wyz]\b/gmi,
   /\b[a-z]+dl[a-df-hj-rt-xz]\b/gmi,
   /\b[a-z]+dn[a-ru-z]\b/gmi,
   /\b[a-z]+do[abd-fh-ko-quvyz]\b/gmi,
   /\b[a-z]+dp[a-qs-z]\b/gmi,
   /\b[a-z]+dr[a-xz]\b/gmi,
   /\b[a-z]+ds[a-su-xz]\b/gmi,
   /\b[a-z]+dt[a-fh-z]\b/gmi,
   /\b[a-z]+du[acdf-lnoqrt-z]\b/gmi,
   /\b[a-z]+dy[a-df-km-z]\b/gmi,

   /\b[a-z]+ea[a-cgijoqu-z]\b/gmi,
   /\b[a-z]+eb[b-ru-xz]\b/gmi,
   /\b[a-z]+ec[bcfgijl-ru-xz]\b/gmi,
   /\b[a-z]+ed[a-df-kmnp-rt-xz]\b/gmi,
   /\b[a-z]+ee[a-cf-jmoqu-z]\b/gmi,
   /\b[a-z]+ef[a-eg-ru-xz]\b/gmi,
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
   /\b[a-z]+es[a-cfgijl-ru-xz]\b/gmi,
   /\b[a-z]+et[b-dfgj-np-rt-xz]\b/gmi,
   /\b[a-z]+eu[a-ce-lnoqt-z]\b/gmi,
   /\b[a-z]+e[vz][a-df-xz]\b/gmi,
   /\b[a-z]+ew[a-mo-ru-xz]\b/gmi,
   /\b[a-z]+ex[a-df-hj-su-xz]\b/gmi,
   /\b[a-z]+ey[a-df-rt-z]\b/gmi,

   /\b[a-z]+fa[a-mo-qu-wyz]\b/gmi,
   /\b[a-z]+fb[ay]\b/gmi,
   /\b[a-z]+fc[ahijy]\b/gmi,
   /\b[a-z]+fd[ac-z]\b/gmi,
   /\b[a-z]+fe[a-cf-mo-qt-vxz]\b/gmi,
   /\b[a-z]+ff[a-eg-rt-xz]\b/gmi,
   /\b[a-z]+fg[ehio]\b/gmi,
   /\b[a-z]+fh[aei]\b/gmi,
   /\b[a-z]+fi[e-kqru-wyz]\b/gmi,
   /\b[a-z]+fj[aeu]\b/gmi,
   /\b[a-z]+fk[aeiouy]\b/gmi,
   /\b[a-z]+fl[a-df-tv-xz]\b/gmi,
   /\b[a-z]+fma\b/gmi,
   /\b[a-z]+fn[aeiouy]\b/gmi,
   /\b[a-z]+fo[a-fh-lo-qt-z]\b/gmi,
   /\b[a-z]+fp[a-nr-z]\b/gmi,
   /\b[a-z]+fq[aiy]\b/gmi,
   /\b[a-z]+fr[adeikouy]\b/gmi,
   /\b[a-z]+fs[aeiotuz]\b/gmi,
   /\b[a-z]+ft[aeilouz]\b/gmi,
   /\b[a-z]+fu[a-km-qt-z]\b/gmi,
   /\b[a-z]+fv[adeior]\b/gmi,
   /\b[a-z]+fw[aegir]\b/gmi,
   /\b[a-z]+fy[adelmnrsu]\b/gmi,
   /\b[a-z]+fz[aeiou]\b/gmi,

   /\b[a-z]+ga[a-df-koqu-xz]\b/gmi,
   /\b[a-z]+gb[a-xz]\b/gmi,
   /\b[a-z]+g[cfjkpqvwxz][a-z]\b/gmi,
   /\b[a-z]+gd[ac-z]\b/gmi,
   /\b[a-z]+ge[bcf-kpqu-xz]\b/gmi,
   /\b[a-z]+gg[a-fh-uz]\b/gmi,
   /\b[a-z]+gh[a-ru-xz]\b/gmi,
   /\b[a-z]+gi[bd-fhi-kmoru-xz]\b/gmi,
   /\b[a-z]+gl[a-df-np-xz]\b/gmi,
   /\b[a-z]+gm[aehiortux]\b/gmi,
   /\b[a-z]+gn[a-df-rt-xz]\b/gmi,
   /\b[a-z]+go[a-mo-qu-z]\b/gmi,
   /\b[a-z]+gr[a-df-rt-xz]\b/gmi,
   /\b[a-z]+gs[a-su-xz]\b/gmi,
   /\b[a-z]+gt[a-gi-z]\b/gmi,
   /\b[a-z]+gu[a-df-lo-ru-xz]\b/gmi,
   /\b[a-z]+gy[a-rt-z]\b/gmi,

   /\b[a-z]+ha[a-km-ru-z]\b/gmi,
   /\b[a-z]+h[bfjknpqv-xz][a-z]\b/gmi,
   /\b[a-z]+hc[a-qs-z]\b/gmi,
   /\b[a-z]+hd[ac-z]\b/gmi,
   /\b[a-z]+he[bcef-kmo-quvx-z]\b/gmi,
   /\b[a-z]+hg[a-prt-uwy]\b/gmi,
   /\b[a-z]+hh[a-gi-ou-z]\b/gmi,
   /\b[a-z]+hi[abef-loqru-z]\b/gmi,
   /\b[a-z]+hl[a-xz]\b/gmi,
   /\b[a-z]+hm[a-rt-wyz]\b/gmi,
   /\b[a-z]+ho[a-cfh-koquvx-z]\b/gmi,
   /\b[a-z]+hr[abd-pr-z]\b/gmi,
   /\b[a-z]+hs[a-uw-z]\b/gmi,
   /\b[a-z]+ht[a-gi-rt-xz]\b/gmi,
   /\b[a-z]+hu[a-oqru-z]\b/gmi,
   /\b[a-z]+hy[a-kn-z]\b/gmi,

   /\b[a-z]+ia[abf-kmo-qu-z]\b/gmi,
   /\b[a-z]+ib[a-df-mo-rt-z]\b/gmi,
   /\b[a-z]+ic[g-jl-ru-xz]\b/gmi,
   /\b[a-z]+id[cdf-np-rt-xz]\b/gmi,
   /\b[a-z]+ie[a-ceg-kno-qvyz]\b/gmi,
   /\b[a-z]+if[a-dg-ru-xz]\b/gmi,
   /\b[a-z]+ig[b-dfgij-lp-rt-z]\b/gmi,
   /\b[a-z]+i[h-jqxy][a-z]\b/gmi,
   /\b[a-z]+ik[a-df-rt-xz]\b/gmi,
   /\b[a-z]+il[bcg-jpu-xz]\b/gmi,
   /\b[a-z]+im[cdfh-nqrt-xz]\b/gmi,
   /\b[a-z]+in[fhim-ru-wz]\b/gmi,
   /\b[a-z]+io[a-ce-ko-qu-z]\b/gmi,
   /\b[a-z]+ip[a-df-hk-ru-xz]\b/gmi,
   /\b[a-z]+ir[a-cf-jqnou-xz]\b/gmi,
   /\b[a-z]+is[bdfgijloqrv-xz]\b/gmi,
   /\b[a-z]+it[acdgijlprt-xz]\b/gmi,
   /\b[a-z]+iu[a-ln-z]\b/gmi,
   /\b[a-z]+iv[a-df-ln-prt-xz]\b/gmi,
   /\b[a-z]+iw[a-uy]\b/gmi,
   /\b[a-z]+iz[a-df-y]\b/gmi,

   /\b[a-z]+j[a-ce-ik-ps-vxy][a-z]\b/gmi,
   /\b[a-z]+jd[ac-z]\b/gmi,
   /\b[a-z]+j[jz][adeiouy]\b/gmi,
   /\b[a-z]+j[rw][aeiou]\b/gmi,

   /\b[a-z]+ka[a-z]\b/gmi,
   /\b[a-z]+k[bcfghjmprtv-z][a-z]\b/gmi,
   /\b[a-z]+kd[ac-z]\b/gmi,
   /\b[a-z]+ke[a-ce-kmo-quvxz]\b/gmi,
   /\b[a-z]+ki[a-cfh-mqrsu-z]\b/gmi,
   /\b[a-z]+kk[a-jl-prt-z]\b/gmi,
   /\b[a-z]+kl[a-df-pr-xz]\b/gmi,
   /\b[a-z]+kn[a-np-z]\b/gmi,
   /\b[a-z]+ko[a-mo-z]\b/gmi,
   /\b[a-z]+kq[ai]\b/gmi,
   /\b[a-z]+ks[a-xz]\b/gmi,
   /\b[a-z]+ku[a-oq-z]\b/gmi,

   /\b[a-z]+la[afh-loquvz]\b/gmi,
   /\b[a-z]+l[dkm][ac-prt-xz]\b/gmi,
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
   /\b[a-z]+lp[a-km-rt-wz]\b/gmi,
   /\b[a-z]+lr[a-xz]\b/gmi,
   /\b[a-z]+ls[a-df-su-z]\b/gmi,
   /\b[a-z]+lt[a-gi-rt-xz]\b/gmi,
   /\b[a-z]+lu[acdfh-ln-rt-wyz]\b/gmi,
   /\b[a-z]+lv[a-df-z]\b/gmi,
   /\b[a-z]+ly[a-km-rt-wyz]\b/gmi,

   /\b[a-z]+ma[a-kmoqru-wyz]\b/gmi,
   /\b[a-z]+m[bn][a-rt-z]\b/gmi,
   /\b[a-z]+mc[b-z]\b/gmi,
   /\b[a-z]+m[fgjrsvwz][ac-pr-z]\b/gmi,
   /\b[a-z]+m[dq][ac-prt-z]\b/gmi,
   /\b[a-z]+me[a-ce-kmo-qu-z]\b/gmi,
   /\b[a-z]+mh[a-ik-pru]\b/gmi,
   /\b[a-z]+mi[bf-kmo-ru-xz]\b/gmi,
   /\b[a-z]+mk[abd-pr-y]\b/gmi,
   /\b[a-z]+ml[b-pr-xz]\b/gmi,
   /\b[a-z]+mm[b-df-ln-prsu]\b/gmi,
   /\b[a-z]+mo[ac-lot-wyz]\b/gmi,
   /\b[a-z]+mp[a-gj-oru-xz]\b/gmi,
   /\b[a-z]+mt[a-pr-uz]\b/gmi,
   /\b[a-z]+mu[a-ln-rt-z]\b/gmi,
   /\b[a-z]+my[a-km-pr-z]\b/gmi,

   /\b[a-z]+na[a-df-km-oquvx-z]\b/gmi,
   /\b[a-z]+n[fmpqwx][ac-pr-z]\b/gmi,
   /\b[a-z]+nb[abd-fh-pr-z]\b/gmi,
   /\b[a-z]+nc[a-dfgi-kmnpqru-xz]\b/gmi,
   /\b[a-z]+nd[cdf-nprt-xz]\b/gmi,
   /\b[a-z]+ne[bcf-kmpquvz]\b/gmi,
   /\b[a-z]+ng[a-df-nprt-xz]\b/gmi,
   /\b[a-z]+nh[eimnoprtuy]\b/gmi,
   /\b[a-z]+ni[e-kqruvwyz]\b/gmi,
   /\b[a-z]+nj[a-fh-prt-vy]\b/gmi,
   /\b[a-z]+nk[a-prt-xz]\b/gmi,
   /\b[a-z]+nl[a-pr-xz]\b/gmi,
   /\b[a-z]+nn[a-fh-moprt-xz]\b/gmi,
   /\b[a-z]+no[cf-ko-quvz]\b/gmi,
   /\b[a-z]+nr[a-df-prs-xz]\b/gmi,
   /\b[a-z]+ns[a-df-prsuvxz]\b/gmi,
   /\b[a-z]+nt[a-gi-nprt-xz]\b/gmi,
   /\b[a-z]+nu[a-df-knoqru-z]\b/gmi,
   /\b[a-z]+nv[adehil-or-uy]\b/gmi,
   /\b[a-z]+ny[abd-kn-pr-z]\b/gmi,
   /\b[a-z]+nz[b-pr-z]\b/gmi,

   /\b[a-z]+oa[a-cg-joqsu-z]\b/gmi,
   /\b[a-z]+ob[a-df-km-rt-z]\b/gmi,
   /\b[a-z]+oc[abd-jl-ru-z]\b/gmi,
   /\b[a-z]+od[acdf-rt-xz]\b/gmi,
   /\b[a-z]+oe[bce-qs-xz]\b/gmi,
   /\b[a-z]+of[a-ru-xz]\b/gmi,
   /\b[a-z]+o[gx][ac-rt-xz]\b/gmi,
   /\b[a-z]+o[hy][a-rt-z]\b/gmi,
   /\b[a-z]+oi[be-kmo-qu-z]\b/gmi,
   /\b[a-z]+o[jq][a-z]\b/gmi,
   /\b[a-z]+ok[a-df-rt-xz]\b/gmi,
   /\b[a-z]+ol[bcghjm-ru-xz]\b/gmi,
   /\b[a-z]+om[cf-noqrt-xz]\b/gmi,
   /\b[a-z]+on[bcfhijl-ru-xz]\b/gmi,
   /\b[a-z]+oo[a-ceg-joqu-z]\b/gmi,
   /\b[a-z]+op[b-df-rt-xz]\b/gmi,
   /\b[a-z]+or[cf-jlo-ru-wz]\b/gmi,
   /\b[a-z]+os[a-dfgi-ln-ru-xz]\b/gmi,
   /\b[a-z]+ot[a-dfgi-np-rt-xz]\b/gmi,
   /\b[a-z]+ou[a-ce-km-oqu-z]\b/gmi,
   /\b[a-z]+ow[a-kmo-rt-xz]\b/gmi,
   /\b[a-z]+o[vz][a-df-xz]\b/gmi,

   /\b[a-z]+pa[a-cfgi-ko-quvz]\b/gmi,
   /\b[a-z]+pb[aeiy]\b/gmi,
   /\b[a-z]+pc[aehiou]\b/gmi,
   /\b[a-z]+pd[aehio]\b/gmi,
   /\b[a-z]+pe[bcfh-kopuvz]\b/gmi,
   /\b[a-z]+pf[aefhilotu]\b/gmi,
   /\b[a-z]+pg[aeiou]\b/gmi,
   /\b[a-z]+ph[aeiortuy]\b/gmi,
   /\b[a-z]+pi[bf-ko-ru-wyz]\b/gmi,
   /\b[a-z]+p[jq]i\b/gmi,
   /\b[a-z]+pk[aeiouy]\b/gmi,
   /\b[a-z]+pl[abf-hk-xz]\b/gmi,
   /\b[a-z]+pm[a-gi-prsu-z]\b/gmi,
   /\b[a-z]+pn[ac-prt-z]\b/gmi,
   /\b[a-z]+po[a-ce-lqru-wyz]\b/gmi,
   /\b[a-z]+pp[a-dfh-nr-uw]\b/gmi,
   /\b[a-z]+pr[a-df-np-suvwz]\b/gmi,
   /\b[a-z]+ps[a-df-np-xz]\b/gmi,
   /\b[a-z]+pt[a-ce-gj-np-rtv-xz]\b/gmi,
   /\b[a-z]+pu[a-ce-moqru-z]\b/gmi,
   /\b[a-z]+pw[aeilost]\b/gmi,
   /\b[a-z]+p[vx]a\b/gmi,
   /\b[a-z]+py[a-kn-qt-z]\b/gmi,
   /\b[a-z]+pz[ae]\b/gmi,

   /\b[a-z]+qa[abdh-jlmnqr-uyz]\b/gmi,
   /\b[a-z]+q[cdfj]a\b/gmi,
   /\b[a-z]+qe[abd-fhilmnr-tyz]\b/gmi,
   /\b[a-z]+qi[abd-fhil-ortuy]\b/gmi,
   /\b[a-z]+qk[aoy]\b/gmi,
   /\b[a-z]+q[bhl-nqwvyz][aeiou]\b/gmi,
   /\b[a-z]+qo[a-enstwv]\b/gmi,
   /\b[a-z]+qr[akiou]\b/gmi,
   /\b[a-z]+qs[ahiy]\b/gmi,
   /\b[a-z]+qu[abik-or-tyz]\b/gmi,

   /\b[a-z]+ra[adfh-koqruvz]\b/gmi,
   /\b[a-z]+r[bdfk][ac-prt-xz]\b/gmi,
   /\b[a-z]+rc[a-dfgi-xz]\b/gmi,
   /\b[a-z]+re[bcfh-kouvz]\b/gmi,
   /\b[a-z]+rg[abdf-nprt-wz]\b/gmi,
   /\b[a-z]+rh[a-rt-z]\b/gmi,
   /\b[a-z]+ri[be-kqru-wy]\b/gmi,
   /\b[a-z]+r[jqwx][a-z]\b/gmi,
   /\b[a-z]+rl[a-ce-rt-xz]\b/gmi,
   /\b[a-z]+rm[b-rt-xz]\b/gmi,
   /\b[a-z]+rn[a-ef-np-ru-xz]\b/gmi,
   /\b[a-z]+ro[acdhi-kmquvz]\b/gmi,
   /\b[a-z]+rp[a-gj-ru-xz]\b/gmi,
   /\b[a-z]+rr[a-dfgi-qs-wz]\b/gmi,
   /\b[a-z]+rs[a-dk-mprsu-wz]\b/gmi,
   /\b[a-z]+rt[a-gi-mp-rt-wz]\b/gmi,
   /\b[a-z]+ru[a-dfh-loqrt-z]\b/gmi,
   /\b[a-z]+rv[a-df-xz]\b/gmi,
   /\b[a-z]+ry[a-np-wyz]\b/gmi,

   /\b[a-z]+sa[a-df-ko-quvxz]\b/gmi,
   /\b[a-z]+s[fgjqrwz][a-z]\b/gmi,
   /\b[a-z]+sb[ac-lopr-z]\b/gmi,
   /\b[a-z]+sc[a-df-kmrt-z]\b/gmi,
   /\b[a-z]+sd[aiosyz]\b/gmi,
   /\b[a-z]+se[abf-kmo-qu-wz]\b/gmi,
   /\b[a-z]+sh[a-xz]\b/gmi,
   /\b[a-z]+si[bf-ko-ru-z]\b/gmi,
   /\b[a-z]+s[ky][a-rt-z]\b/gmi,
   /\b[a-z]+sl[a-df-su-xz]\b/gmi,
   /\b[a-z]+sm[b-rt-xz]\b/gmi,
   /\b[a-z]+sn[a-su-z]\b/gmi,
   /\b[a-z]+so[a-koqt-z]\b/gmi,
   /\b[a-z]+sp[a-rt-xz]\b/gmi,
   /\b[a-z]+ss[acdfhik-ntuz]\b/gmi,
   /\b[a-z]+st[a-df-hj-np-rt-xz]\b/gmi,
   /\b[a-z]+su[a-df-koqt-z]\b/gmi,
   /\b[a-z]+sv[a-oq-z]\b/gmi,
   /\b[a-z]+sx[a-ln-z]\b/gmi,

   /\b[a-z]+ta[acdfh-ko-qu-wz]\b/gmi,
   /\b[a-z]+t[bdfgjkqw-y][ac-pr-z]\b/gmi,
   /\b[a-z]+tc[a-gi-z]\b/gmi,
   /\b[a-z]+te[bcf-koqu-wz]\b/gmi,
   /\b[a-z]+th[a-df-jln-rt-xz]\b/gmi,
   /\b[a-z]+ti[bf-kqru-z]\b/gmi,
   /\b[a-z]+tl[a-df-xz]\b/gmi,
   /\b[a-z]+tm[a-rt-z]\b/gmi,
   /\b[a-z]+tn[a-cefh-rt-z]\b/gmi,
   /\b[a-z]+to[a-df-kotuvz]\b/gmi,
   /\b[a-z]+tp[ac-ps-z]\b/gmi,
   /\b[a-z]+tr[b-df-np-su-xz]\b/gmi,
   /\b[a-z]+ts[a-cefg-xz]\b/gmi,
   /\b[a-z]+tt[abdf-ln-ru-xz]\b/gmi,
   /\b[a-z]+tu[acf-lnoqt-z]\b/gmi,

   /\b[a-z]+ua[a-df-km-su-z]\b/gmi,
   /\b[a-z]+ub[a-df-ru-xz]\b/gmi,
   /\b[a-z]+uc[a-dfgijl-su-xz]\b/gmi,
   /\b[a-z]+ud[acdf-np-rt-xz]\b/gmi,
   /\b[a-z]+ue[a-cf-km-qu-xz]\b/gmi,
   /\b[a-z]+uf[a-eg-ru-z]\b/gmi,
   /\b[a-z]+ug[a-dfgi-qt-xz]\b/gmi,
   /\b[a-z]+uh[ac-fhil-pru-vy]\b/gmi,
   /\b[a-z]+ui[fh-lqrsu-y]\b/gmi,
   /\b[a-z]+u[jqwz][a-z]\b/gmi,
   /\b[a-z]+uk[a-df-xz]\b/gmi,
   /\b[a-z]+ul[cgh-jm-ru-xz]\b/gmi,
   /\b[a-z]+um[acdf-moqruvxz]\b/gmi,
   /\b[a-z]+un[bcfh-jl-ru-xz]\b/gmi,
   /\b[a-z]+uo[a-qt-xz]\b/gmi,
   /\b[a-z]+up[a-df-pu-w]\b/gmi,
   /\b[a-z]+ur[acg-jlqu-xz]\b/gmi,
   /\b[a-z]+us[bdfgijl-ru-xz]\b/gmi,
   /\b[a-z]+ut[a-dfgi-rt-xz]\b/gmi,
   /\b[a-z]+uu[a-ln-tv-z]\b/gmi,
   /\b[a-z]+uv[a-df-rt-xz]\b/gmi,
   /\b[a-z]+ux[aeiouy]\b/gmi,
   /\b[a-z]+uy[a-rt-z]\b/gmi,
   /\b[a-z]+va[a-df-kmo-qtu-wyz]\b/gmi,
   /\b[a-z]+v[b-df-hj-npqtw-z][ac-pr-z]\b/gmi,
   /\b[a-z]+ve[a-ce-ko-qu-wz]\b/gmi,
   /\b[a-z]+vi[cf-ko-rt-wyz]\b/gmi,
   /\b[a-z]+vo[a-quvxz]\b/gmi,
   /\b[a-z]+vr[a-df-z]\b/gmi,
   /\b[a-z]+vs[a-ce-z]\b/gmi,
   /\b[a-z]+vu[a-df-z]\b/gmi,
   /\b[a-z]+vv[a-uw-z]\b/gmi,
  
   /\b[a-z]+wa[a-qt-vz]\b/gmi,
   /\b[a-z]+w[bcf-hjmpqvx-z][ac-pr-z]\b/gmi,
   /\b[a-z]+w[dln][ac-rt-xz]\b/gmi,
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
   /\b[a-z]+x[b-df-hjkmnp-su-wz][ac-pr-z]\b/gmi,
   /\b[a-z]+xe[a-ce-ko-qu-xz]\b/gmi,
   /\b[a-z]+xi[fhi-kqru-wy]\b/gmi,
   /\b[a-z]+xl[a-df-xz]\b/gmi,
   /\b[a-z]+xo[b-lo-qt-z]\b/gmi,
   /\b[a-z]+xt[a-gi-xz]\b/gmi,
   /\b[a-z]+xy[a-wyz]\b/gmi,

   /\b[a-z]+ya[a-kn-rt-z]\b/gmi,
   /\b[a-z]+yb[a-df-xz]\b/gmi,
   /\b[a-z]+y[cf-kqu-x][a-z]\b/gmi,
   /\b[a-z]+yd[acdf-rt-z]\b/gmi,
   /\b[a-z]+ye[a-ce-qu-z]\b/gmi,
   /\b[a-z]+yl[a-df-rt-xz]\b/gmi,
   /\b[a-z]+ym[a-df-moq-rt-xz]\b/gmi,
   /\b[a-z]+yn[a-dfh-xz]\b/gmi,
   /\b[a-z]+yo[a-qt-z]\b/gmi,
   /\b[a-z]+yp[a-cf-z]\b/gmi,
   /\b[a-z]+yr[a-df-np-rt-z]\b/gmi,
   /\b[a-z]+ys[a-df-su-z]\b/gmi,
   /\b[a-z]+yt[a-df-z]\b/gmi,
   /\b[a-z]+yy[ac-pr-u]\b/gmi,
   /\b[a-z]+yz[a-km-z]\b/gmi,

   /\b[a-z]+za[a-rt-z]\b/gmi,
   /\b[a-z]+zd[ac-pr-z]\b/gmi,
   /\b[a-z]+ze[a-ce-mo-qt-z]\b/gmi,
   /\b[a-z]+zl[a-df-z]\b/gmi,
   /\b[a-z]+zo[b-rt-z]\b/gmi,
   /\b[a-z]+z[bcf-kmnp-y][a-z]\b/gmi,
   /\b[a-z]+zz[a-y]\b/gmi
];