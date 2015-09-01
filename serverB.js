var myServer="ServerB"
var myCounter=0;
var serverPort = 5001;
var serverAddress = '192.168.1.142';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Express site, counter=' + myCounter++);
});

var server = app.listen(serverPort, function () {
  var host = server.address().address;
  var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

