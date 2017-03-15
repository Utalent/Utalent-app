let Comment = require('../models/comments');


module.exports = {
	addComment: (req, res) => {
		let comment = req.body;

		return Comment.create(comment, (err, newComment) => {
			if(err){
				res.json(err);
			} else {
				let GMT = new Date();
				let local = new Date(GMT.valueOf() +120 * 60000)
				let date = local.toUTCString().substr(0,12);
                let time = local.toUTCString().substring(17,22);
                newComment.set('created_at', [date,time]);
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