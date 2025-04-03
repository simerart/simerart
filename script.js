// const socket = io('http//localhost:3000')
// const messageContainer = document.getElementById('messages')
// const messageFrom = document.getElementById('chat-container')
// const messageInput = document.getElementById('message-input')

// socket.on('messages', data => {
//     appendMessage(data)
// })

// messageForm.addEventListener('submit', e => {
//     e.preventDefault()
//     const message = messageInput.Value
//     appendMessage(`You: $(message)`)
//     socket.emit('send-chat-message', message)
//     messageInput.value = ''
// })

// function appendMessage(message) {
//     const messageElement = document.createElement('div')
//     messageElement.innerText = message
//     messageContainer.append(messageElement)
// }
// function displayMessage(username, message) {
//     const messagesContainer = document.getElementById("messages");
//     const messageElement = document.createElement("div");
//     messageElement.classList.add("chat-message");
//     messageElement.innerHTML = `<strong>${username}</strong>: ${message}`;
//     messagesContainer.appendChild(messageElement);
//     messagesContainer.scrollTop = messagesContainer.scrollHeight;
//   }











// const socket = io(); // Connect to the server
// const messagesContainer = document.getElementById('messages');
// const usernameInput = document.getElementById('username');
// const messageInput = document.getElementById('message');
// const sendButton = document.getElementById('sendButton');

// // Send a new message to the server
// function sendMessage() {
//   const username = usernameInput.value.trim();
//   const message = messageInput.value.trim();

//   if (!username || !message) {
//     alert('Please enter both a username and a message.');
//     return;
//   }

//   const data = { username, message };
//   displayMessage(username, message); // Display message locally
//   socket.emit('new message', data); // Send to server
//   messageInput.value = ''; // Clear the message input
// }

// // Display a message on the page
// function displayMessage(username, message) {
//   const messageElement = document.createElement('div');
//   messageElement.classList.add('chat-message');
//   messageElement.innerHTML = `<strong>${username}</strong>: ${message}`;
//   messagesContainer.appendChild(messageElement);
//   messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll
// }

// // Listen for new messages from the server
// // socket.on('new message', (data) => {
// //   displayMessage(data.username, data.message);
// // });
// socket.emit('new message', { username, message }); // Send message
// socket.on('new message', (data) => {              // Receive message
//   displayMessage(data.username, data.message);
// });


// // Add event listener to the send button
// sendButton.addEventListener('click', sendMessage);

// // Optional: Enable "Enter" key to send messages
// messageInput.addEventListener('keydown', (event) => {
//   if (event.key === 'Enter') {
//     sendMessage();
//   }
// });
// app.use(express.static(path.join(__dirname, 'public')));






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

// // Serve static files from the "public" directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Handle socket connections
// io.on('connection', (socket) => {
//   console.log('A user connected');

//   // Listen for "new message" events from clients
//   socket.on('new message', (data) => {
//     console.log('New message received:', data);
//     io.emit('new message', data); // Broadcast the message to all connected clients
    
//   });

//   socket.on('disconnect', () => {
//     console.log('A user disconnected');
//   });
// });

// // Start the server
// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });




// const socket = io('http://localhost:3000'); // Connect to server
// const messagesContainer = document.getElementById('messages');
// const usernameInput = document.getElementById('username');
// const messageInput = document.getElementById('message');
// const sendButton = document.getElementById('sendButton');

// function sendMessage() {
//   const username = usernameInput.value.trim();
//   const message = messageInput.value.trim();

//   if (!username || !message) {
//     alert('Please enter both a username and a message.');
//     return;
//   }

//   const data = { username, message };
//   displayMessage(username, message); // Display locally
//   socket.emit('new message', data);  // Send to server
//   messageInput.value = ''; // Clear input


// function displayMessage(username, message) {
//   const messageElement = document.createElement('div');
//   messageElement.classList.add('chat-message');
//   messageElement.innerHTML = `<strong>${username}</strong>: ${message}`;
//   messagesContainer.appendChild(messageElement);
//   messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll
// }

// // Listen for messages from the server
// socket.on('new message', (data) => {
//   displayMessage(data.username, data.message);
// });

// // Add event listeners
// sendButton.addEventListener('click', sendMessage);
// messageInput.addEventListener('keydown', (event) => {
//   if (event.key === 'Enter') {
//     sendMessage();
//   }
// });
// Display a message on the page  



const socket = io('http://localhost:3000'); // Connect to the server  
const messagesContainer = document.getElementById('messages');  
const usernameInput = document.getElementById('username');  
const messageInput = document.getElementById('message');  
const sendButton = document.getElementById('sendButton');  
  
// Send a new message to the server  
function sendMessage() {  
  const username = usernameInput.value.trim();  
  const message = messageInput.value.trim();  
  
  if (!username || !message) {  
   alert('Please enter both a username and a message.');  
   return;  
  }  
  
  const data = { username, message };  
  displayMessage(username, message); // Display message locally  
  socket.emit('new message', data); // Send to server  
  messageInput.value = ''; // Clear the message input  
}  
  
// Display a message on the page  
function displayMessage(username, message) {  
  const messageElement = document.createElement('div');  
  messageElement.classList.add('chat-message');  
  messageElement.innerHTML = `<strong>${username}</strong>: ${message}`;  
  messagesContainer.appendChild(messageElement);  
  messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll  
}  
  
// Listen for new messages from the server  
socket.on('new message', (data) => {  
  displayMessage(data.username, data.message);  
});  
  
// Add event listener to the send button  
sendButton.addEventListener('click', sendMessage);  
  
// Optional: Enable "Enter" key to send messages  
messageInput.addEventListener('keydown', (event) => {  
  if (event.key === 'Enter') {  
   sendMessage();  
  }  
});
