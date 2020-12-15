const models = require('./models.js');
const bodyParser = require('./index.js');

module.exports = {
  getAll: (req, res) => {
    models.readAll((err, result) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.json(result);
      }
    })
  }
};