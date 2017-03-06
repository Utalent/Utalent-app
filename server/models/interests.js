let mongoose = require('mongoose');

let InterestsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
  
});
module.exports = mongoose.model('interests', InterestsSchema);