var express = require('express');
var router = express.Router();
 isOnline = require('is-online');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/discord', function(req, res, next) {
  res.render('discord', { title: 'Yumi' });
});

router.get('/commands', function(req, res, next) {
  res.render('commands', { title: 'Commands' });
});

router.get('/faq', function(req, res, next) {
  res.render('faq', { title: 'FAQ' });
});

module.exports = router;
