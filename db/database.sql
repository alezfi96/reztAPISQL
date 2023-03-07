CREATE DATABASE   IF NOT EXISTS companydb;

USE companydb;
CREATE  TABLE employee(

    id INT (11)NOT NULL AUTO_INCREMENT,
    name VARCHAR (45) DEFAULT NULL,
    salary INT (5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT  INTO employee VALUES 
(1,'FERNEY FIGUEROA ',2000),
(2,'FERNANDO HERRERA ',1000),
(3,'NODE JS ',3000),
(4,'EXPRESS',4000);