var jwt  = require('jwt-simple');
var util = require('../config/utils.js');
var User = require('../models/users.js');

module.exports = {
	//  signin : function(req,res) {
 //  var email      = req.body.email; 
 //  var password   = req.body.password;
 //  var hashedpass = util.hashpass(password,function(hash){
 //      hashedpass = hash;
 //  });
 //    new User({ email: email }).fetch().then(function(found) {
 //    if (found) {
 //      var userHash = found.get('password');
 //      util.comparePass(password,userHash,function(exist){
 //        if(exist){
       
 //          var token = jwt.encode(found, 'not your bussines!!');
 //          res.json({token: token});
 //                 }else{
 //          console.log("password is not correct")
 //            res.status(500).send("password is not correct")

 //        }
 //      })  
 //    } else {
 //    console.log("not found")
 //      }
 //  });
 // },



signup: function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var hashedpass = util.hashpass(password,function(hash){
          hashedpass = hash;
      	})
   
    var email = req.body.email;
    // check to see if user already exists
    User.findOne({username: username})
      .exec(function (err, user) {
        if (user) {
          res.json('User already exist!');
        } else {
          // make a new user if not one
          return User.create({
            username: username,
            password: hashedpass,
            email:email,
          }, function (err, newUser) {
              // create token to send back for auth
              if(err){
                res.json(err);
              } else {
                var token = jwt.encode(user, 'secret');
                res.json({token: token}); 
              }     
          });
        }
      });
  }
}


