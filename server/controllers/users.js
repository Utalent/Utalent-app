var jwt  = require('jwt-simple');
var util = require('../config/utils.js');
var User = require('../models/users.js');

module.exports = {
	 signin : function(req,res) {
    var user = req.body;

    User.findOne({username: user.username})
      .exec(function(err, found){
        if(found){
          util.comparePass(user.password, found.password,function(exist){
            if(exist){
            var token = jwt.encode(found, 'not your bussines!!');
            res.json({token: token});
            }
            else{
            console.log("password is not correct")
            res.status(500).send("Password is not correct")
            }
          })  
        }
        else{
          res.status(500).send("User not found!")
        }
      })
 },



signup: function(req, res) {
    var user = req.body;
    
    util.hashpass(user.password,function(hash){
          user.hashedpass = hash;
    })
    // check to see if user already exists
    User.findOne({username: user.username})
      .exec(function (err, found) {
        if (found) {
          res.json('User already exist!');
        } else {
          // make a new user if not one
          return User.create(user, function (err, newUser) {
              // create token to send back for auth
              if(err){
                res.json(err);
              } else {
                var token = jwt.encode(found, 'secret');
                res.json({token: token}); 
              }     
          });
        }
      });
  }
}


