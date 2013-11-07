var express = require('express')
, http = require('http')
, app = express()
, socket = require('socket.io')
, routes = require('./routes');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(app.router);
app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);

server = http.createServer(app);
server.listen(8000);
console.log('Express server started on port %s', server.address().port);
