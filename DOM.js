
let List = document.querySelector('body');
List.classList.add('body')

const main = document.createElement('div');
main.classList.add('main');
main.textContent = 'test' ;

const calculator = document.createElement('div');
calculator.classList.add('calculator');

const screen = document.createElement('div');
screen.classList.add('screen');

const buttonGreed = document.createElement('div');
buttonGreed.classList.add('buttonGreed');

List.appendChild(main);
main.appendChild(screen);
main.appendChild(buttonGreed);