'use strict';

const routeConfig = {
	pre: [],
	handler: function(request, reply) {
        reply.file('./dist/index.html');
	},
	description: 'Get index',
	notes: 'Get index',
	tags: ['index', 'static']
};

module.exports = routeConfig;
