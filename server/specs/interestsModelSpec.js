var expect = require('chai').expect;
var sinon = require('sinon');
var request = require("supertest");
var mongoose = require('mongoose');
var interests = require('../models/interests.js');

describe('interests Model', function () {

  it('should be a Mongoose model', function () {
    expect(new interests()).to.be.instanceOf(mongoose.Model);
  });

  it('should have a schema', function () {
    expect(interests.schema).to.exist;
  });

  it('should be invalid if name is empty', function(done) {
        var anonUser = new interests();
        anonUser.validate(function(err) {
            expect(err.errors.name).to.exist;
            done();
        });
    });
});
