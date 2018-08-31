const usersRouter             = require('express').Router();
const usersController         = require('../controllers/usersController');
const usersResponseController = require('../controllers/usersResponseController');

usersRouter.route('/user/:id')
  .get(usersController.getByID, usersResponseController.sendJSON)
  .put(usersController.editUser, usersResponseController.handleEditByID)
  .delete(usersController.removeUserByID, usersResponseController.handleDeleteByID)

usersRouter.route('/:username')
  .get(usersController.getByUsername, usersResponseController.sendJSON)
  .delete(usersController.removeUserByUsername, usersResponseController.handleDeleteByUsername)

usersRouter.route('/')
  .get(usersController.getAll, usersResponseController.sendJSON)
  .post(usersController.registerUser, usersResponseController.handleCreateUser)

function sendError(err, req, res, next) {
  console.log('I am error');
  res.sendStatus(500);
};

module.exports = usersRouter;
