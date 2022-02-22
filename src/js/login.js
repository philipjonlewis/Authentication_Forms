import { emailInputHandler } from "./handlers/emailhandler.js";

import { emailStateHandler } from "./handlers/emailLocalStorageHandler.js";

import { passwordStatehandler } from "./handlers/passwordHandler.js";

import { toggleShowPasswordHandler } from "./handlers/toggleShowPasswordHandler";

import { buttonHandler } from "./handlers/buttonHandler.js";

import {
  loginForm,
  formLabel,
  emailForm,
  passwordForm,
  emailInput,
  passwordInput,
  submitButton,
} from "./selectors/domSelectors.js";

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

// Email input listener
emailInput.addEventListener("input", emailStateHandler(emailForm,formInputState));

// Password input listener
passwordInput.addEventListener(
  "input",
  passwordStatehandler({
    form: passwordForm,
    message: "Password is in the correct format",
    formInputState,
  })
);

// Button event listener
loginForm.addEventListener(
  "input",
  buttonHandler({
    formInputState,
    formLabel,
    submitButton,
  })
);
