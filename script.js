"use strict";

// User validation variables
const localUsername = "akshay";
const localPassword = "123";
const formEl = document.getElementById("login-form");
const uNameEl = document.getElementById("username");
const pWordEl = document.getElementById("password");
const submitBtnEl = document.getElementById("submit");

formEl.addEventListener("submit", (event) => {
  // event.preventDefault();
  validateUser();
});

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
