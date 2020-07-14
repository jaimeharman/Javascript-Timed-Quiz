var currentQuestion = 0; 
var score = 0; 
 
//Select elements from HTML
var quizContainer = document.getElementById('quizContainer');
var resultsContainer = document.getElementById('resultsContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var scoreContainer = document.getElementById('scoreContainer'); 
var timer = document.getElementById('timer');

//Questions
var questions = [{
    question: "Who invented Javascript?",
    option1: "Douglas Crawford",
    option2: "Sheryl Sandberg",
    option3: "Brenden Eich",
    option4: "John Resig",
    answer: "3"
},
{

    question: "How is Javascript defined?",
    option1: "client-side scripting language",
    option2: "client and server-side scripting language",
    option3: "text-based scripting language",
    option4: "styling language",
    answer: "2"
},

{
    question: "Which is a Javascript data type?",
    option1: "boolean",
    option2: "header",
    option3: "border-radius",
    option4: "font-family",
    answer: "1"

}];

var totQuestions = questions.length;

//Timer starts at 30 seconds and counts down; 
var secondsLeft = 30;
function startTimer () {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
    if(secondsLeft === 0) { 
        clearInterval(timerInterval); 
        timer.textContent = ("Time's up!") 
        }
    // else if (finishQuiz) {
    //   clearInterval(timerInterval) 
    // }
    }, 1000); 
      }


//Question is loaded and the options are displayed for user to select from
function loadQuestion (questionIndex) {
     var q = questions[questionIndex]; 
    questionEl.textContent = (questionIndex + 1) + '.' + q.question;
    opt1.textContent = q.option1; 
    opt2.textContent = q.option2;
    opt3.textContent = q.option3
    opt4.textContent = q.option4;
};
//User can only select from options given and if user does not answer, alert will pop up asking user to answer question
function loadNextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('Please select your answer!');
        return; 
    }
//If the correct answer is selected, score will increase
    var answer = selectedOption.value; 
    if(questions[currentQuestion].answer === answer){
        score+=5; 
    }
//If question is wrong, no score will be added and user will click next button to continue the quiz
    selectedOption.checked = false; 
    currentQuestion++; 
    if(currentQuestion == totQuestions -1){
        nextButton.textContent = 'Finish';
    }
//At the end of the quiz, results will be displayed for user
    if(currentQuestion == totQuestions){
        quizContainer.style.display = 'none';
        resultsContainer.style.display = '';
        scoreContainer.textContent = 'Your Score:' + score; 
        return; 
    }
    loadQuestion(currentQuestion);
}

//Submit initials function on HTML
function submitInitials() {
    var name = document.getElementById('inputField').value;
    console.log(name);

//Set name to local storage
localStorage.setItem('initials', name);

//Pull information from local storage and append to scoreOne, scoreTwo, scoreThree
var highScoreArray = [];
var scoreObj = {
    name: name,
    score: score
}
//storageScore is all the information in local storage
var storageScore = JSON.parse(window.localStorage.getItem('highScore'));
console.log(storageScore)

//iterate through storageScore and add information to highScoreArray
for ( var i = 0; i < storageScore.length; i++) {
    highScoreArray.push(storageScore[i])
}
//Add new score to highScoreArray
highScoreArray.push(scoreObj);

//Push all scores into local storage
localStorage.setItem("highScore", JSON.stringify(highScoreArray));

var totalStorageScore = JSON.parse(window.localStorage.getItem('highScore'));
console.log(totalStorageScore)

//Target score Id and set it's HTML to local storage objects name and score
document.getElementById("scoreOne").innerHTML = totalStorageScore[0].name + " " + totalStorageScore[0].score;
document.getElementById("scoreTwo").innerHTML = totalStorageScore[1].name + " " + totalStorageScore[1].score;
document.getElementById("scoreThree").innerHTML = totalStorageScore[2].name + " " + totalStorageScore[2].score;

}

//Calling functions
startTimer();
loadQuestion(currentQuestion);
