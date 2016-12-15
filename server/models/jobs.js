var dbConnect = require('./db-connect');
var ObjectID = require('mongodb').ObjectID;

module.exports = {
  getAll,
  getOne,
  create,
  destroy
};


function getAll(done) {
    dbConnect(function connectHandler(err, db) {
      if(err) {
          done(err, null);
          return;
      }
      db.collection('jobs')
        .find()
        .toArray( function mapData(err, data) {
          var mappedData = data.map(function (data) {
            return {
              'id': data._id,
              'company': data.company,
              'link': data.link
            };
          });
          done(err, mappedData);
        });
    });
}


function getOne(id, done) {
  dbConnect(function connectHandler(err, db) {
    if(err) {
        done(err, null);
        return;
    }
    db.collection('jobs')
      .findOne({_id: new ObjectID(id)}, function callback(err, data) {
        cleanData = {
          'id': data._id,
          'company': data.company,
          'notes': data.notes,
          'link': data.link,
          'createTime': data.createTime
        }
        done(null, cleanData);
      });
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

function destroy(data, done) {
    dbConnect(function connectHandler(err, db) {
        if (err) {
          done(err, null);
          return;
        }
        db.collection('jobs')
          .findOne({_id: new ObjectID(id)}, function callback(err, data) {
            done(null, data);
          });
      });
    }
