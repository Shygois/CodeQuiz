var questionArray = [
  {
    q: 'Commonly used data types DO NOT include:',
    c: [
      '1.strings', '2.booleans', '3.alerts', '4.numbers'
    ],
    a: '2'
  },
  {
    q: 'The condition in an if / else statement is enclosed with ______.',
    c: [
      '1.quotes', '2.curly brackets', '3.parenthesis', '4.square brackets'
    ],
    a: '1'
  },
  {
    q: 'Arrays in JavaScript can be used to store __________.',
    c: [
      '1.numbers and strings', '2.other arrays', '3.booleans', '4.all of the above'
    ],
    a: '3'
  },
  {
    q: 'String values must be enclosed within ______ when being assigned to variables.',
    c: [
      '1.commmas', '2.curly brackets', '3.quotes', '4.parenthesis'
    ],
    a: '2'
  },
  {
    q: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    c: [
      '1.Javascript', '2.terminal/bash', '3.for loops', '4.console.log'
    ],
    a: '3'
  },
]
var timeLeft = 75;
var questionBoxEl = document.querySelector("#question-box");
var startButtonEl = document.querySelector("#start-btn");
var codeInstructionsEl = document.querySelector("#code-instructions");
var quizQuestion = 0

var deleteEl = function(El) {
    El.remove();
  };

var addQandA = function() {
    // add h3 for question
    var questionEl = document.createElement("div");
    questionEl.id = "question";
    questionEl.className = "question";
    questionEl.innerHTML = `<h3 class='question'>${questionArray[quizQuestion].q}</h3>`
    questionBoxEl.appendChild(questionEl);
    // add 4 buttons with different answers to questions
    var answerEl = document.createElement("div");
    answerEl.id = "answer";
    answerEl.className = "answer";
    answerEl.innerHTML = `<button class='answer' onclick="notification('0')">${questionArray[quizQuestion].c[0]}</button><button class='answer' onclick="notification('1')">${questionArray[quizQuestion].c[1]}</button><button class='answer' onclick="notification('2')">${questionArray[quizQuestion].c[2]}</button><button class='answer' onclick="notification('3')">${questionArray[quizQuestion].c[3]}</button>`
    questionBoxEl.appendChild(answerEl);
  };

  function notification (answer) {
    var p = document.createElement("p");
    if (answer === questionArray[quizQuestion].a)
    {
      p.innerHTML = "That's Correct!";
    } else {
      p.innerHTML = "That's Incorrect!";
      timeLeft -= 10;
    }
    questionBoxEl.appendChild(p); 
    quizQuestion++; 
    addQandA ();
  }

  var changeTime = function() {
    var timerEl = document.querySelector("#timer");
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




