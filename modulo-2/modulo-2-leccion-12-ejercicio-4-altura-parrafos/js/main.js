'use strict';

/* Con el div */
const div = document.querySelector('.js-div');

const divHeight = div.offsetHeight
const divThirdHeight = divHeight / 3

div.style.height = `${divHeight / 3}px`
div.style.backgroundColor = 'red';

