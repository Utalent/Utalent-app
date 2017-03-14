let Comment = require('../models/comments');


module.exports = {
	addComment: (req, res) => {
		let comment = req.body;

		return Comment.create(comment, (err, newComment) => {
			if(err){
				res.json(err);
			} else {
				res.json('Comment Added!'); 
			}  
		});
	},

	findAllPostComments: (postId, callback) => {
		let post_id = postId;

		Comment.find({post_id: post_id})
			.exec( (err, found) => {
				if(err){
					callback(null)
				}
				else{
					callback(found);
				}
			})
	}




}	