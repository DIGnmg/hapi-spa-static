'use strict';

const routeConfig = {
	pre: [],
	handler: {
		directory: {
			path: './dist/styles',
			listing: false,
			index: true
		}
	},
	description: 'Get all styles',
	notes: 'Get all styles',
	tags: ['static', 'styles']
};

module.exports = routeConfig;
