const express = require("express");
const router = express.Router();
const veiculo = require("../controllers/veiculo.js");


router.post("/veiculo",veiculo.criar);

module.exports = router;