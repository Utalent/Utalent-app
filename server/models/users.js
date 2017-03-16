let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  

  password: {
    type: String,
    required: true
  },
  email : {
    type: String,
    required: true
    
  },
  score: {
    type: Number
  },
  image:{
    type :String
  },
  fb_ID: {
    type: String
  }
  
});
module.exports = mongoose.model('users', UserSchema);