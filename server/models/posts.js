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
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'users'
  },
  username: {
    type: String,
    
  },
  challenge_id: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'challenges'
  },
  likes: {
    type : Number
  },
  comments: {
    type : Array,
    
  },
  created_at: {
    type: Array
  }
  
});
module.exports = mongoose.model('posts', PostSchema);