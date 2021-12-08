import {
  emailInputHandler,
  passwordStatehandler,
  toggleShowPasswordHandler,
  buttonhandler,
} from "./inputHandlers.js";

import {
  loginForm,
  formLabel,
  emailForm,
  passwordForm,
  emailInput,
  passwordInput,
  passwordConfirmationInput,
  errorContainer,
  submitButton,
} from "./domSelectors";

const formInputState = {
  email: false,
  password: false,
};

// Toggles show password
toggleShowPasswordHandler(document.querySelectorAll(".password-field-element"));

// Gets email from local storage and handles input
if (localStorage.getItem("email").length >= 1) {
  emailInput.value = localStorage.getItem("email");
  emailInputHandler(emailInput, emailForm, formInputState);
}

// Sets email to local storage and handles input
const emailStateHandler = (e) => {
  localStorage.setItem("email", e.target.value);
  emailInputHandler(e.target, emailForm, formInputState);
};

// Email input listener
emailInput.addEventListener("input", emailStateHandler);

// Password input listener
passwordInput.addEventListener(
  "input",
  passwordStatehandler({
    passwordForm,
    message: "Password is in the correct format",
    formInputState,
    errorContainer,
    passwordInput,
    passwordConfirmationInput,
  })
);

// Button event listener
loginForm.addEventListener(
  "input",
  buttonhandler({
    formInputState,
    formLabel,
    submitButton,
    passwordInput,
    passwordConfirmationInput,
  })
);
