CREATE DATABASE IF NOT EXISTS denoland;
USE denoland;
CREATE TABLE IF NOT EXISTS users (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  country varchar(100) NOT NULL,
  created_at timestamp not null default current_timestamp,
  PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO users(name, country) 

VALUES('John', 'USA'),
  ('Jane', 'USA'),
  ('Bob', 'USA'),
  ('Mary', 'USA'),
  ('Peter', 'USA'),
  ('Kate', 'USA'),
  ('Mike', 'USA'),
  ('Lily', 'USA'),
  ('Linda', 'USA'),
  ('Tom', 'USA'),
  ('Rose', 'USA')
;

SELECT * FROM users;