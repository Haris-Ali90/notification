const express = require("express");
const app = express();
const http = require("http").createServer(app);
// const PORT = process.env.PORT || 3000;
app.set('port', (process.env.PORT || 3000));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

const io = require("socket.io")(http, {
    cors: {
        origin:'*',
        withCredentials: true,
        methods: ["GET", "POST"],
        transports: ["websocket", "polling"],
    },
    allowEIO3: true,
});


// const io = require('socket.io')(http, {
//     cors: {
//         origin: [
//             "http://127.0.0.1:8000",
//             "http://localhost:8000/last/mile/routes/list",
//         ],
//         credentials: true,
//         methods: ["GET", "POST"],
//         transports: ["websocket", "polling"],
//     },
//     allowEIO3: true,
// });

io.on('connection', function (socket) {
    socket.on( 'new_notification', function( data ) {
        io.sockets.emit( 'show_notification', {
            hubId: data.hubId,
            title: data.title,
            message: data.message,
        });
    });
});
//
// http.listen(app.get('port'), function() {
//     console.log('listening on localhost:3000');
// });