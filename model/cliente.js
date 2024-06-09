const connection = require("../connection.js");

const cliente = {
	async cadastrarCliente(cliente) {
			const conn = await connection();
			const query = `insert into cliente(
				nome, cpf, identidade, dataNascimento, sexo, telefone, email,
				 cidade, bairro, rua, cep, estado)
				values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
			const dado = [cliente.nome, cliente.cpf, cliente.identidade, cliente.dataNascimento,
				cliente.sexo, cliente.telefone, cliente.email, cliente.cidade,
				cliente.bairro, cliente.rua, cliente.cep, cliente.estado];
			await conn.query(query,dado);
	},

	async buscarClientes() {
		const conn = await connection();
		const query = `select
			 cliente.id as codigo,
			 cliente.nome,
			 cliente.cpf,
			 cliente.identidade,
			 cliente.telefone
			 from cliente`;
		const [dados] = await conn.query(query);
		return dados;
	},

	async buscarClienteCodigo(codigo) {
		const conn = await connection();
		const query = `select * from cliente where cliente.id = ?`;
		const [dado] = await conn.query(query, [codigo]);

		return dado;
	},


	async deletarClienteCodigo(codigo) {
		const conn = await connection();
		const query = `delete  from cliente where cliente.id = ?`;
		await conn.query(query, [codigo]);

	},

	async atualizarCliente(cliente) {
		const conn = await connection();
			const query = `update  cliente 
				set cliente.nome = ?, cliente.cpf = ? , cliente.identidade = ?,
				dataNascimento = ?, sexo = ?, cliente.telefone = ?, cliente.email = ?,
				cliente.cidade = ?, cliente.bairro = ?, cliente.rua = ?, cliente.cep = ?,
				cliente.estado = ? where cliente.id = ?`;
			const dado = [cliente.nome, cliente.cpf, cliente.identidade,
				cliente.dataNascimento, cliente.sexo, cliente.telefone,
				cliente.email, cliente.cidade, cliente.bairro, cliente.rua,
				cliente.cep, cliente.estado, cliente.codigo];
			await conn.query(query,dado);
	},

	async criarTabela() {
		const conn = await connection();

		const query = `create table if not exists cliente(
			id int not null primary key auto_increment,
			nome varchar(255) not null,
			cpf varchar(14) not null unique,
			identidade varchar(12) not null,
			dataNascimento date not null,
			sexo varchar(255) not null,
			telefone varchar(15) not null,
			email varchar(255) not null unique,
			cidade varchar(255) not null,
			bairro varchar(255) not null,
			rua varchar(255) not null,
			cep varchar(9) not null,
			estado varchar(255) not null)`;

		await conn.query(query);

	}
};







module.exports = cliente;
