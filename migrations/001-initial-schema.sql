-- Up

CREATE TABLE AppSettings (
  "field" TEXT NOT NULL PRIMARY KEY,
  "value" TEXT NOT NULL
);

CREATE TABLE Entity (
  "id"        INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "label"     TEXT NOT NULL, 
  "color"     TEXT NOT NULL, 
  "domain"    TEXT NOT NULL,
  "joinable"  INTEGER NOT NULL,
  "type"      TEXT NOT NULL,
  "reg_ex"    TEXT NULL
);

CREATE INDEX Entity_ix_type ON Entity (type);

CREATE TABLE Person (
  keyword TEXT NOT NULL COLLATE NOCASE
);

CREATE TABLE Placename (
  keyword TEXT NOT NULL COLLATE NOCASE PRIMARY KEY
);

-- Down

DROP TABLE IF EXISTS AppSettings;

DROP INDEX Entity_ix_type;
DROP TABLE IF EXISTS Entity;

DROP TABLE IF EXISTS Person;
DROP TABLE IF EXISTS Placename;