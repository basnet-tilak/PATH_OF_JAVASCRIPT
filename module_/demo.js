
const http = require('http');
const dt = require('./my_module');

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write("Current Date and Time is: " + dt.myDateTime());
    console.log("Current Date and Time:" + dt.myDateTime());
    res.end();
}).listen(8080);