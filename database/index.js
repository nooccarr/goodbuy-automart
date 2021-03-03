const mysql = require('mysql');

let mysqlConfig;

if (process.env.NODE_ENV === 'production') {
  mysqlConfig = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  };
} else {
  mysqlConfig = require('./mysqlConfig');
}

let db;

const handleDisconnect = () => {
  // Recreate the connection, since the old one cannot be reused
  db = mysql.createConnection(mysqlConfig);

  // The server is either down or restarting (takes a while sometimes)
  db.connect((err) => {
    // We introduce a delay before attempting to reconnect, to avoid a hot loop, and to allow our node script to process asynchronous requests in the meantime. If you're also serving http, display a 503 error
    if (err) {
      console.log('Error when connecting to database: ', err);
      setTimeout(handleDisconnect, 2000);
    } else {
      console.log('Connected!');
    }

  });

  db.on('error', (err) => {
    console.log('Database error: ', err);
    // Connection to the MySQL server is usually lost due to either server restart, or a connnection idle timeout (the wait_timeout server variable configures this)
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

module.exports = db;