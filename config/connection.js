// Set up MySQL connection.
const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        port: 3306,
        password: "password",
        database: "burgers_db"
    });
};

//Nuri changing this line of code from Nuri branch
//adding new comment new code from natalia branch
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export the connection.
module.exports = connection;

//nuri adding new code

console.log("helloo");


