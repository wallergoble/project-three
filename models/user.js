var mongoose = require('mongoose');
// var bcrypt   = require('bcrypt-nodejs');
var passportLocalMongoose = require('passport-local-mongoose');
// var Story    = require('./story');
// var Author   = require('./author');

var UserSchema = new mongoose.Schema({
  local : {
    firstName: String,
    lastName : String,
    email    : String,
    password : String
  },
  // authors : [Author.schema]
});
//
// UserSchema.methods.encrypt = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8));    //
// };
//
// UserSchema.methods.isValidPassword = function(password) {
//   return bcrypt.compareSync(password, this.local.password);
// };

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
