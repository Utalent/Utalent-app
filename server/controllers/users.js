let jwt  = require('jwt-simple');
let util = require('../config/utils.js');
let User = require('../models/users.js');

module.exports = {

	signin : (req,res) => {
    let user = req.body;
    User.findOne({username: user.username})
      .exec( (err, found) => {
        if(found){
          util.comparePass(user.password, found.password, (exist) => {
            if(exist){
              let token = jwt.encode(found, 'secret');
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


signup: (req, res) => {
    let user = req.body;
    console.log("ffffffffffffffff",user)
    
    util.hashpass(user.password, (hash) => {
        user.password = hash;
    })
    // check to see if user already exists
    User.findOne({username: user.username})
      .exec( (err, found) => {
        if (found) {
          res.json('User already exist!');
        } else {
          // make a new user if not one
          return User.create(user, (err, newUser) => {
              // create token to send back for auth
              if(err){
                res.json(err);
              } else {
                let token = jwt.encode(found, 'secret');
                res.json({token: token}); 
              }     
          });
        }
      });
  }
}


