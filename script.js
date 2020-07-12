var currentQuestion = 0; 
var score = 0; 
var totQuestions = questions.length; 

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result'); 

function loadQuestion (questionIndex) {
    
}

               









//Quiz Questions and Answers 













//timed quiz function

var secondsLeft = 90;

function setTimer() {

    var countdown = setInterval(function () {
        secondsLeft--;
        timerElement.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0 || questionNumber === questions.length) {
            clearInterval(countdown);
                   }
    }, 1000);
}


