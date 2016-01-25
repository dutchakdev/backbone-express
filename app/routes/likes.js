var express = require("express");
var router = new express.Router();

router.post("/likes", function (req, res, next) {
	res.json({
		count: 1
	});
});

module.exports = router;
