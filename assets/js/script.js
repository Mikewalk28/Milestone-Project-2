// Sample question //
const quizData = [
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
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const answerButtonA = document.getElementById("a");
const answerButtonB = document.getElementById("b");
const answerButtonC = document.getElementById("c");
const answerButtonD = document.getElementById("d");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};

// Quiz to react to user clicks for +1 score/game over upon incorrect //
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    answerButtonA.innerText = currentQuizData.a;
    answerButtonB.innerText = currentQuizData.b;
    answerButtonC.innerText = currentQuizData.c;
    answerButtonD.innerText = currentQuizData.d;
};

loadQuiz();

const answerButtonList = document.getElementsByClassName('answer');
for (var i = 0; i < answerButtonList.length; i++) {
    answerButtonList[i].addEventListener("click", (event) => {
        const answer = event.target.id;
        if (answer) {
            if (answer === quizData[currentQuiz].correct) {
                score++;

                currentQuiz++;
                if (currentQuiz < quizData.length) {
                    loadQuiz();
                }
                else {
                    quiz.innerHTML = `
                    <h2>You answered ${score} questions correctly</h2>
                    <button onclick="history.go(0)">Play Again</button>
                `;
                }
            }
            else {
                quiz.innerHTML = `
                    <h2>You answered ${score} questions correctly</h2>
                    <button onclick="history.go(0)">Play Again</button>
                `;
            }
        }
    });
}
// Welcome area link //
let welcomeSection = document.getElementById('welcome-section');

// Instructions link //
let howTo = document.getElementById("how-to-area");
    let HowToBtn = document.getElementById('how-to-btn');
    HowToBtn.addEventListener('click', function() {
        howTo.classList.remove('hide');
        welcomeSection.classList.add('hide');
    });

// Play game link //
let quizArea = document.getElementById('quiz-area');
    let startBtn = document.getElementById('start-btn');
    startBtn.addEventListener('click', function() { 
        quizArea.classList.remove('hide');
        welcomeSection.classList.add('hide');
    }); 

// Quiz timer // 
var counter = 15;             
var questionsCount = 0;       

//Questions array
var questions = [
    "Question 1", "Question 2", "Question 3"
];

questionDivId = document.getElementById('question');

setInterval(function () {
    counter--;

    if (counter >= 0) {
        id = document.getElementById('count');
        id.innerHTML = counter;
    }
    if (counter === 0) {
        id.innerHTML = 'Times Up!';
        counter = 15;
        questionsCount++;
    }

    //To check if all questions are completed or not
    if (questionsCount === questions.length) {
        questionDivId.innerHTML = "Congratulations! You beat the Endless Quiz!";
        id.innerHTML = "";
    } else {
        questionDivId.innerHTML = questions[questionsCount];
    }
}, 1000);

function goToNextQuestion() {
    questionsCount++;
    counter = 15;
}