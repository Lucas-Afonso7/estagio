CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
   );
   //Adicionando photo
ALTER TABLE users
    ADD COLUMN photo VARCHAR(255) NULL;

