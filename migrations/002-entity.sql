-- Up

INSERT INTO "Entity" 
(
  label, 
  color, 
  domain, 
  joinable, 
  mask, 
  discard,
  type, 
  reg_ex
) 
VALUES 
(
  'Address1',
  '#80ff80', 
  'Location', 
  0, 
  'LOCATION', 
  0,
  'Regular expression', 
  '\b(?:[1-9]\d{0,3}[a-z]{0,3}\s)(?:[''\.\-a-z]{3,}\s)?(?:[a-z'']{3,}\s)(?:approach|avenue|bank|bay|bottom|boulevard|blvd|brae|close|crescent|croft|cottages?|court|drive|end|flats|field|heights|gardens|gate|grange|green|grove|hill|junction|lane|ln|lawns?|meads?|meadows?|mews|mills?|orchards?|parade|park|path|place|pl|ponds?|ridge|rise|road|rd|row|spinney|square|street|st|strand|terrace|towers|view|walk|way|woods?|yard)\b'
),
(
  'Address2',
  '#80ff70', 
  'Location', 
  0, 
  'LOCATION', 
  0,
  'Regular expression', 
  '\b(?:(?:Block|Suite)\s[\w]*|\d+(st|nd|rd|th)\sFloor)\b'
),
(
  'DateLong',  
  '#ffb3ff', 
  'DateTime', 
  0, 
  'DATETIME', 
  0,
  'Regular expression', 
  '\b(?:[0123]?\d(?:st|nd|rd|th)?)(?:[\s\-\.]{0,3}|\sof\s)?(?:jan\.?|janu?a?ry|feb\.?|febr?ua?ry|mar\.?|march|apr\.?|april|may|jun\.?|june|jul\.?|july|aug\.?|august|sept?\.?|september|oct\.?|october|nov\.?|november|dec\.?|december)(?:(?:[\s\-\.]{0,3})(?:\d\d|\d\d\d\d))\b'
),
(
  'MonthYear', 
  '#d9006c', 
  'DateTime', 
  0, 
  'DATETIME', 
  0,
  'Regular expression', 
  '\b(?:jan\.?|janu?a?ry|feb\.?|febr?ua?ry|mar\.?|march|apr\.?|april|may|jun\.?|june|jul\.?|july|aug\.?|august|sept?\.?|september|oct\.?|october|nov\.?|november|dec\.?|december)(?:(?:[\s\-\.]{0,3})(?:\d\d|\d\d\d\d))(?:[\s\-\.,]{0,3}\d\d\d\d)?\b'
),
(
  'DayMonth',  
  '#ff0080', 
  'DateTime', 
  0, 
  'DATETIME', 
  0,
  'Regular expression', 
  '\b(?:[0123]?\d(?:st|nd|rd|th)?)(?:[\s\-\.]{0,3}|\sof\s)(?:jan\.?|janu?a?ry|feb\.?|febr?ua?ry|mar\.?|march|apr\.?|april|may|jun\.?|june|jul\.?|july|aug\.?|august|sept?\.?|september|oct\.?|october|nov\.?|november|dec\.?|december)\b'
),
(
  'WDayMonth', 
  '#ff0099', 
  'DateTime', 
  0, 
  'DATETIME', 
  0,
  'Regular expression', 
  '\b(?:(?:mon\.?|monday|tues?\.?|tuesday|wed\.?|wednesday|thurs?\.?|thursday|fri\.?|friday|sat\.?|saturday|sun\.?|sunday)\,?[\s\n]{1,3})?(?:jan\.?|janu?a?ry|feb\.?|febr?ua?ry|mar\.?|march|apr\.?|april|may|jun\.?|june|jul\.?|july|aug\.?|august|sept?\.?|september|oct\.?|october|nov\.?|november|dec\.?|december)\s(?:[0123]?\d(?:st|nd|rd|th)?)(?:[\s\-\.,]{0,3}\d\d\d\d)?\b'
),
(
  'WDayDate',  
  '#ff0099', 
  'DateTime', 
  0, 
  'DATETIME', 
  0,
  'Regular expression', 
  '\b(?:mon\.?|monday|tues?\.?|tuesday|wed\.?|wednesday|thurs?\.?|thursday|fri\.?|friday|sat\.?|saturday|sun\.?|sunday)\s(?:the )?(?:[0123]?\d(?:st|nd|rd|th))\b'
),
(
  'DateShort1',
  '#ff75ff', 
  'DateTime', 
  0, 
  'DATETIME', 
  0,
  'Regular expression', 
  '\b[0123]?\d[\s\/]{1,3}[0123]?\d[\s\/]{1,3}\d\d(?:\d\d)?|\d\d(?:\d\d)?[\s\/]{1,3}[0123]?\d[\s\/]{1,3}[0123]?\d\b'
),
(
  'DateShort2',
  '#ff3eff', 
  'DateTime', 
  0, 
  'DATETIME', 
  0,
  'Regular expression', 
  '\b[0123]?\d[\s\-]{1,3}[0123]?\d[\s\-]{1,3}\d\d(?:\d\d)?|\d\d(?:\d\d)?[\s\-]{1,3}[0123]?\d[\s\-]{1,3}[0123]?\d\b'
),
(
  'DateShort3',
  '#e800e8', 
  'DateTime', 
  0, 
  'DATETIME', 
  0,
  'Regular expression', 
  '\b[0123]?\d[\s\.]{1,3}[0123]?\d[\s\.]{1,3}\d\d(?:\d\d)?|\d\d(?:\d\d)?[\s\.]{1,3}[0123]?\d[\s\.]{1,3}[0123]?\d\b'
),
(
  'Email',     
  '#ff8000', 
  'Reference', 
  0, 
  'CONTACT', 
  0,
  'Regular expression', 
  '\b(?:[\w+\-\_\.]+)@(?:[\w+\-\_\.]+)\b'
),
(
  'Nationality',
  '#0050ff', 
  'Reference', 
  0, 
  'ATTRIBUTE', 
  0,
  'Multiple term', 
  ''
),
(
  'NHSNumber', 
  '#0040cc', 
  'RecordID', 
  0, 
  'RECORDID', 
  0,
  'Regular expression', 
  '[34679]\d\d\s?\d\d\d\s?\d\s?\d\s?\d\s?\d'
),
(
  'Part',      
  '#ccddee', 
  'Part',     
  0, 
  'PART', 
  1,   
  'Multiple term', 
  ''
),
(
  'PartNumberDurationRegEx',
  '#ccddee', 
  'Part', 
  0, 
  'PART', 
  1,
  'Regular expression', 
  '\b[\d,\.]+(?:st|nd|rd|th)?[\s\-\\/]{1,2}(?:acre|autumn|beer|day|fairway|mile|pence|place|pound|min|story|summer|week|winter)s?\b'
),
(
  'PartWordDurationRegEx',  
  '#ccddee', 
  'Part', 
  0, 
  'PART', 
  1,
  'Regular expression', 
  '\b(?:one|first|two|second|three|third|four|forth|five|fifth|six|seven|eight|nine|ten|hundred)[\s\-\\/]{1,2}(?:acre|autumn|beer|day|mile|pence|place|pound|story|summer|week|winter)s?\b'
),
(
  'PartWordSubsitutionRegEx',
  '#ccddee', 
  'Part', 
  0, 
  'PART', 
  1,
  'Regular expression', 
  '\ba\snew\s\w+\b'
),
(
  'Person',    
  '#0080ff', 
  'Person',   
  1, 
  'PERSON', 
  0, 
  'Single term', 
  ''
),
(
  'PersonRegEx',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+(?:ak[ahiopsuy]s|dran?|\wcz\w+|\wham|\who|hoff|[a-hj-z]i[fhijkquvwy]|iute|\wova?|\w[eu]rg|ska|\w[cs]z|than|vsky|y[kn]|\w[kz][io])\b'
),
(
  'PersonRegExA',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+a(?:[ajq][a-z]|b[a-rt-z]|c[a-df-gijl-ru-xz]|d[a-df-np-rtu-xz]|e[a-ce-z]|f[a-dg-ru-xz]|g[a-df-hj-np-rt-xz]|h[b-rt-z]|i[abef-ko-qu-z]|k[a-df-rt-xz]|l[bcghjnqru-xz]|m[cdf-hj-mqru-xz]|n[bcfhijl-np-ru-xz]|o[a-rt-z]|p[a-dfgi-np-ru-xz]|r[acg-joqu-xz]|s[a-dfgijloqru-xz]|t[b-dfgi-ru-xz]|u[a-ce-km-qu-z]|v[b-df-np-xz]|w[a-jmo-qrt-z]|x[a-xz]|y[a-rt-z]|z[a-df-xz])\b'
),
(
  'PersonRegExB',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+b(?:ek|ir|go|o[ku]|ur)\b'
),
(
  'PersonRegExC',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+c(?:c[ai]|ek|ir|ka|ou)\b'
),
(
  'PersonRegExD',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+d(?:de|e[ahk]|ir|lo|ou|r[ei]|ur|z[ae])\b'
),
(
  'PersonRegExE',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+e(?:d[at]|j[in]|ni|ou|ri|tt|va|za)\b'
),
(
  'PersonRegExF',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+f(?:al|et|ir|ja|li|ou)\b'
),
(
  'PersonRegExG',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+g(?:aj|ha|i[mr]|ji|lu|ma|na|ou|ui|ze)\b'
),
(
  'PersonRegExH',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+h(?:ar|ek|ir|le|ou|um|wa|ra)\b'
),
(
  'PersonRegExI',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+i(?:a[abf-kmo-qu-z]|b[a-df-rt-z]|c[b-df-jl-ru-xz]|e[ckn]|f[al]|ir|j[aekt]|ka|l[bcg-ju-xz]|nn|ou|pa|ri|t[acdgjl-npru-xz]|uc|w[ae]|[xy][a-z]|z[a-df-y])\b'
),
(
  'PersonRegExJ',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+j(?:a[eh]|i[aenr]|o[nou]|u[ens])\b'
),
(
  'PersonRegExK',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+k(?:a[jnrs]|h[ae]|i[abcr]|ou|u[fn]|w[aeiou])\b'
),
(
  'PersonRegExL',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+l(?:ak|ek|fo|i[gr]|j[ao]|[kmn]a|li|ou|p[ao]|ta|u[afr]|ya)\b'
),
(
  'PersonRegExM',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+m(?:a[io]|ek|ir|l[ae]|ke|ou)\b'
),
(
  'PersonRegExN',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+n(?:a[bhmn]|ca|e[kz]|ga|ir|ja|kl|n[aeiu]|ou|pd|ti|ul]|yi)\b'
),
(
  'PersonRegExO',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+o(?:ao|e[kl]|hi|lo|mo|[ntv]i|ou|r[cf]|u[ainw])\b'
),
(
  'PersonRegExP',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+p(?:ir|ou)\b'
),
(
  'PersonRegExQ',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+q(?:ar|ir|ou)\b'
),
(
  'PersonRegExR',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+r(?:a[hjr]|ba|c[ao]|e[ckv]|fi|i[br]|ka|o[mu]|ra|ub|y[aelu]|zs)\b'
),
(
  'PersonRegExS',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+s(?:ak|c[hou]|ev|hi|ir|k[ei]|ou|uk)\b'
),
(
  'PersonRegExT',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+t(?:ek|hu|ka|ou|ri|sa|t[il]|ua|v[ai])\b'
),
(
  'PersonRegExU',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+u(?:a[a-df-km-su-z]|cu|da|g[ag]|ir|ji|lu|n[iou]|ou|tz|u[aer]|wa|y[ei]|z[eu])\b'
),
(
  'PersonRegExV',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+v(?:ab|i[crt]|ka|o[cu])\b'
),
(
  'PersonRegExW',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+w(?:a[a-km-qt-vz]|b[aieoruy]|c[aehkosy]|d[adeinou]|e[ikn]|ir|ou|ra)\b'
),
(
  'PersonRegExX',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+x(?:ba|ir|ou|te)\b'
),
(
  'PersonRegExY',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+y(?:a[dhor]|ba|c[hk]|d[ay]|el|ir|[ghknrtvyz]a|ou|s[ks]|to|u[flnz])\b'
),
(
  'PersonRegExZ',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+z(?:a[ik]|da|e[oq]|ga|i[agnor]|ja|k[ay]|li|n[aey]|o[dnu]|s[ai]|u[ryz]|v[iy]|w[ei]|za)\b'
),
(
  'PlaceName', 
  '#80ff00', 
  'Location', 
  0, 
  'LOCATION', 
  0, 
  'Multiple term', 
  ''
),
(
  'PO Box',  
  '#00ee00', 
  'Location', 
  0, 
  'LOCATION', 
  0,
  'Regular expression', 
  '\bP\.?O\.?\sBox\s\d+\b'
),
(
  'Postcode',  
  '#00ff00', 
  'Location', 
  0, 
  'LOCATION', 
  0,
  'Regular expression', 
  '\b(?:GIR|[a-zA-Z][a-zA-Z]?(?:[0-9][a-zA-Z]|[0-9]{1,2}))(?:[ ]{0,3})(?:[0-9][a-zA-Z]{2})\b'
),
(
  'TelUK',     
  '#ff80ff', 
  'Reference',
  0, 
  'CONTACT', 
  0,
  'Regular expression', 
  '\(?0\d\d(?:\)?[\s\-]?\d\d\d|\d\)?[\s\-]?\d\d|\d\d\)?[\s\-]?\d|\d\s?\d\d\)?)[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d\d'
),
(
  'TelUKInt',
  '#ff80ff', 
  'Reference',
  0, 
  'CONTACT', 
  0,
  'Regular expression', 
  '(?:\+?\(?44\)?|0044\s?)\s?\(?0?\)?\s?\d\s?\d\)?[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d?'
),
(
  'Territory',
  '#80ff80', 
  'Location', 
  0, 
  'LOCATION', 
  0, 
  'Multiple term', 
  ''
),
(
  'Time24hr',  
  '#dfbfff', 
  'DateTime', 
  0, 
  'DATETIME',  
  0,
  'Regular expression', 
  '\b(?:[01]\d|2[0123]|\d):[0-5]\d(?:[:.]\d{1,4})?\b'
),
(
  'TimeAMPM',  
  '#be7dff', 
  'DateTime', 
  0, 
  'DATETIME', 
  0,
  'Regular expression', 
  '\b(?:[12]?\d[\.:][0-5]\d|[1-9]|1[0-2])\s?(?:a\.?m\.?|p\.?m\.?)\b'
),
(
  'TitleName', 
  '#0080ff', 
  'Person', 
  0, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b(?:Mr|Ms\.|Mrs)\.?\s(?:\w\.?\s)?[\w\-]+\b'
),
(
  'TimeClock', 
  '#8f20ff', 
  'DateTime', 
  0, 
  'DATETIME', 
  0,
  'Regular expression', 
  '\b(?:[1-9]|1[0-2])\s?o[''\s]{1,2}clock\b'
),
(
  'Uri',       
  '#ffc58a', 
  'Reference',
  0, 
  'URL', 
  0,
  'Regular expression', 
  '\b(?:(?:https?:\/\/)?www.[\w\/\?~&=%\+\-:\._\d]+|https?:\/\/[\w\/\?~&=%\+\-:\._\d]+)\b'
);

-- Down

DELETE FROM "Entity";