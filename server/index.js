const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const router = require('./routes.js');
const db = require('../database/index.js');
const PORT = process.env.PORT || 3000;
// const path = require('path');
if (process.env.NODE_ENV == 'development') {
  require('dotenv').config({ silent: true });
}

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(express.static('client/dist'));

app.use('/', router);

app.get('/favorites', (req, res) => {
  res.redirect('/');
});

app.set('view engine', 'pug');
app.use((req, res) => {
  res.status(404).render('404');
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));