let PostLikeUsers = require('../models/postLikeUsers.js');

module.exports = {
	addLike: function(req, res){
		let like = req.body;
		PostLikeUsers.findOne(like)
		.exec( (err, found) => {
			if(found){
				res.status(500).send('This user Liked this post before balash estehbal!');
			}
			else{
				return PostLikeUsers.create(like, (err, newLike) => {
					if(err){
						res.json(err);
					}
					else{
						res.json('Like Added')
					}
				})
			}
		})
	}, 
	disLike: (req, res) => {
		let like = req.body;
		PostLikeUsers.findOne(like)
		.exec( (err, found) => {
			if(found){
				found.remove();
				res.json('Like removed')
			}
			else{
				res.status(500).send("No such like")
			}
		})
	},
	getPostLikes: (req, res) => {
		let post = req.body;
		PostLikeUsers.count({post_id: post})
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