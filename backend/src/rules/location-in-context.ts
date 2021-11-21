/**********************************************************************
 * Pattern matches UK location names based on words that collide with 
 * frequently used words. The assoication with neighbouring text
 * is a lo-fi means of curtailing false positives
 **********************************************************************/
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

  // BOOT
  /\bboot\b(?=.{2,20}(?:CA19|village))/gi,
  /(?<=(?:CA19|village).{2,25})\bboot\b/gi,
  /\bthe\sboot\b(?=.{2,20}(?:AB45|island))/gi,
  /(?<=(?:AB45|island).{2,25})\bthe\sboot\b/gi,
  /\b[\d-]+\sthe\sboot\b/gi,
  /\bthe\sboot\b(?=.{2,20}(?:CF82|CB6))/gi,
  /(?<=(?:CF82|CB6).{2,25})\bthe\sboot\b/gi,
  
  // BOTTOM
  /(?<=(?:ZE2|TD7).{2,10})\bthe\sbottom\b/gi,
  /\bthe\sbottom\b(?=.{2,10}(?:ZE2|TD7))/gi,

  // CARRIER
  /[\d-]+carrier\sclose\b/gi,
  /\bcarrier\sclose\b(?=.{2,10}(?:PE2|peterborough))/gi,
  /(?<=(?:PE2|peterborough).{2,10})\bcarrier\sclose\b/gi,
  
  // CHAIR
  /(?<=IV28.{2,25})\bchair\b/gi,
  /\bchair\b(?=.{2,20}IV28)/gi,
  /(?<=(?:DG9|TR21|KW17|TR12).{2,10})\bthe\schair\b/gi,
  /\bthe\schair\b(?=.{2,10}(?:DG9|TR21|KW17|TR12))/gi,

  // COUSIN
  /(?<=(?:RH14).{2,10})\bcousins['‘’`]?s\scopse\b/gi,
  /\bcousins['‘’`]?s\scopse\b(?=.{2,10}(?:RH14))/gi,

  // CUT
  /\bcut\send\b(?=.{2,10}(?:CT7|lake))/gi,
  
  // DARK
  /\bdark\sbelt\b(?=.{2,10}IP22)/gi,
  /\bdark\sdungeon\b(?=.{2,10}AB45)/gi,
  /\bdark\spool\b(?=.{2,10}DY9)/gi,
  /\bdark\sgully\b(?=.{2,10}PH20)/gi,
  /\bdark\shole\b(?=.{2,10}(?:BH20|PL27))/gi,
  /\bdark\sdrive\b(?=.{2,10}DY12)/gi,
  /\bdark\sfirs\b(?=.{2,10}(?:DT6|BA3|BH23))/gi,
  /[\d-]+dark\shill\b/gi,
  /(?<=(?:ME13|BB18|GL1[56]|KT2).{2,10})\bdark\shill\b/gi,
  /\bdark\shill\b(?=.{2,10}(?:ME13|BB18|GL1[56]|KT2))/gi,
  /[\d-]+dark\slane\b/gi,
  /(?<=(?:AL5|B38|B47|B6[02]|B78|B96|BA11|BA[234]|BB18|BB4|BD2[23]|BH2[013]|BL6|BS2[89]|BS4[08]|CB10|CH3|CM1[34]|CT21|CV12?|CV3[57]|CW9|DE13|DE45?|DE56|DE65?|DL1[127]|DT10|DT[29]|DY1[34]|DY[79]|EN7|EX1[06]|EX20|EX[59]|GL51?|GL[67]|GU3|HD4|HG[35]|HP18|HP22|HR2|HU12|HX[2367]|IP13|IP2[14]|L31|L40|LD6|LE12|LL1[23]|LN11|LS21|M12|NE18|NE61|NG13|NG24|NG33|NN11|NN9|NR1[128]|NR29|OL[35]|OX1[35]|OX28|OX7|PE1[234]|PE20|PL14|PL2[12]|PL32|PO21|PO30|PR6|RG1[07]|RG2[04]|RG31|RG7|S36|S4[245]|S7[05]|SG12|SG[489]|SK11|SK6|SN1[46]|SN[78]|SO24|SO45|SP7|SS7|SY13|SY[27]|TA19|TA21|TA3|TF1[023]|TF4|WA14|WA[46]|WF17|WF8|WR2|WS1[35]|WS6|WV10|YO13|YO6[02]).{2,10})\bdark\slane\b/gi,
  /\bdark\slane\b(?=.{2,10}(?:AL5|B38|B47|B6[02]|B78|B96|BA11|BA[234]|BB18|BB4|BD2[23]|BH2[013]|BL6|BS2[89]|BS4[08]|CB10|CH3|CM1[34]|CT21|CV12?|CV3[57]|CW9|DE13|DE45?|DE56|DE65?|DL1[127]|DT10|DT[29]|DY1[34]|DY[79]|EN7|EX1[06]|EX20|EX[59]|GL51?|GL[67]|GU3|HD4|HG[35]|HP18|HP22|HR2|HU12|HX[2367]|IP13|IP2[14]|L31|L40|LD6|LE12|LL1[23]|LN11|LS21|M12|NE18|NE61|NG13|NG24|NG33|NN11|NN9|NR1[128]|NR29|OL[35]|OX1[35]|OX28|OX7|PE1[234]|PE20|PL14|PL2[12]|PL32|PO21|PO30|PR6|RG1[07]|RG2[04]|RG31|RG7|S36|S4[245]|S7[05]|SG12|SG[489]|SK11|SK6|SN1[46]|SN[78]|SO24|SO45|SP7|SS7|SY13|SY[27]|TA19|TA21|TA3|TF1[023]|TF4|WA14|WA[46]|WF17|WF8|WR2|WS1[35]|WS6|WV10|YO13|YO6[02]))/gi,
  /[\d-]+dark\sstreet\b/gi,
  /(?<=SA61.{2,10})\bdark\sstreet\b/gi,
  /\bdark\sstreet\b(?=.{2,10}SA61)/gi,
  /[\d-]+dark\swalk\b/gi,
  /(?<=PH2.{2,10})\bdark\swalk\b/gi,
  /\bdark\swalk\b(?=.{2,10}PH2)/gi,
  /(?<=(?:BD23|DG14|DH3|G84|GL5|KA16|KA4|LS29|NR21|PR2|RG27|RG9|SL4|ST5|TD8|WD4).{2,10})\bdark\swood\b/gi,
  /\bdark\swood\b(?=.{2,10}(?:BD23|DG14|DH3|G84|GL5|KA16|KA4|LS29|NR21|PR2|RG27|RG9|SL4|ST5|TD8|WD4))/gi,

  // DOWN
  /(?<=EX12.{2,10})\bdown\b/gi,
  /\bdown\b(?=.{2,10}EX12)/gi,
  /[\d-]+down\sclose\b/gi,
  /(?<=(?:BS20|EX10|GU29|PL12|UB5).{2,10})\bdown\sclose\b/gi,
  /\bdown\sclose\b(?=.{2,10}(?:BS20|EX10|GU29|PL12|UB5))/gi,
  /(?<=(?:CB7|camb).{2,10})\bdown\sfield\b/gi,
  /\bdown\sfield\b(?=.{2,10}(?:CB7|camb))/gi,
  /[\d-]+down\shill\b/gi,
  /(?<=(?:EX1[67]|FK14|GL6|NE23|NE36|NE45|OX11).{2,10})\bdown\shill\b/gi,
  /\bdown\shill\b(?=.{2,10}(?:EX1[67]|FK14|GL6|NE23|NE36|NE45|OX11))/gi,
  /(?<=NE64.{2,10})\bdown\sover\srocks\b/gi,
  /\bdown\sover\srocks\b(?=.{2,10}NE64)/gi,
  
  // DRIVEWAY
  /[\d-]+driveway\sdrove\b/gi,
  /(?<=(?:TA10|somerset).{2,10})\bdriveway\sdrove\b/gi,
  /\bdriveway\sdrove\b(?=.{2,10}(?:TA10|somerset))/gi,
  /[\d-]+driveway\b/gi,
  /(?<=(?:L35|whiston|prescot).{2,10})\bdriveway\b/gi,
  /\bdriveway\b(?=.{2,10}(?:L35|whiston|prescot))/gi,
  /[\d-]+the\sdriveway\b/gi,
  /(?<=(?:EN6|cuffley|HP1|hemel|BN43|shoreham|PO4|southsea|SS8|canvey|LE7|leic).{2,10})\bthe\sdriveway\b/gi,
  /\bthe\sdriveway\b(?=.{2,10}(?:EN6|cuffley|HP1|hemel|BN43|shoreham|PO4|southsea|SS8|canvey|LE7|leic))/gi,

  // FELL
  /[\d-]+\sfell\s(?:close|drive|end|foot|head|hill|road|side|view|walk|way|wood)\b/gmi,
  /\bray\sfell\b(?=.{2,10}(?:NE19|NE48))/gi,

  // FLOOR
  /\bthe\sfloor\b(?=.{2,10}(?:KW17))/gi,
  /\bthe\sfloors\b(?=.{2,10}(?:AB44|island))/gi,

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

  // HEAD
  /\bthe\shead\b(?=.{2,20}(?:KW17|SA62|ZE2))/gi,
  /\bthe\sheads\b(?=.{2,20}(?:FY6))/gi,
  /[\d-]+the\sheads\b/gi,
  /(?<=(?:CA12|LA11)).{2,25}\bthe\sheads\b/gi,
  /\bthe\sheads\b(?=.{2,20}(?:CA12|LA11))/gi,

  // HOLDING
  /[\d-]+holding\b/gi,
  /(?<=(?:S81|worksop).{2,10})\bholding\b/gi,
  /\bholding\b(?=.{2,10}(?:S81|worksop))/gi,
  /[\d-]+holding\sstreet\b/gi,
  /(?<=(?:ME8|WN2).{2,10})\bholding\sstreet\b/gi,
  /\bholding\sstreet\b(?=.{2,10}(?:ME8|WN2))/gi,

  // JUMP
  /(?<=(?:S74|barnsley)).{2,25}\bjump\b/gi,
  /\bjump\b(?=.{2,20}(?:S74|barnsley))/gi,
  /[\d-]+jump\sclose\b/gi,
  /(?<=(?:PL6|robor|plymouth).{2,10})\bjump\sclose\b/gi,
  /\bjump\sclose\b(?=.{2,10}(?:PL6|robor|plymouth))/gi,
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

  // PLACE
  /\bplace\sfell\b(?=.{2,10}(?:CA11|hill))/gi,
  
  // POOL
  /(?<=(?:TR15|EX20|redruth)).{2,25}\bpool\b/gi,
  /\bpool\b(?=.{2,20}(?:TR15|EX20|redruth))/gi,
  /\bthe\spool\b(?=.{2,10}(?:DE[17]3|KW1[67]|KY10|LE3|NG11|NR23|OX17|PL26|ST19|TD12|TF9|WV[48]|ZE2))/gi,

  // POT
  /\bthe\spot\b(?=.{2,10}(?:AB43|AB55|IV19|TD12|TD6))/gi,

  // RIVER
  /\bthe\sriver\b(?=.{2,20}(?:HP18|WR15))/gi,
  /(?<=(?:HP18|WR15).{2,25})\bthe\sriver\b/gi,

  // ROCK
  /[\d-]+the\srocks?\b/gi,
  /\bthe\srock\b(?=.{2,20}(?:BS4|BL9|DD11|DE45|EX31|IV32|NG32|OX15|OL8|TF3|TF11|WA6|WV6))/gi,
  /(?<=(?:BS4|BL9|DD11|DE45|EX31|IV32|NG32|OX15|OL8|TF3|TF11|WA6|WV6).{2,25})\bthe\srock\b/gi,
  /\bthe\srocks\b(?=.{2,20}(?:GL16|ST21|SY3|BA4|DE4|RH19))/gi,
  /(?<=(?:GL16|ST21|SY3|BA4|DE4|RH19).{2,25})\bthe\srocks\b/gi,

  // ROW
  /[\d-]+the\srows?\b/gi,
  /\bthe\srows\b(?=.{2,20}(?:CB8|BS22))/gi,
  /(?<=(?:CB8|BS22).{2,25})\bthe\srows\b/gi,
  /\bthe\srow\b(?=.{2,20}(?:AB43|BS35|CB6|CO7|CT4|CV7|DT10|GL9|HP14|IP29|KY15|LA5|NG13|OX2[09]|PE33|PL1[25]|SP5|SY6|TD11|TD[23]))/gi,
  /(?<=(?:AB43|BS35|CB6|CO7|CT4|CV7|DT10|GL9|HP14|IP29|KY15|LA5|NG13|OX2[09]|PE33|PL1[25]|SP5|SY6|TD11|TD[23]).{2,25})\bthe\srow\b/gi,
  
  // RUGBY
  /(?<=(?:addr|CV21|dr[io]ve|live|stay|town|warwick).{2,25})\brugby\b/gi,
  /\brugby\b(?=.{1,20}(?:addr|CV21|warwick))/gi,

  // SCHOOL
  /[\d-]+\sschool\s(?:annexe|approach|belt|chase|close|dr[io]ve|end|field\sclose|fields?)\b/gi,
  /[\d-]+\sschool\s(?:gardens|green|houses?|place|rise|rough|row|terrace|view|walk|yard)\b/gi,

  // STAIRS
  /(?<=(?:CF64|island).{2,25})\bthe\sstairs\b/gi,
  /\bthe\sstairs\b(?=.{2,20}(?:CF64|island))/gi,
  /[\d-]+new\sstairs\b/gi,
  /\bnew\sstairs\b(?=.{2,20}(?:ME4))/gi,
  /(?<=(?:ME4).{2,25})\bnew\sstairs\b/gi,
  /\bold\sstairs\b(?=.{2,20}(?:YO15|cliff))/gi,
  /(?<=(?:YO15|cliff).{2,25})\bold\sstairs\b/gi,

  // TONGUE
  /\btongue\b(?=.{2,20}(?:CA12|CA20|DL1[13]|HX7|ML12|IV27|KA26|DN14|village))/gi,
  /(?<=(?:CA12|CA20|DL1[13]|HX7|ML12|IV27|KA26|DN14|village).{2,25})\btongue\b/gi,
  /\bthe\stongue\b(?=.{2,20}(?:CA1[12]|CA9|DD9|DE6|DG10|DG4|EH46|HG3|KA24|KW16|LA10|LA2[23]|ML12|NE71|TD[59]))/gi,
  /(?<=(?:CA1[12]|CA9|DD9|DE6|DG10|DG4|EH46|HG3|KA24|KW16|LA10|LA2[23]|ML12|NE71|TD[59]).{2,25})\bthe\stongue\b/gi,
  /(?<=(?:NE47).{2,25})\bscabby\stongue\b/gi,
  /\bscabby\stongue\b(?=.{2,20}(?:NE47))/gi,
  /(?<=(?:NE47).{2,25})\b(?:emily|rough|scabby)\stongue\b/gi,
  /\b(?:emily|rough|scabby)\stongue\b(?=.{2,20}(?:NE47))/gi,
  /(?<=(?:CA1[01]).{2,25})\b(?:black|lucy['‘’`]?s)\stongue\b/gi,
  /\b(?:black|lucy['‘’`]?s)\stongue\b(?=.{2,20}(?:CA1[10]))/gi,
  /(?<=(?:CA20).{2,25})\b(?:broad|brown)\stongue\b/gi,
  /\b(?:broad|brown)\stongue\b(?=.{2,20}(?:CA20))/gi,
  /(?<=(?:SY5).{2,25})\bsmall\stongue\b/gi,
  /\bsmall\stongue\b(?=.{2,20}(?:SY5))/gi,
  /(?<=(?:BD23|CA1[0126]|DL11|HG[34]|LA10).{2,25})\bmiddle\stongue\b/gi,
  /\bmiddle\stongue\b(?=.{2,20}(?:BD23|CA1[0126]|DL11|HG[34]|LA10))/gi,
  /(?<=(?:LA12|CB8|IP12|CA9|DG5|LA2).{2,25})\blong\stongue\b/gi,
  /\blong\stongue\b(?=.{2,20}(?:LA12|CB8|IP12|CA9|DG5|LA2))/gi,
  /(?<=(?:LA22).{2,25})\blittle\stongue\b/gi,
  /\blittle\stongue\b(?=.{2,20}(?:LA22))/gi,
  /(?<=(?:TD9).{2,25})\bjenny['‘’`]?s\stongue\b/gi,
  /\bjenny['‘’`]?s\stongue\b(?=.{2,20}(?:TD9))/gi,
  /(?<=(?:KA17|LA22).{2,25})\bgreen\stongue\b/gi,
  /\bgreen\stongue\b(?=.{2,20}(?:KA17|LA22))/gi,
  /(?<=(?:AB54).{2,25})\bcorbie['‘’`]?\stongue\b/gi,
  /\bcorbie['‘’`]?\stongue\b(?=.{2,20}(?:AB54))/gi,

  // WART
  /(?<=(?:KW17|hill).{2,25})\b(?:little|the)\swart\b/gi,
  /\b(?:little|the)\swart\b(?=.{2,20}(?:KW17|hill))/gi,

  // WATER
  /(?<=(?:BB4|village).{2,25})\bwater\b/gi,
  /\bwater\b(?=.{2,20}(?:BB4|village))/gi,
  /[\d-]+water\sbank\b/gi,
  /\bwater\sbank\b(?=.{2,20}(?:CA7|DN9))/gi,
  /(?<=(?:CA7|DN9).{2,25})\bwater\sbank\b/gi,
  /[\d-]+water\sclose\b/gi,
  /\bwater\sclose\b(?=.{2,20}(?:LA12|MK19))/gi,
  /(?<=(?:LA12|MK19).{2,25})\bwater\sclose\b/gi,
  /[\d-]+water\send\b/gi,
  /\bwater\send\b(?=.{2,20}(?:AL9|CB10|DL6|HP1|KW17|MK17|MK4[145]|PE[67]|RG24|SG19|YO26|YO43|hamlet|vilage|lake))/gi,
  /(?<=(?:AL9|CB10|DL6|HP1|KW17|MK17|MK4[145]|PE[67]|RG24|SG19|YO26|YO43|hamlet|village|lake).{2,25})\bwater\send\b/gi,
  /\bwater\sgarden\b(?=.{2,20}(?:OX20))/gi,
  /(?<=(?:OX20).{2,25})\bwater\sgarden\b/gi,
  /[\d-]+water\sgardens\b/gi,
  /\bwater\sgardens\b(?=.{2,20}(?:LS26|HA7|IP22|NR24))/gi,
  /(?<=(?:LS26|HA7|IP22|NR24).{2,25})\bwater\sgardens\b/gi,
  /[\d-]+water\sgate\b/gi,
  /\bwater\sgate\b(?=.{2,20}(?:OL3|PE11|NG34))/gi,
  /(?<=(?:OL3|PE11|NG34).{2,25})\bwater\sgate\b/gi,
  /[\d-]+water\shead\b/gi,
  /\bwater\shead\b(?=.{2,20}(?:PR2|ML12|TD7|ZE2))/gi,
  /(?<=(?:PR2|ML12|TD7|ZE2).{2,25})\bwater\shead\b/gi,
  /\bwater\sjump\b(?=.{2,20}(?:SO21))/gi,
  /(?<=(?:SO21).{2,25})\bwater\sjump\b/gi,
  /\bwater\slake\b(?=.{2,20}(?:BH21))/gi,
  /(?<=(?:BH21).{2,25})\bwater\slake\b/gi,
  /\bwater\smouth\b(?=.{2,20}(?:EX34|bay))/gi,
  /(?<=(?:EX34|bay).{2,25})\bwater\smouth\b/gi,
  /\bwater\srun\b(?=.{2,20}(?:IP7|village))/gi,
  /(?<=(?:IP7|village).{2,25})\bwater\srun\b/gi,
  /[\d-]+water\sside\b/gi,
  /\bwater\sside\b(?=.{2,20}(?:DN15))/gi,
  /(?<=(?:DN15).{2,25})\bwater\sside\b/gi,
  /\bwater\ssound\b(?=.{2,20}(?:KW17|channel))/gi,
  /(?<=(?:KW17|channel).{2,25})\bwater\ssound\b/gi,
  /[\d-]+water\sstreet\b/gi,
  /\bwater\sstreet\b(?=.{2,20}(?:AB43|B3|B70|BA12|BB1[028]|BB[45689]|BD23|BH21|BL[17]|BS40|CA10|CA[27]|CB4|CF3[12]|CF71|CH4[14]|CH62|CH7|CO10|CT14|CW9|DE45|DG5|DH7|DY6|E14|EH6|GL11|HD[14689]|HX6|L2|L2[23]|LA14?|LD8|LL1[68]|LL22|LL3[046]|LL42|LL5[479]|LL65|LL71|M2[467]|M34?|M46|M9|NE4|NN16|OL1[246]|OL[26]|OX25|PA14|PE9|PR[3567]|RG18|S3|S65|SA1[123578]|SA20|SA3[138]|SA4[568]?|SA67|SA7[23]|SK1[013457]?|SP7|ST16|ST[45]|TA1[0239]|WA1[02]|WA[78]|WC2R|WN1|WS7|WV10))/gi,
  /(?<=(?:AB43|B3|B70|BA12|BB1[028]|BB[45689]|BD23|BH21|BL[17]|BS40|CA10|CA[27]|CB4|CF3[12]|CF71|CH4[14]|CH62|CH7|CO10|CT14|CW9|DE45|DG5|DH7|DY6|E14|EH6|GL11|HD[14689]|HX6|L2|L2[23]|LA14?|LD8|LL1[68]|LL22|LL3[046]|LL42|LL5[479]|LL65|LL71|M2[467]|M34?|M46|M9|NE4|NN16|OL1[246]|OL[26]|OX25|PA14|PE9|PR[3567]|RG18|S3|S65|SA1[123578]|SA20|SA3[138]|SA4[568]?|SA67|SA7[23]|SK1[013457]?|SP7|ST16|ST[45]|TA1[0239]|WA1[02]|WA[78]|WC2R|WN1|WS7|WV10).{2,25})\bwater\sstreet\b/gi,
  /\bwater\sswallows\b(?=.{2,20}(?:YO62))/gi,
  /(?<=(?:YO62).{2,25})\bwater\sswallows\b/gi,
  /[\d-]+water\stower\sclose\b/gi,
  /\bwater\stower\sclose\b(?=.{2,20}(?:UB8))/gi,
  /(?<=(?:UB8).{2,25})\bwater\stower\sclose\b/gi,
  /[\d-]+water\sview\sclose\b/gi,
  /\bwater\sview\sclose\b(?=.{2,20}(?:DA6))/gi,
  /(?<=(?:DA6).{2,25})\bwater\sview\sclose\b/gi,
  /[\d-]+water\sview\b/gi,
  /\bwater\sview\b(?=.{2,20}(?:LS18|WF10|PE8))/gi,
  /(?<=(?:LS18|WF10|PE8).{2,25})\bwater\sview\b/gi,
  /[\d-]+water['‘’`]?s\sedge\b/gi,
  /\bwater['‘’`]?s\sedge\b(?=.{2,20}(?:SO30|BL4|PR2))/gi,
  /(?<=(?:SO30|BL4|PR2).{2,25})\bwater['‘’`]?s\sedge\b/gi,

  // WEEK
  /\bweek\b(?=.{2,20}(?:TQ9|EX18|EX20|EX37|village|hamlet))/gi,
  /(?<=(?:TQ9|EX18|EX20|EX37|village|hamlet).{2,25})\bweek\b/gi,

  // WIND
  /[\d-]+\swind\sfell\b/gi,

  // WOOD
  /[\d-]+\swood(?:land)?\sfell\b/gmi,
];
const LocationContextRegEx: Set<RegExp> = new Set();
a.forEach(term => LocationContextRegEx.add(term));
export {LocationContextRegEx};