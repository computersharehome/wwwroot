var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express.createServer();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('E:\inetpub\wwwroot\public'));

app.get('/node/', function (req, res) {
    res.send(path.join(__dirname, 'views'));
});

app.get('/node/foo', function (req, res) {
    res.render('index', { title: 'Express' });
});

app.get('/node/bar', function (req, res) {
    res.send('Hello from bar! [express sample]');
});

app.listen(process.env.PORT);

//module.exports = app;
