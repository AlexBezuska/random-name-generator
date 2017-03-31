var express = require('express');
var generator = require('./app');

var app = express();

app.use(express.static('public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', express.static('public'));

app.get('/location', function(req, res) {
  res.json( generator.location());
});

app.get('/username', function(req, res) {
  res.json( generator.username());
});

var port = 4321;
app.listen(port);
console.log("Listening on http://0.0.0.0:" + port);
