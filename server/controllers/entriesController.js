const entriesModel = require('../models/entriesModel');

module.exports = {

  async getAll(req, res, next) {
    try {
      res.locals.entries = await entriesModel.findAll();
      next();
    }
    catch (err) {
      next(err);
    }
  },

  async getByID(req, res, next) {
    try {
      res.locals.entry = await entriesModel.findByID(req.params.id);
      next();
    }
    catch (err) {
      next(err);
    }
  },

  async makeEntry(req, res, next) {
    try {
      res.locals.entry = await entriesModel.createEntry(req.body);
      next();
    }
    catch (err) {
      next(err);
    }
  },

  async editEntry(req, res, next) {
    try {
      res.locals.entry = await entriesModel.updateEntry(req.body, req.params.id);
      next();
    }
    catch (err) {
      next(err);
    }
  },

  async removeEntryByID(req, res, next) {
    try {
      res.locals.entry = await entriesModel.deleteEntryByID(req.params.id);
      next();
    }
    catch(err) {
      next(err);
    }
  },

}