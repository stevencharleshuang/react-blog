require('dotenv').config();
const express     = require('express');
const jwt         = require('jsonwebtoken');
const logger      = require('morgan');
const bodyParser  = require('body-parser');
const app         = express();
const PORT        = process.env.PORT || 5000;
const usersRouter = require('./routes/usersRouter');
const authRouter  = require('./services/authRouter');

app.use(logger('dev'));

app.get('/api/hello', (req, res) => {
  jwt.verify(req.token, process.env.SERVER_SECRET, (err, authData) => {
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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);

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
