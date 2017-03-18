let mongoose = require('mongoose');
let userInterest = require('../models/usersInterests.js');
let interest = require('../models/interests.js');

module.exports = {
	addInterest: function(req, res){
		let data = req.body;
		// let interests = JSON.parse(data);
		// res.send(data.interests)

		let interestsToGo = data.interests.length;
		data.interests.forEach( elem => {
			interest.findOne({name: elem})
			.exec( (err, found) => {
				if (err) {
					res.send('no such talent category')
				}
				if (found) { 
					return userInterest.create({user_id: JSON.parse(data.user_id), interest_id: found._id}, (err, newInterest) => {
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

	// getUserInterests: function(req, res){
	// 	let user_id = req.body.user_id;
	// 	userInterest.count({user_id: user_id})
	// 	.exec( (err, count) => {
	// 		if(err){
	// 			res.json(err);
	// 		}
	// 		else{
	// 			res.json(count);
	// 		}
	// 	});	
	// },

	// getUserselected: function(req, res){
	// 	let user_id = req.body.user_id;
	// 	userInterest.find({user_id: user_id})
	// 	.exec( (err, interests) => {
	// 		if(err){
	// 			res.json(err);
	// 		}
	// 		else{
	// 			res.json(interests);
	// 		}
	// 	});	
	// }
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
          console.log("nooooooooooooooooooooooo")
            res.status(500).send(err);
            }
            let results =[];
            arr.forEach(function(inter){
            	console.log(inter)
              interest.findOne({_id: inter.interest_id})
                .exec( (err, result) => {
                	console.log(result)
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