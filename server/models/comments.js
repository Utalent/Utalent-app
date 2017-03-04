var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  user_id: {
    type: Number,
    required: true
  },
  post_id : {
    type: Number,
    required: true
  }
});
module.exports = mongoose.model('comments', CommentSchema);