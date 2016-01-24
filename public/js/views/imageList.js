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
		tagName: "div",
		className: "gallery__imageList",
		template: _.template(ImagesTemplate),

		events: {
			'click .gallery__imageList__image': 'like'
		},

		render: function () {
			this.$el.html('')
			this.$el.addClass('grid');
			this.$el.append('<div class="grid-sizer"></div>');
			_.each(this.model.models, function (item) {
				this.renderImages(item);
			}, this);

			return this;
		},

		renderImages: function(item) {
			var imageView = new ImageView({
				model: item
			});
			this.$el.append(imageView.render().el);
		},

		like: function(event){
			this.animateLike(event);
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

});
