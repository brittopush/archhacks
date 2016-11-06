var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

// Create the application.
var app = express();

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Connect to MongoDB
//mongoose.connect('mongodb://localhost/movie');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/pfizer', function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' +'. ' + err);
  } else {
    console.log ('Succeeded connected to: ');
    console.log(res);
  }
});

mongoose.connection.once('open', function() {

  // Load the models.
  app.models = require('./models/index');
  /*var MovieSchema = new mongoose.Schema({
    title: {
      type: String,
      required: false
    },
    url: {
      type: String,
      required: false
    }
  });

  var movies = mongoose.model('movie1',MovieSchema);
  var johndoe = {
    title: 'Google',
    url: 'www.google.com'
  };
  var data = new movies(johndoe);
  //var lotsOfDocs = [{'hello':'doc3'}, {'hello':'doc4'}];
  //collection.insert(doc1);
  // Saving it to the database.*/
  //data.save(function (err) {if (err) console.log('Error on save!')});

  // Load the routes.
  var routes = require('./routes');
  _.each(routes, function(controller, route) {
    app.use(route, controller(app, route));
  });

  console.log('Listening on port 3000...');
  app.listen(3000);
});
