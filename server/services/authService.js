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
    const passwordMatched = await bcrypt.compareSync(password, user.password);
    console.log(passwordMatched);
    return passwordMatched
  } catch (err) {
    // Catch any errors
    console.log('error', err);
    next(err);
  }
};

module.exports = {
  // This gets called when authRouter routes a post request to /api/auth/login
  authenticate(req, res, next) {
    // declare a username to later store the username if the user is authenticated
    let username;
    console.log('req.body: ', req.body);
    const isValid = isValidUser(req.body);
    if (!isValid) {
      next(err);
      console.log('>>>>>> error')
    } else {
      console.log('back in authenticate()', isValid)
      username = req.body.username;
      const token = tokenService.makeToken({
        username,
      });
      res.locals.token = token;
      console.log('Token generated: ', token);
      next();
    }
  },
}
