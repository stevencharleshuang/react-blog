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
