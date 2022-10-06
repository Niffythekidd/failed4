const toggleBtn = document.querySelector(".toggle-btn");
const falseNav = document.querySelector(".false-nav");
const falseLinks = document.querySelector(".false-links");

toggleBtn.addEventListener("click", () => {
  falseNav.style.display = "block";
});

falseLinks.addEventListener("click", () => {
   falseNav.style.display = "none";
});
