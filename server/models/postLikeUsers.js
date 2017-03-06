let mongoose = require('mongoose');

let LikeSchema = new mongoose.Schema({
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