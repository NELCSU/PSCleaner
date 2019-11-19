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
  '\b(?:[1-9]\d{0,3}[a-z]{0,3}\s)(?:[''\.\-\w]*\s)?(?:[''\.\-\w]*\s)?(?:approach|avenue|bank|close|cl\.|crescent|croft|court|drive|end|flats|field|heights|gardens|gate|grange|green|grove|hill|lane|ln\.|meadow|mews|parade|park|path|place|pl\.|rise|road|rd\.|row|square|street|st\.|strand|terrace|towers|view|walk|way|wood|yard|north|south|east|west)(?:\s(?:north|south|east|west))?\b'
),
(
  'Address2',  
  '#80ff70', 
  'Location', 
  0, 
  'LOCATION', 
  0,
  'Regular expression', 
  '\b(?:Suite\s(?:\w+)|\d+(st|nd|rd|th)\sFloor)\b'
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
  '\b[0123]?\d[\s\/]{1,3}[0123]?\d[\s\/]{1,3}\d{2,4}|\d{2,4}[\s\/]{1,3}[0123]?\d[\s\/]{1,3}[0123]?\d\b'
),
(
  'DateShort2',
  '#ff3eff', 
  'DateTime', 
  0, 
  'DATETIME', 
  0,
  'Regular expression', 
  '\b[0123]?\d[\s\-]{1,3}[0123]?\d[\s\-]{1,3}\d{2,4}|\d{2,4}[\s\-]{1,3}[0123]?\d[\s\-]{1,3}[0123]?\d\b'
),
(
  'DateShort3',
  '#e800e8', 
  'DateTime', 
  0, 
  'DATETIME', 
  0,
  'Regular expression', 
  '\b[0123]?\d[\s\.]{1,3}[0123]?\d[\s\.]{1,3}\d{2,4}|\d{2,4}[\s\.]{1,3}[0123]?\d[\s\.]{1,3}[0123]?\d\b'
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
  '\b[\d,\.]+[\s\-\\/]{1,2}(?:autumn|day|mark|summer|week|winter)s?\b'
),
(
  'PartWordDurationRegEx',  
  '#ccddee', 
  'Part', 
  0, 
  'PART', 
  1,
  'Regular expression', 
  '\b(?:one|first|two|second|three|third|four|forth|five|fifth|six|seven|eight|nine|ten)[\s\-\\/]{1,2}(?:autumn|day|summer|week|winter)s?\b'
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
  '\b\w+(?:ajah|cci|ch?ek|dran?|\wcz\w+|hoff|itz|iwe|mir|orf|oti|\wova?|\w[eu]rg|ska|\w[cs]z|than|uji|vsky|y[kn])\b'
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
  '(?:\+\(?44\)?|0044)\s?\(?0?\d\d(?:\)?[\s\-]?\d\d\d|\d\)?[\s\-]?\d\d|\d\d\)?[\s\-]?\d|\d\s?\d\d\)?)[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d\d'
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
  '\b(?:Mr|Ms|Mrs|Prof)\.?\s(?:\w\.?\s)?[\w\-]+\b'
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
  '\b(?:(?:https?:\/\/)?www.[\w\/\?~&=%\+\-\._\d]+|https?:\/\/[\w\/\?~&=%\+\-\._\d]+)\b'
);

-- Down

DELETE FROM "Entity";