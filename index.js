// *************************************
// author: Sergio Guerrero
// hello world node app
// 
// *************************************

// to run, open the cmd line and type
// node index.js
var http = require("http");

http.createServer(function (request, response) {   
   // response headers
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // and response message
   response.end('Hello World');
}).listen(8081);

// log on the console
console.log('Server running at http://127.0.0.1:8081/');