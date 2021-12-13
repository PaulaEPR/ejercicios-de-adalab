"use strict";

//Constante para acceder al elemento con la clase lorem
const lorem = document.querySelector(".lorem");

// Función para cambiar CSS dependiendo de la posición del scroll
function changeStyle() {
  if (window.scrollY > 250) {
    lorem.classList.add("lorem-more250");
    lorem.classList.remove("lorem-less250")
  } else {
    lorem.classList.add("lorem-less250");
    lorem.classList.remove("lorem-more250")
  }
}

//Llamo a la función cuando el scroll se mueva
window.addEventListener("scroll", changeStyle);
