const mysql = require("mysql2/promise");
const {db} = require("./config.json");

let conn = null;


const connection = async ()=>{
    if(!conn) {
        conn = await mysql.createConnection(db);
    }
  
    return conn;
} 




module.exports = connection;