var currentQuestion = 0; 
var score = 0; 
 

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result'); 
var timer = document.getElementById('timer');

var questions = [{
    question: "Who invented Javascript?",
    option1: "Douglas Crawford",
    option2: "Sheryl Sandberg",
    option3: "Brenden Eich",
    answer: "3"
},
{

    question: "How is Javascript defined?",
    option1: "client-side scripting language",
    option2: "client and server-side scripting language",
    option3: "text-based scripting language",
    answer: "2"
},

{
    question: "Which is a Javascript data type?",
    option1: "boolean",
    option2: "header",
    option3: "border-radius",
    answer: "1"

}];

var totQuestions = questions.length;
function loadQuestion (questionIndex) {
     var q = questions[questionIndex]; 
    questionEl.textContent = (questionIndex + 1) + '.' + q.question;
    opt1.textContent = q.option1; 
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
};

function loadNextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('Please select your answer!');
        return; 
    }
    var answer = selectedOption.value; 
    if(questions[currentQuestion].answer === answer){
        score+=1; 
    }

    selectedOption.checked = false; 
    currentQuestion++; 
    if(currentQuestion == totQuestions -1){
        nextButton.textContent = 'Finish';
    }
    if(currentQuestion == totQuestions){
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score; 
        return; 
    }
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
