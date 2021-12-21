"use strict";

const input = document.querySelector(".js-input");
const result = document.querySelector(".js-result");
const btn = document.querySelector(".js-btn");

function getInfoUser() {
  result.innerHTML = `<h2 class="subtitle">Resultados</h2>`;
  fetch(`https://api.github.com/users/${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "Not Found") {
        result.innerHTML += `<p class="js-notfound">El usuario no existe</p>`;
      } else {
        result.innerHTML += `<section class="block"><h3 class="name">Nombre</h3><p class="js-name">${data.name}</p></section>
        <section class="block"><h3 class="photo">Foto</h3><img class="js-photo" src=${data.avatar_url}></section>
        <section class="block"><h3 class="repos">Nº Repos</h3><p class="js-name">${data.public_repos}</p></section>`;
      }
    });
}

btn.addEventListener("click", getInfoUser);
