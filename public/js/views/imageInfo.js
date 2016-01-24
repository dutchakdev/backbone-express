define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/imageInfo.html',
], function($, _, Backbone, InfoTemplate) {
	'use strict';

	return Backbone.View.extend({
		tagName: 'div',
		className: 'gallery__imageList__image__info',
		template: _.template(InfoTemplate),
		events: {
			'click': 'like'
		},

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
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
