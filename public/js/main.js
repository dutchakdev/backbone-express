require.config({
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		}
	},
	paths: {
		'text': 'vendors/text',
		'jquery': '/vendors/jquery/dist/jquery',
		'ev-emitter': '/vendors/ev-emitter',
		'bootstrap': '/vendors/bootstrap/dist/js/bootstrap',
		'masonry': '/vendors/masonry/dist/masonry.pkgd',
		'imagesloaded': '/vendors/imagesloaded/imagesloaded',
		'underscore': '/vendors/underscore-amd/underscore',
		'backbone': '/vendors/backbone-amd/backbone',
	}
});

require([
	'backbone',
	'views/app',
	'routers/router'
], function(Backbone, AppView, Router) {
	'use strict';

	new Router()
	Backbone.history.start();
	new AppView;
});
