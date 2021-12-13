'use strict';

const filledText = document.querySelector(".js-filled-text")
const paragraph = document.querySelector(".js-paragraph")

function addText(event) {
  paragraph.innerHTML = `${event.currentTarget.value}`
}

filledText.addEventListener("keyup", addText)