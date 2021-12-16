"use strict";

// Array de objetos
const adalabers = [
  {
    name: "María",
    age: 29,
    job: "Diseñadora",
  },
  {
    name: "Lucía",
    age: 31,
    job: "Ingeniera química",
  },
  {
    name: "Susana",
    age: 34,
    job: "Periodista",
  },
  {
    name: "Rocío",
    age: 25,
    job: "Actriz",
  },
  {
    name: "Inmaculada",
    age: 21,
    job: "Diseñadora",
  },
];

//Funciones
function countAdalabers() {
  console.log("Número de adalabers: " + adalabers.length);
}

function averageAge() {
  let acc = 0;
  for (let i = 0; i < adalabers.length; i++) {
    acc += adalabers[i].age;
  }
  let av = acc / adalabers.length;
  console.log("La media de edad es de: " + av);
}

function theYoungest() {
  let young = adalabers[0].age;
  let name = adalabers[0].name
  for (let i = 0; i < adalabers.length; i++) {
    if (adalabers[i].age < young) {
      young = adalabers[i].age;
      name = adalabers[i].name
    }
  }
  console.log(`La adalaber más joven tiene ${young} años y se llama ${name}`);
}

function countDesigners() {
  let acc = 0
  for (let i = 0; i < adalabers.length; i++) {
    if (adalabers[i].job === "Diseñadora") {
      acc++
    } 
  }
  console.log("Número de adalabers diseñadoras: " + acc);
}

//Monstrar por consola
console.log(adalabers)
countAdalabers();
averageAge();
theYoungest();
countDesigners()