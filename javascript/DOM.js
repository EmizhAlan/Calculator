
let List = document.querySelector('body');
List.classList.add('body')

const main = document.createElement('div');
main.classList.add('main');
main.textContent = 'test' ;

const calculator = document.createElement('div');
calculator.classList.add('calculator');

const screen = document.createElement('div');
screen.classList.add('screen');

const last = document.createElement('div');
last.classList.add('screen-last');
last.id = 'lastOperationScreen';

const current = document.createElement('div');
current.classList.add('screen-current');
current.id = 'currentOperationScreen';

const buttonGreed = document.createElement('div');
buttonGreed.classList.add('buttonGreed');

const button1 = document.createElement('div');
button1.classList.add('btn');
button1.onclick = 'this.blur();';
button1.id = 'data-number';
button1.textContent = '1';

List.appendChild(main);
main.appendChild(screen);
main.appendChild(buttonGreed);
screen.appendChild(last);
screen.appendChild(current);
buttonGreed.appendChild(button1);