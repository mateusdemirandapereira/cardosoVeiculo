const connection = require("../connection.js");

const veiculo = {
	async atualizarVeiculoCodigo(dado) {
		
		const conn = await connection();
		const query = `update veiculo
		 set veiculo.placa = ?, veiculo.chassi = ?, veiculo.crv = ?, veiculo.codigoSeguranca = ?,
		 veiculo.fipe = ?, veiculo.anoFabricacao = ?, veiculo.anoModelo = ?, veiculo.numeroMotorBin = ?,
		 veiculo.combustivel = ?, veiculo.cor = ?, veiculo.motorizacao = ?, veiculo.odometro = ?,
		 veiculo.cambio = ?, veiculo.renavam = ?, veiculo.modeloMarchas = ?, veiculo.versaoVeiculo = ?,
		 veiculo.quantidadePorta = ?, veiculo.tipoDirecao = ? veiculo.historicoLeilao = ?,
		 veiculo.chassiRemarcado = ?, veiculo.historicoSinistro = ?, veiculo.historicoGravame = ?
		 where veiculo.id = ?`;
		 const dadoVeiculo = [
			dado.placa, dado.chassi, dado.crv, dado.codigoSeguranca, dado.fipe, dado.anoFabricacao,
			dado.anoModelo, dado.numeroMotorBin, dado.combustivel, dado.cor, dado.motorizacao,
			dado.odometro, dado.cambio, dado.renavam, dado.modeloMarchas, dado.versaoVeiculo,
			dado.quantidadePorta, dado.tipoDirecao, dado.historicoLeilao, dado.chassiRemarcado,
			dado.historicoSinistro, dado.historicoGravame, dado.codigo];
		await conn.query(query, dadoVeiculo);

	},
	async deletarVeiculoCodigo(codigo) {
		const conn = await connection();
		const query = `delete from veiculo where veiculo.id = ?`;
		await conn.query(query, [codigo]);
	},

	async buscarVeiculoCodigo(codigo) {
		const conn = await connection();
		const query = `select * from veiculo where veiculo.id = ?`;
		const [veiculo] = await conn.query(query, [codigo]); 	
		return veiculo;
	},
	
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
		versaoVeiculo, quantidadePorta, tipoDirecao, historicoLeilao, chassiRemarcado,
		historicoSinistro, historicoGravame)
		values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
		const dadoVeiculo = [
			dado.placa, dado.chassi, dado.crv, dado.codigoSeguranca, dado.fipe, dado.anoFabricacao,
			dado.anoModelo, dado.numeroMotorBin, dado.combustivel, dado.cor, dado.motorizacao,
			dado.odometro, dado.cambio, dado.renavam, dado.modeloMarchas, dado.versaoVeiculo,
			dado.quantidadePorta, dado.tipoDirecao, dado.historicoLeilao, dado.chassiRemarcado,
			dado.historicoSinistro, dado.historicoGravame];

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
		tipoDirecao varchar(255) not null,
		historicoLeilao varchar(255),
		chassiRemarcado varchar(255),
		historicoSinistro varchar(255),
		historicoGravame varchar(255))`;

		await conn.query(query);
	}
}


module.exports = veiculo;