-- Up

INSERT INTO "Entity" 
( "name", "color", "domain", "type", "reg_ex" ) 
VALUES 
('AddressLine', '#008040', 'Location', 'Regular expression', '\b(?:\d+[a-z]*)\s(?:[''\.\-\w]*)\s(?:approach|avenue|bank|close|cl|crescent|croft|court|drive|east|end|field|heights|ga?r?de?ns|gate|grange|green|grove|hill|lane|ln|meadow|mews|north|parade|park|path|place|pl|rise|road|rd|row|square|south|street|st|terrace|view|walk|way|west|wood|yard)\b'),
('DateLong', '#00ff80', 'Time', 'Regular expression', '\b(?:[0123]?\d(?:st|nd|rd|th)?)(?:[\s\-\.]{0,3}|\sof\s)?(?:jan|janu?a?ry|feb|febr?ua?ry|mar|march|apr|april|may|jun|june|jul|july|aug|august|sept?|september|oct|october|nov|november|dec|december)(?:(?:[\s\-\.]{0,3})(?:\d\d|\d\d\d\d))\b'),
('DayMonth', '#00ff80', 'Time', 'Regular expression', '\b(?:[0123]?\d(?:st|nd|rd|th)?)(?:[\s\-\.]{0,3}|\sof\s)(?:jan|janu?a?ry|feb|febr?ua?ry|mar|march|apr|april|may|jun|june|jul|july|aug|august|sept?|september|oct|october|nov|november|dec|december)\b'),
('DateShort', '#00ff90', 'Time', 'Regular expression', '\b[0123]?\d[\s\-\.\/]{1,3}[0123]?\d[\s\-\.\/]{1,3}\d{2,4}|\d{2,4}[\s\-\.\/]{1,3}[0123]?\d[\s\-\.\/]{1,3}[0123]?\d\b'),
('Email', '#ff8000', 'Contact', 'Regular expression', '\b(?:[\w+\-\_\.]+)@(?:[\w+\-\_\.]+)\b'),
('Firstname', '#2bbaff', 'Person', 'Word list', NULL),
('NHSNumber', '#0040cc', 'NHSNumber', 'Regular expression', '[34679]\d\d\s?\d\d\d\s?\d\s?\d\s?\d\s?\d'),
('PlaceName', '#00ff00', 'Location', 'Word list', NULL),
('Postcode', '#e9d696', 'Location', 'Regular expression', '\b(?:GIR|[a-zA-Z][a-zA-Z]?(?:[0-9][a-zA-Z]|[0-9]{1,2}))(?:[ ]{0,3})(?:[0-9][a-zA-Z]{2})\b'),
('Surname', '#0080ff', 'Person', 'Word list', NULL),
('Telephone', '#ff80ff', 'Contact', 'Regular expression', '(?:(\+|0{0,2})\d{1,2}\s*)?(?:\(?0?\)?\d\d\)?\s?\d\)?\s?\d\s?\d\d\s?\d\s?\d\s?\d\d?)'),
('Time24hr', '#00ff80', 'Time', 'Regular expression', '\b(?:[01]\d|2[0123]|\d):[0-5]\d\b'),
('TimeAMPM', '#00ff80', 'Time', 'Regular expression', '\b(?:[12]?\d[\.:][0-5]\d|[1-9]|1[0-2])\s?(?:am|pm)\b'),
('TimeClock', '#00ff80', 'Time', 'Regular expression', '\b(?:[1-9]|1[0-2])\s?o[''\s]{1,2}clock\b'),
('TitleName', '#3380ff', 'Person', 'Regular expression', '\b(?:Dr|Mr|Mrs|Prof|Rev|St)\.?\s[\w\-]+\b'),
('Uri', '#998000', 'Contact', 'Regular expression', '\b(?:https?:\/\/)?www.[\w\/\-\._\d]+\b');

-- Down

DELETE FROM "Entity";