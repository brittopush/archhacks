var restful = require('node-restful');
  console.log("Detail");
  module.exports = function(app, route){
    // Setup the controller for REST;

    var rest = restful.model('detail', app.models.detail).methods(['get', 'post', 'delete', 'put']);
    rest.register(app, route);

  // Return middleware.
  return function(req, res, next) {
    next();
  };
};
