const a: RegExp[] = [
  // BALL
  /\b[\d-]+\sball\s(?:close|down)\b/gi,
  /\bball\b(?=.{2,20}(?:SY10|shrops))/gi,
  /(?<=(?:SY10|shrops).{2,25})\bball\b/gi,
  /[\d-]+the\sball\b/gi,
  /\bthe\sball\b(?=.{2,10}(?:TA24))/gi,
  /\bred\sball\b(?=.{2,20}(?:EX16|devon))/gi,
  /(?<=(?:EX16|devon).{2,25})\bred\sball\b/gi,
  /(?<=EX34.{2,10})\bsnow\sball\b/gi,
  /\bsnow\sball\b(?=.{2,10}EX34)/gi,
  /\bwhite\sball\b(?=.{2,20}(?:TA21|taunton))/gi,
  /(?<=(?:TA21|taunton).{2,25})\bwhite\sball\b/gi,

  // BATH
  /\bbath\b(?=.{2,20}(?:BA2|city))/gi,
  /(?<=(?:BA2|city).{2,25})\bbath\b/gi,

  // CHAIR
  /(?<=IV28.{2,25})\bchair\b/gi,
  /\bchair\b(?=.{2,20}IV28)/gi,
  /(?<=(?:DG9|TR21|KW17|TR12).{2,10})\bthe\schair\b/gi,
  /\bthe\schair\b(?=.{2,10}(?:DG9|TR21|KW17|TR12))/gi,

  // FELL
  /[\d-]+\sfell\s(?:close|drive|end|foot|head|hill|road|side|view|walk|way|wood)\b/gmi,

  // FOOT
  /[\d-]+the\sfoot\b/gi,
  /(?<=(?:ZE2|KW17|DE6).{2,10})\bthe\sfoot\b/gi,
  /\bthe\sfoot\b(?=.{2,10}(?:ZE2|KW17|DE6))/gi,
  /\bway\sfoot\b(?=.{2,10}(?:NE64|YO22))/gi,
  /\bblack\sfoot\b(?=.{2,10}(?:AB56|island))/gi,
  /\bburn\sfoot\b(?=.{2,10}(?:DG9|KA26))/gi,
  /(?<=(?:LA12|park|windermere)).{2,25}\bfell\sfoot\b/gi,
  /\bfell\sfoot\b(?=.{2,20}(?:LA12|park|windermere))/gi,
  /\bgarden\sfoot\b(?=.{2,10}TD5)/gi,
  /[\d-]+hill\sfoot\b/gi,
  /(?<=(?:BD18|shipley).{2,10})\bhill\sfoot\b/gi,
  /\bhill\sfoot\b(?=.{2,10}(?:BD18|shipley))/gi,
  /[\d-]+paddock\sfoot\b/gi,
  /(?<=(?:HD1|hudder).{2,10})\bpaddock\sfoot\b/gi,
  /\bpaddock\sfoot\b(?=.{2,10}(?:HD1|hudder))/gi,
  /\bpool\sfoot\b(?=.{2,10}LA12)/gi,
  /[\d-]+rake\sfoot\b/gi,
  /(?<=(?:BB4|hasling|rossen).{2,10})\brake\sfoot\b/gi,
  /\brake\sfoot\b(?=.{2,10}(?:BB4|hasling|rossen))/gi,
  /\bred\sfoot\b(?=.{2,10}(?:AB56|island))/gi,
  /[\d-]+twelve\sfoot\sbank\b/gi,
  /(?<=(?:LN4|lincoln).{2,10})\btwelve\sfoot\sbank\b/gi,
  /\btwelve\sfoot\sbank\b(?=.{2,10}(?:LN4|lincoln))/gi,
  /[\d-]+twenty\sfoot\sbank\b/gi,
  /(?<=(?:LN4|lincoln).{2,10})\btwenty\sfoot\sbank\b/gi,
  /\btwenty\sfoot\sbank\b(?=.{2,10}(?:LN4|lincoln))/gi,
  /[\d-]+twenty\sfoot\sroad\b/gi,
  /(?<=(?:PE15|chain).{2,10})\btwenty\sfoot\sroad\b/gi,
  /\btwenty\sfoot\sroad\b(?=.{2,10}(?:PE15|chain))/gi,
  /[\d-]+ten\sfoot\sclose\b/gi,
  /(?<=(?:SK13|glossop).{2,10})\bten\sfoot\sclose\b/gi,
  /\bten\sfoot\sclose\b(?=.{2,10}(?:SK13|glossop))/gi,
  /\bten\sfoot\spond\b(?=.{2,10}TN22)/gi,
  /\bthree\sfoot\soak\b(?=.{2,10}LA12)/gi,
  /[\d-]+sixteen\sfoot\sbank\b/gi,
  /(?<=(?:PE1[45]|chain).{2,10})\bsixteen\sfoot\sbank\b/gi,
  /\bsixteen\sfoot\sbank\b(?=.{2,10}(?:PE1[45]|chain))/gi,
  /\bseven\sfoot\swood\b(?=.{2,10}(?:CV10|hartshill))/gi,

  // GARDEN
  /[\d-]+the\sgardens?\b/gi,
  /(?<=(?:N16|GL5|SN2)).{2,25}\bthe\sgarden\b/gi,
  /\bthe\sgarden\b(?=.{2,20}(?:N16|GL5|SN2))/gi,
  /(?<=(?:AB51|AL9|B23|B7[29]|BA1|BD16|BL[17]|BN4[12]|BR3|BS16|CB9|CM15|CM4|CV23|CV31|CV8|CW11|DE5|DH2|DL15|DL3|DN4|EH3[29]|EX22|GL50|GU10|GU24|HA[15]|HU[37]|HX1|IP3[01]|KA11|KT10|LA14|LA2|LE16|LL11|LL22|LS10|LS2[78]|MK18|NE25|NN16|NP16|NP2[56]|NP7|NR33|PE6|PO1[68]|PO[79]|RG8|RH12|RH20|SA9|SE22|SG16|SG[57]|SN1[14]|SN25|SN9|ST7|SY16|TQ13|TW14|WD17|YO14)).{2,25}\bthe\sgardens\b/gi,
  /\bthe\sgardens\b(?=.{2,20}(?:AB51|AL9|B23|B7[29]|BA1|BD16|BL[17]|BN4[12]|BR3|BS16|CB9|CM15|CM4|CV23|CV31|CV8|CW11|DE5|DH2|DL15|DL3|DN4|EH3[29]|EX22|GL50|GU10|GU24|HA[15]|HU[37]|HX1|IP3[01]|KA11|KT10|LA14|LA2|LE16|LL11|LL22|LS10|LS2[78]|MK18|NE25|NN16|NP16|NP2[56]|NP7|NR33|PE6|PO1[68]|PO[79]|RG8|RH12|RH20|SA9|SE22|SG16|SG[57]|SN1[14]|SN25|SN9|ST7|SY16|TQ13|TW14|WD17|YO14))/gi,

  // JUMP
  /(?<=(?:S74|barnsley)).{2,25}\bjump\b/gi,
  /\bjump\b(?=.{2,20}(?:S74|barnsley))/gi,
  /[\d-]+jump\sclose\b/gi,
  /(?<=SO21).{2,25}\bwater\sjump\b/gi,
  /\bwater\sjump\b(?=.{2,20}SO21)/gi,
  /[\d-]+squirrel['‘’`]?s\sjump\b/gi,
  /(?<=(?:SK9|alderley).{2,10})\bsquirrel['‘’`]?s\sjump\b/gi,
  /\bsquirrel['‘’`]?s\sjump\b(?=.{2,10}(?:SK9|alderley))/gi,

  // PARK
  /(?<=(?:BD24|CA9|LA22).{2,10})\bpark\sfell\b/gi,
  /\bpark\sfell\b(?=.{2,10}(?:BD24|CA9|LA22))/gi,
  /[\d-]+park\shomes\b/gi,
  /\bpark\shomes\b(?=.{2,20}(?:AL2|colney|albans))/gi,
  /(?<=(?:AL2|colney|albans).{2,25})\bpark\shomes\b/gi,
  /[\d-]+park\snorth\b/gi,
  /\bpark\snorth\b(?=.{2,20}(?:IP4|SN3))/gi,
  /(?<=(?:IP4|SN3).{2,25})\bpark\snorth\b/gi,
  /[\d-]+park\splace\b/gi,
  /\bpark\splace\b(?=.{2,20}(?:HA9|AL2|CF48|AB42|TN23|GU17|CF43|SA70|HP6|FK7|NP23|FK10|BS5|B7|FK6|CF40|GL50|TN24|M25|L20|PH2|DL1|BA7|IP17|BN18|KY1|NP11|KY9|SW1A|CF42|TW12|EH6|SA2|N1|BD10|BD23|BB1|DA12|EH54|IV31|ML12|DD1|ST14|DH3|KY12|BB2|DD9|CT9|PO19|CF37|PH3|NP13|CT16|SO21|BS23|ML4|WF8|DD8|FK14|LS1|G63|KY3|M4|SN6|W5|HG5|S80|EX2|DG11|CF81|HP9|W3|CT6|L8|SA14|SK4|GU52|AB24|S65|E14|CF32|DD2|ML11|DG2|M6|NN10|KA12|CF10|EX1|PR1|AB39|BS8|NP22|TN13|BA1|G74|ST4))/gi,
  /(?<=(?:HA9|AL2|CF48|AB42|TN23|GU17|CF43|SA70|HP6|FK7|NP23|FK10|BS5|B7|FK6|CF40|GL50|TN24|M25|L20|PH2|DL1|BA7|IP17|BN18|KY1|NP11|KY9|SW1A|CF42|TW12|EH6|SA2|N1|BD10|BD23|BB1|DA12|EH54|IV31|ML12|DD1|ST14|DH3|KY12|BB2|DD9|CT9|PO19|CF37|PH3|NP13|CT16|SO21|BS23|ML4|WF8|DD8|FK14|LS1|G63|KY3|M4|SN6|W5|HG5|S80|EX2|DG11|CF81|HP9|W3|CT6|L8|SA14|SK4|GU52|AB24|S65|E14|CF32|DD2|ML11|DG2|M6|NN10|KA12|CF10|EX1|PR1|AB39|BS8|NP22|TN13|BA1|G74|ST4).{2,25})\bpark\splace\b/gi,
  /\bpark\spond\b(?=.{2,20}(?:OX13|BB10|DE65|DT2|GL9|NN7|SO50|BA7|CF32|NN6|SP[37]))/gi,
  /(?<=(?:OX13|BB10|DE65|DT2|GL9|NN7|SO50|BA7|CF32|NN6|SP[37]).{2,25})\bpark\spond\b/gi,
  /\bpark\sponds\b(?=.{2,20}YO62)/gi,
  /(?<=YO62.{2,25})\bpark\sponds\b/gi,
  /\bpark\spool\b(?=.{2,20}(?:DG3|PE35|ST13|CV7|HR6|ST18|SY13|SY21|SY8|TF10))/gi,
  /(?<=(?:DG3|PE35|ST13|CV7|HR6|ST18|SY13|SY21|SY8|TF10).{2,25})\bpark\spool\b/gi,
  /[\d-]+park\sride\b/gi,
  /\bpark\b(?=.{2,20}(?:YO21|S36|HS2|DG3|SO42|BD17|BD22|thornhill|shipley|oakworth))/gi,
  /(?<=(?:YO21|S36|HS2|DG3|SO42|BD17|BD22|thornhill|shipley|oakworth).{2,25})\bpark\b/gi,
  /[\d-]+park\swalk\b/gi,
  /\bpark\swalk\b(?=.{2,20}(?:NN14|HU7|SO14|SE10|DY5|CH7|HU4|RG8|IP19|CH2|SW3|PE9|SW10|HR9))/gi,
  /(?<=(?:NN14|HU7|SO14|SE10|DY5|CH7|HU4|RG8|IP19|CH2|SW3|PE9|SW10|HR9).{2,25})\bpark\swalk\b/gi,
  /[\d-]+park\swall\b/gi,
  /\bpark\swall\b(?=.{2,20}(?:BA10|bruton))/gi,
  /(?<=(?:BA10|bruton).{2,25})\bpark\swall\b/gi,
  /[\d-]+park\swood\b/gi,
  /\bpark\swood\b(?=.{2,20}(?:PA8|BD2[13]|ME15|ME8))/gi,
  /(?<=(?:PA8|BD2[13]|ME15|ME8).{2,25})\bpark\swood\b/gi,
  /\bpark\swoods\b(?=.{2,20}(?:YO41|CM17|ME8|SA2))/gi,
  /(?<=(?:YO41|CM17|ME8|SA2).{2,25})\bpark\swoods\b/gi,
  /[\d-]+park\swell\b/gi,
  /\bpark\swell\b(?=.{2,20}(?:NE46|hexham))/gi,
  /(?<=(?:NE46|hexham).{2,25})\bpark\swell\b/gi,
  /[\d-]+park\sview\b/gi,
  /\bpark\sview\b(?=.{2,20}(?:AB42|AB5[14]|AL[59]|B36|B49|B73|B94|BB12|BB4|BD19|BD2[35]|BL4|BN2[37]|BS15|CA28|CF3[1459]|CF4[135]|CF72|CF81|CH62|CH7|CR3|CT19|CT2|CV34|CV9|CW5|DA10|DD11|DD[59]|DE15|DE21|DE45|DE55|DE6|DE7[25]|DG11|DH[257]|DL1[035]|DL[48]|DN1[478]|DN35|DN[68]|EH2[01]|EH3[23]|EH4[78]|EH52|EN11|EN6|EX19|FY3|GL17|GL[27]|GU19|HA[59]|HD9|HG1|HP22|HR[45]|HU17|HU4|HX2|IG7|IP14|IP2[27]|KA2[25]|KA30|KA6|KT23|KT3|KY16|KY[27]|L2[23]|L36|L6|LA11|LA5|LE1[04]|LE3|LL14|LN12|LS1[139]|LS2[268]|M14|M34|M9|MK16|MK44|ML10|ML[69]|N21|NE1[26]|NE2[14568]|NE32|NE6|NE6[356]|NG1[59]|NG20|NG3|NN1[4567]|NN3|NP1[0136]|NP2[23]|NP4|NP44|NR10|NR29|OL15|OL9|OX1[02]|PA10|PA2|PE10|PE2[1278]|PH11|PL14|PO33|PO7|PR[13]|RG[27]|RG28|RH1[16]|RH6|RM15|S26|S4[123]|S6[16]|S7[125]|S81|SA1[34]|SA4|SA71|SG[28]|SK[13]|SN10|SO3[01]|SS8|ST1[15]|TA1[58]|TA5|TD11|TD9|TF12|TN22|TN3[14]|TQ12|TR[14]|TS18|UB7|W3|WA1[24]|WF1[02]|WF[2369]|WN[24]|WS10|WS7|WV1[56]|YO16|YO21))/gi,
  /(?<=(?:AB42|AB5[14]|AL[59]|B36|B49|B73|B94|BB12|BB4|BD19|BD2[35]|BL4|BN2[37]|BS15|CA28|CF3[1459]|CF4[135]|CF72|CF81|CH62|CH7|CR3|CT19|CT2|CV34|CV9|CW5|DA10|DD11|DD[59]|DE15|DE21|DE45|DE55|DE6|DE7[25]|DG11|DH[257]|DL1[035]|DL[48]|DN1[478]|DN35|DN[68]|EH2[01]|EH3[23]|EH4[78]|EH52|EN11|EN6|EX19|FY3|GL17|GL[27]|GU19|HA[59]|HD9|HG1|HP22|HR[45]|HU17|HU4|HX2|IG7|IP14|IP2[27]|KA2[25]|KA30|KA6|KT23|KT3|KY16|KY[27]|L2[23]|L36|L6|LA11|LA5|LE1[04]|LE3|LL14|LN12|LS1[139]|LS2[268]|M14|M34|M9|MK16|MK44|ML10|ML[69]|N21|NE1[26]|NE2[14568]|NE32|NE6|NE6[356]|NG1[59]|NG20|NG3|NN1[4567]|NN3|NP1[0136]|NP2[23]|NP4|NP44|NR10|NR29|OL15|OL9|OX1[02]|PA10|PA2|PE10|PE2[1278]|PH11|PL14|PO33|PO7|PR[13]|RG[27]|RG28|RH1[16]|RH6|RM15|S26|S4[123]|S6[16]|S7[125]|S81|SA1[34]|SA4|SA71|SG[28]|SK[13]|SN10|SO3[01]|SS8|ST1[15]|TA1[58]|TA5|TD11|TD9|TF12|TN22|TN3[14]|TQ12|TR[14]|TS18|UB7|W3|WA1[24]|WF1[02]|WF[2369]|WN[24]|WS10|WS7|WV1[56]|YO16|YO21).{2,25})\bpark\sview\b/gi,
  /[\d-]+park\swest\b/gi,
  /\bpark\swest\b(?=.{2,20}(?:CH60|LS26))/gi,
  /(?<=(?:CH60|LS26).{2,25})\bpark\swest\b/gi,
  /[\d-]+the\spark\b/gi,
  /(?<=(?:AL[13]|B80|B9[347]|BA12|BA20|BA[57]|BH2[05]|BN27?|BS1[56]|BS20|BS3[012]|BS4[09]|CA1[12]|CA5|CF46|CF71|CH[37]|CM14|CM22|CO11|CT1[45]|CV13|CV37|DA1[34]|DE13|DE[46]|DG8|DH8|DL1[12]|DL7|DN14|DN2[01]|DN39|DT11|DT6|EX14|EX20|EX5|GL20|GL5[0145]|GU10|GU34|HD8|HG3|HR[12]|HU1[1457]|HX2|IP29|IP31|KT23|L36|LA2[12]|LA[589]|LD3|LE1[49]|LL15|LN11?|LN4|N6|NE1[18]|NE4[167]|NE6[156]|NE71|NG1|NG1[24678]|NG2[134]|NG34|NP1[06]|NP25|NP[47]|NR1[06]|NW11|OL[34]|OX1[15]|OX2|PE28|PE3[12]|PL21|PO32|PR3|RG17|RH17?|S7[25]|SA2|SA37|SA48|SK17|SK9|SM5|SN10|SO32|SP3|SS16|SY20|SY[58]|TA2|TF9|TN17|TN[3679]|TR2|TS9|W5|WA5|WR8|WS13|YO1[3479]|YO2[136]|YO4[12]|YO51|YO6[01])).{2,25}\bthe\spark\b/gi,
  /\bthe\spark\b(?=.{2,20}(?:AL[13]|B80|B9[347]|BA12|BA20|BA[57]|BH2[05]|BN27?|BS1[56]|BS20|BS3[012]|BS4[09]|CA1[12]|CA5|CF46|CF71|CH[37]|CM14|CM22|CO11|CT1[45]|CV13|CV37|DA1[34]|DE13|DE[46]|DG8|DH8|DL1[12]|DL7|DN14|DN2[01]|DN39|DT11|DT6|EX14|EX20|EX5|GL20|GL5[0145]|GU10|GU34|HD8|HG3|HR[12]|HU1[1457]|HX2|IP29|IP31|KT23|L36|LA2[12]|LA[589]|LD3|LE1[49]|LL15|LN11?|LN4|N6|NE1[18]|NE4[167]|NE6[156]|NE71|NG1|NG1[24678]|NG2[134]|NG34|NP1[06]|NP25|NP[47]|NR1[06]|NW11|OL[34]|OX1[15]|OX2|PE28|PE3[12]|PL21|PO32|PR3|RG17|RH17?|S7[25]|SA2|SA37|SA48|SK17|SK9|SM5|SN10|SO32|SP3|SS16|SY20|SY[58]|TA2|TF9|TN17|TN[3679]|TR2|TS9|W5|WA5|WR8|WS13|YO1[3479]|YO2[136]|YO4[12]|YO51|YO6[01]))/gi,

  // PAVEMENT
  /\bpavement\b(?=.{2,20}(?:YO1|YO42|pockling|york))/gi,
  /(?<=(?:YO1|YO42|pockling|york).{2,25})\bpavement\b/gi,
  /[\d-]+pavement\b/gi,
  /[\d-]+the\spavement\b/gi,
  /\bthe\spavement\b(?=.{2,20}(?:TN30|PE27|SW4|TA3|ST19))/gi,
  /[\d-]+(?:broad|central)\spavement\b/gi,
  /\b(?:broad|central)\spavement\b(?=.{2,20}(?:S40|chester))/gi,
  /[\d-]+middle\spavement\b/gi,
  /\bmiddle\spavement\b(?=.{2,20}(?:NG1|notting))/gi,
  /[\d-]+high\spavement\b/gi,
  /\bhigh\spavement\b(?=.{2,20}(?:NG1|NG17|DE56|sutton|belper|notting))/gi,
  /[\d-]+low\spavement\b/gi,
  /\blow\spavement\b(?=.{2,20}(?:NG1|S40|chester|notting))/gi,
  /[\d-]+roman\spavement\b/gi,
  /\broman\spavement\b(?=.{2,20}(?:LN2|lincoln))/gi,

  // POOL
  /(?<=(?:TR15|EX20|redruth)).{2,25}\bpool\b/gi,
  /\bpool\b(?=.{2,20}(?:TR15|EX20|redruth))/gi,
  /\bthe\spool\b(?=.{2,10}(?:DE[17]3|KW1[67]|KY10|LE3|NG11|NR23|OX17|PL26|ST19|TD12|TF9|WV[48]|ZE2))/gi,

  // POT
  /\bthe\spot\b(?=.{2,10}(?:AB43|AB55|IV19|TD12|TD6))/gi,
  
  // RUGBY
  /(?<=(?:addr|CV21|dr[io]ve|live|stay|town|warwick).{2,25})\brugby\b/gi,
  /\brugby\b(?=.{1,20}(?:addr|CV21|warwick))/gi,

  // SCHOOL
  /[\d-]+\sschool\s(?:annexe|approach|belt|chase|close|dr[io]ve|end|field\sclose|fields?)\b/gi,
  /[\d-]+\sschool\s(?:gardens|green|houses?|place|rise|rough|row|terrace|view|walk|yard)\b/gi,

  // WIND
  /[\d-]+\swind\sfell\b/gi,

  // WOOD
  /[\d-]+\swood(?:land)?\sfell\b/gmi,
];
const LocationContextRegEx: Set<RegExp> = new Set();
a.forEach(term => LocationContextRegEx.add(term));
export {LocationContextRegEx};