'use strict';

function getInteger() {
  fetch("https://api.rand.fun/number/integer?length=6")
    .then(response => response.json())
    .then(data => {
      document.querySelector('.js-result').innerHTML = data.result
    });
}
document.querySelector('.js-btn').addEventListener("click", getInteger);