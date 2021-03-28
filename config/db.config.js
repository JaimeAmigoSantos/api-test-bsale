'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  user     : 'bsale_test',
  password : 'bsale_test',
  database : 'bsale_test'
});

dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = dbConn;