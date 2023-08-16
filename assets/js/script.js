const quizData = [
        {
            question: "Who won the 2023 Challenge Cup Final?",
            a: "St. Helens",
            b: "Hull FC",
            c: "Leigh Leopards",
            d: "Hull KR",
            correct: "c",
        },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");