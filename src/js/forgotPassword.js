import { emailInputHandler } from "./handlers/emailhandler.js";

import { buttonHandler } from "./handlers/buttonHandler.js";

import {
  forgotPasswordForm,
  formLabel,
  emailForm,
  emailInput,
  submitButton,
} from "./selectors/domSelectors.js";

const formInputState = {
  email: false,
};

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

// Button event listener
forgotPasswordForm.addEventListener(
  "input",
  buttonHandler({
    formInputState,
    formLabel,
    submitButton,
  })
);
