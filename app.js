var http = require('http'); // import the built-in http module

var callback = function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Let's play!\n");
    setTimeout(function(){ // This represents a really long process
	response.write("Let's stop!");
	response.end();
    }, 10000); // 10000ms = 5 seconds
}

// Using callbacks makes this non-blocking. Compare with this:

// Define sleep to mimic really long process without callback.

// function sleep(milliseconds) {
//   var start = new Date().getTime();
//   for (var i = 0; i < 1e7; i++) {
//     if ((new Date().getTime() - start) > milliseconds){
//       break;
//     }
//   }
// }

// With this, a second or third connection has to wait for the fisrt to be done
// var callback = function(request, response) {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.write("Let's play!\n");
//     sleep(10000); // Really long process
//     response.write("Let's stop!");
//     response.end();
// }


http.createServer(callback).listen(8000);

console.log('Server listening on port 8000');

