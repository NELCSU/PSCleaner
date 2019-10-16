-- Up

INSERT INTO "Placename"
("keyword")
VALUES
('X P School'),
('Xaverian College'),
('XII Apostles Roman Catholic Primary School');

-- Down

DELETE FROM "Placename" WHERE "keyword" LIKE 'x%';
