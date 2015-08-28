var http = require('http');

var myServer="ServerB"
var myCounter=0;
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(myServer + ': Hello World' + myCounter + '\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
