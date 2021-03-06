var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var api = require('./routes/api');
var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.session({ secret: 'finch.blog', cookie: { maxAge: 80000 } }));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/build/index.html'));
});

module.exports = app;
