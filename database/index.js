// require('dotenv').config();
const mysql = require('mysql');
let mysqlConfig;

// if (process.env.NODE_ENV === 'production') {
  mysqlConfig = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  };
// } else {
//   mysqlConfig = require('./mysqlConfig.js');
// }

const db = mysql.createConnection(mysqlConfig);

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected!');
  }
});

module.exports = db;