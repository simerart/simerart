const io = require('socket.io')(3000, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

// io.on('connection', socket => {

//     socket.emit('chat-message', 'Hello World')
//     socket.on('send-chat-message', message => {
//         socket.broadcast.emit('chat-message', message)
//     })
    
// })
io.on('connection', (socket) => {
    console.log('A user connected');
    
    socket.on('new message', (data) => {
      io.emit('new message', data); // Broadcast message to all clients
    });
  });

 
  