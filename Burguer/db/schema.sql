CREATE DATABASE burguer_db;
USE burguer_db;

CREATE TABLE burguers
(
	id int NOT NULL AUTO_INCREMENT,
	burguer_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
