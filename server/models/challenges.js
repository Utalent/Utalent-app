var mongoose = require('mongoose');

var ChallengeSchema = new mongoose.Schema({
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
    type: Number,
    required: true 
  },
  interest_id: {
    type: Number,
    required: true  
  },
  
});
module.exports = mongoose.model('challenges', ChallengeSchema);