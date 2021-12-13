"use strict";

/* Part 1 */

/* let numbers = [4, 8, 15, 16, 23]
console.log(numbers)

let acc = 0

for (let i = 0; i < numbers.length; i++) {
  console.log('Bucle ' + parseInt(i +1));
  acc += numbers[i];
}

let av = acc / numbers.length
console.log("Media de: " + av) */

/* Part 2 */
/* numbers[5] = 42
console.log(numbers)

acc = 0

function counter() {
  for (let i = 0; i < numbers.length; i++) {
    console.log('Bucle ' + parseInt(i +1));
    acc += numbers[i];
  }
}

counter()

function average() {
  let average = acc / numbers.length
console.log("Media de: " + average)
}

average() */

/* Part 3 */

function average(arr) {
  let acc = 0;
  for (let i = 0; i < arr.length; i++) {
    acc += arr[i];
  }
  let av = acc / arr.length;
  console.log("Números: " + arr + " - Media de: " + av);
}

average([4, 8, 15, 16, 23])
average([4, 8, 15, 16, 23, 42])