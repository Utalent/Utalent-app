let express = require("express");
let mongoose = require("mongoose");


let app = express();
let server = require("http").createServer(app);


<<<<<<< HEAD
let port = process.env.PORT || 4000;
=======
let port = process.env.PORT || 3000;
>>>>>>> b15818612d8c94538bd5a54e98cfcaa071e1db43
///////////////////////////////fb///////////////////////////////
// let passport_fb = require('passport');
// let passport    = require('./config/passport');
// app.use(session({ secret: 'keyboard cat', key: 'sid'}));
// app.use(passport.initialize());
// app.use(passport.session());


require("./server/config/middleware.js") (app,express);
require("./server/config/routes.js") (app,express);


///////////////////////database////////////////////////
let mongoURI = process.env.MONGODB_URI ||"mongodb://localhost/utalent";
mongoose.connect(mongoURI);
db = mongoose.connection;
db.once("open", () => {
	console.log("mongoDB is open");
});




////////////////////server////////////////////////////
app.listen(port, () => {
	console.log("App listening on port:", port);
});

module.exports = app;