define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/image.html',
	'views/imageInfo',
	'collections/imageInfo',
], function($, _, Backbone, ImageListTemplate, ImageInfoView, Like) {
	'use strict';

	return Backbone.View.extend({
		tagName: 'div',
		className: 'content__gallery__imageList__image',
		template: _.template(ImageListTemplate),
		events: {
			'like': 'animateLike'
		},

		/**
		 * Master-рендеринг
		 *
		 */
		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			this.$el.addClass('col-sm-6 col-md-4');
			this.renderInfo();
			return this;
		},

		/**
		 * Рендеринг
		 */
		renderInfo: function () {
			var model = new Like.model();
			model.set('id', this.model.get('id'));
			model.set('rating', this.model.get('rating'));
			var imageInfoView = new ImageInfoView({
				model: model
			});
			this.$el.append(imageInfoView.render().el);
		},
		
		animateLike: function (event) {
			var $target = $(event.currentTarget);
			var rand = Math.floor((Math.random()*100)+1);
			var streams = ['one', 'two', 'three'];
			var colors = ['yellow', 'orange', 'red', 'green', 'blue', 'purple'];
			var timing = 1.2;
			var heartIcon = '<span class="glyphicon glyphicon-heart"></span>';
			var likeWrapper = [
				'<div ',
				'class="likebox part-'+rand+' '+colors[Math.floor((Math.random()*6))]+'" ',
				'style="font-size:'+Math.floor(Math.random()*(30-22)+22)+'px;"',
				'>',
				heartIcon,
				'</div>'
			];
			$(likeWrapper.join(''))
				.appendTo($target)
				.css({
					animation: ''+streams[Math.floor((Math.random()*3))]+' '+timing+'s linear'
				});

			$('.part-'+rand, $target).show();
			setTimeout(function(){
				$('.part-'+rand, $target).remove();
			}, timing*1000-100);
		}

	});

});
