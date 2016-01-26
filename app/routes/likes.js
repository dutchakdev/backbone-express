var models  = require('../models');
var express = require("express");
var router = new express.Router();

router.post('/likes', function (req, res, next) {
	models.Images.like(req.body, function (err, like){
		res.json(like);
	});
});

module.exports = router;
