const express = require('express');
const app = express();
const port = 3000;
const db = require('../database/index.js');

app.get('*', (req, res) => {
  res.send('404 Page not found');
});

app.listen(port, () => console.log(`Listening to port ${port}`));