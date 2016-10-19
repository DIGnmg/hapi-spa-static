'use strict';

const routeConfig = {
	pre: [],
	handler: {
	  	directory: {
        	path: './dist/js',
        	listing: false,
        	index: true
    	}
	},
	description: 'Get all scripts',
	notes: 'Get all scripts',
	tags: ['static', 'scripts']
};

module.exports = routeConfig;
