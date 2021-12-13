'use strict';

//Variables iniciales
const basketPears = {
  max: 10,
  min: 2,
  current: 6,
  initial: 3,
}

//Añadir una pera del cesto
basketPears.add = function () {
  if (this.current < this.max) {
    this.current++;
  } else {
    console.log("Número de peras máximo alcanzado")
  }
}

//Quitar una pera del cesto
basketPears.remove = function () {
  if (this.current > this.min) {
    this.current--;
  } else {
    console.log("Número de peras mínimo alcanzado")
  }
}

//Restablecer el número de peras al inicial
basketPears.restore = function () {
  this.current = this.initial
}

//Probando que funciona
console.log(basketPears)

basketPears.add()

console.log(basketPears)

basketPears.add()
basketPears.add()
basketPears.add()
basketPears.add()

console.log(basketPears)

basketPears.remove()

console.log(basketPears)

basketPears.restore()

console.log(basketPears)

basketPears.remove()

console.log(basketPears)

basketPears.remove()