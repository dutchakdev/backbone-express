#!/usr/bin/env node
var app = require("./index");
var config = require("app/config");
console.info("server process starting");
app.listen(config.express.port, config.express.ip, function (error) {
	if (error) {
		console.error("Unable to listen for connections", error);
		process.exit(10);
	}
	log.info("express is listening on http://" +
		config.express.ip + ":" + config.express.port);
});
