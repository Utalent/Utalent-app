/*config is our configuration variable.*/
var fb = require('./fb.js');
var FacebookStrategy  = require('passport-facebook').Strategy
var session = require('express-session');
var User = require('../models/users.js')

module.exports = function(app, passport){
  // Passport session setup.
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
 passport.use(new FacebookStrategy({
    clientID: fb.facebook_api_key,
    clientSecret:fb.facebook_api_secret ,
    callbackURL: fb.callback_url
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      //Check whether the User exists or not using profile.id
      User.findOne({'fb_ID': profile.id}, function(err, found){
        if(err){
          return done(err);
        }
        if(found){
          return done(null, found);
        }
        else{
          var user = {};
          user.username = profile.displayName ;
          // user.email = profile.emails[0].value;
          user.fb_ID = profile.id;
          var token = accessToken;

          return User.create(user, function (err, newUser) {
              // create token to send back for auth
              if(err){
                throw err;
              } else {
                // var token = jwt.encode(found, 'secret');
                return done(null, found)
                
              }     
          });
        }
      })
    });
  }
));
} 