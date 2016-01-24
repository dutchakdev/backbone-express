define([
	'jquery',
	'backbone',
	'collections/images',
	'collections/categories',
	'common'
], function ($, Backbone, Images, Categories, Common) {
	'use strict';

	var ImageRouter = Backbone.Router.extend({
		routes: {
			'*filter': 'setFilter',
		},

		setFilter: function (param) {
			Common.ImagesFilter = param || '';
			Images.trigger('filter');
		}
	});

	return ImageRouter;
});
