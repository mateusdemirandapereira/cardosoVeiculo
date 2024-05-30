const connection = require("../connection.js");

const veiculo = {
	async buscarVeiculos() {
		const conn = await connection();
		const query = `select
			veiculo.id as codigo,
			veiculo.placa,
			 veiculo.versaoVeiculo,
			 veiculo.cor,
			 veiculo.renavam,
			 veiculo.anoModelo,
			 veiculo.anoFabricacao,
			 veiculo.fipe as valor from veiculo`;

		const [veiculos] = await conn.query(query);

		return veiculos;

	},

	async criarVeiculos(dado) {
		const conn = await connection();
		const query = `insert into veiculo(
		placa, chassi, crv, codigoSeguranca, fipe, anoFabricacao, anoModelo, numeroMotorBin,
		combustivel, cor, motorizacao, odometro, cambio, renavam, modeloMarchas,
		versaoVeiculo, quantidadePorta, tipoDirecao)
		values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
		const dadoVeiculo = [
			dado.placa, dado.chassi, dado.crv, dado.codigoSeguranca, dado.fipe, dado.anoFabricacao,
			dado.anoModelo, dado.numeroMotorBin, dado.combustivel, dado.cor, dado.motorizacao,
			dado.odometro, dado.cambio, dado.renavam, dado.modeloMarchas, dado.versaoVeiculo,
			dado.quantidadePorta, dado.tipoDirecao];

		await conn.query(query,dadoVeiculo);
		


	},

	async criarTabela() {
		const conn = await connection();
		const query = `create table if not exists veiculo(
		id int not null primary key auto_increment,
		placa varchar(255) not null,
		chassi varchar(255) not null,
		crv varchar(255) not null,
		codigoSeguranca varchar(255) not null,
		fipe double(8,2) not null,
		anoFabricacao int not null,
		anoModelo int not null,
		numeroMotorBin varchar(255) not null,
		combustivel varchar(255) not null,
		cor varchar(255) not null,
		motorizacao double(8,2) not null,
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