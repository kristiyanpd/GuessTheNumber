'use strict';

let secretNumber = Math.trunc(Math.random()* 20) + 1
let score = 10;
let highscore = 0;

document.querySelector('.score').textContent = score;

let win = new Audio ('win.mp3');
let lose = new Audio ('lose.mp3');
let error = new Audio ('error.mp3');

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if(!guess) {
        displayMessage('⛔ Не е въведено число!');

    // When player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Браво! Познахте числото!')
        document.querySelector('.check').style.visibility = "hidden";
        win.play();
        highscore++;
        document.querySelector('.highscore').textContent = highscore;

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347'

        document.querySelector('.number').style.width = '30rem'

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Числото е прекалено голямо!' : '📉 Числото е прекалено малко!');
            score--;
            document.querySelector('.score').textContent = score;
            error.play();
        } else {
            displayMessage('💣 Вие изгубихте!');
            document.querySelector('.check').style.visibility = "hidden";
            document.querySelector('.score').textContent = 0;
            highscore = 0;
            document.querySelector('.highscore').textContent = highscore;
            lose.play();
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('.check').style.visibility = "visible";
    score = 10; 
    secretNumber = Math.trunc(Math.random()* 20) + 1

    displayMessage('Въведи число...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'    
});