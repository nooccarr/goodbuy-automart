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