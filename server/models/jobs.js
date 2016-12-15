var dbConect = require('./db-connect');

module.exports = {
  getAll,
  getOne,
  create,
  destroy
};


function getAll()
