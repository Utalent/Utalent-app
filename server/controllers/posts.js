let Post = require('../models/posts.js');
let User = require('../models/users.js');
let Comment = require('../models/comments.js');

let PostLikeUsers = require('../models/postLikeUsers.js');

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
            res.json({id: post._id}); 
          }     
        });
        }
      });
  },
  
  getAllChallengePosts: function(challengId, callback){
    Post.find({challenge_id: challengId})
      .exec( (err, posts) => {
        if(err){
          callback(null);
          } else {
            let arr = posts;
            let postsToGo = arr.length;
            if(!arr.length){
              callback([])
            }
            arr.forEach(function(post){
      
              PostLikeUsers.count({post_id: post._id})
                .exec( (err, count) => {
                  
                  if(err){
                    callback(null);
                  }
                  else{
                    post.set('likes', count)
                    Comment.find({post_id: post._id})
                      .exec( (err, comments) => {
                        if(err){
                          callback(null);
                        }
                        else{
                          console.log("in comment***",comments)
                          post.set('comments', comments)
                          if(--postsToGo === 0){
                            callback(arr);
                          }
                        }
                      })
                  }
                }); 
            })
          } 
  	  })
  }

}
