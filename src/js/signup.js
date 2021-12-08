const signupForm = document.getElementById("signup-form");
const formLabel = document.querySelector(".form-label-container p");

const emailForm = document.getElementById("email-form-element");
const passwordForm = document.getElementById("password-form-element");
const passwordConfirmationForm = document.getElementById(
  "passwordConfirmation-form-element"
);

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const passwordConfirmationInput = document.getElementById(
  "passwordConfirmation"
);
const errorContainer = document.getElementById("error-container");

const submitButton = document.querySelector("button");

const stateColorRed = "color:rgb(255,59,48)";
const stateColorGreen = "color: rgb(52,199,89)";
const stateColorBlue = "color:rgb(0,122,255)";

const formInputState = {
  email: false,
  password: false,
  passwordConfirmation: false,
};

const emailStateHandler = (e) => {
  if (e.target.validity.valid) {
    emailForm.children[0].style = "color: rgb(52,199,89)";
    emailForm.children[2].innerText = "Email is in the correct format";
    formInputState[e.target.id] = true;
  } else if (e.target.value.length == 0) {
    emailForm.children[0].style = "color:rgb(0,122,255)";
    emailForm.children[2].innerText = "example format : johndoe@email.com";
  } else {
    emailForm.children[0].style = "color:rgb(255,59,48)";
    emailForm.children[2].innerText = e.target.validationMessage;
    formInputState[e.target.id] = false;
  }
};

const passwordStateHandler = (e) => {
  if (e.target.validity.valid) {
    passwordForm.children[0].style = "color: rgb(52,199,89)";
    passwordForm.children[2].innerText = "Password is in the correct format";
    formInputState[e.target.id] = true;
  } else if (e.target.value.length == 0) {
    passwordForm.children[0].style = "color:rgb(0,122,255)";
    passwordForm.children[2].innerText =
      "8-32 characters containing at least one number, one capital letter and any of the following characters !@#$%^&*.";
  } else {
    passwordForm.children[0].style = "color:rgb(255,59,48)";
    passwordForm.children[2].innerText = e.target.validationMessage;
    formInputState[e.target.id] = false;
  }
};

const passwordConfirmationStateHandler = (e) => {
  if (e.target.validity.valid) {
    passwordConfirmationForm.children[0].style = "color: rgb(52,199,89)";
    passwordConfirmationForm.children[2].innerText =
      "Password Confirmation is in the correct format";
    formInputState[e.target.id] = true;
  } else if (e.target.value.length == 0) {
    passwordConfirmationForm.children[0].style = "color:rgb(0,122,255)";
    passwordConfirmationForm.children[2].innerText =
      "8-32 characters containing at least one number, one capital letter and any of the following characters !@#$%^&*.";
  } else {
    passwordConfirmationForm.children[0].style = "color:rgb(255,59,48)";
    passwordConfirmationForm.children[2].innerText = e.target.validationMessage;
    formInputState[e.target.id] = false;
  }
};

// Email input listener
emailInput.addEventListener("input", emailStateHandler);

// Password input listener
passwordInput.addEventListener("input", passwordStateHandler);

// Password Confirmation input listener
passwordConfirmationInput.addEventListener(
  "input",
  passwordConfirmationStateHandler
);

// Button event listener
window.addEventListener("input", (e) => {
  const formState = Object.entries(formInputState)
    .flat()
    .filter((x) => typeof x == "boolean")
    .every((y) => y === true);

  if (formState && passwordInput.value != passwordConfirmationInput.value) {
    errorContainer.innerText = "Password is not the same with its confirmation";
  }

  if (formState && passwordInput.value == passwordConfirmationInput.value) {
    formLabel.style = "color: rgb(52,199,89)";
    errorContainer.innerText = "";
    //Button must be enabled and form label must be green
    submitButton.disabled = false;
  } else {
    formLabel.style = "color:rgb(0,122,255)";
    errorContainer.innerText = "";
    submitButton.disabled = true;
  }
});

// Object.entries(formInputState).forEach((x) => {
//   console.log(x);
// });
