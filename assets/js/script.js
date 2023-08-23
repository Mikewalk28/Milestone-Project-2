// Sample question //
const questionList = [
    {
        question: "Who won the 2023 Challenge Cup Final?",
        a: "St. Helens",
        b: "Hull FC",
        c: "Leigh Leopards",
        d: "Hull KR",
        correct: "c",
    },
    {
        question: "How many hearts does an octopus have?",
        a: "8",
        b: "6",
        c: "4",
        d: "3",
        correct: "d",
    },
    {
        question: "What planet is closest to the sun?",
        a: "Mercury",
        b: "Earth",
        c: "Saturn",
        d: "Mars",
        correct: "a",
    },
];
// Progress questions from typed to API with random question bank //
const quiz = document.getElementById("quiz-area");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const answerButtonA = document.getElementById("a");
const answerButtonB = document.getElementById("b");
const answerButtonC = document.getElementById("c");
const answerButtonD = document.getElementById("d");

let currentQuestionIndex = 0;

let currentQuiz = 0;
let score = 0;
let timer = null;
let counter = 15;

// Start of quiz //

function startQuiz() {
    const question = getQuestion();
    displayQuiz();
    displayQuestion(question);
    startTimer();
}

document.getElementById('start-btn').addEventListener('click', startQuiz);

// Show Quiz //

function displayQuiz() {
    document.getElementById('quiz-area').classList.remove('hide');
    welcomeSection.classList.add('hide');
}


function getQuestion() {
    const currentQuestion = questionList[currentQuestionIndex];
    return currentQuestion;
}


function displayQuestion(questionData) {
    questionElement.innerText = questionData.question;
    answerButtonA.innerText = questionData.a;
    answerButtonB.innerText = questionData.b;
    answerButtonC.innerText = questionData.c;
    answerButtonD.innerText = questionData.d;
}

// Answer section to respond to clicks //

// Win game and Game over functions //

function gameOver(message) {
    document.getElementById('lose-message').innerText = message;
    document.getElementById('lose').classList.remove('hide');
    clearInterval(timer);
}

function winGame() {
    document.getElementById('win').classList.remove('hide');
    clearInterval(timer);
}

// Welcome section //

let welcomeSection = document.getElementById('welcome-section');

// How to section //

let howTo = document.getElementById("how-to-area");
let HowToBtn = document.getElementById('how-to-btn');
HowToBtn.addEventListener('click', function () {
    howTo.classList.remove('hide');
    welcomeSection.classList.add('hide');
});


function gameOver() {
    alert('Time is Up');
    clearInterval(timer);
}

function checkAnswer(event) {
    clearInterval(timer);
    const answer = event.target.id;
    const currentQuestion = questionList[currentQuestionIndex];
    console.info(JSON.stringify(currentQuestion));
    console.info(answer);
    if (answer === currentQuestion.correct) {
        score = score + 1;
        showNextQuestion();
    }
    else {
        gameOver('Wrong answer, game over.');
    }
}

function showNextQuestion() {
    if (currentQuestionIndex < questionList.length - 1) {
        currentQuestionIndex = currentQuestionIndex + 1;
        const question = getQuestion();
        displayQuestion(question);
        startTimer();
    }
    else {
        winGame();
    }
}
const answerButtonList = document.getElementsByClassName('answer');
for (var i = 0; i < answerButtonList.length; i++) {
    answerButtonList[i].addEventListener("click", checkAnswer);
}
// Quiz timer to reset every question //

function startTimer() {
    counter = 15;
    document.getElementById('count').innerHTML = counter;
    timer = setInterval(function () {
        counter--;

        if (counter >= 0) {
            id = document.getElementById('count');
            id.innerHTML = counter;
        }
        else {
            gameOver('Time is Up');
        }
    }, 1000);
}