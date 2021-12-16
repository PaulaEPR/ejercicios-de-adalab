"use strict";

const btn = document.querySelector(".js-btn");
const input = document.querySelector(".js-input");
const title = document.querySelector(".js-title");
const bkg = document.querySelector(".js-background");

//Pinto el valor del input en el h1
function changeFace(face) {
  title.innerHTML = face;
}

//Cojo el valor del input
function renderFace() {
  const status = input.value;
  if (status === "happy") {
    changeFace(":)")
  } else if (status === "sad") {
    changeFace(":(")
  }
}

//Conseguir un numero aleatorio
function getRandom(max) {
  return Math.ceil(Math.random() * max)
}

//Cambiar fondo según números aleatorios
function changeBkg() {
  const randomNum = getRandom(100);

  if (randomNum % 2 === 0) {
    bkg.classList.add("js-bkg-happy")
    bkg.classList.remove("js-bkg-sad")
  } else {
    bkg.classList.add("js-bkg-sad")
    bkg.classList.remove("js-bkg-happy")
  }
}

//Handler del botón
function handleClickBtn(event) {
  event.preventDefault();
  renderFace();
  changeBkg();
}

//Listener del botón
btn.addEventListener("click", handleClickBtn);

