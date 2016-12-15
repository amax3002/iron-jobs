var mongodb = require('mongodb');

var express= require('express');

var router = express.Router();

router.get('/', function allJobs(req, res) {

  jobsModel.getAll(function dataRetrieved(err, data) {

    if(err) {
      console.log(err);
      res.status(500).send('Uh oh...couldn\'t get your data');
      return;
    }

    res.json(data);
  })
})
