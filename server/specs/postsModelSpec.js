var expect = require('chai').expect;
var sinon = require('sinon');
var request = require("supertest");
var mongoose = require('mongoose');
var posts = require('../models/posts.js');

describe('posts Model', function () {

  it('should be a Mongoose model', function () {
    expect(new posts()).to.be.instanceOf(mongoose.Model);
  });

  it('should have a schema', function () {
    expect(posts.schema).to.exist;
  });

  it('should be invalid if text is empty', function(done) {
        var anonUser = new posts();
        anonUser.validate(function(err) {
            expect(err.errors.text).to.exist;
            done();
        });
    });
   xit('should be invalid if img is empty', function(done) {
        var anonUser = new posts();
        anonUser.validate(function(err) {
            expect(err.errors.img).to.exist;
            done();
        });
    });
   xit('should be invalid if video is empty', function(done) {
        var anonUser = new posts();
        anonUser.validate(function(err) {
            expect(err.errors.video).to.exist;
            done();
        });
    });

});
