var expect = require('chai').expect;
var sinon = require('sinon');
var request = require("supertest");
var mongoose = require('mongoose');
var challenges = require('../models/challenges.js');

describe('challenges Model', function () {

  it('should be a Mongoose model', function () {
    expect(new challenges()).to.be.instanceOf(mongoose.Model);
  });

  it('should have a schema', function () {
    expect(challenges.schema).to.exist;
  });

  it('should be invalid if title is empty', function(done) {
        var anonUser = new challenges();
        anonUser.validate(function(err) {
            expect(err.errors.title).to.exist;
            done();
        });
    });
  
  xit('should be invalid if description is empty', function(done) {
        var anonUser = new challenges();
        anonUser.validate(function(err) {
            expect(err.errors.description).to.exist;
            done();
        });
    });

});
