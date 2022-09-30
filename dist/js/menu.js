const menuBtn = document.querySelector(".menu-btn");
const burger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-menu__item");
const navLinks = document.querySelectorAll(".nav-menu__link");
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
    document.querySelector('body').classList.add("stopScroll")
    showMenu = true;
  } else {
    logo.classList.remove("open")
    burger.classList.remove("open");
    nav.classList.remove("open");
    navMenu.classList.remove("open");
    navItems.forEach((item) => {
      item.classList.remove("open");
    });
    document.querySelector('body').classList.remove("stopScroll")
    showMenu = false;
  }
};
const showHideMenu = (e) =>{
  if(e.target.matches(".nav-menu__link")){
    logo.classList.remove("open")
    burger.classList.remove("open");
    nav.classList.remove("open");
    navMenu.classList.remove("open");
    navItems.forEach((item) => {
      item.classList.remove("open");
    });
    document.querySelector('body').classList.remove("stopScroll")
    showMenu = false;
  }
  else{
  logo.classList.add("open")
  burger.classList.add("open");
  nav.classList.add("open");
  navMenu.classList.add("open");
  navItems.forEach((item) => {
    item.classList.add("open");
  });
  showMenu = true;
}
}

menuBtn.addEventListener("click", toggleMenu);
navMenu.addEventListener("click", showHideMenu);
