'use strict';

const NUMBERS = document.getElementsByClassName('keys');

let screen = document.getElementById('screen');
let resultScreen = document.getElementById('result');

function addKeysOntheScreen(event) {
  let keyPress = event.target.textContent;

  if(keyPress.match(/^[0-9]*$|^\+|-|\*|\/|%|\.|/)) {
    screen.value += keyPress;
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