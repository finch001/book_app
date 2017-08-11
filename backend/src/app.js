var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var api = require('./routes/api');
var app = express();


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

mongoose.connect('mongodb://wukong:zy1992928@ds113713.mlab.com:13713/book_demo');

app.use(express.static(path.join(__dirname, 'build')));

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/build/index.html'));
});

module.exports = app;
