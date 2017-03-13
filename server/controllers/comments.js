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

	


}	