"use strict";

const numbers = [1, 2, 3];
const ul = document.querySelector(".js-list-ul");

for (const item of numbers) {
  const newItem = document.createElement("li");
  const newContent = document.createTextNode(item);
  newItem.appendChild(newContent);
  ul.appendChild(newItem);
}

