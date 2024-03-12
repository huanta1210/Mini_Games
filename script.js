
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let scoreInput = 20;
let highScoreInput = 0;

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
console.log(highScoreInput);
btnAgain.onclick = () => {
    let secretNumber = Math.trunc(Math.random() * 20) + 1;
    let guess = document.querySelector('.guess');
    let message = document.querySelector('.message');
    let score = document.querySelector('.score');
    let highScore = document.querySelector('.highscore');

    guess.value = '';
    message.textContent = 'Start guessing...';
    score.textContent = scoreInput;

    if (scoreInput > highScore) {
        scoreInput = highScore;
    }

};

btnCheck.onclick = function () {
    const guess = Number(document.querySelector('.guess').value);
    const message = document.querySelector('.message');
    const score = document.querySelector('.score');
    const highScore = document.querySelector('.highscore');
    const body = document.querySelector('body');
    if (!guess) {
        message.textContent = '🪺No Number';
    } else if (guess === secretNumber) {

        message.textContent = '🎇Correct Number';
        highScore.textContent = scoreInput;
        body.style.backgroundColor = "green";

    } else if (guess !== secretNumber) {

        if (scoreInput > 1) {
            message.textContent = guess > secretNumber ? '📉 To high' : '📈 To low';
            scoreInput--;
            score.textContent = scoreInput;
        } else {
            message.textContent = '💥You lose game';
            score.textContent = 0;
        }

    }

}