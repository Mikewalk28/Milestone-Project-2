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

// Simplifying code in easier to read segments from code listed below //
function displayQuiz() {
    document.getElementById('quiz-area').classList.remove('hide');
    welcomeSection.classList.add('hide');
}


function getQuestion() {
    const currentQuestion = questionList[currentQuestionIndex];
    currentQuestionIndex = currentQuestionIndex + 1;
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



// Welcome section //
let welcomeSection = document.getElementById('welcome-section');
// How to section //
let howTo = document.getElementById("how-to-area");
     let HowToBtn = document.getElementById('how-to-btn');
     HowToBtn.addEventListener('click', function() {
         howTo.classList.remove('hide');
         welcomeSection.classList.add('hide');
     });


function gameOver() {
    alert('Time is Up');
    clearInterval(timer);
}

// Quiz timer to reset every question //

function startTimer() {
    timer = setInterval(function () {
        counter--;

        if (counter >= 0) {
            id = document.getElementById('count');
            id.innerHTML = counter;
        }
        else {
            gameOver();
        }
    }, 1000);
}

// Start of quiz //
function startQuiz() {
    const question = getQuestion();
    displayQuiz();
    displayQuestion(question);
    startTimer();
}


document.getElementById('start-btn').addEventListener('click', startQuiz);



// const deselectAnswers = () => {
//     answerElements.forEach((answer) => (answer.checked = false));
// };

// // Quiz to react to user clicks for +1 score/game over upon incorrect //
// const loadQuiz = () => {
//     deselectAnswers();
//     const currentQuizData = quizData[currentQuiz];
//     displayQuestion()
//     // questionElement.innerText = currentQuizData.question;
//     // answerButtonA.innerText = currentQuizData.a;
//     // answerButtonB.innerText = currentQuizData.b;
//     // answerButtonC.innerText = currentQuizData.c;
//     // answerButtonD.innerText = currentQuizData.d;
//     startTimer();
// };

// loadQuiz();

// const answerButtonList = document.getElementsByClassName('answer');
// for (var i = 0; i < answerButtonList.length; i++) {
//     answerButtonList[i].addEventListener("click", (event) => {
//         const answer = event.target.id;
//         if (answer) {
//             if (answer === quizData[currentQuiz].correct) {
//                 score++;

//                 currentQuiz++;
//                 if (currentQuiz < quizData.length) {
//                     loadQuiz();
//                 }
//                 else {
//                     quiz.innerHTML = `
//                     <h2>You answered ${score} questions correctly</h2>
//                     <button onclick="history.go(0)">Play Again</button>
//                 `;
//                 }
//             }
//             else {
//                 quiz.innerHTML = `
//                     <h2>You answered ${score} questions correctly</h2>
//                     <button onclick="history.go(0)">Play Again</button>
//                 `;
//             }
//         }
//     });
// }
// // Welcome area link //
// let welcomeSection = document.getElementById('welcome-section');

// // Instructions link //
// let howTo = document.getElementById("how-to-area");
//     let HowToBtn = document.getElementById('how-to-btn');
//     HowToBtn.addEventListener('click', function() {
//         howTo.classList.remove('hide');
//         welcomeSection.classList.add('hide');
//     });

// // Play game link //
// let quizArea = document.getElementById('quiz-area');
//     let startBtn = document.getElementById('start-btn');
//     startBtn.addEventListener('click', function() { 
//         quizArea.classList.remove('hide');
//         welcomeSection.classList.add('hide');
//     }); 

// // Quiz timer - courtesy of stackoverflow.com and then modified to suit how i wanted it to react with my quiz // 
// var counter = 15;             
// var questionsCount = 0;       

// //Questions array
// var questions = [
//     "Question 1", "Question 2", "Question 3"
// ];

// questionDivId = document.getElementById('question');


// function startTimer(){
//     timer =  setInterval(function () {
//         counter--;

//         if (counter >= 0) {
//             id = document.getElementById('count');
//             id.innerHTML = counter;
//         }
//         if (counter === 0) {
//             id.innerHTML = 'Times Up!';
//             counter = 15;
//             questionsCount++;
//         }

//         //To check if all questions are completed or not
//         if (questionsCount === questions.length) {
//             questionDivId.innerHTML = "Congratulations! You beat the Endless Quiz!";
//             id.innerHTML = "";
//         } else {
//             questionDivId.innerHTML = questions[questionsCount];
//         }
//     }, 1000);
// }

// function goToNextQuestion() {
//     questionsCount++;
//     counter = 15;
// }