-- Up

INSERT INTO "Entity" 
(
  "label", "color", "domain", "joinable", "mask",
  "type", "reg_ex"
) 
VALUES 
(
  'Address1',  '#80ff80', 'Location', 1, '**LOCATION**',
  'Regular expression', '\b(?:\d{1,4}[a-z]{0,3}\s)(?:[''\.\-\w]*\s)?(?:approach|avenue|bank|close|cl|crescent|croft|court|drive|east|end|flats|field|heights|ga?r?de?ns|gate|grange|green|grove|hill|lane|ln|meadow|mews|north|parade|park|path|place|pl|rise|road|rd|row|square|south|street|st|terrace|towers|view|walk|way|west|wood|yard)\b'
),
(
  'DateLong',  '#ffb3ff', 'DateTime', 0, '**DATETIME**',
  'Regular expression', '\b(?:[0123]?\d(?:st|nd|rd|th)?)(?:[\s\-\.]{0,3}|\sof\s)?(?:jan\.?|janu?a?ry|feb\.?|febr?ua?ry|mar\.?|march|apr\.?|april|may|jun\.?|june|jul\.?|july|aug\.?|august|sept?\.?|september|oct\.?|october|nov\.?|november|dec\.?|december)(?:(?:[\s\-\.]{0,3})(?:\d\d|\d\d\d\d))\b'
),
(
  'MonthYear', '#d9006c', 'DateTime', 0, '**DATETIME**',
  'Regular expression', '\b(?:jan\.?|janu?a?ry|feb\.?|febr?ua?ry|mar\.?|march|apr\.?|april|may|jun\.?|june|jul\.?|july|aug\.?|august|sept?\.?|september|oct\.?|october|nov\.?|november|dec\.?|december)(?:(?:[\s\-\.]{0,3})(?:\d\d|\d\d\d\d))\b'
),
(
  'DayMonth',  '#ff0080', 'DateTime', 0, '**DATETIME**',
  'Regular expression', '\b(?:[0123]?\d(?:st|nd|rd|th)?)(?:[\s\-\.]{0,3}|\sof\s)(?:jan\.?|janu?a?ry|feb\.?|febr?ua?ry|mar\.?|march|apr\.?|april|may|jun\.?|june|jul\.?|july|aug\.?|august|sept?\.?|september|oct\.?|october|nov\.?|november|dec\.?|december)\b'
),
(
  'WDayMonth', '#ff0099', 'DateTime', 0, '**DATETIME**',
  'Regular expression', '\b(?:(?:mon\.?|monday|tues?\.?|tuesday|wed\.?|wednesday|thurs?\.?|thursday|fri\.?|friday|sat\.?|saturday|sun\.?|sunday)\,?[\s\n]{1,3})?(?:jan\.?|janu?a?ry|feb\.?|febr?ua?ry|mar\.?|march|apr\.?|april|may|jun\.?|june|jul\.?|july|aug\.?|august|sept?\.?|september|oct\.?|october|nov\.?|november|dec\.?|december)\s(?:[0123]?\d(?:st|nd|rd|th)?)\b'
),
(
  'WDayDate',  '#ff0099', 'DateTime', 0, '**DATETIME**',
  'Regular expression', '\b(?:mon\.?|monday|tues?\.?|tuesday|wed\.?|wednesday|thurs?\.?|thursday|fri\.?|friday|sat\.?|saturday|sun\.?|sunday)\s(?:the )?(?:[0123]?\d(?:st|nd|rd|th))\b'
),
(
  'DateShort1','#ff75ff', 'DateTime', 0, '**DATETIME**',
  'Regular expression', '\b[0123]?\d[\s\/]{1,3}[0123]?\d[\s\/]{1,3}\d{2,4}|\d{2,4}[\s\/]{1,3}[0123]?\d[\s\/]{1,3}[0123]?\d\b'
),
(
  'DateShort2','#ff3eff', 'DateTime', 0, '**DATETIME**',
  'Regular expression', '\b[0123]?\d[\s\-]{1,3}[0123]?\d[\s\-]{1,3}\d{2,4}|\d{2,4}[\s\-]{1,3}[0123]?\d[\s\-]{1,3}[0123]?\d\b'
),
(
  'DateShort3','#e800e8', 'DateTime', 0, '**DATETIME**',
  'Regular expression', '\b[0123]?\d[\s\.]{1,3}[0123]?\d[\s\.]{1,3}\d{2,4}|\d{2,4}[\s\.]{1,3}[0123]?\d[\s\.]{1,3}[0123]?\d\b'
),
(
  'Email',     '#ff8000', 'Reference', 0, '**CONTACT**',
  'Regular expression', '\b(?:[\w+\-\_\.]+)@(?:[\w+\-\_\.]+)\b'
),
(
  'Nationality','#0050ff', 'Reference', 0, '**ATTRIBUTE**',
  'Multiple term', ''
),
(
  'NHSNumber', '#0040cc', 'RecordID', 0, '**RECORDID**',
  'Regular expression', '[34679]\d\d\s?\d\d\d\s?\d\s?\d\s?\d\s?\d'
),
(
  'Person',    '#0080ff', 'Person',   1, '**PERSON**',
  'Single term', ''
),
(
  'PlaceName', '#80ff00', 'Location', 1, '**LOCATION**',
  'Multiple term', ''
),
(
  'Postcode',  '#00ff00', 'Location', 1, '**LOCATION**',
  'Regular expression', '\b(?:GIR|[a-zA-Z][a-zA-Z]?(?:[0-9][a-zA-Z]|[0-9]{1,2}))(?:[ ]{0,3})(?:[0-9][a-zA-Z]{2})\b'
),
(
  'School',    '#80ff80', 'Location', 1, '**LOCATION**',
  'Regular expression', '\bschool of [\w\-]+\b'
),
(
  'TelUK',     '#ff80ff', 'Reference',0, '**CONTACT**',
  'Regular expression', '\(?0\d\d(?:\)?[\s\-]?\d\d\d|\d\)?[\s\-]?\d\d|\d\d\)?[\s\-]?\d|\d\s?\d\d\)?)[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d\d'
),
(
  'TelUKInt',  '#ff80ff', 'Reference',0, '**CONTACT**',
  'Regular expression', '(?:\+\(?44\)?|0044)\s?\(?0?\d\d(?:\)?[\s\-]?\d\d\d|\d\)?[\s\-]?\d\d|\d\d\)?[\s\-]?\d|\d\s?\d\d\)?)[\s\-]?\d[\s\-]?\d[\s\-]?\d[\s\-]?\d\d'
),
(
  'Time24hr',  '#dfbfff', 'DateTime', 0, '**DATETIME**',
  'Regular expression', '\b(?:[01]\d|2[0123]|\d):[0-5]\d(?:[:.]\d{1,4})?\b'
),
(
  'TimeAMPM',  '#be7dff', 'DateTime', 0, '**DATETIME**',
  'Regular expression', '\b(?:[12]?\d[\.:][0-5]\d|[1-9]|1[0-2])\s?(?:a\.?m\.?|p\.?m\.?)\b'
),
(
  'TimeClock', '#8f20ff', 'DateTime', 0, '**DATETIME**',
  'Regular expression', '\b(?:[1-9]|1[0-2])\s?o[''\s]{1,2}clock\b'
),
(
  'TitleName', '#3380ff', 'Person',   1, '**PERSON**',
  'Regular expression', '\b(?:Dr|Mr|Mrs|Prof|Rev|Sr|St)\.?\s[\w\-]+\b'
),
(
  'University','#80ff80', 'Location', 1, '**LOCATION**',
  'Regular expression', '\buniversity of (?:east|north|south|west)?\s?[\w\-]+\b'
),
(
  'Uri',       '#ffc58a', 'Reference',0, '**URL**',
  'Regular expression', '\b(?:(?:https?:\/\/)?www.[\w\/\?~&=%\+\-\._\d]+|https?:\/\/[\w\/\?~&=%\+\-\._\d]+)\b'
);

-- Down

DELETE FROM "Entity";