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
  Acheivements: {
    type: String
  },
  about_you: {
    type: String
  },
  status: {
    type: String
  }
});

module.exports = mongoose.model('users', UserSchema);