let mongoose = require('mongoose');

let InterestsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique : true 
  },
  challenges: {
  	type: Array
  },
  icon: {
    type: String,
    required: true,
    unique : true
  }
  
});
module.exports = mongoose.model('interests', InterestsSchema);