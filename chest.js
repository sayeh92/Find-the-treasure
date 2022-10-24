'use strict';
let random = Math.trunc(Math.random() * 3) + 1;
const text = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.number1').value);
    if (!guess) {
        text('No number!');
    } else if (guess === random) {
        text('Correct number!');
        document.querySelector('.number1').textContent = random;
        document.querySelector('body').style.backgroundColor = '#60b357';

      
    } else {
        text('Wrong Chest!');
        document.querySelector('body').style.backgroundColor = 'red';
    }
});
