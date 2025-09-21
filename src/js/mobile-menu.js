const menu = document.querySelector("[data-menu]");
const menuToggleBtn = document.querySelector("[data-menu-toggle]");

const toggleMenu = () => {
  menu.classList.toggle("open");
  menuToggleBtn.classList.toggle("open");
};

const closeMenu = () => {
  if (event.target.tagName === "A") {
    menu.classList.remove("open");
    menuToggleBtn.classList.remove("open");
  }
};

menu.addEventListener("click", closeMenu);
menuToggleBtn.addEventListener("click", toggleMenu);
