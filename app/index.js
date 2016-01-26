var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(require("app/routes/site"));
app.use('/api/v1', require('app/routes/images'));
app.use('/api/v1', require('app/routes/likes'));
app.use('/api/v1', require('app/routes/categories'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');
app.use(require("app/routes/notFound"));
// Catch errors
app.use(function(error, req, res) {
	res
		.status(error.status || 500)
		.render('error', {
			message: error.message,
			error: (process.env.NODE_ENV || 'prod') === 'dev' ? error : {}
		});
});
module.exports = app;
