var express = require('express');

var app = express.createServer();

app.get('/node/foo', function (req, res) {
    res.send('Foo, foo & foo! [express sample]');
});

app.get('/node/bar', function (req, res) {
    res.send('Bar, bar &  bar! [express sample]');
});

app.listen(process.env.PORT);