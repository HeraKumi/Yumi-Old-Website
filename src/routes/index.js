var express = require('express');
var router = express.Router();
 isOnline = require('is-online');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/commands', function(req, res, next) {
  res.render('commands', { title: 'Commands' });
});

router.get('/stats', function(req, res, next) {
  res.render('stats', { title: 'Stats' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Yumi' });
});

module.exports = router;
