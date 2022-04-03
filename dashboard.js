"use strict";
// HTML Elements declaration
const addBtnEl = document.getElementById("add-task");
const taskInput = document.getElementById("task-input-text");
const switchThemeEl = document.querySelector(".nav-menu--theme");
const resetBtnEl = document.querySelector(".nav-menu--reset");
let htmlEl = document.querySelector("html");

// Other variables declaration
let li = document.createElement("li");
const tasks = document.getElementById("tasks");
let taskArray = [];
let theme;
let warningFlag;
checkTheme();

// document
//   .querySelector("html:not(.btn--todo)")
//   .addEventListener("click", function () {
//     // warningFlag = true;
//     // console.log(warningFlag);
//     removeWarning();
//     // if (warningFlag == true) {
//     // }
//   });

// Reset (remove array elements, clear HTML task list)
resetBtnEl.addEventListener("click", function () {
  if (taskArray.length != 0) {
    taskArray.length = 0;
    document.querySelectorAll(".tasks--added-task").forEach((e) => e.remove());
    return taskArray;
  }
});

// Function to check page theme
function checkTheme() {
  if (htmlEl.classList.contains("light")) {
    theme = true;
  } else {
    theme = false;
  }
  return theme;
}

const TaskStatus = {
  TODO: "TODO",
  INPROGRESS: "INPROGRESS",
  DONE: "DONE",
};

function displayWarning() {
  document.querySelector(".todo-input--warning").classList.add("active");
  theme = checkTheme();
  if (theme == true) {
    document.querySelector(".input-text.light").style.border =
      "2px solid #850000";
  } else if (theme == false) {
    document.querySelector(".input-text.dark").style.border =
      "2px solid #ed4747";
  }
  warningFlag = true;
  console.log(warningFlag);
  return warningFlag;
}

function removeWarning() {
  document.querySelector(".todo-input--warning").classList.remove("active");
  document.querySelector(".input-text").style.border = "none";
  warningFlag = false;
  return warningFlag;
}

// Task List function
addBtnEl.addEventListener("click", function () {
  theme = checkTheme();
  if (taskInput.value == "") {
    displayWarning();
  } else {
    // taskArray.push(taskInput.value);
    removeWarning();
    taskArray.push({
      id: taskArray.length + 1,
      value: taskInput.value,
      status: TaskStatus.TODO,
      createdDate: dateNow(),
    });
    tasks.innerHTML = addLiFunction(taskArray);
    taskInput.value = "";
    // console.log(taskArray);
  }
});

// List function (Write data to html)
function addLiFunction(item) {
  return renderList(item);
}

function renderList(item) {
  let items = "";
  theme = checkTheme();
  for (let i = 0; i < item.length; i++) {
    if (theme === true) {
      items += `<li class="tasks--added-task light"><ion-icon class="icon--list" name="chevron-forward-outline"></ion-icon><p class="tasks--added-task--description" id="task${i}" onmousedown="strikeThrough(this.id)" >${item[i].value}</p><p class="tasks--added-task--status">Status</p><p class="tasks--added-task--date">${item[i].createdDate}</p><ion-icon id="trash${i}" class="icon--trash" onmousedown="deleteTask(${item[i].id})" name="trash-outline"></ion-icon></li>`;
    } else if (theme === false) {
      items += `<li class="tasks--added-task dark"><ion-icon class="icon--list" name="chevron-forward-outline"></ion-icon><p class="tasks--added-task--description" id="task${i}" onmousedown="strikeThrough(this.id)" >${item[i].value}</p><p class="tasks--added-task--status">Status</p><p class="tasks--added-task--date">${item[i].createdDate}</p><ion-icon id="trash${i}" class="icon--trash" onmousedown="deleteTask(${item[i].id})" name="trash-outline"></ion-icon></li>`;
    }
  }
  return theme, items;
}

// Date function
function dateNow() {
  const currentDate = new Date();
  const date = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const dateString = `${date}/${month}/${year}`;
  return dateString;
}
document.getElementById("date").innerHTML = `Today's date : ${dateNow()}`;

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
switchThemeEl.addEventListener("click", function () {
  document.querySelector(".todo-input--warning").classList.remove("active");
  theme = checkTheme();
  removeWarning();
  console.log(theme);
  let classNames = {
    htmlEl: "html",
    sectionDashboardEl: ".section-dashboard",
    sideMenuEl: ".side-menu",
    sectionHeaderEl: ".section-header",
    todoInputEl: ".todo-input",
    todoDisplayEl: ".todo-display",
    sectionFooterEl: ".section-footer",
    btnEl: ".btn--todo",
    navMenuListLiEl: ".nav-menu--list",
    tasksEl: ".tasks",
    taskListHeaderEl: ".task-list--header",
    // ionIconTask: ".tasks--added-task",
    inputWarning: ".todo-input--warning",
    inputTextWarning: ".input-text",
  };
  const className = Object.keys(classNames);
  for (let i = 0; i < className.length; i++) {
    if (theme === true) {
      document
        .querySelector(`${classNames[className[i]]}`)
        .classList.remove("light");
      document
        .querySelector(`${classNames[className[i]]}`)
        .classList.add("dark");
    } else if (theme === false) {
      document
        .querySelector(`${classNames[className[i]]}`)
        .classList.remove("dark");
      document
        .querySelector(`${classNames[className[i]]}`)
        .classList.add("light");
    }
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
