"use strict";

const input = document.querySelector(".js-input");
const result = document.querySelector(".js-result");
const btn = document.querySelector(".js-btn");

function getInfo() {
  result.innerHTML = `<h2 class="subtitle">Mira la consola</h2>`;
  fetch(`https://dog.ceo/api/breeds/list`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      console.log("Tipo de data: " + typeof data)
      console.log(data.message)
      console.log("Tipo de data.message: " + typeof data.message)
    });
}

btn.addEventListener("click", getInfo);
