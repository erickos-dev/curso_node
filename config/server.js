var express = require('express');
var consign = require('consign');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.listen(3000, function() {
    console.log("Servidor Online");
});
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

consign().include('app/router')
.then('config/dbConnection.js')
.then('app/models')
.into(app);

module.exports = app;