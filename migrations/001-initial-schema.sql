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
  discard   INTEGER NOT NULL,
  joinable  INTEGER NOT NULL,
  type      TEXT    NOT NULL,
  mask      TEXT    NOT NULL,
  reg_ex    TEXT    NOT NULL
);

CREATE INDEX Entity_ix_type ON Entity (type);

CREATE TABLE Part (
  id      INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  keyword TEXT    NOT NULL COLLATE NOCASE
);

CREATE INDEX Part_ix_keyword ON Part (keyword);

CREATE TABLE Person (
  id      INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  keyword TEXT    NOT NULL COLLATE NOCASE
);

CREATE INDEX Person_ix_keyword ON Person (keyword);

CREATE TABLE Placename (
  id      INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  keyword TEXT    NOT NULL COLLATE NOCASE
);

CREATE INDEX Placename_ix_keyword ON Placename (keyword);

CREATE TABLE PlacenameSuffix (
  id        INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  keyword   TEXT    NOT NULL COLLATE NOCASE,
  strength  NUMBER  NOT NULL
);

CREATE INDEX PlacenameSuffix_ix_keyword ON PlacenameSuffix (keyword);

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

DROP INDEX Part_ix_keyword;
DROP TABLE IF EXISTS Part;

DROP INDEX Person_ix_keyword;
DROP TABLE IF EXISTS Person;

DROP INDEX Placename_ix_keyword;
DROP TABLE IF EXISTS Placename;

DROP INDEX PlacenameSuffix_ix_keyword;
DROP TABLE IF EXISTS PlacenameSuffix;

DROP INDEX Nationality_ix_keyword;
DROP TABLE IF EXISTS Nationality;

DROP INDEX Territory_ix_keyword;
DROP TABLE IF EXISTS Territory;