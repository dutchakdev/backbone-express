define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/imageInfo.html'
], function($, _, Backbone, InfoTemplate) {
	'use strict';

	return Backbone.View.extend({
		tagName: 'div',
		className: 'gallery__imageList__image__info',
		template: _.template(InfoTemplate),
		events: {
			'click': 'like'
		},

		initialize: function () {
			this.listenTo(this.model, 'change sync', this.render);
		},

		/**
		 * Вызов метода like из модели + анимация
		 */
		like: function(event){
			self = this;
			self.model.like(function(){
				$(self.$el).trigger('like');
			});
		},

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

});
