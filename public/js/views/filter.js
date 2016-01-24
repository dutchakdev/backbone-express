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

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		
	});

});
