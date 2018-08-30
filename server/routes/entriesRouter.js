const entriesRouter             = require('express').Router();
const entriesController         = require('../controllers/usersController');
const entriesResponseController = require('../controllers/usersResponseController');

entriesRouter.get('/', () => {
  res.send({ message: 'You hit the entries router, Dave' })
});


module.exports = entriesRouter;
