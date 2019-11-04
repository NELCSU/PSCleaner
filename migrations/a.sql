DELETE FROM TempPlacename;

INSERT INTO TempPlacename
(keyword)
VALUES

;

-- SQLite


SELECT 
  dup.keyword
FROM `TempPlacename` AS dup
GROUP BY dup.keyword
HAVING COUNT(*) > 1;



SELECT
  dup.keyword
FROM TempPlacename AS dup
  INNER JOIN Placename AS p
    ON dup.keyword = p.keyword;