import { passwordStatehandler } from "./handlers/passwordHandler.js";

import { toggleShowPasswordHandler } from "./handlers/toggleShowPasswordHandler";

import { passwordConfirmationHandler } from "./handlers/passwordConfirmationHandler.js";

import { buttonHandler } from "./handlers/buttonHandler.js";

import {
  editPasswordForm,
  formLabel,
  currentPasswordForm,
  passwordForm,
  currentPasswordInput,
  passwordConfirmationForm,
  passwordInput,
  passwordConfirmationInput,
  errorContainer,
  submitButton,
} from "./selectors/domSelectors.js";

const formInputState = {
  previousPassword: false,
  password: false,
  passwordConfirmation: false,
};

// Toggles show password
toggleShowPasswordHandler(document.querySelectorAll(".password-field-element"));

// Current input listener
currentPasswordInput.addEventListener(
  "input",
  passwordStatehandler({
    form: currentPasswordForm,
    message: "Password is in the correct format",
    formInputState,
  })
);

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
editPasswordForm.addEventListener(
  "input",
  buttonHandler({
    formInputState,
    formLabel,
    submitButton,
    passwordInput,
    passwordConfirmationInput,
  })
);
