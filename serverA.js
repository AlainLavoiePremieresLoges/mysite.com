var http = require('http');

var myServer="ServerA"
var myCounter=0;
var serverPort = 1337;

process.argv.forEach(function (val, index, array) {
    //console.log(index + ': ' + val);
    switch( index ){
       case 2:
   	 myServer=val;
	 break;
       case 3:
   	 serverPort=val;
	 break;
    }
});

var singleFunction = function (req, res) {
    if ( req.url === '/favicon.ico' ){
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        res.end();
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(myServer + ': Hello World ' + myCounter + '\n');
        myCounter = myCounter +1 ;
    }
};
http.createServer(singleFunction).listen(serverPort, '127.0.0.1');
console.log('Server running at http://127.0.0.1:' + serverPort + '/');
