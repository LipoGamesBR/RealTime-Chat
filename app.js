const express = require('express')
const app = express();
const http = require('http')
const server = http.createServer(app)
const path = require('path')

const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/public/index.html')
});

io.on('connection', (socket) => {
    socket.on('message', (msg) => {
        io.emit('message', msg);
    });
  });

server.listen('8000', () => {
    console.log('Server running port 8000');
})