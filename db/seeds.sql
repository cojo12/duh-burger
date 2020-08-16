DROP DATABASE IF EXISTS burger_db;
CREATE database burger_db;

USE burger_db;

CREATE TABLE burger (
  id INT NOT NULL AUTO INCREMENT,
  burger_name VARCHAR (255) NOT NULL,
  inhaled BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);