"use strict";

const input = document.querySelector(".js-input");
const result = document.querySelector(".js-result");
const btn = document.querySelector(".js-btn");

function getInfoOrgs() {
  result.innerHTML = `<h2 class="subtitle">Resultados</h2><ul class="js-result-ul"></ul>`;
  fetch(`https://api.github.com/orgs/${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      let urlRepos = data.repos_url;
      fetch(urlRepos)
        .then((response) => response.json())
        .then((data) => {
          for (const eachData of data) {
            const resultUl = document.querySelector(".js-result-ul");
            resultUl.innerHTML += `<li class="js-result-li"><a href="${eachData.html_url}" class="js-result-a">${eachData.name}</a></li>`;
          }
        });
    });
}

btn.addEventListener("click", getInfoOrgs);
