const authRouter              = require('express').Router();
const usersController         = require('../controllers/usersController');
const usersResponseController = require('../controllers/usersResponseController');
const authService             = require('./authService');

authRouter.get('/', (req, res) => {
  res.send({ message: 'Hello Dave, from authRouter'})
});

module.exports = authRouter;
