const modelCheckList = require("../model/checkList.js");

const checkList = {

    async adiciona(req,res) {
        console.log(req.body);

      const veiculoTraseira =   await modelCheckList.adicionaVeiculoTraseira(req.body);
      res.status(201);
      res.json({veiculoTraseira});

    }
}


module.exports = checkList;