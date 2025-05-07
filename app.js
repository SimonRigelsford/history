// app.js
const quizzes = {
  "Movers and Shakers": [
    { q: "What is a “significant” person?", a: ["A person who is very funny", "A person who is important and made changes", "A person who is good at maths", "A person who owns a shop"], correct: 1 },
    { q: "What did Joseph Lister help stop in hospitals?", a: ["People getting bored", "Long waits", "Infections", "Loud noises"], correct: 2 }
  ],
  "Magnificent Monarchs": [
    { q: "What is a monarch?", a: ["A builder", "A king or queen", "A soldier", "A shopkeeper"], correct: 1 },
    { q: "What is a monarchy?", a: ["A country with no rules", "A country ruled by a king or queen", "A type of castle", "A party"], correct: 1 }
  ]
};

let currentQuiz = null;
let currentQuestion = 0;
let score = 0;

function loadQuizzes() {
    const quizList = document.getElementById("quiz-list");
    for (const quizName in quizzes) {
        const button = document.createElement("button");
        button.textContent = quizName;
        button.onclick = () => startQuiz(quizName);
        quizList.appendChild(button);
    }
}

function startQuiz(name) {
    currentQuiz = quizzes[name];
    currentQuestion = 0;
    score = 0;
    document.getElementById("quiz-title").textContent = name;
    document.getElementById("quiz-list").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    showQuestion();
}

function showQuestion() {
    const questionObj = currentQuiz[currentQuestion];
    document.getElementById("question").textContent = questionObj.q;
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";
    questionObj.a.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => checkAnswer(index);
        answersDiv.appendChild(button);
    });
}

function checkAnswer(selected) {
    const correct = currentQuiz[currentQuestion].correct;
    const feedback = document.getElementById("feedback");
    if (selected === correct) {
        score++;
        feedback.textContent = "Correct!";
    } else {
        feedback.textContent = `Wrong! Correct answer: ${currentQuiz[currentQuestion].a[correct]}`;
    }
}

function nextQuestion() {
    currentQuestion++;
    const feedback = document.getElementById("feedback");
    if (currentQuestion < currentQuiz.length) {
        feedback.textContent = "";
        showQuestion();
    } else {
        feedback.textContent = "";
        document.getElementById("score").textContent = `Your score: ${score} / ${currentQuiz.length}`;
    }
}

window.onload = loadQuizzes;
