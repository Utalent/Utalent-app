let mongoose = require('mongoose');

let ChallengeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'users'
  },
  interest_id: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'interests'
  },
  posts: { 
    type : Array,
    "default" : [] 
  },
  created_at: {
    type: Object
  }

  
});

module.exports = mongoose.model('challenges', ChallengeSchema);