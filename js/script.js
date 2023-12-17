'use strict';

const NUMBERS = document.getElementsByClassName('keys');

let screen = document.getElementById('screen');
let resultScreen = document.getElementById('result');

document.getElementById('clear').addEventListener('click', function () {
  screen.value = null;
  resultScreen.value = null;
});

document.getElementById('clearEntry').addEventListener('click', function () {
  screen.value = screen.value.slice(0, -1);
});

document.getElementById('equals').addEventListener('click', function () {
  try {
    resultScreen.value = eval(screen.value);
  } catch (error) {
    resultScreen.value = error.nodeName;
  } finally {
    screen.value = null;
  }
});

function addKeysOntheScreen(event) {
  let keyPress = event.target.textContent;

  if (keyPress.match(/^[0-9]*$|^\+|-|\*|\/|%|\.|/))  {
    if (!keyPress.match(/^[a-zA-Z=]*$/)) {
      screen.value += keyPress;
      resultScreen.value = null;
    }
  }
}

for (let i = 0; i < NUMBERS.length; i++) {
  NUMBERS[i].addEventListener('click', addKeysOntheScreen);
}