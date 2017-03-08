let mongoose = require('mongoose');

let LikeSchema = new mongoose.Schema({
  user_id: [{
  	type: mongoose.Schema.Types.ObjectId, 
  	ref: 'users'
  }],

  post_id: [{
  	type: mongoose.Schema.Types.ObjectId, 
  	ref: 'posts'
  }]
 
});
module.exports = mongoose.model('postLikeUsers', LikeSchema);