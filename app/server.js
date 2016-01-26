#!/usr/bin/env node
var app = require('./index');
var config = require(__base + 'config');
console.info('server process starting');
app.set('port', (process.env.PORT || 5000));

app.listen(config.express.port, config.express.ip, function (error) {
	if (error) {
		console.error('Unable to listen for connections', error);
		process.exit(10);
	}
	console.info('express is listening on http://' +
		config.express.ip + ':' + config.express.port);
});
