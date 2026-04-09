// async function sendMessage() {
//     let input = document.getElementById("user-input");
//     let message = input.value;

//     let chatBox = document.getElementById("chat-box");

//     chatBox.innerHTML += `<div><b>You:</b> ${message}</div>`;

//     let response = await fetch("http://127.0.0.1:8000/api/chat/", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ message: message })
//     });

//     let data = await response.json();

//     chatBox.innerHTML += `<div><b>Bot:</b> ${data.reply}</div>`;

//     input.value = "";
// }


// extra
// async function sendMessage() {
//     let input = document.getElementById("user-input");
//     let message = input.value.trim();

//     if (message === "") return;

//     let chatBox = document.getElementById("chat-box");

//     // User message
//     chatBox.innerHTML += `<div class="user-msg"><b>You:</b> ${message}</div>`;

//     // Bot placeholder
//     let botDiv = document.createElement("div");
//     botDiv.className = "bot-msg";
//     chatBox.appendChild(botDiv);

//     scrollToBottom();

//     try {
//         let response = await fetch("/api/chat/", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ message: message })
//         });

//         let data = await response.json();

//         // ✨ Streaming effect
//         let text = data.reply;
//         let i = 0;

//         function typeWriter() {
//             if (i < text.length) {
//                 botDiv.innerHTML += text.charAt(i);
//                 i++;
//                 scrollToBottom();
//                 setTimeout(typeWriter, 20); // speed (lower = faster)
//             }
//         }

//         typeWriter();

//     } catch (error) {
//         botDiv.innerHTML = "Error: Server not responding";
//     }

//     input.value = "";
// }


// changes
function sendMessage() {
    let input = document.getElementById("user-input");
    let message = input.value;

    let chatBox = document.getElementById("chat-box");

    chatBox.innerHTML += `<div><b>You:</b> ${message}</div>`;

    fetch("/api/chat/", {
        method: "POST",
        body: JSON.stringify({ message: message }),
    })
    .then(response => response.json())
    .then(data => {
        chatBox.innerHTML += `<div><b>Bot:</b> ${data.reply}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    });

    input.value = "";
}