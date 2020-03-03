-- Up

INSERT INTO Entity 
( label, color, domain, mask, type, enabled, discard, joinable, priority, reg_ex, description ) 
VALUES
(
  'Address', '#80ff70', 'Name', 'LOCATION', 'Regular expression',
  1, 0, 0, 2,
  '\b(?:block|suite)\s(?:\d\w?|\d\d?|\w\d?)\b|\b\d+(st|nd|rd|th)\sFloor\b',
  'Example: Block 3B or 23rd Floor'
),
(
  'Address', '#80ff70', 'Name', 'LOCATION', 'Regular expression',
  1, 1, 1, 2,
  '(?:[1-9]\d{0,3}\-)?[1-9]\d{0,3}[a-z]?(?=\s[a-z]{3,})',
  'Extracts a number/letter combination if followed by a word atleast 3 characters in length'
),
(
  'Address', '#80ff70', 'Name', 'LOCATION', 'Regular expression',
  1, 1, 1, 2,
  '\b(?:bottoms?|bridges?|broads?|brooks?|bush(?:es)?|camp(?:us)?|circular|cliff(?:e|s)?|close|clumps?|coast|colliery|commons?|convent|corner|cottages?|court(?:yard)?|creek|crescent|crofts?|cross(?:ing)?|dales?|dam|d[iy]ke|district|docks?|downs?|drift|dr[io]ve|edge|embankment|entrance|esplanade|estates?|farms?|ferry|field|flats?|fo[lr]ds?|gardens?|gate(?:s|way)?|geos?|glade|glens?|gorse|grange|grass|grounds?|groves?|halls?|hanger|harbour|hatch|head|heaths?|heights?|highways?|hollow|hole|houses?|interchange|islands?|isles?|jetty|junctions?|la[kn]es?|lawns?|level|leys?|links?|loan|lochs?|l[eo]dge|mains|manor|market|marsh(?:es)?|meadows?|meade?s?|mere|mews|m[ai]lls?|moat|mounts?|mouth|ness|orchards?|oval|paddocks?|parade|park(?:land|s|way)?|pass(?:age)?|passageway|pastures?|patch|path|peak|p[iy]ke|pit|place|plains?|ponds?|pools?|point|porth?|priory|promenade|quad(?:rant)?|quays?|range|rd|reach|reservoir|ri[ds]e|rivers?|roads?|rocks?|rough|round(?:about)?|row|sand|sea|sh[io]re|side|sound|spa|springs?|spur|square|station|strand|stream|street|strip|summit|tarns?|terraces?|towers?|towns?|track|trail|tunnel|vale|valleys?|views?|villas?|villages?|walks?|ways?|weirs?|wick|wood(?:s|lands)?|yards?)\b',
  'Finds any combination of common location name suffixes found in the UK'
),
(
  'AgeRegEx', '#cc33ee', 'Age', 'PERSON', 'Regular expression',
  1, 0, 0, 2,
  '(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|\d{1,3})[\s\-](?:years?|month)[\s\-]old\b',
  'Example: 17 years old'
),
(
  'Banking1', '#994320', 'Mastercard', 'CURRENCY', 'Regular expression',
  1, 0, 0, 2,
  '^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$',
  'Example: matches a 16 digit number'
),
(
  'Banking2', '#994320', 'Visa', 'CURRENCY', 'Regular expression',
  1, 0, 0, 2,
  '^4[0-9]{12}(?:[0-9]{3})?$',
  'Example: matches a 16 digit number'
),
(
  'Banking3', '#994320', 'Visa MasterCard', 'CURRENCY', 'Regular expression',
  1, 0, 0, 2,
  '^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$',
  'Example: matches a 16 digit number'
),
(
  'Banking4', '#994320', 'UK Bank Account', 'CURRENCY', 'Regular expression',
  1, 0, 0, 2,
  '^(\d){7,8}$',
  'Example: matches a 7 or 8 digit number'
),
(
  'Banking5', '#994320', 'UK Bank Sort Code', 'CURRENCY', 'Regular expression',
  1, 0, 0, 2,
  '^(\d){2}-(\d){2}-(\d){2}$',
  'Example: 20-40-36'
),
(
  'Currency1', '#334320', 'Currency', 'CURRENCY', 'Regular expression',
  1, 0, 0, 2,
  '[$£€]\s*\d[\d,]*(?:\.\d{1,2})?(?:\s?(?:b|m|tr)illion|bn|k|m)?\b',
  'Example: £23,000 or $30k'
),
(
  'Currency2', '#334320', 'Currency', 'CURRENCY', 'Regular expression', 
  1, 0, 0, 2,
  '\d[\d,\.]*(?:\s(?:b|m|tr)illion|bn|k|m|p)?\s?(?:pounds?|pence|euros?|dollars?|cents?)\b',
  'Example: 3.2 million dollars'
),
(
  'DateLong', '#ffb3ff', 'DateTime', 'DATETIME', 'Regular expression',
  1, 0, 0, 2,
  '\b(?:[0123]?\d(?:st|nd|rd|th)?)(?:[\s\-\.]{0,3}|\sof\s)?(?:jan\.?|janu?a?ry|feb\.?|febr?ua?ry|mar\.?|march|apr\.?|april|may|jun\.?|june|jul\.?|july|aug\.?|august|sept?\.?|september|oct\.?|october|nov\.?|november|dec\.?|december)(?:(?:[\s\-\.]{0,3})(?:\d\d|\d\d\d\d))\b',
  'Example: 23rd Jan 2016'
),
(
  'MonthYear', '#d9006c', 'DateTime', 'DATETIME', 'Regular expression',
  1, 0, 0, 2,
  '\b(?:jan\.?|janu?a?ry|feb\.?|febr?ua?ry|mar\.?|march|apr\.?|april|may|jun\.?|june|jul\.?|july|aug\.?|august|sept?\.?|september|oct\.?|october|nov\.?|november|dec\.?|december)(?:(?:[\s\-\.]{0,3})(?:\d\d|\d\d\d\d))(?:[\s\-\.,]{0,3}\d\d\d\d)?\b',
  'Example: Dec 1964'
),
(
  'DayMonth', '#ff0080', 'DateTime', 'DATETIME', 'Regular expression',
  1, 0, 0, 2,
  '\b(?:[0123]?\d(?:st|nd|rd|th)?)(?:[\s\-\.]{0,3}|\sof\s)(?:jan\.?|janu?a?ry|feb\.?|febr?ua?ry|mar\.?|march|apr\.?|april|may|jun\.?|june|jul\.?|july|aug\.?|august|sept?\.?|september|oct\.?|october|nov\.?|november|dec\.?|december)\b',
  'Example: 1st of February'
),
(
  'WDayMonth', '#ff0099', 'DateTime', 'DATETIME', 'Regular expression', 
  1, 0, 0, 2,
  '\b(?:(?:mon\.?|monday|tues?\.?|tuesday|wed\.?|wednesday|thurs?\.?|thursday|fri\.?|friday|sat\.?|saturday|sun\.?|sunday)\,?[\s\n]{1,3})?(?:jan\.?|janu?a?ry|feb\.?|febr?ua?ry|mar\.?|march|apr\.?|april|may|jun\.?|june|jul\.?|july|aug\.?|august|sept?\.?|september|oct\.?|october|nov\.?|november|dec\.?|december)\s(?:[0123]?\d(?:st|nd|rd|th)?)(?:[\s\-\.,]{0,3}\d\d\d\d)?\b',
  'Example: Mon 2nd'
),
(
  'WDayDate', '#ff0099', 'DateTime', 'DATETIME', 'Regular expression',
  1, 0, 0, 2,
  '\b(?:mon\.?|monday|tues?\.?|tuesday|wed\.?|wednesday|thurs?\.?|thursday|fri\.?|friday|sat\.?|saturday|sun\.?|sunday)\s(?:the )?(?:[0123]?\d(?:st|nd|rd|th))\b',
  'Example: Tues the 12th'
),
(
  'DateShort1', '#ff75ff', 'DateTime', 'DATETIME', 'Regular expression',
  1, 0, 0, 2,
  '\b[0123]?\d[\s\/]{1,3}[0123]?\d[\s\/]{1,3}\d\d(?:\d\d)?|\d\d(?:\d\d)?[\s\/]{1,3}[0123]?\d[\s\/]{1,3}[0123]?\d\b',
  'Example: 12/03/2004'
),
(
  'DateShort2', '#ff3eff', 'DateTime', 'DATETIME', 'Regular expression',
  1, 0, 0, 2,
  '\b[0123]?\d[\s\-]{1,3}[0123]?\d[\s\-]{1,3}\d\d(?:\d\d)?|\d\d(?:\d\d)?[\s\-]{1,3}[0123]?\d[\s\-]{1,3}[0123]?\d\b',
  'Example: 12-03-2004'
),
(
  'DateShort3', '#e800e8', 'DateTime', 'DATETIME', 'Regular expression',
  1, 0, 0, 2,
  '\b[0123]?\d[\s\.]{1,3}[0123]?\d[\s\.]{1,3}\d\d(?:\d\d)?|\d\d(?:\d\d)?[\s\.]{1,3}[0123]?\d[\s\.]{1,3}[0123]?\d\b',
  'Example: 12.03.2004'
),
(
  'DateYear', '#e800e8', 'DateTime', 'DATETIME', 'Regular expression',
  1, 0, 0, 2,
  '\b(?<=(?:after|and|before|between|during|in|on)\s)[12]\d\d\d\b',
  'Example: After 1972'
),
(
  'Email', '#ff8000', 'Reference', 'CONTACT', 'Regular expression', 
  1, 0, 0, 1,
  '\b(?:[''\w+\-\_\.]+)@(?:[\w+\-\_\.]+)\.(?:[\w+\-\_\.]+)\b',
  'Example: name.lastname@corporation.org'
),
(
  'Nationality', '#0050ff', 'Name', 'NAME', 'Multiple term', 
  1, 0, 1, 3,
  '', 'List of keywords in lookup table [Nationality]'
),
(
  'NHSNumber', '#0040cc', 'RecordID', 'RECORDID', 'Regular expression', 
  1, 0, 0, 1,
  '[34679]\d\d\s?\d\d\d\s?\d\s?\d\s?\d\s?\d',
  'Example: 999 333 4526'
),
(
  'Name', '#0080ff', 'Name', 'NAME', 'Single term', 
  1, 0, 1, 3,
  '', 'List of keywords in lookup table [Name]'
),
(
  'NameRegExInitial', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 1, 1, 2,
  '\b[a-z]\b\.',
  'Example A.J.'
),
(
  'NameRegEx', '#00a0ff', 'Name', 'NAME', 'Regular expression', 
  1, 0, 1, 3,
  '\b[a-z]+(?:dran?|[a-z]cz[a-z]+|iute|lund)\b',
  'Example: Bendran | Czerero | Biute | Haagelund'
),
(
  'NameRegExAccent', '#00a0ff', 'Name', 'NAME', 'Regular expression', 
  1, 0, 1, 3,
  '[a-z]*[À-ÖØ-öø-ÿãñõțũąğňōıŚạ]+[a-z]*',
  'Returns any word containing accented Latin characters (assumed to be a foreign word/name)'
),
(
  'NameRegExA', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-z]+a(?:c[a-df-gijl-ru-xz]|d[a-df-np-rtu-xz]|e[a-ce-z]|f[a-dg-ru-xz]|g[a-df-hj-np-rt-xz]|h[b-rt-z]|i[abef-ko-qu-z]|[ajq][a-z]|k[a-df-rt-xz]|l[bcghjnqru-xz]|m[cdf-hj-mqru-xz]|n[bcfhijl-np-ru-xz]|[boy][a-rt-z]|p[a-dfgi-np-ru-xz]|r[acg-joqu-xz]|s[a-dfgijloqru-xz]|t[b-dfgi-ru-xz]|u[a-ce-km-qu-z]|v[b-df-np-xz]|w[a-jmo-qrt-z]|x[a-xz]|z[a-df-xz])\b',
  'Words of >= 4 characters ending a**'
),
(
  'NameRegExB', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-z]+b(?:a[a-dfh-kmo-qtu-z]|b[a-xz]|[cdf-hjkmnpqstv-z][a-z]|e[a-cfg-km-qu-xz]|i[bfh-mo-ru-z]|l[a-df-xz]|o[a-mpuvz]|r[b-df-z]|u[acfh-mo-ru-xz])\b',
  'Words of >= 4 characters ending b**'
),
(
  'NameRegExC', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-z]+c(?:a[acdg-koquvz]|e[bcf-kmoqu-xz]|h[b-df-rt-xz]|i[bf-kqru-z]|k[a-ot-xz]|l[b-df-np-xz]|n[a-df-z]|o[cfhi-ko-qu-xz]|r[b-df-np-xz]|s[a-hj-z]|t[b-hj-rt-z]|u[a-df-knoqu-z]|y[a-km-z]|[b-dfjmpqv-xz][a-z])\b',
  'Words of >= 4 characters ending c**'
),
(
  'NameRegExD', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-z]+d(?:a[a-cf-kn-qu-xz]|e[a-cf-ko-qt-vz]|g[a-df-xz]|i[bf-kmp-ru-wyz]|l[a-df-hj-xz]|n[a-ru-z]|o[abd-fh-kpquvyz]|r[b-xz]|s[a-su-xz]|t[a-fh-z]|u[cdf-lnoqrt-z]|y[a-df-km-z]|[b-dfhjkmpqv-xz][a-z])\b',
  'Words of >= 4 characters ending d**'
),
(
  'NameRegExE', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-z]+e(?:a[a-cgijoqu-z]|b[b-np-ru-xz]|c[b-dfgijl-ru-xz]|d[a-df-np-rt-xz]|e[a-ceg-joqu-z]|f[a-ru-xz]|g[b-df-lnp-rt-xz]|i[be-kmo-qu-z]|k[a-rt-xz]|l[bcghjknoqru-xz]|m[b-df-mqru-xz]|n[bcfh-np-rv-xz]|o[a-eg-qt-vx-z]|p[a-df-ru-xz]|[hjq][a-z]|r[g-jqru-xz]|s[b-dfgijl-ru-xz]|t[b-dfgj-np-rt-xz]|u[a-ce-lnoqt-z]|w[a-mo-ru-xz]|x[a-df-hj-xz]|y[a-df-rt-z]|[vz][a-df-xz])\b',
  'Words of >= 4 characters ending e**'
),
(
  'NameRegExF', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-z]+f(?:a[a-mo-qu-wyz]|e[a-cf-mo-qt-vxz]|f[a-df-rt-xz]|i[e-kqru-wy]|l[a-df-tv-xz]|o[a-fh-lo-qt-z]|r[a-xz]|t[a-gi-rt-xz]|u[a-km-qt-z]|[b-dghjkmnpqsv-z][a-z])\b',
  'Words of >= 4 characters ending f**'
),
(
  'NameRegExG', '#00a0ff', 'Name', 'NAME', 'Regular expression', 
  1, 0, 1, 2,
  '\b[a-z]+g(?:a[a-df-koqu-xz]|[bg][a-xz]|e[bcf-kpqu-xz]|h[a-ru-xz]|i[bfhi-kmoqru-z]|l[a-df-np-xz]|m[a-rt-xz]|n[a-df-rt-xz]|o[a-mo-qu-z]|r[a-df-rt-xz]|s[a-su-xz]|t[a-gi-z]|u[a-df-lo-ru-xz]|y[a-rt-z]|[cdfjkpqv-xz][a-z])\b',
  'Words of >= 4 characters ending g**'
),
(
  'NameRegExH', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-z]+h(?:a[ac-km-oqru-z]|e[bcef-ko-quvxyz]|i[abf-koqru-z]|l[a-xz]|m[a-rt-z]|o[a-cfh-koquvx-z]|r[a-xz]|ta|um|wa|y[kn]|[b-df-hjknpqsvxz][a-z])\b',
  'Words of >= 4 characters ending h**'
),
(
  'NameRegExI', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-z]+i(?:a[abf-kmo-qu-z]|b[a-df-rt-z]|c[b-df-jl-ru-xz]|d[b-df-np-rt-xz]|e[a-ceg-kno-qvyz]|f[a-dghj-ru-xz]|g[b-dfgij-lp-rt-xz]|k[a-df-rt-xz]|l[bcg-ju-xz]|m[cdf-hj-nqrt-xz]|n[bfhijlmnp-ru-wz]|o[a-ce-ko-qu-z]|p[a-df-hj-ru-xz]|r[a-cf-jqou-xz]|s[bdfgijlqrv-xz]|t[acdgjl-npru-xz]|u[a-ln-rt-z]|v[b-df-rt-xz]|[hijqwxy][a-z]|z[a-df-y])\b',
  'Words of >= 4 characters ending i**'
),
(
  'NameRegExJ', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-z]+j(?:[a-df-z][a-z]|e[a-su-z])\b',
  'Words of >= 4 characters ending j**'
),
(
  'NameRegExK', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-z]+k(?:a[a-jm-su-z]|e[a-ce-kmo-quvxz]|i[a-cfh-kmqrsu-z]|l[a-df-xz]|o[a-mo-z]|s[a-xz]|u[a-oq-z]|[b-df-hjkmnp-rtv-z][a-z])\b',
  'Words of >= 4 characters ending k**'
),
(
  'NameRegExL', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-z]+l(?:a[afh-loquvz]|b[a-rt-xz]|c[a-gi-xz]|d[a-rt-xz]|e[bcfhjko-quvz]|f[a-ru-xz]|g[a-df-xz]|i[bf-moqru-z]|k[a-rt-xz]|l[b-np-ru-xz]|m[a-rt-xz]|o[a-fh-koquvxz]|p[a-rt-xz]|r[a-xz]|s[a-df-su-z]|t[a-gi-rt-xz]|u[acdfh-ln-rt-wyz]|v[a-df-z]|y[a-km-rt-wyz]|[hjnqwxz][a-z])\b',
  'Words of >= 4 characters ending l**'
),
(
  'NameRegExM', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-z]+m(?:a[a-kmoqu-wyz]|[bn][a-rt-z]|e[a-ce-kmo-qu-z]|i[bf-kmo-ru-z]|l[a-xz]|m[b-df-xz]|o[a-lo-qt-wz]|p[a-gj-nru-xz]|u[a-ln-pu-wyz]|y[a-km-z]|[cdf-hjkqr-tv-xz][a-z])\b',
  'Words of >= 4 characters ending m**'
),
(
  'NameRegExN', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-z]+n(?:a[abf-km-oquvxz]|c[a-dfgi-np-ru-xz]|d[b-df-np-rt-xz]|e[bcf-kmpquvz]|g[a-df-hj-np-rt-xz]|i[f-kqru-wy]|[kn][a-rt-xz]|l[a-xz]|o[cfh-ko-quvz]|r[a-df-xz]|s[a-df-su-xz]|t[a-gi-rt-xz]|u[a-df-knoqru-z]|[bfjmpvwx][a-z]|y[a-kn-rt-z]|[hqz][b-z])\b',
  'Words of >= 4 characters ending n**'
),
(
  'NameRegExO', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-z]+o(?:a[a-cg-joqu-z]|b[a-df-rt-z]|c[a-jl-ru-z]|e[bce-qs-xz]|f[a-ru-xz]|i[be-kmo-qu-z]|j[a-z]|l[bcghjm-ru-xz]|m[cf-rt-xz]|n[bcfhijl-ru-xz]|o[a-ceg-joqu-z]|[kp][b-df-rt-xz]|q[a-z]|r[cf-jlo-ru-wz]|s[a-dfgj-ln-ru-xz]|t[a-dfgi-np-ru-xz]|u[a-ce-km-oqu-z]|[dv][a-df-rt-xz]|w[a-df-kmo-rt-xz]|[gx][a-rt-xz]|[hy][a-rt-z]|z[a-df-xz])\b',
  'Words of >= 4 characters ending o**'
),
(
  'NameRegExP', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-z]+p(?:a[a-cfgi-ko-quv]|e[bcfh-kopuvz]|h[b-df-rt-xz]|i[bf-kp-ru-wyz]|l[a-df-hj-xz]|o[a-ce-lqu-wyz]|p[a-df-np-rt-xz]|r[a-df-np-xz]|s[a-df-np-xz]|t[a-gj-np-rtv-xz]|u[a-ce-moqru-z]|y[a-kn-qt-z]|[b-dfgjkmnqvwxz][a-z])\b',
  'Words of >= 4 characters ending p**'
),
(
  'NameRegExQ', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-z]+q(?:i[fhijkqruvwy]|k[io]|ou|[a-df-hjl-nr-tv-z][a-z])\b',
  'Words of >= 4 characters ending q**'
),
(
  'NameRegExR', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-z]+r(?:a[acfh-koqruvz]|[bfk][a-rt-xz]|c[a-dfgi-xz]|d[a-np-rt-xz]|e[bcf-kquvz]|g[a-dfgi-np-rt-xz]|h[a-rt-z]|i[bfh-kqru-wy]|l[a-ce-rt-xz]|m[b-rt-xz]|n[a-ef-np-ru-xz]|o[acdhi-kmquvxz]|p[a-gj-ru-xz]|r[a-df-xz]|s[a-dfgj-np-su-xz]|t[a-gi-np-rt-xz]|u[a-dfh-lqrt-z]|v[b-df-xz]|y[a-np-wyz]|[jqwxz][a-z])\b',
  'Words of >= 4 characters ending r**'
),
(
  'NameRegExS', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-z]+s(?:a[a-df-ko-quvxz]|c[a-df-rt-z]|e[bf-kmo-qu-wz]|h[a-xz]|i[bf-ko-ru-z]|k[a-rt-z]|l[a-df-xz]|m[b-rt-xz]|n[a-su-z]|o[a-koqu-z]|p[a-rt-xz]|s[a-df-np-xz]|t[b-df-hj-np-rt-xz]|u[a-df-koqt-z]|y[a-rt-z]|[bdfgjqrvwxz][a-z])\b',
  'Words of >= 4 characters ending s**'
),
(
  'NameRegExT', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-z]+t(?:a[acdfh-koqu-wz]|c[a-gi-z]|e[bcf-hjkoqu-wz]|h[b-df-ln-rt-xz]|i[bfhi-kqu-z]|l[a-df-xz]|o[a-df-ktuvz]|r[b-df-np-su-xz]|s[a-fg-tv-xz]|t[b-df-np-rt-xz]|u[acf-oqt-z]|[bdfgjkmnpqv-z][a-z])\b',
  'Words of >= 4 characters ending t**'
),
(
  'NameRegExU', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-z]+u(?:a[a-df-km-su-xz]|b[a-df-ru-xz]|c[b-dfgijl-su-xz]|d[a-df-np-rt-xz]|e[a-cf-km-qu-xz]|f[a-eg-ru-z]|g[a-dfgi-rt-xz]|[hy][a-rt-z]|i[fh-kqru-y]|k[a-df-xz]|l[cghjmnqru-xz]|m[cdf-moqru-xz]|n[bcfh-jl-ru-xz]|o[a-qt-xz]|p[a-df-ru-xz]|r[acghjqv-xz]|s[bdfgijl-ru-xz]|t[a-dfgi-ru-xz]|u[a-ln-z]|v[a-df-rt-xz]|[jqwxz][a-z])\b',
  'Words of >= 4 characters ending u**'
),
(
  'NameRegExV', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-z]+v(?:a[a-df-kmo-qu-z]|e[a-ce-ko-qu-wz]|i[cf-ko-rt-wyz]|o[a-quvxz]|[ru][a-df-z]|[b-df-hj-npqstv-z][a-z])\b',
  'Words of >= 4 characters ending v**'
),
(
  'NameRegExW', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-z]+w(?:a[a-km-qt-vz]|[bcf-hjmpqv-z][a-z]|[dln][a-rt-xz]|e[acf-km-qu-z]|i[a-fh-lo-su-z]|k[a-rt-z]|o[a-fh-kmo-ru-z]|r[a-xz]|s[a-df-xz]|t[a-gi-rt-z]|u[a-lnoq-z])\b',
  'Words of >= 4 characters ending w**'
),
(
  'NameRegExX', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-z]+x(?:a[a-df-ko-qu-z]|e[a-ce-ko-qu-xz]|i[fhi-kqru-wy]|l[a-df-xz]|o[b-lo-qt-z]|t[a-gi-xz]|[b-df-hjkmnp-su-z][a-z])\b',
  'Words of >= 4 characters ending x**'
),
(
  'NameRegExY', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-z]+y(?:a[a-jo-rt-z]|b[a-df-xz]|c[a-z]|d[a-df-rt-z]|e[a-ce-qu-z]|l[a-df-rt-xz]|m[b-df-mo-rt-xz]|n[a-df-xz]|o[a-mo-qt-z]|p[a-df-z]|r[a-df-np-rt-z]|s[a-df-su-z]|t[a-dfgi-z]|[f-kqu-z][a-z])\b',
  'Words of >= 4 characters ending y**'
),
(
  'NameRegExZ', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-z]+z(?:[ai][a-rt-z]|[b-df-hjkmnp-z][a-z]|e[a-ce-mo-qt-z]|l[a-df-z]|o[b-rt-z])\b',
  'Words of >= 4 characters ending z**'
),
(
  'PlaceName', '#80ff00', 'Name', 'LOCATION', 'Multiple term',
  1, 0, 1, 2,
  '', 'List of keywords in lookup table [PlaceName]'
),
(
  'PO Box', '#00ee00', 'Location', 'LOCATION', 'Regular expression',
  1, 0, 0, 1,
  '\bP\.?O\.?\sBox\s\d+\b',
  'Example: PO Box 1234'
),
(
  'Postcode', '#00ff00', 'Location', 'LOCATION', 'Regular expression',
  1, 0, 0, 1,
  '\b(?:GIR|[a-zA-Z][a-zA-Z]?(?:[0-9][a-zA-Z]|[0-9]{1,2}))(?:[ ]{0,3})(?:[0-9][a-zA-Z]{2})\b',
  'Example: W1 4BT'
),
(
  'Skip', '#ccddee', 'Skip', 'SKIP', 'Multiple term',
  1, 1, 0, 1,
  '', 'List of keywords in lookup table [Skip]'
),
(
  'SkipOrJoin', '#00a0ff', 'Name', 'NAME', 'Single term', 
  1, 1, 1, 1,
  '', 'List of keywords in lookup table [SkipOrJoin]'
),
(
  'SkipPOSRegEx', '#ccddee', 'Skip', 'SKIP', 'Regular expression',
  1, 1, 0, 1, 
  '(?:\b\w+n''t\b|i\.e\.|e\.g\.)',
  'Example: e.g. or i.e.'
),
(
  'SkipLeadingNumberRegEx', '#ccddee', 'Skip', 'SKIP', 'Regular expression',
  1, 1, 0, 1, 
  '[\d,\.]+(?:st|nd|rd|th)?[\s\-\\\/]{1,2}(?:acre|autumn|beer|count|crew|crime|day|fairway|hour|mile|page|pence|place|point|pound|metre|min|murder|star|steward|storey|student|summer|time|week|winter|yard|yr|year)s?',
  'Example: 23 acres'
),
(
  'SkipTrailingNumberRegEx', '#ccddee', 'Skip', 'SKIP', 'Regular expression',
  1, 1, 0, 1, 
  '(?:clause|least|page|para|top)\s[\d]+',
  'Example: Page 3'
),
(
  'SkipWordDurationRegEx', '#ccddee', 'Skip', 'SKIP', 'Regular expression',
  1, 1, 0, 1, 
  '\b(?:one|first|two|second|three|third|four|forth|five|fifth|six|seven|eight|nine|ten|hundred)[\s\-\\/]{1,2}(?:acre|autumn|beer|count|crew|crime|daughter|day|hour|mile|metre|murder|page|pence|place|point|pound|son|star|steward|storey|student|summer|time|week|winter|year)s?\b',
  'Example: Four beers'
),
(
  'TelUK', '#ff80ff', 'Reference', 'CONTACT', 'Regular expression',
  1, 0, 0, 2,
  '\(?0\)?[\s\-]?\d?[\s\-]?\d[\s\-]?\d\)?[\s\-]?\d\)?[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d?[\s\-]?\d[\s\-]?\d\d',
  'Example: 020 1234 5687'
),
(
  'TelUKInt', '#ff80ff', 'Reference', 'CONTACT', 'Regular expression',
  1, 0, 0, 2,
  '(?:\+?\(?44\)?|0044\s?)\s?\(?0?\)?\s?\d\s?\d\)?[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d?',
  'Example@ +44 20 1234 5687'
),
(
  'Territory', '#80ff80', 'Name', 'NAME', 'Multiple term',
  1, 0, 1, 3,
  '', 'List of keywords in lookup table [Territory]'
),
(
  'Time24hr', '#dfbfff', 'DateTime', 'DATETIME', 'Regular expression',
  1, 0, 0, 3,
  '\b(?:[01]\d|2[0123]|\d):[0-5]\d(?:[:.]\d{1,4})?\b',
  'Example: 03:55'
),
(
  'TimeAMPM', '#be7dff', 'DateTime', 'DATETIME', 'Regular expression',
  1, 0, 0, 3,
  '(?:[12]?\d[\.:][0-5]\d|[1-9]|1[0-2])\s?[ap]\.?m\.?',
  '8 pm'
),
(
  'TimeClock', '#8f20ff', 'DateTime', 'DATETIME', 'Regular expression',
  1, 0, 0, 3,
  '\b(?:[1-9]|1[0-2])\s?o[''\s]{1,2}clock\b',
  '12 o''clock'
),
(
  'Uri', '#ffc58a', 'Reference', 'URL', 'Regular expression',
  1, 0, 0, 1,
  '\b(?:(?:https?:\/\/)?www.[\w\/\?~&=%\+\-:\._\d]+|https?:\/\/[\w\/\?~&=%\+\-:\._\d]+)\b',
  'http://www.google.co.uk'
);

-- Down
DELETE FROM Entity;