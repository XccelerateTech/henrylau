const express = require('express');
const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(http);

app.use(express.static('public'))

io.on('connection', member=>{
    member.on('chat', data=>{
        io.sockets.emit('chat', data)
    })

    member.on('typing', data=>{
        member.broadcast.emit('typing', data)
    })
})

http.listen(8080, ()=>{
    console.log('Listening for request on port 8080.....')
})