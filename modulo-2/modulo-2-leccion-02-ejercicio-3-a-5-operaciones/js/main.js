'use strict';

/* Ejercicio 3 */
const priceKiwiKg = 5;
const priceConferencePearKg = 2;
const priceGrapeKg = 4;

//2 maneras de hacerlo:
//let priceTotal = 2*priceKiwiKg + 3*priceConferencePearKg + 0.5*priceGrapeKg;
//console.log(priceTotal);

// Sin declarar una variable antes, directamente por consola:
console.log("El precio total es de " + (2*priceKiwiKg + 3*priceConferencePearKg + 0.5*priceGrapeKg) + "€"); //18

/* Ejercicio 4 */

const totalBill = 128;
const totalPeople = 9;
let restBill = totalBill - 2;
let splitCommonBill = restBill / totalPeople;
let splitAnaBill = splitCommonBill + 2;
console.log("Cada uno tiene que pagar " + splitCommonBill + "€ y Ana " + splitAnaBill + "€");

/* Ejercicio 5 */

const hoursYear = 365 * 24;
let age = 34;
console.log("Has vivido " + age * hoursYear + " horas")

