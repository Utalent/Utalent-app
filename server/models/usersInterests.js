let mongoose = require('mongoose');

let UserInterestsSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  
  interest_id : {
    type: String,
    required: true  
  }
  
  
});
module.exports = mongoose.model('usersInterests', UserInterestsSchema);