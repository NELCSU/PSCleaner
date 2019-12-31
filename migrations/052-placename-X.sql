-- Up
INSERT INTO Placename (keyword)
VALUES
('Xai Xai'),
('Xaviers'),
('Xiamen'),
('Xian'),
('Xiangtan'),
('Xiangyang'),
('Xianning'),
('Xianyang'),
('Xiaogan'),
('Xichang'),
('XII Apostles'),
('Xilinhot'),
('Xining'),
('Xinxiang'),
('Xuchang');
-- Down
DELETE FROM Placename WHERE keyword LIKE 'x%';