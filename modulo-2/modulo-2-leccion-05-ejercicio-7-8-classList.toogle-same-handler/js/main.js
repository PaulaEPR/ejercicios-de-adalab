'use strict';

/* Exercise 7 */

/* const btn = document.querySelector(".btn")

function clickBtn() {
  btn.classList.toggle("btn-selected")
}

btn.addEventListener("click", clickBtn) */

/* Exercise 8 */

const btn1 = document.querySelector(".js-btn1")
const btn2 = document.querySelector(".js-btn2")

function handleBtnClick(event) {
  const selectedBtn = event.currentTarget;
  selectedBtn.classList.toggle("btn-selected")
}

btn1.addEventListener("click", handleBtnClick)
btn2.addEventListener("click", handleBtnClick)