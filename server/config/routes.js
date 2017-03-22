let userController = require('../controllers/users.js');
let postController = require('../controllers/posts.js');
let likeController = require('../controllers/postLikeUsers.js');
let challengeController = require('../controllers/challenges.js');
let interestController = require('../controllers/interests.js');
let userInteresetsController = require('../controllers/usersInterests.js');
let commentController = require('../controllers/comments.js');

module.exports = function(app, express) {

	app.get('/', (req, res) => {
  	res.send('backend');
	});

	app.post('/api/users/signup', userController.signup);

	app.post('/api/users/signin', userController.signin);
	app.get('/api/users/:username', userController.getProfile);

	app.post('/api/users/photo/:username', userController.Addphoto);	

	app.post('/api/posts/add', postController.addPost);
	app.get('/api/posts', postController.getAllPosts);

	app.post('/api/posts/addLike', likeController.addLike);
	app.post('/api/posts/disLike', likeController.disLike);
	app.get('/api/posts/likes', likeController.getPostLikes);

	app.post('/api/challenges/add', challengeController.addChallenge);
	app.get('/api/challenges', challengeController.getAll);
	app.get('/api/challenges/:id', challengeController.getChallenge);
	
	app.post('/api/comments/add', commentController.addComment);

	app.post('/api/interests', interestController.addInterest);
	app.get('/api/interests', interestController.getAll);
	app.get('/api/interests/:name', interestController.getInterest);
  
  app.post('/api/usersInterests', userInteresetsController.addInterest);
  app.get('/api/getUserselected/:id', userInteresetsController.getUserselected);
};

