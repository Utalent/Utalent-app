let mongoose = require('mongoose');
let Interest = require('../models/interests.js')
let Challenge = require('../models/challenges.js');
let Post = require('../models/posts.js');
let ChallengeController = require('./challenges.js');


module.exports = {
  addInterest: function(req, res){
    let interest = req.body;
    return Interest.create(interest, (err, newInterest) => {
      if(err){
        res.json(err);
      } else {
        res.json('interest Added!'); 
      }     
    });
  },

  getAll: (req, res) => {
    Interest.find({})
    .exec( (err, Interests) => {
      if(err){
        res.json(err);
      } else {
        res.json(Interests); 
      } 
    })
  },

  getInterest: (req, res) => {
    let interest = req.params.name;
    Interest.findOne({name: interest})
    .exec( (err, interest) => {
      if(err){
        res.status(500).send(err);
      }
      else{
        if(interest){
          ChallengeController.getAllInterestChallenges(interest._id, (challenges) => {
            if(challenges){
              interest.set('challenges', challenges)
            }
            res.json(interest)
          })
        }
        else{
          res.status(500).send("No such an interest");
        }
      }
    })
  }
}