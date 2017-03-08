let PostLikeUsers = require('../models/postLikeUsers.js');

module.exports = {
  addLike: function(req, res){
	let like = req.body;
	PostLikeUsers.findOne(like)
	  .exec( (err, found) => {
		  if(found){
        	res.status(500).send('This user Liked this post before!');
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
	}
}