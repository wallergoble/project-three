var express = require('express');
var router = express.Router();
var passport = require('passport');

var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.post('/signup', function(req, res) {
    var newUser= new User({ username: req.body.username });
    User.register(newUser, req.body.password, function(err, user) {
            if (err) {
                return res.status(500).json({
                    err: err
                });
            }
            passport.authenticate('local')(req, res, function () {
                return res.status(200).json({
                    status: 'Registration successful!'
                });
            });
        });
});


router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        var error= err ||info;
        if (error) {
            return res.status(401).json(error);
        }
        if (!user) {
            return res.status(404).json({ message:'Something went wrong, please try again!'
            });
        }
        req.login(user, function(err) {
            if (err) {
                return res.status(401).json({
                    res.json({username: user.username});
                });
            }
            // res.status(200).json({
            //     status: 'Login successful!'
            // });
        });
    })(req, res, next);
});

router.get('/logout', function(req, res) {
    req.logout();
    res.sendstatus(200);
});


module.exports = router;
