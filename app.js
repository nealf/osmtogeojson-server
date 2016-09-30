var express = require('express');
var osmtogeojson = require('osmtogeojson');
var bodyParser = require('body-parser');

var app = express();
var jsonParser = bodyParser.json();

app.post('/', jsonParser, function(req, res) {
  if (!req.body) return res.sendStatus(400);
  res.send(osmtogeojson(req.body));
});

app.listen(3000, function () {
  console.log('Proxy listening on port 3000!');
});
