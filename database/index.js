// require('dotenv').config();
const mysql = require('mysql');
const dotenv = require('dotenv-defaults');
let mysqlConfig;

if (process.env.NODE_ENV === 'production') {
  mysqlConfig = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  };
  // console.log('MYSQL: ', mysqlConfig);
  // const env = dotenv.config().parsed;
  // console.log(env);
  // const envKeys = Object.keys(env).reduce((prev, next) => {
  //   prev[`process.env.${next}`] = JSON.stringify(env[next]);
  //   return prev;
  // }, {});
  // console.log(envKeys);
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