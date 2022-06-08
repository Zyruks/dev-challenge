/* ******************* *\
? #Values Update
\* ******************* */

const prices = document.querySelectorAll(".js-actual-price");
// Select the actual Price
const original_prices = document.querySelectorAll(".js-original-price");
// Select the original Price
const count_btn = document.querySelectorAll(".js-btn");
// Select the buttons
const counter = document.querySelectorAll(".js-counter");
// Select the quantity
const shipping = document.querySelector(".js-shipping");
// Select the shipping price
const total = document.querySelector(".js-final-price");
// Select the total price

function updateValues() {
  let newTotal = parseInt(shipping.dataset.price);

  prices.forEach((item) => {
    let index = Array.from(prices).indexOf(item);
    //get the index from the prices array
    let newCounter = counter[index].dataset.quantity;
    // Get the counter number
    let newPrice = (item.dataset.price * newCounter).toFixed(2);
    // Multiply Price * newCounter
    counter[index].innerHTML = newCounter;
    // update and put the newCounter in HTML
    item.innerHTML = `$${newPrice}`;
    // update and put the newPrice on HTML
    original_prices[index].innerHTML = `$${(
      original_prices[index].dataset.price * newCounter
    ).toFixed(2)}`;
    // update and put the Original Prices in HTML with 2 Decimal (toFixed)
    newTotal += parseFloat(newPrice);
    //convert to Floating Point number the Total Price
  });
  total.innerHTML = `$${newTotal.toFixed(2)}`;
  // Update Total Price
}
count_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Add Event Listener to buttons
    let index = Array.from(count_btn).indexOf(btn) <= 1 ? 0 : 1;
    // Array of buttons
    let newQuantity = eval(
      counter[index].dataset.quantity + btn.dataset.type + "1"
    );
    // Update Quantity with every click and + 1
    if (newQuantity >= 1) {
      counter[index].dataset.quantity = newQuantity;
      updateValues();
    }
    //Update counter and use function updateValues
  });
});

/* ******************* *\
? #Values Update End
\* ******************* */

/* ******************* *\
? #Form Validation
\* ******************* */

// Select the form
const form = document.querySelector(".js-form");
// Select the inputs
const formInputs = document.querySelectorAll(".js-verify-input");
// Check if the input are valid
const email = document.getElementById("user_email");
const phone = document.getElementById("user_phone");
const full_name = document.getElementById("user_full-name");
const address = document.getElementById("user_address");
const city = document.getElementById("user_city");
const country = document.getElementById("user_country");
const postal = document.getElementById("user_postal-code");
// if valid success color, if invalid error color
// submit if everything correct

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // get the values from the inputs
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const fullNameValue = full_name.value.trim();
  const addressValue = address.value.trim();
  const cityValue = city.value.trim();
  const countryValue = country.value.trim();
  const postalValue = postal.value.trim();

  if (emailValue === "") {
    //show error
    //add error class
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not Valid");
  } else {
    // add success class
    setSuccessFor(email);
  }

  if (phoneValue === "") {
    //add error class
    setErrorFor(phone, "Phone number cannot be blank");
  } else if (!phoneNumber(phoneValue)) {
    setErrorFor(phone, "Not valid number");
  } else {
    // add success class
    setSuccessFor(phone);
  }

  if (fullNameValue === "") {
    //show error
    //add error class
    setErrorFor(full_name, "Full name cannot be blank");
  } else if (!fullNameValidation(fullNameValue)) {
    setErrorFor(full_name, "Name is invalid");
  } else {
    // add success class
    setSuccessFor(full_name);
  }

  if (addressValue === "") {
    //show error
    //add error class
    setErrorFor(address, "Phone number cannot be blank");
  } else if (!addressValidation(addressValue)) {
    setErrorFor(address, "Invalid Address");
  } else {
    // add success class
    setSuccessFor(address);
  }

  if (cityValue === "") {
    //add error class
    setErrorFor(city, "city  cannot be blank");
  } else if (!cityValidation(cityValue)) {
    setErrorFor(city, "Name is not valid number");
  } else {
    // add success class
    setSuccessFor(city);
  }

  if (countryValue === "") {
    //add error class
    setErrorFor(country, "Please Select a country");
  } else if (!countryValidation(countryValue)) {
    setErrorFor(country, "Country name invalid");
  } else {
    // add success class
    setSuccessFor(country);
  }

  if (postalValue === "") {
    //add error class
    setErrorFor(postal, "Phone number cannot be blank");
  } else if (!postalNumber(postalValue)) {
    setErrorFor(postal, "Not valid Postal Code");
  } else {
    // add success class
    setSuccessFor(postal);
  }

  //success Message
  if (
    countryValidation(countryValue) &&
    fullNameValidation(fullNameValue) &&
    addressValidation(addressValue) &&
    cityValidation(cityValue) &&
    postalNumber(postalValue) &&
    isEmail(emailValue) &&
    phoneNumber(phoneValue) &&
    check()
  ) {
    openModal.addEventListener("click", () => {
      modal.showModal();
    });
  }
  closeModal.addEventListener("click", () => {
    modal.close();
  });
}
//* Function for Success
function setSuccessFor(input) {
  const inputBox = input.parentElement;
  const formInput = inputBox.querySelector(".form__input");
  const small = inputBox.querySelector(".error-message");
  const icon = inputBox.querySelector(".icon-validation");

  small.innerHTML = "";
  icon.innerHTML = "check_circle";
  // add success class

  formInput.className = "form__input form__input--success";
  icon.className += " success";
  icon.classList.remove("error");
}

//* Function for error
function setErrorFor(input, message) {
  const inputBox = input.parentElement;
  const small = inputBox.querySelector(".error-message");
  const icon = inputBox.querySelector(".icon-validation");
  const formInput = inputBox.querySelector(".form__input");

  // add error message inside small
  small.innerText = message;
  icon.innerHTML = "error";
  // add error class
  icon.classList.remove("success");
  formInput.className = "form__input form__input--error ";
  icon.className += " icon-validation error ";
}

/* ******************* *\
* #Function for input Validation
\* ******************* */
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
function phoneNumber(phone) {
  // This function check if they are 10 numbers
  return /^\d{10}$/.test(phone);
}
function fullNameValidation(fullName) {
  //This Function check if use alphabetic character min or max and last name too
  return /^[A-Za-z]+ [a-zA-Z]+$/.test(fullName);
}
function addressValidation(address) {
  // This function check if the input start with 5 number and name
  return /^[0-9\d{5}]+ [a-zA-Z]+$/.test(address);
}
function cityValidation(city) {
  // This function check if the input is  alphabetical
  return /^[A-Za-z]+$/.test(city);
}
function countryValidation(country) {
  // This function check  if the input is alphabetical
  return /^[A-Za-z]+$/.test(country);
}
function postalNumber(postal) {
  // This function check  if the input have 5 numbers
  return /^\d{5}$/.test(postal);
}

let modal = document.querySelector(".modal");
const openModal = document.querySelector(".submit-btn");
const closeModal = document.querySelector(".modal__btn-close");
/* ******************* *\
* #Function for input Validation
\* ******************* */

/* ******************* *\
? #Form Validation End
\* ******************* */

const checkBox = document.querySelector(".checkbox-input");

function check() {
  if (checkBox.checked) {
    modal.showModal();
  } else {
    alert("You didn't check it! ");
  }
}
