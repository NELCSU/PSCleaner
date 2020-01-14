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
  '(?:(?:Block|Suite)\s\w{0,1}|\d+(st|nd|rd|th)\sFloor|[1-9][\d]{0,3}[a-z]?(?=\s[a-z]{3,}))'
),
(
  'Address', '#80ff70', 'Name', 'LOCATION', 'Regular expression',
  1, 1, 1, 2,
  '\b(?:acres?|alley|approach|avenue|back|bad|banks?|barns?|bay|beach|bottom|boulevard|braes?|bridge|broad(?:way)?|brook|buildings?|canal|castle|causeway|central|circle|circus|cliff|clough|close|common|coppice|copse|corner|cottages?|court(?:yard)?|covert|creek|crescent|croft|cross(?:ing)?|dale|docks?|downs?|dr[io]ve|east|edge|esplanade|estate|farm|fell|fens?|fields?|flats?|fold|forest|gardens?|gate|geos?|glen|gorge|grange|green|grove|hall|harbour|head|heath|heights?|highway|hill|house|island|isle|jetty|junction|lake|lane|lawns?|leys?|loch|lodge|manor|marsh(?:es)?|meadows?|mead[es]?|mews|mills?|moors?|mount|north|orchards?|oval|paddock|parade|parks?|passage|pastures?|path|place|plains?|plaza|ponds?|pool|point|port|quadrant|quay|rd|reach|reservoir|ridge|rise|road|rocks?|row|sands|skerry|skerries|south|spinney|springs?|square|station|strand|stream|street|tarn|terrace|tor|towers?|towns?|upper|vale|valley|view|villas?|villages?|walk|water(?:s|fall)?|way|weirs?|west|woods?|yards?)\b'
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
  'NameRegExInitial', '#00a0ff', 'Name', 'NAME', 'Regular expression', 
  1, 1, 1, 2,
  '\b[A-Z]\b\.'
),
(
  'NameRegEx', '#00a0ff', 'Name', 'NAME', 'Regular expression', 
  1, 0, 1, 3,
  '\b\w+(?:dran?|\wcz\w+|iute|lund)\b'
),
(
  'NameRegExA', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b\w+a(?:a[a-z]|b[a-rt-z]|c[a-df-gijl-ru-xz]|d[a-df-np-rtu-xz]|e[a-ce-z]|f[a-dg-ru-xz]|g[a-df-hj-np-rt-xz]|h[b-rt-z]|i[abef-ko-qu-z]|j[a-z]|k[a-df-rt-xz]|l[bcghjnqru-xz]|m[cdf-hj-mqru-xz]|n[bcfhijl-np-ru-xz]|o[a-rt-z]|p[a-dfgi-np-ru-xz]|q[a-z]|r[acg-joqu-xz]|s[a-dfgijloqru-xz]|t[b-dfgi-ru-xz]|u[a-ce-km-qu-z]|v[b-df-np-xz]|w[a-jmo-qrt-z]|x[a-xz]|y[a-rt-z]|z[a-df-xz])\b'
),
(
  'NameRegExB', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b\w+b(?:a[a-dfh-kmo-qu-z]|b[a-xz]|[cdf-hjkmnpqstv-z][a-z]|e[a-cfg-km-qu-xz]|i[bfh-mo-ru-z]|k[io]|l[a-df-xz]|nn|o[a-mpuvz]|r[b-df-z]|u[acfh-mo-ru-xz]|y[kn]|z[a-z])\b'
),
(
  'NameRegExC', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b\w+c(?:a[acdg-koquvz]|e[bcf-kmoqu-xz]|h[b-df-hj-rt-xz]|i[bf-kqru-z]|k[a-ot-xz]|l[b-df-np-xz]|nn|ou|sz|y[kn]|[b-dfjz][a-z])\b'
),
(
  'NameRegExD', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b\w+d(?:an|cz|d[eu]|e[ahk]|ho|i[fghijkqruvwy]|k[io]|lo|nn|ou|r[eio]|sz|ur|y[kn]|z[a-z])\b'
),
(
  'NameRegExE', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b\w+e(?:cz|d[adt]|ho|i[fhijkquvwy]|j[in]|k[io]|n[in]|o[lu]|r[gi]|s[iz]|tt|va|y[kn]|z[a-df-xz])\b'
),
(
  'NameRegExF', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b\w+f(?:al|cz|et|ho|i[fhijkqruvwy]|ja|k[io]|li|n[in]|ou|sz|y[kn]|z[a-z])\b'
),
(
  'NameRegExG', '#00a0ff', 'Name', 'NAME', 'Regular expression', 
  1, 0, 1, 2,
  '\b\w+g(?:aj|cz|h[ao]|i[fhijkmqruvwy]|ji|k[io]|lu|ma|n[an]|ou|sz|ui|we|xi|y[eiknu]|z[eio])\b'
),
(
  'NameRegExH', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b\w+h(?:a[imnor]|cz|ek|ho|i[afhijkqruvwy]|k[io]|le|n[ny]|ou|sz|um|wa|y[kn]|ra|z[a-z])\b'
),
(
  'NameRegExI', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b\w+i(?:a[abf-kmo-qu-z]|b[a-df-rt-z]|c[b-df-jl-ru-xz]|e[ckn]|f[al]|ho|ir|j[aekt]|k[aio]|l[bcg-ju-xz]|n[in]|ou|pa|ri|sz|t[acdgjl-npru-xz]|uc|w[ae]|[xy][a-z]|z[a-df-y])\b'
),
(
  'NameRegExJ', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b\w+j(?:[a-df-z][a-z]|e[a-su-z])\b'
),
(
  'NameRegExK', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b\w+k(?:a[jnrs]|cz|h[aeos]|i[abcfhijkqrsuvwy]|k[io]|nn|o[su]|p[s]|ro|s[sz]|u[fns]|w[aeiou]|y[kns]|z[a-z])\b'
),
(
  'NameRegExL', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b\w+l(?:ak|c[oz]|ek|fo|ho|i[fghijkqruvwy]|j[ao]|k[aio]|li|ma|n[an]|ou|p[ao]|sz|ta|u[afr]|y[akn]|z[a-z])\b'
),
(
  'NameRegExM', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b\w+m(?:a[io]|cz|ek|ho|i[fh-kqruvwy]|k[io]|l[ae]|ke|nn|o[uv]|sz|y[knr]|z[a-z])\b'
),
(
  'NameRegExN', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b\w+n(?:a[bhmn]|bu|c[az]|e[kz]|ga|ho|i[fhijkqruvwy]|j[ai]|k[ilo]|n[aeinu]|ou|pd|sz|t[iul]|y[ikn]|z[b-z])\b'
),
(
  'NameRegExO', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b\w+o(?:ao|cz|e[kl]|ff|h[io]|i[fhijkquvwy]|k[io]|lo|mo|n[in]|[tv]i|ou|r[cf]|sz|u[aimnw]|va|y[kn]|z[io])\b'
),
(
  'NameRegExP', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b\w+p(?:cz|ho|i[fhijkqruvwy]|k[io]|nn|ou|sz|ur|y[kn]|z[a-z])\b'
),
(
  'NameRegExQ', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b\w+q(?:i[fhijkqruvwy]|k[io]|ou|[a-df-hjl-nr-tv-z][a-z])\b'
),
(
  'NameRegExR', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b\w+r(?:a[hjr]|ba|c[aoz]|dd|e[bckv]|fi|ho|i[bfhijkqruvwy]|k[aio]|nn|o[dmu]|ra|sz|ub|y[aeklnu]|z[a-z])\b'
),
(
  'NameRegExS', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b\w+s(?:ak|c[houz]|ev|h[iou]|i[fhijkqruvwy]|k[aeioy]|nn|ou|sz|uk|y[kn]|z[io])\b'
),
(
  'NameRegExT', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b\w+t(?:a[dio]|cz|ek|h[ou]|i[fhijkquvwy]|k[aio]|nn|ou|ri|s[az]|t[il]|ua|v[ai]|y[kn]|z[a-z])\b'
),
(
  'NameRegExU', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b\w+u(?:a[a-df-km-su-z]|bb|c[uz]|da|g[ag]|ho|i[fhijkqruvwy]|ji|k[io]|lu|n[inou]|ou|rg|sz|tz|u[aer]|wa|y[eikn]|z[eiou])\b'
),
(
  'NameRegExV', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b\w+v(?:a[a-df-kmo-qu-z]|be|cz|ho|i[cfhijkqrtuvwy]|k[aio]|nn|o[cu]|s[kz]|y[kn]|z[a-z])\b'
),
(
  'NameRegExW', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b\w+w(?:a[a-km-qt-vz]|b[aieoruy]|c[aehkosyz]|d[adeinou]|e[ikn]|ho|i[fhijkqruvwy]|k[io]|nn|ou|ra|sz|y[kn]|z[io])\b'
),
(
  'NameRegExX', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b\w+x(?:ai|ba|cz|ho|i[fhijkqruvwy]|k[io]|nn|ou|s[a-z]|t[a-xz]|[u-z][a-z])\b'
),
(
  'NameRegExY', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b\w+y(?:a[dhor]|ba|c[hkz]|d[ay]|el|ga|h[ao]|i[fhijkqru-wy]|k[aio]|li|n[an]|ou|ra|s[ksz]|t[ao]|[u-z][a-z])\b'
),
(
  'NameRegExZ', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b\w+z(?:[ai][a-rt-z]|[b-df-hjkmnp-z][a-z]|e[a-ce-mo-qt-z]|l[a-df-z]|o[b-rt-z])\b'
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
  '[\d,\.]+(?:st|nd|rd|th)?[\s\-\\\/]{1,2}(?:acre|autumn|beer|day|fairway|mile|pages?|pence|place|pound|min|story|summer|week|winter|yards?|yr)s?'
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