// get elements and buttons
const navBar = document.querySelector("#top-nav");
const highScores = document.querySelector("#high-scores");
const counter = document.querySelector("#counter");
const startBtn = document.querySelector("#start-btn");
const startSection = document.querySelector("#start-section");
const questions = document.querySelector("#questions");
const currentQuestion = document.querySelector("#current-question");
const select1 = document.querySelector("#select-1");
const select2 = document.querySelector("#select-2");
const select3 = document.querySelector("#select-3");
const select4 = document.querySelector("#select-4");
const correct = document.querySelector("#correct");
const wrong = document.querySelector("#wrong");
const endGame = document.querySelector(".end-game");
const gameOverCard = document.querySelector(".game-over");
const finalScore = document.querySelector("#final-score");

// variables
let timer = 276;
let questionsRemaining = 6;

// start game

startBtn.addEventListener("click", function () {
  startSection.classList.toggle("hide");
  startSection.classList.toggle("start");
  questions.classList.toggle("hide");
  // set timer
  const countdown = setInterval(function () {
    timer--;
    counter.textContent = `Time: ${timer}`;

    if (timer <= 0 || questionsRemaining === 0) {
      clearInterval(countdown);
      gameOver();
    }
  }, 1000);
});
pickAnswer1();
// first question
function pickAnswer1() {
  currentQuestion.textContent =
    'How do you write "hello world" to the console ?';
  select1.textContent = '1. console("hello world");';
  select1.addEventListener("click", function () {
    timer -= 10;
    wrong.classList.add("show");
  });

  select2.textContent = '2. print("hello world);';
  select2.addEventListener("click", function () {
    timer -= 10;
    wrong.classList.add("show");
  });
  select3.textContent = '3. console.log("hello world");';
  select3.addEventListener("click", function () {
    wrong.classList.remove("show");
    correct.classList.add("show");
    questionsRemaining--;
    console.log(questionsRemaining);
    pickAnswer2();
  });

  select4.textContent = '4. p:("hello world");';
  select4.addEventListener("click", function () {
    timer -= 10;
    wrong.classList.add("show");
  });
}

// second question
function pickAnswer2() {
  currentQuestion.textContent = "Which element do you put Javascript in ?";
  select1.textContent = "1. <script>";
  select1.addEventListener("click", function () {
    wrong.classList.remove("show");
    correct.classList.add("show");
    questionsRemaining--;
    console.log(questionsRemaining);
    pickAnswer3();
  });

  select2.textContent = "2. <var>";
  select2.addEventListener("click", function () {
    timer -= 10;
    correct.classList.remove("show");
    wrong.classList.add("show");
  });
  select3.textContent = "3. <link>";
  select3.addEventListener("click", function () {
    timer -= 10;
    correct.classList.remove("show");
    wrong.classList.add("show");
  });

  select4.textContent = "4. <section>";
  select4.addEventListener("click", function () {
    timer -= 10;
    correct.classList.remove("show");
    wrong.classList.add("show");
  });
}

// third question
function pickAnswer3() {
  currentQuestion.textContent = "Which expression adds 1 to variable x = 1; ?";
  select1.textContent = "1. x + 1;";
  select1.addEventListener("click", function () {
    timer -= 10;
    correct.classList.remove("show");
    wrong.classList.add("show");
  });

  select2.textContent = "2. x++; ";
  select2.addEventListener("click", function () {
    timer -= 10;
    correct.classList.remove("show");
    wrong.classList.add("show");
  });
  select3.textContent = "3. x += 1 ";
  select3.addEventListener("click", function () {
    timer -= 10;
    correct.classList.remove("show");
    wrong.classList.add("show");
  });

  select4.textContent = "4. all the above";
  select4.addEventListener("click", function () {
    wrong.classList.remove("show");
    correct.classList.add("show");
    questionsRemaining--;
    console.log(questionsRemaining);
    pickAnswer4();
  });
}
// forth question
function pickAnswer4() {
  currentQuestion.textContent = "What is a correct way to declare a variable ?";
  select1.textContent = "1. var = 6;";
  select1.addEventListener("click", function () {
    timer -= 10;
    correct.classList.remove("show");
    wrong.classList.add("show");
  });

  select2.textContent = '2. let == "John"; ';
  select2.addEventListener("click", function () {
    timer -= 10;
    correct.classList.remove("show");
    wrong.classList.add("show");
  });
  select3.textContent = "3. let x = 10; ";
  select3.addEventListener("click", function () {
    wrong.classList.remove("show");
    correct.classList.add("show");
    questionsRemaining--;
    console.log(questionsRemaining);
    pickAnswer5();
  });

  select4.textContent = "4. all the above";
  select4.addEventListener("click", function () {
    timer -= 10;
    correct.classList.remove("show");
    wrong.classList.add("show");
  });
}

// fifth and final question
function pickAnswer5() {
  currentQuestion.textContent =
    "How many else statements can you have in an if statement ? ";
  select1.textContent = "1. As many as you like";
  select1.addEventListener("click", function () {
    timer -= 10;
    correct.classList.remove("show");
    wrong.classList.add("show");
  });

  select2.textContent = "2. None; ";
  select2.addEventListener("click", function () {
    timer -= 10;
    correct.classList.remove("show");
    wrong.classList.add("show");
  });
  select3.textContent = "3. Only one";
  select3.addEventListener("click", function () {
    wrong.classList.remove("show");
    correct.classList.add("show");
    questionsRemaining--;
    console.log(questionsRemaining);
    gameOver();
  });

  select4.textContent = "4. Only two";
  select4.addEventListener("click", function () {
    timer -= 10;
    correct.classList.remove("show");
    wrong.classList.add("show");
  });
}

function gameOver() {
  questions.classList.add("hide");
  gameOverCard.classList.remove("hide");
  finalScore.textContent = `Your final score is ${timer}.`;
}
// const questionList = {
//   q1: 'How do you write "hello world" to the console?',
//   a1: [
//     '1. console("hello world");',
//     '2. print("hello world");',
//     '3. console.log("hello world");',
//     '4 p:("hello world");',
//   ],
//   correctAnswer1: 3,
// };
