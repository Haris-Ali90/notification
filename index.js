var app = require('express')();
var http = require('http').Server(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const io = require('socket.io')(http, {
    cors: {
        origin: '*',
    },
});

io.on('connection', function (socket) {
    socket.on( 'new_notification', function( data ) {
        io.sockets.emit( 'show_notification', {
            hubId: data.hubId,
            title: data.title,
            message: data.message,
        });
    });
});

http.listen(3000, function() {
    console.log('listening on localhost:3000');
});