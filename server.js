'use strict';

const Hapi = require('hapi');
const config = require('./config');
const EnvKeys = require('./config/env-keys');

const host = config('HOST');
const port = config('PORT');

//Plug-ins
const App = require('./routes/app.js');

const server = new Hapi.Server({ debug: { request: ['error'] } });

server.connection({ port: port, host: host });

const plugins = [App];
server.register(plugins, (err) => {

  if (err) {
    console.log('Error loading plugins: ' + err)
  } else {
  	console.log('Plugins loaded fine!')
  }

});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
