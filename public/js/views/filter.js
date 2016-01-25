define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/filters.html',
], function($, _, Backbone, FiltersTemplate) {
	'use strict';

	return Backbone.View.extend({
		tagName: 'div',
		className: 'gallery__filters',
		template: _.template(FiltersTemplate),
		events: {
			'keypress .gallery__filters__filter-tags-input': 'setTags',
		},
		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},

	});

});
