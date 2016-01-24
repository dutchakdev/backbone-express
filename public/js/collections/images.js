define([
	'jquery',
	'underscore',
	'backbone',
	'models/images',
	'common'
], function($, _, Backbone, Images, Common) {
	'use strict';

	var ImagesCollection = Backbone.Collection.extend({
		model: Images,
		url: Common.API_GET_IMAGES
	});

	return new ImagesCollection();
});
