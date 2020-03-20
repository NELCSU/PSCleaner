-- Up

CREATE TABLE AppSettings (
  "field" TEXT NOT NULL PRIMARY KEY,
  "value" TEXT NOT NULL
);

CREATE TABLE Skip (
  id            INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  keyword       TEXT    NOT NULL COLLATE NOCASE,
  allow_suffix  INTEGER NOT NULL DEFAULT 0
);

CREATE UNIQUE INDEX Skip_ix_keyword ON Skip (keyword);

CREATE TABLE SkipOrJoin (
  id            INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  keyword       TEXT    NOT NULL COLLATE NOCASE,
  allow_suffix  INTEGER NOT NULL DEFAULT 1
);

CREATE UNIQUE INDEX SkipOrJoin_ix_keyword ON SkipOrJoin (keyword);

CREATE TABLE Placename (
  id            INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  keyword       TEXT    NOT NULL COLLATE NOCASE,
  allow_suffix  INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX Placename_ix_keyword ON Placename (keyword);

-- Down

DROP TABLE IF EXISTS AppSettings;

DROP INDEX Skip_ix_keyword;
DROP TABLE IF EXISTS Skip;

DROP INDEX SkipOrJoin_ix_keyword;
DROP TABLE IF EXISTS SkipOrJoin;

DROP INDEX Placename_ix_keyword;
DROP TABLE IF EXISTS Placename;