global.__base = __dirname;
const express = require('express');
var compression = require('compression');
const app = express();
const path = require('path');

app.use(compression());
app.use(express.static(path.join(__dirname, 'build')));

global.config = require('./config/config');

var routes = require('./routes/');

app.use('/', routes);

app.listen(3000);