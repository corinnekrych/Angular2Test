var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

function poniesRoute() {
  var route = new express.Router();
  route.use(cors());
  route.use(bodyParser());


  // GET REST endpoint - query params may or may not be populated
  route.get('/', function(req, res) {
    console.log(new Date(), 'In ponies list route GET / req.query=', req.query);
    
    // see http://expressjs.com/4x/api.html#res.json
    res.json([{name: "Bulblue", age: 4}, {name: "Yellow Sun", age: 4}]);
  });

  route.post('/pony', function(req, res) {
    console.log(new Date(), 'In pony create route POST / req.body=', req.body);
    var pony = req.body.pony

    // see http://expressjs.com/4x/api.html#res.json
    res.json({name: pony.name, age: pony.age, registered: new Date()});
  });

  return route;
}

module.exports = poniesRoute;