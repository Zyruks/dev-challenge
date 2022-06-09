let classMenu = document.getElementsByClassName("js-burger");
let menuActive = document.getElementsByClassName("js-menu");
let logo = document.getElementsByClassName("js-logo");

function menuOpen() {
  classMenu[0].classList.toggle("burger--opened");
  classMenu[0].setAttribute(
    "aria-expanded",
    classMenu[0].classList.contains("burger--opened")
  );
  menuActive[0].classList.toggle("menu--active");
  logo[0].classList.toggle("logo--opacity");
}
