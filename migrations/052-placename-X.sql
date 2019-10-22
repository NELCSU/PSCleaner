-- Up
INSERT INTO "Placename"
("keyword")
VALUES

('XII Apostles Roman Catholic Primary School');
-- Down
DELETE FROM "Placename" WHERE "keyword" LIKE 'x%';
