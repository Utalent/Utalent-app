var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var request = require("supertest");
var app = require('../../server.js');
var should = chai.should();
var User = require('../models/users.js');
var userController = require('../controllers/users.js');
var mongoose = require('mongoose')
 
chai.use(chaiHttp);


describe('userController', function () {
  'use strict';
  
  var newUser;

  before(function(done){
    newUser = new User({
        email: "talent@utalent.com",
        username: "test",
        password: "1234"
      })

    done()
  })

  after(function(done){
    newUser.remove()
    User.remove({username: 'test1'}).exec()
    done()
  })

  function checkVerb(url , type, REST, status, done, json) {

    var api = {
      GET:  request(app).get(url),
      POST: request(app).post(url).send(json),
    }

    api[REST]
      .end(function (err , res) {
        res.should.have.status(status);
        if(type){
          res.should.be.json;
          res.body.should.be.a(type);
        }
        done();
      });
  }

  describe('signup', function () {
    it('have function signup', function (done) {
      expect(userController.signup).to.be.a('function');
      done()
    });
    // it('should respond with 200 at user signup', function(done){
    //   checkVerb('/api/user/:id', 'object', 'POST', 200, done, {
    //     email: "talent@utalent.com",
    //     username: "test1 ",
    //     password: "1234"
    //   })
    // })
    // it('should respond with a 500 if user already exists', function (done) {
    //     checkVerb('/api/user/signup', false, 'GET', 500, done, {username: "test", password: "1234"})
    // });

  })

  describe('signin', function () {
    it('have function signin', function (done) {
      expect(userController.signin).to.be.a('function');
      done()
    });
    // it('should respond with 200 at user signin', function(done){
    //   checkVerb('/api/users/signin', 'object', 'POST', 200, done, {username: 'test1', password: '1234'})
    // })
    // it('should respond with a 500 if user doea not exist', function (done) {
    //     checkVerb('/api/users/signin', false, 'GET', 500, done, {username: "test2", password: "1234"})
    // });

    // it('should respond with a 500 if wrong passoword', function (done) {
    //     checkVerb('/api/users/signin', false, 'GET', 500, done, {username: "test1", password: "12344"})
    // });
  })
});
