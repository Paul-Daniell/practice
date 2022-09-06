// webpage element access.
let checkBtn = document.querySelector(".btn-check");
let attemptsLeftEl = document.querySelector("#attempts-left");
let txtNumber = document.querySelector(".input-number");
let messageEl = document.querySelector(".message");
let secretNumberEl = document.querySelector(".secret-number");
let body = document.querySelector("body");
let highScoreEl = document.querySelector(".current-high-score");
let currentScoreEl = document.querySelector("#current-score");
let newGamebtn = document.querySelector(".new-game");

// All global variables.
let secretNumber = Math.trunc(Math.random() * 25) + 1;
// console.log(secretNumber);
let currentScore = 20;
let attemptsLeft = 5;
let highScore = 0;
let userName;

while (userName === undefined || userName === null || userName.length === 0) {
  userName = prompt("Hoi, wat is je naam?");
}
if (userName != null) {
  document.getElementById("welcome").innerHTML =
    "Welkom " + userName + "! Zin in een spelletje?";
}

checkBtn.addEventListener("click", function () {
  if (attemptsLeft > 0) {
    attemptsLeft--;
    attemptsLeftEl.textContent = attemptsLeft;

    // Get the number entered by user
    let guess = Number(txtNumber.value);

    // No input
    if (guess === 0) {
      messageEl.textContent = "Graag een 1 of hoger invoeren!";
    }
    // guessed the correct number
    else if (guess === secretNumber) {
      messageEl.textContent =
        "Je hebt het spel gewonnen " +
        userName +
        "!" +
        " Speel nogmaals en anders een fijne dag gewenst";
      // Show secret number
      secretNumberEl.textContent = secretNumber;
      // Change backgroudcolor
      body.style.backgroundColor = "#5f9628";
      // Set high Score
      highScore = currentScore > highScore ? currentScore : highScore;
      highScoreEl.textContent = highScore;
    }
    // guessed wrong number
    else if (guess !== secretNumber) {
      if (currentScore > 0) {
        let message =
          guess > secretNumber
            ? "Dat is te hoog, gok lager!"
            : "Dat is te laag, gok hoger!";
        messageEl.textContent = message;
        currentScore--;
        currentScoreEl.textContent = currentScore;
      }
    }
  } else {
    messageEl.textContent =
      "Helaas, je hebt het spel verloren " +
      userName +
      "!" +
      " Verbeter je High Score of anders een fijne dag gewenst.";
    currentScoreEl.textContent = 0;
    attemptsLeftEl.textContent = 0;
    body.style.backgroundColor = "#dc143c";
  }
});

newGamebtn.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 25) + 1;
  currentScore = 20;
  attemptsLeft = 5;
  messageEl.textContent =
    "Welk getal staat er achter het vraagteken, raad jij het? ( 1 - 25)";
  currentScoreEl.textContent = currentScore;
  attemptsLeftEl.textContent = attemptsLeft;
  secretNumberEl.textContent = "?";
  txtNumber.value = "";
  body.style.backgroundColor = "#000";
});
