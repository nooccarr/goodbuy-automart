const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes.js');
const db = require('../database/index.js');
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(express.static('./client/dist'));
app.use('/', router);

app.get('*', (req, res) => {
  res.send('404 Page not found');
});

app.listen(port, () => console.log(`Listening to port ${port}`));