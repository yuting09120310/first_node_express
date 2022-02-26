const mysql = require('mysql2');

module.exports = mysql.createConnection({
    host:'192.168.0.100',
    user:'sa',
    password:'redhat0703',
    database:'node_test'
})