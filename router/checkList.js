const express = require("express");
const router = express.Router();
const checkList = require("../controllers/checkList.js");

router.post("/checkList", checkList.adiciona);


module.exports = router;