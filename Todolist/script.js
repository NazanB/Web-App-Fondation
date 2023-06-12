"use strict";

const myInput = document.getElementById("new-todo");
const btn = document.getElementById("add-btn");
const liste = document.getElementById("list");
const btnRemove = document.getElementById("remove-btn");
const checkList = document.getElementById("todoList");

let filter = document.getElementById("div-filter");
filter.addEventListener("click", () => {
  if (document.getElementById("input-all").checked) {
  } else if (document.getElementById("input-open").checked) {
  } else if (document.getElementById("input-done").checked) {
  }
});

btn.addEventListener("click", () => {
  if (myInput.value.trim().length > 0) {
    const newTodo = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newTodo.appendChild(checkbox);

    //console.log(document.getElementById("input-all").checked);

    const todoText = document.createElement("span");
    todoText.innerText = myInput.value;
    newTodo.appendChild(todoText);

    liste.appendChild(newTodo);
    myInput.value = "";
  }
});

btnRemove.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll("#list input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const listItem = checkbox.parentNode;
      listItem.parentNode.removeChild(listItem);
    }
  });
});
