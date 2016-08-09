var mysql = require('mysql');
var config = require('./config.js');

var con = mysql.createConnection(config);

con.connect();

module.exports = con;
