"use strict";

// List variables (for input)
const addBtnEl = document.getElementById("add-task");
const taskInput = document.getElementById("task-input-text");
const taskArray = [];

// List variables (for writing to html)
let li = document.createElement("li");
const tasks = document.getElementById("tasks");

// List function (read data from html)
addBtnEl.addEventListener("click", function () {
  taskArray.push(taskInput.value);
  tasks.innerHTML = addLiFunction(taskArray);
});

// List function (Write data to html)
function addLiFunction(item) {
  let items = "";
  for (let i = 0; i < item.length; i++) {
    items += `<li class="no-select"><ion-icon class="icon--list" name="chevron-forward-outline"></ion-icon><p id="task${i}" onmousedown="strikeThrough(this.id)" >${item[i]}</p><ion-icon id="trash${i}" class="icon--trash" onmousedown="deleteTask(this.id)" name="trash-outline"></ion-icon></li>`;
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

// Delete task (trash can div)
const deleteTask = function (id) {
  const iconId = document.getElementById(id);
  const parent = iconId.parentElement;
  parent.remove();
  taskArray.splice(id - 1, id);
};

// Switch theme
const switchThemeEl = document.querySelector(".nav-menu--theme");
switchThemeEl.addEventListener("click", function () {
  const sectionDashboardEl = document.querySelector(".section-dashboard");
  sectionDashboardEl.classList.toggle("dark");
  const todoInputEl = document.querySelector(".todo-input");
  todoInputEl.classList.toggle("dark");
  const todoDisplayEl = document.querySelector(".todo-display");
  todoDisplayEl.classList.toggle("dark");
  const tasksLiOddEl = document.querySelector(".tasks li:nth-child(even)");
  tasksLiOddEl.classList.toggle("dark");
  const tasksLiEvenEl = document.querySelector("..tasks li:nth-child(odd)");
  tasksLiEvenEl.classList.toggle("dark");
  const iconTrashEl = document.querySelector(".icon--trash");
  iconTrashEl.classList.toggle("dark");
  const sideMenuEl = document.querySelector(".side-menu");
  sideMenuEl.classList.toggle("dark");
  const navMenuListLiEl = document.querySelector(".nav-menu--list li");
  navMenuListLiEl.classList.toggle("dark");
  const navMenuListLiHovEl = document.querySelector(".section-dashboard");
  navMenuListLiHovEl.classList.toggle("dark");
  const globalEl = document.querySelector("*");
  globalEl.style.color = "#ffffffff";
  const btnEl = document.querySelector(".btn--todo");
  btnEl.classList.toggle("dark");
  const btnHovEl = document.querySelector(".btn:hover");
  btnHovEl.classList.toggle("dark");
  const btnActiveEl = document.querySelector(".btn:active");
  btnActiveEl.classList.toggle("dark");
  const sectionHeaderEl = document.querySelector(".section-header");
  sectionHeaderEl.classList.toggle("dark");
  const sectionFooterEl = document.querySelector(".section-footer.dark");
  sectionFooterEl.classList.toggle("dark");
});

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
