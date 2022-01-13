'use strict';

let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  if (counter < 12) {
    time.innerHTML = counter +" 🍇";
  } else {
    time.innerHTML = 12 + " 🍇 ¡Feliz año!";
  }
}

setInterval(incrementAndShowCounter, 1000);