'use strict';

let access = "Laura";

let welcome = document.querySelector('.js-welcome');


if (access === "Paula" || access === "Marta") {
    welcome.innerHTML = `Hola ${access}`;
  }
  else {
    welcome.innerHTML = `Lo siento pero el usuario que has introducido no está registrado`;
  }