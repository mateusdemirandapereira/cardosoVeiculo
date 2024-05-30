const veiculoModel = require("../model/veiculo.js"); 

const veiculo = {

	async criar(req,res) {

		console.log(req.body);

		await veiculoModel.criar(req.body);

	}
 

}

module.exports = veiculo;