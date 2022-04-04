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
let strike = false;
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
  TODO: "Not Completed",
  DONE: "Completed",
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
    removeWarning();
    taskArray.push({
      id: uniqueId(),
      value: taskInput.value,
      status: TaskStatus.TODO,
      createdDate: dateNow(),
    });
    // tasks.innerHTML = addLiFunction(taskArray);
    tasks.innerHTML = renderList(taskArray);
    taskInput.value = "";
  }
});

// List function (Write data to html)
// function addLiFunction(item) {
//   return renderList(item);
// }

const deleteTask = function (id) {
  console.log(id);
  let tempId = id.id.replace("task", "");
  console.log(tempId);

  const deletedArray = (taskArray = taskArray.filter((obj) => {
    return obj.id !== tempId;
  }));
  // console.log(deletedArray);
  renderList(taskArray);
  tasks.innerHTML = renderList(taskArray);
  return deletedArray;
};

// function renderList(item) {
//   let items = "";
//   theme = checkTheme();
//   for (let i = 0; i < item.length; i++) {
//     if (theme === true) {
//       items += `<li class="tasks--added-task light"><ion-icon class="icon--list" name="chevron-forward-outline"></ion-icon><p class="tasks--added-task--description" id="task${i}" onmousedown="strikeThrough(this.id)" >${item[i].value}</p><p class="tasks--added-task--status" id="task${i}status">${item[i].status}</p><p class="tasks--added-task--date">${item[i].createdDate}</p><ion-icon id="trash${i}" class="icon--trash" onmousedown="deleteTask(${item[i].id})" name="trash-outline"></ion-icon></li>`;
//     } else if (theme === false) {
//       items += `<li class="tasks--added-task dark"><ion-icon class="icon--list" name="chevron-forward-outline"></ion-icon><p class="tasks--added-task--description" id="task${i}" onmousedown="strikeThrough(this.id)" >${item[i].value}</p><p class="tasks--added-task--status id="task${i}status">${item[i].status}</p><p class="tasks--added-task--date">${item[i].createdDate}</p><ion-icon id="trash${i}" class="icon--trash" onmousedown="deleteTask(${item[i].id})" name="trash-outline"></ion-icon></li>`;
//     }
//   }
//   return theme, items;
// }

// Function to generate a unique ID
function uniqueId() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return "_" + Math.random().toString(36).substr(2, 9);
}

// function renderList(item) {
//   let items = "";
//   theme = checkTheme();

//   for (let i = 0; i < item.length; i++) {
//     if (theme === true) {
//       items += `<li class="tasks--added-task light"><ion-icon class="icon--list" name="chevron-forward-outline"></ion-icon><p class="tasks--added-task--description" id="task${i}" onmousedown="strikeThrough(this.id)" >${item[i].value}</p><p class="tasks--added-task--status" id="task${i}status">${item[i].status}</p><p class="tasks--added-task--date">${item[i].createdDate}</p><ion-icon id="trash${i}" class="icon--trash" onmousedown="deleteTask(${item[i].id})" name="trash-outline"></ion-icon></li>`;
//     } else if (theme === false) {
//       items += `<li class="tasks--added-task dark"><ion-icon class="icon--list" name="chevron-forward-outline"></ion-icon><p class="tasks--added-task--description" id="task${i}" onmousedown="strikeThrough(this.id)" >${item[i].value}</p><p class="tasks--added-task--status id="task${i}status">${item[i].status}</p><p class="tasks--added-task--date">${item[i].createdDate}</p><ion-icon id="trash${i}" class="icon--trash" onmousedown="deleteTask(${item[i].id})" name="trash-outline"></ion-icon></li>`;
//     }
//   }
//   return theme, items;
// }
function renderList(item) {
  let items = "";
  theme = checkTheme();

  for (let i = 0; i < item.length; i++) {
    if (theme === true) {
      items += `<li class="tasks--added-task light"><ion-icon class="icon--list" name="chevron-forward-outline"></ion-icon><p class="tasks--added-task--description" id="task${item[i].id}" onmousedown="strikeThrough(this.id)" >${item[i].value}</p><p class="tasks--added-task--status" id="status-task${item[i].id}">${item[i].status}</p><p class="tasks--added-task--date">${item[i].createdDate}</p><ion-icon id="trash${item[i].id}" class="icon--trash" onmousedown="deleteTask(task${item[i].id})" name="trash-outline"></ion-icon></li>`;
    } else if (theme === false) {
      items += `<li class="tasks--added-task dark"><ion-icon class="icon--list" name="chevron-forward-outline"></ion-icon><p class="tasks--added-task--description" id="task${item[i].id}" onmousedown="strikeThrough(this.id)" >${item[i].value}</p><p class="tasks--added-task--status id="status-task${item[i].id}">${item[i].status}</p><p class="tasks--added-task--date">${item[i].createdDate}</p><ion-icon id="trash${item[i].id}" class="icon--trash" onmousedown="deleteTask(task${item[i].id})" name="trash-outline"></ion-icon></li>`;
    }
  }
  strikeThroughHtmlEl(taskArray);
  return theme, items;
}

// Function to render strike through
function strikeThroughHtmlEl() {
  taskArray.forEach((element) => {
    const temp = element.id;
    const taskId = document.getElementById(temp);
    // const parentEl = taskId.parentElement;
    // const childEl = parentEl.children[2];
    // console.log(`task${element.id}`);
    console.log(taskId);
    // console.log(parentEl);
    // console.log(childEl);
    if (element.status == TaskStatus.DONE) {
      document
        .getElementById(`task${element.id}`)
        .classList.add("strike-through");
    } else if (taskArray.status == TaskStatus.TODO) {
      document
        .getElementById(`task${element.id}`)
        .classList.remove("strike-through");
    }
  });
}

// Date function
function dateNow() {
  const currentDate = new Date();
  const date = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const dateString = `${date} / ${month} / ${year}`;
  return dateString;
}
document.getElementById("date").innerHTML = `Today's date : ${dateNow()}`;

// Strike out task
const strikeThrough = function (id) {
  let tempId = id.replace("task", "");
  // console.log(childEl, taskId);

  // if (strike == true) {
  //   taskId.classList.remove("strike-through");
  //   childEl.textContent = TaskStatus.TODO;
  //   return (strike = false);
  // } else if (strike == false) {
  //   taskId.classList.add("strike-through");
  //   childEl.textContent = TaskStatus.DONE;
  //   return (strike = true);
  // }

  const strikedTask = taskArray.forEach((element) => {
    if (element.id == tempId) {
      if (element.status == TaskStatus.DONE) {
        // taskId.classList.remove("strike-through");
        // childEl.textContent = TaskStatus.TODO;
        element.status = TaskStatus.TODO;
      } else if (element.status == TaskStatus.TODO) {
        // taskId.classList.add("strike-through");
        // childEl.textContent = TaskStatus.DONE;
        element.status = TaskStatus.DONE;
      }
    }
  });
  tasks.innerHTML = renderList(taskArray);
  return strikedTask;
};

// Switch theme
switchThemeEl.addEventListener("click", function () {
  document.querySelector(".todo-input--warning").classList.remove("active");
  theme = checkTheme();
  removeWarning();
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
