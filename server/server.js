var express = require('express')
var mongoose = require('mongoose');
var server = require('http').createServer(app);//
var port = process.env.PORT || 4567;//
var app = express();




////////////////////server////////////////////////////
app.listen(port, function () {
  console.log(' app listening on port 4567!');//
})