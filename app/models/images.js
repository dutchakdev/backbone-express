module.exports = function(sequelize, DataTypes) {
	'use strict';
	var Images = sequelize.define('Images', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		file: DataTypes.STRING,
		category: DataTypes.INTEGER,
		tags: DataTypes.STRING,
		rating: DataTypes.INTEGER
	}, {
		classMethods: {

			allowFilters: {
				'tags': 'stringToSearchQuery',
				'category': 'categoryQuery'
			},

			associate: function(models) {
				Images.belongsTo(models.Categories, {
					foreignKey: 'category'
				});
			},

			like: function (query, callback) {
				if (query.id) {
					Images.findById(query.id).then(function(image){
						image.increment('rating').then(function(data) {
							callback(null, {
								count: data.rating + 1
							});
						});
					});
				}else{
					callback('id not set in "query"');
				}
			},

			stringToSearchQuery: function (string) {
				var words = string.match(/[\w\u0430-\u044f0-9]+/gi);
				if (words) {
					var likeWords = words.map(function(item){
						return {$like: '%' + item + '%'};
					});
					return {
						$or: likeWords
					};
				} else {
					return {};
				}
			},

			categoryQuery: function (str) {
				if (str) {
					return parseInt(str);
				}else{
					return;
				}
			},

			aggregateFilters: function (filters) {
				var query = {};
				Object.keys(Images.allowFilters).forEach(function(_key) {
					if (filters.hasOwnProperty(_key)){
						query[_key] = Images[Images.allowFilters[_key]](filters[_key]);
					}
				});
				return query;
			},

			getFilterQuery: function (filters) {
				var query = {};
				if (filters) {
					return {
						where: Images.aggregateFilters(filters),
					};
				} else{
					return query;
				}
			},

			findAllWithFilters: function (data, callback) {
				Images.findAll(Images.getFilterQuery(data)).then(function(images) {
					callback(null, images);
				});
			}
		},
		tableName: 'images',
		timestamps: false
	});

	return Images;
};
