var express = require('express')
, http = require('http')
, app = express()
, routes = require('./routes');

app.use(app.router);
app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);

server = http.createServer(app);
server.listen(8000);
console.log('Express server started on port %s', server.address().port);
