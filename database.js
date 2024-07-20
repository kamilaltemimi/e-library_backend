const mysql = require("mysql2");

const database = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "e_library",
});

module.exports = database;
