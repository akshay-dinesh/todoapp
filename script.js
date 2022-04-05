"use strict";

// User validation variables

const formEl = document.getElementById("login-form");
const uNameEl = document.getElementById("username");
const pWordEl = document.getElementById("password");
// const submitBtnEl = document.getElementById("submit");
const themeBtnEl = document.querySelector(".icon--theme");
let htmlEl = document.querySelector("html");

let theme;

checkTheme();

function checkTheme() {
  if (htmlEl.classList.contains("light")) {
    theme = true;
  } else {
    theme = false;
  }
  return theme;
}

formEl.addEventListener("submit", (event) => {
  validateUser();
  if (isFormValid() == true) {
    formEl.submit();
  } else {
    event.preventDefault();
  }
});

// Session storage
const a = [];
const user1 = {
  username: "akshay",
  password: "123",
};
sessionStorage.setItem("currentUser", JSON.stringify(user1));
console.log(JSON.parse(sessionStorage.getItem("currentUser")));
// for (let i = 0; i < sessionStorage.length; i++) {
//   const key = sessionStorage.key(i);
//   console.log(`${key} =>${sessionStorage.getItem(key)}`);
// }
const key = sessionStorage.key;
const localUsername = sessionStorage.getItem(key);
const localPassword = key;
console.log(localUsername, localPassword);
// https://www.youtube.com/watch?v=RxUc6ZWwgfw&ab_channel=dcode

const validateUser = function () {
  // Username validation
  if (!(uNameEl.value.trim() == "akshay")) {
    displayError(uNameEl, "Wrong username");
  } else {
    displaySuccess(uNameEl);
  }
  // Password validation
  if (!(pWordEl.value.trim() == "123")) {
    displayError(pWordEl, "Wrong password");
  } else {
    displaySuccess(pWordEl);
  }
};

const displayError = function (element, errorMessage) {
  const parent = element.parentElement;
  if (parent.classList.contains("success")) {
    parent.classList.remove("success");
  }
  parent.classList.add("failure");
  const paragraphEl = parent.querySelector(".error-message");
  paragraphEl.textContent = errorMessage;
  paragraphEl.style.visibility = "visible";
  const iconError = parent.querySelector(".icon--error");
  const iconSuccess = parent.querySelector(".icon--success");
  iconSuccess.classList.remove("active");
  iconError.classList.add("active");
};

const displaySuccess = function (element) {
  const parent = element.parentElement;
  if (parent.classList.contains("failure")) {
    parent.classList.remove("failure");
  }
  parent.classList.add("success");
  const paragraphEl = parent.querySelector(".error-message");
  paragraphEl.style.visibility = "hidden";
  const iconError = parent.querySelector(".icon--error");
  const iconSuccess = parent.querySelector(".icon--success");
  iconError.classList.remove("active");
  iconSuccess.classList.add("active");
};

// Form submit function
function isFormValid() {
  let result = true;
  const allDivsEl = document.querySelectorAll(".login-form-input");

  allDivsEl.forEach((container) => {
    if (container.classList.contains("failure")) {
      result = false;
    }
  });
  return result;
}

themeBtnEl.addEventListener("click", function () {
  theme = checkTheme();
  let classNames = {
    htmlEl: "html",
    sectionLoginEl: ".section-login",
    loginEl: ".login",
    btnEl: ".btn",
    sectionHeaderEl: ".section-header",
    sectionFooterEl: ".section-footer",
    themeIconEl: ".icon--theme",
    input1El: ".input1",
    input2El: ".input2",
    errorMsg1El: ".error1",
    errorMsg2El: ".error2",
    iconErrorEl: ".icon--error",
    iconSUccessEl: ".icon--success",
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
