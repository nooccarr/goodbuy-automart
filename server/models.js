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