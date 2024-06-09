const express = require("express");
const router = express.Router();
const cliente = require("../controllers/cliente.js");

router.post("/cliente",cliente.cadastrarCliente);
router.get("/cliente",cliente.buscarClientes);
router.get("/cliente/:id",cliente.buscarClienteCodigo);
router.delete("/cliente/:id",cliente.deletarClienteCodigo);
router.put("/cliente/:id",cliente.atualizarCliente);
module.exports = router;