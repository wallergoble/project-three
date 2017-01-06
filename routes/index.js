var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//GET LOGIN PAGE

router.get('/index', function (req,res) {
  res.render('index')

});

//POST LOGIN PAGE
router.post('/index', function (req, res) {
    res.send('READY TO LOG IN');
});

module.exports = router;
