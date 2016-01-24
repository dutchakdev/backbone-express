define([
	'jquery',
	'underscore',
	'backbone',
	'masonry',
	'imagesloaded',
	'views/image',
	'collections/images',
	'collections/categories'
], function($, _, Backbone, Masonry, imagesLoaded, ImageView, Images, Categories) {
	'use strict';

	var App = Backbone.View.extend({
		el: "#gallery",
		events: {
			'click .image': 'animateLike'
		},
		initialize: function() {


			imagesLoaded($('.grid'), function() {
				var $grid = new Masonry('.grid', {
					itemSelector: '.grid-item',
					percentPosition: true,
					columnWidth: 0
				});
			});
		},
		render: function() {

		},

		renderImages: function(item) {
			var imageView = new ImageView({
				model: item
			});
			this.$el.append(imageView.render().el);
		},

		animateLike: function (event) {
			var $target = $(event.currentTarget);
			var rand = Math.floor((Math.random()*100)+1);
			var flows = ["flowOne", "flowTwo", "flowThree"];
			var colors = ["yellow", "orange", "red", "green", "blue", "purple"];
			var timing = (Math.random()*(1.3-1.0)+1.0).toFixed(1);
			var heartIcon = '<span class="glyphicon glyphicon-heart"></span>';
			var likeWrapper = [
				'<div ',
				'class="likebox part-'+rand+' '+colors[Math.floor((Math.random()*6))]+'" ',
				'style="font-size:'+Math.floor(Math.random()*(30-22)+22)+'px;"',
				'>',
				heartIcon,
				'</div>'
			]
			$(likeWrapper.join(''))
				.appendTo($target)
				.css({
					animation: ""+flows[Math.floor((Math.random()*3))]+" "+timing+"s linear"
				});

			$('.part-'+rand, $target).show();
			setTimeout(function(){
				$('.part-'+rand, $target).remove();
			}, timing*1000-100);
		}
	});

	return App;
});
