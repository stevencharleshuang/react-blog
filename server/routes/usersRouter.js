const express    = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/usersController');
const usersResponseController = require('../controllers/usersResponseController');

// usersRouter.get('/', (req, res) => {
//   console.log('At users router');
//   res.send(`You've reached the users router`);
// });

usersRouter.route('/')
  .get(usersController.getAll, usersResponseController.sendJSON)

usersRouter.route('/:id')
  .get(usersController.getByUsername, usersResponseController.sendJSON)

function sendError(err, req, res, next) {
  console.log('I am error');
  res.sendStatus(500);
};

module.exports = usersRouter;
