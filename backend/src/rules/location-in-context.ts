/**********************************************************************
 * Pattern matches UK location names based on words that collide with 
 * frequently used words. The assoication with neighbouring text
 * is a lo-fi means of curtailing false positives
 **********************************************************************/
const a: RegExp[] = [
// ARM
/\bthe\sarms\b(?=.{2,20}(?:IP25|hamlet))/gi,
/(?<=(?:IP25|hamlet).{2,25})\bthe\sarms\b/gi,

// AXE
/\bthe\saxe\b(?=.{2,20}(?:KW16|island))/gi,
/(?<=(?:KW16|island).{2,25})\bthe\saxe\b/gi,
  
// BACK
/\b[\d-]+\sthe\sback\b/gi,
/\bthe\sback\b(?=.{2,20}(?:NP16|HP4))/gi,
/(?<=(?:NP16|HP4).{2,25})\bthe\sback\b/gi,

// BALCONY
/\b[\d-]+\sbalcony\b/gi,
/\bbalcony\b(?=.{2,20}(?:MK45))/gi,
/(?<=(?:MK45).{2,25})\bbalcony\b/gi,

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
/\bthe\sballs\b(?=.{2,20}(?:EX35))/gi,
/(?<=(?:EX35).{2,25})\bthe\sballs\b/gi,

// BAR
/[\d-]+the\sbars?\b/gi,
/\bthe\sbars?\b(?=.{2,10}(?:AB11|CH1|GU1|DD11|IV12|IV36|KW17|LL38|NG22|TQ8|TR11|TR23))/gi,
/(?<=(?:AB11|CH1|GU1|DD11|IV12|IV36|KW17|LL38|NG22|TQ8|TR11|TR23).{2,10})\bthe\sbars?\b/gi,

// BARE
/\bbare\b(?=.{2,10}(?:LA4))/gi,
/(?<=(?:LA4).{2,10})\bbare\b/gi,
/\bbare\sallotment\b(?=.{2,10}(?:LA12))/gi,
/(?<=(?:LA12).{2,10})\bbare\sallotment\b/gi,
/\bbare\sash\b(?=.{2,10}(?:TA5))/gi,
/(?<=(?:TA5).{2,10})\bbare\sash\b/gi,
/\bbare\shead\b(?=.{2,10}(?:HX3))/gi,
/(?<=(?:HX3).{2,10})\bbare\shead\b/gi,

// BASIN
/\bthe\sbasin\b(?=.{2,20}(?:HG5|HS6|IP17|IP24|IP8|IV27|KW17|NN7|RG25|SA62|TD15))/gi,
/(?<=(?:HG5|HS6|IP17|IP24|IP8|IV27|KW17|NN7|RG25|SA62|TD15).{2,25})\bthe\sbasin\b/gi,

// BATH
/\bbath\b(?=.{2,20}(?:BA2|city))/gi,
/(?<=(?:BA2|city).{2,25})\bbath\b/gi,
/[\d-]+bath\sclose\b/gi,
/\bbath\sclose\b(?=.{2,10}(?:BA6|EX14|SE15|SO19|LS13|SK7|PE28|LE9|NE28|PE10))/gi,
/(?<=(?:BA6|EX14|SE15|SO19|LS13|SK7|PE28|LE9|NE28|PE10).{2,10})\bbath\sclose\b/gi,
/\bbath\sside\b(?=.{2,10}(?:CO12))/gi,
/(?<=(?:CO12).{2,10})\bbath\sside\b/gi,
/\bbath\sspa\b(?=.{2,10}(?:BA1))/gi,
/(?<=(?:BA1).{2,10})\bbath\sspa\b/gi,

// BEACH
/[\d-]+the\sbeach\b/gi,
/\bthe\sbeach\b(?=.{2,10}(?:BS21|CT14|NR30|PO11|RM17|YO14))/gi,
/(?<=(?:BS21|CT14|NR30|PO11|RM17|YO14).{2,10})\bthe\sbeach\b/gi,

// BEAM
/[\d-]+beam\sclose\b/gi,
/\bthe\sbeam\b(?=.{2,10}(?:ML12))/gi,
/(?<=(?:ML12).{2,10})\bthe\sbeam\b/gi,
/\bbeam\sclose\b(?=.{2,10}(?:BN18|DE13))/gi,
/(?<=(?:BN18|DE13).{2,10})\bbeam\sclose\b/gi,

// BELT
/\bthe\sbelt\b(?=.{2,10}(?:AL3|B4[69]|B76|BA12|BA9|BH2[04]|BS40|CB8|CH7|CM9|CO7|CR5|CV10|CV3[47]|CW[56]|DE13|DE74|DG[1239]|DG10|DL[78]|DN2[12]|DT11|DT9|EX1[45]|GL20|GL54|GL[78]|GU20|GU3[01]|HG4|HR[24]|IP1[0237]|IP2[29]|IP31|IP7|KA26|LA5|LE1[2457]|LE67|LL1[346]|LN11|LN[49]|LS25|LU[57]|ME14|MK17|NG32|NG5|NN13|NR1[0-6]|NR2[3-9]|NR9|OX1[78]|OX25|OX[79]|PE19|PE2[23]|PE3[12]|PE7|PL7|RG9|RH19|SA37|SG19|SG[48]|SL[45]|SN13|SN8|SO21|SP11|SP[3679]|SY5|TA4|TN31|TN4|WA16|WA6|WN[35]|WR8|WS1[34]|WS9|WV1[05]|WV5|YO1[29]|YO25|YO30|YO42|YO60|YO7))/gi,
/(?<=(?:AL3|B4[69]|B76|BA12|BA9|BH2[04]|BS40|CB8|CH7|CM9|CO7|CR5|CV10|CV3[47]|CW[56]|DE13|DE74|DG[1239]|DG10|DL[78]|DN2[12]|DT11|DT9|EX1[45]|GL20|GL54|GL[78]|GU20|GU3[01]|HG4|HR[24]|IP1[0237]|IP2[29]|IP31|IP7|KA26|LA5|LE1[2457]|LE67|LL1[346]|LN11|LN[49]|LS25|LU[57]|ME14|MK17|NG32|NG5|NN13|NR1[0-6]|NR2[3-9]|NR9|OX1[78]|OX25|OX[79]|PE19|PE2[23]|PE3[12]|PE7|PL7|RG9|RH19|SA37|SG19|SG[48]|SL[45]|SN13|SN8|SO21|SP11|SP[3679]|SY5|TA4|TN31|TN4|WA16|WA6|WN[35]|WR8|WS1[34]|WS9|WV1[05]|WV5|YO1[29]|YO25|YO30|YO42|YO60|YO7).{2,10})\bthe\sbelt\b/gi,

// BENCH
/\bthe\sbench\b(?=.{2,10}(?:SA62))/gi,
/(?<=(?:SA62).{2,10})\bthe\sbench\b/gi,

// BENDY
/[\d-]+bendy\sbow\b/gi,
/\bbendy\sbow\b(?=.{2,10}(?:SN16))/gi,
/(?<=(?:SN16).{2,10})\bbendy\sbow\b/gi,

// BENT
/[\d-]+the\sbent\b/gi,
/\bthe\sbent\b(?=.{2,10}(?:S32|OL11))/gi,
/(?<=(?:S32|OL11).{2,10})\bthe\sbent\b/gi,

// BIN
/\bthe\sbin\b(?=.{2,10}(?:AB54))/gi,
/(?<=(?:AB54).{2,10})\bthe\sbin\b/gi,

// BIT
/[\d-]+the\sbit\b/gi,
/\bthe\sbit\b(?=.{2,10}(?:HP23))/gi,
/(?<=(?:HP23).{2,10})\bthe\sbit\b/gi,

// BITE
/\bthe\sbite\b(?=.{2,10}(?:PL26|TR22))/gi,
/(?<=(?:PL26|TR22).{2,10})\bthe\sbite\b/gi,

// BLADE
/\bthe\sblade\b(?=.{2,10}(?:beach|ZE2))/gi,
/(?<=(?:beach|ZE2).{2,10})\bthe\sblade\b/gi,

// BLIND
/\bthe\sblind\b(?=.{2,10}(?:PL13))/gi,
/(?<=(?:PL13).{2,10})\bthe\sblind\b/gi,

// BOAT
/\bthe\sboat\b(?=.{2,10}(?:AB43|KW17))/gi,
/(?<=(?:AB43|KW17).{2,10})\bthe\sboat\b/gi,
/\bboat\shouse\b(?=.{2,10}(?:PH26))/gi,
/(?<=(?:PH26).{2,10})\bboat\shouse\b/gi,

// BOOK
/\bthe\sbooks\b(?=.{2,10}(?:TQ7|island))/gi,
/(?<=(?:TQ7|island).{2,10})\bthe\sbooks\b/gi,
  
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
/(?<=(?:SG4|LD1|LL19|valley|wetland).{2,10})\bbottom\b/gi,
/\bbottom\b(?=.{2,10}(?:SG4|LD1|LL19|valley|wetland))/gi,

// BOWL
/(?<=(?:MK5).{2,10})\bthe\sbowl\b/gi,
/\bthe\sbowl\b(?=.{2,10}(?:MK5))/gi,

// BOX
/(?<=(?:SN13|GL6|SA15|village).{2,10})\bbox\b/gi,
/\bbox\b(?=.{2,10}(?:SN13|GL6|SA15|village))/gi,
/[\d-]+box['‘’`s]{1,2}\scorner\b/gi,
/(?<=(?:EX18).{2,10})\bbox['‘’`s]{1,2}\scorner\b/gi,
/\bbox['‘’`s]{1,2}\scorner\b(?=.{2,10}(?:EX18))/gi,

// BRAMBLE
/[\d-]+the\sbrambles\b/gi,
/(?<=(?:AL[16]|B76|BA2|BB2|BL5|BS13|BS22|BS31|CB2[13]|CB[236]|CF72|CH[57]|CM0|CM23|CO3|CW[19]|DE11|DH3|DN19|DT9|DY9|EN8|FY8|GL13|GU51|GU7|HR9|HU12|IG7|IP15|LL11|LN[138]|LS29|ME17|MK4[45]|NE25|NG22|NG34|NN6|OX3|PE1[02]|PE27|PE[69]|PL22|PO3[56]|PR[279]|RG14|RG45|RH1[47]|S35|S71|SG[18]|SG12|SL6|SP1|SS12|ST5|SY13|SY5|TA21|TF3|TQ13|UB7|WA5|WN4|WS1[14]|YO42).{2,10})\bthe\sbrambles\b/gi,
/\bthe\sbrambles\b(?=.{2,10}(?:AL[16]|B76|BA2|BB2|BL5|BS13|BS22|BS31|CB2[13]|CB[236]|CF72|CH[57]|CM0|CM23|CO3|CW[19]|DE11|DH3|DN19|DT9|DY9|EN8|FY8|GL13|GU51|GU7|HR9|HU12|IG7|IP15|LL11|LN[138]|LS29|ME17|MK4[45]|NE25|NG22|NG34|NN6|OX3|PE1[02]|PE27|PE[69]|PL22|PO3[56]|PR[279]|RG14|RG45|RH1[47]|S35|S71|SG[18]|SG12|SL6|SP1|SS12|ST5|SY13|SY5|TA21|TF3|TQ13|UB7|WA5|WN4|WS1[14]|YO42))/gi,

// BRANCH
/[\d-]+the\sbranch\b/gi,
/(?<=(?:GL17).{2,10})\bthe\sbranch\b/gi,
/\bthe\sbranch\b(?=.{2,10}(?:GL17))/gi,

// BRICK
/(?<=(?:S17).{2,10})\bbrick\shouses\b/gi,
/\bbrick\shouses\b(?=.{2,10}(?:S17))/gi,
/[\d-]+brick\skilns\b/gi,
/(?<=(?:PE29).{2,10})\bbrick\skilns\b/gi,
/\bbrick\skilns\b(?=.{2,10}(?:PE29))/gi,

// BROOM
/[\d-]+the\sbroom\b/gi,
/(?<=(?:IP12).{2,10})\bthe\sbroom\b/gi,
/\bthe\sbroom\b(?=.{2,10}(?:IP12))/gi,

// BROTHERS
/(?<=(?:AB43|DG7).{2,10})\bthe\sbrothers\b/gi,
/\bthe\sbrothers\b(?=.{2,10}(?:AB43|DG7))/gi,

// BRUSH
/[\d-]+the\sbrush\b/gi,
/(?<=(?:GL5).{2,10})\bthe\sbrush\b/gi,
/\bthe\sbrush\b(?=.{2,10}(?:GL5))/gi,
/(?<=(?:S41).{2,10})\bthe\sbrushes\b/gi,
/\bthe\sbrushes\b(?=.{2,10}(?:S41))/gi,

// BURN
/[\d-]+the\sburns?\b/gi,
/(?<=(?:YO26).{2,10})\bthe\sburn\b/gi,
/\bthe\sburn\b(?=.{2,10}(?:YO26))/gi,
/(?<=(?:NG20).{2,10})\bthe\sburns\b/gi,
/\bthe\sburns\b(?=.{2,10}(?:NG20))/gi,

// BUSH
/[\d-]+the\sbush\b/gi,
/(?<=(?:HP17|NE68|AB14|KW16).{2,10})\bthe\sbush\b/gi,
/\bthe\sbush\b(?=.{2,10}(?:HP17|NE68|AB14|KW16))/gi,
/(?<=(?:BA11|CR3|DT11|NG32|NN7|NP7|NR14|OX5|RG20|SG2|SP3|SS6|WF4).{2,10})\bthe\sbushes\b/gi,
/\bthe\sbushes\b(?=.{2,10}(?:BA11|CR3|DT11|NG32|NN7|NP7|NR14|OX5|RG20|SG2|SP3|SS6|WF4))/gi,

// BUSY
/(?<=(?:KW17).{2,10})\bthe\sbusy\b/gi,
/\bthe\sbusy\b(?=.{2,10}(?:KW17))/gi,

// CALF
/(?<=(?:DT2|ZE2|LA10|TR21).{2,10})\bthe\scalf\b/gi,
/\bthe\scalf\b(?=.{2,10}(?:DT2|ZE2|LA10|TR21))/gi,

// CAME
/[\d-]+came\sdown\sclose\b/gi,
/(?<=(?:DT3).{2,10})\bcame\sdown(?:\sclose)?\b/gi,
/\bcame\sdown(?:\sclose)?\b(?=.{2,10}(?:DT3))/gi,

// CANDLE
/(?<=(?:KW16).{2,10})\bthe\scandle\b/gi,
/\bthe\scandle\b(?=.{2,10}(?:KW16))/gi,

// CAR
/\bthe\scar\b(?=.{2,10}(?:IP25|S33|EH39))/gi,
/(?<=(?:IP25|S33|EH39).{2,10})\bthe\scar\b/gi,

// CARRIER
/[\d-]+carrier\sclose\b/gi,
/\bcarrier\sclose\b(?=.{2,10}(?:PE2|peterborough))/gi,
/(?<=(?:PE2|peterborough).{2,10})\bcarrier\sclose\b/gi,

// CAST
/[\d-]+the\scast\b/gi,
/\bthe\scast\b(?=.{2,10}(?:EH18|EH32))/gi,
/(?<=(?:EH18|EH32).{2,10})\bthe\scast\b/gi,

// CENTRE
/[\d-]+the\scentre\b/gi,
/\bthe\scentre\b(?=.{2,10}(?:SP4|CT12|CO9|S66))/gi,
/(?<=(?:SP4|CT12|CO9|S66).{2,10})\bthe\scentre\b/gi,

// CHAIN
/[\d-]+the\schain\b/gi,
/\bthe\schain\b(?=.{2,10}(?:CT13))/gi,
/(?<=(?:CT13).{2,10})\bthe\schain\b/gi,

// CHAIR
/(?<=IV28.{2,25})\bchair\b/gi,
/\bchair\b(?=.{2,20}IV28)/gi,
/(?<=(?:DG9|TR21|KW17|TR12).{2,10})\bthe\schair\b/gi,
/\bthe\schair\b(?=.{2,10}(?:DG9|TR21|KW17|TR12))/gi,
/(?<=(?:TR19).{2,10})\bchair\schair\b/gi,
/\bchair\schair\b(?=.{2,10}(?:TR19))/gi,

// CHASE
/[\d-]+the\schase\b/gi,
/\bthe\schase\b(?=.{2,10}(?:AL6|B76|BB12|BD20|BH24|BH31|BN1[48]|BR[16]|BS16|CB[69]|CF31|CH4|CH63|CM[01]|CM1[12347]|CM2[23]|CM[23679]|CM77|CO1|CO1[015]|CO[3567]|CR5|CT15|CT5|DA7|DE12|DE2[14]|DE56|DL2|DN14|E12|EN7|EX14|FY5|GL[345]|GL52|GU14|GU2|HA[578]|HG5|HP10|HP[25]|IG10|IG7|IP11|IP27|IP31|IP5|KT2[0124]|L36|LA5|LE[378]|LE67|LN[348]|LS19|LS2[259]|M28|ME[48]|MK43|NE12|NE2[29]|NE38|NE46|NG3[34]|NN6|NP15|NR13|NR25|NR34|PE1[1-5]|PE2[16]|PE38|PE[67]|PL21|PO1[24]|PR25|PR4|RG14|RG20|RG31|RG45|RH10|RH2|RM[17]|RM1[24]|RM20|S26|S6|SG1[1235]|SL[567]|SM6|SS1[26]|SS[3467]|SW16|SW4|TN1[05]|TS19|TW16|UB10|WD18|WD7|WF3|WR14|WV6|YO17|YO25|YO51))/gi,
/(?<=(?:AL6|B76|BB12|BD20|BH24|BH31|BN1[48]|BR[16]|BS16|CB[69]|CF31|CH4|CH63|CM[01]|CM1[12347]|CM2[23]|CM[23679]|CM77|CO1|CO1[015]|CO[3567]|CR5|CT15|CT5|DA7|DE12|DE2[14]|DE56|DL2|DN14|E12|EN7|EX14|FY5|GL[345]|GL52|GU14|GU2|HA[578]|HG5|HP10|HP[25]|IG10|IG7|IP11|IP27|IP31|IP5|KT2[0124]|L36|LA5|LE[378]|LE67|LN[348]|LS19|LS2[259]|M28|ME[48]|MK43|NE12|NE2[29]|NE38|NE46|NG3[34]|NN6|NP15|NR13|NR25|NR34|PE1[1-5]|PE2[16]|PE38|PE[67]|PL21|PO1[24]|PR25|PR4|RG14|RG20|RG31|RG45|RH10|RH2|RM[17]|RM1[24]|RM20|S26|S6|SG1[1235]|SL[567]|SM6|SS1[26]|SS[3467]|SW16|SW4|TN1[05]|TS19|TW16|UB10|WD18|WD7|WF3|WR14|WV6|YO17|YO25|YO51).{2,10})\bthe\schase\b/gi,

// CHILD
/(?<=(?:KW8).{2,10})\bthe\schild['‘’`s]{1,2}\sseat\b/gi,
/\bthe\schild['‘’`s]{1,2}\sseat\b(?=.{2,10}(?:KW8))/gi,

// CLUSTER
/\bcluster\b(?=.{2,20}(?:ZE2|island))/gi,
/(?<=(?:ZE2|island).{2,25})\bcluster\b/gi,

// CORNER
/[\d-]+the\scorners?\b/gi,
/(?<=(?:DT11|DT6|NG14).{2,10})\bthe\scorner\b/gi,
/\bthe\scorner\b(?=.{2,10}(?:DT11|DT6|NG14))/gi,
/(?<=(?:FY5|CW8).{2,10})\bthe\scorners\b/gi,
/\bthe\scorners\b(?=.{2,10}(?:FY5|CW8))/gi,

// COUSIN
/(?<=(?:RH14).{2,10})\bcousins['‘’`s]{1,2}\scopse\b/gi,
/\bcousins['‘’`s]{1,2}\scopse\b(?=.{2,10}(?:RH14))/gi,

// CUP
/(?<=(?:GL13|island).{2,10})\bthe\scup\b/gi,
/\bthe\scup\b(?=.{2,10}(?:GL13|island))/gi,

// CUT
/\bcut\send\b(?=.{2,10}(?:CT7|lake))/gi,
/[\d-]+the\scut\b/gi,
/(?<=(?:CT15|DG8|G71|ME7|PO31|RH14|SA3|SE1|SG12|TA6|TN27|WF4|YO30|YO41).{2,10})\bthe\scut\b/gi,
/\bthe\scut\b(?=.{2,10}(?:CT15|DG8|G71|ME7|PO31|RH14|SA3|SE1|SG12|TA6|TN27|WF4|YO30|YO41))/gi,
/(?<=(?:TS18|DE74|WF1).{2,10})\bold\scut\b/gi,
/\bold\scut\b(?=.{2,10}(?:TS18|DE74|WF1))/gi,

// DARK
/\bdark\sbelt\b(?=.{2,10}IP22)/gi,
/\bdark\sdungeon\b(?=.{2,10}AB45)/gi,
/\bdark\spool\b(?=.{2,10}DY9)/gi,
/\bdark\sgully\b(?=.{2,10}PH20)/gi,
/\bdark\shole\b(?=.{2,10}(?:BH20|PL27))/gi,
/\bdark\sdrive\b(?=.{2,10}DY12)/gi,
/\bdark\sfirs\b(?=.{2,10}(?:DT6|BA3|BH23))/gi,
/[\d-]+dark\s(?:hill|lane|street|walk)\b/gi,
/(?<=(?:ME13|BB18|GL1[56]|KT2).{2,10})\bdark\shill\b/gi,
/\bdark\shill\b(?=.{2,10}(?:ME13|BB18|GL1[56]|KT2))/gi,
/(?<=(?:AL5|B38|B47|B6[02]|B78|B96|BA11|BA[234]|BB18|BB4|BD2[23]|BH2[013]|BL6|BS2[89]|BS4[08]|CB10|CH3|CM1[34]|CT21|CV12?|CV3[57]|CW9|DE13|DE45?|DE56|DE65?|DL1[127]|DT10|DT[29]|DY1[34]|DY[79]|EN7|EX1[06]|EX20|EX[59]|GL51?|GL[67]|GU3|HD4|HG[35]|HP18|HP22|HR2|HU12|HX[2367]|IP13|IP2[14]|L31|L40|LD6|LE12|LL1[23]|LN11|LS21|M12|NE18|NE61|NG13|NG24|NG33|NN11|NN9|NR1[128]|NR29|OL[35]|OX1[35]|OX28|OX7|PE1[234]|PE20|PL14|PL2[12]|PL32|PO21|PO30|PR6|RG1[07]|RG2[04]|RG31|RG7|S36|S4[245]|S7[05]|SG12|SG[489]|SK11|SK6|SN1[46]|SN[78]|SO24|SO45|SP7|SS7|SY13|SY[27]|TA19|TA21|TA3|TF1[023]|TF4|WA14|WA[46]|WF17|WF8|WR2|WS1[35]|WS6|WV10|YO13|YO6[02]).{2,10})\bdark\slane\b/gi,
/\bdark\slane\b(?=.{2,10}(?:AL5|B38|B47|B6[02]|B78|B96|BA11|BA[234]|BB18|BB4|BD2[23]|BH2[013]|BL6|BS2[89]|BS4[08]|CB10|CH3|CM1[34]|CT21|CV12?|CV3[57]|CW9|DE13|DE45?|DE56|DE65?|DL1[127]|DT10|DT[29]|DY1[34]|DY[79]|EN7|EX1[06]|EX20|EX[59]|GL51?|GL[67]|GU3|HD4|HG[35]|HP18|HP22|HR2|HU12|HX[2367]|IP13|IP2[14]|L31|L40|LD6|LE12|LL1[23]|LN11|LS21|M12|NE18|NE61|NG13|NG24|NG33|NN11|NN9|NR1[128]|NR29|OL[35]|OX1[35]|OX28|OX7|PE1[234]|PE20|PL14|PL2[12]|PL32|PO21|PO30|PR6|RG1[07]|RG2[04]|RG31|RG7|S36|S4[245]|S7[05]|SG12|SG[489]|SK11|SK6|SN1[46]|SN[78]|SO24|SO45|SP7|SS7|SY13|SY[27]|TA19|TA21|TA3|TF1[023]|TF4|WA14|WA[46]|WF17|WF8|WR2|WS1[35]|WS6|WV10|YO13|YO6[02]))/gi,
/(?<=SA61.{2,10})\bdark\sstreet\b/gi,
/\bdark\sstreet\b(?=.{2,10}SA61)/gi,
/(?<=PH2.{2,10})\bdark\swalk\b/gi,
/\bdark\swalk\b(?=.{2,10}PH2)/gi,
/(?<=(?:BD23|DG14|DH3|G84|GL5|KA16|KA4|LS29|NR21|PR2|RG27|RG9|SL4|ST5|TD8|WD4).{2,10})\bdark\swood\b/gi,
/\bdark\swood\b(?=.{2,10}(?:BD23|DG14|DH3|G84|GL5|KA16|KA4|LS29|NR21|PR2|RG27|RG9|SL4|ST5|TD8|WD4))/gi,

// DOOR
/[\d-]+eleven\sdoors\b/gi,
/(?<=(?:PL25).{2,10})\beleven\sdoors\b/gi,
/\beleven\sdoors\b(?=.{2,10}(?:PL25))/gi,
/(?<=(?:KW17).{2,10})\bopen\sdoors\b/gi,
/\bopen\sdoors\b(?=.{2,10}(?:KW17))/gi,
/[\d-]+south\sdoors\b/gi,
/(?<=(?:EH32).{2,10})\bsouth\sdoors\b/gi,
/\bsouth\sdoors\b(?=.{2,10}(?:EH32))/gi,
/(?<=(?:TD5).{2,10})\bthe\sdoors\b/gi,
/\bthe\sdoors\b(?=.{2,10}(?:TD5))/gi,
/(?<=(?:SA62|island).{2,10})\bthree\sdoors\b/gi,
/\bthree\sdoors\b(?=.{2,10}(?:SA62|island))/gi,

// DOWN
/(?<=EX12.{2,10})\bdown\b/gi,
/\bdown\b(?=.{2,10}EX12)/gi,
/[\d-]+down\s(?:close|hill)\b/gi,
/(?<=(?:BS20|EX10|GU29|PL12|UB5).{2,10})\bdown\sclose\b/gi,
/\bdown\sclose\b(?=.{2,10}(?:BS20|EX10|GU29|PL12|UB5))/gi,
/(?<=(?:CB7|camb).{2,10})\bdown\sfield\b/gi,
/\bdown\sfield\b(?=.{2,10}(?:CB7|camb))/gi,
/(?<=(?:EX1[67]|FK14|GL6|NE23|NE36|NE45|OX11).{2,10})\bdown\shill\b/gi,
/\bdown\shill\b(?=.{2,10}(?:EX1[67]|FK14|GL6|NE23|NE36|NE45|OX11))/gi,
/(?<=NE64.{2,10})\bdown\sover\srocks\b/gi,
/\bdown\sover\srocks\b(?=.{2,10}NE64)/gi,

// DOWNHILL
/(?<=(?:SR5).{2,10})\bdownhill\b/gi,
/\bdownhill\b(?=.{2,10}(?:SR5))/gi,
/[\d-]+downhill\s(?:close|drive|view)\b/gi,
/(?<=(?:CT16|MK5|OL1).{2,10})\bdownhill\sclose\b/gi,
/\bdownhill\sclose\b(?=.{2,10}(?:CT16|MK5|OL1))/gi,
/(?<=(?:HU7).{2,10})\bdownhill\sdrive\b/gi,
/\bdownhill\sdrive\b(?=.{2,10}(?:HU7))/gi,
/(?<=(?:BN2).{2,10})\bdownhill\sview\b/gi,
/\bdownhill\sview\b(?=.{2,10}(?:BN2))/gi,

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

// ELBOW
/(?<=(?:DD7).{2,10})\belbow\b/gi,
/\belbow\b(?=.{2,10}(?:DD7))/gi,

// END
/[\d-]+the\send\b/gi,
/(?<=(?:DE15).{2,10})\bthe\send\b/gi,
/\bthe\send\b(?=.{2,10}(?:DE15))/gi,

// EYE
/(?<=(?:PE6|IP23|village|town).{2,10})\beye\b/gi,
/\beye\b(?=.{2,10}(?:PE6|IP23|village|town))/gi,
/(?<=(?:AB39).{2,10})\beye\smouth\b/gi,
/\beye\smouth\b(?=.{2,10}(?:AB39))/gi,
/(?<=(?:PE6|village).{2,10})\beye\sgreen\b/gi,
/\beye\sgreen\b(?=.{2,10}(?:PE6|village))/gi,

// FELL
/[\d-]+\sfell\s(?:close|drive|end|foot|head|hill|road|side|view|walk|way|wood)\b/gmi,
/\bray\sfell\b(?=.{2,10}(?:NE19|NE48))/gi,

// FENCE
/\bthe\sfence\b(?=.{2,10}(?:GL15|hamlet))/gi,
/(?<=(?:GL15|hamlet).{2,10})\bthe\sfence\b/gi,
/\bfence\b(?=.{2,10}(?:BB12|village))/gi,
/(?<=(?:BB12|village).{2,10})\bfence\b/gi,
/[\d-]+ring\sfence\b/gi,
/(?<=(?:GL15|LE12).{2,10})\bring\sfence\b/gi,
/\bring\sfence\b(?=.{2,10}(?:GL15|LE12))/gi,

// FIELD
/[\d-]+the\sfields?\b/gi,
/(?<=(?:LA12|WA8|TR20|OX13|LE14|NG34|NN14).{2,10})\bthe\sfield\b/gi,
/\bthe\sfield\b(?=.{2,10}(?:LA12|WA8|TR20|OX13|LE14|NG34|NN14))/gi,
/(?<=(?:BA12|BA22|BS22|CW5|DE4|LN4|ME3|NG21|NP20|NR16|NR31|NR9|PR7|SN3|WF3|WN[26]|WV8).{2,10})\bthe\sfields\b/gi,
/\bthe\sfields\b(?=.{2,10}(?:BA12|BA22|BS22|CW5|DE4|LN4|ME3|NG21|NP20|NR16|NR31|NR9|PR7|SN3|WF3|WN[26]|WV8))/gi,

// FINGERS
/\bthree\sfingers\b(?=.{2,10}(?:SY13|hamlet))/gi,
/(?<=(?:SY13|hamlet).{2,10})\bthree\sfingers\b/gi,

// FLOOR
/\bthe\sfloor\b(?=.{2,10}(?:KW17))/gi,
/(?<=(?:KW17).{2,10})\bthe\sfloor\b/gi,
/\bthe\sfloors\b(?=.{2,10}(?:AB44|island))/gi,
/(?<=(?:AB44|island).{2,10})\bthe\sfloors\b/gi,

// FOG
/\bfog\shorn\b(?=.{2,10}(?:ZE2))/gi,
/(?<=(?:ZE2).{2,10})\bfog\shorn\b/gi,

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

// FOOTPATH
/[\d-]+the\sfootpath\b/gi,
/\bthe\sfootpath\b(?=.{2,10}(?:CB23|NR14|SW15))/gi,
/(?<=(?:CB23|NR14|SW15).{2,10})\bthe\sfootpath\b/gi,

// FOREHEAD
/[\d-]+the\sforehead\b/gi,
/\bthe\sforehead\b(?=.{2,10}(?:RG7))/gi,
/(?<=(?:RG7).{2,10})\bthe\sforehead\b/gi,

// FOREST
/[\d-]+the\sforest\b/gi,
/\bthe\sforest\b(?=.{2,10}(?:CM1[34]|CT14|DD8|DG11|DG[28]|DL13|E1[17]|EX13|FK10|GL53|GU31|IP16|IP24|KT2[14]|LA8|LD3|NG33|NP4|NR24|OX25|PO9|SY16|SY21|SY[47]|TN26|TN8|TS15|WR9|WV16))/gi,
/(?<=(?:CM1[34]|CT14|DD8|DG11|DG[28]|DL13|E1[17]|EX13|FK10|GL53|GU31|IP16|IP24|KT2[14]|LA8|LD3|NG33|NP4|NR24|OX25|PO9|SY16|SY21|SY[47]|TN26|TN8|TS15|WR9|WV16).{2,10})\bthe\sforest\b/gi,

// FRISBY
/[\d-]+frisby\sclose\b/gi,
/\bfrisby\b(?=.{2,10}(?:LE7|hamlet))/gi,
/(?<=(?:LE7|hamlet).{2,10})\bfrisby\b/gi,
/\bfrisby\sclose\b(?=.{2,10}(?:PE6))/gi,
/(?<=(?:PE6).{2,10})\bfrisby\sclose\b/gi,

// FRONT
/[\d-]+the\sfront\b/gi,
/\bthe\sfront\b(?=.{2,10}(?:HP4|TS25|CT15|DL2))/gi,
/(?<=(?:HP4|TS25|CT15|DL2).{2,10})\bthe\sfront\b/gi,

// GARDEN
/[\d-]+the\sgardens?\b/gi,
/(?<=(?:N16|GL5|SN2)).{2,25}\bthe\sgarden\b/gi,
/\bthe\sgarden\b(?=.{2,20}(?:N16|GL5|SN2))/gi,
/(?<=(?:AB51|AL9|B23|B7[29]|BA1|BD16|BL[17]|BN4[12]|BR3|BS16|CB9|CM15|CM4|CV23|CV31|CV8|CW11|DE5|DH2|DL15|DL3|DN4|EH3[29]|EX22|GL50|GU10|GU24|HA[15]|HU[37]|HX1|IP3[01]|KA11|KT10|LA14|LA2|LE16|LL11|LL22|LS10|LS2[78]|MK18|NE25|NN16|NP16|NP2[56]|NP7|NR33|PE6|PO1[68]|PO[79]|RG8|RH12|RH20|SA9|SE22|SG16|SG[57]|SN1[14]|SN25|SN9|ST7|SY16|TQ13|TW14|WD17|YO14)).{2,25}\bthe\sgardens\b/gi,
/\bthe\sgardens\b(?=.{2,20}(?:AB51|AL9|B23|B7[29]|BA1|BD16|BL[17]|BN4[12]|BR3|BS16|CB9|CM15|CM4|CV23|CV31|CV8|CW11|DE5|DH2|DL15|DL3|DN4|EH3[29]|EX22|GL50|GU10|GU24|HA[15]|HU[37]|HX1|IP3[01]|KA11|KT10|LA14|LA2|LE16|LL11|LL22|LS10|LS2[78]|MK18|NE25|NN16|NP16|NP2[56]|NP7|NR33|PE6|PO1[68]|PO[79]|RG8|RH12|RH20|SA9|SE22|SG16|SG[57]|SN1[14]|SN25|SN9|ST7|SY16|TQ13|TW14|WD17|YO14))/gi,
/[\d-]+garden\s(?:close|hedge|terrace|view)\b/gi,
/(?<=(?:AL[15]|B45|B8|B93|BD12|BD20|BH25|BN1[56]|BN4[13]|BS22|BS9|CB6|CF83|CM3|CT14|CT2|DA14|DL13|DT[26]|E4|EN5|EX2|EX33|FY[36]|GL55|GL7|GU14|GU5|HA4|HP22|HR5|IP25|IP31|IP9|KT15|KT22|KT3|LE10|LE[23]|LS25|ME15|MK42|NE13|NG31|NR2[48]|NR3[25]|OL15|OX1[16]|PE27|PL[78]|PO11|RG2[057]|RH19|RH20|S43|S60|S80|SE12|SG[38]|SK10|SL6|SM[67]|SN8|SO43|SW15|SY16|TA2|TF2|TN12|TN26|TN40|TQ10|TS17|TW1[25]|UB5|WD17|WF15|WF5|WR11)).{2,25}\bgarden\sclose\b/gi,
/\bgarden\sclose\b(?=.{2,20}(?:AL[15]|B45|B8|B93|BD12|BD20|BH25|BN1[56]|BN4[13]|BS22|BS9|CB6|CF83|CM3|CT14|CT2|DA14|DL13|DT[26]|E4|EN5|EX2|EX33|FY[36]|GL55|GL7|GU14|GU5|HA4|HP22|HR5|IP25|IP31|IP9|KT15|KT22|KT3|LE10|LE[23]|LS25|ME15|MK42|NE13|NG31|NR2[48]|NR3[25]|OL15|OX1[16]|PE27|PL[78]|PO11|RG2[057]|RH19|RH20|S43|S60|S80|SE12|SG[38]|SK10|SL6|SM[67]|SN8|SO43|SW15|SY16|TA2|TF2|TN12|TN26|TN40|TQ10|TS17|TW1[25]|UB5|WD17|WF15|WF5|WR11))/gi,
/(?<=(?:BD22)).{2,25}\bgarden\sbeds\b/gi,
/\bgarden\sbeds\b(?=.{2,20}(?:BD22))/gi,
/(?<=(?:LU7)).{2,25}\bgarden\shedge\b/gi,
/\bgarden\shedge\b(?=.{2,20}(?:LU7))/gi,
/(?<=(?:BD23|CV35|DH8|EH4|FK[12]|FK10|FY4|HX7|LA1[25]|NE25|NE4[06]|NE66|PO5|PR7|SW1V|WF13|WF4)).{2,25}\bgarden\sterrace\b/gi,
/\bgarden\sterrace\b(?=.{2,20}(?:BD23|CV35|DH8|EH4|FK[12]|FK10|FY4|HX7|LA1[25]|NE25|NE4[06]|NE66|PO5|PR7|SW1V|WF13|WF4))/gi,
/(?<=(?:BD16|E7|SY11|WF15|WS15)).{2,25}\bgarden\sview\b/gi,
/\bgarden\sview\b(?=.{2,20}(?:BD16|E7|SY11|WF15|WS15))/gi,
/(?<=(?:LU7|KA19)).{2,25}\bgarden\spond\b/gi,
/\bgarden\spond\b(?=.{2,20}(?:LU7|KA19))/gi,
/(?<=(?:HR5|SY5|TF9|IV23)).{2,25}\bgarden\spool\b/gi,
/\bgarden\spool\b(?=.{2,20}(?:HR5|SY5|TF9|IV23))/gi,

// GATE
/[\d-]+the\sgates\b/gi,
/(?<=(?:DD8|village)).{2,25}\bthe\sgate\b/gi,
/\bthe\sgate\b(?=.{2,20}(?:DD8|village))/gi,
/(?<=(?:GU51|IP1)).{2,25}\bthe\sgates\b/gi,
/\bthe\sgates\b(?=.{2,20}(?:GU51|IP1))/gi,

// GEAR
/(?<=(?:TR18|island)).{2,25}\bthe\sgear\b/gi,
/\bthe\sgear\b(?=.{2,20}(?:TR18|island))/gi,

// GOAL
/(?<=(?:SA14|village)).{2,25}\bthe\sgoal\b/gi,
/\bthe\sgoal\b(?=.{2,20}(?:SA14|village))/gi,

// GOAT
/(?<=(?:TD5|TQ7)).{2,25}\bthe\sgoat\b/gi,
/\bthe\sgoat\b(?=.{2,20}(?:TD5|TQ7))/gi,

// GREEN
/(?<=(?:KY10|ZE3)).{2,25}\bgreen\sface\b/gi,
/\bgreen\sface\b(?=.{2,20}(?:KY10|ZE3))/gi,

// GRID
/(?<=(?:SA73)).{2,25}\bgrid\siron\b/gi,
/\bgrid\siron\b(?=.{2,20}(?:SA73))/gi,

// HANDBALL
/(?<=(?:EX35)).{2,25}\bhandball\b/gi,
/\bhandball\b(?=.{2,20}(?:EX35))/gi,

// HEAD
/\bthe\shead\b(?=.{2,20}(?:KW17|SA62|ZE2))/gi,
/\bthe\sheads\b(?=.{2,20}(?:FY6))/gi,
/[\d-]+the\sheads\b/gi,
/(?<=(?:CA12|LA11)).{2,25}\bthe\sheads\b/gi,
/\bthe\sheads\b(?=.{2,20}(?:CA12|LA11))/gi,

// HEALING
/(?<=(?:DN41|village|station)).{2,25}\bhealing\b/gi,
/\bhealing\b(?=.{2,20}(?:DN41|village|station))/gi,

// HILL
/(?<=(?:SA68|CV23|EX32|EX23|GL13|B74|SO15|HD9|hamlet|village)).{2,25}\bhill\b/gi,
/\bhill\b(?=.{2,20}(?:SA68|CV23|EX32|EX23|GL13|B74|SO15|HD9|hamlet|village))/gi,
/[\d-]+hill\s(?:close|tops?|view|walk)\b/gi,
/(?<=(?:B7[01]|B97|BB9|BD1[35]|BD21|BL3|BN1|BS20|CV[179]|CV10?|CW8|DE21|DE74|DH[39]|DL1[23]|DN12|EX31|HD[478]|HX2|IG10|IP31|KY16|LA23|LA7|LE9|LN5|LS29|M28|M46|NE21|NE70|NG16|NN9|NP16|NR25|NW11|OL4|PO36|PR4|S1[18]|S3[56]|S44|S61?|S75|SA14|SG7|SK6|SM3|SO42|ST6|TF1|TN1[27]|WA15|WF1[01]|WF[249]|WS1[25]).{2,10})\bhill\stop\b/gi,
/\bhill\stop\b(?=.{2,10}(?:B7[01]|B97|BB9|BD1[35]|BD21|BL3|BN1|BS20|CV[179]|CV10?|CW8|DE21|DE74|DH[39]|DL1[23]|DN12|EX31|HD[478]|HX2|IG10|IP31|KY16|LA23|LA7|LE9|LN5|LS29|M28|M46|NE21|NE70|NG16|NN9|NP16|NR25|NW11|OL4|PO36|PR4|S1[18]|S3[56]|S44|S61?|S75|SA14|SG7|SK6|SM3|SO42|ST6|TF1|TN1[27]|WA15|WF1[01]|WF[249]|WS1[25]))/gi,
/(?<=(?:BS34).{2,10})\bhill\stops\b/gi,
/\bhill\stops\b(?=.{2,10}(?:BS34))/gi,
/(?<=(?:BA21?|BB[14]|BS16|BS39|BS[89]|CB23|CB8|CF3[12]|CF3[358]|CF5|CF82|CH7|CM3|CV37|CV47|DA1|DD9|DE56|DE65|DH7|DT10|DT[239]|EX10|G66|G75|G82|GL15|GL7|GU32|HP1[78]|HP4|HR[67]|HX2|KY[57]|LE19|NN11|NP12|NP22|NP7|OX1[28]|OX3|PE33|RG7|RH4|SA10|SA4|SG19|SG[49]|SK1[05]|SK23|SL2|SN[57]|ST13|ST2|TA8|TD12|TN15|TN24|TS17|TS25|WA8|WR8|WS9|YO31|YO51|YO61).{2,10})\bhill\sview\b/gi,
/\bhill\sview\b(?=.{2,10}(?:BA21?|BB[14]|BS16|BS39|BS[89]|CB23|CB8|CF3[12]|CF3[358]|CF5|CF82|CH7|CM3|CV37|CV47|DA1|DD9|DE56|DE65|DH7|DT10|DT[239]|EX10|G66|G75|G82|GL15|GL7|GU32|HP1[78]|HP4|HR[67]|HX2|KY[57]|LE19|NN11|NP12|NP22|NP7|OX1[28]|OX3|PE33|RG7|RH4|SA10|SA4|SG19|SG[49]|SK1[05]|SK23|SL2|SN[57]|ST13|ST2|TA8|TD12|TN15|TN24|TS17|TS25|WA8|WR8|WS9|YO31|YO51|YO61))/gi,
/(?<=(?:PR25).{2,10})\bhill\swalk\b/gi,
/\bhill\swalk\b(?=.{2,10}(?:PR25))/gi,
/(?<=(?:AL5|B31|BA9|BD17|BH23|BR7|BS16|CB8|CF32|CH64|CO10|CR8|CV32|CV47|CW6|DA13|DE21|DE56|DE7|DL11|DT6|DY11|DY3|EN5|EX4|GL11|GL20|GU21|GU5|HA[17]|HD3|HP10|KT11|LA[89]|LE9|LL14|LU[37]|NG16|NG2|NN5|NP4|NR27|NW11|NW2|OL4|OX12|OX7|PE1|PE28|PL30|PL7|RG14|S65?|SO50|SP3|SS7|ST14|TN[68]|TR18|TS12|WF8|WN6|WR10|WS8).{2,10})\bhill\sclose\b/gi,
/\bhill\sclose\b(?=.{2,10}(?:AL5|B31|BA9|BD17|BH23|BR7|BS16|CB8|CF32|CH64|CO10|CR8|CV32|CV47|CW6|DA13|DE21|DE56|DE7|DL11|DT6|DY11|DY3|EN5|EX4|GL11|GL20|GU21|GU5|HA[17]|HD3|HP10|KT11|LA[89]|LE9|LL14|LU[37]|NG16|NG2|NN5|NP4|NR27|NW11|NW2|OL4|OX12|OX7|PE1|PE28|PL30|PL7|RG14|S65?|SO50|SP3|SS7|ST14|TN[68]|TR18|TS12|WF8|WN6|WR10|WS8))/gi,
/(?<=(?:TQ5|GU10).{2,10})\bhill\shouse\b/gi,
/\bhill\shouse\b(?=.{2,10}(?:TQ5|GU10))/gi,
/(?<=(?:LA22).{2,10})\bhill\sfell\b/gi,
/\bhill\sfell\b(?=.{2,10}(?:LA22))/gi,

// HOLDING
/[\d-]+holding\b/gi,
/(?<=(?:S81|worksop).{2,10})\bholding\b/gi,
/\bholding\b(?=.{2,10}(?:S81|worksop))/gi,
/[\d-]+holding\sstreet\b/gi,
/(?<=(?:ME8|WN2).{2,10})\bholding\sstreet\b/gi,
/\bholding\sstreet\b(?=.{2,10}(?:ME8|WN2))/gi,

// HOLE
/(?<=(?:CA10|NE48).{2,10})\bhole\b/gi,
/\bhole\b(?=.{2,10}(?:CA10|NE48))/gi,
/(?<=(?:BB1).{2,10})\bhole\shouse\b/gi,
/\bhole\shouse\b(?=.{2,10}(?:BB1))/gi,

// HORSE
/[\d-]+horse['‘’`s]?\s(?:close|head)\b/gi,
/(?<=(?:BD23|TD14|ZE2|AB56).{2,10})\bhorse\shead\b/gi,
/\bhorse\shead\b(?=.{2,10}(?:BD23|TD14|ZE2|AB56))/gi,
/(?<=(?:NR13).{2,10})\bhorses\shead\b/gi,
/\bhorses\shead\b(?=.{2,10}(?:NR13))/gi,
/(?<=(?:BA11|BD23).{2,10})\bhorses\sclose\b/gi,
/\bhorses\sclose\b(?=.{2,10}(?:BA11|BD23))/gi,
/(?<=(?:DH9|SA62|AB12).{2,10})\bhorse\sshoe\b/gi,
/\bhorse\sshoe\b(?=.{2,10}(?:DH9|SA62|AB12))/gi,

// HOSPITAL
/(?<=(?:GU15).{2,10})\bthe\shospital\b/gi,
/\bthe\shospital\b(?=.{2,10}(?:GU15))/gi,

// HULK
/(?<=(?:ZE2).{2,10})\bhulk\b/gi,
/\bhulk\b(?=.{2,10}(?:ZE2))/gi,

// IRELAND
/(?<=(?:ZE2|SG17|KW16|hamlet).{2,10})\bireland\b/gi,
/\bireland\b(?=.{2,10}(?:ZE2|SG17|KW16|hamlet))/gi,

// IRON
/(?<=(?:OX7).{2,10})\biron\sdown\b/gi,
/\biron\sdown\b(?=.{2,10}(?:OX7))/gi,
/[\d-]+iron['‘’`s]{1,2}\sclose\b/gi,
/(?<=(?:LE12|NP10).{2,10})\biron['‘’`s]{1,2}\sclose\b/gi,
/\biron['‘’`s]{1,2}\sclose\b(?=.{2,10}(?:LE12|NP10))/gi,
/[\d-]+iron\sgate\b/gi,
/(?<=(?:DE1).{2,10})\biron\sgate\b/gi,
/\biron\sgate\b(?=.{2,10}(?:DE1))/gi,
/(?<=(?:WR11|hamlet).{2,10})\biron\scross\b/gi,
/\biron\scross\b(?=.{2,10}(?:WR11|hamlet))/gi,
/(?<=(?:AB41).{2,10})\biron\sman\b/gi,
/\biron\sman\b(?=.{2,10}(?:AB41))/gi,
/(?<=(?:SA62).{2,10})\biron\spoint\b/gi,
/\biron\spoint\b(?=.{2,10}(?:SA62))/gi,

// JUMP
/(?<=(?:S74|barnsley)).{2,25}\bjump\b/gi,
/\bjump\b(?=.{2,20}(?:S74|barnsley))/gi,
/[\d-]+jump\sclose\b/gi,
/(?<=(?:PL6|robor|plymouth).{2,10})\bjump\sclose\b/gi,
/\bjump\sclose\b(?=.{2,10}(?:PL6|robor|plymouth))/gi,
/(?<=SO21).{2,25}\bwater\sjump\b/gi,
/\bwater\sjump\b(?=.{2,20}SO21)/gi,
/[\d-]+squirrel['‘’`s]{1,2}\sjump\b/gi,
/(?<=(?:SK9|alderley).{2,10})\bsquirrel['‘’`s]{1,2}\sjump\b/gi,
/\bsquirrel['‘’`s]{1,2}\sjump\b(?=.{2,10}(?:SK9|alderley))/gi,
/[\d-]+the\sjumps\b/gi,
/(?<=(?:MK43).{2,10})\bthe\sjumps\b/gi,
/\bthe\sjumps\b(?=.{2,10}(?:MK43))/gi,

// JACOB
/[\d-]+jacob['‘’`s]{1,2}\sladder\b/gi,
/(?<=(?:SY6|WR3|EX10).{2,10})\bjacob['‘’`s]{1,2}\sladder\b/gi,
/\bjacob['‘’`s]{1,2}\sladder\b(?=.{2,10}(?:SY6|WR3|EX10))/gi,

// KEEN
/(?<=(?:ZE[12]).{2,10})\bkeen\b/gi,
/\bkeen\b(?=.{2,10}(?:ZE[12]))/gi,

// KNUCKLES
/(?<=(?:ZE2).{2,10})\bbroken\sknuckles\b/gi,
/\bbroken\sknuckles\b(?=.{2,10}(?:ZE2))/gi,

// LADDER
/(?<=(?:PA70|PA67).{2,10})\bladder\b/gi,
/\bladder\b(?=.{2,10}(?:PA70|PA67))/gi,

// LAID
/(?<=(?:IV27|TS10).{2,10})\blaid\b/gi,
/\blaid\b(?=.{2,10}(?:IV27|TS10))/gi,

// LANDING
/(?<=(?:YO22).{2,10})\bthe\slanding\b/gi,
/\bthe\slanding\b(?=.{2,10}(?:YO22))/gi,

// LARGE
/[\d-]+large\sacres\b/gi,
/(?<=(?:PO20).{2,10})\blarge\sacres\b/gi,
/\blarge\sacres\b(?=.{2,10}(?:PO20))/gi,
/(?<=(?:YO14).{2,10})\blarge\srocks\b/gi,
/\blarge\srocks\b(?=.{2,10}(?:YO14))/gi,

// LOOP
/[\d-]+the\sloop\b/gi,
/(?<=(?:PO22|KW14).{2,10})\bthe\sloops?\b/gi,
/\bthe\sloops?\b(?=.{2,10}(?:PO22|KW14))/gi,

// LUNCH
/(?<=(?:CV35).{2,10})\bthe\slunch\b/gi,
/\bthe\slunch\b(?=.{2,10}(?:CV35))/gi,

// NECK
/(?<=(?:EX39|SA62).{2,10})\bthe\sneck\b/gi,
/\bthe\sneck\b(?=.{2,10}(?:EX39|SA62))/gi,
/(?<=(?:SA62|TR23).{2,10})\b(?:little|horse)\sneck\b/gi,
/\b(?:horse|little)\sneck\b(?=.{2,10}(?:SA62|TR23))/gi,
/(?<=(?:SA3).{2,10})\blow\sneck\b/gi,
/\blow\sneck\b(?=.{2,10}(?:SA3))/gi,

// OPENING
/[\d-]+the\sopening\b/gi,
/(?<=(?:SG4).{2,10})\bthe\sopening\b/gi,
/\bthe\sopening\b(?=.{2,10}(?:SG4))/gi,

// OTTER
/(?<=(?:KW17|ZE[23]).{2,10})\botters?\shad\b/gi,
/\botters?\shad\b(?=.{2,10}(?:KW17|ZE[23]))/gi,
/[\d-]+otters\sclose\b/gi,
/(?<=(?:BR5|PR2).{2,10})\botters\sclose\b/gi,
/\botters\sclose\b(?=.{2,10}(?:BR5|PR2))/gi,
/[\d-]+little\sotters\b/gi,
/(?<=(?:EX10).{2,10})\blittle\sotters\b/gi,
/\blittle\sotters\b(?=.{2,10}(?:EX10))/gi,

// OVEN
/(?<=(?:IP9|SA62|NG23).{2,10})\bthe\sovens?\b/gi,
/\bthe\sovens?\b(?=.{2,10}(?:IP9|SA62|NG23))/gi,

// PADDLE
/(?<=(?:ZE2).{2,10})\bthe\spaddle\b/gi,
/\bthe\spaddle\b(?=.{2,10}(?:ZE2))/gi,

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

// PASS
/[\d-]+the\spass\b/gi,
/(?<=(?:OL16)).{2,25}\bthe\spass\b/gi,
/\bthe\spass\b(?=.{2,20}(?:OL16))/gi,

// PATCH
/[\d-]+the\spatch(?:es)?\b/gi,
/(?<=(?:TN13|PE31|CF64|CF72|GL17)).{2,25}\bthe\spatch(?:es)?\b/gi,
/\bthe\spatch\b(?=.{2,20}(?:TN13|PE31|CF64|CF72|GL17))/gi,

// PATH
/[\d-]+the\spath\b/gi,
/\bthe\spath\b(?=.{2,20}(?:CO7|EX39KY1|SW19|KA6|FK7))/gi,
/(?<=(?:CO7|EX39KY1|SW19|KA6|FK7)).{2,25}\bthe\spath\b/gi,

// PATHWAY
/[\d-]+the\spathway\b/gi,
/\bthe\spathway\b(?=.{2,20}(?:GU23|WD19|WD7|CT10|MK45))/gi,
/(?<=(?:GU23|WD19|WD7|CT10|MK45)).{2,25}\bthe\spathway\b/gi,

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

// PIECE
/[\d-]+the\spieces?\b/gi,
/[\d-]+piece\s(?:close|end)\b/gi,
/\bpiece\b(?=.{2,20}(?:TR16|hamlet))/gi,
/(?<=(?:TR16|hamlet)).{2,25}\bpiece\b/gi,
/\bpiece\sclose\b(?=.{2,20}(?:OX27))/gi,
/(?<=(?:OX27)).{2,25}\bpiece\sclose\b/gi,
/\bpiece\send\b(?=.{2,20}(?:S35))/gi,
/(?<=(?:S35)).{2,25}\bpiece\send\b/gi,
/\bpiece\swood\b(?=.{2,20}(?:TN14))/gi,
/(?<=(?:TN14)).{2,25}\bpiece\swood\b/gi,
/\bpiece\sbottom\b(?=.{2,20}(?:TR4))/gi,
/(?<=(?:TR4)).{2,25}\bpiece\sbottom\b/gi,
/\bthe\spieces?\b(?=.{2,20}(?:GL3|NN[67]|TA16|OX18))/gi,
/(?<=(?:GL3|NN[67]|TA16|OX18)).{2,25}\bthe\spieces?\b/gi,

// PILL
/[\d-]+the\spill\b/gi,
/\bpill\b(?=.{2,20}(?:village|BS20|SA73))/gi,
/(?<=(?:village|BS20|SA73)).{2,25}\bpill\b/gi,
/\bthe\spill\b(?=.{2,20}(?:NP26))/gi,
/(?<=(?:NP26)).{2,25}\bthe\spill\b/gi,

// PILLAR
/\bpillar\b(?=.{2,20}(?:KA26|CA23))/gi,
/(?<=(?:KA26|CA23)).{2,25}\bpillar\b/gi,
/\bthe\spillar\b(?=.{2,20}(?:ZE2))/gi,
/(?<=(?:ZE2)).{2,25}\bthe\spillar\b/gi,

// PILLOW
/\bthe\spillow\b(?=.{2,20}(?:KY10))/gi,
/(?<=(?:KY10)).{2,25}\bthe\spillow\b/gi,

// PILOT
/\bthe\spilot\b(?=.{2,20}(?:KA19))/gi,
/(?<=(?:KA19)).{2,25}\bthe\spilot\b/gi,

// PLACE
/[\d-]+the\splace\b/gi,
/\bplace\sfell\b(?=.{2,10}(?:CA11|hill))/gi,
/\bthe\splace\b(?=.{2,20}(?:CT4))/gi,
/(?<=(?:CT4)).{2,25}\bthe\splace\b/gi,

// PLANK
/[\d-]+the\splanks\b/gi,
/\bthe\splanks\b(?=.{2,20}(?:SN3))/gi,
/(?<=(?:SN3)).{2,25}\bthe\splanks\b/gi,

// PLANT
/[\d-]+plant\sclose\b/gi,
/\bplant\sclose\b(?=.{2,20}(?:TF4|SO51|M33))/gi,
/(?<=(?:TF4|SO51|M33)).{2,25}\bplant\sclose\b/gi,

// PLAYGROUND
/[\d-]+playground(?:\sclose)?\b/gi,
/\bplayground\b(?=.{2,20}(?:LS12))/gi,
/(?<=(?:LS12)).{2,25}\bplayground\b/gi,
/\bplayground\sclose\b(?=.{2,20}(?:BR3))/gi,
/(?<=(?:BR3)).{2,25}\bplayground\sclose\b/gi,

// POINT
/[\d-]+the\spoint\b/gi,
/\bthe\spoint\b(?=.{2,20}(?:AB43|EX8|IP17|KW16|LE16|LL65|NG3|NR31|PA28|PO1|S60|SA62|SA73|TQ14|TR24|WF2))/gi,
/(?<=(?:AB43|EX8|IP17|KW16|LE16|LL65|NG3|NR31|PA28|PO1|S60|SA62|SA73|TQ14|TR24|WF2)).{2,25}\bthe\spoint\b/gi,

// POND
/[\d-]+the\spond\b/gi,
/\bthe\spond\b(?=.{2,20}(?:CB6|TW9|HR2))/gi,
/(?<=(?:CB6|TW9|HR2)).{2,25}\bthe\spond\b/gi,

// POOL
/(?<=(?:TR15|EX20|redruth)).{2,25}\bpool\b/gi,
/\bpool\b(?=.{2,20}(?:TR15|EX20|redruth))/gi,
/\bthe\spools?\b(?=.{2,20}(?:DE[17]3|KW1[467]|KY10|LE3|NG11|NR23|OX17|PL26|ST19|SY17|TD12|TF9|WV[48]|ZE2))/gi,
/(?<=(?:DE[17]3|KW1[467]|KY10|LE3|NG11|NR23|OX17|PL26|ST19|SY17|TD12|TF9|WV[48]|ZE2)).{2,25}\bthe\spools?\b/gi,

// POST
/[\d-]+the\sposts\b/gi,
/\bthe\sposts\b(?=.{2,20}(?:NG12))/gi,
/(?<=(?:NG12)).{2,25}\bthe\sposts\b/gi,

// POT
/\bthe\spot\b(?=.{2,10}(?:AB43|AB55|IV19|TD12|TD6))/gi,

// POUND
/[\d-]+the\spound\b/gi,
/\bthe\spound\b(?=.{2,20}(?:BN20|BS32|BS40|GL18|GL54|KT13|MK45|NN13|NN7|OX1[25]|PE27|PE31|RH15|RH4|SA72|SL6|SN15|SN7|TN12|TN33|TR12))/gi,
/(?<=(?:BN20|BS32|BS40|GL18|GL54|KT13|MK45|NN13|NN7|OX1[25]|PE27|PE31|RH15|RH4|SA72|SL6|SN15|SN7|TN12|TN33|TR12)).{2,25}\bthe\spound\b/gi,

// RACE
/[\d-]+the\srace(?:course|ground)?\b/gi,
/\bthe\srace\b(?=.{2,20}(?:SK9|GU29|EX39))/gi,
/(?<=(?:SK9|GU29|EX39).{2,25})\bthe\srace\b/gi,
/\bthe\sracecourse\b(?=.{2,20}(?:TS22))/gi,
/(?<=(?:TS22).{2,25})\bthe\sracecourse\b/gi,
/\bthe\sraceground\b(?=.{2,20}(?:PE11))/gi,
/(?<=(?:PE11).{2,25})\bthe\sraceground\b/gi,

// RACK
/[\d-]+the\sracks?\b/gi,
/\bthe\sracks?\b(?=.{2,20}(?:CA10|DY12))/gi,
/(?<=(?:CA10|DY12).{2,25})\bthe\sracks?\b/gi,

// RAGS
/\bthe\srags\b(?=.{2,20}(?:TQ7))/gi,
/(?<=(?:TQ7).{2,25})\bthe\srags\b/gi,

// RAMP
/[\d-]+the\sramp\b/gi,
/\bthe\sramp\b(?=.{2,20}(?:NP26))/gi,
/(?<=(?:NP26).{2,25})\bthe\sramp\b/gi,

// RANGE
/[\d-]+the\srange\b/gi,
/\bthe\srange\b(?=.{2,20}(?:GU5|NG33|B74|LE15|GL2|HD8|PE19))/gi,
/(?<=(?:GU5|NG33|B74|LE15|GL2|HD8|PE19).{2,25})\bthe\srange\b/gi,

// RASH
/\bthe\srash\b(?=.{2,20}(?:LS24|YO26))/gi,
/(?<=(?:LS24|YO26).{2,25})\bthe\srash\b/gi,

// RAY
/[\d-]+the\sray\b/gi,
/\bthe\sray\b(?=.{2,20}(?:CM1))/gi,
/(?<=(?:CM1).{2,25})\bthe\sray\b/gi,

// RED
/[\d-]+red\b/gi,
/\bred\b(?=.{2,20}(?:M50))/gi,
/(?<=(?:M50).{2,25})\bred\b/gi,

// REST
/[\d-]+the\srest\b/gi,
/\bthe\srest\b(?=.{2,20}(?:LL14|CF36))/gi,
/(?<=(?:LL14|CF36).{2,25})\bthe\srest\b/gi,

// RIVER
/\bthe\sriver\b(?=.{2,20}(?:HP18|WR15))/gi,
/(?<=(?:HP18|WR15).{2,25})\bthe\sriver\b/gi,

// ROAD
/\bthe\sroad\b(?=.{2,20}(?:TR21))/gi,
/(?<=(?:TR21).{2,25})\bthe\sroad\b/gi,

// ROADSIDE
/[\d-]+roadside\b/gi,
/\broadside\b(?=.{2,20}(?:ZE2|NR27|G67|KW12|DD10|hamlet))/gi,
/(?<=(?:ZE2|NR27|G67|KW12|DD10|hamlet).{2,25})\broadside\b/gi,

// ROCK
/[\d-]+the\srocks?\b/gi,
/\bthe\srock\b(?=.{2,20}(?:BS4|BL9|DD11|DE45|EX31|IV32|NG32|OX15|OL8|TF3|TF11|WA6|WV6))/gi,
/(?<=(?:BS4|BL9|DD11|DE45|EX31|IV32|NG32|OX15|OL8|TF3|TF11|WA6|WV6).{2,25})\bthe\srock\b/gi,
/\bthe\srocks\b(?=.{2,20}(?:GL16|ST21|SY3|BA4|DE4|RH19))/gi,
/(?<=(?:GL16|ST21|SY3|BA4|DE4|RH19).{2,25})\bthe\srocks\b/gi,
/(?<=(?:KW17).{2,10})\brock\sladder\b/gi,
/\brock\sladder\b(?=.{2,10}(?:KW17))/gi,

// ROW
/[\d-]+the\srows?\b/gi,
/\bthe\srows\b(?=.{2,20}(?:CB8|BS22))/gi,
/(?<=(?:CB8|BS22).{2,25})\bthe\srows\b/gi,
/\bthe\srow\b(?=.{2,20}(?:AB43|BS35|CB6|CO7|CT4|CV7|DT10|GL9|HP14|IP29|KY15|LA5|NG13|OX2[09]|PE33|PL1[25]|SP5|SY6|TD11|TD[23]))/gi,
/(?<=(?:AB43|BS35|CB6|CO7|CT4|CV7|DT10|GL9|HP14|IP29|KY15|LA5|NG13|OX2[09]|PE33|PL1[25]|SP5|SY6|TD11|TD[23]).{2,25})\bthe\srow\b/gi,

// RUG
/(?<=(?:ZE2|island).{2,25})\brug\b/gi,
/\brug\b(?=.{1,20}(?:ZE2|island))/gi,

// RUGBY
/(?<=(?:addr|CV21|dr[io]ve|live|stay|town|warwick).{2,25})\brugby\b/gi,
/\brugby\b(?=.{1,20}(?:addr|CV21|warwick))/gi,

// SAND
/\bsand\b(?=.{2,20}(?:BS28|IV22|hamlet))/gi,
/(?<=(?:BS28|IV22|hamlet).{2,25})\bsand\b/gi,
/[\d-]+sand\s(?:banks?|beds|close|dune\swalk|furrows|hill|martins|path|pits)\b/gi,
/\bsand\sbanks?\b(?=.{2,20}(?:WS3|PE13|BL1|SA62))/gi,
/(?<=(?:WS3|PE13|BL1|SA62).{2,25})\bsand\sbanks?\b/gi,
/\bsand\sbeds\b(?=.{2,20}(?:BD13|CA12|LA6|DL11))/gi,
/(?<=(?:BD13|CA12|LA6|DL11).{2,25})\bsand\sbeds\b/gi,
/\bsand\scheek\b(?=.{2,20}(?:AB56|beach))/gi,
/(?<=(?:AB56|beach).{2,25})\bsand\scheek\b/gi,
/\bsand\sclose\b(?=.{2,20}(?:SO51))/gi,
/(?<=(?:SO51).{2,25})\bsand\sclose\b/gi,
/\bsand\swalk\b(?=.{2,20}(?:IV20))/gi,
/(?<=(?:IV20).{2,25})\bsand\swalk\b/gi,
/\bsand\sfurrows\b(?=.{2,20}(?:PE9))/gi,
/(?<=(?:PE9).{2,25})\bsand\sfurrows\b/gi,
/\bsand\shill\b(?=.{2,20}(?:AB36|BA12|BS28|BS4|CA13|CB21|CF44|CM7|CO10|DL13|DL[78]|DN8|FK[89]|GU14|HG5|HU1[17]|LS24|NE47|NR25|PL18|PO30|SN[67]|TS17|YO19|YO42|YO60))/gi,
/(?<=(?:AB36|BA12|BS28|BS4|CA13|CB21|CF44|CM7|CO10|DL13|DL[78]|DN8|FK[89]|GU14|HG5|HU1[17]|LS24|NE47|NR25|PL18|PO30|SN[67]|TS17|YO19|YO42|YO60).{2,25})\bsand\shill\b/gi,
/\bsand\shills\b(?=.{2,20}(?:LN1|KW14))/gi,
/(?<=(?:LN1|KW14).{2,25})\bsand\shills\b/gi,
/\bsand\shole\b(?=.{2,20}(?:LA10|YO15|YO43|AB35))/gi,
/(?<=(?:LA10|YO15|YO43|AB35).{2,25})\bsand\shole\b/gi,
/\bsand\sholes\b(?=.{2,20}(?:DT5))/gi,
/(?<=(?:DT5).{2,25})\bsand\sholes\b/gi,
/\bsand\sholes\b(?=.{2,20}(?:RG42))/gi,
/(?<=(?:RG42).{2,25})\bsand\sholes\b/gi,
/\bsand\spath\b(?=.{2,20}(?:CB6))/gi,
/(?<=(?:CB6).{2,25})\bsand\spath\b/gi,
/\bsand\spits\b(?=.{2,20}(?:B1|HR6))/gi,
/(?<=(?:B1|HR6).{2,25})\bsand\spits\b/gi,

// SCHOOL
/[\d-]+\sschool\s(?:annexe|approach|belt|chase|close|dr[io]ve|end|field\sclose|fields?)\b/gi,
/[\d-]+\sschool\s(?:gardens|green|houses?|place|rise|rough|row|terrace|view|walk|yard)\b/gi,

// SCORE
/[\d-]+the\sscore\b/gi,
/\bscore\b(?=.{2,20}(?:ZE2))/gi,
/(?<=(?:ZE2).{2,25})\bscore\b/gi,
/\bthe\sscore\b(?=.{2,20}(?:WA9|BS40|NR34))/gi,
/(?<=(?:WA9|BS40|NR34).{2,25})\bthe\sscore\b/gi,

// SEAT
/\bthe\seat\b(?=.{2,20}(?:ML12))/gi,
/(?<=(?:ML12).{2,25})\bthe\sseat\b/gi,

// SETTER
/\bsetter\b(?=.{2,20}(?:ZE2|hamlet))/gi,
/(?<=(?:ZE2|hamlet).{2,25})\bsetter\b/gi,

// SHELL
/\bthe\sshell\b(?=.{2,20}(?:KW17))/gi,
/(?<=(?:KW17).{2,25})\bthe\sshell\b/gi,

// SHIN
/\bthe\sshin\b(?=.{2,20}(?:DG13))/gi,
/(?<=(?:DG13).{2,25})\bthe\sshin\b/gi,

// SHOE
/\bthe\sshoe\b(?=.{2,20}(?:SN14|hamlet))/gi,
/(?<=(?:SN14|hamlet).{2,25})\bthe\sshoe\b/gi,

// SHOP
/\bthe\sshops\b(?=.{2,20}(?:KW14))/gi,
/(?<=(?:KW14).{2,25})\bthe\sshops\b/gi,

// SHORT
/[\d-]+the\sshort\b/gi,
/\bthe\sshort\b(?=.{2,20}(?:RG8))/gi,
/(?<=(?:RG8).{2,25})\bthe\sshort\b/gi,

// SIBLING
/[\d-]+the\ssiblings\b/gi,
/\bthe\ssiblings\b(?=.{2,20}(?:SO19))/gi,
/(?<=(?:SO19).{2,25})\bthe\ssiblings\b/gi,

// SIDE
/[\d-]+side(?:\s(?:gates?|lane|road|row|street))?\b/gi,
/\bside\b(?=.{2,20}(?:NE1))/gi,
/(?<=(?:NE1).{2,25})\bside\b/gi,
/\bside\sdowns\b(?=.{2,20}(?:EX5))/gi,
/(?<=(?:EX5).{2,25})\bside\sdowns\b/gi,
/\bside\sfell\b(?=.{2,20}(?:CA6))/gi,
/(?<=(?:CA6).{2,25})\bside\sfell\b/gi,
/\bside\sgates?\b(?=.{2,20}(?:LA22|YO12))/gi,
/(?<=(?:LA22|YO12).{2,25})\bside\sgates?\b/gi,
/\bside\slane\b(?=.{2,20}(?:DL13|DN33|HD3|NG22|CW6))/gi,
/(?<=(?:DL13|DN33|HD3|NG22|CW6).{2,25})\bside\slane\b/gi,
/\bside\sroad\b(?=.{2,20}(?:UB9|DL8|E17))/gi,
/(?<=(?:UB9|DL8|E17).{2,25})\bside\sroad\b/gi,
/\bside\srow\b(?=.{2,20}(?:NG24))/gi,
/(?<=(?:NG24).{2,25})\bside\srow\b/gi,
/\bside\sstreet\b(?=.{2,20}(?:NG32|M11|PH2|OL8))/gi,
/(?<=(?:NG32|M11|PH2|OL8).{2,25})\bside\sstreet\b/gi,
/\bside\swood\b(?=.{2,20}(?:DE6|CA22|DG1|TA23))/gi,
/(?<=(?:DE6|CA22|DG1|TA23).{2,25})\bside\swood\b/gi,

// SKATE
/\bthe\sskate\b(?=.{2,20}(?:ZE2))/gi,
/(?<=(?:ZE2).{2,25})\bthe\sskate\b/gi,

// SLAP
/\bthe\sslap\b(?=.{2,20}(?:TD5|KW14|TD12))/gi,
/(?<=(?:TD5|KW14|TD12).{2,25})\bthe\sslap\b/gi,

// SLIDE
/[\d-]+the\sslides\b/gi,
/\bthe\sslide\b(?=.{2,20}(?:TQ6))/gi,
/(?<=(?:TQ6).{2,25})\bthe\sslide\b/gi,
/\bthe\sslides\b(?=.{2,20}(?:TN38))/gi,
/(?<=(?:TN38).{2,25})\bthe\sslides\b/gi,
/\b(?:bed|red)\sslide\b(?=.{2,20}(?:EX31|SR8))/gi,
/(?<=(?:EX31|SR8).{2,25})\b(?:bed|red)\sslide\b/gi,

// SLING
/[\d-]+the\ssling\b/gi,
/\bthe\ssling\b(?=.{2,20}(?:DY2|GL54))/gi,
/(?<=(?:DY2|GL54).{2,25})\bthe\ssling\b/gi,

// SLIP
/[\d-]+the\sslip\b/gi,
/\bthe\sslip\b(?=.{2,20}(?:TN16|PE36|MK43|NN6))/gi,
/(?<=(?:TN16|PE36|MK43|NN6).{2,25})\bthe\sslip\b/gi,

// SLOG
/\bslog\b(?=.{2,20}(?:ZE2))/gi,
/(?<=(?:ZE2).{2,25})\bslog\b/gi,

// SNAP
/\b(?:the\s)?snap\b(?=.{2,20}(?:ZE2))/gi,
/(?<=(?:ZE2).{2,25})\b(?:the\s)snap\b/gi,
/\bsnap\swood\b(?=.{2,20}(?:GU33))/gi,
/(?<=(?:GU33).{2,25})\bsnap\swood\b/gi,

// SPLASH
/[\d-]+the\ssplash\b/gi,
/\bthe\ssplash\b(?=.{2,20}(?:RG42|GL8))/gi,
/(?<=(?:RG42|GL8).{2,25})\bthe\ssplash\b/gi,

// SPORTS
/\bsports\sground\b(?=.{2,20}(?:S8))/gi,
/(?<=(?:S8).{2,25})\bsports\sground\b/gi,

// STAB
/\bstab\b(?=.{2,20}(?:ZE2|island))/gi,
/(?<=(?:ZE2|island).{2,25})\bstab\b/gi,

// STAIRS
/(?<=(?:CF64|island).{2,25})\bthe\sstairs\b/gi,
/\bthe\sstairs\b(?=.{2,20}(?:CF64|island))/gi,
/[\d-]+new\sstairs\b/gi,
/\bnew\sstairs\b(?=.{2,20}(?:ME4))/gi,
/(?<=(?:ME4).{2,25})\bnew\sstairs\b/gi,
/\bold\sstairs\b(?=.{2,20}(?:YO15|cliff))/gi,
/(?<=(?:YO15|cliff).{2,25})\bold\sstairs\b/gi,

// STICK
/\bthe\sstick\b(?=.{2,20}(?:KW17))/gi,
/(?<=(?:KW17).{2,25})\bthe\sstick\b/gi,

// STOVE
/\bstove\b(?=.{2,20}(?:ZE2|KW17))/gi,
/(?<=(?:ZE2|KW17).{2,25})\bstove\b/gi,

// SUDDEN
/\bsudden\b(?=.{2,20}(?:OL11))/gi,
/(?<=(?:OL11).{2,25})\bsudden\b/gi,

// SWALLOW
/\bswallow\b(?=.{2,20}(?:LN7|village))/gi,
/(?<=(?:LN7|village).{2,25})\bswallow\b/gi,
/[\d-]+swallow\sclose\b/gi,
/\bswallow\sclose\b(?=.{2,20}(?:B12|BA12|BA3|BH17|BH20|BN10|BN23|CB24|CF33|CO12|CO2|CT9|CV37|DA[89]|DE3|DH7|DL1|DN21|DY2|EX23|EX32|FY[35]|GU34|GU46|GU8|HU18|IP11|L12|L27|L33|LA[59]|LE12|LS1[27]|LS21|LU4|MK18|MK4[56]|NE63|NG18|NG34|NG6|NN1[35]|NN[48]|NR31|OX26|OX4|PE24|PE7|PO30|PO9|RG22|RG31|RM16|S7[05]|SE14|SG17|SK1[05]|SO40|SP9|SS6|ST14|ST[37]|TS14|TS26|TW18|WA3|WD23|WD3|WR5|WS1[025]))/gi,
/(?<=(?:B12|BA12|BA3|BH17|BH20|BN10|BN23|CB24|CF33|CO12|CO2|CT9|CV37|DA[89]|DE3|DH7|DL1|DN21|DY2|EX23|EX32|FY[35]|GU34|GU46|GU8|HU18|IP11|L12|L27|L33|LA[59]|LE12|LS1[27]|LS21|LU4|MK18|MK4[56]|NE63|NG18|NG34|NG6|NN1[35]|NN[48]|NR31|OX26|OX4|PE24|PE7|PO30|PO9|RG22|RG31|RM16|S7[05]|SE14|SG17|SK1[05]|SO40|SP9|SS6|ST14|ST[37]|TS14|TS26|TW18|WA3|WD23|WD3|WR5|WS1[025]).{2,25})\bswallow\sclose\b/gi,
/[\d-]+swallow\send\b/gi,
/\bswallow\send\b(?=.{2,20}(?:AL7|welwyn))/gi,
/(?<=(?:AL7|welwyn).{2,25})\bswallow\send\b/gi,
/[\d-]+swallows\b/gi,
/\bswallows\b(?=.{2,20}(?:CM17|harlow))/gi,
/(?<=(?:CM17|harlow).{2,25})\bswallows\b/gi,
/[\d-]+the\sswallows\b/gi,
/\bthe\sswallows\b(?=.{2,20}(?:BN10|BS22|AL7|NE28|CM11))/gi,
/(?<=(?:BN10|BS22|AL7|NE28|CM11).{2,25})\bthe\sswallows\b/gi,
/[\d-]+swallows\send\b/gi,
/\bswallows\send\b(?=.{2,20}(?:PL9))/gi,
/(?<=(?:PL9).{2,25})\bswallows\send\b/gi,
/[\d-]+swallows\sclose\b/gi,
/\bswallows\sclose\b(?=.{2,20}(?:B61|BN15|IP12|SM1|LE3|WS3))/gi,
/(?<=(?:B61|BN15|IP12|SM1|LE3|WS3).{2,25})\bswallows\sclose\b/gi,
/\bswallows\scross\b(?=.{2,20}(?:CM15|hamlet))/gi,
/(?<=(?:CM15|hamlet).{2,25})\bswallows\scross\b/gi,

// TABLE
/\bthe\stable\b(?=.{2,20}(?:SA62))/gi,
/(?<=(?:SA62).{2,25})\bthe\stable\b/gi,

// TARMAC
/[\d-]+tarmac\sroad\b/gi,
/\btarmac\sroad\b(?=.{2,20}(?:WV4))/gi,
/(?<=(?:WV4).{2,25})\btarmac\sroad\b/gi,

// THORN
/[\d-]+the\sthorn\b/gi,
/[\d-]+thorn\sclose\b/gi,
/\bthorn\b(?=.{2,20}(?:LD8|LU5|hamlet|village))/gi,
/(?<=(?:LD8|LU5|hamlet|village).{2,25})\bthorn\b/gi,
/\bthe\sthorn\b(?=.{2,20}(?:HR2|NE68))/gi,
/(?<=(?:HR2|NE68).{2,25})\bthe\sthorn\b/gi,
/\bthorn\sclose\b(?=.{2,20}(?:BD18|BR2|BS22|BS37|CB7|CV21|DE22|DL16|EX1|GU10|GU3[14]|ME5|NE13|NN16|OL10|PL15|RG41|SK17|SO50|TQ12|TS17|UB5|WA5|WS1[05]))/gi,
/(?<=(?:BD18|BR2|BS22|BS37|CB7|CV21|DE22|DL16|EX1|GU10|GU3[14]|ME5|NE13|NN16|OL10|PL15|RG41|SK17|SO50|TQ12|TS17|UB5|WA5|WS1[05]).{2,25})\bthorn\sclose\b/gi,

// TOE
/\bthe\stoe\b(?=.{2,20}(?:ZE2))/gi,
/(?<=(?:ZE2).{2,25})\bthe\stoe\b/gi,

// TONGUE
/\btongue\b(?=.{2,20}(?:CA12|CA20|DL1[13]|HX7|ML12|IV27|KA26|DN14|village))/gi,
/(?<=(?:CA12|CA20|DL1[13]|HX7|ML12|IV27|KA26|DN14|village).{2,25})\btongue\b/gi,
/\bthe\stongue\b(?=.{2,20}(?:CA1[12]|CA9|DD9|DE6|DG10|DG4|EH46|HG3|KA24|KW16|LA10|LA2[23]|ML12|NE71|TD[59]))/gi,
/(?<=(?:CA1[12]|CA9|DD9|DE6|DG10|DG4|EH46|HG3|KA24|KW16|LA10|LA2[23]|ML12|NE71|TD[59]).{2,25})\bthe\stongue\b/gi,
/(?<=(?:NE47).{2,25})\bscabby\stongue\b/gi,
/\bscabby\stongue\b(?=.{2,20}(?:NE47))/gi,
/(?<=(?:NE47).{2,25})\b(?:emily|rough|scabby)\stongue\b/gi,
/\b(?:emily|rough|scabby)\stongue\b(?=.{2,20}(?:NE47))/gi,
/(?<=(?:CA1[01]).{2,25})\b(?:black|lucy['‘’`s]{1,2})\stongue\b/gi,
/\b(?:black|lucy['‘’`s]{1,2})\stongue\b(?=.{2,20}(?:CA1[10]))/gi,
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
/(?<=(?:TD9).{2,25})\bjenny['‘’`s]{1,2}\stongue\b/gi,
/\bjenny['‘’`s]{1,2}\stongue\b(?=.{2,20}(?:TD9))/gi,
/(?<=(?:KA17|LA22).{2,25})\bgreen\stongue\b/gi,
/\bgreen\stongue\b(?=.{2,20}(?:KA17|LA22))/gi,
/(?<=(?:AB54).{2,25})\bcorbie['‘’`]?\stongue\b/gi,
/\bcorbie['‘’`]?\stongue\b(?=.{2,20}(?:AB54))/gi,

// TOP
/[\d-]+top\s(?:park|row|side|wood)\b/gi,
/(?<=(?:SL9|LE14|BR3|LN5)).{2,25}\btop\spark\b/gi,
/\btop\spark\b(?=.{2,20}(?:SL9|LE14|BR3|LN5))/gi,
/(?<=(?:LA8|WR15|CV3|SY5)).{2,25}\btop\spool\b/gi,
/\btop\spool\b(?=.{2,20}(?:LA8|WR15|CV3|SY5))/gi,
/(?<=(?:S75)).{2,25}\btop\srow\b/gi,
/\btop\srow\b(?=.{2,20}(?:S75))/gi,
/(?<=(?:S35)).{2,25}\btop\sside\b/gi,
/\btop\sside\b(?=.{2,20}(?:S35))/gi,
/(?<=(?:BA12|BA3|CA1[03]|CA7|DE6|DN15|DN2[012]|EX18|IP2[12]|LA8|LS25|SY22|YO41)).{2,25}\btop\swood\b/gi,
/\btop\swood\b(?=.{2,20}(?:BA12|BA3|CA1[03]|CA7|DE6|DN15|DN2[012]|EX18|IP2[12]|LA8|LS25|SY22|YO41))/gi,

// TOTE
/(?<=(?:IV51|hamlet).{2,25})\btote\b/gi,
/\btote\b(?=.{2,20}(?:IV51|hamlet))/gi,

// TOWN
/[\d-]+the\stown\b/gi,
/(?<=(?:DE21|EN2|OX15|PE19|DE4|TR23|WF12|village)).{2,25}\bthe\stown\b/gi,
/\bthe\stown\b(?=.{2,20}(?:DE21|EN2|OX15|PE19|DE4|TR23|WF12|village))/gi,

// WALK
/[\d-]+walk\sclose\b/gi,
/\bwalk\sclose\b(?=.{2,20}(?:DE72))/gi,
/(?<=(?:DE72).{2,25})\bwalk\sclose\b/gi,
/\bwalk\sspring\b(?=.{2,20}(?:LU2))/gi,
/(?<=(?:LU2).{2,25})\bwalk\sspring\b/gi,

// WALL
/[\d-]+the\swall\b/gi,
/\bthe\swall\b(?=.{2,20}(?:ME10|TA9))/gi,
/(?<=(?:ME10|TA9).{2,25})\bthe\swall\b/gi,

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
/\bwater\sswallows\b(?=.{2,20}(?:YO62|lake))/gi,
/(?<=(?:YO62|lake).{2,25})\bwater\sswallows\b/gi,
/[\d-]+water\stower\sclose\b/gi,
/\bwater\stower\sclose\b(?=.{2,20}(?:UB8))/gi,
/(?<=(?:UB8).{2,25})\bwater\stower\sclose\b/gi,
/[\d-]+water\sview\sclose\b/gi,
/\bwater\sview\sclose\b(?=.{2,20}(?:DA6))/gi,
/(?<=(?:DA6).{2,25})\bwater\sview\sclose\b/gi,
/[\d-]+water\sview\b/gi,
/\bwater\sview\b(?=.{2,20}(?:LS18|WF10|PE8))/gi,
/(?<=(?:LS18|WF10|PE8).{2,25})\bwater\sview\b/gi,
/[\d-]+water['‘’`s]{1,2}\sedge\b/gi,
/\bwater['‘’`s]{1,2}\sedge\b(?=.{2,20}(?:SO30|BL4|PR2))/gi,
/(?<=(?:SO30|BL4|PR2).{2,25})\bwater['‘’`s]{1,2}\sedge\b/gi,

// WAY
/[\d-]+the\sway\b/gi,
/\bthe\sway\b(?=.{2,20}(?:LA3|RH2|BN16|SG8))/gi,
/(?<=(?:LA3|RH2|BN16|SG8).{2,25})\bthe\sway\b/gi,
/\bway\sdown\b(?=.{2,20}(?:TQ13))/gi,
/(?<=(?:TQ13).{2,25})\bway\sdown\b/gi,
/\bway\b(?=.{2,20}(?:CT12|hamlet))/gi,
/(?<=(?:CT12|hamlet).{2,25})\bway\b/gi,
/[\d-]+way\sclose\b/gi,
/\bway\sclose\b(?=.{2,20}(?:BA4))/gi,
/(?<=(?:BA4).{2,25})\bway\sclose\b/gi,
/\bway\sfoot\b(?=.{2,20}(?:NE64|YO22))/gi,
/(?<=(?:NE64|YO22).{2,25})\bway\sfoot\b/gi,

// WEEK
/\bweek\b(?=.{2,20}(?:TQ9|EX18|EX20|EX37|village|hamlet))/gi,
/(?<=(?:TQ9|EX18|EX20|EX37|village|hamlet).{2,25})\bweek\b/gi,

// WHITE
/\bwhite\swife\b(?=.{2,20}(?:ZE2|island))/gi,
/(?<=(?:ZE2|island).{2,25})\bwhite\swife\b/gi,

// WIND
/[\d-]+\swind\sfell\b/gi,

// WOOD
/[\d-]+\swood(?:land)?\sfell\b/gmi,
/[\d-]+the\swoods?\b/gmi,
/\bthe\swood\b(?=.{2,20}(?:CH3|HR2|KT6|LU7|NR9|SG14|SM3|ST3|SY10))/gi,
/(?<=(?:CH3|HR2|KT6|LU7|NR9|SG14|SM3|ST3|SY10).{2,25})\bthe\swood\b/gi,
/\bthe\swoods\b(?=.{2,20}(?:B14|DD10|HA6|OL11|OL4|PL26|SS7|TQ1|UB10|WA14|WD7|WS10|YO17|YO61))/gi,
/(?<=(?:B14|DD10|HA6|OL11|OL4|PL26|SS7|TQ1|UB10|WA14|WD7|WS10|YO17|YO61).{2,25})\bthe\swoods\b/gi,

// WOODEN
/\bwooden\b(?=.{2,20}(?:SA69|village))/gi,
/(?<=(?:SA69|village).{2,25})\bwooden\b/gi,

// YELL
/\byell\b(?=.{2,20}(?:ZE2|island))/gi,
/(?<=(?:ZE2|island).{2,25})\byell\b/gi,
];
const LocationContextRegEx: Set<RegExp> = new Set();
a.forEach(term => LocationContextRegEx.add(term));
export {LocationContextRegEx};