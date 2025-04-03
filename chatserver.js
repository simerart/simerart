// const io = require('socket.io')(3000, {
//     cors: {
//       origin: "*",
//       methods: ["GET", "POST"]
//     }
//   });

// io.on('connection', socket => {

//     socket.emit('chat-message', 'Hello World')
//     socket.on('send-chat-message', message => {
//         socket.broadcast.emit('chat-message', message)
//     })
    
// })
// io.on('connection', (socket) => {
//     console.log('A user connected');
    
//     socket.on('new message', (data) => {
//       io.emit('new message', data); // Broadcast message to all clients
//     });
//   });

 
const express = require('express');  
const http = require('http');  
const socketIo = require('socket.io');  
const path = require('path');  
  
const app = express();  
const server = http.createServer(app);  
const io = socketIo(server);  
  
// Serve static files  
app.use(express.static(path.join(__dirname, 'public')));  
  
io.on('connection', (socket) => {  
  console.log('A user connected');  
  
  // Listen for new messages from the client  
  socket.on('new message', (data) => {  
   io.emit('new message', data); // Broadcast the message to all clients  
  });  
  
  socket.on('disconnect', () => {  
   console.log('A user disconnected');  
  });  
});  
  
const PORT = 3000;  
server.listen(PORT, () => {  
  console.log(`Server is running on http://localhost:${PORT}`);  
});

  