define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {
	'use strict';

	var Router = Backbone.Router.extend({
		routes: {
			'*filter': 'setFilter',
		},

		setFilter: function (param) {
			this.filterObject = this.parseFilters(param);
			this.stringifyFilters(this.filterObject);
		},

		stringifyFilters: function (filterObject) {
			var pathRow = ['filter'];
			Object.keys(filterObject).forEach(function(_key) {
				pathRow.push(_key + ':' + filterObject[_key]);
			});
			return pathRow.join('/');
		},

		parseFilters: function (param) {
			var filterObject = {};
			if (param){
				var pathRow = param.split('/');
				var filterParamsRow = pathRow.filter(function(item){
					return item.match(':');
				});
				_.each(filterParamsRow, function(item){
					var filter = item.split(/:(.*)/);
					if (filter[1]) filterObject[filter[0]] = filter[1];
				});
			}
			return filterObject;
		}
	});

	return Router;
});
