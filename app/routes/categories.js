var express = require("express");
var join = require("path").join;
var router = new express.Router();

router.get("/categories", function (req, res) {
	var categories = [
		{id: 1, category_name: 'Nature'},
		{id: 2, category_name: 'Girls'},
		{id: 3, category_name: 'Architecture'},
		{id: 4, category_name: 'Animals'},
	];

	res.json(categories);
});

module.exports = router;
