const section = document.querySelector(".section");
const toggleButton = document.querySelector(".toggle");

// Attach an event handler to toggle the "dark" class on the section
toggleButton.addEventListener("click", function() {
  section.classList.toggle("dark");
});

/* 
-----These methods achieve the same result---
toggleButton.onclick = function () {
  section.classList.toggle("dark");
}; 
*/
