const models = require('./models.js');
const bodyParser = require('./index.js');

module.exports = {
  getAll: (req, res) => {
    let params = req.query;
    models.readAll(params, (err, result) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.json(result);
      }
    });
  }
};



// Haversine formula
// https://www.movable-type.co.uk/scripts/latlong.html
function distance(lat1, lon1, lat2, lon2) {
  // Math.PI / 180
  var p = 0.017453292519943295;
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 +
          c(lat1 * p) * c(lat2 * p) *
          (1 - c((lon2 - lon1) * p))/2;
  // 2 * R;  R = 6371 km; km to mi = 0.6237;
  return (12742 * Math.asin(Math.sqrt(a))) / 0.6237;
}