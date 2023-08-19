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
        question: "Who won the 2023 Challenge Cup Final?",
        a: "St. Helens",
        b: "Hull FC",
        c: "Leigh Leopards",
        d: "Hull KR",
        correct: "c",
    },
    {
        question: "Who won the 2023 Challenge Cup Final?",
        a: "St. Helens",
        b: "Hull FC",
        c: "Leigh Leopards",
        d: "Hull KR",
        correct: "c",
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
                    <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                    <button onclick="history.go(0)">Play Again</button>
                `;
                }
            }
            else {
                quiz.innerHTML = `
                    <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                    <button onclick="history.go(0)">Play Again</button>
                `;
            }
        }
    });
}

