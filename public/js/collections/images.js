define([
	'jquery',
	'underscore',
	'backbone',
	'models/image',
	'common'
], function($, _, Backbone, Images, Common) {
	'use strict';

	var ImagesCollection = Backbone.Collection.extend({
		model: Images,
		url: Common.API_GET_IMAGES,

		/**
		 * Переопределим fetch и повесим событие для индикатора загрузки
		 *
		 * @param
		 * @returns
		 */
		fetch: function (options) {
			this.trigger('fetch', this, options);
			return Backbone.Collection.prototype.fetch.call(this, options);
		}
	});

	return new ImagesCollection();
});
