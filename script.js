"use strict";

// User validation variables
const localUsername = "akshay";
const localPassword = "123";
const formEl = document.getElementById("login-form");
const uNameEl = document.getElementById("username");
const pWordEl = document.getElementById("password");
const submitBtnEl = document.getElementById("submit");

formEl.addEventListener("submit", (event) => {
  validateUser();
  if (isFormValid() == true) {
    formEl.submit();
  } else {
    event.preventDefault();
  }
});

const validateUser = function () {
  // Username validation
  if (!(uNameEl.value.trim() == localUsername)) {
    displayError(uNameEl, "Wrong username");
  } else {
    displaySuccess(uNameEl);
  }
  // Password validation
  if (!(pWordEl.value.trim() == localPassword)) {
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
