// server.js
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static("public"));

// Broadcasts a message to all clients except the sender
function broadcastMessage(data, senderSocket) {
  wss.clients.forEach((client) => {
    if (client !== senderSocket && client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
}

// Handles WebSocket connection
wss.on("connection", (socket) => {
  socket.on("message", (message) => {
    const data = JSON.parse(message);
    broadcastMessage(data, socket); // Broadcasts incoming messages
  });

  socket.on("close", () => {
    console.log("A user has disconnected");
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});






// public/script.js
const chatBox = document.getElementById("chatBox");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const usernameInput = document.getElementById("username");

let username = "";

const socket = new WebSocket(`ws://${window.location.host}`);

usernameInput.addEventListener("change", (e) => {
    username = e.target.value;
});

sendBtn.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    if (!username) {
        alert("Please enter a username.");
        return;
    }
    if (messageInput.value.trim() !== "") {
        const message = {
            user: username,
            text: messageInput.value
        };
        socket.send(JSON.stringify(message));
        displayMessage(message);
        messageInput.value = "";
    }
}

function displayMessage({ user, text }) {
    const messageElement = document.createElement("div");
    messageElement.textContent = `${user}: ${text}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    displayMessage(message);
};
