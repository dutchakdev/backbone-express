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
		},
		'bootstrap/dropdown': {
			deps: ['jquery'],
			exports: '$.fn.dropdown'
		}
	},
	paths: {
		'text': '/vendors/text/text',
		'jquery': '/vendors/jquery/dist/jquery',
		'ev-emitter': '/vendors/ev-emitter',
		'bootstrap': '/vendors/bootstrap/dist/js/bootstrap',
		'bootstrap/dropdown': '/vendors/bootstrap/js/dropdown',
		'masonry': '/vendors/masonry/dist/masonry.pkgd',
		'imagesloaded': '/vendors/imagesloaded/imagesloaded',
		'underscore': '/vendors/underscore-amd/underscore',
		'backbone': '/vendors/backbone-amd/backbone',
	}
});

require([
	'backbone',
	'views/app',
	'routers/router',
	'bootstrap/dropdown',
], function(Backbone, AppView, Router, dropdown) {
	'use strict';
	$('.dropdown-toggle').dropdown()
	new Router()
	Backbone.history.start();
	new AppView;
});
