-- Create the database task_saver_db and specified it for use.
DROP DATABASE IF EXISTS sushi_db;
CREATE DATABASE sushi_db;


-- Create the table tasks.
USE sushi_db;
CREATE TABLE orders
(
id int NOT NULL AUTO_INCREMENT,
rollName varchar(255) NOT NULL,
quantity int NOT NULL,
tableNumber int NOT NULL,
PRIMARY KEY (id)
);

USE sushi_db;
CREATE TABLE food
(
id int NOT NULL AUTO_INCREMENT,
price int NOT NULL,
rollName varchar(255) NOT NULL,
category varchar(255) NOT NULL,
PRIMARY KEY (id)
);
 