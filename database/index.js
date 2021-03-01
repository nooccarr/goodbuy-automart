const mysql = require('mysql');
let mysqlConfig;

if (process.env.NODE_ENV === 'production') {
  mysqlConfig = process.env.MYSQL;
} else {
  mysqlConfig = require('./mysqlConfig.js');
}

const db = mysql.createConnection(mysqlConfig);

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected!');
  }
});

module.exports = db;