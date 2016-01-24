define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/images.html',
	'collections/images',
], function($, _, Backbone, ImagesTemplate, Images) {
	'use strict';

	var ImageView = Backbone.View.extend({
		tagName: "div",
		className: "image",
		template: _.template(ImagesTemplate),

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

});
