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
var moment = require('moment');

var timeFormatFn = function() {
    'use strict';
    return moment().format('HH.mm.ss:SSSS');
};

var logger = new (winston.Logger)({
    exitOnError: false,
    transports: [
      new (winston.transports.Console)(),
      new( winston.transports.DailyRotateFile)({
	  maxsize: 200000,  // bytes
          filename: 'server-logger',
          dirname: '/srv/www/mysite.com/logs',
          datePattern: '.yyyy-MM-dd',
          timestamp: timeFormatFn
      })
      //    new (winston.transports.File)({ dirname: '/srv/www/mysite.com/logs' })
  ]
});

logger.log('info', 'First');

app.get('/', function (req, res) {
  logger.log('info', 'Express counter=' + myCounter );
  res.send('Express site, counter=' + myCounter++);
});

var server = app.listen(serverPort, function () {
    var host = server.address().address;
    var port = server.address().port;

    logger.log('debug', 'Example app listening at http://%s:%s', host, port);
});

