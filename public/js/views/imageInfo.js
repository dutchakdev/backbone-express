define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/imageInfo.html'
], function($, _, Backbone, InfoTemplate) {
	'use strict';

	return Backbone.View.extend({
		tagName: 'div',
		className: 'content__gallery__imageList__image__info',
		template: _.template(InfoTemplate),
		events: {
			'click': 'like'
		},

		initialize: function () {
			// Определяем зависимость изменений в модели
			this.listenTo(this.model, 'change sync', this.render);
		},

		/**
		 * Вызов метода like из модели + анимация
		 *
		 * @param event
		 * @returns {void}
		 */
		like: function(){
			self = this;
			self.$el.trigger('like');
			self.model.like(function(){
				//
			});
		},

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

});
