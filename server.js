// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
const history = require('connect-history-api-fallback')

app = express();

app.use(serveStatic(__dirname + "/dist"));
app.use(history());

var port = process.env.PORT || 5000;

app.get('/', function (req, res) {
    res.render(path.join(__dirname + '/index.html'))
});

app.listen(port, function () {
    console.log( 'Express serving on ' + port)
});