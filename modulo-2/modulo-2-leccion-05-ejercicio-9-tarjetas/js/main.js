'use strict';

const teacher1 = document.querySelector(".teacher--isra")
const teacher2 = document.querySelector(".teacher--tuerto")
const teacher3 = document.querySelector(".teacher--nasi")

function addSelected(teacher) {
  teacher.currentTarget.classList.toggle("teacher--selected")
  const status = teacher.currentTarget.querySelector(".favorite")
  if (status.innerHTML === "Añadir") {
    status.innerHTML = "Quitar"
  } else {
    status.innerHTML = "Añadir"
  }
}

teacher1.addEventListener("click", addSelected)
teacher2.addEventListener("click", addSelected)
teacher3.addEventListener("click", addSelected)