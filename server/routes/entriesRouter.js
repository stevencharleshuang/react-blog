const entriesRouter             = require('express').Router();
const entriesController         = require('../controllers/entriesController');
const entriesResponseController = require('../controllers/entriesResponseController');

// entriesRouter.get('/', (req, res, next) => {
//   res.send({ message: 'You hit the entries router, Dave' })
// });

entriesRouter.route('/entry/:id')
  .get(entriesController.getByID, entriesResponseController.sendJSON)
  .put(entriesController.editEntry, entriesResponseController.handleEditByID)
  .delete(entriesController.removeEntryByID, entriesResponseController.handleDeleteByID)

entriesRouter.route('/')
  .get(entriesController.getAll, entriesResponseController.sendJSON)
  .post(entriesController.makeEntry, entriesResponseController.handleCreateEntry)


module.exports = entriesRouter;
