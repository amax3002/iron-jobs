var dbConnect = require('./db-connect');

module.exports = {
  getAll,
  // getOne,
  create
  // destroy
};


function getAll(done) {
    dbConnect(function connectHandler(err, db) {
      if(err) {
          done(err, null);
          return;
      }
      db.collection('jobs')
        .find()
        .toArray(done);
    });
}

function create(data, done) {
    dbConnect(function connectHandler(err, db) {
        if (err) {
          done(err, null);
          return;
        }

        data.createTime = Date.now();
        db.collection('jobs')
            .insert(data, done);
    });
}
