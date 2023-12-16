'use strict';

const NUMBERS = document.getElementsByClassName('keys');

let screen = document.getElementById('screen');
let resultScreen = document.getElementById('result');

function addKeysOntheScreen(event) {
  let keyPress = event.target.textContent;

  switch (keyPress) {
    case '0':
      screen.value += keyPress;
      break;
    case '00':
      screen.value += keyPress;
      break;
    case '1':
      screen.value += keyPress;
      break;
    case '2':
      screen.value += keyPress;
      break;
    case '3':
      screen.value += keyPress;
      break;
    case '4':
      screen.value += keyPress;
      break;
    case '5':
      screen.value += keyPress;
      break;
    case '6':
      screen.value += keyPress;
      break;
    case '7':
      screen.value += keyPress;
      break;
    case '8':
      screen.value += keyPress;
      break;
    case '9':
      screen.value += keyPress;
      break;
    case '+':
      screen.value += keyPress;
      break;
    case '-':
      screen.value += keyPress;
      break;
    case '*':
      screen.value += keyPress;
      break;
    case '/':
      screen.value += keyPress;
      break;
    case '%':
      screen.value += keyPress;
      break;
    case '.':
      screen.value += keyPress;
      break;
    case 'mod':
      screen.value += keyPress
      break;
  }
}

const CLEAR = document.getElementById('clear').addEventListener('click', function clear() {
  screen.value = null
  resultScreen.value = null
});

const CLEAR_ENTRY = document.getElementById('clearEntry').addEventListener('click', function clearEntry() {
  screen.value = screen.value.slice(0, -1);
});

const EQUALS = document.getElementById('equals').addEventListener('click', function equals() {
  try {
    resultScreen.value = eval(screen.value);
  } catch (error) {
    resultScreen.value = error.name;
  }

  screen.value = null;
});

for (let i = 0; i < NUMBERS.length; i++) {
  NUMBERS[i].addEventListener('click', addKeysOntheScreen);
}