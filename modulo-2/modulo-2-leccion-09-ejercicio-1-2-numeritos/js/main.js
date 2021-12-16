"use strict";

/* Exercise 1 */

function get100Numbers() {
  let arrayNumbers = [];
  for (let i = 0; i < 100; i++) {
    arrayNumbers.push(i + 1);
    console.log(`Ej 1 - Posición ${i}: Número ${arrayNumbers[i]}`);
  }
  return arrayNumbers;
}

get100Numbers();

/* Exercise 2 */
function getReversed100Numbers() {
  let arrayReversedNumbers = get100Numbers().reverse();
  //console.log(arrayReversedNumbers)
  for (let i = 0; i < 100; i++) {
    console.log(`Ej 2 - Posición ${i}: Número ${arrayReversedNumbers[i]}`);
  }
}

getReversed100Numbers();
