var jwt = require('jwt-simple');
var User = require('./models/user.js');

exports.modules = {
	signin: function(){
		//YOUR code here
	} 
}





exports.modules = {
	signup: function(req,res,next){
		var username = req.body.username;
    	var password = req.body.password;
    	var email    = req.body.email

    	findOne({ username: username })
    		.then(function (err, user) {
	    		if(user){
	    			 next(new Error('User already exist!'));
	    		}
	    		else {
	          // make a new user if not one
	          return createUser({
	            username: username,
	            password: password,
	            email   : email
	          });
	        	}

    		})
    		.then(function (user) {
		        // create token to send back for auth
		        var token = jwt.encode(user, 'secret');
		        res.json({token: token});
		      	})
		       .fail(function (error) {
		        next(error);
		      	});


	} 
}