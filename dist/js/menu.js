const menuBtn = document.querySelector(".menu-btn");
const burger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-menu__item");
const logo = document.querySelector(".nav-logo")

let showMenu = false;

const toggleMenu = () => {
  if (!showMenu) {
    logo.classList.add("open")
    burger.classList.add("open");
    nav.classList.add("open");
    navMenu.classList.add("open");
    navItems.forEach((item) => {
      item.classList.add("open");
    });
    showMenu = true;
  } else {
    logo.classList.remove("open")
    burger.classList.remove("open");
    nav.classList.remove("open");
    navMenu.classList.remove("open");
    navItems.forEach((item) => {
      item.classList.remove("open");
    });
    showMenu = false;
  }
};

menuBtn.addEventListener("click", toggleMenu);