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

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export the connection.
module.exports = connection;

// "production": {
//     "username": "wumgjyealbbgvhgh",
//     "password": "q3pjrhxhtsrylqza",
//     "database": "bte7mblou88e4yms",
//     "host": "xlf3ljx3beaucz9x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//     "port": 3306,
//     "dialect": "mysql"
// }