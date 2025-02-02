import "./styles/style.css";

const btn = document.querySelector(".click-dropdown .btn-dropdown");
btn.addEventListener("click", () => {
  const menu = document.querySelector("#dropdown");
  menu.classList.toggle("show");
});
