var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/nasa', function(req, res, next) {
  res.render('error', { title: 'Express' });
});

router.get('/tesla', function(req, res, next) {
  res.render('error2', { title: 'Express' });
});
router.get('/larp', function(req, res, next) {
  res.render('error3', { title: 'Express' });
});

module.exports = router;
