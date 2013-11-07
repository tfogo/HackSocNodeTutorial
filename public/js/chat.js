var socket = io.connect(window.location.hostname);

socket.on('connect', function(data){
    nickname = prompt("What is your name?");
    socket.emit('join', nickname);
});

$('#chat-form').submit(function(e){
    e.preventDefault();
    var message = $('#chat-input').val();
    socket.emit('messages', message);
    $('#chat-input').val('');
});


socket.on('new message', function(data){
    $('#messages-pane').append('<p>' + data + '</p>');
    $('#messages-pane')[0].scrollTop = $('#messages-pane')[0].scrollHeight;
});

socket.on('previous messages', function(data){
    for (i = 0; i < data.length; i++){
	$('#messages-pane').append('<p>' + data[i].name + ": " + data[i].message + '</p>');
    }    
    $('#messages-pane')[0].scrollTop = $('#messages-pane')[0].scrollHeight;
});

socket.on('active users', function(data){
    for (i = 0; i < data.length; i++){
	$('#user-pane').append('<p>' + data[i] + '</p>');
    }
});

socket.on('remove user',  function(name) {
    $('#user-pane p:contains(' + name + ')').remove();
});

socket.on('new user', function(name){
    $('#user-pane').append('<p>' + name + '</p>');
});
