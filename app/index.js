var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var serveStatic = require('serve-static')
var app = express();
global.__base = __dirname + '/';

app.use(serveStatic(path.join(__dirname, '../public/uploads'), {
	maxAge: '1d',
	setHeaders: function (res, path) {
		if (serveStatic.mime.lookup(path) === 'text/html') {
			res.setHeader('Cache-Control', 'public, max-age=0');
		}
	}
}));

app.use(serveStatic(path.join(__dirname, '../public'), {
	'index': ['index.html']
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1', require(__base + 'routes/images'));
app.use('/api/v1', require(__base + 'routes/likes'));
app.use('/api/v1', require(__base + 'routes/categories'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');
app.use(require(__base + 'routes/notFound'));
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
