var app = require('http');

app.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('Hello World')
}).listen(8000);