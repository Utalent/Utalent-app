var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');



var PostSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },

  img: {
    type: String
  },
  video: {
    type: String 
  },
  user_id: {
    type: Number
  },
  challenge_id: {
    type: Number
  }
  
});
module.exports = mongoose.model('posts', PostSchema);