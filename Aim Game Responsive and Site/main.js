let secret = false;
let score = 0;
let timeLeft = 3;
let timerInterval;
let gameActive = true;
let storedHighScore = localStorage.getItem("highScore");
let highScore = storedHighScore ? parseInt(storedHighScore) : 0;
document.getElementById("highScore").textContent = highScore;

const target = document.querySelector("#targetBtn");
const scoreDisplay = document.querySelector("#score");
const timerDisplay = document.querySelector("#timer");
const gameContainer = document.querySelector(".gameContainer");
const restartBtn = document.querySelector("#restartBtn");

function moveTarget() {
    if (!gameActive) return;

    let maxX = gameContainer.clientWidth - target.clientWidth;
    let maxY = gameContainer.clientHeight - target.clientHeight;

    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    target.style.left = randomX + "px";
    target.style.top = randomY + "px";
}

function targetBtnOnClick() {
    if (!gameActive) return;

    score++;
    scoreDisplay.textContent = score;
    resetTimer();
    moveTarget();
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 3;
    gameActive = true;
    timerDisplay.textContent = timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}

function resetTimer() {
    timeLeft = 3;
    timerDisplay.textContent = timeLeft;
}

function gameOver() {
    gameActive = false;
    if(score > highScore){
        highScore = score;
        localStorage.setItem("highScore", highScore);
        document.getElementById("highScore").textContent = highScore;
    }
    if(secret === true){
        alert("💖  <3");
    } else {
        alert("Süre Doldu Kardeşş! Puanın: " + score);
    }
}

function resetGame() {
    score = 0;
    scoreDisplay.textContent = score;
    startTimer();
    moveTarget();
}

restartBtn.addEventListener("click", resetGame);

startTimer();
moveTarget();
target.addEventListener("touchstart", targetBtnOnClick);

function secretPlanss(){
    let secretSpanSelectorLet = document.getElementById("secretSpan");
    secretSpanSelectorLet.style.display="block";
    secret = true;
}
