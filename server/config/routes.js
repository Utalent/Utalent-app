// var utils = require('./utils.js');
// var helpers = require('./helpers.js');
var userController = require('../controllers/users.js')



module.exports = function(app, express) {
	app.post('/api/users/signup',userController.signup);
	app.post('/api/users/signin',userController.signin);
	app.get('/api/users/signup',userController.signup)

	// app.use(helpers.errorLogger);
	// app.use(helpers.errorHandler);

};

