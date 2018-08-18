module.exports = {

  sendTest(req, res) {
    // show one or a collection
    res.send('<h1>This is a test, Dave</h1>');
  },

  sendJSON(req, res) {
    // show one or a collection
    res.json(res.locals.users || res.locals.user);
  },

  handleCreate(req, res) {
    console.log('userResponseHandler: handleCreate() = ', req.body);
    // res.redirect('/auth/users/');
    res.status(201).end();
  },

  send404(err, req, res, next) {
    console.log(err);
    res.status(404).send(`I'm afraid I can't do that, Dave.`);
  },
};
