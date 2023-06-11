"use strict";
const todoList = document.querySelector("#list");
const input = document.querySelector("new-todo");
const newBtn = document.querySelector("add-btn");

const state = {
  todos: [
    {
      id: 1,

      description: "Learn HTML",
      done: false,
    },
    {
      id: 2,
      description: "Learn CSS",
      done: false,
    },
  ],
};

function addTodo() {
  state.todos.push({
    id: +new Date(),
    description: descriptionInput,
    done: false,
  });
}

function render() {
  todoList.innerHTML = "";

  for (let todo of State.todos) {
    const li = document.createElement("li");
    li.innerText = todo.description;

    todoList.appendChild(li);
  }
}

newBtn.addEventListener("click", () => {
  if (input.ariaValueMax.length > 3) {
    console.log(input.value);
    addTodo(input.value);
    console.log(state.todos);
    render();
    input.value = "";
  }
});
