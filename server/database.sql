CREATE DATABASE galerie;

DROP TABLE galerie1;

CREATE TABLE galerie1(
    img_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    path VARCHAR(255)
);


