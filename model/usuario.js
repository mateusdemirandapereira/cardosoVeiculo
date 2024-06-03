const connection = require("../connection.js");

const usuario = {
    async criar(dado) {
        const conn = await connection();
        const texto = `insert into usuario(nome,email,senha) values(?, ?, ?)`;
       await conn.query(texto,[dado.usuario, dado.email, dado.senha]);
    },
    async criarTabela() {
        const conn = await connection();
        const texto = `create table if not exists usuario(
                        id int not null primary key auto_increment,
                        nome varchar(255) not null,
                        email varchar(255) not null unique,
                        senha varchar(255) not null check(length(senha)>=6))`;
        
        await conn.query(texto);
    }
    
};


module.exports = usuario;


