var fs = require('fs');
var path = require('path');
var config = module.exports;

config.express = {
	port: process.env.PORT || 3000,
	ip: '127.0.0.1'
};

var env = process.env.NODE_ENV || 'prod';

if ((ref = process.env) !== null) {
	config.mysql = {
		'driver': 'mysql',
		'user': ref.DB_USER,
		'password': ref.DB_PASSWORD,
		'database': ref.DB_NAME,
		'host': ref.DB_HOST,
		'logging': false
	};
} else {
	config.mysql = JSON.parse(fs.readFileSync(path.join(__dirname, 'database.json'), {encoding:'utf8'}))[env];
}
