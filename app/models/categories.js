module.exports = function(sequelize, DataTypes) {
	'use strict';
	var Categories = sequelize.define('Categories', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		'category_name': DataTypes.STRING
	}, {
		classMethods: {
			associate: function(models) {
				Categories.hasMany(models.Images, {foreignKey: 'category'});
			}
		},
		tableName: 'categories',
		timestamps: false
	});

	return Categories;
};
