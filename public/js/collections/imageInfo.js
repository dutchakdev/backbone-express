define([
	'jquery',
	'underscore',
	'backbone',
	'models/imageInfo',
	'common'
], function($, _, Backbone, ImageInfo, Common) {
	'use strict';

	var ImageInfoCollection = Backbone.Collection.extend({
		model: ImageInfo,
		url: Common.API_POST_LIKE
	});

	return new ImageInfoCollection();
});
