const express = require("express");
const router = express.Router();
const veiculo = require("../controllers/veiculo.js");

router.get("/veiculos", veiculo.buscarVeiculos);
router.post("/veiculos", veiculo.criarVeiculos);
router.get("/veiculos/:id", veiculo.buscarVeiculoCodigo);
router.delete("/veiculos/:id", veiculo.deletarVeiculoCodigo);
router.put("/veiculos/:id", veiculo.atualizarVeiculoCodigo);

module.exports = router;