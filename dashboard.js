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
    items += `<li>${item[i]}</li>`;
  }
  return items;
}
