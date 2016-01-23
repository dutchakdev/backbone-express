var config = module.exports;
var PRODUCTION = process.env.NODE_ENV === "production";

config.express = {
	port: process.env.EXPRESS_PORT || 3000,
	ip: "127.0.0.1"
};

config.mysql = {
	port: process.env.MYSQL_PORT || 3306,
	host: process.env.MYSQL_HOST || "localhost"
	user: process.env.MYSQL_USER || "test",
	password: process.env.MYSQL_PASSWORD || "test"
};
