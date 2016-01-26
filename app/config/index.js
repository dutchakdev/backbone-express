var fs = require('fs');
var path = require('path');
var config = module.exports;

config.express = {
	port: process.env.EXPRESS_PORT || 3000,
	ip: '127.0.0.1'
};

var env = process.env.NODE_ENV || 'prod';

if (env === 'prod') {
	config.mysql = {
		'driver': 'mysql',
		'user': process.env.DB_USER || '',
		'password': process.env.DB_PASSWORD || '',
		'database': process.env.DB_DATABASE || '',
		'host': process.env.DB_HOST || '',
		'logging': false
	};
} else {
	config.mysql = JSON.parse(fs.readFileSync(path.join(__dirname, 'database.json'), {encoding:'utf8'}))[env];
}
