const express = require('express');
const app = express();
const port = 3000;
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use('/', express.static(__dirname + '/public'))
io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);
    });
    // socket.on("from_client", () => {
    //     console.log("Received event from client")
    // })
    // setInterval(function f() {
    //     socket.emit('from_server')
    // }, 3000)
    socket.on("new_msg", (data) => {
        // io.emit('msg_received', data);
        // socket.emit('msg_received', data);
        socket.broadcast.emit('msg_received', data)
    })

});
server.listen(port, () => {
    console.log('listening at 3000')
})
