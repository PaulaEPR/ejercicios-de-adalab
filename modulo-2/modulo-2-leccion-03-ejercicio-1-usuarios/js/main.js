'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';



/* Añadir imagen avatar */
const srcAvatar = document.querySelector('.js-user__avatar')

//Opción 1
//srcAvatar.setAttribute("src", userAvatar || DEFAULT_AVATAR)

//Opción 2 (más corta)
srcAvatar.src = userAvatar || DEFAULT_AVATAR;