const models = require('./models.js');
const bodyParser = require('./index.js');

module.exports = {
  getAll: (req, res) => {
    let params = Object.values(req.query);
    models.readAll(params, (err, result) => {
      if (err) {
        res.sendStatus(404);
      } else {
        let filtered = [];
        for (let i = 0; i < result.length; i++) {
          if (distance(Number(params[7]), Number(params[8]), result[i].latitude, result[i].longitude) <= Number(params[9])) {
            filtered.push(result[i]);
          }
        }
        res.json(filtered);
      }
    });
  }
};

// Haversine formula
// https://www.movable-type.co.uk/scripts/latlong.html
const distance = (lat1, lon1, lat2, lon2) => {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d * 0.621371;
}

const deg2rad = (deg) => {
  return deg * (Math.PI / 180);
}