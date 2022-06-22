/* ******************* *\
? #Values Update
\* ******************* */

// Select buttons
const btnOne = document.querySelector(".js-btn-1");
const btnTwo = document.querySelector(".js-btn-2");
const btnLess = document.querySelector(".js-btn-lt");
const btnGreater = document.querySelector(".js-btn-gt");
// Select pages
const pageOne = document.querySelector(".js-page-1");
const pageTwo = document.querySelector(".js-page-2");

// Update classes on click

btnOne.addEventListener("click", () => {
  let i = 0;
  while (i < projects.length) {
    if (projects[i].dataset.type) {
      projects[i].classList.remove("active-animation-up");
    }
    i++;
  }
  moveToPage1();
});

btnTwo.addEventListener("click", () => {
  let i = 0;
  while (i < projects.length) {
    if (projects[i].dataset.type) {
      projects[i].classList.remove("active-animation-up");
    }
    i++;
  }
  moveToPage2();
});

btnLess.addEventListener("click", () => {
  let i = 0;
  while (i < projects.length) {
    if (projects[i].dataset.type) {
      projects[i].classList.remove("active-animation-up");
    }
    i++;
  }
  moveToPage1();
});

btnGreater.addEventListener("click", () => {
  let i = 0;
  while (i < projects.length) {
    if (projects[i].dataset.type) {
      projects[i].classList.remove("active-animation-up");
    }
    i++;
  }
  moveToPage2();
});

function moveToPage1() {
  btnOne.classList.add("page-counter__btn--active"); // Add class for active btn
  btnTwo.classList.remove("page-counter__btn--active");

  pageOne.classList.add("active-animation-left");
  pageOne.classList.add("project-wrapper--active");

  pageOne.classList.remove("leaving-animation-left");
  pageTwo.classList.remove("active-animation-right");

  pageTwo.classList.add("leaving-animation-right");
  pageTwo.classList.remove("project-wrapper--active"); // Remove active state for page Two
}
function moveToPage2() {
  btnOne.classList.remove("page-counter__btn--active");
  btnTwo.classList.add("page-counter__btn--active"); // Add class for active btn

  pageOne.classList.remove("active-animation-left");
  pageTwo.classList.add("active-animation-right");
  pageTwo.classList.add("project-wrapper--active");

  pageOne.classList.add("leaving-animation-left");

  pageTwo.classList.remove("leaving-animation-right");
  pageOne.classList.remove("project-wrapper--active"); // Remove active state for page Two
}

// Filter by type

const btnAll = document.querySelector(".js-btn-all");
const btnBeginner = document.querySelector(".js-btn-beginner");
const btnIntermediate = document.querySelector(".js-btn-intermediate");
const projects = document.querySelectorAll(".project");

btnAll.addEventListener("mouseover", () => {
  let i = 0;
  while (i < projects.length) {
    if (projects[i].dataset.type) {
      projects[i].classList.remove("active-animation-up");
    }
    i++;
  }
});

btnBeginner.addEventListener("mouseover", () => {
  let i = 0;
  while (i < projects.length) {
    if (projects[i].dataset.type) {
      projects[i].classList.remove("active-animation-up");
    }
    i++;
  }
});

btnIntermediate.addEventListener("mouseover", () => {
  let i = 0;
  while (i < projects.length) {
    if (projects[i].dataset.type) {
      projects[i].classList.remove("active-animation-up");
    }
    i++;
  }
});

btnAll.addEventListener("click", () => {
  // Select All Beginner and Intermediate and make it back to normal
  let i = 0;
  while (i < projects.length) {
    if (projects[i].dataset.type) {
      console.log("all");
      projects[i].classList.remove("display-none");
      projects[i].classList.add("active-animation-up");
    }

    i++;
  }
});

btnBeginner.addEventListener("click", () => {
  // Select All Beginner and show it
  let i = 0;
  while (i < projects.length) {
    if (projects[i].dataset.type == "beginner") {
      console.log("Hola");
      projects[i].classList.remove("display-none");
      projects[i].classList.add("active-animation-up");
    } else if (projects[i].dataset.type == "intermediate") {
      console.log("adios");
      projects[i].classList.add("display-none");
      projects[i].classList.remove("active-animation-up");
    }

    i++;
  }
});

btnIntermediate.addEventListener("click", () => {
  // Select All   Intermediate and Show it
  let i = 0;
  while (i < projects.length) {
    if (projects[i].dataset.type == "intermediate") {
      console.log("Hola");
      projects[i].classList.remove("display-none");
      projects[i].classList.add("active-animation-up");
    } else if (projects[i].dataset.type == "beginner") {
      console.log("adios");
      projects[i].classList.add("display-none");
      projects[i].classList.remove("active-animation-up");
    }
    i++;
  }

  moveToPage1();
});
