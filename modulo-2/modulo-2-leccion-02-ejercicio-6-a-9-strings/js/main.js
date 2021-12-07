'use strict';
/* Ejercicio 6 */
const firstName = "Marta"
console.log("Hola " + firstName +", encantada de conocerte")

/* Ejercicio 7 */

console.log(`Hola ${firstName}, encantada de conocerte`)

/* Ejercicio 8 */
const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const dogsList = document.querySelector('.js-dogs')

dogsList.innerHTML = `<li>${firstDogName} <img src=${firstDogImage} height="80px"></li>
<li>${secondDogName} <img src=${secondDogImage} height="80px"></li>
<li>${thirdDogName} <img src=${thirdDogImage} height="80px"></li>`

/* Ejercicio 9 */
const lastName = "Ponce de León"


const greet = document.querySelector('.js-partner')
// Puedo hacer la concatenación del nombre en el innerHTML o fuera, pero si lo hago en el innerHTML tengo que escribir más. Voy a probarlo para asegurarme de que también se puede hacer. Sí funciona
// greet.innerHTML = `El nombre de mi compañera es ${firstName} ${lastName} y está compuesto por ${firstName.length + lastName.length} caracteres`

//Declaro variable para el nombre completo
const fullName =`${firstName} ${lastName}` 
greet.innerHTML = `El nombre de mi compañera es ${fullName} y está compuesto por ${fullName.length} caracteres`

// Hmmm, sale una cantidad distinta dependiendo del método (18 la primera vez, y 19 en esta), y entiendo que es por el espacio, con lo cual, debería usar el segundo método porque el espacio es un caracter también