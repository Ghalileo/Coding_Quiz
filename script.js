//Variables
var timerr = document.querySelector(".time");
var start = document.getElementById("begin");
var displayQ = document.getElementById("quest");
var displayA = document.getElementById("ansa");
var displayB = document.getElementById("ansb");
var displayC = document.getElementById("ansc");
var displayD = document.getElementById("ansd");
var questionNum = 0;
var top = document.getElementById("Introduction");
var choose = document.querySelector(".containerSpace");
var lastQ = "";
var grade = document.getElementById("results");
//Object of questions 
var options = {

  "Questions" :[
    "1. Who is the hero of time?",
    "2.What is a power of the sharringan?",
  "3.How many hours outside of class should you spend coding?",
  "4.Who is the king of westeros?",
  "5.Which of the following is Ose's Favorite color?",
   "placeholder"],

  "CorrectAnswers":["D. Link","D. All of the above","D. between 30 to 40","D. Who cares, the ending is trash", "C. Purple"],
   
  "PotentialAnswers": [ 
    ["A. Mark", "B James", "C. Cloud","D. Link"],
    ["A. Flame Control", "B. Amaterasu", "C. Susanoo","D. All of the above"],
    ["A. None I am a pro", "B. 2", "C. Idk at least 10", "D. between 30 to 40"],
    ["A.Bran", "B. Robert","C. Joeffrey","D. Who cares, the ending is trash"],
    ["A.Green" ,"B. Red", "C. Purple", "D. White"],
    [],
    ],
};
var secondsLeft = 60;
//Function to continue to the next questions and answers 
function advancement () {
  displayQ.innerHTML = options.Questions[questionNum];
  displayA.innerHTML = options.PotentialAnswers[questionNum][0];
  displayB.innerHTML = options.PotentialAnswers[questionNum][1];
  displayC.innerHTML = options.PotentialAnswers[questionNum][2];
  displayD.innerHTML = options.PotentialAnswers[questionNum][3]; 
  questionNum ++;  
  
};


//Function to alert if the correct answer was chosen or not 

//Function to start game
function beginGame() {
  setTime();
  advancement();
  var x = document.querySelector(".containerOne");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  choose.setAttribute("class" , "unhide");
}
//Function for timer
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerr.textContent = secondsLeft + " Each moment counts.  Keep this in mind";

    if(secondsLeft === 0 || questionNum === 6)  {
      clearInterval(timerInterval);
      choose.setAttribute("class", "hide");
      grade.setAttribute("class", "unhide");
    }
    
  }, 1000);
}
//Function to Input answer on question 
function showresults () {
  const ansContainers = choose.querySelectorAll('.btn');
  let numbercorrect = 0;
  const userchoice = options.PotentialAnswers;
  options.foreach(lastQ, questionNum); {
    const ansContainer = answerContainers[questionNum]
    const selection = `input[name=question${questionNum}]:btn`;
    const userAnswer = (answerContainer.querySelector(selection) || {}).value;
  };
  if(userAnswer === options.CorrectAnswers){
    numCorrect++;
    console.log(userAnswer);
  }
  else {
    numCorrect--;
  }
}

//Event to begin game with timer
start.addEventListener("click" , beginGame);
//Event to andvance to the next question
displayA.addEventListener("click", advancement);
displayB.addEventListener("click", advancement);
displayC.addEventListener("click", advancement);
displayD.addEventListener("click", advancement);
userchoice.addEventListener("click", showresults);


