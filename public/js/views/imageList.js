define([
	'jquery',
	'underscore',
	'backbone',
	'masonry',
	'imagesloaded',
	'text!templates/imageList.html',
	'views/image',
	'collections/images',
	'common'
], function($, _, Backbone, Masonry, imagesLoaded, ImagesTemplate, ImageView, Images, Common) {
	'use strict';

	return Backbone.View.extend({
		tagName: 'div',
		className: 'content__gallery__imageList',
		template: _.template(ImagesTemplate),

		initialize: function () {
			self = this;
			self.$el.find('.content__gallery__imageList').remove();
			self.listenTo(self.model, 'change sync', self.render);
			self.loader();
		},

		loader: function () {
			Images.on('fetch', function() {
				Common.$loader.show();
			}, this);
		},

		render: function () {
			this.$el.html('');
			this.$el.addClass('grid');
			this.$el.append('<div class="grid-sizer col-sm-6 col-md-4"></div>');
			_.each(this.model.models, function (item) {
				this.renderImages(item);
			}, this);
			this.$el.trigger('rendered');
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
