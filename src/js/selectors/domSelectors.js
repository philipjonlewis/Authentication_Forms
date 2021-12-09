const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
const forgotPasswordForm = document.getElementById("forgot-password-form");

const editUsernameForm = document.getElementById("edit-username-form");

const editEmailForm = document.getElementById("edit-email-form");

const editPasswordForm = document.getElementById("edit-password-form");

const formLabel = document.querySelector(".form-label-container p");

const emailForm = document.getElementById("email-form-element");

const usernameForm = document.getElementById("username-form-element");

const currentPasswordForm = document.getElementById(
  "current-password-form-element"
);

const passwordForm = document.getElementById("password-form-element");

const passwordConfirmationForm = document.getElementById(
  "passwordConfirmation-form-element"
);

const emailInput = document.getElementById("email");

const usernameInput = document.getElementById("username");

const currentPasswordInput = document.getElementById("currentPassword");

const passwordInput = document.getElementById("password");

const passwordConfirmationInput = document.getElementById(
  "passwordConfirmation"
);

const errorContainer = document.getElementById("error-container");
const submitButton = document.querySelector("button");

export {
  signupForm,
  loginForm,
  forgotPasswordForm,
  editUsernameForm,
  editPasswordForm,
  currentPasswordForm,
  usernameForm,
  editEmailForm,
  formLabel,
  emailForm,
  passwordForm,
  passwordConfirmationForm,
  emailInput,
  currentPasswordInput,
  usernameInput,
  passwordInput,
  passwordConfirmationInput,
  errorContainer,
  submitButton,
};
