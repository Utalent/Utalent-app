let mongoose = require('mongoose');
let ObjectID = require('mongodb').ObjectID;

let Challenge = require('../models/challenges.js');
let Post = require('../models/posts.js');
let PostController = require('./posts.js');



module.exports = {
	addChallenge: function(req, res){
		let challenge = req.body;
          return Challenge.create(challenge, (err, newChallenge) => {
          if(err){
            res.json(err);
          } else {
            res.json('Challenge Added!'); 
          }     
        });
    },
    
	getAll: function(req, res){
		Challenge.find({})
			.exec( (err, challenges) => {
				if(err){
            		res.json(err);
          		} else {
            		res.json(challenges); 
          		} 
			})
	},

	getAllInterestChallenges: function(req, res){
		var interest = req.body;
		Challenge.find({interest_id: interest})
			.exec( (err, challenges) => {
				if(err){
            		res.json(err);
          		} else {
            		res.json(challenges); 
          		} 
			})
	},
	getChallenge(req, res){
  		let challengId = ObjectID(req.params.id);
  		Challenge.findOne({_id: challengId})
			.exec( (err, challenge) => {
				if(err){
          			res.status(500).send(err)
          		} else {
          			if(challenge){
          				challenge.set('created_at', challenge._id.getTimestamp().toString().substr(0,9))
	          			PostController.getAllChallengePosts(challengId, (posts) => {
	          				challenge.set('posts', posts);
	            			res.json(challenge);
	          			});
          			}
          			else{
          				res.status(500).send("No such challenge")
          			}

          		} 
			})

	}
}