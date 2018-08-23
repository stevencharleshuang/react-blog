/* authService.js patterns based on Jason Seminara's react-skeleton-api
   https://git.generalassemb.ly/wdi-nyc-rover/react-skeleton-api/blob/tokens/auth/AuthService.js */

const bcrypt = require('bcrypt');
const usersModel = require('../models/usersModel');
const tokenService = require('./tokenService');

// This gets called from the conditional in authenticate(), destructures the
// argument, req.body object, to username and password
const isValidUser = async ({ username, password }) => {
  try {
    console.log('isValidUser() triggered');
    // declare constant user to store the result of an async call to usersModel
    // to return a username that matches the login
    const user = await usersModel.findByUsername(username);
    console.log('isValidUser() res.locals.user: ', user);
    // TBR: This just tests if the password matches and console logs the result
    (bcrypt.compareSync(password, user.password) === true)
      ? console.log('matched!')
      : console.log('unmatched!');
    // return the result of comparing the plaintext password against the hashed
    // password. If matched => true, if unmatched => false
    return bcrypt.compareSync(password, user.password);
  } catch (err) {
    // Catch any errors and return false
    return false;
  }
};

module.exports = {
  // This gets called when authRouter routes a post request to /api/auth/login
  authenticate(req, res, next) {
    // declare a username to later store the username if the user is authenticated
    let username;
    console.log('req.body: ', req.body);
    // Conditional forces a Boolean and calls isValidUser passing in req.body
    // object as an argument
    if (!!isValidUser(req.body)) {
      // Once the username and password authenticate the user, store the username
      username = req.body.username;
      console.log('back in authenticate, username: ', username);
      // Declare a const token to store the resulting token from calling
      // tokenService.makeToken, passing in username as a payload.
      // toDo: Add roles to payload
      const token = tokenService.makeToken({
        username,
      })
      // Set res.locals.token to the token for access on the front end
      res.locals.token = token;
      return token
      console.log('token: ', token);
      console.log('res.locals.token: ', res.locals.token);
      next();
    } else {
    return false;
    }
    next();
  },

  error(err, req, res, next) {
    cosole.log(err);
    res.status(403).json(err);
  },

}
