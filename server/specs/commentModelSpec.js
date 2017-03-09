var expect = require('chai').expect;
var sinon = require('sinon');
var request = require("supertest");
var mongoose = require('mongoose');
var comments = require('../models/comments.js');

describe('comments Model', function () {

  it('should be a Mongoose model', function () {
    expect(new comments()).to.be.instanceOf(mongoose.Model);
  });

  it('should have a schema', function () {
    expect(comments.schema).to.exist;
  });

  it('should be invalid if text is empty', function(done) {
        var anonUser = new comments();
        anonUser.validate(function(err) {
            expect(err.errors.text).to.exist;
            done();
        });
    });

});
