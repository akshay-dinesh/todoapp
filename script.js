"use strict";

// User validation variables
const localUsername = "akshay";
const localPassword = "123";
const uNameEl = document.getElementById("username");
const pWordEl = document.getElementById("password");
const formEl = document.getElementById("login-form");
const submitBtnEl = document.getElementById("submit");

// User validation function
submitBtnEl.addEventListener("click", function () {
  const username = uNameEl.value;
  const password = pWordEl.value;
  if (
    username == null ||
    password == null ||
    username == "" ||
    password == ""
  ) {
    alert("Enter username/password");
  } else {
    if (username == localUsername && password == localPassword) {
      window.open("/dashboard.html", "_self");
    } else {
      alert("Wrong username/password");
    }
  }
});

// List variables (for input)
const addBtnEl = document.getElementById("add-task");
const taskInput = document.getElementById("task-input-text");
const taskArray = [];

// List variables (for writing to html)
let li = document.createElement("li");
const tasks = document.getElementById("tasks");

// List function (read and write data from html)
addBtnEl.addEventListener("click", function () {
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
