"user strict";

var mysql = require("mysql2");

//local mysql db connection
var connection = mysql.createConnection({
  host: "tkndigital.tk",
  user: "root",
  database: "template",
  password: "database",
  port: "32795  "
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;
