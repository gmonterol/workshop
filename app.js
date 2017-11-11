const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));

app.engine('.html', exphbs({ extname: '.html', defaultLayout: 'main.html' }));
app.set('view engine', '.html');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/public'));
routes(app);

module.exports = app;
