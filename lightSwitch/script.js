let currentState = "Light mode";

function newTitle() {
  document.title =
    currentState === "Light mode" ? "Good Morning" : "Good Night";
}
document.getElementById("btn").addEventListener("click", () => {
  document.body.classList.toggle("body--dark");
  currentState = currentState === "Light mode" ? "Dark mode" : "Light mode";
  console.log(currentState === "Light mode" ? "AN" : "AUS");
  newTitle();

  let button = document.getElementById("btn");
  button.classList.toggle("button--light");
  button.classList.toggle("button--dark");
});
