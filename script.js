const socket = io('http//localhost:3000')
const messageFrom = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

socket.on('chat-message', data => {
    console.log(data)
})

messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.Value
    socket.emit('end-chaat-message', message)
    messageInput.value = ''
})