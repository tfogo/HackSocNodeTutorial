var http = require('http'); // import the built-in http module

var callback = function(request, response) {

    var n = 2;
    
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("I have " + n + " cookies!");
    
    setTimeout(function(){ // This represents a really long process with a callback
	n++;
    }, 10000); // 10000ms = 5 seconds
    
    response.write("I have " + n + " cookies!"); // If you want n to be changed, you have to put this inside the callback!
    response.end();
}

http.createServer(callback).listen(8000);

console.log('Server listening on port 8000');

