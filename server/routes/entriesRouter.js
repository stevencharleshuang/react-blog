const entriesRouter             = require('express').Router();
const entriesController         = require('../controllers/usersController');
const entriesResponseController = require('../controllers/usersResponseController');

// entriesRouter.get('/', (req, res, next) => {
//   res.send({ message: 'You hit the entries router, Dave' })
// });

entriesRouter.route('/')
  .get(entriesController.getAll, entriesResponseController.sendJSON)
  .post(entriesController.registerUser, entriesResponseController.handleCreateUser)

module.exports = entriesRouter;
