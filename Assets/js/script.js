var startButtonEl = document.querySelector("#start-btn");
var codeInstructionsEl = document.querySelector("#code-instructions");

var deleteEl = function(El) {
    El.remove();
  };

var addQandA = function() {
    // add h3 for question
    var questionBoxEl = document.querySelector("#question-box");
    var questionEl = document.createElement("div");
    questionEl.id = "question";
    questionEl.className = "question";
    questionEl.innerHTML = "<h3 class='question'>Commonly used data types DO NOT include:</h3>"
    questionBoxEl.appendChild(questionEl);
    // add 4 buttons with different answers to questions
  };

  var changeTime = function() {
    var timerEl = document.querySelector("#timer");
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
      if (timeLeft > 0) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      }  else {
        timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      alert("Times up!");
      }
    }, 1000);
    
  };

  var startButtonHandler = function () {
    // remove coding quiz text & start button     
    deleteEl(codeInstructionsEl);
    // add html elements for question and answer buttons
    addQandA();
    // change the time (and make it count down)
    changeTime();
  };


// click start button
startButtonEl.addEventListener("click", startButtonHandler);
