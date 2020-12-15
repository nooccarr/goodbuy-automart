const controllers = require('./controllers.js');
const router = require('express').Router();

router.get('/cars', controllers.getAll);


module.exports = router;