const db = require('../database/index.js');

module.exports = {
  readAll: (params, callback) => {
    let queryStr = 'select * from cars where id < 10';
    db.query(queryStr, params, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  }
};

// latitude: '40.7474874',
// longitude: '-73.752967',
// manufacturer: 'hyundai',
// mileageMin: '80001',
// mileageMax: '90000'

// select distinct manufacturer from cars;
// select * from cars where id < 10 and state like '%' and fuel like '%';
// select * from cars where id < 100 and odometer >= 0 and odometer <= 10000;