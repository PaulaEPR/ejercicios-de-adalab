'use strict';

/* Exercise 4 */
const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false }
];

const premiumUsers = users.filter(user => user.isPremium);
console.log(premiumUsers);

const namePremium = premiumUsers.map(user => user.name)
console.log(namePremium);

/* Exercise 5 */
const pins = [2389, 2384, 2837, 5232, 8998];

const evenPins = pins.filter(pin => pin % 2 === 0)
console.log(evenPins);

/* Exercise 6 */
const pinUsers = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 }
];

const allowedUsers = pinUsers
  .filter((allowed) => allowed.pin % 2 === 0)
  .map((allowed) => allowed.name);

console.log(allowedUsers);

/* Exercise 7 */
const issue = pinUsers.find(pinUser => pinUser.pin === 5232);
console.log(issue);

const posUserIssue = pinUsers.findIndex(pinUser => pinUser.pin === 5232)
console.log(posUserIssue);

console.log(pinUsers) //Comprobar qué tiene ahora pinUsers

pinUsers.splice(posUserIssue, 1) //Eliminar usuario con incidencia
console.log(pinUsers)