CREATE DATABASE galerie;

DROP TABLE galerie;

CREATE TABLE photos(
    img_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    path VARCHAR(255)
);


