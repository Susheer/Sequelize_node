const mysql = require("mysql2");
let pool = mysql.createPool({
  host: "localhost",
  port: "3307",
  user: "root",
  database: "node-complete",
  password: "root"
});

module.exports = pool.promise();
