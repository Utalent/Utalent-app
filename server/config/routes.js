// var utils = require('./utils.js');
// var helpers = require('./helpers.js');
let userController = require('../controllers/users.js');
let postController = require('../controllers/posts.js');
let likeController = require('../controllers/postLikeUsers.js');
let challengeController = require('../controllers/challenges.js');
let interestController = require('../controllers/interests.js');
let userInteresetsController = require('../controllers/usersInterests.js');

module.exports = function(app, express) {

	app.get('/', (req, res) => {
  	res.send('backend');
	});

	app.post('/api/users/signup', userController.signup);
	app.post('/api/users/signin', userController.signin);
	app.get('/api/users/signup', userController.signup)
	app.get('/api/users/:username', userController.getProfile);

	app.post('/api/posts/add', postController.addPost);
	app.post('/api/posts', postController.getAllChallengePosts);
	
	app.post('/api/posts/addLike', likeController.addLike);
	app.post('/api/posts/likes', likeController.getPostLikes);

	app.get('/api/challenges', challengeController.getAll);
	app.get('/api/challenges/:id', challengeController.getChallenge);
	app.post('/api/challenges/add', challengeController.addChallenge);
	
	app.get('/api/interests', interestController.getAll);
	app.post('/api/interests', interestController.addInterest);
  
  app.get('/api/usersInterests', userInteresetsController.getUserInterests);
  app.post('/api/usersInterests', userInteresetsController.addInterest);

	// app.use(helpers.errorLogger);
	// app.use(helpers.errorHandler);

};

