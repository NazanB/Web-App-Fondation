"use strict";

let passwordfield = document.getElementById("psw");
let btn = document.getElementById("btnn");

btn.addEventListener("click", () => {
  if (passwordfield.type === "password") {
    passwordfield.type = "text";
    btn.textContent = "Hide Password";
  } else {
    passwordfield.type = "password";
    btn.textContent = "Show Password";
  }
});
