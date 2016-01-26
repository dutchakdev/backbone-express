'use strict';

var dbm;
var type;
var seed;

exports.setup = function(options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function(db, callback) {
    db.addColumn('images', 'rating', {type: 'int', defaultValue: 0}, callback);
};

exports.down = function(db, callback) {
    db.removeColumn('images', 'rating', callback);
};
