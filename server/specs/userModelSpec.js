var expect = require('chai').expect;
var sinon = require('sinon');
var request = require("supertest");
var mongoose = require('mongoose');
var User = require('../models/users.js');

describe('User Model', function () {

  it('should be a Mongoose model', function () {
    expect(new User()).to.be.instanceOf(mongoose.Model);
  });

  it('should have a schema', function () {
    expect(User.schema).to.exist;
  });

  it('should be invalid if name is empty', function(done) {
        var anonUser = new User();
        anonUser.validate(function(err) {
            expect(err.errors.username).to.exist;
            done();
        });
    });
   	it('should be invalid if email is empty', function(done) {
        var anonUser = new User();
        anonUser.validate(function(err) {
            expect(err.errors.email).to.exist;
            done();
        });
    });


});
