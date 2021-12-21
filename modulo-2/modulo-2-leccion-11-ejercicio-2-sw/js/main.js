'use strict';

const input = document.querySelector('.js-input');
const btn = document.querySelector('.js-btn');
const result = document.querySelector('.js-result');

function getCharacters() {
  result.innerHTML = ""
  const getURL = `https://swapi.py4e.com/api/people/?search=${input.value}`
  fetch(getURL)
    .then(response => response.json())
    .then(data => {
      for (const character of data.results) {
        result.innerHTML += `<li>Nombre: ${character.name} / Género: ${character.gender}</li>`
      }    
    });
}

btn.addEventListener("click", getCharacters)