const express = require("express");
const router = express.Router();
const usuario = require("../controllers/usuario.js");
router.get("/login", usuario.login);
router.post("/login",usuario.criar);


module.exports = router;


