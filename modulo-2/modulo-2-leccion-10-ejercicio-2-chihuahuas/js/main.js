'use strict';

function getChihuahuaImage() {
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector(".chihuahua-image");
      img.src = data.message;
      img.alt = "Un chihuahua";
    });
}

const btn = document.querySelector(".js-chihuahua");
btn.addEventListener("click", getChihuahuaImage);
