var mysql = require('mysql')

var db = mysql.createConnection(
    {
        host: "localhost",
        user: "ecomDB-admin",
        password: "Admin@123",
        database: 'ECOM'

    }
);

db.connect(function (err) {
    if (err) throw err;
    console.log('Connected!');



});
module.exports = db;