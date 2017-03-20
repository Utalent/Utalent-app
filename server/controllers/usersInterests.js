let mongoose = require('mongoose');
let ObjectID = require('mongodb').ObjectID;
let userInterest = require('../models/usersInterests.js');
let interest = require('../models/interests.js');

module.exports = {
	addInterest: function(req, res){
		let data = req.body;
    let interestsToGo = data.interests.length;
    data.interests.forEach( elem => {
      interest.findOne({name: elem.name})
      .exec( (err, found) => {
        if (err) {
          res.send('no such talent category')
        }
        if (found) { 
          return userInterest.create({user_id: ObjectID(data.user_id), interest_id: ObjectID(found._id)}, (err, newInterest) => {
            if (err) {
              res.json(err);
            }
            else {
              if(--interestsToGo === 0){
                res.json('interest Added')
              } 
            }
          })
          
        }
      })
    })
    
  }, 

  getUserselected: (req, res) => {
    let user_id = req.params.id;
    userInterest.find({user_id: user_id})
      .exec( (err, interests) => {
        if(err){
          res.status(500).send(err);
          } else {
            let arr = interests;

            let interestsToGo = arr.length;
            if(!arr.length){
            res.status(500).send(err);
            }
            let results =[];
            arr.forEach(function(inter){
              interest.findOne({_id: inter.interest_id})
                .exec( (err, result) => {
                  if(err){
                   res.status(500).send(err);
                  }
                  else{
                    results.push(result.name)
                    if(--interestsToGo === 0){
                      res.json(results)
                    }
                  }
                    
                }); 
            })
          } 
      })
  }

}