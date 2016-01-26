var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var db        = {};
var config	  = require(__base + 'config');

if (config.mysql) {
	var sequelize = new Sequelize(
		config.mysql.database,
		config.mysql.user,
		config.mysql.password,
		config.mysql
	);

	fs
		.readdirSync(__dirname)
		.filter(function(file) {
			return (file.indexOf('.') !== 0) && (file !== 'index.js');
		})
		.forEach(function(file) {
			var model = sequelize.import(path.join(__dirname, file));
			db[model.name] = model;
		});

		Object.keys(db).forEach(function(modelName) {
			if ('associate' in db[modelName]) {
				db[modelName].associate(db);
			}
		});

} else{
	console.log('not loaded', config);
	var sequelize = null;
}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
