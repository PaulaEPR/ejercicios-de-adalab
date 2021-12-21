"use strict";

const users = [
  {
    firstName: "Natalia",
    lastName: "Jiménez",
    phone: "123456789",
  },
  {
    firstName: "Ángeles",
    lastName: "Martínez",
    phone: "987654321",
  },
  {
    firstName: "Mara",
    lastName: "Rocha",
    phone: "192837465",
  },
];

const select = document.querySelector('.js-select');


function handleSelect() {
  const numberUser = select.value - 1
  const selectedUser = users[numberUser]
  for (const key in selectedUser) {
    const input = document.querySelector(`#${key}`);
    input.value = selectedUser[`${key}`]
  }
}

select.addEventListener("change", handleSelect)
