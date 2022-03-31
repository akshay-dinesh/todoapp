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

// Date in HTML
const currentDate = new Date();
const date = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();
const dateString = `Today's date: ${date}/${month}/${year}`;
document.getElementById("date").innerHTML = dateString;
