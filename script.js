"use strict";
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
