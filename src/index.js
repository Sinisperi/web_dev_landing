const x = document.querySelector(".x");
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu-overlay");
let shown = false;

const toggle = () => {
  if (shown) {
    menu.classList.remove("shown");
  } else {
    menu.classList.add("shown");
  }
  shown = !shown;
};

x.addEventListener("click", toggle);
burger.addEventListener("click", toggle);
