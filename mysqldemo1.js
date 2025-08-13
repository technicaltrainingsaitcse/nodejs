var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3307",
  password: "123456"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});