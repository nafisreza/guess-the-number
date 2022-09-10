"use strict"

// elements
const check = document.querySelector(".check")
const input = document.querySelector(".input-number")
const guessingText = document.querySelector(".guessing-text")
const correctAns = document.querySelector(".game-correct-answer")
const score = document.querySelector(".score")
const highScore = document.querySelector(".high-score")
const playAgain = document.querySelector(".play-again")

// variables
let SECRET_NUMBER = Math.floor(Math.random() * 21)
let SCORE = 20
let HIGH_SCORE = 0

// display guessing text
function displayGuessingText(text) {
    guessingText.textContent = text
}

// checking
check.addEventListener('click', function () {
    const inputNumber = Number(input.value)

    // when blank input
    if (!inputNumber) displayGuessingText('Enter a valid number.')

    // when input greater than 20
    else if (inputNumber > 20 || inputNumber < 1) displayGuessingText('Out of Range.')

    // when player wins
    else if (inputNumber === SECRET_NUMBER) {
        displayGuessingText("Correct Answer!")
        correctAns.textContent = SECRET_NUMBER
        correctAns.style.backgroundColor = "#222"
        document.body.style.backgroundColor = "salmon"

        confettis.style.visibility = 'visible';

        if (SCORE > HIGH_SCORE) {
            HIGH_SCORE = SCORE
            highScore.textContent = HIGH_SCORE
        }
    }


    // when player loses
    else if (inputNumber !== SECRET_NUMBER) {
        if (SCORE > 1) {
            displayGuessingText(
                inputNumber > SECRET_NUMBER ? 'Too high!' : 'Too Low!'
            );
            SCORE--;
            score.textContent = SCORE;
        } else {
            displayGuessingText("Game Over")
            score.textContent = 0
        }
    }
})

    // play again
playAgain.addEventListener('click', function () {
    SECRET_NUMBER = Math.floor(Math.random() * 21)
    SCORE = 20
    score.textContent = SCORE

    displayGuessingText("Start guessing...")
    document.body.style.backgroundColor = "#222"
    correctAns.style.backgroundColor = "salmon"
    correctAns.textContent = "?"
    input.value = ""

    confettis.style.visibility = 'hidden';

 
})

// confetti animation
var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

let confettis = document.querySelector("#my-canvas")
