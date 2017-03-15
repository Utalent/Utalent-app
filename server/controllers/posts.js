let Post = require('../models/posts.js');
let User = require('../models/users.js');
let Comment = require('../models/comments.js');
let PostLikeUsers = require('../models/postLikeUsers.js');

let CommentController = require('./comments.js');

module.exports = {
  
  addPost: function(req, res){
    let post = req.body;
    Post.findOne({text: post.text})
      .exec( (err, found) => {
        if (found) {
          res.status(500).send('Post already exist!');
        } else {
          return Post.create(post, (err, newPost) => {
          if(err){
            res.json(err);
          } else {
             // let GMT = new Date();
             // let local = new Date(GMT.valueOf() +120 * 60000)
             // let date = local.toUTCString().substr(0,12);
             // let time = local.toUTCString().substring(17,22);
             // newPost.set('created_at', [date,time]);
             // console.log("ppppppppppppp",newPost)
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
              //console.log("poost",post._id.getTimestamp().toUTCString())
              //let date = post._id.getTimestamp().toUTCString().substr(0,12);
              //let time = post._id.getTimestamp().toUTCString().substring(17,22);
              PostLikeUsers.count({post_id: post._id})
                .exec( (err, count) => {
                  if(err){
                    callback(null);
                  }
                  else{
                    post.set('likes', count)
                    CommentController.findAllPostComments(post._id, (comments) => {
                          post.set('comments', comments)
                          if(--postsToGo === 0){
                            callback(arr);
                          }
                    })
                  }
                    
                }); 
            })
          } 
  	  })
  }

}
