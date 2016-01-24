define([
	'underscore',
	'backbone',
	'common'
], function(_, Backbone, Common) {
	'use strict';

	var Images = Backbone.Model.extend({
		initialize: function (){
			this.imageUrl()
		},
		defaults: {
			file: Common.PLACEHOLDER,
			tags: '',
			category: null,
			rating: 0,
			rating: 0,
			imageUrl: null
		},
		imageUrl: function() {
			this.set('imageUrl', Common.UPLOADS_PATH + this.get('file'));
		},
		like: function(data) {
			console.log(this.save);
		}
	});

	return Images;

});
