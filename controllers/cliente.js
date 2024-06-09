const clienteModel = require("../model/cliente.js");

const cliente = {
	async buscarClientes(req, res) {

		const dados = await clienteModel.buscarClientes();
		
		res.status(200);
		res.json({clientes: dados});

	},

	async cadastrarCliente(req, res) {
		const dado = req.body;
		await clienteModel.cadastrarCliente(dado);
		return res.sendStatus(201);

	},

	async buscarClienteCodigo(req, res) {
		const codigo = req.params.id;

		const dado = await clienteModel.buscarClienteCodigo(codigo);
		res.status(200);
		res.json({cliente: dado});
	},

	async deletarClienteCodigo(req,res) {
		const codigo = req.params.id;

		await clienteModel.deletarClienteCodigo(codigo);

		res.sendStatus(204);
	},

	async atualizarCliente(req,res) {
		const codigo = req.params.id;
		const dado = {codigo, ...req.body};

		await clienteModel.atualizarCliente(dado);

		res.sendStatus(204);

	}


}


module.exports = cliente;