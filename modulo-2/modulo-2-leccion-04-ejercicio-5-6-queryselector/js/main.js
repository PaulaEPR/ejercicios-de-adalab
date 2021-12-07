'use strict';

/* Exercise 5 */

function getEl(selector) {
    let result = document.querySelector(selector);
    return result
}

const titleEl = getEl(".title");
console.log(titleEl)

const descEl = getEl(".desc");
console.log(descEl)

/* // Error test
const nonexist = getEl(".nonexist");
console.log(nonexist)
console.error(nonexist) */

/* Exercise 6 */
const elementHtml = "hola"
const element = getEl(elementHtml)

// const prueba = getEl(".parrafo")

if (element === null) {
    console.log(`No existe ningún elemento con clase, id o tag llamado ${elementHtml}`)
}

