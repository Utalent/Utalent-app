var express = require('express');
var app = express();
var server = require('http').createServer(app);

var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
///////////////////////////////fb///////////////////////////////
// var passport_fb = require('passport');
// var passport    = require('./config/passport');
// app.use(session({ secret: 'keyboard cat', key: 'sid'}));
// app.use(passport.initialize());
// app.use(passport.session());


require('./config/middleware.js') (app,express);
require('./config/routes.js') (app,express);


///////////////////////database////////////////////////
var mongoURI = process.env.MONGODB_URI ||'mongodb://localhost/utalent';
mongoose.connect(mongoURI);
db = mongoose.connection;
db.once('open',function () {
	console.log('mongoDB is open');
});




////////////////////server////////////////////////////
app.listen(port, function () {
  console.log(' app listening on port 3000!');//
})

module.exports = app;