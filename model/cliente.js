const connection = require("../connection.js");

const cliente = {



	async criarTabela() {
		const conn = await connection();

		const query = `create table if not exists cliente(
			id int not null primary key auto_increment,
			nome varchar(255) not null,
			cpf varchar(14) not null unique,
			identidade varchar(10) not null,
			telefone varchar(14) not null,
			email varchar(255) not null unique,
			cidade varchar(255) not null,
			bairro varchar(255) not null,
			rua varchar(255) not null,
			cep varchar(8) not null,
			estado varchar(255) not null)`;

		await conn.query(query);

	}
};







module.exports = cliente;
