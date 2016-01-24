var config = module.exports;
var PRODUCTION = process.env.NODE_ENV === "production";

config.express = {
	port: process.env.EXPRESS_PORT || 3000,
	ip: "127.0.0.1"
};

config.mysql = {
	"development": {
		"username": "root",
		"password": "test",
		"database": "macpawgram",
		"host": "127.0.0.1"
	}
}
