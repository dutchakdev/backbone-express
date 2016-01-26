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
		},
		'bootstrap-select': {
			deps: ['jquery', 'bootstrap/dropdown'],
			exports: '$.fn.selectpicker'
		}
	},
	paths: {
		'text': '/vendors/text/text',
		'jquery': '/vendors/jquery/dist/jquery',
		'ev-emitter': '/vendors/ev-emitter',
		'bootstrap': '/vendors/bootstrap/dist/js/bootstrap',
		'bootstrap-select': '/vendors/bootstrap-select/dist/js/bootstrap-select',
		'async': '/vendors/async/dist/async',
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
], function(Backbone, AppView, Router) {
	'use strict';
	// JSHnint fix no-new
	// (function(){
	// 	return new Router();
	// })();
	// Backbone.history.start();
	// JSHnint fix no-new
	(function(){
		return new AppView();
	})();
});
