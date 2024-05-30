const connection = require("../connection.js");

const veiculo = {

	async criar(dado) {
		const conn = await connection();
		return;


	},

	async criarTabela() {
		const conn = await connection();
		const query = `create table if not exists veiculo(
		id int not null primary key auto_increment,
		chassi varchar(255) not null,
		crv varchar(255) not null,
		codigoSeguranca varchar(255) not null,
		fipe double(8,2) not null,
		anoFabricacao int not null,
		anoModelo int not null,
		numeroMotorBin varchar(255) not null,
		conbustivel varchar(255) not null,
		cor varchar(255) not null,
		motorizacao double(2,2) not null,
		odometro double(10,2) not null,
		cambio varchar(255) not null,
		renavam varchar(255) not null,
		modeloMarchas int not null,
		versaoVeiculo varchar(255) not null,
		quantidadePorta int not null,
		tipoDirecao varchar(255) not null)`;

		await conn.query(query);
	}
}


module.exports = veiculo;