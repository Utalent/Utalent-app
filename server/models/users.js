var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },
  email : {
    type: String,
    required: true
    
  },
  score: {
    type: Number
  },

  fb_ID: {
    type: String,
  }
  
});
module.exports = mongoose.model('users', UserSchema);