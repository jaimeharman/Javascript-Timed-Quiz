//Get Elements in our InnerHTML
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const scoreContainter = document.getElementById("scoreContainer");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
//Create an array of questions used for the quiz
let questions = [
    {
        question: "What does HTML stand for?", 
        choiceA: "hyper Text Markup Language",
        choiceB: "Hyperlinks and Text Markup Languages", 
        choiceC: "Home Tool Markup Language",
        correct: "A"
    }, 
    
    {
        question: "What does CSS stand for?",
        choiceA: "Core Style Sheet",
        choiceB: "Cascading Style Sheets",
        choiceC: "Common Style Sheets",
        correct: "B"
    },

    {
        question: "The external Javascript file must contain <script> tag? True or False?",
        choiceA: "True",
        choiceB: "False",
        choiceC: "Sometimes, depends on situation",
        correct: "B"
    },
]

questions[0].question
questions[0].choiceA
questions[0].choiceB
questions[0].choiceC
questions[0].correct


