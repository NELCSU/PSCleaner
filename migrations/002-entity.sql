-- Up

INSERT INTO Entity 
(
  label, color, domain, mask, type, 
  enabled, discard, joinable, priority,
  reg_ex
) 
VALUES 
(
  'Address', '#80ff70', 'Name', 'LOCATION', 'Regular expression',
  1, 1, 1, 2,
  '(?:(?:Block|Suite)\s[\w]*|\d+(st|nd|rd|th)\sFloor|[\d]{1,4}[a-z]?(?=\s[a-z]+))'
),
(
  'Address', '#80ff70', 'Name', 'LOCATION', 'Regular expression',
  1, 1, 1, 2,
  '\b(?:approach|avenue|bay|bottom|boulevard|brae|bridge|brook|close|common|coppice|copse|cottages?|crescent|croft|drive|east|estate|farm|fell|field|flats|forest|gardens?|gate|glen|grange|green|grove|harbour|heights|hill|junction|lane|lawns?|meadows?|meads?|mews|mills?|moor|mount|north|orchards?|parade|park|pasture|path|place|plain|ponds?|point|reservoir|ridge|rise|road|row|south|spinney|square|station|strand|street|terrace|towers|view|village|walk|way|west|woods?|yard)\b'
),
(
  'Currency1', '#334320', 'Currency', 'CURRENCY', 'Regular expression',
  1, 0, 0, 2,
  '[$£€]\s*\d[\d,]*(?:\.\d{1,2})?(?:\s([b|m|tr]illion))?'
),
(
  'Currency2', '#334320', 'Currency', 'CURRENCY', 'Regular expression', 
  1, 0, 0, 2,
  '\d[\d,\.]*\s?(?:pounds?|p(?:ence)?|euros?|dollars?|cents?)'
),
(
  'DateLong', '#ffb3ff', 'DateTime', 'DATETIME', 'Regular expression',
  1, 0, 0, 2,
  '\b(?:[0123]?\d(?:st|nd|rd|th)?)(?:[\s\-\.]{0,3}|\sof\s)?(?:jan\.?|janu?a?ry|feb\.?|febr?ua?ry|mar\.?|march|apr\.?|april|may|jun\.?|june|jul\.?|july|aug\.?|august|sept?\.?|september|oct\.?|october|nov\.?|november|dec\.?|december)(?:(?:[\s\-\.]{0,3})(?:\d\d|\d\d\d\d))\b'
),
(
  'MonthYear', '#d9006c', 'DateTime', 'DATETIME', 'Regular expression',
  1, 0, 0, 2,
  '\b(?:jan\.?|janu?a?ry|feb\.?|febr?ua?ry|mar\.?|march|apr\.?|april|may|jun\.?|june|jul\.?|july|aug\.?|august|sept?\.?|september|oct\.?|october|nov\.?|november|dec\.?|december)(?:(?:[\s\-\.]{0,3})(?:\d\d|\d\d\d\d))(?:[\s\-\.,]{0,3}\d\d\d\d)?\b'
),
(
  'DayMonth', '#ff0080', 'DateTime', 'DATETIME', 'Regular expression',
  1, 0, 0, 2,
  '\b(?:[0123]?\d(?:st|nd|rd|th)?)(?:[\s\-\.]{0,3}|\sof\s)(?:jan\.?|janu?a?ry|feb\.?|febr?ua?ry|mar\.?|march|apr\.?|april|may|jun\.?|june|jul\.?|july|aug\.?|august|sept?\.?|september|oct\.?|october|nov\.?|november|dec\.?|december)\b'
),
(
  'WDayMonth', '#ff0099', 'DateTime', 'DATETIME', 'Regular expression', 
  1, 0, 0, 2,
  '\b(?:(?:mon\.?|monday|tues?\.?|tuesday|wed\.?|wednesday|thurs?\.?|thursday|fri\.?|friday|sat\.?|saturday|sun\.?|sunday)\,?[\s\n]{1,3})?(?:jan\.?|janu?a?ry|feb\.?|febr?ua?ry|mar\.?|march|apr\.?|april|may|jun\.?|june|jul\.?|july|aug\.?|august|sept?\.?|september|oct\.?|october|nov\.?|november|dec\.?|december)\s(?:[0123]?\d(?:st|nd|rd|th)?)(?:[\s\-\.,]{0,3}\d\d\d\d)?\b'
),
(
  'WDayDate', '#ff0099', 'DateTime', 'DATETIME', 'Regular expression',
  1, 0, 0, 2,
  '\b(?:mon\.?|monday|tues?\.?|tuesday|wed\.?|wednesday|thurs?\.?|thursday|fri\.?|friday|sat\.?|saturday|sun\.?|sunday)\s(?:the )?(?:[0123]?\d(?:st|nd|rd|th))\b'
),
(
  'DateShort1', '#ff75ff', 'DateTime', 'DATETIME', 'Regular expression',
  1, 0, 0, 2,
  '\b[0123]?\d[\s\/]{1,3}[0123]?\d[\s\/]{1,3}\d\d(?:\d\d)?|\d\d(?:\d\d)?[\s\/]{1,3}[0123]?\d[\s\/]{1,3}[0123]?\d\b'
),
(
  'DateShort2', '#ff3eff', 'DateTime', 'DATETIME', 'Regular expression',
  1, 0, 0, 2,
  '\b[0123]?\d[\s\-]{1,3}[0123]?\d[\s\-]{1,3}\d\d(?:\d\d)?|\d\d(?:\d\d)?[\s\-]{1,3}[0123]?\d[\s\-]{1,3}[0123]?\d\b'
),
(
  'DateShort3', '#e800e8', 'DateTime', 'DATETIME', 'Regular expression',
  1, 0, 0, 2,
  '\b[0123]?\d[\s\.]{1,3}[0123]?\d[\s\.]{1,3}\d\d(?:\d\d)?|\d\d(?:\d\d)?[\s\.]{1,3}[0123]?\d[\s\.]{1,3}[0123]?\d\b'
),
(
  'Email', '#ff8000', 'Reference', 'CONTACT', 'Regular expression', 
  1, 0, 0, 1,
  '\b(?:[\w+\-\_\.]+)@(?:[\w+\-\_\.]+)\b'
),
(
  'Nationality', '#0050ff', 'Reference', 'ATTRIBUTE', 'Multiple term', 
  1, 0, 0, 3,
  ''
),
(
  'NHSNumber', '#0040cc', 'RecordID', 'RECORDID', 'Regular expression', 
  1, 0, 0, 1,
  '[34679]\d\d\s?\d\d\d\s?\d\s?\d\s?\d\s?\d'
),
(
  'Name', '#0080ff', 'Name', 'NAME', 'Single term', 
  1, 0, 1, 3,
  ''
),
(
  'NameRegEx', '#00a0ff', 'Name', 'NAME', 'Regular expression', 
  1, 0, 1, 3,
  '\b\w+(?:ak[ahiopsuy]s|dran?|\wcz\w+|\wham|\who|hoff|[a-hj-z]i[fhijkquvwy]|iute|\wova?|\w[eu]rg|ska|\w[cs]z|than|vsky|y[kn]|\w[kz][io])\b'
),
(
  'NameRegExA', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+a(?:[ajq][a-z]|b[a-rt-z]|c[a-df-gijl-ru-xz]|d[a-df-np-rtu-xz]|e[a-ce-z]|f[a-dg-ru-xz]|g[a-df-hj-np-rt-xz]|h[b-rt-z]|i[abef-ko-qu-z]|k[a-df-rt-xz]|l[bcghjnqru-xz]|m[cdf-hj-mqru-xz]|n[bcfhijl-np-ru-xz]|o[a-rt-z]|p[a-dfgi-np-ru-xz]|r[acg-joqu-xz]|s[a-dfgijloqru-xz]|t[b-dfgi-ru-xz]|u[a-ce-km-qu-z]|v[b-df-np-xz]|w[a-jmo-qrt-z]|x[a-xz]|y[a-rt-z]|z[a-df-xz])\b'
),
(
  'NameRegExB', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+b(?:a[a-dfh-kmo-qu-z]|b[a-xz]|[cdf-hjkmnpqstv-z][a-z]|e[a-cfg-km-qu-xz]|i[bfh-mo-ru-z]|l[a-df-xz]|o[a-kmpuvz]|r[b-df-z]|u[acfh-mo-ru-xz])\b'
),
(
  'NameRegExC', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+c(?:c[ai]|ek|ir|ka|ou)\b'
),
(
  'NameRegExD', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+d(?:de|e[ahk]|ir|lo|ou|r[ei]|ur|z[ae])\b'
),
(
  'NameRegExE', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+e(?:d[at]|j[in]|ni|ou|ri|tt|va|za)\b'
),
(
  'NameRegExF', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+f(?:al|et|ir|ja|li|ou)\b'
),
(
  'NameRegExG', '#00a0ff', 'Name', 'NAME', 'Regular expression', 
  1, 0, 1, 3,
  '\b\w+g(?:aj|ha|i[mr]|ji|lu|ma|na|ou|ui|ze)\b'
),
(
  'NameRegExH', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+h(?:ar|ek|ir|le|ou|um|wa|ra)\b'
),
(
  'NameRegExI', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+i(?:a[abf-kmo-qu-z]|b[a-df-rt-z]|c[b-df-jl-ru-xz]|e[ckn]|f[al]|ir|j[aekt]|ka|l[bcg-ju-xz]|nn|ou|pa|ri|t[acdgjl-npru-xz]|uc|w[ae]|[xy][a-z]|z[a-df-y])\b'
),
(
  'NameRegExJ', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+j(?:a[eh]|i[aenr]|o[nou]|u[ens])\b'
),
(
  'NameRegExK', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+k(?:a[jnrs]|h[ae]|i[abcr]|ou|u[fn]|w[aeiou])\b'
),
(
  'NameRegExL', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+l(?:ak|ek|fo|i[gr]|j[ao]|[kmn]a|li|ou|p[ao]|ta|u[afr]|ya)\b'
),
(
  'NameRegExM', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+m(?:a[io]|ek|ir|l[ae]|ke|ou)\b'
),
(
  'NameRegExN', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+n(?:a[bhmn]|ca|e[kz]|ga|ir|ja|kl|n[aeiu]|ou|pd|ti|ul]|yi)\b'
),
(
  'NameRegExO', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+o(?:ao|e[kl]|hi|lo|mo|[ntv]i|ou|r[cf]|u[ainw])\b'
),
(
  'NameRegExP', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+p(?:ir|ou)\b'
),
(
  'NameRegExQ', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+q(?:ar|ir|ou)\b'
),
(
  'NameRegExR', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+r(?:a[hjr]|ba|c[ao]|e[ckv]|fi|i[br]|ka|o[mu]|ra|ub|y[aelu]|zs)\b'
),
(
  'NameRegExS', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+s(?:ak|c[hou]|ev|hi|ir|k[ei]|ou|uk)\b'
),
(
  'NameRegExT', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+t(?:ek|hu|ka|ou|ri|sa|t[il]|ua|v[ai])\b'
),
(
  'NameRegExU', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+u(?:a[a-df-km-su-z]|cu|da|g[ag]|ir|ji|lu|n[iou]|ou|tz|u[aer]|wa|y[ei]|z[eu])\b'
),
(
  'NameRegExV', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+v(?:ab|i[crt]|ka|o[cu])\b'
),
(
  'NameRegExW', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+w(?:a[a-km-qt-vz]|b[aieoruy]|c[aehkosy]|d[adeinou]|e[ikn]|ir|ou|ra)\b'
),
(
  'NameRegExX', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+x(?:ba|ir|ou|te)\b'
),
(
  'NameRegExY', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+y(?:a[dhor]|ba|c[hk]|d[ay]|el|ir|[ghknrtvyz]a|ou|s[ks]|to|u[flnz])\b'
),
(
  'NameRegExZ', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+z(?:a[ik]|da|e[oq]|ga|i[agnor]|ja|k[ay]|li|n[aey]|o[dnu]|s[ai]|u[ryz]|v[iy]|w[ei]|za)\b'
),
(
  'PlaceName', '#80ff00', 'Name', 'LOCATION', 'Multiple term',
  1, 0, 1, 2,
  ''
),
(
  'PO Box', '#00ee00', 'Location', 'LOCATION', 'Regular expression',
  1, 0, 0, 1,
  '\bP\.?O\.?\sBox\s\d+\b'
),
(
  'Postcode', '#00ff00', 'Location', 'LOCATION', 'Regular expression',
  1, 0, 0, 1,
  '\b(?:GIR|[a-zA-Z][a-zA-Z]?(?:[0-9][a-zA-Z]|[0-9]{1,2}))(?:[ ]{0,3})(?:[0-9][a-zA-Z]{2})\b'
),
(
  'Skip', '#ccddee', 'Skip', 'SKIP', 'Multiple term',
  1, 1, 0, 1,
  ''
),
(
  'SkipOrJoin', '#ccddee', 'Name', 'SKIP', 'Single term', 
  1, 1, 1, 1,
  ''
),
(
  'SkipNumberDurationRegEx', '#ccddee', 'Skip', 'SKIP', 'Regular expression',
  1, 1, 0, 1, 
  '\b[\d,\.]+(?:st|nd|rd|th)?[\s\-\\/]{1,2}(?:acre|autumn|beer|day|fairway|mile|pence|place|pound|min|story|summer|week|winter)s?\b'
),
(
  'SkipWordDurationRegEx', '#ccddee', 'Skip', 'SKIP', 'Regular expression',
  1, 1, 0, 1, 
  '\b(?:one|first|two|second|three|third|four|forth|five|fifth|six|seven|eight|nine|ten|hundred)[\s\-\\/]{1,2}(?:acre|autumn|beer|day|mile|pence|place|pound|story|summer|week|winter)s?\b'
),
(
  'TelUK', '#ff80ff', 'Reference', 'CONTACT', 'Regular expression',
  1, 0, 0, 2,
  '\(?0\d\d(?:\)?[\s\-]?\d\d\d|\d\)?[\s\-]?\d\d|\d\d\)?[\s\-]?\d|\d\s?\d\d\)?)[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d\d'
),
(
  'TelUKInt', '#ff80ff', 'Reference', 'CONTACT', 'Regular expression',
  1, 0, 0, 2,
  '(?:\+?\(?44\)?|0044\s?)\s?\(?0?\)?\s?\d\s?\d\)?[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d?'
),
(
  'Territory', '#80ff80', 'Location', 'LOCATION', 'Multiple term',
  1, 0, 0, 3,
  ''
),
(
  'Time24hr', '#dfbfff', 'DateTime', 'DATETIME', 'Regular expression',
  1, 0, 0, 3,
  '\b(?:[01]\d|2[0123]|\d):[0-5]\d(?:[:.]\d{1,4})?\b'
),
(
  'TimeAMPM', '#be7dff', 'DateTime', 'DATETIME', 'Regular expression',
  1, 0, 0, 3,
  '\b(?:[12]?\d[\.:][0-5]\d|[1-9]|1[0-2])\s?(?:a\.?m\.?|p\.?m\.?)\b'
),
(
  'TimeClock', '#8f20ff', 'DateTime', 'DATETIME', 'Regular expression',
  1, 0, 0, 3,
  '\b(?:[1-9]|1[0-2])\s?o[''\s]{1,2}clock\b'
),
(
  'Uri', '#ffc58a', 'Reference', 'URL', 'Regular expression',
  1, 0, 0, 1,
  '\b(?:(?:https?:\/\/)?www.[\w\/\?~&=%\+\-:\._\d]+|https?:\/\/[\w\/\?~&=%\+\-:\._\d]+)\b'
);

-- Down
DELETE FROM Entity;