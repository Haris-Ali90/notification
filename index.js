var app = require('express')();
var http = require('http').Server(app);

app.set('port', (process.env.PORT || 3000));

app.get('/', function(request, response) {
    res.sendFile(__dirname + '/index.html');
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });


// const io = require('socket.io')(http, {
//     cors: {
//         origin: '*',
//     },
// });
//
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
// http.listen(app.get('port'), function() {
//     console.log('listening on localhost:3000');
// });