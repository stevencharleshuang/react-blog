const express     = require('express');
const jwt         = require('jsonwebtoken');
const logger      = require('morgan');
const bodyParser  = require('body-parser');
const app         = express();
const PORT        = process.env.PORT || 5000;
const usersRouter = require('./routes/usersRouter');

app.use(logger('dev'));

app.get('/api/hello', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretshhhh', (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
    res.send({
      express: 'Hello From Authenticated Express, Dave',
      token: req.token,
      authData
    });
    }
  });
});

app.post('/api/login', (req, res) => {
  const user = {
    id: 1,
    username: 'Dave',
    email: 'dave@hal9000.com'
  }

  jwt.sign(
    { user },
    'secretshhhh',
    { expiresIn: '30m' },
    (err, token) => {
      res.json({ token })
  });
});

//Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
  // Split at the space
  const bearer = bearerHeader.split(' ');
  // Get token from array
  const bearerToken = bearer[1];
  // Set the token
  req.token = bearerToken;
  next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/users', usersRouter),

app.use('*', (err, req, res, next) => {
  res.status(400).json({
    error: err,
    message: err.message
  })
})

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    error: err,
    message: err.message
  })
})

app.listen(PORT, () => {
  console.log(`Server up and running! Port: ${PORT} Env: ${app.get('env')}`);
});
