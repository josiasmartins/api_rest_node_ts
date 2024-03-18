-- create user 
CREATE USER '<name-user>'@'localhost' IDENTIFIED BY '<your-password>';

-- atribuir todas as permissões
GRANT ALL PRIVILEGES ON * . * TO '<name_user>'@'localhost';
-- all privileges again
FLUSH PRIVILEGES;

-- database

CREATE DATABASE api_rest_typescript;

use api_rest_typescript;

-- Tabela para armazenar os assuntos
CREATE TABLE subject (
    id INT NOT NULL AUTO_INCREMENT, -- Identificador único do assunto
    name TEXT NOT NULL, -- Nome do assunto
    PRIMARY KEY (id)
);

-- Tabela para armazenar as salas
CREATE TABLE rooms (
    id INT NOT NULL AUTO_INCREMENT, -- Identificador único da sala
    name TEXT NOT NULL, -- Nome da sala
    description TEXT, -- Descrição da sala
    PRIMARY KEY (id)
);

-- Tabela para armazenar os vídeos
CREATE TABLE videos (
    id INT NOT NULL AUTO_INCREMENT, -- Identificador único do vídeo
    title TEXT NOT NULL, -- Título do vídeo
    url TEXT NOT NULL, -- URL do vídeo
    room_id INT, -- Identificador da sala associada ao vídeo
    PRIMARY KEY (id),
    FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- Tabela de associação entre salas e assuntos
CREATE TABLE room_subject (
    room_id INT NOT NULL, -- Identificador da sala
    subject_id INT NOT NULL, -- Identificador do assunto
    INDEX IDX_f227421d2ef64ab086261ac07f (room_id),
    INDEX IDX_a05f10c497f5f7db3022664a6d (subject_id),
    PRIMARY KEY (room_id, subject_id),
    FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE ON UPDATE CASCADE, -- Chave estrangeira para a tabela de salas
    FOREIGN KEY (subject_id) REFERENCES subject(id) ON DELETE NO ACTION ON UPDATE NO ACTION -- Chave estrangeira para a tabela de assuntos
);
