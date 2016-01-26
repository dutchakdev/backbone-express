define([
	'jquery',
	'underscore',
	'backbone',
	'bootstrap-select',
	'text!templates/filters/filters.html',
	'text!templates/filters/categoryOptionFilter.html',
	'common',
	'collections/categories',
	'collections/images',
	'routers/router'
], function($, _, Backbone, selectpicker, FiltersTemplate, CategoryOptionFilter, Common, Categories, Images, Router) {
	'use strict';

	return Backbone.View.extend({
		tagName: 'div',
		className: 'content__gallery__filters',
		template: _.template(FiltersTemplate),

		/**
		 * Разрешенные фильтры
		 */
		allowFilters: ['category', 'tags'],

		/**
		 * Здесь будем хранить текущие значение фальтров
		 */
		_filters: {},

		/**
		 * Зависимости для фильтров, срабатывают при setFilters
		 */
		_filterDeps: {
			'category': function (val) {
				$('#content__gallery').on(Common.EVENT_AFTER, function(){
					var $categorySelectSelector = $('.content__gallery__filters__filter-category-select', this.$el);
					$categorySelectSelector.val(val);
					$categorySelectSelector.selectpicker('render');
				});
			},
			'tags': function (val) {
				$('#content__gallery').on(Common.EVENT_AFTER, function(){
					$('input.content__gallery__filters__filter-tags-input').val(val);
				});
			}
		},

		/**
		 * Задержка перед запросом, если к примеру реагировать на keyup
		 */
		delay: 200,

		/**
		 * Здесь будем хранить айди из setTimeout, для очистки его
		 * при повторном вызове
		 */
		_tomeoutId: null,

		events: {
			'change .content__gallery__filters__filter-tags-input': 'setFilterByTag',
			'rendered': 'initPlugins',
			'changed.bs.select': 'setFilterByCategory'
		},

		/**
		 * Инициализация вьюхи, обьявляем зависимости
		 *
		 * @param
		 * @returns
		 */
		initialize: function () {
			var self = this;
			self.$el.on('rendered', function(){
				self.router = new Router();
				Backbone.history.start();
				self.on('change:filter', self.filter, self);
				self.setFilter(self.router.filterObject);
			});
		},

		/**
		 * Сеттер для фильтра. Может принимать как (ключ, значение) так и
		 * обьект {ключи:значения}
		 *
		 * @param {mixed} key
		 * @param {string} val
		 * @returns this
		 */
		setFilter: function (key, val) {
			self = this;
			if (key === null) return this;
			var attrs;
			if (typeof key === 'object') {
				attrs = key;
			} else {
				(attrs = {})[key] = val;
			}

			Object.keys(attrs).forEach(function(_key) {
				// Разрешаем сетать только обьявленые фильтры
				if (self.allowFilters.indexOf(_key) >= 0){
					if (attrs[_key]) {
						if (self._filterDeps[_key]) {
							self._filterDeps[_key](attrs[_key]);
						}
						self._filters[_key] = attrs[_key];
					} else {
						delete self._filters[_key];
					}
				}
			});
			// self.router.navigate("filter/all") изменить урл
			this.trigger('change:filter');
			return this;
		},

		getFilters: function () {
			return this._filters;
		},

		setFilterByTag: function (event) {
			this.setFilter('tags', $(event.target).val());
		},

		setFilterByCategory: function (event) {
			this.setFilter('category', $(':selected',event.target).val());
		},

		/**
		 * Фильтрация на сервере.
		 *
		 * @returns {void}
		 */
		filter: function () {
			var self = this;
			self._tomeoutId = clearTimeout(self._tomeoutId);
			self._tomeoutId = setTimeout(function(){
				Images.fetch({
					data: self.getFilters(),
					success: function () {
						self.router.navigate(self.router.stringifyFilters(self.getFilters()));
					}
				});
			}, self.delay);
		},

		/**
		 * Master-рендер
		 *
		 * @returns this
		 */
		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			this.$el.trigger('rendered');
			return this;
		},

		/**
		 * Вызываеться после render
		 *
		 * @returns {void}
		 */
		initPlugins: function () {
			this.renderCategoryFilter();
		},

		/**
		 * Рендеринг елементов фильтра ктагорий
		 *
		 * @returns this
		 */
		renderCategoryFilter: function () {
			var $categorySelectSelector = $('.content__gallery__filters__filter-category-select', this.$el);
			var optionTemplate = _.template(CategoryOptionFilter);
			_.each(Categories.models, function(category){
				$categorySelectSelector.append(optionTemplate(category.toJSON()));
			});
			$categorySelectSelector.selectpicker({
				style: 'btn-default',
				size: 4
			});
			return this;
		},

	});

});
