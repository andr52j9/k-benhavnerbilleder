import "./style.css";

document.querySelector("#darkMode").addEventListener("click", addDark);

function addDark() {
  document.documentElement.classList.add("dark");
}

document.querySelector("#lightMode").addEventListener("click", removeDark);

function removeDark() {
  document.documentElement.classList.remove("dark");
}
