'use strict';

let mysql = require('mysql');
let initTables = require('./init');


const ConnectionPool = mysql.createPool({
    connectionLimit : 5,
    host     : process.env.mysql_host,
    user     : process.env.mysql_user,
    password : process.env.mysql_password,
    database : process.env.mysql_database
});


ConnectionPool.getConnection((err, connection) => {
    if (err) throw err;

    console.log("DB CONNECTED!");
    initTables(connection);
});

module.exports = ConnectionPool;