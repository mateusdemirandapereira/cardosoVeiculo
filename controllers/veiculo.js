const veiculoModel = require("../model/veiculo.js"); 

const veiculo = {

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