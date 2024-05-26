const express = require("express");
const app = express();
const home = require("./router/home.js");
const port=3000;
const ip= "127.0.0.1";
app.use(express.json());


app.use(home);





app.listen(port, ip,()=> console.log("servidor rodando"));


