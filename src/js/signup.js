import { emailInputHandler } from "./handlers/emailhandler.js";

import { emailStateHandler } from "./handlers/emailLocalStorageHandler.js";

import { passwordStatehandler } from "./handlers/passwordHandler.js";

import { toggleShowPasswordHandler } from "./handlers/toggleShowPasswordHandler";

import { passwordConfirmationHandler } from "./handlers/passwordConfirmationHandler.js";

import { buttonHandler } from "./handlers/buttonHandler.js";

import {
  signupForm,
  formLabel,
  emailForm,
  passwordForm,
  passwordConfirmationForm,
  emailInput,
  passwordInput,
  passwordConfirmationInput,
  errorContainer,
  submitButton,
} from "./selectors/domSelectors.js";

const formInputState = {
  email: false,
  password: false,
  passwordConfirmation: false,
};


// Toggles show password
toggleShowPasswordHandler(document.querySelectorAll(".password-field-element"));


// Email input listener
emailInput.addEventListener("input", emailStateHandler(emailForm,formInputState));

// Gets email from local storage and handles input
if (localStorage.getItem("email").length >= 1) {
  emailInput.value = localStorage.getItem("email");
  emailInputHandler(emailInput, emailForm, formInputState);
}

// Password input listener
passwordInput.addEventListener(
  "input",
  passwordStatehandler({
    form: passwordForm,
    message: "Password is in the correct format",
    formInputState,
    callback: passwordConfirmationHandler(
      passwordInput,
      passwordConfirmationInput,
      errorContainer
    ),
  })
);

// Password Confirmation input listener
passwordConfirmationInput.addEventListener(
  "input",
  passwordStatehandler({
    form: passwordConfirmationForm,
    message: "Password is in the correct format",
    formInputState,
    callback: passwordConfirmationHandler(
      passwordInput,
      passwordConfirmationInput,
      errorContainer
    ),
  })
);

// Button event listener
signupForm.addEventListener(
  "input",
  buttonHandler({
    formInputState,
    formLabel,
    submitButton,
    passwordInput,
    passwordConfirmationInput,
  })
);
