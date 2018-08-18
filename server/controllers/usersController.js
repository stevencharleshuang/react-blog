const usersModel = require('../models/usersModel');
const bcrypt = require('bcrypt');

module.exports = {

  async getAll(req, res, next) {
    try {
      res.locals.users = await usersModel.findAll();
      next();
    }
    catch (err) {
      next(err);
    }
  },

  async getUser(req, res, next) {
    try {
      res.locals.user = await usersModel.findById(req.params.id);
      console.log('userController getUser() says: getUser req.params.id = ', req.params.id);
      next();
    }
    catch (err) {
      next(err);
    }
  },

  // Once Auth is implemented, we will switch to this func
  async getOne(req, res, next) {
    try {
      res.locals.user = await usersModel.findOne(req.body);
      console.log('userController getOne() says: req.body = ', req.body);
      next();
    }
    catch (err) {
      next(err);
    }
  },

  async register(req, res, next) {
    try {
      console.log('userController register() says: req.body = ', req.body);
      req.body.password_digest = bcrypt.hashSync(req.body.password_digest, 10);
      res.locals.user = await usersModel.save(req.body);
      console.log('userController says: res.locals.user = ', res.locals.user);
      next();
    }
    catch (err) {
      next(err);
    }
  },
}
