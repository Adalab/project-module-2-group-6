'use strict';
const styleBlue = document.querySelector('.style1');
const styleRed = document.querySelector('.style2');
const styleYellow = document.querySelector('.style3');

//variables del cambio de estilos//
const colorLeftSquare = document.querySelector('.js-square');
const colorName = document.querySelector('.js-name');
const colorIcons = document.querySelectorAll('.js-icon');
const colorBorder = document.querySelectorAll('.js-border');

function handlerStyle() {
  //Muestra cuál es el evento actual//
  console.log(event.currentTarget.classList);
  if (event.currentTarget.classList.value === 'style1') {
    console.log('Ha elegido el estilo 1');
  } else if (event.currentTarget.classList.value === 'style2') {
    console.log('Ha elegido el estilo 2');
    changeColors('dark-red', 'medium-red', 'light-red');
  } else if (event.currentTarget.classList.value === 'style3');
  changeColors('dark-blue', 'medium-yellow', 'light-blue');
  console.log('Ha elegido el estilo 3');
}

function changeColors(color1, color2, color3) {
  colorName.classList.add(color1);

  colorLeftSquare.classList.add(color2);
  for (const icon of colorIcons) {
    icon.classList.add(color1);
    icon.classList.remove(color2);
    icon.classList.remove(color3);
  }
  for (const border of colorBorder) {
    border.classList.add(color3);
    border.classList.remove(color2);
    border.classList.remove(color1);
  }
}

styleBlue.addEventListener('click', handlerStyle);
styleRed.addEventListener('click', handlerStyle);
styleYellow.addEventListener('click', handlerStyle);
