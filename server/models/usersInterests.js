let mongoose = require('mongoose');

let UserInterestsSchema = new mongoose.Schema({
  user_id: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'users'
  }],
  
  interest_id : [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'interests'
  }]

});
module.exports = mongoose.model('usersInterests', UserInterestsSchema);