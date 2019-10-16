-- Up

INSERT INTO "Entity" 
( "label", "color", "domain", "type", "reg_ex" ) 
VALUES 
('AddressLine', '#80ff80', 'Location', 'Regular expression', '\b(?:\d{1,3}[a-z]{0,3}\s)(?:[''\.\-\w]*\s)?(?:approach|avenue|bank|close|cl|crescent|croft|court|drive|east|end|flats|field|heights|ga?r?de?ns|gate|grange|green|grove|hill|lane|ln|meadow|mews|north|parade|park|path|place|pl|rise|road|rd|row|square|south|street|st|terrace|view|walk|way|west|wood|yard)\b'),
('DateLong', '#ffb3ff', 'Time', 'Regular expression', '\b(?:[0123]?\d(?:st|nd|rd|th)?)(?:[\s\-\.]{0,3}|\sof\s)?(?:jan|janu?a?ry|feb|febr?ua?ry|mar|march|apr|april|may|jun|june|jul|july|aug|august|sept?|september|oct|october|nov|november|dec|december)(?:(?:[\s\-\.]{0,3})(?:\d\d|\d\d\d\d))\b'),
('MonthYear', '#d9006c', 'Time', 'Regular expression', '\b(?:jan|janu?a?ry|feb|febr?ua?ry|mar|march|apr|april|may|jun|june|jul|july|aug|august|sept?|september|oct|october|nov|november|dec|december)(?:(?:[\s\-\.]{0,3})(?:\d\d|\d\d\d\d))\b'),
('DayMonth', '#ff0080', 'Time', 'Regular expression', '\b(?:[0123]?\d(?:st|nd|rd|th)?)(?:[\s\-\.]{0,3}|\sof\s)(?:jan|janu?a?ry|feb|febr?ua?ry|mar|march|apr|april|may|jun|june|jul|july|aug|august|sept?|september|oct|october|nov|november|dec|december)\b'),
('WkDay', '#ff0099', 'Time', 'Regular expression', '\b(?:mon|monday|tues?|tuesday|wed|wednesday|thurs?|thursday|fri|friday|sat|saturday|sun|sunday)\s(?:the )?(?:[0123]?\d(?:st|nd|rd|th)?)\b'),
('DateShort1', '#ff75ff', 'Time', 'Regular expression', '\b[0123]?\d[\s\/]{1,3}[0123]?\d[\s\/]{1,3}\d{2,4}|\d{2,4}[\s\/]{1,3}[0123]?\d[\s\/]{1,3}[0123]?\d\b'),
('DateShort2', '#ff3eff', 'Time', 'Regular expression', '\b[0123]?\d[\s\-]{1,3}[0123]?\d[\s\-]{1,3}\d{2,4}|\d{2,4}[\s\-]{1,3}[0123]?\d[\s\-]{1,3}[0123]?\d\b'),
('DateShort3', '#e800e8', 'Time', 'Regular expression', '\b[0123]?\d[\s\.]{1,3}[0123]?\d[\s\.]{1,3}\d{2,4}|\d{2,4}[\s\.]{1,3}[0123]?\d[\s\.]{1,3}[0123]?\d\b'),
('Email', '#ff8000', 'Contact', 'Regular expression', '\b(?:[\w+\-\_\.]+)@(?:[\w+\-\_\.]+)\b'),
('NHSNumber', '#0040cc', 'NHSNumber', 'Regular expression', '[34679]\d\d\s?\d\d\d\s?\d\s?\d\s?\d\s?\d'),
('Person', '#0080ff', 'Person', 'Single term', NULL),
('PlaceName', '#80ff00', 'Location', 'Multiple term', NULL),
('Postcode', '#00ff00', 'Location', 'Regular expression', '\b(?:GIR|[a-zA-Z][a-zA-Z]?(?:[0-9][a-zA-Z]|[0-9]{1,2}))(?:[ ]{0,3})(?:[0-9][a-zA-Z]{2})\b'),
('Telephone', '#ff80ff', 'Contact', 'Regular expression', '(?:(\+|0{0,2})\d{1,2}\s*)?(?:\(?0?\)?\d\d\)?\s?\d\)?\s?\d\s?\d\d\s?\d\s?\d\s?\d\d?)'),
('Time24hr', '#dfbfff', 'Time', 'Regular expression', '\b(?:[01]\d|2[0123]|\d):[0-5]\d\b'),
('TimeAMPM', '#be7dff', 'Time', 'Regular expression', '\b(?:[12]?\d[\.:][0-5]\d|[1-9]|1[0-2])\s?(?:am|pm)\b'),
('TimeClock', '#8f20ff', 'Time', 'Regular expression', '\b(?:[1-9]|1[0-2])\s?o[''\s]{1,2}clock\b'),
('TitleName', '#3380ff', 'Person', 'Regular expression', '\b(?:Dr|Mr|Mrs|Prof|Rev|St)\.?\s[\w\-]+\b'),
('Uri', '#ffc58a', 'Contact', 'Regular expression', '\b(?:https?:\/\/)?www.[\w\/\-\._\d]+\b');

-- Down

DELETE FROM "Entity";