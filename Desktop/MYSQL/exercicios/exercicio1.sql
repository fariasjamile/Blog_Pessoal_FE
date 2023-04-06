CREATE DATABASE exercicio1;

USE exercicio1;

CREATE TABLE tb_colaboradores( 
id bigint auto_increment,
nome varchar(255) not null,
sobrenome varchar(255) not null,
cargo varchar (255) not null,
departamento varchar (255) not null,
salario decimal not null,
PRIMARY KEY (id)
);
 SELECT * FROM tb_colaboradores;
 
insert into tb_colaboradores(nome, sobrenome, cargo, departamento, salario)
values ("jamile", "farias", "Diretora", "RH", 5.000);
insert into tb_colaboradores(nome, sobrenome, cargo, departamento, salario)
values ("kauane", "farias", "desenvolvedora", "Desenvolvimento de sistemas", 4.000);
insert into tb_colaboradores(nome, sobrenome, cargo, departamento, salario)
values ("Lorena", "Farias", "Cordenação", "Diretoria", 1.000);
insert into tb_colaboradores(nome, sobrenome, cargo, departamento, salario)
values ("Marta", "Farias", "Gerente", "RH", 4.500);
insert into tb_colaboradores(nome, sobrenome, cargo, departamento, salario)
values ("hobi", "lima", "atendente", "RH", 2.500);

SET SQL_SAFE_UPTADES = 0;

rename table tb_colaboradores TO Funcionarios;

SELECT * FROM tb_colaboradores WHERE salario > 2000;

SELECT * FROM tb_colaboradores WHERE salario < 2000;

UPDATE funcionarios SET Cargo = "vendedora" where id = 2; 







;
