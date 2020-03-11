DELETE FROM PlaceName WHERE keyword = 'Done';
INSERT INTO SkipOrJoin (keyword) VALUES ('Done');

-- INSERT INTO Name (keyword) VALUES ('Bev');

SELECT DISTINCT
p.keyword
FROM `Placename` AS p
WHERE LENGTH(p.keyword) = 4
AND keyword LIKE 'd%'
ORDER BY p.keyword ASC
LIMIT 1000
;

