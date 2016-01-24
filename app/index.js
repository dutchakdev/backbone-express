var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(require("app/routes/site"));
app.use("/api/v1", require("app/routes/images"));
app.use("/api/v1", require("app/routes/categories"));

// Список картинок
// Список категорий
// Поставить лайк и вернуть текущее количество



// app.use(require("app/errors/notFound"));

module.exports = app;
