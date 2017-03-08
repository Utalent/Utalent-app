// var utils = require('./utils.js');
// var helpers = require('./helpers.js');
let userController = require('../controllers/users.js');
let postController = require('../controllers/posts.js');
let likeController = require('../controllers/postLikeUsers.js');





module.exports = function(app, express) {

app.get('/', (req, res) => {
  res.send('backend');
});

	app.post('/api/users/signup',userController.signup);
	app.post('/api/users/signin',userController.signin);
	app.get('/api/users/signup',userController.signup)

	app.post('/api/posts/add',postController.addPost);
	app.post('/api/posts',postController.getAllChallengePosts);
	app.post('/api/posts/like',likeController.addLike);


	// app.use(helpers.errorLogger);
	// app.use(helpers.errorHandler);

};

