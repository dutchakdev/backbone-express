var models  = require('../models');
var express = require('express');
var router = new express.Router();

router.get('/categories', function (req, res) {
	models.Categories.findAll()
	.then(function(categories){
		res.json(categories);
	});
});

module.exports = router;
