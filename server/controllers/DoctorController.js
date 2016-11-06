var restful = require('node-restful');
  console.log("Doctor");
  module.exports = function(app, route){
    // Setup the controller for REST;

    var rest = restful.model('doctor', app.models.doctor).methods(['get', 'post', 'delete', 'put']);
    rest.register(app, route);

  // Return middleware.
  return function(req, res, next) {
    next();
  };
};
