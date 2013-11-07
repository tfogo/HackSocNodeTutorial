var express = require('express')
, http = require('http')
, app = express()
, socket = require('socket.io')
, mongoose = require('mongoose')
, models = require('./models')
, Message = mongoose.model('Message')
, users = []
, sanitize = require('validator').sanitize
, routes = require('./routes');

var uristring =  
process.env.MONGOLAB_URI || 
'mongodb://localhost/node9000';

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(app.router);
app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);

server = http.createServer(app);
server.listen(process.env.PORT || 8000);
console.log('Express server started on port %s', server.address().port);

mongoose.connect(uristring);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("Mongoose started!");
});

io = socket.listen(server);

io.sockets.on('connection', function(client) {
    console.log('Client connected...');

    client.on('join', function(name){
	client.set('nickname', name);
	name = sanitize(name).escape();
	users.push(name);
	io.sockets.emit('new message', name + " joined the chat");
	client.broadcast.emit('new user', name);
	Message.find(function(err, messages){
	    if (err) {
		console.log("Error!");
	    } else {
		client.emit('previous messages', messages);
		client.emit('active users', users)
	    }
	});
    });
    
    client.on('messages', function(data){
	client.get('nickname', function(err, name){
	    name = sanitize(name).escape();
	    data = sanitize(data).escape();
	    var m1 = new Message({name: name, message: data});
	    m1.save(function (err) {
		if (err) console.log('save error');
	    });
	    io.sockets.emit('new message', name + ": " + data);
	});
    });

    client.on('disconnect', function(name){
	client.get('nickname', function(err, name){
	    name = sanitize(name).escape();
	    io.sockets.emit('remove user', name);
	    for(var i = 0; i < users.length; i++) {
		if(users[i] === name) {
		    users.splice(i, 1);
		}
	    }
	});
    });
});
