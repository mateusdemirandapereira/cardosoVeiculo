const veiculoModel = require("../model/veiculo.js"); 

const veiculo = {
	async atualizarVeiculoCodigo(req, res) {
		const dado = {
			codigo: req.params.id,
			...req.body
		};
		
		await veiculoModel.atualizarVeiculoCodigo(dado);
		return res.sendStatus(204);

	},

	async deletarVeiculoCodigo(req,res) {
		const {id} = req.params;

		await veiculoModel.deletarVeiculoCodigo(id);
		return res.sendStatus(204);

	},

	async buscarVeiculoCodigo(req, res) {
		
		const {id} = req.params;
		const veiculo = await veiculoModel.buscarVeiculoCodigo(id);
		res.status(200);
		return res.json({veiculo});
		
	},

	async buscarVeiculos(req,res) {
		const veiculos = await veiculoModel.buscarVeiculos();
		res.status(200);
		return res.json({veiculos});
	},

	async criarVeiculos(req,res) {

		await veiculoModel.criarVeiculos(req.body);

		return res.sendStatus(201);

	}
 

}

module.exports = veiculo;