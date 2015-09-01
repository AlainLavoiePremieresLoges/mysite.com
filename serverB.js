var myServer="ServerB"
var myCounter=0;
var serverPort = 3001;
var serverAddress = '192.168.1.142';

var FileStreamRotator = require('file-stream-rotator')
var express = require('express');
var app = express();
var morgan = require('morgan');
var fs = require('fs');
var logDirectory = __dirname + '/logs';

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// create a rotating write stream
var accessLogStream = FileStreamRotator.getStream({
  filename: logDirectory + '/access-%DATE%.log',
  frequency: 'daily',
  verbose: false
})

// setup the logger
app.use(morgan('combined', {stream: accessLogStream}));

app.get('/', function (req, res) {
  res.send('Express site, counter=' + myCounter++);
});

var server = app.listen(serverPort, function () {
  var host = server.address().address;
  var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

