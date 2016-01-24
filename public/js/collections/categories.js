define([
	'jquery',
	'underscore',
	'backbone',
	'models/categories'
], function($, _, Backbone, Categories) {
	'use strict';

	var CategoriesCollection = Backbone.Collection.extend({
		model: Categories,
	});

	return new CategoriesCollection();
});
