const express = require("express");
const router = express.Router();
const veiculo = require("../controllers/veiculo.js");

router.get("/veiculos",veiculo.buscarVeiculos);
router.post("/veiculos",veiculo.criarVeiculos);

module.exports = router;