'use strict';
const click = document.querySelector('.click');
const section = document.querySelector('.colors-container');
const arrowDown = document.querySelector('.arrow-down');
const arrowUp = document.querySelector('.arrow-up');

function displayArrow() {
  section.classList.toggle('hidden');
  arrowUp.classList.toggle('hidden');
  arrowDown.classList.toggle('hidden');
}

click.addEventListener ('click', displayArrow);

'use strict';
const click2 = document.querySelector('.click2');
const section2 = document.querySelector('.form__section__signup');
const arrowDown2 = document.querySelector('.arrow-down2');
const arrowUp2 = document.querySelector('.arrow-up2');

function displayArrow2() {
  section2.classList.toggle('hidden');
  arrowUp2.classList.toggle('hidden');
  arrowDown2.classList.toggle('hidden');
}

click2.addEventListener ('click', displayArrow2);

// share
const click3 = document.querySelector('.click3');
const section3 = document.querySelector('.form__share__button');
const arrowDown3 = document.querySelector('.arrow-down3');
const arrowUp3 = document.querySelector('.arrow-up3');

function displayArrow3() {
  console.log('share');
  section3.classList.toggle('hidden');
  arrowUp3.classList.toggle('hidden');
  arrowDown3.classList.toggle('hidden');
}

click3.addEventListener('click', displayArrow3);