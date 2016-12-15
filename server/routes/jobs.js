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


router.get('/:id([a-f0-9]{24})', function getAllJobs(req, res) {
    res.json({ id: req.params.id, company: req.params.company, link: req.params.link });
});

module.exports = router;
