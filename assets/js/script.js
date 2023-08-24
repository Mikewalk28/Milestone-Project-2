// Sample question https://foolishdeveloper.com/javascript-quiz-app/#:~:text=Create%20an%20HTML%20structure%20for,options%2C%20and%20the%20correct%20answer. for start of quiz layout and code style//
// https://www.cosmopolitan.com/uk/worklife/a32433256/best-hard-general-knowledge-quiz-questions/ for some of the questions //
// https://www.welovequizzes.com/multiple-choice-quiz-questions-and-answers/#google_vignette question bank //
// https://www.readersdigest.ca/culture/trivia-questions/ question bank //
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
    {
        question: "Which Disney Princess has the least amount of screen time?",
        a: "Aurora",
        b: "Snow White",
        c: "Merida",
        d: "Jasmine",
        correct: "a",
    },
    {
        question: "What year did Vincent Van Gogh die?",
        a: "1899",
        b: "1910",
        c: "1890",
        d: "1887",
        correct: "c",
    },
    {
        question: "How many digits are in Pi?",
        a: "62.8 trillion decimals",
        b: "415 trillion decimals",
        c: "58.4 billion decimals",
        d: "198 billion decimals",
        correct: "a",
    },
    {
        question: "Which English city was once known as Duroliponte?",
        a: "Carlisle",
        b: "Cambridge",
        c: "Newcastle",
        d: "Cardiff",
        correct: "b",
    },
    {
        question: "If you have cryophobia, what are you afraid of?",
        a: "Crying",
        b: "Ice/The Cold",
        c: "Tombs",
        d: "Being buried alive",
        correct: "b",
    },
    {
        question: "In 1768, Captain James Cook set out to explore which ocean?",
        a: "Pacific Ocean",
        b: "Atlantic Ocean",
        c: "Indian Ocean",
        d: "Arctic Ocean",
        correct: "a",
    },
    {
        question: "What is the speed of sound?",
        a: "120 Km/h",
        b: "1,200 Km/h",
        c: "400 Km/h",
        d: "700 Km/h",
        correct: "b",
    },
    {
        question: "In total, how many novels were written by the Bronte Sisters?",
        a: "4",
        b: "5",
        c: "6",
        d: "7",
        correct: "d",
    },
    {
        question: "What was the first country to use tanks in combat during World War I?",
        a: "France",
        b: "Germany",
        c: "Britain",
        d: "Russia",
        correct: "c",
    },
    {
        question: "Which two months are named after Emperors of the Roman Empire?",
        a: "January and February",
        b: "March and April",
        c: "May and June",
        d: "July and August",
        correct: "d",
    },
    {
        question: "Which of the following songs was the top-selling hit in 2019?",
        a: "Someone You Loved",
        b: "Old Town Road",
        c: "I Don't Care",
        d: "Bad Guy",
        correct: "a",
    },
    {
        question: "The phrase: 'I think, therefore i am' was coined by which philosopher?",
        a: "Socrates",
        b: "Plato",
        c: "Aristotle",
        d: "Descartes",
        correct: "d",
    },
    {
        question: "Who is known as the Patron Saint of Spain?",
        a: "St Patrick",
        b: "St Benedict",
        c: "St James",
        d: "St John",
        correct: "c",
    },
    {
        question: "What is the name of the first book of the Old Testament in the Bible?",
        a: "Exodus",
        b: "Genesis",
        c: "Proverbs",
        d: "Matthew",
        correct: "b",
    },
    {
        question: "How many time zones are there in total in the world?",
        a: "8",
        b: "16",
        c: "24",
        d: "32",
        correct: "c",
    },
    {
        question: "What geothermal Icelandic site has the same name as a 1980 movie?",
        a: "Xanadu",
        b: "The Shining",
        c: "Heaven's Gate",
        d: "The Blue Lagoon",
        correct: "d",
    },
    {
        question: "What actor said, “If you had been a public figure since the time you were a toddler… maybe you too would value privacy above all else”?",
        a: "Leonardo DiCaprio",
        b: "Jodie Foster",
        c: "Shirley Temple",
        d: "Daniel Radcliffe",
        correct: "b",
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
let blocked = false;

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

function checkAnswer(event) {
    if (blocked === false) {

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

// Win game and Game over functions //


function gameOver(message) {
    document.getElementById('lose-message').innerText = message;
    document.getElementById('lose').classList.remove('hide');
    clearInterval(timer);
    blocked = true;
}

function winGame() {
    document.getElementById('win').classList.remove('hide');
    clearInterval(timer);
    blocked = true;
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


// Quiz timer to reset every question //
// https://stackoverflow.com/questions/61807525/how-to-create-a-quiz-countdown-timer-for-each-question to help with the timer //
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