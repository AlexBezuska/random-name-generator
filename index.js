var express = require('express');
var generator = require('./app');

var app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/location', function(req, res) {
  res.json( generator.location());
});

app.get('/username', function(req, res) {
  res.json( generator.username());
});

app.listen(4321);