let mysql = require('mysql');
let TableNames = require("../database/config/TableNames");
const databaseName = process.env.mysql_database;
let connectionPool = require("../database/config/connectionPool");

module.exports.saveForm = async (body) => {
    let tableName = TableNames.CONTACT_US_TABLE;

    let sql = mysql.format("INSERT INTO ??.?? (firstName, lastName, email, phoneNumber, additionalInfo)" +
        " VALUES (?, ?, ?, ?, ?)"
        , [databaseName, tableName, body["firstName"], body["lastName"], body["email"], body["phoneNumber"], body["additionalInfo"] || ""]);


    await connectionPool.query(sql, (error, result) => {
        if (error) {
            throw new Error(error);
        }

        return result
    });

};