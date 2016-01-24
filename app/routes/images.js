var express = require("express");
var join = require("path").join;
var router = new express.Router();

router.get("/images", function (req, res) {
	var images = [
		{id: 1, file: 'stock-photo-130918089.jpg', category: 1, tags: 'tree,water', likes: 1230},
		{id: 2, file: 'stock-photo-130918371.jpg', category: 2, tags: 'girl,brunette,stockings', likes: 10},
		{id: 3, file: 'stock-photo-130918381.jpg', category: 3, tags: 'blocks,building,venice', likes: 20},
		{id: 4, file: 'stock-photo-130919435.jpg', category: 1, tags: 'mountain,city,village', likes: 30},
		{id: 5, file: 'stock-photo-130921279.jpg', category: 4, tags: 'chipmunk,hamster,food,tree', likes: 20},
		{id: 6, file: 'stock-photo-130921571.jpg', category: 1, tags: 'house,lonely', likes: 10},
		{id: 7, file: 'stock-photo-130922417.jpg', category: 1, tags: 'birds,small,flying', likes: 20},
		{id: 8, file: 'stock-photo-130923193.jpg', category: 3, tags: 'man,two,roof', likes: 10},
		{id: 9, file: 'stock-photo-130924199.jpg', category: 1, tags: 'photo,city,sky', likes: 20},
		{id: 10, file: 'stock-photo-130926321.jpg', category: 4, tags: 'bird,drink,water', likes: 10},
		{id: 11, file: 'stock-photo-130929587.jpg', category: 2, tags: 'girl,dress,white', likes: 220},
		{id: 12, file: 'stock-photo-130936471.jpg', category: 3, tags: 'blocks,night', likes: 10},
		{id: 13, file: 'stock-photo-130938489.jpg', category: 2, tags: 'girl,brunette,tunnel', likes: 10},
		{id: 14, file: 'stock-photo-130944917.jpg', category: 3, tags: 'abstract', likes: 20},
		{id: 15, file: 'stock-photo-130947177.jpg', category: 1, tags: 'house,lake,tree,red', likes: 20},
		{id: 16, file: 'stock-photo-130949961.jpg', category: 1, tags: 'freeze,snow,ice', likes: 10},
		{id: 17, file: 'stock-photo-130949977.jpg', category: 2, tags: 'dreaming,sleeping,book', likes: 10},
		{id: 18, file: 'stock-photo-130953589.jpg', category: 1, tags: 'thunder,lighnting', likes: 220},
		{id: 19, file: 'stock-photo-130960983.jpg', category: 4, tags: 'fox,snow,yellow', likes: 110},
		{id: 20, file: 'stock-photo-130963067.jpg', category: 2, tags: 'blacknwhite,gray,face,girl,cute', likes: 1120},
		{id: 21, file: 'stock-photo-130974685.jpg', category: 1, tags: 'tunnel,leaf,fall', likes: 210},
	];

	res.json(images);
});

module.exports = router;
