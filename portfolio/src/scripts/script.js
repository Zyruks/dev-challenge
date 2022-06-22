// Select buttons for page 1 or 2
const btnOne = document.querySelector(".js-btn-1");
const btnTwo = document.querySelector(".js-btn-2");
const btnLess = document.querySelector(".js-btn-lt");
const btnGreater = document.querySelector(".js-btn-gt");

// Buttons for project type
const btnAll = document.querySelector(".js-btn-all");
const btnBeginner = document.querySelector(".js-btn-beginner");
const btnIntermediate = document.querySelector(".js-btn-intermediate");
const projects = document.querySelectorAll(".project");
const buttonArray = [btnAll, btnBeginner, btnIntermediate];

// Select pages
const pageOne = document.querySelector(".js-page-1");
const pageTwo = document.querySelector(".js-page-2");

/* ************* *\
 * #Events Listeners
/* ************* */

/*
 * Adding an event listener to the button. When the button is clicked, it will call the function eliminateAnimation and moveToPage1.
 */

  /* ************* *\
    ? #Events Listeners for page-counter
  /* ************* */
btnOne.addEventListener("click", () => {
  eliminateAnimation("active-animation-up");
  moveToPage1();
});

btnTwo.addEventListener("click", () => {
  eliminateAnimation("active-animation-up");
  moveToPage2();
});

btnLess.addEventListener("click", () => {
  eliminateAnimation("active-animation-up");
  moveToPage1();
});

btnGreater.addEventListener("click", () => {
  eliminateAnimation("active-animation-up");
  moveToPage2();
});
  /* ************* *\
    ? #Events Listeners for page-counter end
  /* ************* */

  /* ************* *\
    ? #Events Listeners for project type 
  /* ************* */

/*
 * Select All Beginner and Intermediate projects and make it back to normal
 */

btnAll.addEventListener("click", () => {
  
  let i = 0;
  while (i < projects.length) {
    if (projects[i].dataset.type) {
      console.log("all");
      projects[i].classList.remove("display-none");
      projects[i].classList.add("active-animation-up");
    }

    i++;
  }
  buttonActive(btnBeginner, btnIntermediate, btnAll);
});

btnBeginner.addEventListener("click", () => {
  displayAnimation("beginner", "intermediate");
  buttonActive(btnAll, btnIntermediate, btnBeginner);
});

btnIntermediate.addEventListener("click", () => {
  displayAnimation("intermediate", "beginner");
  buttonActive(btnAll, btnBeginner, btnIntermediate);
  moveToPage1();
});

btnAll.addEventListener("mouseover", () => {

  eliminateAnimation("active-animation-up");
});
btnBeginner.addEventListener("mouseover", () => {

  eliminateAnimation("active-animation-up");
});
btnIntermediate.addEventListener("mouseover", () => {

  eliminateAnimation("active-animation-up");
});
/* ************* *\
    ? #Events Listeners for project type end
  /* ************* */

/* ************* *\
* #Events Listeners end
/* ************* */

/* ************* *\
 * #functions
/* ************* */

/*
 * When the user clicks on the first button, the first button becomes active, the second button becomes
 * inactive, the first page becomes active, the first page is animated, the second page is animated,
 * the second page becomes inactive.
 */
function moveToPage1() {
  btnOne.classList.add("page-counter__btn--active");
  btnTwo.classList.remove("page-counter__btn--active");

  pageOne.classList.add("active-animation-left");
  pageOne.classList.add("project-wrapper--active");

  pageOne.classList.remove("leaving-animation-left");
  pageTwo.classList.remove("active-animation-right");

  pageTwo.classList.add("leaving-animation-right");
  pageTwo.classList.remove("project-wrapper--active");
}

/*
 * When the button is clicked, remove the active class from the first button, add the active class to
 * the second button, remove the active class from the first page, add the active class to the second
 * page, add the leaving animation to the first page, remove the leaving animation from the second
 * page, and remove the active class from the second page.
 */
function moveToPage2() {
  btnOne.classList.remove("page-counter__btn--active");
  btnTwo.classList.add("page-counter__btn--active");

  pageOne.classList.remove("active-animation-left");
  pageTwo.classList.add("active-animation-right");
  pageTwo.classList.add("project-wrapper--active");

  pageOne.classList.add("leaving-animation-left");

  pageTwo.classList.remove("leaving-animation-right");
  pageOne.classList.remove("project-wrapper--active");
}
/*
 * It loops through all the projects and if the project's data-type is equal to the type1 argument, it
 * removes the display-none class and adds the active-animation-up class. If the project's data-type is
 * equal to the type2 argument, it adds the display-none class and removes the active-animation-up
 * class.
 * @param type1 - the type of project you want to display
 * @param type2 - the type of projects that are currently displayed
 ? @param Options = "beginner", "intermediate"

 */

function displayAnimation(type1, type2) {
  let i = 0;
  while (i < projects.length) {
    if (projects[i].dataset.type == type1) {
      projects[i].classList.remove("display-none");
      projects[i].classList.add("active-animation-up");
    } else if (projects[i].dataset.type == type2) {
      projects[i].classList.add("display-none");
      projects[i].classList.remove("active-animation-up");
    }

    i++;
  }
}

/*
 * If the project has a data-type attribute, remove the animation class from it.
 * @param animation - the animation class you want to add
 ? @param Options = "active-animation-up", "active-animation-right", "active-animation-left"
 */

function eliminateAnimation(animation) {
  let i = 0;
  while (i < projects.length) {
    if (projects[i].dataset.type) {
      projects[i].classList.remove(animation);
    }
    i++;
  }
}

/* 
 * Remove the class 'type-btn--active' from the first two buttons, and add it to the third button.
 * @param btn1 - the first button
 * @param btn2 - the second button
 * @param btn3 - the button that should be active, the button that is clicked
 ? @param Options = btnAll, btnBeginner, btnIntermediate
 */
function buttonActive(btn1, btn2, btn3) {
  btn1.classList.remove("type-btn--active");
  btn2.classList.remove("type-btn--active");
  btn3.classList.add("type-btn--active");
}
/* ************* *\
  #functions ends
/* ************* */
