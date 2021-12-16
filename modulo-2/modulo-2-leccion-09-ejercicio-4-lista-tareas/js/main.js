"use strict";

/* Variable listado */
const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
  { name: "Terminar este ejercicio", completed: true },
];

/* Variables globales del HTML */
const tasklist = document.querySelector(".js_task_list");
const counterDone = document.querySelector('.js_counter_done');
const counterUndone = document.querySelector('.js_counter_undone');
const counterAll = document.querySelector('.js_counter_score');

/* Genera tarea sin hacer */
function genTask(argumento, number) {
  tasklist.innerHTML += `<li class="js_task"><input type="checkbox" id="task${number + 1}" class="task_checkbox js_unchecked">${argumento}</li> `;
}

/* Genera tareas hechas */
function genCrossedTask(argumento, number) {
  tasklist.innerHTML += `<li class="js_task js_crossed_out"><input type="checkbox" id="task${number + 1}" class="task_checkbox js_checked" checked>${argumento}</li>`;
}

/* Genera toda la lista de tareas y cuenta cuantas hay de cada tipo */
function generateAllTasks() {
  tasklist.innerHTML = ""
  //Variables de contadores
  let counterCrossedTask = ""
  let counterTask = ""
  //Bucle para pintar en el html la lista de tareas + sumar contadores
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed) {
      genCrossedTask(tasks[i].name, i);
      //Contador de tareas
      counterCrossedTask++
    } else {
      genTask(tasks[i].name, i);
      //Contador de tareas
      counterTask++
    }
  }
  //Pinta el contador de tareas en el HTML
  counterTasks(counterTask, counterUndone)
  counterTasks(counterCrossedTask, counterDone)
  counterTasks(tasks.length, counterAll)

  //Llama al listener de los checkbox
  listenerClickCheckbox()
}

/* Listener para el checkbox de cada tarea */
function listenerClickCheckbox() {
  const allTasks = document.querySelectorAll(".task_checkbox");
  for (let i = 0; i < allTasks.length; i++) {
    allTasks[i].addEventListener("click", handleClickCheckbox);
  }
}

/* Manejador para el checkbox de cada tarea */
function handleClickCheckbox(event) {
  const string = event.currentTarget.id.split('');
  const taskNumber = string.slice(string.length - 1) - 1
  actualizeTasks(taskNumber)
  //Vuelve a llamar a la función principal para que pinte el objeto actualizado
  generateAllTasks();
}

/* Actualiza el objeto que contiene la lista de tareas */
function actualizeTasks(taskNumber) {
  if (tasks[taskNumber].completed) {
    tasks[taskNumber].completed = false;
  } else {
    tasks[taskNumber].completed = true;
  }
  //Comprobar el número de tarea y que el objeto se actualiza
  console.log(taskNumber);
  console.log(tasks)
}

/* Contador de tareas */
function counterTasks(counter, where) {
  where.innerHTML = counter
}

/* Llamar a la función principal */
generateAllTasks();