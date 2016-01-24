define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/images.html',
], function($, _, Backbone, ImageListTemplate) {
	'use strict';

	return Backbone.View.extend({
		tagName: "div",
		className: "gallery__imageList__image",
		template: _.template(ImageListTemplate),

		events: {
			'click .gallery__imageList__image': 'like'
		},

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

});
