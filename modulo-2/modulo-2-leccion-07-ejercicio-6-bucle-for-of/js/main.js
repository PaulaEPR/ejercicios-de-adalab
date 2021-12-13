"use strict";
// Variables
const preferred1 = document.querySelector("#preferred1");
const preferred2 = document.querySelector("#preferred2");
const btn = document.querySelector(".btn");
const message = document.querySelector(".message");

// Array
function handleBtnClick(event) {
  event.preventDefault();
  let preferred = [preferred1.value, preferred2.value];
  console.log(preferred);
  for (const play of preferred) {
    message.innerHTML += `<p>A mi también me encantó ${play}. Tenemos mucho en común humana.</p>`;
  }
}

btn.addEventListener("click", handleBtnClick);
