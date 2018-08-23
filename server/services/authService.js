const bcrypt = require('bcrypt');
const usersModel = require('../models/usersModel');
const tokenService = require('./tokenService');

const isValidUser = async ({ username, password }) => {
  try {
    console.log('isValidUser() triggered');
    const user = await usersModel.findByUsername(username);
    console.log('isValidUser() res.locals.user: ', user);
    (bcrypt.compareSync(password, user.password) === true) ? console.log('matched!') : console.log('unmatched!');
    return bcrypt.compareSync(password, user.password);
  } catch (err) {
    return false;
  }
};

module.exports = {
  authenticate(req, res, next) {
    let username;
    console.log('req.body: ', req.body);
    if (!!isValidUser(req.body)) {
      username = req.body.username;
      console.log('back in authenticate, username: ', username);
      // next({});
      const token = tokenService.makeToken({
        username,
      })
      res.locals.token = token;
      console.log('token: ', token);
      console.log('res.locals.token: ', res.locals.token);
      next();
    } else {

      // .then((token) => {
      //   res.locals.token = token;
      //   console.log('auth/AuthService: authenticate() post-makeToken(token) = ', res.locals.token);
      //   next();
      // })
      // .catch(next);
    return false;
    }
    next();
  },

  error(err, req, res, next) {
    cosole.log(err);
    res.status(403).json(err);
  },

}
