const chatArea = document.getElementById("chatArea");
const userInput = document.getElementById("userInput");


// ===============================
// SEND MESSAGE
// ===============================

function sendMessage() {

    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    addUserMessage(message);

    userInput.value = "";

    showTyping();

    setTimeout(function () {

        removeTyping();

        const result = getBotResponse(message);

addBotMessage(`
    <div class="intent-label">
        🧠 Intent Detected: ${result.intent}
    </div>
    ${result.response}
`);
}
)}

// ===============================
// ENTER KEY
// ===============================

userInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});


// ===============================
// QUICK BUTTONS
// ===============================

function quickMessage(message) {

    userInput.value = message;

    sendMessage();

}


// ===============================
// RULE-BASED CHATBOT BRAIN
// ===============================

function getBotResponse(input) {

    const text = input.toLowerCase().trim();

    // GREETING
    const greetingWords = [
        "hello",
        "hi",
        "hey",
        "good morning",
        "good evening"
    ];

 if (
    greetingWords.some(word =>
        new RegExp("\\b" + word.replace(" ", "\\s+") + "\\b", "i").test(text)
    )
) {
    const hour = new Date().getHours();

    let greeting;

    if (hour < 12) {
        greeting = "🌅 Good Morning!";
    } else if (hour < 17) {
        greeting = "☀️ Good Afternoon!";
    } else if (hour < 21) {
        greeting = "🌆 Good Evening!";
    } else {
        greeting = "🌙 Good Night!";
    }

    return {
        intent: "GREETING",
        response: `
            👋 <b>${greeting}</b><br><br>

            Welcome to <b>CampusBuddy</b> 🎓<br><br>

            I'm ready to help you with
            your student life.<br><br>

            📚 Studies &nbsp; 📝 Exams<br>
            💻 Projects &nbsp; 📅 Planning
        `
    };
}
    // STUDY
    const studyWords = [
        "study",
        "studying",
        "learn",
        "learning",
        "study tips",
        "how to study",
        "concentrate"
    ];

    if (studyWords.some(word => text.includes(word))) {
        return {
            intent: "STUDY",
            response: `
                📚 <b>Study Strategy</b><br><br>
                🔹 Choose one topic<br>
                🔹 Study for 45 minutes<br>
                🔹 Take a short break<br>
                🔹 Revise the topic<br>
                🔹 Practice questions<br><br>
                💡 Focus on consistency rather than
                studying everything at once.
            `
        };
    }

    // EXAM
    const examWords = [
        "exam",
        "exams",
        "test",
        "tests",
        "preparation",
        "prepare",
        "revision",
        "revise",
        "semester"
    ];

    if (examWords.some(word => text.includes(word))) {
        return {
            intent: "EXAM",
            response: `
                📝 <b>Exam Preparation Mode</b><br><br>
                🎯 <b>Step 1:</b> List important topics.<br>
                📖 <b>Step 2:</b> Understand concepts.<br>
                ✍️ <b>Step 3:</b> Practice questions.<br>
                🔄 <b>Step 4:</b> Revise regularly.<br>
                😴 <b>Step 5:</b> Get proper rest.<br><br>
                💡 Start with the topic you find
                most difficult.
            `
        };
    }

    // PROJECT
    const projectWords = [
        "project",
        "projects",
        "mini project",
        "final year project",
        "project idea"
    ];

    if (projectWords.some(word => text.includes(word))) {
        return {
            intent: "PROJECT",
            response: `
                💻 <b>Project Lab</b><br><br>
                🚀 <b>Smart Campus Assistant</b><br><br>
                Build a web application that helps
                students with:<br><br>
                📍 Classroom locations<br>
                📅 College events<br>
                📚 Study resources<br>
                🧑‍🏫 Faculty information<br>
                🕐 Class schedules<br><br>
                Suggested technologies:
                HTML, CSS and JavaScript.
            `
        };
    }

    // TIMETABLE
    const timetableWords = [
        "timetable",
        "schedule",
        "study plan",
        "daily plan",
        "time table"
    ];

    if (timetableWords.some(word => text.includes(word))) {
        return {
            intent: "TIMETABLE",
            response: `
                📅 <b>Smart Study Plan</b><br><br>
                🌅 <b>Morning</b><br>
                Difficult subject<br><br>
                ☀️ <b>Afternoon</b><br>
                Practice problems<br><br>
                🌆 <b>Evening</b><br>
                Revision<br><br>
                🌙 <b>Night</b><br>
                Quick recap
            `
        };
    }

    // ATTENDANCE
    const attendanceWords = [
        "attendance",
        "attendance percentage",
        "classes attended",
        "attendance shortage"
    ];

    if (attendanceWords.some(word => text.includes(word))) {
        return {
            intent: "ATTENDANCE",
            response: `
                📊 <b>Attendance Assistant</b><br><br>
                Keep checking your attendance
                regularly.<br><br>
                💡 Attend classes consistently
                and follow your college's
                attendance requirements.
            `
        };
    }

    // MOTIVATION
    const motivationWords = [
        "motivate",
        "motivation",
        "tired",
        "give up",
        "can't study",
        "cannot study",
        "feeling lazy",
        "lazy"
    ];

    if (motivationWords.some(word => text.includes(word))) {
        return {
            intent: "MOTIVATION",
            response: `
                💪 <b>CampusBuddy Motivation</b><br><br>
                Don't try to complete everything
                at once.<br><br>
                🎯 Pick one small task.<br>
                ⏱️ Work on it for a short session.<br>
                ✅ Finish it.<br>
                🌟 Move to the next task.<br><br>
                Small progress becomes big progress!
            `
        };
    }

    // THANKS
    const thanksWords = [
        "thanks",
        "thank you",
        "thank"
    ];

    if (thanksWords.some(word => text.includes(word))) {
        return {
            intent: "THANKS",
            response: `
                😊 <b>You're welcome!</b><br><br>
                Happy to help, student! 🎓
            `
        };
    }

    // HELP
    const helpWords = [
        "help",
        "what can you do",
        "options",
        "features"
    ];

   if (helpWords.some(word => text.includes(word))) {
    return {
        intent: "HELP",
        response: `
            🤖 <b>CampusBuddy Help Center</b><br><br>

            I can help you with these student topics:<br><br>

            📚 <b>Study</b><br>
            Get study tips and learning strategies.<br><br>

            📝 <b>Exams</b><br>
            Get exam preparation guidance.<br><br>

            💻 <b>Projects</b><br>
            Explore student project ideas.<br><br>

            📅 <b>Timetable</b><br>
            Create a simple study schedule.<br><br>

            📊 <b>Attendance</b><br>
            Get attendance guidance.<br><br>

            💪 <b>Motivation</b><br>
            Get simple motivation for studying.<br><br>
<div class="help-actions">

    <button onclick="quickMessage('Give me study tips')">
        📚 Study
    </button>

    <button onclick="quickMessage('How can I prepare for exams?')">
        📝 Exams
    </button>

    <button onclick="quickMessage('Give me a project idea')">
        💻 Projects
    </button>

    <button onclick="quickMessage('Give me a study timetable')">
        📅 Timetable
    </button>

</div>
        `
    };
}

    // GOODBYE
    const goodbyeWords = [
        "bye",
        "goodbye",
        "see you",
        "good night"
    ];

    if (goodbyeWords.some(word => text.includes(word))) {
        return {
            intent: "GOODBYE",
            response: `
                👋 <b>Goodbye!</b><br><br>
                All the best with your studies. 🎓<br>
                Keep learning and keep growing! 🚀
            `
        };
    }

    // FALLBACK
    return {
        intent: "UNKNOWN",
        response: `
            🤔 <b>I couldn't identify that request.</b><br><br>
            I'm currently trained for these
            student topics:<br><br>
            📚 Study<br>
            📝 Exams<br>
            💻 Projects<br>
            📅 Timetable<br>
            📊 Attendance<br>
            💪 Motivation<br><br>
            Try asking me about one of these.
        `
    };
}
// ===============================
// ADD USER MESSAGE
// ===============================

function addUserMessage(message) {
    const messageDiv = document.createElement("div");

    messageDiv.className = "message user";

    messageDiv.innerHTML = `
        <div>
            <div class="bubble"></div>
            <small>${getTime()}</small>
        </div>
    `;

    const bubble = messageDiv.querySelector(".bubble");

    // Safely display user message as text
    bubble.textContent = message;

    chatArea.appendChild(messageDiv);

    saveChat();
    scrollToBottom();
}


// ===============================
// ADD BOT MESSAGE
// ===============================

function addBotMessage(message) {

    const div = document.createElement("div");

    div.className = "message bot";

    div.innerHTML = `
        <div class="avatar">
            🤖
        </div>

        <div>

            <div class="bubble">
                ${message}
            </div>

            <small>
                ${getTime()}
            </small>

        </div>
    `;

    chatArea.appendChild(div);

    saveChat();

    scrollToBottom();
}


// ===============================
// TYPING INDICATOR
// ===============================

function showTyping() {

    const div = document.createElement("div");

    div.className = "message bot";

    div.id = "typing";

    div.innerHTML = `
        <div class="avatar">
            🤖
        </div>

        <div class="typing">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;

    chatArea.appendChild(div);

    scrollToBottom();
}


function removeTyping() {

    const typing = document.getElementById("typing");

    if (typing) {
        typing.remove();
    }

}


// ===============================
// TIME
// ===============================

function getTime() {

    const now = new Date();

    return now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

}


// ===============================
// AUTO SCROLL
// ===============================

function scrollToBottom() {

    chatArea.scrollTop = chatArea.scrollHeight;

}
// ===============================
// CLEAR CHAT
// ===============================

function clearChat() {
    const confirmClear = confirm(
        "Are you sure you want to clear the conversation?"
    );

    if (!confirmClear) {
        return;
    }

    chatArea.innerHTML = `
        <div class="message bot">
            <div class="avatar">🤖</div>

            <div>
                <div class="bubble">
                    Welcome back! 👋<br><br>

                    I'm <b>CampusBuddy</b>.
                    <br><br>

                    How can I help you today? 🎓
                </div>

                <small>${getTime()}</small>
            </div>
        </div>
    `;

    // Save the fresh conversation
    saveChat();

    scrollToBottom();
}
// ===============================
// SAVE CHAT HISTORY
// ===============================

function saveChat() {
    localStorage.setItem("campusBuddyChat", chatArea.innerHTML);
}


// ===============================
// LOAD CHAT HISTORY
// ===============================

function loadChat() {

    const savedChat = localStorage.getItem("campusBuddyChat");

    if (savedChat) {
        
        chatArea.innerHTML = savedChat;
    }

    scrollToBottom();
}


// ===============================
// LOAD CHAT WHEN PAGE OPENS
// ===============================

window.addEventListener("load", function() {
    loadChat();
});