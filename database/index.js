const mysql = require('mysql');
let mysqlConfig;

if (process.env.NODE_ENV === 'production') {
  mysqlConfig = require('./mysqlConfigProd.js');
} else {
  mysqlConfig = require('./mysqlConfigDev.js');
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