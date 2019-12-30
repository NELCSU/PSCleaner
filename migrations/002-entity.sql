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
  '(?:(?:Block|Suite)\s[\w]*|\d+(st|nd|rd|th)\sFloor|[\d]{1,4}[a-z]?(?=\s[a-z]{3,}))'
),
(
  'Address', '#80ff70', 'Name', 'LOCATION', 'Regular expression',
  1, 1, 1, 2,
  '\b(?:approach|avenue|bay|bottom|boulevard|brae|bridge|brook|close|common|coppice|copse|cottages?|crescent|croft|drive|east|estate|farm|fell|field|flats|forest|gardens?|gate|glen|grange|green|grove|harbour|heights|hill|junction|lane|lawns?|meadows?|meads?|mews|mills?|moor|mount|north|orchards?|parade|park|pasture|path|place|plain|ponds?|point|reservoir|ridge|rise|road|row|south|spinney|square|station|strand|street|terrace|towers|view|village|walk|way|west|woods?|yard)\b'
),
(
  'Currency1', '#334320', 'Currency', 'CURRENCY', 'Regular expression',
  1, 0, 0, 2,
  '[$£€]\s*\d[\d,]*(?:\.\d{1,2})?(?:\s([b|m|tr]illion)\b)?'
),
(
  'Currency2', '#334320', 'Currency', 'CURRENCY', 'Regular expression', 
  1, 0, 0, 2,
  '\d[\d,\.]*\s?(?:pounds?|p(?:ence)?|euros?|dollars?|cents?)\b'
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
  '\b(?:[''\w+\-\_\.]+)@(?:[\w+\-\_\.]+)\b'
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
  '\b\w+(?:dran?|\wcz\w+|hoff|iute)\b'
),
(
  'NameRegExA', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+a(?:a[a-z]|b[a-rt-z]|c[a-df-gijl-ru-xz]|d[a-df-np-rtu-xz]|e[a-ce-z]|f[a-dg-ru-xz]|g[a-df-hj-np-rt-xz]|h[b-rt-z]|i[abef-ko-qu-z]|j[a-z]|k[a-df-rt-xz]|l[bcghjnqru-xz]|m[cdf-hj-mqru-xz]|n[bcfhijl-np-ru-xz]|o[a-rt-z]|p[a-dfgi-np-ru-xz]|q[a-z]|r[acg-joqu-xz]|s[a-dfgijloqru-xz]|t[b-dfgi-ru-xz]|u[a-ce-km-qu-z]|v[b-df-np-xz]|w[a-jmo-qrt-z]|x[a-xz]|y[a-rt-z]|z[a-df-xz])\b'
),
(
  'NameRegExB', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+b(?:a[a-dfh-kmo-qu-z]|b[a-xz]|[cdf-hjkmnpqstv-z][a-z]|e[a-cfg-km-qu-xz]|i[bfh-mo-ru-z]|k[io]|l[a-df-xz]|o[a-kmpuvz]|r[b-df-z]|sz|u[acfh-mo-ru-xz]|y[kn]|z[io])\b'
),
(
  'NameRegExC', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+c(?:c[aiz]|ek|ho|i[fhijkqruvwy]|k[aio]|ou|sz|y[kn]|z[io])\b'
),
(
  'NameRegExD', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+d(?:cz|de|e[ahk]|ho|i[fhijkqruvwy]|k[io]|lo|ou|r[ei]|sz|ur|y[kn]|z[aeio])\b'
),
(
  'NameRegExE', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+e(?:cz|d[at]|ho|i[fhijkquvwy]|j[in]|k[io]|ni|ou|r[gi]|sz|tt|va|y[kn]|z[aio])\b'
),
(
  'NameRegExF', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+f(?:al|cz|et|ho|i[fhijkqruvwy]|ja|k[io]|li|ou|sz|y[kn]|z[io])\b'
),
(
  'NameRegExG', '#00a0ff', 'Name', 'NAME', 'Regular expression', 
  1, 0, 1, 3,
  '\b\w+g(?:aj|cz|h[ao]|i[fhijkmqruvwy]|ji|k[io]|lu|ma|na|ou|sz|ui|y[kn]|z[eio])\b'
),
(
  'NameRegExH', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+h(?:a[mnr]|cz|ek|ho|i[fhijkqruvwy]|k[io]|le|ou|sz|um|wa|y[kn]|ra|z[io])\b'
),
(
  'NameRegExI', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+i(?:a[abf-kmo-qu-z]|b[a-df-rt-z]|c[b-df-jl-ru-xz]|e[ckn]|f[al]|ho|ir|j[aekt]|k[aio]|l[bcg-ju-xz]|nn|ou|pa|ri|sz|t[acdgjl-npru-xz]|uc|w[ae]|[xy][a-z]|z[a-df-y])\b'
),
(
  'NameRegExJ', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+j(?:a[eh]|cz|ho|i[aefhijknqruvwy]|k[io]|o[nou]|sz|u[ens]|y[kn]|z[io])\b'
),
(
  'NameRegExK', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+k(?:a[jnrs]|cz|h[aeos]|i[abcfhijkqrsuvwy]|k[io]|o[su]|p[s]|s[sz]|u[fns]|w[aeiou]|y[kns]|z[io])\b'
),
(
  'NameRegExL', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+l(?:ak|cz|ek|fo|ho|i[fghijkqruvwy]|j[ao]|k[aio]|li|[mn]a|ou|p[ao]|sz|ta|u[afr]|y[akn]|z[io])\b'
),
(
  'NameRegExM', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+m(?:a[io]|cz|ek|ho|i[fhijkqruvwy]|k[io]|l[ae]|ke|ou|sz|y[kn]|z[io])\b'
),
(
  'NameRegExN', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+n(?:a[bhmn]|c[az]|e[kz]|ga|ho|i[fhijkqruvwy]|ja|k[ilo]|n[aeiu]|ou|pd|sz|ti|ul]|y[ikn]|z[io])\b'
),
(
  'NameRegExO', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+o(?:ao|cz|e[kl]|h[io]|i[fhijkquvwy]|k[io]|lo|mo|[ntv]i|ou|r[cf]|sz|u[ainw]|y[kn]|z[io])\b'
),
(
  'NameRegExP', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+p(?:cz|ho|i[fhijkqruvwy]|k[io]|ou|sz|y[kn]|z[io])\b'
),
(
  'NameRegExQ', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+q(?:ar|cz|ho|i[fhijkqruvwy]|k[io]|ou|sz|y[kn]|z[io])\b'
),
(
  'NameRegExR', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+r(?:a[hjr]|ba|c[aoz]|e[ckv]|fi|ho|i[bfhijkqruvwy]|k[aio]|o[mu]|ra|sz|ub|y[aeklnu]|z[ios])\b'
),
(
  'NameRegExS', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+s(?:ak|c[houz]|ev|h[io]|i[fhijkqruvwy]|k[aeioy]|ou|sz|uk|y[kn]|z[io])\b'
),
(
  'NameRegExT', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+t(?:cz|ek|h[ou]|i[fhijkquvwy]|k[aio]|ou|ri|s[az]|t[il]|ua|v[ai]|y[kn]|z[io])\b'
),
(
  'NameRegExU', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+u(?:a[a-df-km-su-z]|c[uz]|da|g[ag]|ho|i[fhijkqruvwy]|ji|k[io]|lu|n[iou]|ou|rg|sz|tz|u[aer]|wa|y[eikn]|z[eiou])\b'
),
(
  'NameRegExV', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+v(?:a[a-df-kmo-qu-z]|cz|ho|i[cfhijkqrtuvwy]|k[aio]|o[cu]|sz|y[kn]|z[io])\b'
),
(
  'NameRegExW', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+w(?:a[a-km-qt-vz]|b[aieoruy]|c[aehkosyz]|d[adeinou]|e[ikn]|ho|i[fhijkqruvwy]|k[io]|ou|ra|sz|y[kn]|z[io])\b'
),
(
  'NameRegExX', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+x(?:ba|cz|ho|i[fhijkqruvwy]|k[io]|ou|sz|te|y[kn]|z[io])\b'
),
(
  'NameRegExY', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+y(?:a[dhor]|ba|c[hkz]|d[ay]|el|ga|h[ao]|i[fhijkqru-wy]|k[aio]|na|ou|ra|s[ksz]|t[ao]|u[flnz]|va|y[akn]|z[aio])\b'
),
(
  'NameRegExZ', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 3,
  '\b\w+z(?:a[ik]|cz|da|e[oq]|ga|ho|i[af-knoqruvwy]|ja|k[aioy]|li|n[aey]|o[dnu]|s[aiz]|u[ryz]|v[iy]|w[ei]|y[kn]|z[aio])\b'
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