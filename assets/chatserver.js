const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve the chat HTML file
app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Chat</title>
    <style>
      body { font-family: "Courier New", 'Courier New', Courier, monospace; }
      #chat-container { width: 80%; max-width: 600px; margin: auto; padding: 10px; border: 1px solid #ccc; }
      #messages { height: 300px; border: 1px solid #eee; overflow-y: auto; padding: 5px; }
      #username, #message { width: 100%; padding: 10px; margin: 5px 0; }
      .chat-message { margin: 5px 0; }
    </style>
  </head>
  <body>
  <div id="chat-container">
    <div id="messages"></div>
    <input type="text" id="username" placeholder="Enter your username">
    <input type="text" id="message" placeholder="Type your message"><button onclick="sendMessage()">Send</button>
  </div>

  <script src="/socket.io/socket.io.js"></script>
  <script>
    const socket = io();
    const messagesContainer = document.getElementById("messages");

    // Receive messages
    socket.on('chat message', ({ username, message }) => {
      displayMessage(username, message);
    });

    function sendMessage() {
      const username = document.getElementById("username").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!username || !message) {
        alert("Please enter both a username and a message.");
        return;
      }

      // Send message to server
      socket.emit('chat message', { username, message });
      document.getElementById("message").value = ""; // Clear input field
    }

    function displayMessage(username, message) {
      const messageElement = document.createElement("div");
      messageElement.classList.add("chat-message");
      messageElement.innerHTML = `<strong>${username}</strong>: ${message}`;
      messagesContainer.appendChild(messageElement);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  </script>
  </body>
  </html>
  `);
});

// Handle socket connections
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('chat message', (message) => {
    // Broadcast the message to all connected clients
    io.emit('chat message', message);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
