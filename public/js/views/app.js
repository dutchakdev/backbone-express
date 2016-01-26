define([
	'jquery',
	'underscore',
	'backbone',
	'async',
	'masonry',
	'imagesloaded',
	'views/imageList',
	'views/image',
	'views/filter',
	'collections/images',
	'collections/categories',
	'common',
], function($, _, Backbone, async, Masonry, imagesLoaded, ImageListView, ImageView, FilterView, Images, Categories, Common) {
	'use strict';

	var App = Backbone.View.extend({
		el: '#content__gallery',

		initialize: function() {
			self = this;
			Common.$loader.show();
			self.$el.trigger(Common.EVENT_BEFORE);
			self.render(function(){
				Common.$loader.hide();
				self.$el.trigger(Common.EVENT_AFTER);
			});
		},

		/**
		 * Master-ренденринг.
		 *
		 * @param
		 * @returns
		 */
		render: function(callback) {
			var self = this;
			self.$el.html('');
			async.waterfall([
				function(cb) {
					self.renderFilters(Categories, cb);
				},
				function(cb) {
					self.renderImageList(Images, cb);
				},
				self.applyGrid
			],callback);
		},

		/**
		 * Подключаем плагин для плитки
		 *
		 * @param event
		 * @param cb - Коллбек
		 * @returns {void}
		 */
		applyGrid: function (cb) {
			imagesLoaded($('.content__gallery__imageList__image'), function() {
				var $grid = new Masonry('.content__gallery__imageList', {
					itemSelector: '.content__gallery__imageList__image',
					percentPosition: true,
					columnWidth: '.content__gallery__imageList__image'
				});
				cb(null, $grid);
			});
		},

		/**
		 * Рендеринг списка изображений
		 *
		 * @param
		 * @returns
		 */
		renderImageList: function(Images, callback) {
			var imageListView = new ImageListView({
				model: Images,
			});
			this.$el.append(imageListView.render().el);
			imageListView.$el.on('rendered', function(){
				callback(null);
			});
		},

		/**
		 * Рендеринг фильтров
		 *
		 * @param
		 * @returns
		 */
		renderFilters: function(Categories, callback) {
			var self = this;
			Categories.fetch();
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
