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
              res.json({token: token, id :found.id, username: found.username});
            }
            else{
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
    util.hashpass(user.password, (hash) => {
        user.password = hash;
    })
    // check to see if user already exists
    User.findOne({username: user.username})
      .exec( (err, found) => {
        if (found) {

          res.status(500).send('User already exist!');
        } else {
          // make a new user if not one
          return User.create(user, (err, newUser) => {
              // create token to send back for auth
              if(err){
                res.status(500)
              } else {
                let token = jwt.encode(newUser, 'secret');
                res.json({token: token,id :newUser._id, username: newUser.username}); 
              }     
          });
        }
      });
  },

  getProfile:(req, res) =>{
    let userName = req.params.username;
    User.findOne({username:userName})
    .exec((err, found)=>{
      if (found){
        res.json(found)
      }else {
        res.status(500).send("user does not exist")
      }
    }) 
  },

  Addphoto:function(req,res){
   let data = req.body;
   User.findOne({username:data.username})
    .exec((err,user)=> {
      if(err){
        res.json(err);
      }
      else{
        if (user ){
        user.update({image: data.image}, (updated) => {
          res.json("add succsees !!");
        })
          
        }else {
          res.json("no user ")
        }
      }
    })
  }

}


 