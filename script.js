const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function processUserInput() {
    const userMessage = userInput.value.trim();
    if (userMessage !== '') {
        appendMessage(userMessage, 'user');
        // Replace this with your chatbot logic/API call
        appendMessage("I'm sorry, I'm just a demo chatbot and cannot provide real support.", 'bot');
        userInput.value = '';
    }
}

userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        processUserInput();
    }
});
