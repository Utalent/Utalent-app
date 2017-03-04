var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true
  },

  friend_id: {
    type: Number,
    required: true
  }
  
});
module.exports = mongoose.model('friends', FriendSchema);