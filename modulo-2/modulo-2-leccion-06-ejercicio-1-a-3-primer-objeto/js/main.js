'use strict';

/* Exercise 1 */
const adalabers = document.querySelector(".adalabers")

const adalaber1 = {
  name: "Susana",
  age: 34,
  occupation: "Periodista"
}

const adalaber2 = {
  name: "Rocío",
  age: 25,
  occupation: "Actriz"
}

adalabers.innerHTML = `<p>Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.occupation.toLowerCase()}.</p>`;
adalabers.innerHTML += `<p>Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.occupation.toLowerCase()}.</p>`;

/* Exercise 2 */
const run = "Estoy corriendo"

adalaber1.run = () => console.log(run)
adalaber1.runAMarathon = (distance) => {
  adalaber1.run() 
  console.log(`${run} un maratón de ${distance} kilómetros`)
}

adalaber1.runAMarathon(50)

/* Exercise 3 */

adalaber1.showBio = function() {
  return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.occupation.toLowerCase()}`
}

adalaber2.showBio = function() {
  return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.occupation.toLowerCase()}`
}

console.log(adalaber1.showBio())
console.log(adalaber2.showBio())