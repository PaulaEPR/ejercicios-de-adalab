"use strict";

const section = document.querySelector(".js-img-section");
const citys = ["madrid", "paris", "newyork"]
const select = document.querySelector('.js-select');

function handleSelect() {
  section.innerHTML = ""
  const selectedCityName = citys[select.value -1]
  for (let i = 0; i < 3; i++) {
    const newItem = document.createElement("img");
    newItem.src = `./img/${selectedCityName}${i + 1}.jpg`;
    newItem.className = "js-img"
    section.appendChild(newItem);
  }
}

select.addEventListener("change", handleSelect)

