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

	// getAllInterestChallenges: function(req, res){
	// 	var interest = req.body;
	// 	Challenge.find({interest_id: interest})
	// 		.exec( (err, challenges) => {
	// 			if(err){
 //            		res.json(err);
 //          		} else {
 //            		res.json(challenges); 
 //          		} 
	// 		})
	// },
	getChallenge(req, res){
  		let challengId = ObjectID(req.params.id);
  		Challenge.findOne({_id: challengId})
			.exec( (err, challenge) => {
				if(err){
          			res.status(500).send(err)
          		} else {
          			if(challenge){
                  // let date = challenge._id.getTimestamp().toUTCString().substr(0,12);
                  // let time = challenge._id.getTimestamp().toUTCString().substring(17,22);
          				 // challenge.set('created_at', {date: date,time: time});
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

	},

  getAllInterestChallenges: (interestId, callback) => {
    Challenge.find({interest_id: interestId})
      .exec( (err, challenges) => {
        if(err){
          callback(null);
          } else {
            let arr = challenges;
            let challengesToGo = arr.length;
            if(!arr.length){
              callback([])
            }
            arr.forEach(function(challenge){
              Post.find({challenge_id: challenge._id})
                .exec( (err, posts) => {
                  if(err){
                    callback(null);
                  }
                  else{
                    challenge.set('posts', posts)
                    if(--challengesToGo === 0){
                      callback(arr);
                    }
                  }
                    
                }); 
            })
          } 
      })
  }

}