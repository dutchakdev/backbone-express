define([
	'jquery',
	'underscore',
	'backbone',
	'masonry',
	'imagesloaded',
	'text!templates/imageList.html',
	'views/image',
], function($, _, Backbone, Masonry, imagesLoaded, ImagesTemplate, ImageView) {
	'use strict';

	return Backbone.View.extend({
		tagName: 'div',
		className: 'gallery__imageList',
		template: _.template(ImagesTemplate),

		render: function () {
			this.$el.html('');
			this.$el.addClass('grid');
			this.$el.append('<div class="grid-sizer"></div>');
			_.each(this.model.models, function (item) {
				this.renderImages(item);
			}, this);

			return this;
		},

		renderImages: function(item) {
			var imageView = new ImageView({
				model: item
			});
			this.$el.append(imageView.render().el);
		}
	});

});
