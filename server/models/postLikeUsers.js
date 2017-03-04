var mongoose = require('mongoose');

var LikeSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true
  },

  post_id: {
    type: Number,
    required: true
  }  
});
module.exports = mongoose.model('postLikeUsers', LikeSchema);