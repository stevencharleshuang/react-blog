const express     = require('express');
const logger      = require('morgan');
const bodyParser  = require('body-parser');
const app         = express();
const PORT        = process.env.PORT || 5000;
const usersRouter = require('./routes/usersRouter');

app.use(logger('dev'));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express, Dave' });
});

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
