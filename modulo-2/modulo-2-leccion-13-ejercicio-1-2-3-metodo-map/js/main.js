'use strict';

/* Exercise 1 */
const marks = [5, 4, 6, 7, 9];
const inflatedMarks = marks.map((mark) => mark + 1);

console.log(inflatedMarks);

/* Exercise 2 */
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const welcome = names.map((name) => `Bienvenida ${name}.`);

console.log(welcome);

/* Exercise 3 */
const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

const premiumUsers = []
const ordinaryUsers = []
const checkPremium = users.map(isPremium)

function isPremium(user) {
  if (user.isPremium) {
    const i = user.name
    premiumUsers.push(i)
    console.log("PREMIUM:" + premiumUsers);
  } else {
    const i = user.name
    ordinaryUsers.push(i)
    console.log("ORDINARY:" + ordinaryUsers);
  }
}

console.log(premiumUsers)
console.log(ordinaryUsers)

const welcomePremium = premiumUsers.map(user =>`Bienvenida ${user}. Gracias por confiar en nosotros.`)
console.log(welcomePremium)

const welcomeOrdinary = ordinaryUsers.map(user =>`Bienvenida ${user}.`)
console.log(welcomeOrdinary)


