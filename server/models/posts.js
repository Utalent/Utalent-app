let mongoose = require('mongoose');

let PostSchema = new mongoose.Schema({
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