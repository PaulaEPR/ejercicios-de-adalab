"use strict";

const input = document.querySelector(".js-input");
const result = document.querySelector(".js-result");
const btn = document.querySelector(".js-btn");

function getInfoOrgs() {
  result.innerHTML = `<h2 class="subtitle">Resultados</h2><ul class="js-result-ul"></ul>`;
  fetch(`https://api.github.com/orgs/${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "Not Found") {
        result.innerHTML += `<p class="js-notfound">El usuario no existe</p>`;
      } else {
        const resultUl = document.querySelector(".js-result-ul");
        resultUl.innerHTML += `<li class="js-result-li">Propiedad "login" → Valor: ${data.login} / Tipo: ${typeof data.login}</li>
        <li class="js-result-li">Propiedad "id" → Valor: ${data.id} / Tipo: ${typeof data.id}</li>
        <li class="js-result-li">Propiedad "node_id" → Valor: ${data.node_id} / Tipo: ${typeof data.node_id}</li>
        <li class="js-result-li">Propiedad "is_verified" → Valor: ${data.is_verified} / Tipo: ${typeof data.is_verified}</li>`;
      }
    });
}

btn.addEventListener("click", getInfoOrgs);