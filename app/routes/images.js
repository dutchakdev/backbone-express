var models  = require('../models');
var express = require('express');
var router = new express.Router();

router.get('/images', function (req, res) {
	models.Images.findAllWithFilters(req.query, function (err, images){
		res.json(images);
	});
});

module.exports = router;
