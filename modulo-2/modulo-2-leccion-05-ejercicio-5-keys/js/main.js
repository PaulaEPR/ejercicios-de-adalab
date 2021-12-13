'use strict';

const bkg = document.querySelector(".js-body")

function changeBkg(e) {
  let pressedKey = e.key;
  if (pressedKey === "r") {
    bkg.classList.add("js-body-r");
  } else if (pressedKey === "m") {
    bkg.classList.add("js-body-m");
  }
}
function eraseBkg() {
  /* bkg.classList.remove("js-body-r");
  bkg.classList.remove("js-body-m"); */
  bkg.className = "js-body" //solo una línea en vez de ir quitando clases
}

document.addEventListener("keydown", changeBkg)
document.addEventListener("keyup", eraseBkg)