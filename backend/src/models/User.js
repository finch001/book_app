/**
 * Created by finch on 8/10/17.
 */

var mongoose = require('mongoose');

var User = mongoose.Schema({
  username: String,
  password: String,
  email: String
});

module.exports = mongoose.model('users', User);

