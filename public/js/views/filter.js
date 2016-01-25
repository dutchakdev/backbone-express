define([
	'jquery',
	'underscore',
	'backbone',
	'bootstrap-select',
	'text!templates/filters.html',
	'common'
], function($, _, Backbone, selectpicker, FiltersTemplate, Common) {
	'use strict';

	return Backbone.View.extend({
		tagName: 'div',
		className: 'gallery__filters',
		template: _.template(FiltersTemplate),
		events: {
			'keypress .gallery__filters__filter-tags-input': 'filterByTag',
			'rendered': 'initPlugins',
		},

		initialize: function () {

		},

		filterByTag: function (event) {

		},

		initPlugins: function () {
			$(Common.GALLERY_SELECTOR).on(Common.EVENT_AFTER, function(){
				$('.selectpicker').selectpicker({
					style: 'btn-default',
					size: 4
				});
			});
			this.renderCategoryFilter();
		},

		renderCategoryFilter: function () {

		},
		
		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			this.$el.trigger('rendered');
			return this;
		},

	});

});
