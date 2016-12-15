var express= require('express');
var jobsModel = require('../models/jobs');

var router = express.Router();

router.get('/', function allJobs(req, res) {

  jobsModel.getAll(function dataRetrieved(err, data) {
    if(err) {
      console.log(err);
      res.status(500).send('Uh oh...couldn\'t get your data');
      return;
    }
    res.json(data);
  });
});


router.get('/:id([a-f0-9]{24})', function getAJob(req, res) {
  jobsModel.getOne(req.param.id, function dataRetriever(err, data) {
    if (err) {
      console.log(err);
      res.status(500).send('Uh oh...couldn\'t get your data');
      return;
    }
    res.json(data);
  });
});


router.post('/', function createJob(req, res) {
    console.log( req.body );

    jobsModel.create(req.body, function dataCreated(err, data) {
        if (err) {
          console.log(err);
          res.status(500).send('Uh oh...couldn\'t get your data');
          return;
        }
        res.json( {
            'company': data.ops[0].company,
            'notes': data.ops[0].notes,
            'link': data.ops[0].link,
            'createTime': data.ops[0].createTime
        });
    });
});

router.delete('/:id', function removeJob(req, res) {
  if (err) {
    console.log(err);
    res.status(500).send('Uh oh...couldn\'t get your data');
    return;
  }

})

module.exports = router;
