CREATE DATABASE IF NOT EXISTS mvp;

USE mvp;

DROP TABLE IF EXISTS cars;

CREATE TABLE cars(
  id INT NOT NULL AUTO_INCREMENT,
  price VARCHAR(8) NOT NULL,
  year INT,
  manufacturer VARCHAR(15),
  model VARCHAR(30),
  physical_condition VARCHAR(12),
  cylinders VARCHAR(12),
  fuel VARCHAR(8) NOT NULL,
  odometer INT,
  title_status VARCHAR(7) NOT NULL,
  transmission VARCHAR(9) NOT NULL,
  VIN VARCHAR(17),
  drive VARCHAR(3),
  type VARCHAR(11),
  paint_color VARCHAR(6),
  image_url VARCHAR(80) NOT NULL,
  state VARCHAR(2) NOT NULL,
  latitude DECIMAL(11, 7),
  longitude DECIMAL(11, 7),
  posting_date DATE NOT NULL,
  PRIMARY KEY (id)
);

LOAD DATA LOCAL INFILE '../data/cleanedVehicles.csv'
INTO TABLE cars
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;