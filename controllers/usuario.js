const usuarioModel = require("../model/usuario.js");
const usuario = {
    
    login(req, res) {
       
       res.json({titulo:"Login"});
    },
    async criar(req,res) {
        try {
            if (!req.body.usuario || !req.body.email || !req.body.senha) {
                throw  new Error("Os campos obrigatorios!");
            }
         await usuarioModel.criar(req.body); 
         res.json({mensagem: "Usuário criado com sucesso!"});
            
        }catch(erro) {
            
           res.json({mensagem: erro.message});
        }      
       
        
    }
    
}


module.exports = usuario;

