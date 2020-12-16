const db = require('../database/index.js');

module.exports = {
  readAll: (params, callback) => {
    // console.log(params);
    let queryStr = 'SELECT * FROM cars WHERE manufacturer = ? AND latitude > ? AND latitude < ? AND longitude > ? AND longitude < ? AND odometer > ? AND odometer < ?';
    db.query(queryStr, params, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  }
};

// Params Sample
// {
//   latitudeMin: '40.577487399999995',
//   latitudeMax: '40.9174874',
//   longitudeMin: '-73.922967',
//   longitudeMax: '-73.582967',
//   manufacturer: '%',
//   mileageMin: '0',
//   mileageMax: '2043755555'
// }

// Query Sample
// SELECT * FROM cars WHERE manufacturer = 'bmw' AND latitude > 40.577487399999995 AND latitude < 40.9174874 AND longitude > -73.922967 AND longitude < -73.582967 AND odometer > 0 AND odometer < 2043755555;