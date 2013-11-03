var http = require('http'); // import the built-in http module

/* create a server listening on http://localhost:8000. When the request event is emitted,
   execute an anonymous callback function that sends Daisy Bell to the browser. */
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Daisy, Daisy, give me your answer, do,\nI'm half crazy all for the love of you.");
    response.end();
  }
).listen(8000);

console.log('Server listening on port 8000');
