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
       
        // document.querySelector('.number').style.width = '30rem';
    } else if (guess > random) {
        text('Wrong Chest!');
        document.querySelector('body').style.backgroundColor = '#red';
    } else if (guess < random) {
        document.querySelector('body').style.backgroundColor = '#red';
        text('Wrong Chest!!');
        
    }
});
