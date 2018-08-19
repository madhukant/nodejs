var msg='hello world';
console.log(msg);
var http = require('http');

http.createServer(function (req, res) {
    console.log('------------------------------------------------------------------');
    console.log(req);
    console.log('------------------------------------------------------------------');
    console.log(res);
    console.log('------------------------------------------------------------------');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);