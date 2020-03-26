-- Up

CREATE TABLE AppSettings (
  "field" TEXT NOT NULL PRIMARY KEY,
  "value" TEXT NOT NULL
);

-- Down

DROP TABLE IF EXISTS AppSettings;