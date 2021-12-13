'use strict';

/* Ejercise 2 */
for (let i = 0; i < 10; i++) {
  console.log('Voy por la vuelta ' + parseInt(i + 1));
}

/* Ejercise 2 */
let acc = 0

for (let i = 0; i < 10; i++) {
  acc = acc + 2
  console.log('--Voy por la vuelta ' + parseInt(i + 1), "(acc: " + acc + ")");
}

console.log("El resultado es: " + acc)