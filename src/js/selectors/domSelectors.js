const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
// const forgotPasswordForm;
// const editUsernameForm;
// const editPasswordForm;
// const editEmailForm;

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

export {
  signupForm,
  loginForm,
  formLabel,
  emailForm,
  passwordForm,
  passwordConfirmationForm,
  emailInput,
  passwordInput,
  passwordConfirmationInput,
  errorContainer,
  submitButton,
};
