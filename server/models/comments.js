let mongoose = require('mongoose');

let CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'users'
  },
  post_id : {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'posts'
  },
  created_at: {
    type: Array
    // default: {date: new Date().toUTCString().substr(0,12), time: new Date().toUTCString().substr(17,22)}
  }
});
module.exports = mongoose.model('comments', CommentSchema);