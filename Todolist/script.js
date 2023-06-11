"use strict";

let myInput = document.getElementById("new-todo");
let btn = document.getElementById("add-btn");
let liste = document.getElementById("list");
let btnRemove = document.getElementById("remove-btn");

btn.addEventListener("click", () => {
  let newTodo = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newTodo.appendChild(checkbox);

  let todoText = document.createElement("span");
  todoText.innerText = myInput.value;
  newTodo.appendChild(todoText);

  liste.appendChild(newTodo);
  myInput.value = "";
});

btnRemove.addEventListener("click", () => {
  let checkboxes = document.querySelectorAll("#list input[type='checkbox']");

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      let listItem = checkbox.parentNode;
      listItem.parentNode.removeChild(listItem);
    }
  });
});
