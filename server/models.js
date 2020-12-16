const db = require('../database/index.js');

module.exports = {
  readAll: (params, callback) => {
    console.log(params);
    let queryStr = 'SELECT * FROM cars WHERE manufacturer like ? AND latitude > ? AND latitude < ? AND longitude > ? AND longitude < ? AND odometer > ? AND odometer < ?';
    db.query(queryStr, params, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  }
};

// {
//   latitudeMin: '40.577487399999995',
//   latitudeMax: '40.9174874',
//   longitudeMin: '-73.922967',
//   longitudeMax: '-73.582967',
//   manufacturer: '%',
//   mileageMin: '0',
//   mileageMax: '2043755555'
// }

// select distinct manufacturer from cars;
// select * from cars where id < 10 and state like '%' and fuel like '%';
// select * from cars where id < 100 and odometer >= 0 and odometer <= 10000;

// SELECT *
// FROM cars
// WHERE manufacturer = manufacturer
// AND latitude > latitudeMin AND latitude < latitudeMax
// AND longitude > longitudeMin AND longitude < longitudeMax
// AND mileage > mileageMin AND mileage < mileageMax
// LIMIT 5 // 10

// SELECT * FROM cars WHERE manufacturer like 'bmw' AND latitude > 40.577487399999995 AND latitude < 40.9174874 AND longitude > -73.922967 AND longitude < -73.582967 AND odometer > 0 AND odometer < 2043755555;