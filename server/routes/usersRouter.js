const express    = require('express');
const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
  console.log('At users router');
  res.send(`You've reached the users router`);
});

function sendError(err, req, res, next) {
  console.log('I am error');
  res.sendStatus(500);
};

module.exports = usersRouter;
