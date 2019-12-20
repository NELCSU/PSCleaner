-- Up
INSERT INTO Placename (keyword)
VALUES
('Xai Xai'),
('Xalapa'),
('Xaviers'),
('Xiamen'),
('Xian'),
('Xiangtan'),
('Xiangyang'),
('Xianning'),
('Xiantao'),
('Xianyang'),
('Xiaogan'),
('Xichang'),
('XII Apostles'),
('Xilinhot'),
('Xingtai'),
('Xining'),
('Xinji'),
('Xintai'),
('Xinxiang'),
('Xinyi'),
('Xinzhou'),
('Xochimilco'),
('Xo‘jayli'),
('Xuchang');

-- Down
DELETE FROM Placename WHERE keyword LIKE 'x%';