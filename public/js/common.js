/*global define */
define(['jquery'], function ($) {
	'use strict';
	return {
		ImagesFilter: '',
		PLACEHOLDER: '/placeHolder.png',
		UPLOADS_PATH: '/uploads/',
		ENTER_KEY: 13,
		ESCAPE_KEY: 27,

		API_GET_IMAGES: '/api/v1/images',
		API_POST_LIKE: '/api/v1/likes',
		API_GET_CATEGORIES: '/api/v1/categories',

		EVENT_BEFORE: 'before',
		EVENT_AFTER: 'after',

		$loader: $('#content__loader')
	};
});
