"use strict";

/* Exercise 1 */

const paragraph = document.querySelector(".greeting");
const buttonP = document.querySelector(".btn-p");

function showGreeting() {
  paragraph.innerHTML = "Mi primer click";
}

buttonP.addEventListener("click", showGreeting);

/* Exercise 2 */

const inputName = document.querySelector("#firstName");
const buttonI = document.querySelector(".btn-i");

function consoleGreeting() {
  console.log(`Hola ${inputName.value}`);
}

buttonI.addEventListener("click", consoleGreeting);

/* Exercise 3 */

const lorem = document.querySelector(".lorem");
const loremP = document.querySelector(".lorem-p");

function addLorem() {
  lorem.innerHTML += `Ipsum odit natus maiores laborum magnam ratione ex sapiente inventore reiciendis sint quas, animi quo, blanditiis quasi adipisci optio ullam, dignissimos obcaecati illum? Numquam, quam optio! Delectus veritatis quisquam nisi rerum numquam deleniti assumenda cum ex error aperiam! Molestias voluptas, eius tempore ratione, nisi temporibus a sed iusto nihil corporis vero laborum numquam ea repellat delectus quam nemo, voluptatem possimus?`;  
}

loremP.addEventListener('mouseover', addLorem)
