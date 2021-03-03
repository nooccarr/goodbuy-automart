const mysql = require('mysql');

let mysqlConfig;

if (process.env.NODE_ENV === 'production') {
  mysqlConfig = {
    connectionLimit: 10,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  };
} else {
  mysqlConfig = require('./mysqlConfig');
}

const pool = mysql.createPool(mysqlConfig);

pool.getConnection((err, connection) => {
   if (err) {
    console.log('query connec error!', err);
   } else {
    connection.query('select 1 + 1', (err, rows) => {
     if (err) {
      console.log(err);
     }
     connection.release();
    });
   }
});

module.exports = pool;

// const db = mysql.createConnection(mysqlConfig);

// db.connect((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Connected!');
//   }
// });

// module.exports = db;