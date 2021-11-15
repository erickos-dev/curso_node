var express = require('express');
var consign = require('consign');
var app = express();
var bodyParser = require('body-parser');
var validator = require('express-validator');

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.listen(3000, function() {
    console.log("Servidor Online");
});
app.use(express.static('./app/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(validator());

consign().include('app/router')
.then('config/dbConnection.js')
.then('app/models')
.then('app/controllers')
.into(app);

module.exports = app;