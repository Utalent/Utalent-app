let userInterest = require('../models/usersInterests.js');

module.exports = {
	addinterest: function(req, res){
		let interest = req.body.in
		userInterest.findOne(interest)
		.exec( (err, found) => {
			if(found){
				res.status(500).send('interestd before ');
			}
			else{
				return userInterest.create(interest, (err, newInterest) => {
					if(err){
						res.json(err);
					}
					else{
						res.json('interest Added')
					}
				})
			}
		})
	}, 
	getUserInterests: function(req, res){
		let interest = req.body;
		userInterest.count({interest_id: interest})
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