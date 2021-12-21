'use strict';

const btn = document.querySelector('.js-dog');
const breed = document.querySelector('.js-breed');
const img = document.querySelector('.dog-image');

function getRandomDogBreed() {
  fetch("https://dog.ceo/api/breeds/list")
  .then(breedResponse => breedResponse.json())
    .then(breedData => {
      //Número de razas disponible
      const dogBreeds = breedData.message.length;
      //Generar url de número aleatorio adaptado al número de razas disponible
      const urlRandomNumber = `https://api.rand.fun/number/integer?min=0&max=${dogBreeds}`
      fetch(urlRandomNumber)
        .then(numberResponse => numberResponse.json())
        .then(numberData => {
          //Guardar el número aleatorio generado
          const randomNumber = numberData.result
          //Guardar la raza elegida en función del número aleatorio
          const selectedBreed = breedData.message[randomNumber]
          //Pintar en el HTML el nombre de la raza
          breed.innerHTML = `Raza: <span class="js-capitalize">${selectedBreed}</span>`
          //Generar la url para pedir la imagen de esa raza
          const urlImgDog = `https://dog.ceo/api/breed/${selectedBreed}/images/random`
            fetch(urlImgDog)
              .then(imgResponse => imgResponse.json())
              .then(imgData => {
                //Pintar en el HTML la imagen aleatoria de esa raza
                img.src = imgData.message;
                img.alt = `${selectedBreed}`;
              });
        });
    }); 
}

btn.addEventListener("click", getRandomDogBreed)

