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
  '\b(?:abbey|acres?|alley|allotments?|approach|avenue|back|bad|banks?|barns?|bay|beach|beacon|bottom|boulevard|braes?|bridge|broad(?:way)?|brook|buildings?|bush(?:es)?|canal|castle|causeway|central|circle|circus|cliffs?|cl[eo]ugh|close|common|coppices?|copses?|corner|cottages?|court(?:yard)?|cove|coverts?|creek|crescent|crofts?|cross(?:ing)?|dales?|ditch|docks?|downs?|drift|dr[io]ve|east|edge|esplanade|estate|farm|f[ae]lls?|fens?|ferry|fields?|flats?|fold|ford|forest|gap|gardens?|gates?|geos?|glades?|glens?|gor[gs]e|grange|greens?|grounds?|groves?|gully|h[ai]lls?|harbour|haven|head|heath|heights?|highway|hollow|houses?|islands?|isles?|jetty|junctions?|lakes?|lanes?|lawns?|ledge|leys?|loch|lodge|lower|manor|market|marsh(?:es)?|meadows?|meade?s?|mere|mews|m[ai]lls?|moors?|moss|mounts?|ness|north|orchards?|oval|paddocks?|parade|parks?|passage|pastures?|path|pier|pit|place|plains?|plaza|ponds?|pool|point|port|priory|promenade|quadrant|quarry|quay|range|rd|reach|reservoir|ridge|rise|rivers?|roads?|rocks?|rough|round|row|sands?|side|skerr(?:y|ies)|south|spa|spinney|springs?|square|station|strand|stream|street|strip|tarn|terrace|tor|towers?|towns?|upper|vale|valley|views?|villas?|villages?|walks?|walls?|water(?:s|fall)?|ways?|weirs?|west|wharf|wood(?:s|lands)?|yards?)\b'
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
  'Nationality', '#0050ff', 'Name', 'NAME', 'Multiple term', 
  1, 0, 1, 3,
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
  '\b[a-z]+(?:dran?|[a-z]cz[a-z]+|iute|lund)\b'
),
(
  'NameRegExA', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+a(?:a[a-z]|b[a-rt-z]|c[a-df-gijl-ru-xz]|d[a-df-np-rtu-xz]|e[a-ce-z]|f[a-dg-ru-xz]|g[a-df-hj-np-rt-xz]|h[b-rt-z]|i[abef-ko-qu-z]|j[a-z]|k[a-df-rt-xz]|l[bcghjnqru-xz]|m[cdf-hj-mqru-xz]|n[bcfhijl-np-ru-xz]|o[a-rt-z]|p[a-dfgi-np-ru-xz]|q[a-z]|r[acg-joqu-xz]|s[a-dfgijloqru-xz]|t[b-dfgi-ru-xz]|u[a-ce-km-qu-z]|v[b-df-np-xz]|w[a-jmo-qrt-z]|x[a-xz]|y[a-rt-z]|z[a-df-xz])\b'
),
(
  'NameRegExB', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+b(?:a[a-dfh-kmo-qtu-z]|b[a-xz]|[cdf-hjkmnpqstv-z][a-z]|e[a-cfg-km-qu-xz]|i[bfh-mo-ru-z]|k[io]|l[a-df-xz]|nn|o[a-mpuvz]|r[b-df-z]|u[acfh-mo-ru-xz]|y[kn]|z[a-z])\b'
),
(
  'NameRegExC', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+c(?:a[acdg-koquvz]|e[bcf-kmoqu-xz]|h[b-df-rt-xz]|i[bf-kqru-z]|k[a-ot-xz]|l[b-df-np-xz]|nn|ou|sz|y[knr]|[b-dfjz][a-z])\b'
),
(
  'NameRegExD', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+d(?:a[a-cf-kn-qu-xz]|e[a-cf-ko-qt-vz]|g[a-df-xz]|i[bf-kmp-ru-wyz]|l[a-df-hj-xz]|n[a-ru-z]|o[abd-fh-kpquvyz]|r[b-xz]|s[a-su-xz]|t[a-fh-z]|u[cdf-lnoqrt-z]|y[a-df-km-z]|[b-dfhjkmpqv-xz][a-z])\b'
),
(
  'NameRegExE', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+e(?:a[a-cgijoqu-z]|b[b-np-ru-xz]|c[b-dfgijl-ru-xz]|d[a-df-np-rt-xz]|e[a-ceg-joqu-z]|f[a-ru-xz]|g[b-df-lnp-rt-xz]|h[a-z]|i[be-kmo-qu-z]|j[a-z]|k[a-rt-xz]|l[bcghjknoqru-xz]|m[b-df-mqru-xz]|n[bcfh-np-rv-xz]|o[a-eg-qt-vx-z]|p[a-df-ru-xz]|q[a-z]|r[g-jqru-xz]|s[b-dfgijl-ru-xz]|t[b-dfgj-np-rt-xz]|u[a-ce-lnoqt-z]|v[a-df-xz]|w[a-mo-ru-xz]|x[a-df-hj-xz]|y[a-df-rt-z]|z[a-df-xz])\b'
),
(
  'NameRegExF', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+f(?:a[lk]e[ft]|ho|i[e-kqru-wy]|ja|k[io]|li|n[in]|ou|sz|y[kn]|[bcqz][a-z])\b'
),
(
  'NameRegExG', '#00a0ff', 'Name', 'NAME', 'Regular expression', 
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+g(?:aj|cz|h[ao]|i[fhi-kmoqruvwy]|ji|k[aio]|lu|ma|n[an]|ou|sz|ui|we|xi|y[aeiknu]|[qz][a-z])\b'
),
(
  'NameRegExH', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+h(?:a[dikmnor]|cz|da|e[kv]|ho|i[afhijkqruvwy]|k[io]|le|n[ny]|ou|sz|um|wa|y[kn]|ra|[qvz][a-z])\b'
),
(
  'NameRegExI', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+i(?:a[abf-kmo-qu-z]|b[a-df-rt-z]|c[b-df-jl-ru-xz]|d[it]|e[cknv]|f[al]|ho|ir|j[aeknt]|k[aio]|l[bcg-ju-xz]|n[in]|ou|pa|r[io]|sz|t[acdgjl-npru-xz]|uc|w[ae]|[xy][a-z]|z[a-df-y])\b'
),
(
  'NameRegExJ', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+j(?:[a-df-z][a-z]|e[a-su-z])\b'
),
(
  'NameRegExK', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+k(?:a[jnrs]|cz|h[aeos]|i[a-cfh-kmqrsu-z]|k[io]|nn|o[su]|p[s]|ro|s[asz]|ta|u[fns]|w[aeiou]|y[kns]|[qz][a-z])\b'
),
(
  'NameRegExL', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+l(?:a[afh-loquvz]|b[a-rt-xz]|c[a-gi-xz]|d[a-rt-xz]|e[bcfhjko-quvz]|f[a-ru-xz]|g[a-df-xz]|i[bf-moqru-z]|k[a-rt-xz]|l[b-np-ru-xz]|m[a-rt-xz]|o[a-fh-koquvxz]|p[a-rt-xz]|r[a-xz]|s[a-df-su-z]|t[a-gi-rt-xz]|u[acdfh-ln-rt-wyz]|v[a-df-z]|y[a-km-rt-wyz]|[hjnqwxz][a-z])\b'
),
(
  'NameRegExM', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+m(?:a[a-kmoqu-wyz]|[bn][a-rt-z]|e[a-ce-kmo-qu-z]|i[bf-kmo-ru-z]|l[a-xz]|m[b-df-xz]|o[a-lo-qt-wz]|p[a-gj-nru-xz]|u[a-ln-pu-wyz]|y[a-km-z]|[cdf-hjkqr-tv-xz][a-z])\b'
),
(
  'NameRegExN', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+n(?:a[bhjmn]|b[ou]|c[az]|di|e[kz]|ga|ho|i[f-kqru-wy]|j[ai]|k[ailo]|n[aeinu]|o[uv]|pd|sz|t[iluz]|x[a-z]|y[ikn]|[qz][b-z])\b'
),
(
  'NameRegExO', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+o(?:a[a-cg-joqu-z]|b[a]|c[z]|e[kln]|f[fo]|h[io]|i[fhijkqu-z]|k[io]|ja|lo|mo|n[in]|[tv]i|ou|r[cf]|sz|u[aim-owx]|va|y[kn]|z[a-df-xz])\b'
),
(
  'NameRegExP', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+p(?:cz|ho|i[fhijkqruvwy]|k[io]|nn|ou|sz|ur|y[kn]|z[a-z])\b'
),
(
  'NameRegExQ', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+q(?:i[fhijkqruvwy]|k[io]|ou|[a-df-hjl-nr-tv-z][a-z])\b'
),
(
  'NameRegExR', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+r(?:a[acfh-koqruvz]|b[a-rt-xz]|c[aoz]|dd|e[bcgkvz]|fi|ga|ho|i[bfh-kqru-wy]|k[aio]|nn|o[dmu]|ra|s[iz]|ta|ub|y[aeklnu]|[qz][a-z])\b'
),
(
  'NameRegExS', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+s(?:ak|c[houz]|ev|h[iou]|i[fhijkqruvwy]|k[aeioy]|nn|ou|sz|uk|wa|y[kn]|[bz][a-z])\b'
),
(
  'NameRegExT', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+t(?:a[dhio]|c[a-gi-z]|e[bcfghjkoqu-wz]|h[b-df-hj-ln-rt-xz]|i[bfhijkqu-z]|l[a-df-xz]|o[a-df-ktuvz]|r[b-df-np-su-xz]|s[a-fg-tv-xz]|t[b-df-np-rt-xz]|u[acf-oqt-z]|[bdfgjkmnpqv-z][a-z])\b'
),
(
  'NameRegExU', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+u(?:a[a-df-km-su-z]|bb|c[uz]|da|g[ag]|ho|i[fhijkqruvwy]|ji|k[ios]|lu|n[inou]|ou|rg|s[iz]|tz|u[aer]|wa|y[eikn]|z[eiou])\b'
),
(
  'NameRegExV', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+v(?:a[a-df-kmo-qu-z]|be|cz|ho|i[cfhijkqrtuvwy]|k[aioy]|nn|o[cu]|s[kz]|y[kn]|[qpz][a-z])\b'
),
(
  'NameRegExW', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+w(?:a[a-km-qt-vz]|b[aieoruy]|c[aehkosyz]|d[adeinou]|e[ikn]|ho|i[fhijkqruvwy]|k[io]|nn|ou|ra|sz|y[kn]|z[io])\b'
),
(
  'NameRegExX', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+x(?:ai|ba|cz|ho|i[fhijkqruvwy]|k[io]|nn|ou|s[a-z]|t[a-xz]|[u-z][a-z])\b'
),
(
  'NameRegExY', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+y(?:a[dhor]|ba|c[hkz]|d[ady]|el|ga|h[ao]|i[fhijkqru-wy]|k[aio]|li|n[an]|ou|ra|s[ksz]|t[ao]|[u-z][a-z])\b'
),
(
  'NameRegExZ', '#00a0ff', 'Name', 'NAME', 'Regular expression',
  1, 0, 1, 2,
  '\b[a-zàèéìòóùäöüß]+z(?:[ai][a-rt-z]|[b-df-hjkmnp-z][a-z]|e[a-ce-mo-qt-z]|l[a-df-z]|o[b-rt-z])\b'
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
  'SkipPOSRegEx', '#ccddee', 'Skip', 'SKIP', 'Regular expression',
  1, 1, 0, 1, 
  '(?:\b\w+n''t\b|i\.e\.|e\.g\.)'
),
(
  'SkipLeadingNumberRegEx', '#ccddee', 'Skip', 'SKIP', 'Regular expression',
  1, 1, 0, 1, 
  '[\d,\.]+(?:st|nd|rd|th)?[\s\-\\\/]{1,2}(?:acre|autumn|beer|day|fairway|mile|page|pence|place|pound|min|story|summer|week|winter|yard|yr)s?'
),
(
  'SkipTrailingNumberRegEx', '#ccddee', 'Skip', 'SKIP', 'Regular expression',
  1, 1, 0, 1, 
  '(?:clause|page)\s[\d]+'
),
(
  'SkipWordDurationRegEx', '#ccddee', 'Skip', 'SKIP', 'Regular expression',
  1, 1, 0, 1, 
  '\b(?:one|first|two|second|three|third|four|forth|five|fifth|six|seven|eight|nine|ten|hundred)[\s\-\\/]{1,2}(?:acre|autumn|beer|day|mile|page|pence|place|pound|story|summer|week|winter)s?\b'
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
  'Territory', '#80ff80', 'Name', 'NAME', 'Multiple term',
  1, 0, 1, 3,
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