CREATE DATABASE galerie;

DROP TABLE photos;

CREATE TABLE photos(
    photo_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    path VARCHAR(255)
);


