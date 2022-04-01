"use strict";

// List variables (for input)
const addBtnEl = document.getElementById("add-task");
const taskInput = document.getElementById("task-input-text");
const taskArray = [];

// List variables (for writing to html)
let li = document.createElement("li");
const tasks = document.getElementById("tasks");

// List function (read and write data from html)
addBtnEl.addEventListener("click", function (event) {
  event.preventDefault();
  taskArray.push(taskInput.value);
  tasks.innerHTML = addLiFunction(taskArray);
});

function addLiFunction(item) {
  let items = "";
  for (let i = 0; i < item.length; i++) {
    items += `<li class="no-select"><ion-icon class="icon--list" name="chevron-forward-outline"></ion-icon><p id="task${i}" onmousedown="strikeThrough(this.id)" >${item[i]}</p><ion-icon id="trash${i}" class="icon--trash" name="trash-outline"></ion-icon></li>`;
  }
  return items;
}

// Date in HTML
const currentDate = new Date();
const date = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();
const dateString = `Today's date: ${date}/${month}/${year}`;
document.getElementById("date").innerHTML = dateString;

// Strike out task
const strikeThrough = function (id) {
  const itemId = document.getElementById(id);
  itemId.classList.toggle("strike-through");
};

// Delete task (trash can icon)
const deleteTask = function (id) {
  const trashId = document.getElementById(id);
  const trashParent = parent.trashId.classList.toggle("strike-through");
};
// Dynamic username // Check if key exists
// const userEl = document.querySelector("#user");
// const params = new URLSearchParams(window.location.search);

// params.forEach((value, key) => {
//   console.log(`${key} ${value}`);
// });

// console.log(params.hasOwnProperty("username"));
// console.log(JSON.stringify(params));

// let userNameInput = params["username"];

// for (let i = 0; i < obj.params.length; i++) {
//   console.log(`${value}`);
// }

// params.forEach((value, key) => {
//   userEl.append(`${key} = ${value}`);
//   userEl.append(document.createElement("br"));
// });
