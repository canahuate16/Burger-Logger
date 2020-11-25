// Set up MySQL connection.
const mysql = require("mysql");
require ('dotenv').config()

const connection = mysql.createConnection({
  host: "j7t5ebkr1bsyfx4gbowdsis.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	mlexozlj3",
  port: 3306,
  user: "j7t5ebkmlexozlj3",
  password: "lgccyvovnw65b6t2",
  database: "kcbswea71ah0ggw3"
});

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