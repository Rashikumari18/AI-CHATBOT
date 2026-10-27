
const chatForm = document.getElementById("chat-form");
const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const clearButton = document.getElementById("clear-btn");

const welcomeMessage =
    "Hi! I'm Aira, your friendly chatbot. 😊 Ask me about English, coding, studies, interviews, careers, jokes, or everyday questions. What can I help you with?";

const replies = [
    {
        keywords: ["hello", "hi", "hey", "hii", "hiii", "namaste", "namaskar"],
        answer: "Hey there! 😊 How are you doing today?"
    },
    {
        keywords: ["how are you", "how r u", "how are u"],
        answer: "I'm doing great, thanks for asking! 😊 How are you?"
    },
    {
        keywords: ["your name", "who are you", "introduce yourself"],
        answer: "I'm Aira, a friendly rule-based chatbot created with HTML, CSS, and JavaScript."
    },
    {
        keywords: ["what can you do", "what do you know", "your features", "help me"],
        answer: "I can answer common questions about English, coding, Python, web development, studies, interviews, careers, motivation, jokes, and daily habits. Ask me anything on these topics! 😊"
    },
    {
        keywords: ["thank you", "thanks", "thank u", "thx"],
        answer: "You're welcome! 💙 I'm happy to help. What else would you like to know?"
    },
    {
        keywords: ["good morning"],
        answer: "Good morning! ☀️ Have a wonderful and productive day!"
    },
    {
        keywords: ["good afternoon"],
        answer: "Good afternoon! 😊 Hope your day is going well."
    },
    {
        keywords: ["good evening"],
        answer: "Good evening! 🌆 How has your day been?"
    },
    {
        keywords: ["good night", "sweet dreams"],
        answer: "Good night! 🌙 Sleep well and take care!"
    },
    {
        keywords: ["bye", "goodbye", "see you", "talk later"],
        answer: "Bye! 👋 It was nice chatting with you. Come back whenever you need help!"
    },
    {
        keywords: ["one more", "another one", "more joke", "tell another"],
        answer: "Sure! 😂 Why did the programmer quit their job? Because they didn't get arrays! Want one more?"
    },
    {
        keywords: ["why same answer", "same answer", "you repeat", "repeating", "why you give this answer", "why do you give"],
        answer: "You're right! 😊 I'm a rule-based chatbot, so I match your message with prepared answers. I may repeat a reply when I don't recognise a question. I'm still learning through better rules!"
    },
    {
        keywords: ["what is your purpose", "your purpose", "why were you created"],
        answer: "My purpose is to answer common questions and help people learn. I use predefined responses instead of generating completely new answers."
    },
    {
        keywords: ["tell me something", "surprise me", "fun fact", "interesting fact"],
        answer: "Fun fact! 🐙 An octopus has three hearts. Two pump blood to the gills, while one pumps it to the rest of the body."
    },
    {
        keywords: ["how was your day", "how is your day"],
        answer: "Thanks for asking! 😊 I'm ready to chat and help you. How has your day been?"
    },
    {
        keywords: ["how to improve english", "improve my english", "learn english", "english speaking"],
        answer: "To improve your English, practise for 15–20 minutes daily. Read aloud, learn five useful words, listen to simple English videos, and speak about your day. Don't fear mistakes—they help you learn!"
    },
    {
        keywords: ["english grammar", "grammar"],
        answer: "Start with parts of speech, sentence structure, tenses, articles, prepositions, and subject-verb agreement. Learn one topic at a time and make your own example sentences."
    },
    {
        keywords: ["vocabulary", "new words", "word meaning"],
        answer: "Learn five new words each day. Write their meanings, use each in a sentence, and revise them the next day. Small daily practice builds strong vocabulary!"
    },
    {
        keywords: ["resume", "cv"],
        answer: "A student resume should include contact details, education, technical skills, projects, internships, and certifications. Keep it clear and ideally one page. Only list skills you can explain confidently."
    },
    {
        keywords: ["interview tips", "job interview", "prepare for interview"],
        answer: "Prepare a short self-introduction, revise your resume, research the company, and practise common HR and technical questions. Explain your thinking clearly and be honest when you don't know an answer."
    },
    {
        keywords: ["tell me about yourself", "self introduction", "introduce myself"],
        answer: "You can say: 'Hello, my name is ____. I am studying ____ at ____. I am interested in ____ and currently developing my skills in ____. I enjoy learning new things and building projects.' Fill in your real details."
    },
    {
        keywords: ["strengths", "my strengths"],
        answer: "Common strengths include willingness to learn, teamwork, communication, consistency, adaptability, and problem-solving. Choose two that truly describe you and give a real example."
    },
    {
        keywords: ["weakness", "my weakness"],
        answer: "Choose a genuine weakness and explain how you're improving it. For example: 'Sometimes I spend too long checking my work, so I'm learning to set time limits and prioritise tasks.'"
    },
    {
        keywords: ["internship", "find internship", "internships"],
        answer: "To find an internship, prepare a resume, build one or two projects, and apply through trusted company career pages and internship platforms. Check the company carefully and be cautious if anyone asks for payment to guarantee selection."
    },
    {
        keywords: ["career advice", "career plan", "career"],
        answer: "Choose a target role first, such as frontend developer or data analyst. Learn its required skills, build projects, practise interviews, and apply consistently. Focus on one learning goal at a time."
    },
    {
        keywords: ["linkedin", "linkedin profile"],
        answer: "Improve your LinkedIn profile with a clear headline, About section, education, skills, projects, and certifications. Share genuine learning updates and connect politely with people in your field."
    },
    {
        keywords: ["github", "upload project"],
        answer: "GitHub helps you store and showcase your code. Create a repository, upload your project files, and add a README describing its features and how to run it. Never upload passwords or API keys."
    },
    {
        keywords: ["what is html", "html"],
        answer: "HTML stands for HyperText Markup Language. It creates the structure of webpages using headings, paragraphs, links, images, forms, and buttons."
    },
    {
        keywords: ["what is css", "css"],
        answer: "CSS stands for Cascading Style Sheets. It controls a webpage's appearance, including colours, fonts, spacing, layouts, and responsive design."
    },
    {
        keywords: ["what is javascript", "javascript", "what is js"],
        answer: "JavaScript makes webpages interactive. It handles button clicks, form validation, dynamic content, and many other features used in web applications."
    },
    {
        keywords: ["frontend", "front end development", "frontend developer"],
        answer: "Frontend development focuses on the part of a website that users see and interact with. Start with HTML, CSS, JavaScript, responsive design, Git/GitHub, and then React."
    },
    {
        keywords: ["backend", "back end development"],
        answer: "Backend development handles server-side logic, APIs, authentication, and data processing. Common technologies include Node.js, Python, Java, and databases."
    },
    {
        keywords: ["what is python", "python"],
        answer: "Python is a beginner-friendly programming language. Start with variables, data types, input/output, conditions, loops, functions, lists, dictionaries, and small practice programs."
    },
    {
        keywords: ["what is java", "java programming", "learn java"],
        answer: "To learn Java, start with variables, data types, conditions, loops, methods, arrays, classes, objects, inheritance, and exception handling. Practise each topic with small programs."
    },
    {
        keywords: ["what is c language", "c programming", "learn c"],
        answer: "C is a programming language used to learn core programming concepts. Study variables, operators, conditions, loops, functions, arrays, strings, pointers, and structures."
    },
    {
        keywords: ["what is dsa", "dsa", "data structures and algorithms"],
        answer: "DSA means Data Structures and Algorithms. Start with arrays, strings, searching, sorting, linked lists, stacks, queues, trees, and time complexity. Practise small problems regularly."
    },
    {
        keywords: ["coding error", "debugging", "error in code"],
        answer: "Read the exact error message, check the line number, and verify spelling, brackets, and variable names. Test one change at a time to find the problem."
    },
    {
        keywords: ["what is ai", "artificial intelligence"],
        answer: "Artificial intelligence (AI) is a field of computing that builds systems capable of tasks such as understanding language, recognising patterns, making predictions, and generating content."
    },
    {
        keywords: ["what is chatbot", "chatbot meaning", "how chatbot works"],
        answer: "A chatbot is a program that communicates with users through messages. Rule-based chatbots match messages to prepared responses, while generative AI chatbots can create responses using an AI model."
    },
    {
        keywords: ["machine learning", "what is ml"],
        answer: "Machine learning is a branch of AI in which computers learn patterns from data to make predictions or decisions."
    },
    {
        keywords: ["what is database", "database meaning", "dbms"],
        answer: "A database stores and organises information. A DBMS is software used to create, manage, and retrieve data from databases."
    },
    {
        keywords: ["what is sql", "sql", "learn sql"],
        answer: "SQL stands for Structured Query Language. It is used to work with relational databases. Begin with SELECT, WHERE, ORDER BY, GROUP BY, JOIN, INSERT, UPDATE, and DELETE."
    },
    {
        keywords: ["study tips", "how to study", "study better"],
        answer: "Try 25-minute focus sessions with short breaks. Practise questions instead of only rereading, revise regularly, and keep distractions away while studying."
    },
    {
        keywords: ["exam preparation", "prepare for exams", "exam tips"],
        answer: "List your syllabus, prioritise important topics, practise writing answers from memory, solve previous questions, and revise mistakes. Leave time for rest and final revision."
    },
    {
        keywords: ["time management", "manage time", "procrastination"],
        answer: "Write down your tasks and choose the three most important ones. Break big tasks into small steps, use a timer, and start with just 10 minutes if you're procrastinating."
    },
    {
        keywords: ["motivate me", "motivation", "feeling demotivated"],
        answer: "You don't have to do everything today. Pick one small step and complete it. Progress can be slow and still be real. Consistency matters more than perfection! 💙"
    },
    {
        keywords: ["i am sad", "feeling sad", "sad", "upset"],
        answer: "I'm sorry you're feeling this way. 💙 Take a breath and give yourself a little time. Talking to someone you trust may help. If you want, you can tell me what's bothering you."
    },
    {
        keywords: ["stress", "stressed", "feeling anxious", "anxiety"],
        answer: "When you feel overwhelmed, pause and breathe slowly. Break the problem into smaller steps, take a short break, or talk to someone you trust."
    },
    {
        keywords: ["confidence", "self confidence", "low confidence"],
        answer: "Build confidence through small steps. Practise a skill, notice your progress, and treat mistakes as opportunities to learn instead of proof that you cannot do something."
    },
    {
        keywords: ["healthy habits", "healthy lifestyle", "stay healthy"],
        answer: "Helpful habits include regular sleep, balanced meals, enough water, movement you enjoy, and time to relax. Start with one habit you can maintain."
    },
    {
        keywords: ["sleep tips", "can't sleep", "cannot sleep"],
        answer: "Try a consistent sleep schedule, reduce caffeine late in the day, and dim lights before bed. If sleep problems persist or seriously affect daily life, consider professional support."
    },
    {
        keywords: ["tell me a joke", "joke", "make me laugh"],
        answer: "Why do programmers prefer dark mode? Because light attracts bugs! 😂 Want another joke?"
    },
    {
        keywords: ["weather", "temperature today"],
        answer: "I can't check live weather in this version because I use predefined replies. Please check a weather app for your local forecast."
    },
    {
        keywords: ["latest news", "news"],
        answer: "I can't access live news in this version. Please check a trusted news source for the latest updates."
    },
    {
        keywords: ["who made you", "who created you", "who built you"],
        answer: "I was created as a beginner chatbot project using HTML, CSS, and JavaScript. My answers are selected from predefined rules."
    },
    {
        keywords: ["are you human", "are you a robot", "are you real"],
        answer: "I'm not human. I'm a rule-based chatbot that chooses prepared responses when your message matches a known topic."
    },
    {
        keywords: ["i love you", "love you"],
        answer: "That's sweet of you! 💙 I'm here to help whenever you need a friendly chat."
    },
    {
        keywords: ["good job", "well done", "you are helpful"],
        answer: "Thank you! 😊 I'm glad I could help. What would you like to talk about next?"
    },
    {
        keywords: ["what is your purpose", "your purpose"],
        answer: "My purpose is to answer common questions and make learning a little easier. I use prepared answers, so I may not understand every question."
    },
    {
        keywords: ["how are you made", "how were you made"],
        answer: "I was built using HTML for structure, CSS for design, and JavaScript for the chat interface and response-matching logic."
    },
    {
        keywords: ["what can i ask", "give me examples", "example questions"],
        answer: "Try these: 'What is Python?', 'How do I improve my English?', 'Give me interview tips', 'What is DSA?', 'Tell me a joke', or 'How can I manage my time?' 😊"
    },
    {
        keywords: ["one more time", "repeat that", "say it again"],
        answer: "Of course! 😊 Tell me which topic or answer you'd like me to repeat."
    }
];

// Find a reply that matches the user's message
function getBotReply(message) {
    const text = message
        .toLowerCase()
        .replace(/[^\w\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    // Handle a few common follow-up messages
    if (
        text.includes("one more") ||
        text.includes("another one") ||
        text.includes("tell another")
    ) {
        if (text.includes("joke")) {
            return "Why did the computer go to the doctor? It had a virus! 😂 Want another?";
        }
    }

    for (const item of replies) {
        for (const keyword of item.keywords) {
            if (text.includes(keyword)) {
                return item.answer;
            }
        }
    }

    return "I don't know the answer to that yet. 😊 Try asking about English, Python, HTML, CSS, JavaScript, DSA, SQL, studies, interviews, internships, motivation, or jokes. You can also click one of the suggested questions!";
}

function addMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = message;

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


chatForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    addMessage(message, "user");
    userInput.value = "";

    setTimeout(function () {
        const reply = getBotReply(message);
        addMessage(reply, "bot");
    }, 350);
});

// Clear the conversation
clearButton.addEventListener("click", function () {
    chatMessages.innerHTML = "";
    addMessage(welcomeMessage, "bot");
});


addMessage(welcomeMessage, "bot");
