var http = require('http'); // import the built-in http module

var callback = function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Let's play!\n");
    
    setTimeout(function(){ // This represents a really long process with a callback
	response.write("Let's stop!");
	response.end();
    }, 10000); // 10000ms = 5 seconds
}

http.createServer(callback).listen(8000);

console.log('Server listening on port 8000');

