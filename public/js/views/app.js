define([
	'jquery',
	'underscore',
	'backbone',
	'async',
	'masonry',
	'imagesloaded',
	'views/imageList',
	'views/filter',
	'collections/images',
	'collections/categories',
	'common',
], function($, _, Backbone, async, Masonry, imagesLoaded, ImageListView, FilterView, Images, Categories, Common) {
	'use strict';

	var App = Backbone.View.extend({
		el: Common.GALLERY_SELECTOR,

		initialize: function() {
			// Делаем запрос к api, получаем список картинок
			this.initGrid();
			this.render();
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
			self = this;
			self.$el.trigger(Common.EVENT_BEFORE_RENDER);
			async.waterfall([
				function(cb) {
					self.renderFilters(Categories, cb);
				},
				function(cb) {
					self.renderImageList(Images, cb);
				},
			], function(err){
				// end async
				self.$el.trigger(Common.EVENT_AFTER_RENDER);
			});
		},

		/**
		*	Рендеринг списка изображений
		**/
		renderImageList: function(Images, callback) {
			var self = this;
			Images.fetch();
			Images.on('sync', function () {
				var imageListView = new ImageListView({
					model: Images,
				});
				self.$el.append(imageListView.render().el);
				callback(null);
			});
		},

		renderFilters: function(Categories, callback) {
			var self = this;
			Categories.fetch()
			Categories.on('sync', function () {
				var filterView = new FilterView({
					model: Categories
				});
				self.$el.append(filterView.render().el);
				callback(null);
			});
		}

	});

	return App;
});
