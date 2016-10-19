'use strict';

exports.register = function(server, options, next) {
  server.bind(options);

  server.route([
    {method: 'GET', path: '/styles/{param*}', config: require('../routeconfig/static/styles')},
    {method: 'GET', path: '/js/{param*}', config: require('../routeconfig/static/scripts')},
    {method: 'GET', path: '/{param*}', config: require('../routeconfig/static/static')}
  ]);

  return next();
};

exports.register.attributes = {
  name: 'app',
  version: require('../package.json').version
};