const mysql = require('mysql');
require('dotenv').config();

let mysqlConfig;

if (process.env.NODE_ENV === 'production') {
  mysqlConfig = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  };
  console.log('HOST', process.env.HOST)
} else {
  mysqlConfig = require('./mysqlConfig');
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