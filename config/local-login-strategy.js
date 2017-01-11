var LocalStrategy   = require('passport-local').Strategy;
var User            = require('../models/user');

var strategy = new LocalStrategy({
    usernameField : 'username',                 // default is 'username'
    passwordField : 'password',
    passReqToCallback : true
}, function(req, username, password, callback) {
    // Search for a user with this email
    User.findOne({ 'username' : username }, function(err, user) {
        if (err) return callback(err);

        // If no user is found
        if (!user) {
            return callback(null, false, { message: 'User not found.' });
        }

        // Validate password
        if (!user.isValidPassword(password)) {
            return callback(null, false, { message: 'Oops! Wrong password.' });
        }

        return callback(null, user);
    });
});

module.exports = strategy;