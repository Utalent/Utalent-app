let Comment = require('../models/comments');
let User = require('../models/users.js');


module.exports = {
	addComment: (req, res) => {
		let comment = req.body;
		let GMT = new Date();
				let local = new Date(GMT.valueOf() +120 * 60000)
				let date = local.toUTCString().substr(0,12);
                let time = local.toUTCString().substring(17,22);
                comment.created_at ={date : date,time: time};
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
			.exec( (err, comments) => {
				if(err){
					callback(null)
				}
				else{
					let array = comments;
					let commentToGo = array.length;
					if(!array.length){
			              callback([])
			            }
					array.forEach(function(comment){
					let user_id = comment.user_id
					 User.findOne({_id:user_id}).exec((err,user) =>{
					 	if(err){
					 		callback(array);
					 	}
					 	else{
					 		comment.set('owner',user);
					 		if(--commentToGo === 0){
							    callback(array);
					 		}
					 	}
					 })
					 	
					})
				}
			})
	}
}	