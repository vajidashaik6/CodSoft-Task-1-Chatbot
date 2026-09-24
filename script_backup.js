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

        const response = getBotResponse(message);

        addBotMessage(response);

    }, 700);
}


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


    // ==========================================
    // INTENT 1: GREETING
    // ==========================================

    const greetingWords = [
        "hello",
        "hi",
        "hey",
        "good morning",
        "good evening"
    ];

    if (greetingWords.some(word => text.includes(word))) {

        return `
            👋 <b>Hello!</b><br><br>

            Welcome to <b>CampusBuddy</b> 🎓<br>

            I'm ready to help you with
            your student life.
        `;
    }


    // ==========================================
    // INTENT 2: STUDY
    // ==========================================

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

        return `
            📚 <b>Study Strategy</b><br><br>

            Try this simple method:<br><br>

            🔹 Choose one topic<br>
            🔹 Study for 45 minutes<br>
            🔹 Take a 10-minute break<br>
            🔹 Revise the topic<br>
            🔹 Practice questions<br><br>

            💡 Focus on consistency rather
            than studying everything at once.
        `;
    }


    // ==========================================
    // INTENT 3: EXAM
    // ==========================================

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

        return `
            📝 <b>Exam Preparation Mode</b><br><br>

            🎯 <b>Step 1:</b> List important topics.<br>
            📖 <b>Step 2:</b> Understand concepts.<br>
            ✍️ <b>Step 3:</b> Practice questions.<br>
            🔄 <b>Step 4:</b> Revise regularly.<br>
            😴 <b>Step 5:</b> Get proper rest.<br><br>

            💡 Start with the topic you find
            most difficult.
        `;
    }


    // ==========================================
    // INTENT 4: PROJECT
    // ==========================================

    const projectWords = [
        "project",
        "projects",
        "mini project",
        "final year project",
        "project idea"
    ];

    if (projectWords.some(word => text.includes(word))) {

        return `
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
        `;
    }


    // ==========================================
    // INTENT 5: TIMETABLE
    // ==========================================

    const timetableWords = [
        "timetable",
        "schedule",
        "study plan",
        "daily plan",
        "time table"
    ];

    if (timetableWords.some(word => text.includes(word))) {

        return `
            📅 <b>Smart Study Plan</b><br><br>

            🌅 <b>Morning</b><br>
            Difficult subject<br><br>

            ☀️ <b>Afternoon</b><br>
            Practice problems<br><br>

            🌆 <b>Evening</b><br>
            Revision<br><br>

            🌙 <b>Night</b><br>
            Quick recap
        `;
    }


    // ==========================================
    // INTENT 6: ATTENDANCE
    // ==========================================

    const attendanceWords = [
        "attendance",
        "attendance percentage",
        "classes attended",
        "attendance shortage"
    ];

    if (attendanceWords.some(word => text.includes(word))) {

        return `
            📊 <b>Attendance Assistant</b><br><br>

            Keep checking your attendance
            regularly.<br><br>

            💡 Attend classes consistently
            and follow your college's
            attendance requirements.
        `;
    }


    // ==========================================
    // INTENT 7: MOTIVATION
    // ==========================================

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

        return `
            💪 <b>CampusBuddy Motivation</b><br><br>

            Don't try to complete everything
            at once.<br><br>

            🎯 Pick one small task.<br>
            ⏱️ Work on it for a short session.<br>
            ✅ Finish it.<br>
            🌟 Move to the next task.<br><br>

            Small progress becomes big progress!
        `;
    }


    // ==========================================
    // INTENT 8: THANKS
    // ==========================================

    const thanksWords = [
        "thanks",
        "thank you",
        "thank"
    ];

    if (thanksWords.some(word => text.includes(word))) {

        return `
            😊 <b>You're welcome!</b><br><br>

            Happy to help, student! 🎓
        `;
    }


    // ==========================================
    // INTENT 9: HELP
    // ==========================================

    const helpWords = [
        "help",
        "what can you do",
        "options",
        "features"
    ];

    if (helpWords.some(word => text.includes(word))) {

        return `
            🤖 <b>CampusBuddy can help with:</b><br><br>

            📚 Study tips<br>
            📝 Exam preparation<br>
            💻 Project ideas<br>
            📅 Study planning<br>
            📊 Attendance guidance<br>
            💪 Motivation<br><br>

            Type any question related to
            these topics.
        `;
    }


    // ==========================================
    // INTENT 10: GOODBYE
    // ==========================================

    const goodbyeWords = [
        "bye",
        "goodbye",
        "see you",
        "good night"
    ];

    if (goodbyeWords.some(word => text.includes(word))) {

        return `
            👋 <b>Goodbye!</b><br><br>

            All the best with your studies. 🎓<br>
            Keep learning and keep growing! 🚀
        `;
    }


    // ==========================================
    // FALLBACK RESPONSE
    // ==========================================

    return `
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
    `;
}

// ===============================
// ADD USER MESSAGE
// ===============================

function addUserMessage(message) {

    const div = document.createElement("div");

    div.className = "message user";

    div.innerHTML = `
        <div>

            <div class="bubble">
                ${message}
            </div>

            <small>
                ${getTime()}
            </small>

        </div>

        <div class="avatar">
            👤
        </div>
    `;

    chatArea.appendChild(div);
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
    localStorage.removeItem("campusBuddyChat");

    chatArea.innerHTML = `
        <div class="message bot">

            <div class="avatar">
                🤖
            </div>

            <div>

                <div class="bubble">

                    Welcome back! 👋<br><br>

                    I'm <b>CampusBuddy</b>.

                    <br><br>

                    How can I help you today? 🎓

                </div>

                <small>
                    Just now
                </small>

            </div>

        </div>
    `;

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