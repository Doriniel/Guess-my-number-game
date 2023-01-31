'use strict';

// Что нужно сделать: 
// + навесить обработчик на кнопку Проверки результата - туда функцию, которая считает и сравнивает результат с загаданным числом.
// + До хэндлера - реализовать создание рандомного числа от 1 до 20.
// + Сделать начальный счетчик - score.
// + Добавить изменение стилей при выйгрыше пользователя.
// + Добавить хайскор - чтобы считался и менялся.
// + На кнопку again! навесить события на изменение игры до первоначального вида.
// + Поправить все ошибки.
// + Отрефакторить код, чтобы не было повторений одного и того же кода (DRY principle).

let secretNumber = Math.trunc(Math.random() * 20) + 1; 
let numberField = document.querySelector('.number');
// numberField.textContent = secretNumber; // temporarely, later there will be "?".

let guessNumber;

let score = 20; // score должен быть больше единицы, т.к. всего 20 попыток угадать число.
let highscore = 0;
let scoreDisplay = document.querySelector('.score');
let highscoreDisplay = document.querySelector('.highscore');

let checkBtn = document.querySelector('.check');
let againBtn = document.querySelector('.again');

function showMessage(message) {
    document.querySelector('.message').textContent = message;
}


checkBtn.addEventListener('click', function () {
    // guessNumber - это строка, поэтому для сравнения либо нестрогое равенство, либо ставить Number перед значением для конвертации. 
    guessNumber = Number(document.querySelector('.guess').value);

    if (!guessNumber) {
        showMessage("⛔ Please, enter number between 1 and 20");

    } else if (guessNumber === secretNumber) {
        showMessage("🎉 Congratulations, you won!");
        numberField.textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        numberField.style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            highscoreDisplay.textContent = highscore;
        }

    } else if (guessNumber !== secretNumber) {
        if (score > 1) {
            showMessage(guessNumber > secretNumber ? "📈 Too high!" : "📉 Too low!");
            score--;
            scoreDisplay.textContent = score;

        } else {
            showMessage("💥 You lost!");
            scoreDisplay.textContent = 0;
        }
    }
});   

againBtn.addEventListener('click', function () {
        score = 20; 
        scoreDisplay.textContent = score;
        secretNumber = Math.trunc(Math.random() * 20) + 1;

        document.querySelector('.guess').value = '';
    
        showMessage('Start guessing...');
        numberField.textContent = '?';
        document.querySelector('body').style.backgroundColor = '#222';
        numberField.style.width = '15rem';
})
    



    // } else if (guessNumber > secretNumber) {
    //     if (score > 1) {
    //         showMessage("📈 Too high!");
    //         score--;
    //         scoreDisplay.textContent = score;
    //     } else {
    //         showMessage("💥 You lost!");
    //         scoreDisplay.textContent = 0;
    //     }

    // } else if (guessNumber < secretNumber) {
    //     if (score > 1) {
    //         showMessage("📉 Too low!");
    //         score--;
    //         scoreDisplay.textContent = score;
    //     } else {
    //         showMessage("💥 You lost!");
    //         scoreDisplay.textContent = 0;
    //     }
    // }










