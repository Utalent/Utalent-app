let Post = require('../models/posts.js');

module.exports = {
  
  addPost: function(req, res){
    let post = req.body;
    Post.findOne({text: post.text})
      .exec( (err, found) => {
        if (found) {
          res.status(500).send('Post already exist!');
        } else {
        // make a new user if not one
          return Post.create(post, (err, newPost) => {
          // create token to send back for auth
          if(err){
            res.json(err);
          } else {
            res.json('Post Added!'); 
          }     
        });
        }
      });
  },
  
  getAllChallengePosts: function(req, res){
  	let challengId = req.body.challenge_id;
  	Post.find({challenge_id: challengId})
  	  .exec( (err, found) => {
  	  	if (found) {
  	  		res.json(found);
  	  	} else {
  	  		res.status(500).send('No posts in this challenge');
  	  	}
  	  })

  }

}
