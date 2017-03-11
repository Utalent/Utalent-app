let mongoose = require('mongoose');

let FriendSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'users'
  },

  friend_id: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'users'
  }]
  
});
module.exports = mongoose.model('friends', FriendSchema);