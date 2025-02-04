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

let slideIndex = 1;

const slides = Array.from(document.querySelectorAll(".mySlides"));
const dots = Array.from(document.querySelectorAll(".dot"));
const pre = document.querySelector(".prev");
const next = document.querySelector(".next");
showSlides(1);

setInterval(() => {
  plusSlide(1);
}, 5000);

pre.addEventListener("click", () => {
  plusSlide(-1);
});
next.addEventListener("click", () => {
  plusSlide(1);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide(index);
  });
});

function plusSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const numOfSlide = slides.length;
  // loop over when slide number goes out of range
  if (n > numOfSlide) slideIndex = 1;
  if (n < 1) slideIndex = numOfSlide;
  // loop over to change display of all slides and dots
  for (let i = 0; i < numOfSlide; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // show slide and dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
