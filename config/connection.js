// Set up MySQL connection.
const mysql = require("mysql");
require ('dotenv').config()

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "Etauhanac16",
      database: "burger_db"
    });
}

// const connection = mysql.createConnection({
//   host: "r1bsyfx4gbowdsis.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   port: 3306,
//   user: "j7t5ebkmlexozlj3",
//   password: "lgccyvovnw65b6t2",
//   database: "kcbswea71ah0ggw3"
// });



// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Etauhanac16",
//   database: "burger_db"
// });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;