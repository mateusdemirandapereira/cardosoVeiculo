const express = require("express");

const app = express();
const usuario = require("./router/usuario.js");
const veiculo = require("./router/veiculo.js");
const cliente = require("./router/cliente.js");
const checkList = require("./router/checkList.js");
const usuarioModel = require("./model/usuario.js");
const veiculoModel = require("./model/veiculo.js");
const clienteModel = require("./model/cliente.js");
const CheckListModel = require("./model/checkList.js");
const port=3000;
const ip= "127.0.0.1";


app.use(express.json());

app.use(usuario);
app.use(veiculo);
app.use(cliente);
app.use(checkList);



app.listen(port, ip, async()=>{
    await usuarioModel.criarTabela();
    await veiculoModel.criarTabela();
    await clienteModel.criarTabela();
    await CheckListModel.criarTabela();
    console.log("servidor rodando na porta: " + port);
});


