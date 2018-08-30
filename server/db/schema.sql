DROP DATABASE react_blog;
CREATE DATABASE react_blog;

\c react_blog

CREATE TABLE users (
  id         SERIAL PRIMARY KEY NOT NULL,
  name       VARCHAR(50) NOT NULL,
  username   VARCHAR(50) NOT NULL,
  email      VARCHAR(50) NOT NULL,
  password   VARCHAR(100) NOT NULL,
  avatar_url VARCHAR(255)
);

CREATE TABLE entries (
  id           SERIAL PRIMARY KEY NOT NULL,
  date_created INTEGER NOT NULL,
  location     VARCHAR(255) NOT NULL,
  title        VARCHAR (500) NOT NULL,
  content      TEXT NOT NULL,
  user_id      INTEGER NOT NULL
);
