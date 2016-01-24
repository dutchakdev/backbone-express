define([
	'jquery',
	'underscore',
	'backbone',
	'masonry',
	'imagesloaded',
	'views/imageList',
	'collections/images',
	'common',
	'text!templates/filters.html',
], function($, _, Backbone, Masonry, imagesLoaded, ImageListView, Images, Common, Filters) {
	'use strict';

	var App = Backbone.View.extend({
		el: Common.GALLERY_SELECTOR,

		initialize: function() {
			var mainView = this;
			// Делаем запрос к api, получаем список картинок
			Images.fetch();
			Images.on('sync', function () {
				mainView.initGrid();
				mainView.render();
			})
		},

		initGrid: function() {
			$(this.$el).on(Common.EVENT_AFTER_RENDER, function(){
				imagesLoaded($('.gallery__imageList__image'), function() {
					var $grid = new Masonry('.gallery__imageList', {
						itemSelector: '.gallery__imageList__image',
						percentPosition: true,
						columnWidth: 0
					});
				});
			});
		},

		/**
		*	Master-ренденринг.
		**/
		render: function() {
			this.$el.trigger(Common.EVENT_BEFORE_RENDER);
			this.$el.append(Filters);
			this.renderImageList(Images);
			this.$el.trigger(Common.EVENT_AFTER_RENDER);
		},

		/**
		*	Рендеринг списка изображений
		**/
		renderImageList: function(Images) {
			var imageListView = new ImageListView({
				model: Images,
			});
			// $el передаем в render, нужен для отслежки событий в основном контейнере
			this.$el.append(imageListView.render().el);
		},

	});

	return App;
});
