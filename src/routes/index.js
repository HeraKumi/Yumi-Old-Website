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

module.exports = router;
