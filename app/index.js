var express = require("express");
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "jade");

// app.use(require("app/routes/site"));
// app.use("/api", require("app/routes/api"));

// app.use(require("app/errors/notFound"));

module.exports = app;
