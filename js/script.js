// Show navigation menu //
const header = document.querySelector(".header");
const hamburger = document.querySelector(".header__hamburger");

hamburger.addEventListener("click", () => {
  header.classList.toggle("active");
});
