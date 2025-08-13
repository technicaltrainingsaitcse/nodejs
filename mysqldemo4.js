var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3307",
  password: "123456",
  database: "mydb"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ('Rakesh Kumar', 'KV-345, Kavi Nagar, Ghaziabad')";
	con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
