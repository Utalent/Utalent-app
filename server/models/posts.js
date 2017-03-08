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
  user_id: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'users'
  }],
  challenge_id: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'challenges'
  }]
  
});
module.exports = mongoose.model('posts', PostSchema);