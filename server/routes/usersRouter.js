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
  .post(usersController.register, usersResponseController.sendJSON)

usersRouter.route('/:username')
  .get(usersController.getByUsername, usersResponseController.sendJSON)

usersRouter.route('/user/:id')
  .get(usersController.getByID, usersResponseController.sendJSON)
  .delete(usersController.removeUser, usersResponseController.handleDelete)

function sendError(err, req, res, next) {
  console.log('I am error');
  res.sendStatus(500);
};

module.exports = usersRouter;
