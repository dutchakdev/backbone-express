define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/image.html',
	'views/imageInfo',
], function($, _, Backbone, ImageListTemplate, ImageInfoView) {
	'use strict';

	return Backbone.View.extend({
		tagName: 'div',
		className: 'gallery__imageList__image',
		template: _.template(ImageListTemplate),

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			this.renderInfo();
			return this;
		},

		renderInfo: function () {
			var imageInfoView = new ImageInfoView({
				model: this.model
			});
			this.$el.append(imageInfoView.render().el);
		}

	});

});
