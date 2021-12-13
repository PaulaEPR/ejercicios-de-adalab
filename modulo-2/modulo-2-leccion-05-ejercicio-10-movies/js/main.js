"use strict";
const btn = document.querySelector(".js-btn");
const movieList = document.querySelector(".js-movie-list");

//List of movies
const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";

//Manejador del click en el botón
function handleBtnClick(event) {
  const selectedBtn = event.currentTarget;
  selectedBtn.classList.toggle("btn-selected")

  movieInception();
  movieTheButterFlyEffect();
  movieEternalSunshineOfTheSM();
  movieBlueVelvet();
  movieSplit();

  movieClick();
}

//Manejador del click en cada película
function movieClick() {
  const movie1 = document.querySelector(".inception");
  const movie2 = document.querySelector(".theButterFlyEffect");
  const movie3 = document.querySelector(".eternalSunshineOfTheSM");
  const movie4 = document.querySelector(".blueVelvet");
  const movie5 = document.querySelector(".split");

  function handleMovieClick(event) {
    console.log(event.currentTarget.innerHTML)
  }

  //Listener para cada película
  movie1.addEventListener("click", handleMovieClick)
  movie2.addEventListener("click", handleMovieClick)
  movie3.addEventListener("click", handleMovieClick)
  movie4.addEventListener("click", handleMovieClick)
  movie5.addEventListener("click", handleMovieClick)
}

//Funciones generales para añadir la lista al HTML y añadirle clases
function addMovie(movie) {
  movieList.innerHTML += `<li class="js-movie">${movie}</li>`;
}

function addClass(movieClass) {
  const movie = document.querySelector('.js-movie');
  movie.className = movieClass
}

//Funciones para añadir HTML y clases a cada película
function movieInception() {
  addMovie(inception);
  addClass("inception");
}

function movieTheButterFlyEffect() {
  addMovie(theButterFlyEffect);
  addClass("theButterFlyEffect");
}
function movieEternalSunshineOfTheSM() {
  addMovie(eternalSunshineOfTheSM);
  addClass("eternalSunshineOfTheSM");
}
function movieBlueVelvet() {
  addMovie(blueVelvet);
  addClass("blueVelvet");
}
function movieSplit() {
  addMovie(split);
  addClass("split");
}

//Listener para el botón
btn.addEventListener("click", handleBtnClick);


