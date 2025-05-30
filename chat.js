// // Setup basic express server
// const express = require('express');
// const app = express();
// const path = require('path');
// const server = require('http').createServer(app);
// const io = require('socket.io')(server);
// const port = process.env.PORT || 3000;

// server.listen(port, () => {
//   console.log('Server listening at port %d', port);
// });

// // Routing
// app.use(express.static(path.join(__dirname, 'public')));

// // Chatroom

// let numUsers = 0;

// io.on('connection', (socket) => {
//   let addedUser = false;

//   // when the client emits 'new message', this listens and executes
//   socket.on('new message', (data) => {
//     // we tell the client to execute 'new message'
//     socket.broadcast.emit('new message', {
//       username: socket.username,
//       message: data
//     });
//   });

//   // when the client emits 'add user', this listens and executes
//   socket.on('add user', (username) => {
//     if (addedUser) return;

//     // we store the username in the socket session for this client
//     socket.username = username;
//     ++numUsers;
//     addedUser = true;
//     socket.emit('login', {
//       numUsers: numUsers
//     });
//     // echo globally (all clients) that a person has connected
//     socket.broadcast.emit('user joined', {
//       username: socket.username,
//       numUsers: numUsers
//     });
//   });

//   // when the client emits 'typing', we broadcast it to others
//   socket.on('typing', () => {
//     socket.broadcast.emit('typing', {
//       username: socket.username
//     });
//   });

//   // when the client emits 'stop typing', we broadcast it to others
//   socket.on('stop typing', () => {
//     socket.broadcast.emit('stop typing', {
//       username: socket.username
//     });
//   });

//   // when the user disconnects.. perform this
//   socket.on('disconnect', () => {
//     if (addedUser) {
//       --numUsers;

//       // echo globally that this client has left
//       socket.broadcast.emit('user left', {
//         username: socket.username,
//         numUsers: numUsers
//       });
//     }
//   });
// });













// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');
// const path = require('path');

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// // Serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// io.on('connection', (socket) => {
//   console.log('A user connected');

//   // Listen for new messages from the client
//   socket.on('new message', (data) => {
//     io.emit('new message', data); // Broadcast the message to all clients
//   });

//   socket.on('disconnect', () => {
//     console.log('A user disconnected');
//   });
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });





// ----------------------------------
// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');
// const path = require('path');

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"]
//   }
// });
// // Serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// io.on('connection', (socket) => {
//   console.log('A user connected');

//   socket.on('new message', (data) => {
//     console.log('New message received:', data);
//     io.emit('new message', data); // Broadcast to all clients
//   });

//   socket.on('disconnect', () => {
//     console.log('A user disconnected');
//   });
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
// 7/;






// Server-side code (save as server.js)
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

// Initialize Express and create HTTP server
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Store messages in memory (you could use a database in production)
const chatHistory = [];

// Socket.IO connection handler
io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);
  
  // Send chat history to newly connected users
  socket.emit('chat history', chatHistory);
  
  // Handle new messages
  socket.on('chat message', (data) => {
    console.log('Message received:', data);
    
    // Store message in history (limited to last 100 messages)
    chatHistory.push(data);
    if (chatHistory.length > 100) {
      chatHistory.shift(); // Remove oldest message
    }
    
    // Broadcast the message to all connected clients
    io.emit('chat message', data);
  });
  
  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

