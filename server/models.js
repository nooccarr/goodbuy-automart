const db = require('../database/index.js');

module.exports = {
  readAll: (callback) => {
    let queryStr = 'select * from cars where id < 10';
    db.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  }
};

// select distinct manufacturer from cars;
// select * from cars where id < 10 and state like '%' and fuel like '%';
// select * from cars where id < 100 and odometer >= 0 and odometer <= 10000;