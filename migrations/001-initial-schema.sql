-- Up

CREATE TABLE AppSettings (
  "field" TEXT NOT NULL PRIMARY KEY,
  "value" TEXT NOT NULL
);

CREATE TABLE Entity (
  id        INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  label     TEXT    NOT NULL, 
  color     TEXT    NOT NULL, 
  domain    TEXT    NOT NULL,
  enabled   INTEGER NOT NULL,
  priority  INTEGER NOT NULL,
  discard   INTEGER NOT NULL,
  joinable  INTEGER NOT NULL,
  type      TEXT    NOT NULL,
  mask      TEXT    NOT NULL,
  reg_ex    TEXT    NOT NULL
);

CREATE INDEX Entity_ix_type ON Entity (type);

CREATE TABLE Skip (
  id      INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  keyword TEXT    NOT NULL COLLATE NOCASE
);

CREATE INDEX Skip_ix_keyword ON Skip (keyword);

CREATE TABLE SkipOrJoin (
  id      INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  keyword TEXT    NOT NULL COLLATE NOCASE
);

CREATE INDEX SkipOrJoin_ix_keyword ON SkipOrJoin (keyword);

CREATE TABLE Name (
  id      INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  keyword TEXT    NOT NULL COLLATE NOCASE
);

CREATE INDEX Name_ix_keyword ON Name (keyword);

CREATE TABLE Placename (
  id      INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  keyword TEXT    NOT NULL COLLATE NOCASE
);

CREATE INDEX Placename_ix_keyword ON Placename (keyword);

CREATE TABLE Nationality (
  id      INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  keyword TEXT    NOT NULL COLLATE NOCASE
);

CREATE INDEX Nationality_ix_keyword ON Nationality (keyword);

CREATE TABLE Territory (
  id      INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  keyword TEXT    NOT NULL COLLATE NOCASE
);

CREATE INDEX Territory_ix_keyword ON Territory (keyword);

-- Down

DROP TABLE IF EXISTS AppSettings;

DROP INDEX Entity_ix_type;
DROP TABLE IF EXISTS Entity;

DROP INDEX Skip_ix_keyword;
DROP TABLE IF EXISTS Skip;

DROP INDEX SkipOrJoin_ix_keyword;
DROP TABLE IF EXISTS SkipOrJoin;

DROP INDEX Name_ix_keyword;
DROP TABLE IF EXISTS Name;

DROP INDEX Placename_ix_keyword;
DROP TABLE IF EXISTS Placename;

DROP INDEX Nationality_ix_keyword;
DROP TABLE IF EXISTS Nationality;

DROP INDEX Territory_ix_keyword;
DROP TABLE IF EXISTS Territory;