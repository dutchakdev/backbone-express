var express = require("express");
var join = require("path").join;
var router = new express.Router();

router.get("/images", function (req, res) {
	// find all and sort
	res.json({
		"success": "ok"
	});
});

module.exports = router;
