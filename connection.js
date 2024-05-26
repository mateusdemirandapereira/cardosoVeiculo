const mysql = require("mysql2/promise");
const {db} = require("./config.json");




const connection = async ()=> await mysql.createConnection(db); 




module.exports = connection;