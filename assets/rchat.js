const socket = io();

// DOM elements
const messagesContainer = document.getElementById('messages');
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('message');
const sendBtn = document.getElementById('send-btn');

// Load existing messages on connection
socket.on('load messages', (messages) => {
  messages.forEach(({ username, message }) => displayMessage(username, message));
});

// Display new incoming messages
socket.on('new message', ({ username, message }) => {
  displayMessage(username, message);
});

// Send a message to the server
const sendMessage = () => {
  const username = usernameInput.value.trim();
  const message = messageInput.value.trim();

  if (!username || !message) {
    alert('Please enter both a username and a message.');
    return;
  }

  socket.emit('send message', { username, message });
  messageInput.value = ''; // Clear input field
};

// Display message in the chat window
const displayMessage = (username, message) => {
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message');
  messageElement.innerHTML = `<strong>${username}:</strong> ${message}`;
  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll to bottom
};

// Event listeners
sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') sendMessage();
});
