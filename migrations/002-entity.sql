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
  '\b(?:[1-9]\d{0,3}[a-z]{0,3}\s)(?:[''\.\-a-z]*\s)?(?:[a-z'']{3,}\s)(?:approach|avenue|bank|bay|bottom|boulevard|blvd|brae|close|crescent|croft|cottages?|court|drive|end|flats|field|heights|gardens|gate|grange|green|grove|hill|junction|lane|ln|lawns?|meads?|meadows?|mews|mills?|orchards?|parade|park|path|place|pl|ponds?|ridge|rise|road|rd|row|spinney|square|street|st|strand|terrace|towers|view|walk|way|woods?|yard)\b'
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
  '\b\w+(?:ak[ahiopsuy]s|dran?|\wcz\w+|\wham|\who|hoff|[a-hj-z]i[fhijkquvwy]|iute|[b-df-np-su-z]ir|\wou|\wova?|\w[eu]rg|ska|\w[cs]z|than|vsky|y[kn]|\w[kz][io])\b'
),
(
  'PersonRegExA',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+a(?:ba|[ntv]i|wy)\b'
),
(
  'PersonRegExC',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+c(?:ci|ek)\b'
),
(
  'PersonRegExD',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+d(?:za)\b'
),
(
  'PersonRegExE',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+e(?:jn|za)\b'
),
(
  'PersonRegExH',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+h(?:ek|le)\b'
),
(
  'PersonRegExI',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+i(?:a[abf-kmo-qu-z]|b[a-df-rt-z]|c[b-dfgijl-ru-xz]|je|ka|l[bcg-ju-xz]|t[acdgjl-npru-xz]|we|[xy][a-z]|z[a-df-y])\b'
),
(
  'PersonRegExJ',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+j(?:ah|on)\b'
),
(
  'PersonRegExK',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+k(?:w[aeiou])\b'
),
(
  'PersonRegExL',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+l(?:jo)\b'
),
(
  'PersonRegExN',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+n(?:ca|pd)\b'
),
(
  'PersonRegExO',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+o(?:[ntv]i|rf|ui)\b'
),
(
  'PersonRegExQ',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+q(?:ar)\b'
),
(
  'PersonRegExR',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+r(?:ba|ek|ib|ub)\b'
),
(
  'PersonRegExT',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+t(?:ri)\b'
),
(
  'PersonRegExU',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+u(?:ar|gg|ji)\b'
),
(
  'PersonRegExW',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+w(?:ek)\b'
),
(
  'PersonRegExY',
  '#00a0ff', 
  'Person', 
  1, 
  'PERSON', 
  0,
  'Regular expression', 
  '\b\w+y(?:ah|na)\b'
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