function populate(){
    if(quiz.isEnded()){
        showScores();

        console.log(quiz.score);
    }
    else{
        // show the  question
        var element = document.getElementById('question');
        element.innerHTML = quiz.getQuestionIndex().text;
        
        // show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i <choices.length; i++){
            var element = document.getElementById('choice'+i);
            element.innerHTML = choices[i];   
            guess("btn" + i, choices[i]);         
        }

        showProgress();
        console.log(quiz.score);
    }
};

function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
};

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores(){
    var gameoverHTML = "<h1>result</h1>";
        gameoverHTML += "<h2 id='score' style='padding:50px 60px;'>Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameoverHTML;     
};

var questions =[
    new Question("Which one is not an object oriented programming language ?", ["Java", "C#", "C++" , "C"], "C"),
    new Question("Which language is used for styling web pages ? ", ["HTML", "Jquery", "CSS" , "Js"], "CSS"),
    new Question("There are _____ main components of object oriented programming. ", ["1", "2", "4" , "6"], "4"),
    new Question("Which language is used for web apps ? ", ["PHP", "Python", "React" , "All"], "All"),
    new Question("MVC is a _______.", ["Language", "Library", "Framework" , "All"], "Framework") 
];

var quiz = new Quiz(questions);

populate();