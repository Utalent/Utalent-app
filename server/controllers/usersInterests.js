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

	getUserInterests: function(req, res){
		let user_id = req.body;
		userInterest.count({user_id: user_id})
		.exec( (err, count) => {
			if(err){
				res.json(err);
			}
			else{
				res.json(count);
			}
		});	
	}
}