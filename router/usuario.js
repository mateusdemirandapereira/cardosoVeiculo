const express = require("express");
const router = express.Router();
const usuario = require("../controllers/usuario.js");

router.post("/usuario",usuario.criar);


module.exports = router;


