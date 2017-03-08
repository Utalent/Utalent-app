let mongoose = require('mongoose');

let ChallengeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  desc: {
    type: String,
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'users'
  },
  interest_id: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'interests'
  }
  
});

module.exports = mongoose.model('challenges', ChallengeSchema);