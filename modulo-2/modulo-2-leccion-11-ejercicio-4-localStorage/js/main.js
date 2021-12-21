"use strict";

const input = document.querySelector(".js-input");
const result = document.querySelector(".js-result");

//Pintar HTML y guardar value del input en localStorage
function keepInput() {
  const name = input.value;
  result.innerHTML = name;
  localStorage.setItem("name", name);
}

input.addEventListener("keyup", keepInput);

//Buscar si hay algo en localSorage, pintarlo en el HTML y en el input
function searchStorage() {
  const name = localStorage.getItem("name");
  result.innerHTML = name;
  input.value = name
}

searchStorage();
