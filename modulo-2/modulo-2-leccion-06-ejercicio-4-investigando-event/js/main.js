'use strict';

const btn = document.querySelector(".js_btn")

function handlerClickBtn(event) {
  console.log(event)
}

btn.addEventListener("click", handlerClickBtn)