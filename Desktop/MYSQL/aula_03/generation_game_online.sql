CREATE DATABASE db_generation_game_online;
USE db_generation_game_online;

CREATE TABLE tb_classe(
id bigint AUTO_INCREMENT,
seres varchar(255) NOT NULL,
nivel varchar (255) NOT NULL,

PRIMARY KEY (id)
);

INSERT INTO tb_classe(nivel, seres)
VALUES ("Alfa", "humano");
INSERT INTO tb_classe(nivel, seres)
VALUES ("Beta", "multante");
INSERT INTO tb_classe(nivel, seres)
VALUES ("Gama", "multante");
INSERT INTO tb_classe(nivel, seres)
VALUES ("Ômega", "humano"); 
INSERT INTO tb_classe(nivel, seres)
VALUES ("Delta", "multante");     

CREATE TABLE tb_personagens(
id bigint AUTO_INCREMENT, 
nome varchar(255) NOT NULL,
poder varchar(255) NOT NULL,
grupo varchar(255) NOT NULL,
cidade varchar(255) NOT NULL,
niveldepoder int,
classe_id bigint,
PRIMARY KEY (id),
FOREIGN KEY (classe_id) REFERENCES tb_classe(id)
);

INSERT INTO tb_personagens(nome, poder, grupo, cidade, niveldepoder, classe_id)
VALUES ("Vampira", "Absorver poder", "xmen", "Mississipi", 3000, 2);

INSERT INTO tb_personagens(nome, poder, grupo, cidade, niveldepoder, classe_id)
VALUES ("Wolverine", "Garras de metal", "xmen", "canadá", 2000, 2);

INSERT INTO tb_personagens(nome, poder, grupo, cidade, niveldepoder, classe_id)
VALUES ("Magneto", "Domínio sobre metal", "xmen", "Transia", 4000, 4);

INSERT INTO tb_personagens(nome, poder, grupo, cidade, niveldepoder, classe_id)
VALUES ("Tempestade", "Mudar Clima", "xmen", "Krakoanos", 1000, 1);

INSERT INTO tb_personagem(nome, poder, grupo, cidade, niveldepoder, classe_id)
VALUES ("Noturno", "Teletrasporte", "xmen", "Krakoanos", 1500, 5);

INSERT INTO tb_personagens(nome, poder, grupo, cidade, niveldepoder, classe_id)
VALUES ("Feiticeira Escarlate", "Telecinese molecular", "xmen", "Transia", 5000, 5);

INSERT INTO tb_personagens(nome, poder, grupo, cidade, niveldepoder, classe_id)
VALUES ("Dominó", "Manipulação de Propabilidades", "xmen", "Terra-616", 4000, 3);

INSERT INTO tb_personagens(nome, poder, grupo, cidade, niveldepoder, classe_id)
VALUES ("Cifra", "Tradução Omnilingue", "xmen", "Krakoanos", 1000, 3);

SELECT * FROM tb_personagens WHERE niveldepoder > 2000;

SELECT * FROM tb_personagens WHERE niveldepoder BETWEEN 1000 AND 2000;

SELECT * FROM tb_personagens WHERE nome LIKE "%C%";

SELECT * FROM tb_personagens INNER JOIN tb_classe ON tb_personagens.classe_id = tb_classe.id;

SELECT * FROM tb_personagens INNER JOIN tb_classe ON tb_personagens.classe_id = tb_classe.id WHERE tb_classe.nivel = "Gama";
