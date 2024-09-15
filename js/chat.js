document.addEventListener("DOMContentLoaded", () => {
    const messagesContainer = document.getElementById("chat-messages");

    window.selectChat = function (chatName) {
        document.getElementById("chat-title").textContent = chatName;
        messagesContainer.innerHTML = ""; // Clear previous messages
        // Here you can load messages related to the selected chat from a server or local storage
    };

    window.sendMessage = function () {
        const input = document.getElementById("message-input");
        const messageText = input.value.trim();
        
        if (messageText !== "") {
            const messageElement = document.createElement("div");
            messageElement.textContent = messageText;
            messageElement.className = "message";
            messagesContainer.appendChild(messageElement);
            
            input.value = ""; // Clear input field
            messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
        }
    };
});