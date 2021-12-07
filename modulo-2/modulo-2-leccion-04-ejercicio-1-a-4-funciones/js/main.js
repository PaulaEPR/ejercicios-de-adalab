'use strict';

/* Exercise 1 */
function multiplication(a, b) {
    let result = a * b
    return `La multiplicación da ${result}`
}

console.log(multiplication(2,3))
console.log(multiplication(5,6))
console.log(multiplication(7,0))


/* Exercise 2 */
function average(a, b, c, d) {
    let result = (a + b + c + d) / 4
    return `La media es de ${result}` 
}

console.log(average(3,4,5,6))
console.log(average(7,4,9,8))
console.log(average(1,2,1,2))

/* Exercise 3 */
function price(withoutVAT) {
    let VAT = withoutVAT * 0.21
    // let total = withoutVAT + VAT
    // let total = Math.round(withoutVAT + VAT)
    let total = Math.round((withoutVAT + VAT) * 100) / 100
    return `El precio total es ${total}` 
}

console.log(price(10))
console.log(price(276.58))
console.log(price(32.5))

/* Exercise 4 */
function evenOdd(num) {
    let result = num % 2
    if (result === 0) {
        return `El número ${num} es par`
    }
    else {
        return `El número ${num} es impar`
    }
}

console.log(evenOdd(10))
console.log(evenOdd(13))

function evenOdd2(num) {
    let result = num % 2
    if (result === 0) {
        return true
    }
    else {
        return false
    }
}

console.log(evenOdd2(10))
console.log(evenOdd2(13))
