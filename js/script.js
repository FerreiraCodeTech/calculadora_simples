'use strict';

const KEYS = document.getElementsByClassName('keys');
let screen = document.getElementById('screen');
let resultScreen = document.getElementById('result');

function addKeyOnScreen (event) {
  let keyboardTarget = event.target.textContent;

  switch(keyboardTarget) {
    case '1':
      screen.value += keyboardTarget;
      break;
    case '2':
      screen.value += keyboardTarget;
      break;
    case '3':
      screen.value += keyboardTarget;
      break;
    case '4':
      screen.value += keyboardTarget;
      break;
    case '5':
      screen.value += keyboardTarget;
      break;
    case '6':
      screen.value += keyboardTarget;
      break;
    case '7':
      screen.value += keyboardTarget;
      break;
    case '8':
      screen.value += keyboardTarget;
      break;
    case '9':
      screen.value += keyboardTarget;
      break;
    case '0':
      screen.value += keyboardTarget;
      break;
    case '.':
      if(screen.value === '') {
        return;
      } else screen.value += keyboardTarget;
      break;
    case '+':
      if(screen.value === '') {
        return;
      } else screen.value += keyboardTarget;
      break;
    case '-':
      if(screen.value === '') {
        return;
      } else screen.value += keyboardTarget;
      break;
    case '/':
      if(screen.value === '') {
        return;
      } else screen.value += keyboardTarget;
      break;
    case '*':
      if(screen.value === '') {
        return;
      } else screen.value += keyboardTarget;
      break;
    case '%':
      if(screen.value === '') {
        return;
      } else screen.value += keyboardTarget;
      break;
    case '=':
      if(screen.value === '' || resultScreen.value != '') {
        resultScreen.value = null;
        return;
      } else {
        resultScreen.value = eval(screen.value);
        screen.value = null;
      }
      break;
    case 'C':
      screen.value = null;
      resultScreen.value = null;
      break;
    case 'CE':
      screen.value = screen.value.slice(0, -1);
      resultScreen.value = null;
      break;
    default:
      return;
  }
}

for(let i = 0; i < KEYS.length; i++) {
  KEYS[i].addEventListener('click', addKeyOnScreen);
}