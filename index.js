var app = require('express')();
var http = require('http').Server(app);

app.set('port', (process.env.PORT || 3000));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

const io = require("socket.io")(http, {
    cors: {
        origin:'*',
        withCredentials: true,
        methods: ["GET", "POST"],
        transports: ["websocket", "polling"],
    },
    allowEIO3: true,
});

// io.on('connection', function (socket) {
//     socket.on( 'new_notification', function( data ) {
//         io.sockets.emit( 'show_notification', {
//             hubId: data.hubId,
//             title: data.title,
//             message: data.message,
//         });
//     });
// });
//

http.listen(app.get('port'), function() {
    console.log('listening on localhost:3000');
});