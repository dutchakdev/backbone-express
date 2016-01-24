define([
	'jquery',
	'underscore',
	'backbone',
	'models/categories',
	'common'
], function($, _, Backbone, Categories, Common) {
	'use strict';

	var CategoriesCollection = Backbone.Collection.extend({
		model: Categories,
		url: Common.API_GET_CATEGORIES
	});

	return new CategoriesCollection();
});
