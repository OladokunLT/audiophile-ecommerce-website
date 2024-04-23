let menuIconEl = document.getElementById("menu-icon");
let navEl = document.getElementById("nav-items");

menuIconEl.style.cursor = "pointer";

function toggleMenu() {
  if (navEl.style.display == "flex") {
    navEl.style.display = "none";
  } else {
    navEl.style.display = "flex";
  }
}

console.log(4 == 5);

menuIconEl.addEventListener("click", toggleMenu);
