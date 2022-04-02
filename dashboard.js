"use strict";

const TaskStatus = {
  TODO: "TODO",
  INPROGRESS: "INPROGRESS",
  DONE: "DONE",
};

// List variables (for input)
const addBtnEl = document.getElementById("add-task");
const taskInput = document.getElementById("task-input-text");
let taskArray = [];

// List variables (for writing to html)
let li = document.createElement("li");
const tasks = document.getElementById("tasks");

// List function (read data from html)
addBtnEl.addEventListener("click", function () {
  // taskArray.push(taskInput.value);
  taskArray.push({
    id: taskArray.length + 1,
    value: taskInput.value,
    status: TaskStatus.TODO,
    createdDate: new Date(),
  });
  tasks.innerHTML = addLiFunction(taskArray);
  taskInput.value = "";
  // console.log(taskArray);
});

// List function (Write data to html)
function addLiFunction(item) {
  return renderList(item);
}

function renderList(item) {
  let items = "";
  for (let i = 0; i < item.length; i++) {
    items += `<li class="no-select"><ion-icon class="icon--list" name="chevron-forward-outline"></ion-icon><p id="task${i}" onmousedown="strikeThrough(this.id)" >${item[i].value}</p><ion-icon id="trash${i}" class="icon--trash" onmousedown="deleteTask(${item[i].id})" name="trash-outline"></ion-icon></li>`;
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
  console.log(id);
  // const iconId = document.getElementById(id);
  // const parent = iconId.parentElement;
  // parent.remove();
  const deletedArray = (taskArray = taskArray.filter((obj) => {
    console.log(obj);
    return obj.id !== id;
  }));
  renderList(taskArray);
  tasks.innerHTML = addLiFunction(taskArray);
  return deletedArray;
  // taskArray.splice(id - 1, id);
  console.log("after delete-->", taskArray);
};

// Switch theme
const switchThemeEl = document.querySelector(".nav-menu--theme");
switchThemeEl.addEventListener("click", function () {
  let classNames = {
    sectionDashboardEl: ".section-dashboard",
    sideMenuEl: ".side-menu",
    sectionHeaderEl: ".section-header",
    todoInputEl: ".todo-input",
    todoDisplayEl: ".todo-display",
    sectionFooterEl: ".section-footer",
    btnEl: ".btn--todo",
    navMenuListLiEl: ".nav-menu--list",
    // iconTrashEl: ".icon--trash",
  };
  const className = Object.keys(classNames);
  for (let i = 0; i < className.length; i++) {
    document
      .querySelector(`${classNames[className[i]]}`)
      .classList.toggle("dark");
  }
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
