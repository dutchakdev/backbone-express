define([
	'underscore',
	'backbone',
	'common'
], function(_, Backbone, Common) {
	'use strict';

	var ImageInfo = Backbone.Model.extend({
		defaults: {
			objectType: 'image',
			rating: 0
		},

		like: function (callback) {
			var self = this;
			Backbone.sync('create', self, {
				url: Common.API_POST_LIKE,
				success: function (data) {
					self.set('rating', data.count);
					callback(null);
				}
			});
		}
	});

	return ImageInfo;

});
