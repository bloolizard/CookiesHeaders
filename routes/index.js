var express = require('express');
var fdo = require('../fdo');
var router = express.Router();

/* GET home page. */
router.get('/', fdo.edwin, function(req, res) {

  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/info', function(req, res) {
  res.status(200).json({message: 'IMPL_101'});
});

module.exports = router;
