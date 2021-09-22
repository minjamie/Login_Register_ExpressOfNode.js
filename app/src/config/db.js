const mysql = require("mysql");

var db_info = {
  host: process.env.DB_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PSW,
  database: process.env.DB_DATABASE,
};

const db = mysql.createConnection(db_info);

db.connect();

module.exports = db;
