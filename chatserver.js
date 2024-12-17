const io = require('socket.io')(3000)

io.on('connection', socket => {

    socket.emit('chat-message', 'Hello World')
    socket.on('send-chat-message', message => {
        socket.broadcast.emit('chat-message', message)
    })
})