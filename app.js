// app.js
const quizzes = {
  "Movers and Shakers": [
    { q: "What is a “significant” person?", a: ["A person who is very funny", "A person who is important and made changes", "A person who is good at maths", "A person who owns a shop"], correct: 1 },
    { q: "What did Joseph Lister help stop in hospitals?", a: ["People getting bored", "Long waits", "Infections", "Loud noises"], correct: 2 },
    { q: "Who was the first person to walk on the Moon?", a: ["Henry VIII", "Neil Armstrong", "Elon Musk", "Christopher Columbus"], correct: 1 },
    { q: "What kind of person is an activist?", a: ["A person who builds houses", "A person who works in a bank", "A person who wants to help people or the planet", "A person who sells things"], correct: 2 },
    { q: "What did Mary Anning study?", a: ["Space", "Fossils", "Stars", "Plants"], correct: 1 },
    { q: "What did Emmeline Pankhurst stand up for?", a: ["Cars", "Shops", "Animals", "Women’s rights"], correct: 3 },
    { q: "Who was Rosa Parks?", a: ["A queen of England", "A woman who wanted equal rights for black people", "A famous singer", "A doctor"], correct: 1 },
    { q: "What did Henry VIII do in 1534?", a: ["Discovered a planet", "Wrote a book", "Formed the Church of England", "Flew a plane"], correct: 2 },
    { q: "Who discovered the Americas in 1492?", a: ["Rosa Parks", "Elon Musk", "Christopher Columbus", "Vincent van Gogh"], correct: 2 },
    { q: "What did Vincent van Gogh do?", a: ["Wrote science books", "Painted in a new style", "Wrote poems", "Built boats"], correct: 1 },
    { q: "What is a memorial?", a: ["A type of food", "A pet", "A way to remember someone important", "A magic trick"], correct: 2 },
    { q: "What is a statue?", a: ["A stone person to remember someone", "A type of toy", "A long road", "A tall hat"], correct: 0 },
    { q: "What does “discover” mean?", a: ["To hide something", "To break something", "To see or find something first", "To clean something"], correct: 2 },
    { q: "What does a scientist do?", a: ["Bakes cakes", "Discovers or invents things", "Paints pictures", "Sings songs"], correct: 1 },
    { q: "What is a plaque?", a: ["A shiny coin", "A kind of chair", "A flat stone with writing", "A basket"], correct: 2 },
    { q: "What did JK Rowling write?", a: ["Harry Potter books", "Science experiments", "Recipes", "Maps"], correct: 0 },
    { q: "What is a decade?", a: ["5 years", "10 years", "20 years", "100 years"], correct: 1 },
    { q: "What did Elon Musk try to build?", a: ["A time machine", "A rocket to go to Mars", "A giant boat", "A pyramid"], correct: 1 },
    { q: "What does a monarch do?", a: ["Sells books", "Rules a kingdom", "Plays football", "Bakes cakes"], correct: 1 },
    { q: "What kind of person is Greta Thunberg?", a: ["A queen", "A musician", "A climate change activist", "A tennis player"], correct: 2 }
  ],

  "Magnificent Monarchs": [
    { q: "What is a monarch?", a: ["A builder", "A king or queen", "A soldier", "A shopkeeper"], correct: 1 },
    { q: "What is a monarchy?", a: ["A country with no rules", "A country ruled by a king or queen", "A type of castle", "A party"], correct: 1 },
    { q: "Who is the monarch now?", a: ["Queen Elizabeth II", "King Charles III", "Queen Victoria", "King Alfred"], correct: 1 },
    { q: "What did Elizabeth II do for 70 years?", a: ["Go on holiday", "Work in a hospital", "Be queen and lead the Commonwealth", "Write books"], correct: 2 },
    { q: "Who reigned the longest before Elizabeth II?", a: ["Queen Victoria", "Queen Elizabeth I", "King Charles I", "King William"], correct: 0 },
    { q: "Where does the royal family live in London?", a: ["Buckingham Palace", "Tower Bridge", "Big Ben", "Parliament"], correct: 0 },
    { q: "What was William the Conqueror famous for?", a: ["Flying a plane", "Building castles and winning the Battle of Hastings", "Riding a bicycle", "Painting pictures"], correct: 1 },
    { q: "What kind of power did William the Conqueror have?", a: ["Tiny power", "Team power", "Absolute power", "Electric power"], correct: 2 },
    { q: "Who created the Church of England?", a: ["Elizabeth II", "Henry VIII", "Queen Victoria", "Charles I"], correct: 1 },
    { q: "How many times did Henry VIII marry?", a: ["One", "Two", "Six", "Ten"], correct: 2 },
    { q: "What did Queen Victoria support?", a: ["New toys", "New technologies and charities", "Sports and sweets", "Only music"], correct: 1 },
    { q: "Who defeated the Spanish Armada?", a: ["Queen Victoria", "Henry VIII", "Elizabeth I", "Alfred the Great"], correct: 2 },
    { q: "What was Elizabeth I known for?", a: ["Being quiet", "Being brave and ruling alone", "Having many pets", "Reading stories"], correct: 1 },
    { q: "Who united English kingdoms and created schools?", a: ["William the Conqueror", "Elizabeth II", "Alfred the Great", "Charles I"], correct: 2 },
    { q: "What is a timeline used for?", a: ["Telling jokes", "Showing events in order", "Writing letters", "Planning holidays"], correct: 1 },
    { q: "What is the name of Queen Victoria’s husband?", a: ["Charles", "William", "George", "Albert"], correct: 3 },
    { q: "What is a royal portrait?", a: ["A story", "A photo of a castle", "A picture that shows what a monarch is like", "A picture of food"], correct: 2 },
    { q: "What is a parliament?", a: ["A school", "A shop", "A group that makes laws", "A palace"], correct: 2 },
    { q: "What does it mean if someone is 'head of state'?", a: ["They are in charge of a classroom", "They represent the country", "They build houses", "They sell newspapers"], correct: 1 },
    { q: "What does a crown show?", a: ["You are rich", "You are tall", "You are royal and powerful", "You like gold"], correct: 2 }
  ],
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
        // Reset the quiz after completion
        setTimeout(() => {
            document.getElementById("quiz-container").style.display = "none";
            document.getElementById("quiz-list").style.display = "block";
            document.getElementById("score").textContent = "";
        }, 3000); // Show score for 3 seconds before returning to quiz list
    }
}

window.onload = loadQuizzes;
