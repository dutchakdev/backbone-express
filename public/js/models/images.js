define([
	'jquery',
	'underscore',
	'backbone',
	'common'
], function($, _, Backbone, Common) {
	'use strict';

	var Images = Backbone.Model.extend({
		defaults: {
			file: Common.PLACEHOLDER,
			tags: '',
			category: null,
			likes: 0
		}
	});

	return Images;

});
