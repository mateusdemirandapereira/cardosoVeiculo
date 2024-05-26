const express = require("express");
const njk = require("nunjucks");
const app = express();
const home = require("./router/home.js");
const usuarioLogin = require("./router/usuario.js");
const usuarioModel = require("./model/usuario.js");
const port=3000;
const ip= "127.0.0.1";
njk.configure(`${__dirname}/views`,{
    autoescape: true,
    express: app
});

app.use(express.json());
app.use(express.static(`${__dirname}/public`));


app.use(home);
app.use(usuarioLogin);








app.listen(port, ip, async()=>{
    await usuarioModel.tabela();
    console.log("servidor rodando na porta: " + port);
});


