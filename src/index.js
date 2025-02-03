import "./styles/style.css";

const btn = document.querySelector(".click-dropdown .btn-dropdown");
btn.addEventListener("click", () => {
  const menu = document.querySelector("#dropdown");
  menu.classList.toggle("show");
});

document.addEventListener("click", (event) => {
  const isDropdownBtn = event.target.matches("[data-dropdown-button]");
  const currentDropdown = event.target.closest("[data-dropdown]");
  if (!isDropdownBtn && currentDropdown != null) return;
  if (isDropdownBtn) {
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});
