var myServer="ServerB"
var myCounter=0;
var serverPort = 3001;
var serverAddress = '192.168.1.142';

var express = require('express');
var app = express();
var morgan = require('morgan');
var fs = require('fs');
var logDirectory = __dirname + '/logs';
var winston = require('winston');

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ dirname: '/srv/www/mysite.com/logs' })
  ]
});

logger.log('info', 'First');

app.get('/', function (req, res) {
  res.send('Express site, counter=' + myCounter++);
});

var server = app.listen(serverPort, function () {
    var host = server.address().address;
    var port = server.address().port;

    logger.log('debug', 'Example app listening at http://%s:%s', host, port);
});

