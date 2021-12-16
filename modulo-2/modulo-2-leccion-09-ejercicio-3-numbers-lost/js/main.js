"use strict";

const lostNumbers = [4, 8, 15, 16, 23, 42];

/* Even numbers (of lostNumbers) */
function evenNumbers() {
  const even = [];
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 === 0) {
      even.push(lostNumbers[i]);
    }
  }
  return even;
}

/* Multiple of three numbers (of lostNumbers) */
function multiple3Numbers() {
  const multiple3 = [];
  for (let i = 0; i < lostNumbers.length; i++) {
    function calc(number) {
      if (Number.isInteger(number / 3)) {
        multiple3.push(lostNumbers[i]);
      }
    }
    calc(lostNumbers[i]);
  }
  return multiple3;
}

/* Concatenate arrays (of lostNumbers) */
function bestLostNumber() {
  const best = evenNumbers().concat(multiple3Numbers());
  for (let i = 0; i < best.length; i++) {
    console.log(`Posición ${i}: ${best[i]}`);
  }
}

bestLostNumber();
