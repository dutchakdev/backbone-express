/*global define */
define([], function () {
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

		/** --- Gallery --- **/
		GALLERY_SELECTOR: '#gallery',
		GALLERY_IMAGE_LIST: '.gallery__imageList__image',

		EVENT_BEFORE: 'before',
		EVENT_AFTER: 'after'
	};
});
