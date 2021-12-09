import { usernameInputHandler } from "./handlers/usernameHandler.js";

import { passwordStatehandler } from "./handlers/passwordHandler.js";

import { toggleShowPasswordHandler } from "./handlers/toggleShowPasswordHandler";

import { passwordConfirmationHandler } from "./handlers/passwordConfirmationHandler.js";

import { buttonHandler } from "./handlers/buttonHandler.js";

import {
  editUsernameForm,
  formLabel,
  usernameForm,
  passwordForm,
  passwordConfirmationForm,
  usernameInput,
  passwordInput,
  passwordConfirmationInput,
  errorContainer,
  submitButton,
} from "./selectors/domSelectors.js";

const formInputState = {
  username: false,
  password: false,
  passwordConfirmation: false,
};

// Toggles show password
toggleShowPasswordHandler(document.querySelectorAll(".password-field-element"));

// Gets email from local storage and handles input
if (
  localStorage.getItem("username") &&
  localStorage.getItem("username").length >= 1
) {
  usernameInput.value = localStorage.getItem("username");
  usernameInputHandler(usernameInput, usernameForm, formInputState);
}

// Sets email to local storage and handles input
const usernameStateHandler = (e) => {
  localStorage.setItem("username", e.target.value);
  usernameInputHandler(e.target, usernameForm, formInputState);
};

// username input listener
usernameInput.addEventListener("input", usernameStateHandler);

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
editUsernameForm.addEventListener(
  "input",
  buttonHandler({
    formInputState,
    formLabel,
    submitButton,
    passwordInput,
    passwordConfirmationInput,
  })
);
